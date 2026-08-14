(() => {
  'use strict';

  const APP_STORAGE_KEY = 'finance-mastery-state-v2';
  const COLOR_META = {
    yellow: { label: 'Important', symbol: '★' },
    red:    { label: 'Exam trap', symbol: '!' },
    green:  { label: 'Understood / example', symbol: '✓' },
    blue:   { label: 'Definition', symbol: 'A' }
  };

  let currentSelection = null;
  let toolbar = null;
  let modal = null;
  let bound = false;
  let pendingOpenId = null;

  function app(){ return window.App || null; }
  function state(){
    const a = app();
    if(!a) return { annotations: [], personalFlashcards: [], flashcards: {} };
    a.state.annotations = Array.isArray(a.state.annotations) ? a.state.annotations : [];
    a.state.personalFlashcards = Array.isArray(a.state.personalFlashcards) ? a.state.personalFlashcards : [];
    a.state.flashcards = a.state.flashcards || {};
    return a.state;
  }
  function data(){ return app()?.data || window.FINANCE_DATA || null; }
  function save(){
    const a = app(); if(!a) return;
    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(a.state));
    window.dispatchEvent(new CustomEvent('finance-annotations-updated'));
  }
  function esc(s=''){
    return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  }
  function uid(prefix='ann'){
    return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,9)}`;
  }
  function normalizeColor(c){ return c === 'rose' ? 'red' : (COLOR_META[c] ? c : 'yellow'); }
  function allAnnotations(){ return state().annotations || []; }
  function getPersonalFlashcards(){ return state().personalFlashcards || []; }
  function lessonAnnotations(lessonId){
    return allAnnotations().filter(a => a.lessonId === lessonId)
      .sort((a,b)=>new Date(a.createdAt||0)-new Date(b.createdAt||0));
  }

  function migrateLegacy(){
    const anns = allAnnotations(); let changed = false;
    anns.forEach(a => {
      if(!a.exact && a.text){ a.exact = a.text; changed = true; }
      if(!a.text && a.exact){ a.text = a.exact; changed = true; }
      if(a.highlight === 'rose'){ a.highlight = 'red'; changed = true; }
      if(a.highlight && !COLOR_META[a.highlight]){ a.highlight = 'yellow'; changed = true; }
      if(a.color && !a.highlight){ a.highlight = normalizeColor(a.color); changed = true; }
      if(a.note && !a.comment){ a.comment = a.note; changed = true; }
      if(!('prefix' in a)){ a.prefix = ''; changed = true; }
      if(!('suffix' in a)){ a.suffix = ''; changed = true; }
      if(!a.createdAt){ a.createdAt = new Date().toISOString(); changed = true; }
      if(!a.updatedAt){ a.updatedAt = a.createdAt; changed = true; }
    });
    if(changed) save();
  }

  function notify(msg){
    const old = document.querySelector('.fm-ann-toast'); if(old) old.remove();
    const el = document.createElement('div'); el.className = 'fm-ann-toast'; el.textContent = msg;
    document.body.appendChild(el); setTimeout(()=>el.remove(),1800);
  }

  function ensureUI(){
    if(toolbar && modal) return;
    toolbar = document.createElement('div');
    toolbar.id = 'financeAnnotationToolbar';
    toolbar.className = 'fm-annotation-toolbar';
    toolbar.setAttribute('role','toolbar');
    toolbar.setAttribute('aria-label','Text annotation tools');
    toolbar.innerHTML = `
      <button type="button" data-ann-action="highlight" title="Highlight selection"><span class="fm-ann-tool-icon">✦</span> Highlight</button>
      <button type="button" data-ann-action="note" title="Highlight and add a comment"><span class="fm-ann-tool-icon">✎</span> Comment</button>
      <button type="button" data-ann-action="flashcard" title="Turn selection into a personal flashcard"><span class="fm-ann-tool-icon">▣</span> Flashcard</button>
      <span class="fm-ann-divider"></span>
      ${Object.entries(COLOR_META).map(([key,m])=>`<button type="button" class="fm-ann-color fm-ann-color-${key}" data-ann-color="${key}" title="${esc(m.label)}" aria-label="${esc(m.label)}"></button>`).join('')}
    `;
    document.body.appendChild(toolbar);

    modal = document.createElement('div');
    modal.id = 'financeAnnotationModal';
    modal.className = 'fm-annotation-modal-shell';
    modal.setAttribute('aria-hidden','true');
    modal.innerHTML = `<div class="fm-annotation-modal-backdrop" data-ann-close></div><div class="fm-annotation-modal" role="dialog" aria-modal="true" aria-labelledby="fmAnnModalTitle"><button class="fm-annotation-modal-x" data-ann-close aria-label="Close">×</button><div id="fmAnnModalBody"></div></div>`;
    document.body.appendChild(modal);

    // This is essential: keep the browser selection alive while the toolbar is clicked.
    toolbar.addEventListener('mousedown', e => e.preventDefault());
    toolbar.addEventListener('click', e => {
      const color = e.target.closest('[data-ann-color]')?.dataset.annColor;
      if(color){ createFromCurrent(color, ''); return; }
      const action = e.target.closest('[data-ann-action]')?.dataset.annAction;
      if(action === 'highlight') createFromCurrent('yellow','');
      if(action === 'note') openCreateComment();
      if(action === 'flashcard') openFlashcardCreator();
    });
    modal.addEventListener('click', e => { if(e.target.closest('[data-ann-close]')) closeModal(); });
  }

  function hideToolbar(){ if(toolbar) toolbar.classList.remove('show'); }
  function positionToolbar(range){
    if(!toolbar) return;
    const rect = range.getBoundingClientRect();
    if(!rect || (!rect.width && !rect.height)) return;
    toolbar.classList.add('show');
    const w = toolbar.offsetWidth || 465;
    const h = toolbar.offsetHeight || 46;
    let left = rect.left + rect.width/2 - w/2;
    let top = rect.top - h - 10;
    left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
    if(top < 8) top = rect.bottom + 10;
    toolbar.style.left = `${left}px`;
    toolbar.style.top = `${top}px`;
  }

  const READABLE_BLOCKS = 'p,h2,h3,h4,li,td,.term-card,.theory-card,.study-step,.worked-prompt,.worked-answer,.callout,.formula-box,.support-chip,.deep-prose,.source-policy-mini';

  function selectionContext(){
    const sel = window.getSelection();
    if(!sel || sel.rangeCount === 0 || sel.isCollapsed) return null;
    const range = sel.getRangeAt(0);
    const text = range.toString();
    if(!text || text.trim().length < 2) return null;
    if(text.length > 1800){ notify('Select a shorter passage (under about 1,800 characters).'); return null; }

    const startEl = range.startContainer.nodeType === 1 ? range.startContainer : range.startContainer.parentElement;
    const endEl = range.endContainer.nodeType === 1 ? range.endContainer : range.endContainer.parentElement;
    const startLesson = startEl?.closest?.('.lesson-main');
    const endLesson = endEl?.closest?.('.lesson-main');
    if(!startLesson || startLesson !== endLesson) return null;

    const startSection = startEl?.closest?.('.annotatable[data-annotation-block]');
    const endSection = endEl?.closest?.('.annotatable[data-annotation-block]');
    if(!startSection || startSection !== endSection) return null;

    // Same readable block = stable highlighting and prevents wrapping entire layout containers.
    const startBlock = startEl?.closest?.(READABLE_BLOCKS);
    const endBlock = endEl?.closest?.(READABLE_BLOCKS);
    if(!startBlock || startBlock !== endBlock) return null;

    if(startEl.closest?.('.fm-annotation-toolbar,.fm-annotation-modal-shell') || endEl.closest?.('.fm-annotation-toolbar,.fm-annotation-modal-shell')) return null;
    if(startEl.closest?.('mark.fm-annotation') || endEl.closest?.('mark.fm-annotation')) return null;
    return { sel, range: range.cloneRange(), text, section: startSection };
  }

  function currentLessonId(){
    const raw = (location.hash || '').slice(1).split('?')[0];
    const parts = raw.split('/');
    return parts[0] === 'learn' ? parts[1] || '' : '';
  }

  function captureSelection(){
    const ctx = selectionContext();
    if(!ctx){ hideToolbar(); currentSelection = null; return; }
    const lessonId = currentLessonId(); if(!lessonId) return;
    const sectionText = ctx.section.textContent || '';
    const pre = document.createRange();
    pre.selectNodeContents(ctx.section);
    try { pre.setEnd(ctx.range.startContainer, ctx.range.startOffset); }
    catch { hideToolbar(); return; }
    const start = pre.toString().length;
    const end = start + ctx.range.toString().length;
    const lesson = data()?.lessons?.[lessonId];
    currentSelection = {
      range: ctx.range,
      lessonId,
      moduleId: lesson?.module || '',
      lessonTitle: lesson?.title || lessonId,
      blockId: ctx.section.dataset.annotationBlock || '',
      exact: ctx.range.toString(),
      text: ctx.range.toString().trim(),
      prefix: sectionText.slice(Math.max(0,start-56),start),
      suffix: sectionText.slice(end,end+56)
    };
    positionToolbar(ctx.range);
  }

  function colorChoices(selected='yellow'){
    return `<div class="fm-ann-color-choices">${Object.entries(COLOR_META).map(([key,m])=>`<label class="fm-ann-choice ${key===selected?'selected':''}"><input type="radio" name="fmAnnColor" value="${key}" ${key===selected?'checked':''}><span class="fm-ann-choice-dot fm-ann-bg-${key}"></span><span>${esc(m.label)}</span></label>`).join('')}</div>`;
  }
  function syncChoiceSelection(){
    document.querySelectorAll('#fmAnnModalBody .fm-ann-choice').forEach(x=>x.classList.toggle('selected',!!x.querySelector('input:checked')));
  }
  function openModal(html, afterOpen){
    ensureUI();
    document.getElementById('fmAnnModalBody').innerHTML = html;
    modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); hideToolbar();
    if(afterOpen) requestAnimationFrame(afterOpen);
  }
  function closeModal(){ if(!modal) return; modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); }

  function openCreateComment(){
    if(!currentSelection) return;
    openModal(`
      <div class="fm-ann-modal-kicker">NEW ANNOTATION</div>
      <h2 id="fmAnnModalTitle">Highlight + comment</h2>
      <blockquote class="fm-ann-quote">${esc(currentSelection.text)}</blockquote>
      <label class="fm-ann-field"><span>Your comment</span><textarea id="fmAnnNoteInput" rows="5" placeholder="Example: Exam trap — distinguish APR from EAR before comparing savings accounts."></textarea></label>
      <div class="fm-ann-field"><span>Highlight meaning</span>${colorChoices('yellow')}</div>
      <div class="fm-ann-modal-actions"><button class="btn" data-ann-close>Cancel</button><button class="btn primary" id="saveFmAnnotation">Save annotation</button></div>
    `,()=>document.getElementById('fmAnnNoteInput')?.focus());
    document.querySelectorAll('#fmAnnModalBody input[name="fmAnnColor"]').forEach(r=>r.onchange=syncChoiceSelection);
    document.getElementById('saveFmAnnotation').onclick=()=>{
      const note=document.getElementById('fmAnnNoteInput').value.trim();
      const color=document.querySelector('#fmAnnModalBody input[name="fmAnnColor"]:checked')?.value||'yellow';
      createFromCurrent(color,note); closeModal();
    };
  }

  function openFlashcardCreator(annotationId=null, cardId=null){
    const ann = annotationId ? allAnnotations().find(a=>a.id===annotationId) : null;
    const card = cardId ? getPersonalFlashcards().find(c=>c.id===cardId) : (ann?.flashcardId ? getPersonalFlashcards().find(c=>c.id===ann.flashcardId) : null);
    const source = ann ? {lessonId:ann.lessonId,moduleId:ann.moduleId,text:ann.text||ann.exact,lessonTitle:ann.lessonTitle} : currentSelection;
    if(!source && !card) return;
    const lessonId = source?.lessonId || card?.lessonId || '';
    const lesson = data()?.lessons?.[lessonId];
    openModal(`
      <div class="fm-ann-modal-kicker">PERSONAL FLASHCARD</div>
      <h2 id="fmAnnModalTitle">${card?'Edit':'Turn selection into'} a flashcard</h2>
      <label class="fm-ann-field"><span>Front</span><textarea id="fmFlashFront" rows="3">${esc(card?.front||source?.text||'')}</textarea></label>
      <label class="fm-ann-field"><span>Back / explanation</span><textarea id="fmFlashBack" rows="5" placeholder="Write the definition, formula logic, exam cue, or explanation in your own words.">${esc(card?.back||ann?.comment||'')}</textarea></label>
      <div class="fm-ann-editor-meta"><b>${esc(lesson?.title||source?.lessonTitle||'Personal study card')}</b><span>Personal card — not part of the academic source layer.</span></div>
      <div class="fm-ann-modal-actions"><button class="btn" data-ann-close>Cancel</button><button class="btn primary" id="saveFmFlash">${card?'Update':'Create'} flashcard</button></div>
    `,()=>document.getElementById('fmFlashBack')?.focus());
    document.getElementById('saveFmFlash').onclick=()=>saveFlashcard(annotationId,card?.id||'');
  }

  function saveFlashcard(annotationId='', cardId=''){
    const front=document.getElementById('fmFlashFront')?.value.trim()||'';
    const back=document.getElementById('fmFlashBack')?.value.trim()||'';
    if(!front||!back){ document.getElementById('fmFlashBack')?.focus(); return; }
    const st=state();
    const ann=annotationId?allAnnotations().find(a=>a.id===annotationId):null;
    const lessonId=ann?.lessonId||currentSelection?.lessonId||'';
    const lesson=data()?.lessons?.[lessonId];
    let card=cardId?st.personalFlashcards.find(c=>c.id===cardId):null;
    if(card){ card.front=front; card.back=back; card.updatedAt=new Date().toISOString(); }
    else {
      card={id:uid('pf'),front,back,vi:'',module:lesson?.module||'intro',lessonId,source:`Personal · ${lesson?.title||'Finance Mastery lesson'}`,personal:true,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
      st.personalFlashcards.push(card);
      if(ann){ ann.flashcardId=card.id; ann.updatedAt=new Date().toISOString(); }
    }
    save(); closeModal(); window.getSelection()?.removeAllRanges(); currentSelection=null; notify('Personal flashcard saved.');
    if(location.hash.startsWith('#flashcards')) app()?.render();
  }

  function createFromCurrent(color='yellow', comment=''){
    if(!currentSelection) return;
    const now=new Date().toISOString();
    const ann={
      id:uid('ann'),
      lessonId:currentSelection.lessonId,
      moduleId:currentSelection.moduleId,
      lessonTitle:currentSelection.lessonTitle,
      blockId:currentSelection.blockId,
      exact:currentSelection.exact,
      text:currentSelection.text,
      prefix:currentSelection.prefix,
      suffix:currentSelection.suffix,
      highlight:normalizeColor(color),
      comment:comment||'',
      flashcardId:null,
      createdAt:now,
      updatedAt:now
    };
    state().annotations.push(ann); save();
    applyOne(ann);
    window.getSelection()?.removeAllRanges(); currentSelection=null; hideToolbar(); refreshLessonPanel();
    notify(comment?'Highlight + comment saved.':'Highlight saved.');
  }

  function textNodes(container){
    const out=[];
    const walker=document.createTreeWalker(container,NodeFilter.SHOW_TEXT,{acceptNode(node){
      if(!node.nodeValue) return NodeFilter.FILTER_REJECT;
      const p=node.parentElement;
      if(!p || p.closest('script,style,.fm-annotation-toolbar,.fm-annotation-modal-shell')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    let n; while((n=walker.nextNode())) out.push(n); return out;
  }
  function mapText(container){
    const nodes=textNodes(container); let pos=0;
    const mapped=nodes.map(node=>{const start=pos,end=pos+node.nodeValue.length;pos=end;return {node,start,end};});
    return {text:nodes.map(n=>n.nodeValue).join(''),mapped};
  }
  function occurrenceIndices(hay,needle){ const arr=[]; if(!needle)return arr; let i=hay.indexOf(needle); while(i!==-1){arr.push(i);i=hay.indexOf(needle,i+1);} return arr; }
  function quoteScore(text,index,ann){
    let score=0;
    if(ann.prefix){const before=text.slice(Math.max(0,index-ann.prefix.length),index);let common=0;for(let i=1;i<=Math.min(before.length,ann.prefix.length);i++){if(before.slice(-i)===ann.prefix.slice(-i))common=i;}score+=common;}
    const afterStart=index+(ann.exact||ann.text||'').length;
    if(ann.suffix){const after=text.slice(afterStart,afterStart+ann.suffix.length);let common=0;for(let i=1;i<=Math.min(after.length,ann.suffix.length);i++){if(after.slice(0,i)===ann.suffix.slice(0,i))common=i;}score+=common;}
    return score;
  }
  function findQuote(container,ann){
    const exact=ann.exact||ann.text||''; if(!exact)return null;
    const {text,mapped}=mapText(container);
    let needle=exact;
    let indexes=occurrenceIndices(text,needle);
    if(!indexes.length && ann.text && ann.text!==exact){ needle=ann.text; indexes=occurrenceIndices(text,needle); }
    if(!indexes.length) return null;
    indexes.sort((a,b)=>quoteScore(text,b,ann)-quoteScore(text,a,ann));
    const start=indexes[0], end=start+needle.length;
    let s=null,e=null;
    for(const m of mapped){
      if(!s && start>=m.start && start<=m.end) s={node:m.node,offset:Math.max(0,start-m.start)};
      if(end>=m.start && end<=m.end){e={node:m.node,offset:Math.max(0,end-m.start)};break;}
    }
    if(!s||!e)return null;
    const range=document.createRange();
    try{range.setStart(s.node,Math.min(s.offset,s.node.nodeValue.length));range.setEnd(e.node,Math.min(e.offset,e.node.nodeValue.length));}catch{return null;}
    return range;
  }
  function selectedSegments(container,range){
    return textNodes(container).filter(n=>{try{return range.intersectsNode(n);}catch{return false;}}).map(node=>{
      let start=0,end=node.nodeValue.length;
      if(node===range.startContainer)start=range.startOffset;
      if(node===range.endContainer)end=range.endOffset;
      return {node,start,end};
    }).filter(x=>x.end>x.start);
  }
  function wrapSegments(container,range,ann){
    const segments=selectedSegments(container,range); if(!segments.length)return false;
    if(segments.some(s=>s.node.parentElement?.closest('mark.fm-annotation')))return false;
    for(let i=segments.length-1;i>=0;i--){
      const {node,start,end}=segments[i]; if(!node.isConnected)continue;
      const selected=node.splitText(start); selected.splitText(end-start);
      const mark=document.createElement('mark');
      mark.className=`fm-annotation fm-ann-bg-${normalizeColor(ann.highlight)}`;
      mark.dataset.annId=ann.id;
      mark.title=ann.comment?`Comment: ${ann.comment}`:`${COLOR_META[normalizeColor(ann.highlight)]?.label||'Highlight'} — click to edit`;
      selected.parentNode.insertBefore(mark,selected); mark.appendChild(selected);
    }
    return true;
  }
  function findSection(ann){
    return document.querySelector(`.lesson-main .annotatable[data-annotation-block="${CSS.escape(ann.blockId||'')}"]`) || document.querySelector('.lesson-main');
  }
  function applyOne(ann){
    const section=findSection(ann); if(!section)return false;
    if(section.querySelector(`mark.fm-annotation[data-ann-id="${CSS.escape(ann.id)}"]`))return true;
    const range=findQuote(section,ann); if(!range)return false;
    return wrapSegments(section,range,ann);
  }
  function applyLesson(lessonId){
    lessonAnnotations(lessonId).forEach(a=>applyOne(a));
  }
  function unwrapAnnotation(id){
    document.querySelectorAll(`mark.fm-annotation[data-ann-id="${CSS.escape(id)}"]`).forEach(mark=>{
      const p=mark.parentNode; while(mark.firstChild)p.insertBefore(mark.firstChild,mark); mark.remove(); p?.normalize();
    });
  }

  function openEditorModal(id){
    const ann=allAnnotations().find(a=>a.id===id); if(!ann)return;
    openModal(`
      <div class="fm-ann-modal-kicker">EDIT ANNOTATION</div>
      <h2 id="fmAnnModalTitle">${esc(ann.lessonTitle||'Theory note')}</h2>
      <blockquote class="fm-ann-quote">${esc((ann.text||ann.exact||'').trim())}</blockquote>
      <label class="fm-ann-field"><span>Your comment</span><textarea id="fmAnnEditNote" rows="5" placeholder="Add your own explanation, exam warning, or memory hook.">${esc(ann.comment||'')}</textarea></label>
      <div class="fm-ann-field"><span>Highlight meaning</span>${colorChoices(normalizeColor(ann.highlight))}</div>
      <div class="fm-ann-editor-meta"><b>${esc(ann.lessonTitle||ann.lessonId)}</b><span>${esc(data()?.modules?.find(m=>m.id===ann.moduleId)?.name||'Finance Mastery')}</span></div>
      <div class="fm-ann-modal-actions fm-ann-split"><button class="btn danger" id="deleteFmAnn">Delete</button><button class="btn" id="flashFmAnn">Make flashcard</button><span></span><button class="btn" data-ann-close>Cancel</button><button class="btn primary" id="updateFmAnn">Save changes</button></div>
    `,()=>document.getElementById('fmAnnEditNote')?.focus());
    document.querySelectorAll('#fmAnnModalBody input[name="fmAnnColor"]').forEach(r=>r.onchange=syncChoiceSelection);
    document.getElementById('deleteFmAnn').onclick=()=>{if(confirm('Delete this highlight and comment?')){closeModal();deleteAnnotation(id);}};
    document.getElementById('flashFmAnn').onclick=()=>openFlashcardCreator(id,ann.flashcardId||null);
    document.getElementById('updateFmAnn').onclick=()=>{
      const a=allAnnotations().find(x=>x.id===id);if(!a)return;
      a.comment=document.getElementById('fmAnnEditNote').value.trim();
      a.highlight=document.querySelector('#fmAnnModalBody input[name="fmAnnColor"]:checked')?.value||'yellow';
      a.updatedAt=new Date().toISOString(); save();
      document.querySelectorAll(`mark.fm-annotation[data-ann-id="${CSS.escape(id)}"]`).forEach(m=>{m.className=`fm-annotation fm-ann-bg-${normalizeColor(a.highlight)}`;m.title=a.comment?`Comment: ${a.comment}`:`${COLOR_META[normalizeColor(a.highlight)].label} — click to edit`;});
      closeModal();refreshLessonPanel();notify('Annotation updated.');
      if(location.hash.startsWith('#notes')) app()?.render();
    };
  }

  function deleteAnnotation(id){
    const st=state(); const ann=st.annotations.find(a=>a.id===id); if(!ann)return;
    st.annotations=st.annotations.filter(a=>a.id!==id); save(); unwrapAnnotation(id); refreshLessonPanel(); notify('Annotation deleted.');
    if(location.hash.startsWith('#notes')) app()?.render();
  }

  function editPersonalFlashcard(id){ openFlashcardCreator(null,id); }
  function deletePersonalFlashcard(id){
    if(!confirm('Delete this personal flashcard?'))return;
    const st=state(); st.personalFlashcards=st.personalFlashcards.filter(c=>c.id!==id); delete st.flashcards[id];
    st.annotations.forEach(a=>{if(a.flashcardId===id)a.flashcardId=null;}); save(); notify('Personal flashcard deleted.'); app()?.render();
  }

  function renderLessonPanel(lessonId){
    const anns=lessonAnnotations(lessonId);
    return `<div class="fm-lesson-notes-card"><div class="fm-lesson-notes-head"><div><span class="kicker">MY ANNOTATIONS</span><h3>${anns.length} in this lesson</h3></div><button class="btn sm" onclick="App.go('notes')">View all</button></div>${anns.length?`<div class="fm-lesson-note-list">${anns.slice(0,5).map(a=>`<button class="fm-lesson-note-item" onclick="FinanceAnnotations.openInLesson('${a.id}')"><span class="fm-ann-choice-dot fm-ann-bg-${normalizeColor(a.highlight)}"></span><span><b>${esc((a.text||a.exact||'').trim().slice(0,68))}${(a.text||a.exact||'').trim().length>68?'…':''}</b><small>${esc(a.comment||COLOR_META[normalizeColor(a.highlight)].label)}</small></span></button>`).join('')}</div>${anns.length>5?`<button class="fm-lesson-more" onclick="App.go('notes')">+ ${anns.length-5} more annotations</button>`:''}`:`<p class="fm-lesson-notes-empty">Select a phrase or sentence in the theory. The study toolbar will appear automatically.</p>`}<div class="fm-annotation-legend">${Object.entries(COLOR_META).map(([k,m])=>`<span><i class="fm-ann-choice-dot fm-ann-bg-${k}"></i>${esc(m.label)}</span>`).join('')}</div></div>`;
  }
  function refreshLessonPanel(){
    const lessonId=currentLessonId(); const host=document.getElementById('lessonAnnotationPanel');
    if(host&&lessonId)host.innerHTML=renderLessonPanel(lessonId);
  }

  function formatDate(ts){ try{return new Intl.DateTimeFormat(undefined,{year:'numeric',month:'short',day:'numeric'}).format(new Date(ts));}catch{return '';} }

  function renderNotesPage(){
    const anns=[...allAnnotations()].sort((a,b)=>new Date(b.updatedAt||b.createdAt)-new Date(a.updatedAt||a.createdAt));
    const personal=[...getPersonalFlashcards()].sort((a,b)=>new Date(b.updatedAt||b.createdAt)-new Date(a.updatedAt||a.createdAt));
    const modules=data()?.modules||[];
    const comments=anns.filter(a=>a.comment).length;
    return `<div class="page-head"><div><div class="eyebrow">Personal study layer</div><h1>My Notes & Highlights</h1><p class="lead">This works like the annotation layer in your Accounting Mastery site: select theory text, then highlight, comment, or turn it into a personal flashcard. Highlights are anchored by the selected quote plus nearby text so they can survive small lesson edits.</p></div><div class="action-row"><button class="btn" onclick="FinanceAnnotations.exportBackup()">Export backup</button><button class="btn" onclick="FinanceAnnotations.triggerImport()">Import backup</button></div></div>
      <div class="fm-notes-stats"><div><strong>${anns.length}</strong><span>highlights</span></div><div><strong>${comments}</strong><span>with comments</span></div><div><strong>${personal.length}</strong><span>personal flashcards</span></div></div>
      <div class="fm-notes-toolbar"><input id="fmNotesSearch" class="field" placeholder="Search selected text, comments, lesson, or module…" oninput="FinanceAnnotations.filterNotes()"><select id="fmNotesModule" class="select" onchange="FinanceAnnotations.filterNotes()"><option value="all">All modules</option>${modules.map(m=>`<option value="${m.id}">${m.order}. ${esc(m.name)}</option>`).join('')}</select><select id="fmNotesColor" class="select" onchange="FinanceAnnotations.filterNotes()"><option value="all">All highlight types</option>${Object.entries(COLOR_META).map(([k,m])=>`<option value="${k}">${esc(m.label)}</option>`).join('')}</select></div>
      <div class="fm-annotation-legend fm-notes-legend">${Object.entries(COLOR_META).map(([k,m])=>`<span><i class="fm-ann-choice-dot fm-ann-bg-${k}"></i>${esc(m.label)}</span>`).join('')}</div>
      <section class="section"><div class="section-head"><div><div class="eyebrow">Annotations</div><h2>Saved theory passages</h2></div></div><div id="fmNotesList" class="fm-notes-list">${anns.length?anns.map(a=>noteCard(a)).join(''):`<div class="card empty"><h2>No annotations yet</h2><p>Open any lesson, drag across a phrase or sentence, and use the floating toolbar.</p><button class="btn primary" onclick="App.go('learn/${app()?.state?.lastLesson||'defining-finance'}')">Open last lesson</button></div>`}</div></section>
      <section class="section"><div class="section-head"><div><div class="eyebrow">Personal flashcards</div><h2>Created from your selections</h2></div><button class="btn sm" onclick="App.go('flashcards');App.setFlashFilter('personal')">Study personal cards</button></div>${personal.length?`<div class="grid grid-2">${personal.map(personalCard).join('')}</div>`:`<div class="card empty small">No personal flashcards yet. Select theory text and choose “Flashcard”.</div>`}</section>`;
  }
  function noteCard(a){
    const lesson=data()?.lessons?.[a.lessonId]; const moduleId=a.moduleId||lesson?.module||'';
    return `<article class="fm-note-card" data-note-search="${esc([a.text,a.comment,lesson?.title,data()?.modules?.find(m=>m.id===moduleId)?.name].join(' ').toLowerCase())}" data-note-module="${esc(moduleId)}" data-note-color="${normalizeColor(a.highlight)}"><div class="fm-note-card-bar fm-ann-solid-${normalizeColor(a.highlight)}"></div><div class="fm-note-card-main"><div class="fm-note-card-meta"><span class="badge">${esc(data()?.modules?.find(m=>m.id===moduleId)?.name||moduleId||'Finance')}</span><span>${esc(lesson?.title||a.lessonTitle||a.lessonId)}</span><span>${esc(formatDate(a.updatedAt||a.createdAt))}</span></div><blockquote>${esc((a.text||a.exact||'').trim())}</blockquote>${a.comment?`<div class="fm-note-comment"><b>My comment</b><p>${esc(a.comment)}</p></div>`:`<div class="fm-note-comment muted">No comment attached — highlight only.</div>`}<div class="fm-note-card-actions"><button class="btn sm primary" onclick="FinanceAnnotations.openInLesson('${a.id}')">Open in theory</button><button class="btn sm" onclick="FinanceAnnotations.openEditorModal('${a.id}')">Edit</button><button class="btn sm" onclick="FinanceAnnotations.makeFlashcard('${a.id}')">Make flashcard</button><button class="btn sm danger" onclick="FinanceAnnotations.deleteAnnotation('${a.id}')">Delete</button></div></div></article>`;
  }
  function personalCard(c){
    return `<article class="card personal-card"><div class="annotation-card-head"><span class="badge personal-badge">PERSONAL FLASHCARD</span><span class="small muted">${esc(formatDate(c.updatedAt||c.createdAt))}</span></div><h3>${esc(c.front)}</h3><p class="muted">${esc(c.back)}</p><div class="small muted">${esc(c.source||'Personal')}</div><div class="practice-controls"><button class="btn sm primary" onclick="App.go('flashcards');App.setFlashFilter('personal')">Study card</button><button class="btn sm" onclick="FinanceAnnotations.editPersonalFlashcard('${c.id}')">Edit</button><button class="btn sm danger" onclick="FinanceAnnotations.deletePersonalFlashcard('${c.id}')">Delete</button></div></article>`;
  }
  function filterNotes(){
    const term=(document.getElementById('fmNotesSearch')?.value||'').toLowerCase().trim();
    const module=document.getElementById('fmNotesModule')?.value||'all';
    const color=document.getElementById('fmNotesColor')?.value||'all';
    document.querySelectorAll('.fm-note-card').forEach(el=>{
      const show=(!term||String(el.dataset.noteSearch||'').includes(term))&&(module==='all'||el.dataset.noteModule===module)&&(color==='all'||el.dataset.noteColor===color);
      el.style.display=show?'':'none';
    });
  }

  function exportBackup(){
    const st=state();
    const payload={format:'finance-mastery-personal-study-v2',exportedAt:new Date().toISOString(),annotations:st.annotations||[],personalFlashcards:st.personalFlashcards||[],personalReviews:Object.fromEntries(Object.entries(st.flashcards||{}).filter(([id])=>(st.personalFlashcards||[]).some(c=>c.id===id)))};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`finance-mastery-notes-${new Date().toISOString().slice(0,10)}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),400);notify('Annotation backup exported.');
  }
  function triggerImport(){
    const input=document.createElement('input');input.type='file';input.accept='.json,application/json';input.onchange=()=>importBackup(input.files?.[0]);input.click();
  }
  async function importBackup(file){
    if(!file)return;
    try{
      const payload=JSON.parse(await file.text());
      if(!['finance-mastery-personal-study-v1','finance-mastery-personal-study-v2'].includes(payload.format))throw new Error('unsupported');
      const st=state();const merge=(a,b)=>{const m=new Map((a||[]).map(x=>[x.id,x]));(b||[]).forEach(x=>m.set(x.id,x));return [...m.values()];};
      st.annotations=merge(st.annotations,payload.annotations);st.personalFlashcards=merge(st.personalFlashcards,payload.personalFlashcards);st.flashcards={...st.flashcards,...(payload.personalReviews||{})};save();migrateLegacy();notify('Study notes imported.');app()?.render();
    }catch{notify('Could not import this backup file.');}
  }

  function openInLesson(id){
    const ann=allAnnotations().find(a=>a.id===id);if(!ann)return;
    pendingOpenId=id;
    if(currentLessonId()===ann.lessonId){afterRender({page:'learn',arg:ann.lessonId});scrollToPending();}
    else app()?.go(`learn/${ann.lessonId}`);
  }
  function scrollToPending(){
    if(!pendingOpenId)return;
    const id=pendingOpenId;
    requestAnimationFrame(()=>setTimeout(()=>{
      const mark=document.querySelector(`mark.fm-annotation[data-ann-id="${CSS.escape(id)}"]`);
      if(mark){mark.scrollIntoView({behavior:'smooth',block:'center'});mark.classList.add('fm-ann-pulse');setTimeout(()=>mark.classList.remove('fm-ann-pulse'),1600);pendingOpenId=null;}
    },60));
  }

  function afterRender(route){
    ensureUI(); migrateLegacy(); hideToolbar(); currentSelection=null;
    if(route?.page==='learn'&&route.arg){ applyLesson(route.arg); refreshLessonPanel(); scrollToPending(); }
  }

  function bindGlobal(){
    if(bound)return;bound=true;ensureUI();
    document.addEventListener('mouseup',e=>{if(e.target.closest('.fm-annotation-toolbar,.fm-annotation-modal-shell'))return;setTimeout(captureSelection,0);});
    document.addEventListener('keyup',e=>{if(e.key==='Shift'||e.key.startsWith('Arrow'))setTimeout(captureSelection,0);if(e.key==='Escape'){hideToolbar();closeModal();}});
    document.addEventListener('touchend',e=>{if(e.target.closest('.fm-annotation-toolbar,.fm-annotation-modal-shell'))return;setTimeout(captureSelection,120);},{passive:true});
    document.addEventListener('mousedown',e=>{if(!e.target.closest('.fm-annotation-toolbar')&&!e.target.closest('.fm-annotation-modal-shell')&&!e.target.closest('mark.fm-annotation'))hideToolbar();});
    document.addEventListener('click',e=>{const mark=e.target.closest('mark.fm-annotation');if(mark){e.preventDefault();openEditorModal(mark.dataset.annId);}});
    window.addEventListener('scroll',hideToolbar,{passive:true});
    window.addEventListener('resize',hideToolbar,{passive:true});
  }

  bindGlobal();
  window.FinanceAnnotations={afterRender,renderLessonPanel,renderNotesPage,filterNotes,openEditorModal,openInLesson,deleteAnnotation,makeFlashcard:(id)=>openFlashcardCreator(id),editPersonalFlashcard,deletePersonalFlashcard,exportBackup,triggerImport,getPersonalFlashcards,allAnnotations};
})();

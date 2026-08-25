"use strict";

const App = (() => {
  const D = window.FM_DATA;
  const LS = {
    get(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
    set(key,val){ localStorage.setItem(key,JSON.stringify(val)); }
  };
  const state = {
    attempts: LS.get('fm_attempts', []),
    completed: LS.get('fm_completed', []),
    mistakes: LS.get('fm_mistakes', []),
    saved: LS.get('fm_saved', []),
    flashcards: LS.get('fm_flashcards', []),
    reviews: LS.get('fm_flash_reviews', {}),
    selfChecks: LS.get('fm_self_checks', {}),
    settings: LS.get('fm_settings', {fontScale:100,compact:false}),
    practice: {pool:[], index:0, answered:false},
    exam: null,
    search: ''
  };
  const MASCOTS = Object.freeze({
    flower: 'assets/fly-flower.png',
    heart: 'assets/fly-heart.png',
    neutral: 'assets/fly-neutral.png',
    angry: 'assets/fly-angry.png',
    mustache: 'assets/fly-mustache.png',
    sideeye: 'assets/fly-sideeye.png'
  });
  const app = document.getElementById('app');
  const toast = document.getElementById('toast');
  const noteDialog = document.getElementById('noteDialog');
  const globalSearchDialog = document.getElementById('globalSearchDialog');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const globalSearchResults = document.getElementById('globalSearchResults');
  let noteEditorCtx = null;
  let annotationFocusId = null;

  function persist(){
    LS.set('fm_attempts',state.attempts); LS.set('fm_completed',state.completed); LS.set('fm_mistakes',state.mistakes);
    LS.set('fm_saved',state.saved); LS.set('fm_flashcards',state.flashcards); LS.set('fm_flash_reviews',state.reviews); LS.set('fm_self_checks',state.selfChecks); LS.set('fm_settings',state.settings);
  }
  function showToast(msg){ toast.textContent=msg; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),1800); }
  function esc(s=''){ return String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m])); }
  function mathBlock(latex=''){ return `<div class="math-display" data-latex="${esc(latex)}">\\[${latex}\\]</div>`; }
  function typesetMath(root=app){
    if(!root)return;
    const run=()=>window.MathJax?.typesetPromise ? window.MathJax.typesetPromise([root]).catch(()=>{}) : null;
    if(window.MathJax?.typesetPromise) run();
    else window.addEventListener('load',run,{once:true});
  }
  function lessonEnhancement(mid,lid){ return D.lessonEnhancements?.[`${mid}/${lid}`] || null; }
  function formulaDetail(name){ return D.formulaDetails?.[name] || null; }
  function formulaPanel(name,compact=false){
    const d=formulaDetail(name);
    const fallback=D.formulas?.find(f=>f[0]===name);
    if(!d&&!fallback)return '';
    const latex=d?.latex || fallback?.[1] || '';
    const variables=d?.variables || [];
    return `<article class="lesson-formula-card ${compact?'compact-formula':''}">
      <div class="formula-card-head"><span>FORMULA</span><h3>${esc(name)}</h3></div>
      ${mathBlock(latex)}
      ${variables.length?`<div class="formula-variables">${variables.map(v=>`<div><b>${esc(v[0])}</b><span>${esc(v[1])}</span></div>`).join('')}</div>`:''}
      ${d?.useWhen?`<div class="formula-guidance"><b>Use when</b><p>${esc(d.useWhen)}</p></div>`:''}
      ${d?.trap?`<div class="formula-trap"><b>Exam trap</b><p>${esc(d.trap)}</p></div>`:''}
    </article>`;
  }
  function exampleCard(ex,index){
    return `<article class="applied-example">
      <div class="example-number">${String(index+1).padStart(2,'0')}</div>
      <div class="example-content">
        <span class="block-label">REAL-WORLD APPLICATION</span>
        <h3>${esc(ex.title||`Applied example ${index+1}`)}</h3>
        ${ex.scenario?`<div class="example-scenario"><b>Scenario</b><p>${esc(ex.scenario)}</p></div>`:''}
        ${ex.steps?.length?`<ol class="solution-steps">${ex.steps.map((step,i)=>`<li><span>${i+1}</span><p>${esc(step)}</p></li>`).join('')}</ol>`:''}
        ${ex.result?`<div class="example-result"><span>Result</span><strong>${esc(ex.result)}</strong></div>`:''}
        ${ex.takeaway?`<div class="example-takeaway"><b>Why it matters</b><p>${esc(ex.takeaway)}</p></div>`:''}
      </div>
    </article>`;
  }
  function selfCheckModel(section,lessonKey,index){
    const paragraphs=section.paragraphs||[], bullets=section.bullets||[];
    return {
      answer:D.sectionAnswers?.[lessonKey]?.[index]||section.answer||paragraphs[paragraphs.length-1]||paragraphs[0]||'Use the section logic above to state the rule, explain the mechanism, and apply it to the situation.',
      points:bullets.slice(0,4)
    };
  }
  function sectionTermSupport(terms=[],index=0){
    if(!terms.length)return '';
    const start=index*2;
    let chosen=terms.slice(start,start+2);
    if(!chosen.length)chosen=terms.slice(Math.max(0,terms.length-2));
    return `<aside class="section-term-support"><span>KEY TERMS · TIẾNG VIỆT</span>${chosen.map(t=>`<div><b>${esc(t[0])}</b><small>${esc(t[1])}</small></div>`).join('')}</aside>`;
  }
  function sectionSelfCheck(section,index,lessonKey){
    if(!section.check)return '';
    const checkKey=`${lessonKey}/section-${index+1}`, saved=state.selfChecks[checkKey]||{}, model=selfCheckModel(section,lessonKey,index);
    return `<section class="section-self-check" data-self-check="${esc(checkKey)}">
      <div class="self-check-head"><div><span>SELF-CHECK ${String(index+1).padStart(2,'0')} · ACTIVE RECALL</span><h4>Answer before revealing the guide</h4></div><b>2–3 min</b></div>
      <p class="self-check-question">${esc(section.check)}</p>
      <label class="self-check-response"><span>Your answer / Câu trả lời của bạn</span><textarea data-self-input="${esc(checkKey)}" rows="4" placeholder="State the rule, explain why, then apply it…">${esc(saved.answer||'')}</textarea></label>
      <div class="self-check-actions"><button class="outline-btn" type="button" data-self-reveal="${esc(checkKey)}">Reveal guided answer</button><span>How clear is this?</span><button class="confidence-btn ${saved.confidence==='review'?'active':''}" type="button" data-self-confidence="review" data-self-key="${esc(checkKey)}">Review</button><button class="confidence-btn ${saved.confidence==='clear'?'active':''}" type="button" data-self-confidence="clear" data-self-key="${esc(checkKey)}">Clear</button></div>
      <div class="self-check-model" data-self-model="${esc(checkKey)}" hidden><span>GUIDED ANSWER · HƯỚNG DẪN</span><p>${esc(model.answer)}</p>${model.points.length?`<div class="model-checklist"><b>A strong answer should include:</b><ul>${model.points.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}<div class="reasoning-path"><b>Reasoning path</b><ol><li>State the governing concept.</li><li>Connect timing, risk, rate or classification to that concept.</li><li>Conclude in the language of the question.</li></ol></div></div>
    </section>`;
  }
  function deepDivePanel(sections=[],terms=[],lessonKey=''){
    if(!sections.length)return '';
    return `<section class="theory-block deep-dive-section">
      <span class="block-label">CONCEPTUAL DEEP DIVE</span>
      <h2>Understand the mechanism, not only the definition</h2>
      <p class="section-intro">Each part answers a different question: what the concept means, why it works, how to apply it, and where the reasoning can fail.</p>
      <div class="deep-dive-grid">${sections.map((s,i)=>`<article class="deep-dive-card">
        <div class="deep-dive-card-head"><span>${String(i+1).padStart(2,'0')}</span><div><small>${esc(s.kicker||'Core reasoning')}</small><h3>${esc(s.title)}</h3></div></div>
        <div class="deep-learning-layout"><div class="deep-learning-copy">${(s.paragraphs||[]).map(p=>`<p>${esc(p)}</p>`).join('')}
        ${s.bullets?.length?`<ul>${s.bullets.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}</div>${sectionTermSupport(terms,i)}</div>
        ${sectionSelfCheck(s,i,lessonKey)}
      </article>`).join('')}</div>
    </section>`;
  }
  function timelinePanel(timelines=[]){
    if(!timelines.length)return '';
    return `<section class="theory-block timeline-section">
      <span class="block-label">VISUAL TIMELINE</span>
      <h2>Place every cash flow or event before calculating</h2>
      <p class="section-intro">The layouts are deliberately broken into readable rows. Read left to right inside a row, then continue on the next row.</p>
      <div class="timeline-stack">${timelines.map(t=>`<article class="finance-timeline">
        <div class="timeline-title"><div><small>${esc(t.kicker||'Cash-flow map')}</small><h3>${esc(t.title)}</h3></div>${t.perspective?`<span>${esc(t.perspective)}</span>`:''}</div>
        ${t.intro?`<p class="timeline-intro">${esc(t.intro)}</p>`:''}
        ${(t.rows||[]).map((row,ri)=>`<div class="timeline-row"><div class="timeline-row-label"><span>ROW ${ri+1}</span><b>${esc(row.label||'Sequence')}</b></div><div class="timeline-events">${(row.events||[]).map((e,ei)=>`<div class="timeline-event ${esc(e.kind||'neutral')}">
          <span class="timeline-time">${esc(e.time)}</span><i aria-hidden="true"></i><strong>${esc(e.cash||e.label||'')}</strong>${e.note?`<p>${esc(e.note)}</p>`:''}
        </div>`).join('')}</div></div>`).join('')}
        ${t.steps?.length?`<ol class="process-timeline">${t.steps.map((s,i)=>`<li><span>${i+1}</span><div><b>${esc(s.title)}</b><p>${esc(s.note)}</p></div></li>`).join('')}</ol>`:''}
        ${t.caption?`<div class="timeline-caption"><b>How to read it</b><p>${esc(t.caption)}</p></div>`:''}
      </article>`).join('')}</div>
    </section>`;
  }
  function sourceCorrectionPanel(items=[]){
    if(!items.length)return '';
    return `<section class="theory-block correction-section"><span class="block-label">SOURCE CLARIFICATIONS</span><h2>Important precision and corrections</h2><div class="correction-list">${items.map(x=>`<article><span>!</span><div><h3>${esc(x.title)}</h3><p>${esc(x.body)}</p></div></article>`).join('')}</div></section>`;
  }
  function guidedPracticePanel(items=[]){
    if(!items.length)return '';
    const rank={Easy:1,Intermediate:2,Advanced:3};
    return `<section class="theory-block guided-practice-section">
      <span class="block-label">GUIDED PRACTICE</span>
      <h2>Build from recognition to exam-level reasoning</h2>
      <p class="section-intro">Try each problem before opening the solution. The hint tells you how to start; the solution shows the reasoning sequence, not just the final answer.</p>
      <div class="guided-practice-list">${items.map((p,i)=>`<details class="guided-problem level-${(p.level||'Easy').toLowerCase()}">
        <summary><div class="problem-index">${String(i+1).padStart(2,'0')}</div><div><span class="difficulty-pill"><i>${'●'.repeat(rank[p.level]||1)}</i>${esc(p.level||'Easy')}</span><h3>${esc(p.title||`Practice ${i+1}`)}</h3><p>${esc(p.prompt)}</p></div><b class="solution-toggle">View guidance + solution</b></summary>
        <div class="guided-solution">
          ${p.hint?`<div class="solution-hint"><b>How to start</b><p>${esc(p.hint)}</p></div>`:''}
          ${p.steps?.length?`<ol>${p.steps.map((s,j)=>`<li><span>${j+1}</span><p>${esc(s)}</p></li>`).join('')}</ol>`:''}
          ${p.answer?`<div class="solution-answer"><span>Final answer</span><strong>${esc(p.answer)}</strong></div>`:''}
          ${p.why?`<div class="solution-why"><b>Why this method works</b><p>${esc(p.why)}</p></div>`:''}
        </div>
      </details>`).join('')}</div>
    </section>`;
  }
  function lessonCheckpointQuestion(mid,lid,sections=[]){
    const exact=(D.questions||[]).filter(q=>q.module===mid&&q.lesson===lid);
    const pool=exact.length?exact:(D.questions||[]).filter(q=>q.module===mid);
    if(!pool.length)return null;
    const tokens=[...(sections||[]).flatMap(s=>[s.title,s.check,...(s.bullets||[])]),lesson(mid,lid)?.title||'']
      .join(' ').toLowerCase().match(/[a-z]{4,}/g)||[];
    return pool.map((q,i)=>{
      const haystack=`${q.question} ${q.explanation} ${q.topic||''}`.toLowerCase();
      return {q,i,score:tokens.reduce((sum,t)=>sum+(haystack.includes(t)?1:0),0)};
    }).sort((a,b)=>b.score-a.score||a.i-b.i)[0]?.q||pool[0];
  }
  function inlineKnowledgeCheck(q){
    if(!q)return '';
    return `<section class="theory-block inline-knowledge-wrap"><div class="inline-knowledge" data-inline-quiz="${esc(q.id)}">
      <div class="inline-knowledge-head"><div><span class="block-label">KNOWLEDGE CHECK · 1 MINUTE</span><h2>Can you apply the lesson immediately?</h2></div><span class="knowledge-topic">${esc(q.topic||q.difficulty||'Application')}</span></div>
      <p class="inline-knowledge-question">${esc(q.question)}</p>
      <div class="inline-knowledge-options">${q.options.map((o,i)=>`<button type="button" data-inline-answer="${i}"><b>${String.fromCharCode(65+i)}</b><span>${esc(o)}</span></button>`).join('')}</div>
      <div class="inline-knowledge-feedback" aria-live="polite"></div>
    </div></section>`;
  }
  function distractorExplanation(q,index){
    if(index===q.answer)return `Correct. ${q.explanation}`;
    const option=String(q.options[index]||''), correct=String(q.options[q.answer]||'');
    const numeric=/[-+]?\d[\d,.]*%?/.test(option);
    if(numeric)return `This value is not consistent with the required timing, rate convention, sign, or denominator. Rebuild the setup before calculating; the consistent result or rule is “${correct}”. ${q.explanation}`;
    if(/always|never|only|guarantee/i.test(option))return `The absolute wording is too strong for this finance relationship. Check the conditions and exceptions. The defensible conclusion is “${correct}”. ${q.explanation}`;
    return `This choice does not follow the governing classification, cash-flow timing, risk relationship, or valuation rule. Compare it with “${correct}”. ${q.explanation}`;
  }
  function mod(id){ return D.modules.find(m=>m.id===id); }
  function lesson(mid,lid){ return mod(mid)?.lessons.find(l=>l.id===lid); }
  function qById(id){ return D.questions.find(q=>q.id===id); }
  function routeParts(){ return location.hash.replace(/^#/,'').split('/').filter(Boolean); }
  function nav(route){ location.hash = route.startsWith('#')?route:'#'+route; }
  function randomize(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
  function scoreStats(){
    const total=state.attempts.length, correct=state.attempts.filter(a=>a.correct).length;
    return {total,correct,accuracy:total?Math.round(correct/total*100):0, completed:state.completed.length};
  }
  function moduleAccuracy(mid){ const a=state.attempts.filter(x=>qById(x.qid)?.module===mid); return a.length?Math.round(a.filter(x=>x.correct).length/a.length*100):0; }
  function moduleProgress(mid){ const m=mod(mid); const done=m.lessons.filter(l=>state.completed.includes(`${mid}/${l.id}`)).length; return Math.round(done/m.lessons.length*100); }
  function isSaved(type,id){ return state.saved.some(x=>x.type===type&&x.id===id); }
  function saveToggle(type,id){ const i=state.saved.findIndex(x=>x.type===type&&x.id===id); if(i>=0){state.saved.splice(i,1);showToast('Removed from Saved');} else {state.saved.unshift({type,id,at:Date.now()});showToast('Saved');} persist(); render({preserveScroll:true}); }

  function mascotForPage(title=''){
    if(/mistake|error|exam/i.test(title))return MASCOTS.angry;
    if(/practice|progress|saved/i.test(title))return MASCOTS.heart;
    if(/formula|calculator|source/i.test(title))return MASCOTS.sideeye;
    if(/glossary|notes|flashcard/i.test(title))return MASCOTS.mustache;
    return MASCOTS.flower;
  }
  function mascotFloatLayer(){
    return `<div class="mascot-float-layer" aria-hidden="true">
      <img class="floating-fly fly-left-top" src="${MASCOTS.flower}" alt="">
      <img class="floating-fly fly-right-mid" src="${MASCOTS.heart}" alt="">
      <img class="floating-fly fly-left-bottom" src="${MASCOTS.sideeye}" alt="">
    </div>`;
  }
  function shell(content,{eyebrow='',title='',lead='',actions=''}={}){
    return `<div class="page-shell shell">
      ${title?`<section class="page-heading"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${lead}</p></div><div class="page-heading-side"><img class="page-mascot" src="${mascotForPage(title)}" alt="" aria-hidden="true"><div class="heading-actions">${actions}</div></div></section>`:''}
      ${content}
    </div>`;
  }
  function searchNorm(value=''){
    return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  }
  function globalSearchIndex(){
    const rows=[];
    D.modules.forEach(m=>m.lessons.forEach(l=>{
      const enh=lessonEnhancement(m.id,l.id), terms=[...(l.terms||[]),...(enh?.termsExtra||[])];
      rows.push({type:'Lesson',title:l.title,sub:`Module ${m.num} · ${m.title}`,route:`learn/${m.id}/${l.id}`,text:[l.title,l.objective,l.keyPrinciple,...(l.explanation||[]),...terms.flat()].join(' ')});
    }));
    (D.formulas||[]).forEach(f=>rows.push({type:'Formula',title:f[0],sub:f[2]||f[3]||'Formula sheet',route:'formulas',text:f.join(' ')}));
    Object.entries(D.glossary||{}).forEach(([term,definition])=>rows.push({type:'Key term',title:term,sub:definition,route:'glossary',text:`${term} ${definition}`}));
    (D.questions||[]).forEach(q=>rows.push({type:'Question',title:q.question,sub:`${q.id} · ${q.difficulty}`,route:`practice/${q.module}/${q.lesson}`,text:`${q.question} ${q.explanation} ${q.topic||''}`}));
    return rows;
  }
  let cachedSearchIndex=null;
  function renderGlobalSearchResults(query=''){
    if(!globalSearchResults)return;
    const q=searchNorm(query).trim();
    if(q.length<2){
      globalSearchResults.innerHTML=`<div class="search-empty"><span>QUICK PATHS</span><p>Type at least two characters, or jump to a study tool.</p><div>${[['Learn','learn'],['Question bank','bank'],['Formula sheet','formulas'],['Glossary','glossary']].map(x=>`<button data-route="${x[1]}">${x[0]} <b>↗</b></button>`).join('')}</div></div>`;
      return;
    }
    cachedSearchIndex=cachedSearchIndex||globalSearchIndex();
    const tokens=q.split(/\s+/).filter(Boolean);
    const matches=cachedSearchIndex.map((row,index)=>{
      const hay=searchNorm(`${row.title} ${row.sub} ${row.text}`);
      const score=tokens.reduce((sum,t)=>sum+(hay.includes(t)?1:0)+(searchNorm(row.title).includes(t)?2:0),0);
      return {row,index,score};
    }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.index-b.index).slice(0,24);
    globalSearchResults.innerHTML=matches.length?`<div class="search-count">${matches.length} focused results</div>${matches.map(({row})=>`<button class="global-search-result" data-route="${esc(row.route)}"><span>${esc(row.type)}</span><div><h3>${esc(row.title)}</h3><p>${esc(row.sub)}</p></div><b>↗</b></button>`).join('')}`:`<div class="search-empty"><span>NO MATCH</span><p>Try a broader English or Vietnamese key term.</p><button data-route="bank">Open Question Bank ↗</button></div>`;
  }
  function openGlobalSearch(){
    if(!globalSearchDialog)return;
    renderGlobalSearchResults(globalSearchInput?.value||'');
    if(!globalSearchDialog.open)globalSearchDialog.showModal();
    setTimeout(()=>globalSearchInput?.focus(),20);
  }
  function closeGlobalSearch(){ if(globalSearchDialog?.open)globalSearchDialog.close(); }
  function updateHeaderProgress(){
    const node=document.getElementById('headerProgress');
    if(!node)return;
    const total=D.modules.reduce((sum,m)=>sum+m.lessons.length,0);
    node.textContent=`${Math.round((state.completed.length/total)*100)||0}%`;
  }

  function dashboard(){
    const s=scoreStats(); const totalLessons=D.modules.reduce((a,m)=>a+m.lessons.length,0);
    const hero=`<section class="hero-card hero-painted"> 
      <div class="hero-copy"><span class="hero-kicker">A thoughtful way to learn finance</span><h1>Finance,<br><em>made easier to see.</em></h1><p>A calm place to slow down, trace every cash flow, connect English concepts with Vietnamese key terms, and build confidence through guided practice.</p><div class="hero-actions"><button class="yellow-btn" data-route="learn">Begin with the course ↗</button><button class="ghost-btn" data-route="practice">Try a self-check ↗</button></div></div>
      <div class="hero-note"><span>48 deep lessons</span><span>144 section self-checks</span><span>600 practice questions</span></div>
    </section>`;
    const pillars=`<section class="pillars">${[
      ['01','Understand deeply','Every definition is expanded into mechanism, conditions, intuition and limits.'],
      ['02','Read bilingually','English stays primary; Vietnamese key terms sit beside the exact concept.'],
      ['03','Check yourself','Every conceptual section ends with active recall and a guided answer.'],
      ['04','Perform under pressure','Worked problems, mistake review and exam mode turn knowledge into retrieval.']
    ].map(x=>`<article><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</section>`;
    const progress=`<section class="editorial-grid section-space"><div class="editorial-copy"><span class="eyebrow">Your course map</span><h2>Seven modules. One connected financial system.</h2><p>The structure follows the supplied TCH 302 syllabus: foundations → time value → household decisions → markets and institutions → valuation → risk → financial health.</p><div class="inline-checks"><span>✓ ${s.completed}/${totalLessons} lessons complete</span><span>✓ ${s.accuracy}% practice accuracy</span><span>✓ ${state.mistakes.length} active mistakes</span></div><button class="green-btn" data-route="progress">View progress ↗</button></div>
      <div class="metric-card"><span>Study progress</span><strong>${Math.round(s.completed/totalLessons*100)||0}%</strong><p>Completion is based on lessons you explicitly mark complete.</p><div class="mini-bars">${D.modules.map(m=>`<div><b>${m.num}</b><i><u style="width:${moduleProgress(m.id)}%"></u></i><small>${moduleProgress(m.id)}%</small></div>`).join('')}</div></div></section>`;
    const modules=`<section class="soft-section"><div class="section-head"><span class="eyebrow">Learn</span><h2>Choose a module</h2><p>Each module opens into concept lessons, worked examples, exam traps and linked practice.</p></div><div class="module-showcase">${D.modules.map(m=>`<article class="module-card" data-route="learn/${m.id}"><div class="module-icon">${m.icon}</div><span>Module ${m.num}</span><h3>${m.title}</h3><p>${m.subtitle}</p><div class="module-card-foot"><b>${m.lessons.length} lessons</b><small>${moduleProgress(m.id)}% complete</small></div></article>`).join('')}</div></section>`;
    const stats=`<section class="stat-strip">${[['144','Section self-checks'],['144','Guided problems'],['41','Readable timelines'],['600','Practice questions']].map(x=>`<div><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</section>`;
    const lower=`<section class="why-section section-space"><div class="collage-card"><div class="fake-chart"><i style="height:28%"></i><i style="height:45%"></i><i style="height:62%"></i><i style="height:81%"></i><i style="height:70%"></i></div><div class="yellow-sticker">Theory → formula → decision → exam.</div><div class="badge-round">FM<br>302</div></div><div><span class="eyebrow">Why this build</span><h2>Designed around how finance questions actually fail.</h2><p>Most mistakes are not algebra mistakes. They come from using the wrong market classification, wrong timeline, wrong rate convention, wrong cash-flow timing, or wrong denominator. Each lesson therefore explains the decision logic before the formula.</p><div class="quality-row"><span>Source alignment</span><b>100%</b></div><div class="quality-line"><i style="width:100%"></i></div><div class="quality-row"><span>Function preservation</span><b>100%</b></div><div class="quality-line"><i style="width:100%"></i></div></div></section>`;
    return `<div class="home-shell shell">${hero}${pillars}${progress}</div>${modules}<div class="home-shell shell">${stats}${lower}</div>`;
  }

  function learnHome(){
    return shell(`<div class="module-list">${D.modules.map(m=>`<article class="wide-module-card"><div class="wide-num">${m.num}</div><div><span class="eyebrow">${esc(m.source.split(';')[0])}</span><h2>${esc(m.title)}</h2><p>${esc(m.subtitle)}</p><div class="progress-line"><i style="width:${moduleProgress(m.id)}%"></i></div><small>${moduleProgress(m.id)}% complete · ${m.lessons.length} lessons</small></div><button class="green-btn" data-route="learn/${m.id}">Open module ↗</button></article>`).join('')}</div>`,{eyebrow:'Course theory',title:'Learn',lead:'The course content has been expanded without changing its central principles. Each lesson keeps the original conceptual frame and adds reasoning, application and exam diagnostics.'});
  }

  function learnModule(mid){
    const m=mod(mid); if(!m) return notFound();
    const cards=m.lessons.map((l,i)=>{const key=`${mid}/${l.id}`,done=state.completed.includes(key);return `<article class="lesson-row" data-route="learn/${mid}/${l.id}"><span>${String(i+1).padStart(2,'0')}</span><div><small>${done?'✓ Completed':'Lesson'}</small><h3>${esc(l.title)}</h3><p>${esc(l.objective)}</p></div><button aria-label="Open lesson">↗</button></article>`}).join('');
    return shell(`<div class="module-intro-card"><div><span class="eyebrow">Module ${m.num}</span><h2>${esc(m.title)}</h2><p>${esc(m.subtitle)}</p></div><div class="module-score"><strong>${moduleProgress(mid)}%</strong><span>complete</span><small>Practice accuracy: ${moduleAccuracy(mid)}%</small></div></div><div class="lesson-list">${cards}</div>`,{eyebrow:'Learn',title:m.title,lead:m.source,actions:`<button class="outline-btn" data-route="practice/${mid}">Practice module</button>`});
  }

  function lessonPage(mid,lid){
    const m=mod(mid),l=lesson(mid,lid); if(!m||!l)return notFound();
    const key=`${mid}/${lid}`,done=state.completed.includes(key),idx=m.lessons.findIndex(x=>x.id===lid);
    const enh=lessonEnhancement(mid,lid);
    const explanations=[...(l.explanation||[]),...(enh?.moreExplanation||[])];
    const lessonTerms=[...(l.terms||[]),...(enh?.termsExtra||[])];
    const terms=lessonTerms.length?`<section class="term-grid-wrap"><div class="term-grid">${lessonTerms.map(t=>`<div><b>${esc(t[0])}</b><span>${esc(t[1])}</span></div>`).join('')}</div></section>`:'';
    const deepDives=deepDivePanel(enh?.deepDive||[],lessonTerms,key);
    const inlineCheck=inlineKnowledgeCheck(lessonCheckpointQuestion(mid,lid,enh?.deepDive||[]));
    const timelines=timelinePanel(enh?.timelines||[]);
    const corrections=sourceCorrectionPanel(enh?.sourceCorrections||[]);
    const formulas=enh?.formulaKeys?.length?`<section class="theory-block formula-section"><div class="section-inline-head"><div><span class="block-label">FORMULAS THAT BELONG TO THIS CONCEPT</span><h2>See the equation, then read what every symbol means.</h2></div><span class="source-priority">${esc(enh.prioritySource||'Course source')}</span></div><div class="lesson-formula-grid">${enh.formulaKeys.map(k=>formulaPanel(k)).join('')}</div></section>`:'';
    const extraExamples=enh?.examples?.length?`<section class="theory-block examples-section"><span class="block-label">STEP-BY-STEP APPLICATIONS</span><h2>From principle to an actual decision</h2><p class="section-intro">Do not memorize the final number. Follow the cash-flow structure, focal date, rate convention and decision rule in order.</p><div class="applied-examples">${enh.examples.map(exampleCard).join('')}</div></section>`:'';
    const guidedPractice=guidedPracticePanel(enh?.guidedPractice||[]);
    const sourcePriority=enh?.prioritySource?`<div class="priority-source-banner"><span>PRIORITY SOURCE</span><b>${esc(enh.prioritySource)}</b><p>This lesson preserves the original key principle and expands the explanation around the supplied notes.</p></div>`:'';
    const body=`<article class="lesson-article annotatable" data-lesson-id="${lid}" data-module-id="${mid}">
      <div class="lesson-banner"><span>Module ${m.num} · Lesson ${idx+1}</span><button class="save-icon ${isSaved('lesson',key)?'active':''}" data-save-type="lesson" data-save-id="${key}" title="Save lesson">☆</button><h1>${esc(l.title)}</h1><p>${esc(l.objective)}</p></div>
      ${sourcePriority}
      <section class="theory-block intuition"><span class="block-label">KEY PRINCIPLE</span><h2>${esc(l.keyPrinciple)}</h2><p class="principle-note">This statement is the anchor. The sections below expand it without changing the course principle.</p></section>
      <section class="theory-block"><span class="block-label">DEEP EXPLANATION</span><div class="deep-copy">${explanations.map((p,i)=>`<div class="explanation-paragraph"><span>${String(i+1).padStart(2,'0')}</span><p>${esc(p)}</p></div>`).join('')}</div></section>
      ${deepDives}
      ${inlineCheck}
      ${corrections}
      ${terms}
      ${timelines}
      ${formulas}
      <section class="theory-block worked"><span class="block-label">CORE WORKED / DECISION EXAMPLE</span><h2>Start with the course example</h2><p>${esc(l.workedExample)}</p></section>
      ${extraExamples}
      ${guidedPractice}
      <section class="theory-block traps"><span class="block-label">COMMON EXAM TRAPS</span><ul>${(l.commonMistakes||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
      <section class="theory-block exam"><span class="block-label">EXAM FOCUS</span><p>${esc(l.examFocus)}</p></section>
      <footer class="lesson-source"><b>Grounded in:</b> ${esc(l.source)}${enh?.prioritySource?`<br><b>Priority notes:</b> ${esc(enh.prioritySource)}`:''}</footer>
      <div class="lesson-tools"><button class="${done?'complete-btn done':'complete-btn'}" data-complete="${key}" aria-pressed="${done?'true':'false'}">${done?'✓ Completed':'Mark lesson complete'}</button><button class="outline-btn" data-route="practice/${mid}/${lid}">Practice this concept ↗</button></div>
    </article>`;
    const next=idx<m.lessons.length-1?m.lessons[idx+1]:null, prev=idx>0?m.lessons[idx-1]:null;
    const navs=`<div class="lesson-nav">${prev?`<button data-route="learn/${mid}/${prev.id}">← ${esc(prev.title)}</button>`:'<span></span>'}${next?`<button data-route="learn/${mid}/${next.id}">${esc(next.title)} →</button>`:`<button data-route="learn/${mid}">Back to module →</button>`}</div>`;
    setTimeout(()=>{FM_Annotations.applyHighlights(document.querySelector('.lesson-article'),lid);typesetMath(document.querySelector('.lesson-article'));},0);
    return shell(`${body}${navs}`,{eyebrow:`Module ${m.num}`,title:m.title,lead:'Select any sentence to highlight it, attach a structured note, or convert it into a personal flashcard.'});
  }

  function questionCard(q,{exam=false,index=0,total=1}={}){
    return `<article class="question-card" data-qid="${q.id}"><div class="q-top"><span>${exam?`Question ${index+1} of ${total}`:`${q.id} · ${esc(q.difficulty)}`}</span>${!exam?`<button class="save-icon ${isSaved('question',q.id)?'active':''}" data-save-type="question" data-save-id="${q.id}">☆</button>`:''}</div><h2>${esc(q.question)}</h2><div class="options">${q.options.map((o,i)=>`<button class="option" data-answer="${i}" ${exam&&state.exam?.answers[q.id]!==undefined?'':''}><b>${String.fromCharCode(65+i)}</b><span>${esc(o)}</span></button>`).join('')}</div><div class="answer-panel" hidden></div></article>`;
  }

  function startPractice(filter={}){
    let pool=D.questions.filter(q=>(!filter.module||q.module===filter.module)&&(!filter.lesson||q.lesson===filter.lesson));
    if(filter.mistakes) pool=pool.filter(q=>state.mistakes.includes(q.id));
    if(filter.mode==='instructor') pool=pool.filter(q=>/Instructor-linked|Lecture \/ test-bank aligned/i.test(q.origin));
    if(filter.mode==='examstyle') pool=pool.filter(q=>/exam-style variant/i.test(q.origin));
    if(filter.mode==='generated') pool=pool.filter(q=>/Generated/i.test(q.origin));
    state.practice={pool:randomize(pool),index:0,answered:false,mode:filter.mode||'mixed'};
  }
  function practiceRoute(parts){
    const isMistakes=parts[0]==='practice-mistakes';
    let mid='', lid='', mode='mixed';
    if(!isMistakes){
      if(parts[1]==='mode'){ mode=parts[2]||'mixed'; }
      else {
        mid=parts[1]||'';
        if(parts[2]==='mode') mode=parts[3]||'mixed';
        else {
          lid=parts[2]||'';
          if(parts[3]==='mode') mode=parts[4]||'mixed';
        }
      }
    }
    const filter=isMistakes?{mistakes:true}:{module:mid,lesson:lid,mode};
    const expectedKey=isMistakes?'mistakes':`${mid}/${lid}/${mode}`;
    if(state.practice.key!==expectedKey||!state.practice.pool.length){startPractice(filter);state.practice.key=expectedKey;}
    const q=state.practice.pool[state.practice.index];
    if(!q)return shell(`<div class="empty-state"><h2>No questions in this pool yet.</h2><p>Try another module or clear the filter.</p><button class="green-btn" data-route="practice">All practice</button></div>`,{eyebrow:'Practice',title:'Practice'});
    const filters=`<div class="practice-toolbar"><select id="practiceModule"><option value="">All modules</option>${D.modules.map(m=>`<option value="${m.id}" ${m.id===mid?'selected':''}>${m.num} · ${esc(m.title)}</option>`).join('')}</select><select id="practiceMode"><option value="mixed" ${mode==='mixed'?'selected':''}>Mixed</option><option value="instructor" ${mode==='instructor'?'selected':''}>Past / instructor drill</option><option value="examstyle" ${mode==='examstyle'?'selected':''}>Exam-style variants</option><option value="generated" ${mode==='generated'?'selected':''}>Generated practice</option></select><button class="outline-btn" data-practice-mistakes>My mistakes</button><span>${state.practice.index+1}/${state.practice.pool.length}</span></div>`;
    return shell(`${filters}${questionCard(q)}<div class="practice-next"><button class="green-btn" id="nextPractice" ${state.practice.answered?'':'disabled'}>Next question →</button></div>`,{eyebrow:'Active recall',title:'Practice',lead:'Answer first. Explanation appears immediately after selection; wrong answers are added to the Mistake Notebook.'});
  }

  function questionBank(){
    return shell(`<div class="bank-tools"><input id="bankSearch" placeholder="Search question text, ID, module…" value="${esc(state.search)}"><select id="bankModule"><option value="">All modules</option>${D.modules.map(m=>`<option value="${m.id}">${esc(m.title)}</option>`).join('')}</select></div><div id="bankResults" class="bank-results"></div>`,{eyebrow:'600 questions',title:'Question Bank',lead:'Concept checks, exam-style variants and numerical problems generated from the course principles and supplied tutorial patterns.'});
  }
  function renderBankResults(){
    const box=document.getElementById('bankResults'); if(!box)return; const term=(document.getElementById('bankSearch')?.value||'').toLowerCase(); const mid=document.getElementById('bankModule')?.value||'';
    const rows=D.questions.filter(q=>(!mid||q.module===mid)&&(!term||`${q.id} ${q.question} ${q.module} ${q.lesson}`.toLowerCase().includes(term))).slice(0,120);
    box.innerHTML=`<p class="result-count">Showing ${rows.length}${rows.length===120?' of many matching':''} questions</p>`+rows.map(q=>`<article class="bank-row"><div><span>${q.id} · ${esc(q.difficulty)} · ${esc(q.origin)}</span><h3>${esc(q.question)}</h3><small>${esc(mod(q.module)?.title||q.module)} · ${esc(lesson(q.module,q.lesson)?.title||q.lesson)}</small></div><button class="outline-btn" data-route="practice/${q.module}/${q.lesson}">Practice concept</button></article>`).join('');
  }

  function mistakes(){
    const rows=state.mistakes.map(qById).filter(Boolean);
    return shell(rows.length?`<div class="mistake-list">${rows.map(q=>`<article class="mistake-row"><span>${q.id}</span><div><h3>${esc(q.question)}</h3><p>${esc(q.explanation)}</p></div><div><button class="outline-btn" data-route="learn/${q.module}/${q.lesson}">Review concept</button><button class="text-btn" data-remove-mistake="${q.id}">Remove</button></div></article>`).join('')}</div><button class="green-btn" data-route="practice-mistakes">Practice all mistakes ↗</button>`:`<div class="empty-state"><h2>No active mistakes.</h2><p>Questions you answer incorrectly will appear here automatically.</p><button class="green-btn" data-route="practice">Start practice</button></div>`,{eyebrow:'Error-driven learning',title:'Mistake Notebook',lead:`${rows.length} questions currently need review.`});
  }

  function notes(){
    const rows=FM_Annotations.all();
    const highlights=rows.filter(x=>x.type==='highlight').length;
    const comments=rows.filter(x=>x.type==='comment').length;
    const lessonsCount=new Set(rows.map(x=>`${x.moduleId}/${x.lessonId}`)).size;
    return shell(`<section class="notes-overview">
      <div class="note-stat"><span>Total annotations</span><strong>${rows.length}</strong><small>Saved locally on this browser</small></div>
      <div class="note-stat"><span>Highlights</span><strong>${highlights}</strong><small>Visual anchors inside lessons</small></div>
      <div class="note-stat"><span>Study notes</span><strong>${comments}</strong><small>Your own explanations and reminders</small></div>
      <div class="note-stat"><span>Lessons covered</span><strong>${lessonsCount}</strong><small>Concepts with active annotations</small></div>
    </section>
    <section class="notes-workspace">
      <div class="notes-toolbar">
        <input id="noteSearch" type="search" placeholder="Search your notes, quotes or lesson names…">
        <select id="noteModule"><option value="">All modules</option>${D.modules.map(m=>`<option value="${m.id}">Module ${m.num} · ${esc(m.title)}</option>`).join('')}</select>
        <select id="noteType"><option value="">Highlights + notes</option><option value="comment">Notes only</option><option value="highlight">Highlights only</option></select>
        <button class="outline-btn" id="exportNotes" ${rows.length?'':'disabled'}>Export notes</button>
      </div>
      <div class="notes-meta"><span id="notesResultCount"></span>${rows.length?'<button class="text-btn danger-text" id="clearNotes">Clear all annotations</button>':''}</div>
      <div id="notesResults" class="notes-list"></div>
    </section>`,{eyebrow:'Study workspace',title:'Notes & Highlights',lead:'A searchable notebook linked back to the exact finance lesson. Select theory text to highlight it or attach your own explanation.'});
  }

  function renderNotesResults(){
    const box=document.getElementById('notesResults'); if(!box)return;
    const term=(document.getElementById('noteSearch')?.value||'').trim().toLowerCase();
    const mid=document.getElementById('noteModule')?.value||'';
    const type=document.getElementById('noteType')?.value||'';
    const all=FM_Annotations.all();
    const rows=all.filter(x=>{
      const m=mod(x.moduleId),l=lesson(x.moduleId,x.lessonId);
      const hay=`${x.quote||''} ${x.comment||''} ${m?.title||''} ${l?.title||''}`.toLowerCase();
      return (!mid||x.moduleId===mid)&&(!type||x.type===type)&&(!term||hay.includes(term));
    });
    document.getElementById('notesResultCount').textContent=`Showing ${rows.length} of ${all.length} annotations`;
    if(!rows.length){box.innerHTML=`<div class="empty-state compact-empty"><h2>${all.length?'No matching notes.':'No annotations yet.'}</h2><p>${all.length?'Try another keyword or filter.':'Open a theory lesson, select a useful sentence, then highlight it or attach a note.'}</p>${all.length?'':'<button class="green-btn" data-route="learn">Open Learn</button>'}</div>`;return;}
    box.innerHTML=rows.map(x=>{
      const m=mod(x.moduleId),l=lesson(x.moduleId,x.lessonId);
      const color=x.color||'yellow';
      return `<article class="study-note-card" data-note-color="${esc(color)}">
        <div class="study-note-meta"><span class="note-color-dot" data-color="${esc(color)}"></span><b>${x.type==='comment'?'STUDY NOTE':'HIGHLIGHT'}</b><span>Module ${esc(m?.num||'—')} · ${esc(l?.title||x.lessonId)}</span><time>${new Date(x.updatedAt||x.createdAt).toLocaleDateString()}</time></div>
        <blockquote>${esc(x.quote)}</blockquote>
        ${x.comment?`<div class="study-note-comment"><span>MY NOTE</span><p>${esc(x.comment)}</p></div>`:''}
        <div class="study-note-actions"><button class="outline-btn" data-open-anno="${x.id}">Open in context ↗</button>${x.type==='comment'?`<button class="text-btn" data-edit-anno="${x.id}">Edit</button>`:''}<button class="text-btn danger-text" data-delete-anno="${x.id}">Delete</button></div>
      </article>`;
    }).join('');
  }

  function openNoteDialog({annotation=null,selection=null}={}){
    if(!noteDialog)return;
    const row=annotation;
    noteEditorCtx=row?{mode:'edit',id:row.id,moduleId:row.moduleId,lessonId:row.lessonId,quote:row.quote}:{mode:'create',...selection};
    document.getElementById('noteDialogTitle').textContent=row?'Edit note':'Add note to selected text';
    document.getElementById('noteQuotePreview').textContent=row?.quote||selection?.quote||'';
    document.getElementById('noteText').value=row?.comment||'';
    document.getElementById('noteColor').value=row?.color||'yellow';
    document.getElementById('noteHighlight').checked=row?row.highlight===true:true;
    noteDialog.showModal();
    setTimeout(()=>document.getElementById('noteText')?.focus(),30);
  }

  function closeNoteDialog(){
    if(noteDialog?.open)noteDialog.close();
    noteEditorCtx=null;
  }

  function saveNoteFromDialog(){
    if(!noteEditorCtx)return;
    const comment=(document.getElementById('noteText')?.value||'').trim();
    if(!comment){showToast('Write a note before saving');return;}
    const color=document.getElementById('noteColor')?.value||'yellow';
    const highlight=!!document.getElementById('noteHighlight')?.checked;
    if(noteEditorCtx.mode==='edit'){
      FM_Annotations.update(noteEditorCtx.id,{comment,color,highlight});
      showToast('Note updated');
    }else{
      FM_Annotations.add({type:'comment',quote:noteEditorCtx.quote,lessonId:noteEditorCtx.lessonId,moduleId:noteEditorCtx.moduleId,comment,color,highlight});
      showToast('Note saved');
    }
    const lessonId=noteEditorCtx.lessonId;
    closeNoteDialog();
    FM_Annotations.applyHighlights(document.querySelector('.lesson-article'),lessonId);
    if(location.hash.startsWith('#notes'))render({preserveScroll:true});
  }

  function exportNotes(){
    const rows=FM_Annotations.all(); if(!rows.length)return;
    const payload=rows.map(x=>({
      ...x,
      moduleTitle:mod(x.moduleId)?.title||x.moduleId,
      lessonTitle:lesson(x.moduleId,x.lessonId)?.title||x.lessonId
    }));
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download=`finance-mastery-notes-${new Date().toISOString().slice(0,10)}.json`;a.click();
    setTimeout(()=>URL.revokeObjectURL(url),500);
  }

  function focusAnnotation(id){
    const row=FM_Annotations.get(id);if(!row)return;
    annotationFocusId=id;
    nav(`learn/${row.moduleId}/${row.lessonId}`);
  }

  function flashcards(){
    const now=Date.now();
    const built=D.modules.flatMap(m=>m.lessons.map(l=>({id:`core:${m.id}/${l.id}`,front:l.title,back:l.keyPrinciple,module:m.id,personal:false}))).slice(0,40);
    const personal=state.flashcards.map(x=>({...x,personal:true}));
    const cards=[...personal,...built].map(c=>({ ...c, review:state.reviews[c.id]||{due:0,interval:0,ease:2.5} }));
    const due=cards.filter(c=>(c.review.due||0)<=now).length;
    return shell(`<div class="flash-top"><p>${personal.length} personal cards · ${built.length} core concept cards · <b>${due} due now</b></p><button class="outline-btn" data-shuffle-cards>Shuffle</button></div><div class="flash-grid">${cards.map(c=>`<article class="flash-card" tabindex="0" data-flash-id="${c.id}"><div class="flash-front"><small>${c.personal?'PERSONAL':'CORE'} · ${c.review.due>now?'NEXT '+new Date(c.review.due).toLocaleDateString():'DUE'}</small><h3>${esc(c.front)}</h3><span>Click to reveal</span></div><div class="flash-back"><p>${esc(c.back)}</p><div class="srs-actions"><button data-srs="again" data-card="${c.id}">Again</button><button data-srs="good" data-card="${c.id}">Good</button><button data-srs="easy" data-card="${c.id}">Easy</button></div>${c.personal?`<button class="text-btn light" data-delete-flash="${c.id}">Delete</button>`:''}</div></article>`).join('')}</div>`,{eyebrow:'Spaced retrieval',title:'Flashcards',lead:'Core cards summarize key principles. Personal cards come from selected theory text. Ratings schedule the next review locally.'});
  }

  function rateCard(id,rating){
    const prev=state.reviews[id]||{interval:0,ease:2.5};
    let days=1,ease=prev.ease||2.5;
    if(rating==='again'){days=0.02;ease=Math.max(1.3,ease-.2);}
    if(rating==='good'){days=prev.interval?Math.max(1,Math.round(prev.interval*ease)):1;}
    if(rating==='easy'){ease+=.15;days=prev.interval?Math.max(3,Math.round(prev.interval*ease*1.3)):4;}
    state.reviews[id]={interval:days,ease,due:Date.now()+days*86400000,last:Date.now()};persist();showToast(`Card scheduled: ${rating}`);render();
  }

  function formulas(){
    return shell(`<div class="formula-search"><input id="formulaSearch" placeholder="Search formula, category or variable…"></div><div id="formulaGrid" class="formula-grid rich-formula-grid">${D.formulas.map(f=>{
      const d=formulaDetail(f[0]);
      const search=[...f,...(d?.variables||[]).flat(),d?.useWhen||'',d?.trap||''].join(' ').toLowerCase();
      return `<article class="formula-card rich-formula-card" data-search="${esc(search)}"><div class="formula-card-top"><span>${esc(f[3])}</span><small>${d?'TYPESET EQUATION':'FORMULA'}</small></div><h3>${esc(f[0])}</h3>${mathBlock(d?.latex||f[1])}${d?.variables?.length?`<div class="formula-variables compact-vars">${d.variables.map(v=>`<div><b>${esc(v[0])}</b><span>${esc(v[1])}</span></div>`).join('')}</div>`:''}<div class="formula-meaning"><b>Use when</b><p>${esc(d?.useWhen||f[2])}</p></div>${d?.trap?`<div class="formula-trap mini-trap"><b>Watch out</b><p>${esc(d.trap)}</p></div>`:''}</article>`;
    }).join('')}</div>`,{eyebrow:`${D.formulas.length} core equations`,title:'Formula Sheet',lead:'Every equation is visually typeset and paired with variable definitions, decision context and exam traps—not shown as a raw code string.'});
  }

  const calcDefs = {
    fv:{name:'Lump-sum FV',fields:[['pv','Present value',1000],['r','Rate per period (%)',5],['n','Periods',10]],compute:v=>v.pv*Math.pow(1+v.r/100,v.n),format:x=>`Future value = ${fmtMoney(x)}`},
    pv:{name:'Lump-sum PV',fields:[['fv','Future value',2000],['r','Rate per period (%)',6],['n','Periods',8]],compute:v=>v.fv/Math.pow(1+v.r/100,v.n),format:x=>`Present value = ${fmtMoney(x)}`},
    pva:{name:'PV of annuity',fields:[['c','Payment',500],['r','Rate per period (%)',6],['n','Payments',10]],compute:v=>v.c*(1-Math.pow(1+v.r/100,-v.n))/(v.r/100),format:x=>`PV of annuity = ${fmtMoney(x)}`},
    loan:{name:'Loan payment',fields:[['pv','Loan amount',100000],['apr','APR (%)',8],['years','Years',15],['m','Payments/year',12]],compute:v=>{const r=v.apr/100/v.m,n=v.years*v.m;return v.pv*r/(1-Math.pow(1+r,-n));},format:x=>`Payment per period = ${fmtMoney(x)}`},
    bond:{name:'Bond price',fields:[['face','Face value',1000],['coupon','Coupon rate (%)',5],['ytm','YTM (%)',6],['years','Years',10],['m','Coupons/year',2]],compute:v=>{const c=v.face*v.coupon/100/v.m,r=v.ytm/100/v.m,n=v.years*v.m;return c*(1-Math.pow(1+r,-n))/r+v.face/Math.pow(1+r,n);},format:x=>`Bond price = ${fmtMoney(x)}`},
    gordon:{name:'Gordon growth',fields:[['d1','Next dividend D1',5],['r','Required return (%)',9],['g','Growth (%)',3]],compute:v=>v.r<=v.g?NaN:v.d1/((v.r-v.g)/100),format:x=>Number.isFinite(x)?`Estimated P₀ = ${fmtMoney(x)}`:'Required return must exceed growth.'},
    tbill:{name:'T-bill yields',fields:[['face','Face value',10000],['price','Price',9875],['days','Days to maturity',68]],compute:v=>({dy:(v.face-v.price)/v.face*360/v.days,bey:(v.face-v.price)/v.price*365/v.days,ear:Math.pow(v.face/v.price,365/v.days)-1}),format:x=>`Discount yield ${(x.dy*100).toFixed(2)}% · BEY ${(x.bey*100).toFixed(2)}% · EAR ${(x.ear*100).toFixed(2)}%`},
    ratios:{name:'Firm ratios',fields:[['sales','Sales',1000],['ebit','EBIT',100],['assets','Average assets',800],['ca','Current assets',400],['cl','Current liabilities',250]],compute:v=>({margin:v.ebit/v.sales,turn:v.sales/v.assets,current:v.ca/v.cl}),format:x=>`Operating margin ${(x.margin*100).toFixed(2)}% · Sales/assets ${x.turn.toFixed(2)}× · Current ratio ${x.current.toFixed(2)}×`}
  };
  function fmtMoney(x){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(x)}
  function calculators(){
    return shell(`<div class="calc-layout"><aside class="calc-tabs">${Object.entries(calcDefs).map(([k,c],i)=>`<button data-calc-tab="${k}" class="${i===0?'active':''}">${esc(c.name)}</button>`).join('')}</aside><section id="calcPanel" class="calc-panel"></section></div>`,{eyebrow:'Interactive tools',title:'Calculators',lead:'The calculators use the same formulas taught in the course; they are designed to verify reasoning, not replace the timeline.'});
  }
  function renderCalc(key='fv'){
    const c=calcDefs[key],p=document.getElementById('calcPanel'); if(!c||!p)return; p.dataset.calc=key; p.innerHTML=`<span class="eyebrow">${esc(c.name)}</span><h2>${esc(c.name)}</h2><div class="calc-fields">${c.fields.map(f=>`<label>${esc(f[1])}<input type="number" step="any" data-calc-field="${f[0]}" value="${f[2]}"></label>`).join('')}</div><button class="green-btn" id="calcRun">Calculate</button><div class="calc-result" id="calcResult">Enter values and calculate.</div>`;
  }
  function runCalc(){ const p=document.getElementById('calcPanel'),key=p?.dataset.calc,c=calcDefs[key]; if(!c)return; const v={}; p.querySelectorAll('[data-calc-field]').forEach(i=>v[i.dataset.calcField]=Number(i.value)); const res=c.compute(v); document.getElementById('calcResult').textContent=c.format(res); }

  function examHome(){
    if(state.exam?.active)return examQuestion();
    return shell(`<div class="exam-hero"><span>SIMULATED ASSESSMENT</span><strong>20</strong><h2>questions</h2><p>25 minutes. No explanations, hints or source labels until submission. Questions are mixed across the course.</p><button class="yellow-btn" id="startExam">Start exam ↗</button></div><div class="exam-rules">${['20 randomized questions','25-minute countdown','Mark questions for review','Score + module breakdown after submit'].map(x=>`<div>✓ ${x}</div>`).join('')}</div>`,{eyebrow:'Exam mode',title:'Timed course simulation',lead:'The current course website principle is preserved: scaffolding is hidden during the attempt and released only after submission.'});
  }
  function beginExam(){ const qs=randomize(D.questions).slice(0,20); state.exam={active:true,ids:qs.map(q=>q.id),index:0,answers:{},marked:[],started:Date.now(),seconds:25*60}; render(); startTimer(); }
  let timerHandle=null;
  function startTimer(){ clearInterval(timerHandle); if(!state.exam?.active)return; timerHandle=setInterval(()=>{state.exam.seconds--; const el=document.getElementById('examTimer'); if(el)el.textContent=formatTime(state.exam.seconds); if(state.exam.seconds<=0){clearInterval(timerHandle);submitExam();}},1000); }
  function formatTime(s){return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(Math.max(0,s%60)).padStart(2,'0')}`}
  function examQuestion(){ const ex=state.exam,q=qById(ex.ids[ex.index]); return shell(`<div class="exam-bar"><strong id="examTimer">${formatTime(ex.seconds)}</strong><span>${Object.keys(ex.answers).length}/20 answered</span><button class="outline-btn" id="submitExam">Submit exam</button></div>${questionCard(q,{exam:true,index:ex.index,total:20})}<div class="exam-nav-grid">${ex.ids.map((id,i)=>`<button class="${i===ex.index?'current':''} ${ex.answers[id]!==undefined?'answered':''} ${ex.marked.includes(id)?'marked':''}" data-exam-jump="${i}">${i+1}</button>`).join('')}</div><div class="exam-controls"><button class="outline-btn" id="markExam">${ex.marked.includes(q.id)?'★ Marked':'☆ Mark for review'}</button><button class="green-btn" id="nextExam">${ex.index===19?'Review grid':'Next →'}</button></div>`,{eyebrow:'Exam in progress',title:'Stay on the question, not the clock.',lead:'No explanation is shown until submission.'}); }
  function submitExam(){ if(!state.exam?.active)return; clearInterval(timerHandle); const ex=state.exam; const qs=ex.ids.map(qById); const correct=qs.filter(q=>ex.answers[q.id]===q.answer).length; const breakdown=D.modules.map(m=>{const mq=qs.filter(q=>q.module===m.id); const c=mq.filter(q=>ex.answers[q.id]===q.answer).length; return {m,total:mq.length,correct:c};}); ex.active=false; ex.result={correct,breakdown,questions:qs}; render(); }
  function examResult(){ const r=state.exam?.result;if(!r)return examHome(); return shell(`<div class="score-hero"><span>Final score</span><strong>${r.correct}/20</strong><h2>${Math.round(r.correct/20*100)}%</h2><button class="green-btn" id="newExam">New exam</button></div><div class="breakdown-grid">${r.breakdown.filter(x=>x.total).map(x=>`<div><span>${x.m.num}</span><h3>${esc(x.m.title)}</h3><strong>${x.correct}/${x.total}</strong></div>`).join('')}</div><div class="review-list">${r.questions.map(q=>{const a=state.exam.answers[q.id];return `<article class="review-row ${a===q.answer?'correct':'wrong'}"><span>${q.id}</span><div><h3>${esc(q.question)}</h3><p>Your answer: ${a===undefined?'Not answered':esc(q.options[a])}</p><p><b>Correct:</b> ${esc(q.options[q.answer])}</p><small>${esc(q.explanation)}</small></div></article>`}).join('')}</div>`,{eyebrow:'Exam complete',title:'Review the reasoning',lead:'Use the module breakdown to decide what to review next.'}); }

  function progress(){ const s=scoreStats(); return shell(`<div class="analytics-hero"><div><span>Practice accuracy</span><strong>${s.accuracy}%</strong><small>${s.correct} correct / ${s.total} attempts</small></div><div><span>Lessons complete</span><strong>${s.completed}</strong><small>of ${D.modules.reduce((a,m)=>a+m.lessons.length,0)}</small></div><div><span>Mistakes</span><strong>${state.mistakes.length}</strong><small>active review queue</small></div></div><div class="analytics-table">${D.modules.map(m=>`<article><span>${m.num}</span><div><h3>${esc(m.title)}</h3><div class="progress-line"><i style="width:${moduleProgress(m.id)}%"></i></div></div><strong>${moduleProgress(m.id)}%</strong><small>${moduleAccuracy(m.id)}% accuracy</small></article>`).join('')}</div>`,{eyebrow:'Progress & Analytics',title:'Measure what you can retrieve',lead:'Analytics use your actual local attempts and explicit lesson completion.'}); }
  function glossary(){
    const viMap={};D.modules.forEach(m=>m.lessons.forEach(l=>{const enh=lessonEnhancement(m.id,l.id);[...(l.terms||[]),...(enh?.termsExtra||[])].forEach(t=>{if(!viMap[searchNorm(t[0])])viMap[searchNorm(t[0])]=t[1];});}));
    const rows=Object.entries(D.glossary).sort((a,b)=>a[0].localeCompare(b[0]));
    return shell(`<div class="glossary-grid">${rows.map(([k,v])=>`<article><span>${esc(k.charAt(0))}</span><h3>${esc(k)}</h3>${viMap[searchNorm(k)]?`<p class="glossary-vi"><b>Tiếng Việt</b> · ${esc(viMap[searchNorm(k)])}</p>`:''}<p>${esc(v)}</p></article>`).join('')}</div>`,{eyebrow:'Key terminology · Vietnamese support',title:'Bilingual glossary',lead:'English remains the teaching language. Vietnamese equivalents sit beside the term so you can recognize the concept precisely without replacing the English definition.'});
  }
  function saved(){ const rows=state.saved.map(s=>{ if(s.type==='question'){const q=qById(s.id);return q&&{title:q.question,sub:`Question ${q.id}`,route:`practice/${q.module}/${q.lesson}`,type:'Question'};} const [mid,lid]=s.id.split('/'),l=lesson(mid,lid); return l&&{title:l.title,sub:mod(mid).title,route:`learn/${mid}/${lid}`,type:'Lesson'};}).filter(Boolean); return shell(rows.length?`<div class="saved-list">${rows.map(r=>`<article><span>${r.type}</span><div><h3>${esc(r.title)}</h3><p>${esc(r.sub)}</p></div><button class="outline-btn" data-route="${r.route}">Open ↗</button></article>`).join('')}</div>`:`<div class="empty-state"><h2>Nothing saved yet.</h2><p>Use the ☆ icon on lessons and questions.</p></div>`,{eyebrow:'Bookmarks',title:'Saved'}); }
  function sources(){ return shell(`<div class="source-list">${D.sources.map((s,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><div><small>${esc(s.type)}</small><h3>${esc(s.name)}</h3><p>${esc(s.coverage)}</p></div></article>`).join('')}</div><div class="source-note"><b>Editorial rule used in this rebuild:</b> the lecture/tutorial materials define the course frame. Expanded explanations clarify that frame; they do not replace key principles with a different textbook structure.</div>`,{eyebrow:'Grounding',title:'Sources',lead:'The theory and exercises are organized around the files supplied for TCH 302.'}); }
  function settings(){ return shell(`<div class="settings-card"><label><span>Text size</span><input id="fontScale" type="range" min="90" max="115" value="${state.settings.fontScale}"><b id="fontScaleVal">${state.settings.fontScale}%</b></label><label class="switch-row"><span><b>Compact cards</b><small>Reduce vertical spacing in lists</small></span><input id="compactToggle" type="checkbox" ${state.settings.compact?'checked':''}></label><hr><button class="danger-btn" id="resetData">Reset all local progress</button><p class="muted">Reset clears attempts, lesson completion, mistakes, saved items, flashcards and annotations from this browser only.</p></div>`,{eyebrow:'Local preferences',title:'Settings'}); }
  function menu(){ return shell(`<div class="menu-grid">${[['Learn','learn'],['Practice','practice'],['Question Bank','bank'],['Mistake Notebook','mistakes'],['Notes & Highlights','notes'],['Flashcards','flashcards'],['Formula Sheet','formulas'],['Calculators','calculators'],['Exam Mode','exam'],['Progress & Analytics','progress'],['Glossary','glossary'],['Saved','saved'],['Sources','sources'],['Settings','settings']].map(x=>`<button data-route="${x[1]}">${x[0]} <span>↗</span></button>`).join('')}</div>`,{eyebrow:'Finance Mastery',title:'All tools'}); }
  function notFound(){ return shell(`<div class="empty-state"><h2>Page not found.</h2><button class="green-btn" data-route="dashboard">Go home</button></div>`,{eyebrow:'404',title:'Not found'}); }

  function render({preserveScroll=false}={}){
    const previousY=window.scrollY;
    document.documentElement.style.fontSize=`${state.settings.fontScale}%`; document.body.classList.toggle('compact',!!state.settings.compact);
    const p=routeParts(),r=p[0]||'dashboard'; let html;
    if(r==='dashboard')html=dashboard();
    else if(r==='learn')html=p[2]?lessonPage(p[1],p[2]):p[1]?learnModule(p[1]):learnHome();
    else if(r==='practice-mistakes')html=practiceRoute(p);
    else if(r==='practice')html=practiceRoute(p);
    else if(r==='bank')html=questionBank();
    else if(r==='mistakes')html=mistakes();
    else if(r==='notes')html=notes();
    else if(r==='flashcards')html=flashcards();
    else if(r==='formulas')html=formulas();
    else if(r==='calculators')html=calculators();
    else if(r==='exam')html=state.exam?.result&&!state.exam?.active?examResult():examHome();
    else if(r==='progress')html=progress();
    else if(r==='glossary')html=glossary();
    else if(r==='saved')html=saved();
    else if(r==='sources')html=sources();
    else if(r==='settings')html=settings();
    else if(r==='menu')html=menu(); else html=notFound();
    app.innerHTML=mascotFloatLayer()+html;
    updateHeaderProgress();
    bindAfterRender(r);
    typesetMath(app);
    if(preserveScroll)requestAnimationFrame(()=>window.scrollTo({top:previousY,behavior:'auto'}));
    else window.scrollTo({top:0,behavior:'auto'});
  }

  function bindAfterRender(r){
    if(r==='bank'){renderBankResults(); document.getElementById('bankSearch')?.addEventListener('input',renderBankResults); document.getElementById('bankModule')?.addEventListener('change',renderBankResults);}
    if(r==='notes'){
      renderNotesResults();
      document.getElementById('noteSearch')?.addEventListener('input',renderNotesResults);
      document.getElementById('noteModule')?.addEventListener('change',renderNotesResults);
      document.getElementById('noteType')?.addEventListener('change',renderNotesResults);
    }
    if(r==='calculators')renderCalc('fv');
    if(r==='exam'&&state.exam?.active)startTimer();
    if(r==='learn'&&annotationFocusId){
      const id=annotationFocusId;annotationFocusId=null;
      setTimeout(()=>{
        const row=FM_Annotations.get(id),root=document.querySelector('.lesson-article');
        if(!row||!root)return;
        const target=root.querySelector(`[data-annotation-id="${id}"]`)||FM_Annotations.findTextElement(root,row.quote);
        if(target){target.classList.add('annotation-focus-pulse');target.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>target.classList.remove('annotation-focus-pulse'),1800);}
      },100);
    }
  }

  document.addEventListener('click',e=>{
    const route=e.target.closest('[data-route]'); if(route){closeGlobalSearch();nav(route.dataset.route);return;}
    const reveal=e.target.closest('[data-self-reveal]'); if(reveal){
      const model=[...document.querySelectorAll('[data-self-model]')].find(node=>node.dataset.selfModel===reveal.dataset.selfReveal);
      if(model){model.hidden=!model.hidden;reveal.textContent=model.hidden?'Reveal guided answer':'Hide guided answer';}
      return;
    }
    const confidence=e.target.closest('[data-self-confidence]'); if(confidence){
      const key=confidence.dataset.selfKey, current=state.selfChecks[key]||{};
      state.selfChecks[key]={...current,confidence:confidence.dataset.selfConfidence,updated:Date.now()};persist();
      confidence.closest('.self-check-actions')?.querySelectorAll('[data-self-confidence]').forEach(b=>b.classList.toggle('active',b===confidence));
      showToast(confidence.dataset.selfConfidence==='clear'?'Marked clear':'Added to review');
      return;
    }
    const inlineAnswer=e.target.closest('[data-inline-answer]'); if(inlineAnswer){handleInlineAnswer(inlineAnswer);return;}
    const save=e.target.closest('[data-save-type]'); if(save){saveToggle(save.dataset.saveType,save.dataset.saveId);return;}
    const comp=e.target.closest('[data-complete]'); if(comp){
      const k=comp.dataset.complete,i=state.completed.indexOf(k);
      let nowDone;
      if(i>=0){state.completed.splice(i,1);nowDone=false;}else{state.completed.push(k);nowDone=true;}
      persist();
      comp.classList.toggle('done',nowDone);
      comp.textContent=nowDone?'✓ Completed':'Mark lesson complete';
      comp.setAttribute('aria-pressed',nowDone?'true':'false');
      updateHeaderProgress();
      showToast(nowDone?'Lesson marked complete':'Lesson marked incomplete');
      return;
    }
    const ans=e.target.closest('[data-answer]'); if(ans){handleAnswer(ans);return;}
    if(e.target.id==='nextPractice'){state.practice.index=(state.practice.index+1)%state.practice.pool.length;state.practice.answered=false;render();return;}
    if(e.target.matches('[data-practice-mistakes]')){nav('practice-mistakes');return;}
    if(e.target.matches('[data-remove-mistake]')){state.mistakes=state.mistakes.filter(id=>id!==e.target.dataset.removeMistake);persist();render();return;}
    if(e.target.matches('[data-open-anno]')){focusAnnotation(e.target.dataset.openAnno);return;}
    if(e.target.matches('[data-edit-anno]')){const row=FM_Annotations.get(e.target.dataset.editAnno);if(row)openNoteDialog({annotation:row});return;}
    if(e.target.matches('[data-delete-anno]')){
      const row=FM_Annotations.get(e.target.dataset.deleteAnno);
      FM_Annotations.remove(e.target.dataset.deleteAnno);
      showToast('Annotation deleted');
      if(location.hash.startsWith('#notes'))render({preserveScroll:true});
      else if(row)FM_Annotations.applyHighlights(document.querySelector('.lesson-article'),row.lessonId);
      return;
    }
    if(e.target.id==='exportNotes'){exportNotes();return;}
    if(e.target.id==='clearNotes'){if(confirm('Delete all saved highlights and study notes from this browser?')){FM_Annotations.clear();render({preserveScroll:true});showToast('Annotations cleared');}return;}
    if(e.target.matches('[data-note-close]')){closeNoteDialog();return;}
    const markedNote=e.target.closest('mark.fm-highlight[data-annotation-type="comment"]');if(markedNote){const row=FM_Annotations.get(markedNote.dataset.annotationId);if(row)openNoteDialog({annotation:row});return;}
    if(e.target.matches('[data-srs]')){rateCard(e.target.dataset.card,e.target.dataset.srs);return;}
    const fc=e.target.closest('.flash-card'); if(fc&&!e.target.matches('[data-delete-flash]')&&!e.target.matches('[data-srs]')){fc.classList.toggle('flipped');return;}
    if(e.target.matches('[data-delete-flash]')){state.flashcards=state.flashcards.filter(x=>x.id!==e.target.dataset.deleteFlash);persist();render();return;}
    if(e.target.matches('[data-calc-tab]')){document.querySelectorAll('[data-calc-tab]').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');renderCalc(e.target.dataset.calcTab);return;}
    if(e.target.id==='calcRun'){runCalc();return;}
    if(e.target.id==='startExam'){beginExam();return;}
    if(e.target.id==='submitExam'){submitExam();return;}
    if(e.target.id==='newExam'){state.exam=null;render();return;}
    if(e.target.id==='markExam'){const qid=state.exam.ids[state.exam.index],i=state.exam.marked.indexOf(qid);if(i>=0)state.exam.marked.splice(i,1);else state.exam.marked.push(qid);render();return;}
    if(e.target.id==='nextExam'){state.exam.index=Math.min(19,state.exam.index+1);render();return;}
    if(e.target.matches('[data-exam-jump]')){state.exam.index=Number(e.target.dataset.examJump);render();return;}
    if(e.target.id==='resetData'){if(confirm('Reset all Finance Mastery progress on this browser?')){Object.keys(localStorage).filter(k=>k.startsWith('fm_')).forEach(k=>localStorage.removeItem(k));location.reload();}return;}
  });

  function handleAnswer(btn){
    const card=btn.closest('.question-card'),q=qById(card.dataset.qid),choice=Number(btn.dataset.answer);
    if(state.exam?.active){state.exam.answers[q.id]=choice; card.querySelectorAll('.option').forEach((b,i)=>b.classList.toggle('selected',i===choice));return;}
    if(state.practice.answered)return; state.practice.answered=true;
    const correct=choice===q.answer; state.attempts.push({qid:q.id,choice,correct,at:Date.now()});
    if(!correct&&!state.mistakes.includes(q.id))state.mistakes.unshift(q.id); if(correct)state.mistakes=state.mistakes.filter(id=>id!==q.id); persist();
    card.querySelectorAll('.option').forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('correct');if(i===choice&&!correct)b.classList.add('wrong');});
    const panel=card.querySelector('.answer-panel');panel.hidden=false;panel.innerHTML=`<img class="feedback-mascot" src="${correct?MASCOTS.heart:MASCOTS.angry}" alt="" aria-hidden="true"><strong>${correct?'Correct — the rule is applied consistently.':'Not quite — diagnose the setup before recalculating.'}</strong><p>${esc(q.explanation)}</p><div class="answer-breakdown"><span>WHY EACH OPTION</span>${q.options.map((o,i)=>`<div class="answer-breakdown-row ${i===q.answer?'correct':''}"><b>${String.fromCharCode(65+i)}</b><p><strong>${esc(o)}</strong><br>${esc(distractorExplanation(q,i))}</p></div>`).join('')}</div><div class="q-meta">${esc(mod(q.module)?.title||q.module)} · ${esc(lesson(q.module,q.lesson)?.title||q.lesson)} · ${esc(q.origin)}</div><button class="outline-btn" data-route="learn/${q.module}/${q.lesson}">Review concept ↗</button>`;
    document.getElementById('nextPractice')?.removeAttribute('disabled');
  }

  function handleInlineAnswer(btn){
    const quiz=btn.closest('[data-inline-quiz]');
    if(!quiz||quiz.dataset.answered==='true')return;
    const q=qById(quiz.dataset.inlineQuiz),choice=Number(btn.dataset.inlineAnswer);
    if(!q)return;
    const correct=choice===q.answer;quiz.dataset.answered='true';
    quiz.querySelectorAll('[data-inline-answer]').forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('correct');else if(i===choice)b.classList.add('wrong');});
    const feedback=quiz.querySelector('.inline-knowledge-feedback');
    feedback.innerHTML=`<div class="knowledge-result ${correct?'correct':'wrong'}"><img class="knowledge-mascot" src="${correct?MASCOTS.heart:MASCOTS.angry}" alt="" aria-hidden="true"><strong>${correct?'Correct — now explain why in your own words.':'Not correct yet — compare the logic of every option.'}</strong><span>${correct?'✓':'↻'}</span></div><div class="knowledge-breakdown">${q.options.map((o,i)=>`<div class="${i===q.answer?'correct':''}"><b>${String.fromCharCode(65+i)}</b><p><strong>${esc(o)}</strong><br>${esc(distractorExplanation(q,i))}</p></div>`).join('')}</div>`;
    state.attempts.push({qid:q.id,choice,correct,at:Date.now(),source:'inline-check'});
    if(!correct&&!state.mistakes.includes(q.id))state.mistakes.unshift(q.id);if(correct)state.mistakes=state.mistakes.filter(id=>id!==q.id);
    persist();
  }

  document.getElementById('menuTrigger')?.addEventListener('click',()=>nav('menu'));
  document.getElementById('searchTrigger')?.addEventListener('click',openGlobalSearch);
  document.getElementById('globalSearchClose')?.addEventListener('click',closeGlobalSearch);
  globalSearchDialog?.addEventListener('click',e=>{if(e.target===globalSearchDialog)closeGlobalSearch();});
  document.addEventListener('keydown',e=>{
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openGlobalSearch();}
    else if(e.key==='/'&&!/input|textarea|select/i.test(document.activeElement?.tagName||'')){e.preventDefault();openGlobalSearch();}
    else if(e.key==='Escape')closeGlobalSearch();
  });
  document.getElementById('practiceModule');
  document.addEventListener('change',e=>{
    if(e.target.id==='practiceModule'){const v=e.target.value;const mode=document.getElementById('practiceMode')?.value||'mixed';state.practice.pool=[];nav(v?`practice/${v}/mode/${mode}`:`practice/mode/${mode}`);}
    if(e.target.id==='practiceMode'){const mode=e.target.value;const v=document.getElementById('practiceModule')?.value||'';state.practice.pool=[];nav(v?`practice/${v}/mode/${mode}`:`practice/mode/${mode}`);}
    if(e.target.id==='fontScale'){state.settings.fontScale=Number(e.target.value);document.getElementById('fontScaleVal').textContent=e.target.value+'%';persist();document.documentElement.style.fontSize=e.target.value+'%';}
    if(e.target.id==='compactToggle'){state.settings.compact=e.target.checked;persist();document.body.classList.toggle('compact',e.target.checked);}
  });
  document.addEventListener('input',e=>{
    if(e.target.matches('[data-self-input]')){const key=e.target.dataset.selfInput,current=state.selfChecks[key]||{};state.selfChecks[key]={...current,answer:e.target.value,updated:Date.now()};persist();}
    if(e.target.id==='globalSearchInput')renderGlobalSearchResults(e.target.value);
    if(e.target.id==='formulaSearch'){const t=e.target.value.toLowerCase();document.querySelectorAll('.formula-card').forEach(c=>c.hidden=!c.dataset.search.includes(t));}
    if(e.target.id==='noteSearch')renderNotesResults();
  });
  document.getElementById('noteForm')?.addEventListener('submit',e=>{e.preventDefault();saveNoteFromDialog();});
  noteDialog?.addEventListener('click',e=>{if(e.target===noteDialog)closeNoteDialog();});

  // Selection annotation toolbar
  const toolbar=document.getElementById('annotationToolbar'); let selectionCtx=null;
  document.addEventListener('mouseup',e=>{if(e.target.closest('#annotationToolbar'))return;setTimeout(()=>{const s=FM_Annotations.selectedQuote();if(!s){toolbar.hidden=true;selectionCtx=null;return;}selectionCtx=s;toolbar.hidden=false;toolbar.style.left=`${Math.max(8,s.rect.left+scrollX)}px`;toolbar.style.top=`${Math.max(8,s.rect.bottom+scrollY+8)}px`;},0);});
  toolbar.addEventListener('click',e=>{
    const action=e.target.dataset.anno;if(!action||!selectionCtx)return; const s={...selectionCtx};
    toolbar.hidden=true;window.getSelection()?.removeAllRanges();selectionCtx=null;
    if(action==='highlight'){
      FM_Annotations.add({type:'highlight',quote:s.quote,lessonId:s.lessonId,moduleId:s.moduleId,color:e.target.dataset.color||'yellow'});
      FM_Annotations.applyHighlights(document.querySelector('.lesson-article'),s.lessonId);
      showToast('Highlighted');return;
    }
    if(action==='comment'){openNoteDialog({selection:s});return;}
    if(action==='flashcard'){const back=prompt('Flashcard answer / explanation:',s.quote); if(back!==null){const card={id:`P${Date.now()}`,front:s.quote,back,module:s.moduleId};state.flashcards.unshift(card);persist();showToast('Flashcard created');}return;}
  });

  window.addEventListener('hashchange',render);
  return {init(){if(!location.hash)location.hash='#dashboard';else render();}};
})();

App.init();

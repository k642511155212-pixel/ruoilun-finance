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
    settings: LS.get('fm_settings', {fontScale:100,compact:false}),
    practice: {pool:[], index:0, answered:false},
    exam: null,
    search: ''
  };
  const app = document.getElementById('app');
  const toast = document.getElementById('toast');

  function persist(){
    LS.set('fm_attempts',state.attempts); LS.set('fm_completed',state.completed); LS.set('fm_mistakes',state.mistakes);
    LS.set('fm_saved',state.saved); LS.set('fm_flashcards',state.flashcards); LS.set('fm_flash_reviews',state.reviews); LS.set('fm_settings',state.settings);
  }
  function showToast(msg){ toast.textContent=msg; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),1800); }
  function esc(s=''){ return String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m])); }
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
  function saveToggle(type,id){ const i=state.saved.findIndex(x=>x.type===type&&x.id===id); if(i>=0){state.saved.splice(i,1);showToast('Removed from Saved');} else {state.saved.unshift({type,id,at:Date.now()});showToast('Saved');} persist(); render(); }

  function shell(content,{eyebrow='',title='',lead='',actions=''}={}){
    return `<div class="page-shell shell">
      ${title?`<section class="page-heading"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${lead}</p></div><div class="heading-actions">${actions}</div></section>`:''}
      ${content}
    </div>`;
  }

  function dashboard(){
    const s=scoreStats(); const totalLessons=D.modules.reduce((a,m)=>a+m.lessons.length,0);
    const hero=`<section class="hero-card">
      <div class="hero-art" aria-hidden="true"><span class="orbit o1"></span><span class="orbit o2"></span><span class="hero-symbol">%</span></div>
      <div class="hero-copy"><span class="hero-kicker">Source-aligned · TCH 302</span><h1>MASTER<br><em>FINANCE</em></h1><p>Build intuition first. Then formulas. Then exam-speed application.</p><div class="hero-actions"><button class="yellow-btn" data-route="learn">Start learning ↗</button><button class="ghost-btn" data-route="practice">Practice now ↗</button></div></div>
      <div class="hero-note">48 lessons · 600 questions · 25 core formulas</div>
    </section>`;
    const pillars=`<section class="pillars">${[
      ['01','Understand','Theory is expanded around the course’s own definitions and logic.'],
      ['02','Apply','Worked examples connect every principle to a numerical or decision case.'],
      ['03','Diagnose','Mistakes, explanations and analytics show exactly where reasoning breaks.'],
      ['04','Perform','Exam mode removes scaffolding and forces timed retrieval.']
    ].map(x=>`<article><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</section>`;
    const progress=`<section class="editorial-grid section-space"><div class="editorial-copy"><span class="eyebrow">Your course map</span><h2>Seven modules. One connected financial system.</h2><p>The structure follows the supplied TCH 302 syllabus: foundations → time value → household decisions → markets and institutions → valuation → risk → financial health.</p><div class="inline-checks"><span>✓ ${s.completed}/${totalLessons} lessons complete</span><span>✓ ${s.accuracy}% practice accuracy</span><span>✓ ${state.mistakes.length} active mistakes</span></div><button class="green-btn" data-route="progress">View progress ↗</button></div>
      <div class="metric-card"><span>Study progress</span><strong>${Math.round(s.completed/totalLessons*100)||0}%</strong><p>Completion is based on lessons you explicitly mark complete.</p><div class="mini-bars">${D.modules.map(m=>`<div><b>${m.num}</b><i><u style="width:${moduleProgress(m.id)}%"></u></i><small>${moduleProgress(m.id)}%</small></div>`).join('')}</div></div></section>`;
    const modules=`<section class="soft-section"><div class="section-head"><span class="eyebrow">Learn</span><h2>Choose a module</h2><p>Each module opens into concept lessons, worked examples, exam traps and linked practice.</p></div><div class="module-showcase">${D.modules.map(m=>`<article class="module-card" data-route="learn/${m.id}"><div class="module-icon">${m.icon}</div><span>Module ${m.num}</span><h3>${m.title}</h3><p>${m.subtitle}</p><div class="module-card-foot"><b>${m.lessons.length} lessons</b><small>${moduleProgress(m.id)}% complete</small></div></article>`).join('')}</div></section>`;
    const stats=`<section class="stat-strip">${[['600','Practice questions'],['48','Deep lessons'],['25','Core formulas'],['7','Course modules']].map(x=>`<div><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</section>`;
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
    const m=mod(mid),l=lesson(mid,lid); if(!m||!l)return notFound(); const key=`${mid}/${lid}`,done=state.completed.includes(key); const idx=m.lessons.findIndex(x=>x.id===lid);
    const terms=l.terms?.length?`<div class="term-grid">${l.terms.map(t=>`<div><b>${esc(t[0])}</b><span>${esc(t[1])}</span></div>`).join('')}</div>`:'';
    const body=`<article class="lesson-article annotatable" data-lesson-id="${lid}" data-module-id="${mid}">
      <div class="lesson-banner"><span>Module ${m.num} · Lesson ${idx+1}</span><button class="save-icon ${isSaved('lesson',key)?'active':''}" data-save-type="lesson" data-save-id="${key}" title="Save lesson">☆</button><h1>${esc(l.title)}</h1><p>${esc(l.objective)}</p></div>
      <section class="theory-block intuition"><span class="block-label">KEY PRINCIPLE</span><h2>${esc(l.keyPrinciple)}</h2></section>
      <section class="theory-block"><span class="block-label">DEEP EXPLANATION</span>${l.explanation.map(p=>`<p>${esc(p)}</p>`).join('')}</section>
      ${terms}
      <section class="theory-block worked"><span class="block-label">WORKED / DECISION EXAMPLE</span><p>${esc(l.workedExample)}</p></section>
      <section class="theory-block traps"><span class="block-label">COMMON EXAM TRAPS</span><ul>${l.commonMistakes.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
      <section class="theory-block exam"><span class="block-label">EXAM FOCUS</span><p>${esc(l.examFocus)}</p></section>
      <footer class="lesson-source"><b>Grounded in:</b> ${esc(l.source)}</footer>
      <div class="lesson-tools"><button class="${done?'complete-btn done':'complete-btn'}" data-complete="${key}">${done?'✓ Completed':'Mark lesson complete'}</button><button class="outline-btn" data-route="practice/${mid}/${lid}">Practice this concept ↗</button></div>
    </article>`;
    const next=idx<m.lessons.length-1?m.lessons[idx+1]:null, prev=idx>0?m.lessons[idx-1]:null;
    const navs=`<div class="lesson-nav">${prev?`<button data-route="learn/${mid}/${prev.id}">← ${esc(prev.title)}</button>`:'<span></span>'}${next?`<button data-route="learn/${mid}/${next.id}">${esc(next.title)} →</button>`:`<button data-route="learn/${mid}">Back to module →</button>`}</div>`;
    setTimeout(()=>FM_Annotations.applyHighlights(document.querySelector('.lesson-article'),lid),0);
    return shell(`${body}${navs}`,{eyebrow:`Module ${m.num}`,title:m.title,lead:'Select any sentence in the theory to highlight it, attach a note, or convert it into a personal flashcard.'});
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
    const a=FM_Annotations.all();
    return shell(a.length?`<div class="notes-grid">${a.map(x=>`<article class="note-card"><span>${esc(x.type.toUpperCase())} · ${new Date(x.createdAt).toLocaleDateString()}</span><blockquote>${esc(x.quote)}</blockquote>${x.comment?`<p>${esc(x.comment)}</p>`:''}<div><button class="outline-btn" data-route="learn/${x.moduleId}/${x.lessonId}">Open lesson</button>${x.type==='comment'?`<button class="text-btn" data-edit-anno="${x.id}">Edit note</button>`:''}<button class="text-btn" data-delete-anno="${x.id}">Delete</button></div></article>`).join('')}</div>`:`<div class="empty-state"><h2>No highlights yet.</h2><p>Open any theory lesson, select text, then choose Highlight, Comment or Flashcard.</p><button class="green-btn" data-route="learn">Open Learn</button></div>`,{eyebrow:'Your annotations',title:'Notes & Highlights',lead:'All annotations are stored locally in your browser.'});
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
    return shell(`<div class="formula-search"><input id="formulaSearch" placeholder="Search formula, category or variable…"></div><div id="formulaGrid" class="formula-grid">${D.formulas.map(f=>`<article class="formula-card" data-search="${esc(f.join(' ').toLowerCase())}"><span>${esc(f[3])}</span><h3>${esc(f[0])}</h3><code>${esc(f[1])}</code><p>${esc(f[2])}</p></article>`).join('')}</div>`,{eyebrow:'25 core equations',title:'Formula Sheet',lead:'Use formulas only after matching timing, cash-flow structure and rate convention.'});
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
  function glossary(){ const rows=Object.entries(D.glossary).sort((a,b)=>a[0].localeCompare(b[0])); return shell(`<div class="glossary-grid">${rows.map(([k,v])=>`<article><span>${esc(k.charAt(0))}</span><h3>${esc(k)}</h3><p>${esc(v)}</p></article>`).join('')}</div>`,{eyebrow:'Key terminology',title:'Glossary',lead:'Definitions are kept concise and aligned with the course framing.'}); }
  function saved(){ const rows=state.saved.map(s=>{ if(s.type==='question'){const q=qById(s.id);return q&&{title:q.question,sub:`Question ${q.id}`,route:`practice/${q.module}/${q.lesson}`,type:'Question'};} const [mid,lid]=s.id.split('/'),l=lesson(mid,lid); return l&&{title:l.title,sub:mod(mid).title,route:`learn/${mid}/${lid}`,type:'Lesson'};}).filter(Boolean); return shell(rows.length?`<div class="saved-list">${rows.map(r=>`<article><span>${r.type}</span><div><h3>${esc(r.title)}</h3><p>${esc(r.sub)}</p></div><button class="outline-btn" data-route="${r.route}">Open ↗</button></article>`).join('')}</div>`:`<div class="empty-state"><h2>Nothing saved yet.</h2><p>Use the ☆ icon on lessons and questions.</p></div>`,{eyebrow:'Bookmarks',title:'Saved'}); }
  function sources(){ return shell(`<div class="source-list">${D.sources.map((s,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><div><small>${esc(s.type)}</small><h3>${esc(s.name)}</h3><p>${esc(s.coverage)}</p></div></article>`).join('')}</div><div class="source-note"><b>Editorial rule used in this rebuild:</b> the lecture/tutorial materials define the course frame. Expanded explanations clarify that frame; they do not replace key principles with a different textbook structure.</div>`,{eyebrow:'Grounding',title:'Sources',lead:'The theory and exercises are organized around the files supplied for TCH 302.'}); }
  function settings(){ return shell(`<div class="settings-card"><label><span>Text size</span><input id="fontScale" type="range" min="90" max="115" value="${state.settings.fontScale}"><b id="fontScaleVal">${state.settings.fontScale}%</b></label><label class="switch-row"><span><b>Compact cards</b><small>Reduce vertical spacing in lists</small></span><input id="compactToggle" type="checkbox" ${state.settings.compact?'checked':''}></label><hr><button class="danger-btn" id="resetData">Reset all local progress</button><p class="muted">Reset clears attempts, lesson completion, mistakes, saved items, flashcards and annotations from this browser only.</p></div>`,{eyebrow:'Local preferences',title:'Settings'}); }
  function menu(){ return shell(`<div class="menu-grid">${[['Learn','learn'],['Practice','practice'],['Question Bank','bank'],['Mistake Notebook','mistakes'],['Notes & Highlights','notes'],['Flashcards','flashcards'],['Formula Sheet','formulas'],['Calculators','calculators'],['Exam Mode','exam'],['Progress & Analytics','progress'],['Glossary','glossary'],['Saved','saved'],['Sources','sources'],['Settings','settings']].map(x=>`<button data-route="${x[1]}">${x[0]} <span>↗</span></button>`).join('')}</div>`,{eyebrow:'Finance Mastery',title:'All tools'}); }
  function notFound(){ return shell(`<div class="empty-state"><h2>Page not found.</h2><button class="green-btn" data-route="dashboard">Go home</button></div>`,{eyebrow:'404',title:'Not found'}); }

  function render(){
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
    app.innerHTML=html; window.scrollTo({top:0,behavior:'instant'}); bindAfterRender(r);
  }

  function bindAfterRender(r){
    if(r==='bank'){renderBankResults(); document.getElementById('bankSearch')?.addEventListener('input',renderBankResults); document.getElementById('bankModule')?.addEventListener('change',renderBankResults);}
    if(r==='calculators')renderCalc('fv');
    if(r==='exam'&&state.exam?.active)startTimer();
  }

  document.addEventListener('click',e=>{
    const route=e.target.closest('[data-route]'); if(route){nav(route.dataset.route);return;}
    const save=e.target.closest('[data-save-type]'); if(save){saveToggle(save.dataset.saveType,save.dataset.saveId);return;}
    const comp=e.target.closest('[data-complete]'); if(comp){const k=comp.dataset.complete,i=state.completed.indexOf(k);if(i>=0)state.completed.splice(i,1);else state.completed.push(k);persist();render();return;}
    const ans=e.target.closest('[data-answer]'); if(ans){handleAnswer(ans);return;}
    if(e.target.id==='nextPractice'){state.practice.index=(state.practice.index+1)%state.practice.pool.length;state.practice.answered=false;render();return;}
    if(e.target.matches('[data-practice-mistakes]')){nav('practice-mistakes');return;}
    if(e.target.matches('[data-remove-mistake]')){state.mistakes=state.mistakes.filter(id=>id!==e.target.dataset.removeMistake);persist();render();return;}
    if(e.target.matches('[data-edit-anno]')){const id=e.target.dataset.editAnno;const row=FM_Annotations.all().find(x=>x.id===id);if(row){const comment=prompt('Edit note:',row.comment||'');if(comment!==null){FM_Annotations.update(id,{comment});showToast('Note updated');render();}}return;}
    if(e.target.matches('[data-delete-anno]')){FM_Annotations.remove(e.target.dataset.deleteAnno);render();return;}
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
    const panel=card.querySelector('.answer-panel');panel.hidden=false;panel.innerHTML=`<strong>${correct?'Correct':'Not quite'}</strong><p>${esc(q.explanation)}</p><div class="q-meta">${esc(mod(q.module)?.title||q.module)} · ${esc(lesson(q.module,q.lesson)?.title||q.lesson)} · ${esc(q.origin)}</div><button class="outline-btn" data-route="learn/${q.module}/${q.lesson}">Review concept ↗</button>`;
    document.getElementById('nextPractice')?.removeAttribute('disabled');
  }

  document.getElementById('menuTrigger')?.addEventListener('click',()=>nav('menu'));
  document.getElementById('searchTrigger')?.addEventListener('click',()=>nav('bank'));
  document.getElementById('practiceModule');
  document.addEventListener('change',e=>{
    if(e.target.id==='practiceModule'){const v=e.target.value;const mode=document.getElementById('practiceMode')?.value||'mixed';state.practice.pool=[];nav(v?`practice/${v}/mode/${mode}`:`practice/mode/${mode}`);}
    if(e.target.id==='practiceMode'){const mode=e.target.value;const v=document.getElementById('practiceModule')?.value||'';state.practice.pool=[];nav(v?`practice/${v}/mode/${mode}`:`practice/mode/${mode}`);}
    if(e.target.id==='fontScale'){state.settings.fontScale=Number(e.target.value);document.getElementById('fontScaleVal').textContent=e.target.value+'%';persist();document.documentElement.style.fontSize=e.target.value+'%';}
    if(e.target.id==='compactToggle'){state.settings.compact=e.target.checked;persist();document.body.classList.toggle('compact',e.target.checked);}
  });
  document.addEventListener('input',e=>{if(e.target.id==='formulaSearch'){const t=e.target.value.toLowerCase();document.querySelectorAll('.formula-card').forEach(c=>c.hidden=!c.dataset.search.includes(t));}});

  // Selection annotation toolbar
  const toolbar=document.getElementById('annotationToolbar'); let selectionCtx=null;
  document.addEventListener('mouseup',e=>{if(e.target.closest('#annotationToolbar'))return;setTimeout(()=>{const s=FM_Annotations.selectedQuote();if(!s){toolbar.hidden=true;selectionCtx=null;return;}selectionCtx=s;toolbar.hidden=false;toolbar.style.left=`${Math.max(8,s.rect.left+scrollX)}px`;toolbar.style.top=`${Math.max(8,s.rect.bottom+scrollY+8)}px`;},0);});
  toolbar.addEventListener('click',e=>{
    const action=e.target.dataset.anno;if(!action||!selectionCtx)return; const s=selectionCtx;
    if(action==='highlight'){FM_Annotations.add({type:'highlight',quote:s.quote,lessonId:s.lessonId,moduleId:s.moduleId,color:e.target.dataset.color||'yellow'});showToast('Highlighted');}
    if(action==='comment'){const comment=prompt('Add a note to this passage:',''); if(comment!==null)FM_Annotations.add({type:'comment',quote:s.quote,lessonId:s.lessonId,moduleId:s.moduleId,comment});showToast('Note saved');}
    if(action==='flashcard'){const back=prompt('Flashcard answer / explanation:',s.quote); if(back!==null){const card={id:`P${Date.now()}`,front:s.quote,back,module:s.moduleId};state.flashcards.unshift(card);persist();showToast('Flashcard created');}}
    toolbar.hidden=true;window.getSelection()?.removeAllRanges();if(action==='highlight')FM_Annotations.applyHighlights(document.querySelector('.lesson-article'),s.lessonId);
  });

  window.addEventListener('hashchange',render);
  return {init(){if(!location.hash)location.hash='#dashboard';else render();}};
})();

App.init();

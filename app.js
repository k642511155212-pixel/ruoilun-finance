(function () {
  'use strict';

  const STORAGE_KEY = 'finance-mastery-state-v2';
  const LEGACY_KEY = 'finance-mastery-state-v1';

const MODULE_ILLUSTRATIONS = {
  dashboard: 'fm-hero.webp',
  intro: 'fm-financial-system.webp',
  tvm: 'fm-tvm.webp',
  personal: 'fm-tvm.webp',
  markets: 'fm-financial-system.webp',
  valuation: 'fm-hero.webp',
  risk: 'fm-risk.webp',
  health: 'fm-ratios.webp'
};

const LESSON_ILLUSTRATIONS = {
  'financial-system': 'fm-financial-system.webp',
  'money-functions-payment': 'fm-financial-system.webp',
  'financial-instruments-deep': 'fm-financial-system.webp',
  'bond-price': 'fm-hero.webp',
  'bond-ytm': 'fm-hero.webp',
  'stock-valuation': 'fm-hero.webp',
  'expected-value-risk': 'fm-risk.webp',
  'two-asset-portfolio-risk': 'fm-risk.webp',
  'financial-statements': 'fm-ratios.webp',
  'ratio-analysis': 'fm-ratios.webp',
  'dupont-analysis': 'fm-ratios.webp'
};

  const defaults = {
    theme: 'light',
    viSupport: 'key-terms',
    completedLessons: [],
    attempts: {},
    mistakes: [],
    bookmarks: [],
    flashcards: {},
    annotations: [],
    personalFlashcards: [],
    lastLesson: 'defining-finance'
  };

  const App = {
    data: FINANCE_DATA,
    state: loadState(),
    practice: { ids: [], index: 0, selected: null, checked: false, numeric: '', mode: 'mixed' },
    flash: { index: 0, flipped: false, filter: 'all' },
    exam: null,
    drawer: null,
    mobileOpen: false,
    calcType: 'lump',
    qbank: { module: 'all', origin: 'all', type: 'all', difficulty: 'all', skill: 'all' },
    annotation: { pending: null, toolbarOpen: false },


getModuleIllustration(moduleId) {
  return MODULE_ILLUSTRATIONS[moduleId] || MODULE_ILLUSTRATIONS.dashboard;
},

getLessonIllustration(lessonId) {
  const lesson = this.data.lessons[lessonId];
  return LESSON_ILLUSTRATIONS[lessonId] || this.getModuleIllustration(lesson?.module || 'dashboard');
},

renderIllustration(src, alt, caption='') {
  return `<figure class="illustration-card"><img src="${this.assetUrl(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.style.display='none';this.closest('.illustration-card')?.classList.add('image-missing')"/><figcaption>${esc(caption || alt)}</figcaption></figure>`;
},

assetUrl(path) {
  return String(path || '').replace(/^\/+/, '');
},

renderModuleIcon(moduleId, extraClass='') {
  const icons = {
    intro: '<path d="M4 7h16M6 7v10m4-10v10m4-10v10m4-10v10M3 19h18M5 4h14l2 3H3l2-3Z"/>',
    tvm: '<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2M4 4l2 2M20 4l-2 2"/>',
    personal: '<path d="M4 10h16v9H4zM7 10V7a5 5 0 0 1 10 0v3M8 14h8"/>',
    markets: '<path d="M4 18V9m5 9V5m5 13v-7m5 7V3M3 20h18"/>',
    valuation: '<path d="M5 5h14v14H5zM8 15l3-3 2 2 4-5M8 9h3"/>',
    risk: '<path d="M12 3l7 3v5c0 4.5-2.7 7.7-7 10-4.3-2.3-7-5.5-7-10V6l7-3Z"/><path d="M8 14l2-2 2 1 4-5"/>',
    health: '<path d="M4 19h16M6 16v-4m4 4V8m4 8v-6m4 6V5"/><path d="M5 7l4-3 4 2 5-4"/>'
  };
  const body = icons[moduleId] || icons.intro;
  return `<svg class="module-svg-icon ${esc(extraClass)}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
},

init() {

      applyTheme();
      window.addEventListener('hashchange', () => this.render());
      if (!location.hash) location.hash = '#dashboard';
      this.render();
    },

    render() {
      const route = parseRoute();
      document.title = `${route.title || 'Finance Mastery'} · Finance Mastery`;
      const root = document.getElementById('app');
      root.innerHTML = this.shell(route, this.renderRoute(route));
      this.bindSearch();
      if(window.FinanceAnnotations) window.FinanceAnnotations.afterRender(route);
      if (route.page === 'exam' && this.exam && !this.exam.submitted) this.startExamTicker();
    },

    shell(route, content) {
      const nav = [
        ['dashboard','⌂','Dashboard'], ['learn','▤','Learn'], ['practice','✓','Practice'],
        ['questionbank','☷','Question Bank'], ['mistakes','↻','Mistake Notebook'], ['notes','✎','Notes & Highlights'], ['flashcards','▣','Flashcards'],
        ['formulas','ƒx','Formula Sheet'], ['calculators','∑','Calculators'], ['exam','⏱','Exam Mode'],
        ['progress','◷','Progress & Analytics'], ['glossary','⌕','Glossary'], ['saved','☆','Saved'], ['sources','◫','Sources']
      ];
      return `
      <div class="app-shell">
        <aside class="sidebar ${this.mobileOpen ? 'open' : ''}">
          <div class="brand">
            <div class="brand-mark">FM</div>
            <div><div class="brand-title">Finance Mastery</div><div class="brand-sub">TCH 302 · v${esc(this.data.meta.version)}</div></div>
          </div>
          <div class="nav-group"><div class="nav-label">Study</div>
            ${nav.map(([p,icon,label]) => `<button class="nav-item ${route.page===p?'active':''}" onclick="App.go('${p}')"><span class="nav-icon">${icon}</span>${label}</button>`).join('')}
          </div>
          <div class="nav-group course-mini"><div class="nav-label">Course</div>
            ${this.data.modules.map(m => `<div class="course-link" onclick="App.openModule('${m.id}')"><span class="course-num">${String(m.order).padStart(2,'0')}</span><span>${esc(m.name)}</span></div>`).join('')}
          </div>
          <div class="nav-group"><div class="nav-label">System</div><button class="nav-item ${route.page==='settings'?'active':''}" onclick="App.go('settings')"><span class="nav-icon">⚙</span>Settings</button></div>
        </aside>
        <div class="mobile-overlay ${this.mobileOpen?'open':''}" onclick="App.toggleMobile(false)"></div>
        <main class="main">
          <header class="topbar">
            <button class="icon-btn mobile-menu" aria-label="Open menu" onclick="App.toggleMobile()">☰</button>
            <div class="search-wrap"><span class="search-icon">⌕</span><input id="globalSearch" class="search-input" placeholder="Search concepts, formulas, questions, sources…" autocomplete="off"/><div id="searchResults"></div></div>
            <div class="top-actions"><span class="build-pill hide-mobile">${Object.keys(this.data.lessons).length} lessons · ${this.data.questions.length} questions</span><button class="icon-btn hide-mobile" title="Toggle theme" onclick="App.toggleTheme()">${this.state.theme==='dark'?'☀':'◐'}</button><button class="icon-btn" title="Settings" onclick="App.go('settings')">⚙</button></div>
          </header>
          <div class="content">${content}</div>
        </main>
        ${this.drawer ? this.renderDrawer() : ''}
      </div>`;
    },

    renderRoute(route) {
      switch(route.page) {
        case 'dashboard': return this.renderDashboard();
        case 'learn': return route.arg ? this.renderLesson(route.arg) : this.renderLearnHome();
        case 'module': return this.renderModule(route.arg);
        case 'practice': return this.renderPractice();
        case 'questionbank': return this.renderQuestionBank();
        case 'mistakes': return this.renderMistakes();
        case 'notes': return this.renderNotes();
        case 'flashcards': return this.renderFlashcards();
        case 'formulas': return this.renderFormulas();
        case 'calculators': return this.renderCalculators();
        case 'exam': return this.renderExam();
        case 'progress': return this.renderProgress();
        case 'glossary': return this.renderGlossary();
        case 'saved': return this.renderSaved();
        case 'sources': return this.renderSources();
        case 'settings': return this.renderSettings();
        default: return this.renderDashboard();
      }
    },

    renderDashboard() {
      const stats = this.stats();
      const last = this.data.lessons[this.state.lastLesson] || this.data.lessons['defining-finance'];
      const weak = this.weakConcept();
      const due = this.dueFlashcards().length;
      const original = this.data.questions.filter(q => q.origin.toLowerCase().includes('original') || q.origin.toLowerCase().includes('instructor')).length; const pastExam=this.data.questions.filter(q=>/past exam/i.test(q.origin)).length; const examVariants=this.data.questions.filter(q=>/exam-style variant/i.test(q.origin)).length;
      return `
        <section class="hero hero-polished">
          <div class="hero-copy">
            <div class="eyebrow">Principles of Finance · TCH 302 · v${esc(this.data.meta.version)}</div>
            <h1>Understand finance.<br/>Practice like the exam.</h1>
            <p class="lead">Deep, source-grounded theory, bilingual key terms, worked examples, and 600 classified practice questions across all seven course modules.</p>
            <div class="hero-actions"><button class="btn primary" onclick="App.go('learn/${this.state.lastLesson}')">Continue Learning →</button><button class="btn" onclick="App.startPractice('mixed')">Quick Practice</button></div>
            <div class="hero-progress-card"><div><span class="kicker">Continue learning</span><strong>${esc(last.title)}</strong><small>${this.vi(last.vi)}</small></div><div><div class="progress"><span style="width:${stats.lessonProgress}%"></span></div><div class="progress-meta"><span>Course progress</span><strong>${stats.lessonProgress}%</strong></div></div></div>
          </div>
          <div class="hero-visual-wrap">
            <img class="hero-visual-img" src="${this.assetUrl(this.getModuleIllustration('dashboard'))}" alt="Finance Mastery learning workspace" onerror="this.closest('.hero-visual-wrap').classList.add('image-missing');this.style.display='none'"/>
            <div class="hero-visual-fallback">Finance Mastery visual</div>
            <div class="hero-float hero-float-a"><strong>${this.data.questions.length}</strong><span>Practice questions</span></div>
            <div class="hero-float hero-float-b"><strong>${Object.keys(this.data.lessons).length}</strong><span>Deep lessons</span></div>
          </div>
        </section>
        <div class="grid grid-4">${this.statCard(stats.completedLessons,'Lessons completed')}${this.statCard(stats.accuracy+'%','Practice accuracy')}${this.statCard(this.state.mistakes.length,'Mistakes to review')}${this.statCard(due,'Flashcards due')}</div>
        <section class="section"><div class="section-head"><div><div class="eyebrow">v${esc(this.data.meta.version)} exam-ready depth</div><h2>Built from your course sources</h2></div></div>
          <div class="grid grid-4">${this.statCard(Object.keys(this.data.lessons).length,'Detailed lessons')}${this.statCard(this.data.formulas.length,'Verified formulas')}${this.statCard(this.data.questions.length,'Practice questions')}${this.statCard(examVariants,'Generated exam-style variants')}</div>
        </section>
        <section class="section"><div class="section-head"><div><div class="eyebrow">Adaptive study</div><h2>Recommended next</h2></div></div>
          <div class="card flat recommendation">${weak ? `<strong>${esc(weak.title)}</strong><div class="muted small">${esc(weak.reason)}</div><div class="action-row"><button class="btn sm primary" onclick="App.go('learn/${weak.lesson}')">Review theory</button><button class="btn sm" onclick="App.startPractice('concept','${weak.lesson}')">Practice weak concept</button></div>` : `<strong>Build your performance profile</strong><div class="muted small">Complete a few questions. Recommendations will be based on your actual attempts rather than a random study order.</div>`}</div>
        </section>
        <section class="section"><div class="section-head"><div><div class="eyebrow">Course map</div><h2>Seven source-grounded modules</h2></div><button class="btn sm" onclick="App.go('sources')">Inspect sources</button></div><div class="grid grid-3">${this.data.modules.map(m => this.moduleCard(m)).join('')}</div></section>`;
    },

    moduleCard(m) {
      const completed = m.lessons.filter(x => this.state.completedLessons.includes(x)).length;
      const pct = m.lessons.length ? Math.round(completed/m.lessons.length*100) : 0;
      const qCount = this.data.questions.filter(q=>q.module===m.id).length;
      return `<article class="card module-card"><div class="module-top"><div class="module-heading-icon">${this.renderModuleIcon(m.id,'compact')}<span class="module-number">MODULE ${String(m.order).padStart(2,'0')}</span></div><span class="badge ${m.coverage.toLowerCase()}">${m.coverage} SOURCE COVERAGE</span></div><h3>${esc(m.name)}</h3><div class="vi">${this.vi(m.vi)}</div><div class="module-meta"><span>${m.lessons.length} lessons</span><span>${qCount} practice questions</span></div><div class="progress"><span style="width:${pct}%"></span></div><div class="progress-meta"><span>Lesson progress</span><span>${pct}%</span></div><div class="module-actions"><button class="btn sm primary" onclick="App.openModule('${m.id}')">Open module →</button></div></article>`;
    },

    renderLearnHome() {
      return `<div class="page-head"><div><div class="eyebrow">Learn</div><h1>Course lessons</h1><p class="lead">All seven syllabus modules now use a structured learning flow: big picture → definition → deep explanation → relationships → examples/formulas → exam focus → classified practice. Supporting textbook material deepens only topics already mapped to your course.</p></div></div><div class="grid grid-3">${this.data.modules.map(m=>this.moduleCard(m)).join('')}</div>`;
    },

    renderModule(id) {
      const m = this.data.modules.find(x=>x.id===id) || this.data.modules[0];
      const lessonCards = m.lessons.map((lid,i) => {
        const l = this.data.lessons[lid]; const done = this.state.completedLessons.includes(lid);
        const qn = this.data.questions.filter(q=>q.concept===lid).length;
        return `<article class="card pad flat lesson-card"><div class="lesson-card-top"><div class="lesson-mini-icon">${this.renderModuleIcon(m.id,'mini')}</div><div class="lesson-card-heading"><div class="module-top"><span class="badge">LESSON ${i+1}</span><span class="badge ${done?'high':''}">${done?'COMPLETED':'READY'}</span></div><h3>${esc(l.title)}</h3><div class="vi">${this.vi(l.vi)}</div></div></div><p class="muted small" style="margin:12px 0">${esc(l.objective)}</p><div class="lesson-card-meta"><span>${qn} questions</span><span>${l.formula?l.formula.length+' formula'+(l.formula.length>1?'s':''):'Conceptual'}</span></div><button class="btn sm primary" onclick="App.go('learn/${lid}')">Open lesson →</button></article>`;
      }).join('');
      const totalQ=this.data.questions.filter(q=>q.module===m.id).length;
      const flow=(m.chapterFlow||[]).map((g,i)=>`<div class="chapter-flow-card"><div class="kicker">Stage ${i+1}</div><h3>${esc(g.title)}</h3><ul>${(g.items||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`).join('');
      return `<div class="page-head"><div><div class="eyebrow">Module ${String(m.order).padStart(2,'0')}</div><h1>${esc(m.name)}</h1><div class="vi">${this.vi(m.vi)}</div><p class="lead" style="margin-top:10px">Primary source: ${esc(m.primarySource)}</p></div><div><span class="badge ${m.coverage.toLowerCase()}">${m.coverage} SOURCE COVERAGE</span><div class="action-row"><button class="btn primary" onclick="App.resetPractice('${m.id}');App.go('practice')">Practice chapter · ${totalQ} Q</button></div></div></div>
        <section class="chapter-banner"><img src="${this.assetUrl(this.getModuleIllustration(m.id))}" alt="${esc(m.name)} chapter banner" onerror="this.closest('.chapter-banner').classList.add('image-missing');this.style.display='none'"/><div class="chapter-banner-fallback">${this.renderModuleIcon(m.id,'banner-icon')}</div><div class="chapter-banner-overlay"><span>MODULE ${String(m.order).padStart(2,'0')}</span><strong>${esc(m.name)}</strong><small>${totalQ} practice questions · ${m.lessons.length} lessons</small></div></section>
        <section class="section"><div class="section-head"><div><div class="eyebrow">Chapter roadmap</div><h2>Learn in this order</h2></div></div><div class="grid grid-3">${flow}</div></section>
        ${m.examPatterns?.length?`<section class="section"><div class="section-head"><div><div class="eyebrow">Past-exam signals</div><h2>Recurring ways this module is tested</h2></div></div><div class="card pad flat"><ul class="exam-checklist">${m.examPatterns.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></section>`:''}<section class="section"><div class="section-head"><div><div class="eyebrow">Lessons</div><h2>Deep theory + targeted practice</h2></div></div><div class="grid grid-2">${lessonCards}</div></section>`;
    },

    renderLesson(id) {
      const l = this.data.lessons[id]; if (!l) return this.renderLearnHome();
      this.state.lastLesson = id; saveState();
      const m = this.data.modules.find(x=>x.id===l.module); const lessonIds=m.lessons; const index=lessonIds.indexOf(id); const next=lessonIds[index+1]; const prev=lessonIds[index-1]; const done=this.state.completedLessons.includes(id);
      const formulas = l.formula ? l.formula.map(f=>`<div class="formula-box"><div class="kicker">${esc(f.label)}</div><div class="formula-expression">${f.html}</div></div>`).join('') : '';
      const variables = l.variables ? `<div class="section"><h3>Variables</h3><table class="variable-table">${l.variables.map(v=>`<tr><td>${esc(v[0])}</td><td>${esc(v[1])}</td></tr>`).join('')}</table></div>` : '';
      const worked = l.workedExample ? `<section class="lesson-block annotatable" data-annotation-block="worked-example"><div class="kicker">Worked example</div><h2>${esc(l.workedExample.title)}</h2><div class="worked-example"><p class="worked-prompt">${esc(l.workedExample.prompt)}</p><ol>${l.workedExample.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><div class="worked-answer"><span>Answer / conclusion</span><strong>${esc(l.workedExample.answer)}</strong></div></div></section>` : '';
      const supporting = l.supporting?.length ? `<section class="lesson-block annotatable" data-annotation-block="supporting-sources"><div class="kicker">Supporting sources</div><h2>Cross-reference within your uploads</h2><div class="support-list">${l.supporting.map(s=>`<div class="support-chip">${esc(s)}</div>`).join('')}</div></section>` : '';
      const keyTerms = l.keyTerms?.length ? `<section class="lesson-block annotatable" data-annotation-block="key-terms"><div class="kicker">Bilingual key terms</div><h2>Terms you should recognize</h2><div class="term-grid">${l.keyTerms.map(t=>`<div class="term-card"><strong>${esc(t[0])}</strong><span>${esc(t[1])}</span></div>`).join('')}</div></section>` : '';
      const theory = l.theory?.length ? `<section class="lesson-block annotatable" data-annotation-block="deep-theory"><div class="kicker">Deep theory</div><h2>How the concept works</h2><div class="theory-stack">${l.theory.map(t=>`<div class="theory-card"><h3>${esc(t.title)}</h3><p>${esc(t.body)}</p></div>`).join('')}</div></section>` : '';
      const example = l.example ? `<section class="lesson-block annotatable" data-annotation-block="example"><div class="kicker">Example in context</div><h2>${esc(l.example.title)}</h2><div class="callout primary"><p style="margin:0">${esc(l.example.body)}</p></div></section>` : '';
      const studyFlow=l.studyFlow?.length?`<section class="lesson-block annotatable" data-annotation-block="learning-flow"><div class="kicker">Learning flow</div><h2>Build the idea step by step</h2><div class="study-flow">${l.studyFlow.map(x=>`<div class="study-step"><strong>${esc(x.label)}</strong><p>${esc(x.text)}</p></div>`).join('')}</div></section>`:'';
      const deep=l.deepExplanation?.length?`<section class="lesson-block annotatable" data-annotation-block="deep-explanation"><div class="kicker">Deep explanation</div><h2>Reason through the theory</h2><div class="deep-prose">${l.deepExplanation.map(x=>`<p>${esc(x)}</p>`).join('')}</div></section>`:'';
      const examFocus=l.examFocus?.length?`<section class="lesson-block annotatable" data-annotation-block="exam-focus"><div class="kicker">Exam focus</div><h2>What you should be able to do</h2><ul class="exam-checklist">${l.examFocus.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`:'';
      const qn=this.data.questions.filter(q=>q.concept===id).length;
      const annotationCount=(this.state.annotations||[]).filter(a=>a.lessonId===id).length;
      return `<div class="learn-layout">
        <aside class="card pad flat lesson-outline"><div class="kicker">Lesson outline</div><div class="outline-list">${lessonIds.map(x=>`<button class="outline-item ${x===id?'active':''}" onclick="App.go('learn/${x}')">${esc(this.data.lessons[x].title)}</button>`).join('')}</div></aside>
        <article class="card lesson-main">
          <header class="lesson-header"><div class="eyebrow">Module ${String(m.order).padStart(2,'0')} · ${esc(m.name)}</div><h1>${esc(l.title)}</h1><div class="key-term"><span class="translation">${this.vi(l.vi)}</span></div><p class="lead">${esc(l.objective)}</p><div class="lesson-source-line"><span class="badge">${esc(l.source.level||'Course source')}</span><span>${esc(l.source.file)} · ${esc(l.source.location||'')}</span></div></header>
          <section class="lesson-visual-strip"><div class="lesson-visual-copy">${this.renderModuleIcon(m.id,'lesson-hero-icon')}<div><span class="kicker">Visual chapter cue</span><strong>${esc(m.name)}</strong></div></div><img src="${this.assetUrl(this.getModuleIllustration(m.id))}" alt="${esc(m.name)} visual" loading="lazy" onerror="this.style.display='none'"/></section>
          <section class="lesson-block annotatable" data-annotation-block="intuition"><div class="kicker">Intuition first</div><h2>Why this makes sense</h2><div class="callout primary"><p style="margin:0">${esc(l.intuition)}</p></div></section>
          <section class="lesson-block annotatable" data-annotation-block="definition"><div class="kicker">Source-grounded concept</div><h2>Definition</h2><p>${esc(l.definition)}</p><button class="source-btn" onclick='App.openSource(${jsonAttr(l.source)})'>◫ View source reference</button></section>
          ${keyTerms}
          ${studyFlow}
          ${deep}
          ${theory}
          ${example}
          ${formulas ? `<section class="lesson-block annotatable" data-annotation-block="formula"><div class="kicker">Formula</div><h2>Calculation model</h2>${formulas}${variables}</section>` : ''}
          ${worked}
          <section class="lesson-block annotatable" data-annotation-block="relationships"><div class="kicker">Relationships</div><h2>What connects to what</h2><ul>${l.relationships.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
          ${l.commonMistake ? `<section class="lesson-block annotatable" data-annotation-block="common-mistake"><div class="kicker">Common mistake</div><div class="callout warning"><strong>Watch for this</strong><p>${esc(l.commonMistake)}</p></div></section>`:''}
          ${supporting}
          ${examFocus}
          <section class="lesson-block"><div class="kicker">Active recall</div><h2>Practice now</h2><p class="muted">${qn ? `${qn} source-supported question${qn>1?'s are':' is'} linked directly to this lesson.` : 'No dedicated question yet; use the module mixed set.'}</p><div class="action-row"><button class="btn primary" onclick="App.startPractice('concept','${id}')">Practice this concept</button>${l.formula?`<button class="btn" onclick="App.go('calculators')">Open calculators</button>`:''}</div></section>
          <section class="lesson-block lesson-footer"><button class="btn ${done?'':'primary'}" onclick="App.toggleLessonComplete('${id}')">${done?'✓ Completed · Mark incomplete':'Mark lesson complete'}</button><div class="action-row">${prev?`<button class="btn" onclick="App.go('learn/${prev}')">← Previous</button>`:''}${next?`<button class="btn" onclick="App.go('learn/${next}')">Next →</button>`:''}</div></section>
        </article>
        <aside class="card pad flat lesson-tools"><div class="kicker">Lesson tools</div><div class="annotation-tip"><strong>Select any theory text</strong><span>Highlight it, add a comment, or turn it into a personal flashcard.</span></div><div class="tool-list"><button class="btn sm block" onclick='App.openSource(${jsonAttr(l.source)})'>◫ View source</button><button class="btn sm block" onclick="App.toggleBookmark('lesson','${id}')">${this.isBookmarked('lesson',id)?'★ Saved':'☆ Bookmark'}</button><button class="btn sm block" onclick="App.go('notes')">✎ Notes & highlights (${annotationCount})</button><button class="btn sm block" onclick="App.startPractice('concept','${id}')">✓ Practice (${qn})</button>${l.formula?`<button class="btn sm block" onclick="App.go('formulas')">ƒx Formula sheet</button>`:''}</div><div class="tool-progress"><div class="kicker">Module progress</div><div class="progress"><span style="width:${Math.round(m.lessons.filter(x=>this.state.completedLessons.includes(x)).length/m.lessons.length*100)}%"></span></div></div><div id="lessonAnnotationPanel">${window.FinanceAnnotations?.renderLessonPanel?.(id)||''}</div></aside>
      </div>`;
    },

    renderPractice() {
      if (!this.practice.ids.length && this.practice.mode!=='mistakes') this.resetPractice('mixed',null,true);
      const ids=this.practice.ids;
      const moduleButtons=this.data.modules.map(m=>`<button class="btn sm ${this.practice.mode===m.id?'primary':''}" onclick="App.resetPractice('${m.id}')">${m.order}. ${esc(shortName(m.name))}</button>`).join('');
      const originButtons=`<button class="btn sm ${this.practice.mode==='past'?'primary':''}" onclick="App.resetPractice('past')">Past Exam Drill</button><button class="btn sm ${this.practice.mode==='variants'?'primary':''}" onclick="App.resetPractice('variants')">Exam-Style Variants</button><button class="btn sm ${this.practice.mode==='original'?'primary':''}" onclick="App.resetPractice('original')">Original / Instructor-linked</button><button class="btn sm ${this.practice.mode==='generated'?'primary':''}" onclick="App.resetPractice('generated')">All Generated Practice</button><button class="btn sm ${this.practice.mode==='mistakes'?'primary':''}" onclick="App.resetPractice('mistakes')">My mistakes</button>`;
      if (!ids.length) return `<div class="page-head"><div><div class="eyebrow">Practice</div><h1>No questions in this set yet</h1><p class="lead">Choose another module or build some mistake history first.</p></div></div><div class="filter-row"><button class="btn sm primary" onclick="App.resetPractice('mixed')">Mixed</button>${moduleButtons}${originButtons}</div>`;
      const q=this.data.questions.find(x=>x.id===ids[this.practice.index]); const current=this.practice.index+1; const attempt=this.practice.checked?this.evaluateCurrent(q):null;
      return `<div class="page-head"><div><div class="eyebrow">Practice</div><h1>Active practice</h1><p class="lead">Filter by module or source origin. Every question is classified by skill and difficulty so you can see whether you are practising recall, relationships, application, calculation, interpretation, or exam traps.</p></div><div class="practice-count">${ids.length} questions in set</div></div>
        <div class="filter-row"><button class="btn sm ${this.practice.mode==='mixed'?'primary':''}" onclick="App.resetPractice('mixed')">Mixed</button>${moduleButtons}${originButtons}</div>
        <div class="practice-shell"><article class="card question-card"><div class="question-top"><div><span class="badge">${esc(q.difficulty)}</span> <span class="badge origin">${esc(q.skill||'Practice')}</span> <span class="badge origin">${esc(q.origin)}</span></div><span class="small muted">Question ${current} / ${ids.length}</span></div><div class="small muted question-module">${esc(this.moduleName(q.module))}</div><div class="question-prompt">${esc(q.prompt)}</div>${q.type==='mcq'?this.renderOptions(q,attempt):this.renderNumeric(q,attempt)}${this.practice.checked?this.renderFeedback(q,attempt):''}<div class="practice-controls">${!this.practice.checked?`<button class="btn primary" onclick="App.checkPractice()">Check answer</button>`:`<button class="btn primary" onclick="App.nextPractice()">${current===ids.length?'Restart session':'Next question →'}</button><button class="btn" onclick="App.go('learn/${q.concept}')">Review concept</button>`}<button class="btn" onclick='App.openQuestionSource("${q.id}")'>◫ Source</button><button class="btn" onclick="App.toggleBookmark('question','${q.id}')">${this.isBookmarked('question',q.id)?'★ Saved':'☆ Save'}</button></div></article>
          <aside class="card pad flat session-panel"><div class="kicker">Session</div><div class="session-big">${current}<span>/${ids.length}</span></div><div class="stat-label">Current question</div><div class="section"><div class="kicker">Progress</div><div class="progress"><span style="width:${Math.round((current-1)/ids.length*100)}%"></span></div></div><div class="section"><strong>${esc(q.origin)}</strong><p class="small muted">${/past exam/i.test(q.origin)?'Normalized/adapted from a prior-paper pattern. Use it to learn the tested reasoning, not to memorize wording.':(q.origin.toLowerCase().includes('original')||q.origin.toLowerCase().includes('instructor')?'Tied to a tutorial, instructor-commented Q&A, or original lecture exercise.':'Created from source-supported concepts and formulas.')}</p></div><button class="btn sm block" onclick="App.resetPractice('mixed')">Fresh mixed set</button></aside></div>`;
    },

    renderOptions(q) {
      return q.options.map((o,i)=>{ let cls=this.practice.selected===i?'selected':''; if(this.practice.checked){if(i===q.answer)cls='correct';else if(this.practice.selected===i)cls='incorrect';} return `<button class="option ${cls}" ${this.practice.checked?'disabled':''} onclick="App.selectOption(${i})"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`;}).join('');
    },
    renderNumeric(q) { return `<div class="numeric-wrap"><span class="muted">${q.unit==='$'?'$':q.unit==='₫'?'₫':''}</span><input class="numeric-input" type="number" step="any" value="${esc(String(this.practice.numeric||''))}" ${this.practice.checked?'disabled':''} oninput="App.setNumeric(this.value)" placeholder="Enter answer"/><span class="muted">${q.unit==='%'?'%':''}</span></div>`; },
    renderFeedback(q,attempt) {
      const correct=attempt&&attempt.correct; const answerText=q.type==='mcq'?`${String.fromCharCode(65+q.answer)}. ${q.options[q.answer]}`:`${q.unit==='$'?'$':q.unit==='₫'?'₫':''}${formatAnswer(q.answer)}${q.unit==='%'?'%':''}`;
      const distractor=(!correct&&q.type==='mcq'&&q.distractors&&q.distractors[this.practice.selected])?`<div class="section"><h3>Why your option is not supported</h3><p>${esc(q.distractors[this.practice.selected])}</p></div>`:'';
      return `<div class="feedback ${correct?'correct':'incorrect'}"><h3>${correct?'✓ Correct':'✕ Not quite'}</h3><div class="feedback-meta"><span class="badge">${esc(q.skill||'Practice')}</span><span class="badge">${esc(q.mistakeType||'Concept check')}</span></div><div class="small"><strong>Correct answer:</strong> ${esc(answerText)}</div><div class="section feedback-why"><h3>Why this is correct</h3><p>${esc(q.explanation)}</p></div>${distractor}${q.examTip?`<div class="callout primary feedback-tip"><strong>Exam tip</strong><p>${esc(q.examTip)}</p></div>`:''}<div class="small muted">Source: ${esc(q.source)}</div></div>`;
    },

    renderMistakes() {
      if(!this.state.mistakes.length) return `<div class="page-head"><div><div class="eyebrow">Mistake Notebook</div><h1>Review what went wrong</h1><p class="lead">Incorrect practice answers are saved automatically and stay available for retesting.</p></div></div><div class="card empty"><h2>No mistakes recorded yet</h2><p>Complete practice questions to begin tracking weak concepts.</p><button class="btn primary" onclick="App.startPractice('mixed')">Start practice</button></div>`;
      const items=[...this.state.mistakes].reverse();
      return `<div class="page-head"><div><div class="eyebrow">Mistake Notebook</div><h1>${items.length} recorded mistake${items.length===1?'':'s'}</h1><p class="lead">Your history is preserved even after you improve. Review the linked lesson, then retest.</p></div><button class="btn primary" onclick="App.resetPractice('mistakes');App.go('practice')">Practice my mistakes</button></div><div class="grid grid-2">${items.map(m=>{const q=this.data.questions.find(x=>x.id===m.questionId);if(!q)return'';const correct=q.type==='mcq'?q.options[q.answer]:`${formatAnswer(q.answer)}${q.unit||''}`;return `<article class="card mistake-card"><div class="mistake-head"><div><span class="badge">${esc(q.difficulty)}</span> <span class="badge">${esc(this.moduleName(q.module))}</span></div><span class="small muted">${new Date(m.date).toLocaleDateString()}</span></div><div class="prompt">${esc(q.prompt)}</div><div class="answer-line">Your answer: <strong>${esc(String(m.userAnswer))}</strong></div><div class="answer-line">Correct: <strong>${esc(String(correct))}</strong></div><div class="small muted"><strong>Error category:</strong> ${esc(q.mistakeType||'Concept / setup error')} · <strong>Skill:</strong> ${esc(q.skill||'Practice')}</div><div class="callout"><strong>Explanation</strong><div class="small explanation-text">${esc(q.explanation)}</div></div><div class="practice-controls"><button class="btn sm primary" onclick="App.go('learn/${q.concept}')">Review theory</button><button class="btn sm" onclick="App.startPractice('concept','${q.concept}')">Retest</button></div></article>`;}).join('')}</div>`;
    },

    renderNotes() {
      if(window.FinanceAnnotations) return window.FinanceAnnotations.renderNotesPage();
      return `<div class="card empty"><h2>Annotations are loading…</h2><p>Refresh the page if this message remains visible.</p></div>`;
    },

    renderFlashcards() {
      const cards=this.filteredFlashcards();
      const moduleOptions=this.data.modules.map(m=>`<option value="${m.id}" ${this.flash.filter===m.id?'selected':''}>${m.order}. ${esc(shortName(m.name))}</option>`).join('');
      if(!cards.length) return `<div class="page-head"><div><div class="eyebrow">Flashcards</div><h1>No cards match this filter</h1></div><div><select class="select" onchange="App.setFlashFilter(this.value)"><option value="all">All cards</option><option value="due">Due today</option><option value="personal">Personal flashcards</option>${moduleOptions}</select></div></div>`;
      if(this.flash.index>=cards.length)this.flash.index=0; const card=cards[this.flash.index]; const review=this.state.flashcards[card.id];
      return `<div class="page-head"><div><div class="eyebrow">Flashcards</div><h1>Active recall</h1><p class="lead">Source-grounded course cards and your personal flashcards share the same spaced-review workflow. Personal cards are clearly labeled and remain separate from academic source content.</p></div><div><select class="select" onchange="App.setFlashFilter(this.value)"><option value="all" ${this.flash.filter==='all'?'selected':''}>All cards</option><option value="due" ${this.flash.filter==='due'?'selected':''}>Due today</option><option value="personal" ${this.flash.filter==='personal'?'selected':''}>Personal flashcards</option>${moduleOptions}</select></div></div><div class="flashcard-stage"><div class="card flashcard" onclick="App.flipFlashcard()">${!this.flash.flipped?`<div>${card.personal?`<span class="badge personal-badge flash-personal-badge">PERSONAL</span>`:''}<div class="flashcard-front">${esc(card.front)}</div><div class="flashcard-vi">${this.vi(card.vi)}</div></div><div class="flashcard-hint">Click to reveal answer</div>`:`<div><div class="flashcard-back">${esc(card.back)}</div><div class="small muted flash-source">Source: ${esc(card.source)}</div></div><div class="flashcard-hint">Rate your recall below</div>`}</div>${this.flash.flipped?`<div class="rating-row"><button class="btn danger" onclick="event.stopPropagation();App.rateFlash('again')">Again</button><button class="btn" onclick="event.stopPropagation();App.rateFlash('hard')">Hard</button><button class="btn primary" onclick="event.stopPropagation();App.rateFlash('good')">Good</button><button class="btn" onclick="event.stopPropagation();App.rateFlash('easy')">Easy</button></div>`:''}<div class="small muted flash-meta">Card ${this.flash.index+1} / ${cards.length}${review?.next?` · Next review ${new Date(review.next).toLocaleDateString()}`:''} · ${card.personal?`<button class="btn sm" onclick="event.stopPropagation();App.editPersonalFlashcard('${card.id}')">Edit</button> <button class="btn sm danger" onclick="event.stopPropagation();App.deletePersonalFlashcard('${card.id}')">Delete</button>`:`<button class="btn sm" onclick="App.toggleBookmark('flashcard','${card.id}')">${this.isBookmarked('flashcard',card.id)?'★ Saved':'☆ Save'}</button>`}</div></div>`;
    },

    renderFormulas() {
      const grouped=this.data.modules.map(m=>({m,fs:this.data.formulas.filter(f=>f.module===m.id)})).filter(x=>x.fs.length);
      return `<div class="page-head"><div><div class="eyebrow">Formula Sheet</div><h1>${this.data.formulas.length} verified formulas</h1><p class="lead">Only formulas checked against uploaded slides/Q&A are published. Formula cards point back to their exact source location.</p></div></div>${grouped.map(({m,fs})=>`<section class="section formula-section"><div class="section-head"><div><div class="eyebrow">Module ${m.order}</div><h2>${esc(m.name)}</h2></div></div><div class="grid grid-3">${fs.map(f=>`<article class="card formula-card"><div class="kicker">${esc(this.moduleName(f.module))}</div><h3>${esc(f.name)}</h3><div class="vi">${this.vi(f.vi)}</div><div class="expression">${esc(f.expression)}</div><div class="small"><strong>When to use:</strong> ${esc(f.use)}</div><div class="small muted"><strong>Variables:</strong> ${esc(f.variables)}</div><div class="source">Source: ${esc(f.source)}</div><div class="practice-controls"><button class="btn sm primary" onclick="App.go('learn/${f.lesson}')">Open lesson</button><button class="btn sm" onclick="App.startPractice('concept','${f.lesson}')">Practice</button><button class="btn sm" onclick="App.toggleBookmark('formula','${f.id}')">${this.isBookmarked('formula',f.id)?'★ Saved':'☆ Save'}</button></div></article>`).join('')}</div></section>`).join('')}`;
    },

    renderCalculators() {
      const menus=[['lump','Lump Sum PV / FV'],['ear','APR → EAR'],['annuity','Annuity PV / FV'],['perpetuity','Perpetuity / Growing'],['bond','Bond Price'],['gordon','Stock Dividend Model'],['risk','Expected Value & Risk'],['ratios','Liquidity Ratios']];
      return `<div class="page-head"><div><div class="eyebrow">Learning Calculators</div><h1>Calculate and understand</h1><p class="lead">Deterministic engines use only formulas verified in uploaded sources. Outputs show substitution and interpretation instead of only an answer.</p></div></div><div class="calc-layout"><aside class="card pad flat calc-menu">${menus.map(([id,label])=>`<button class="nav-item ${this.calcType===id?'active':''}" onclick="App.setCalc('${id}')">${esc(label)}</button>`).join('')}</aside>${this.renderCalcPanel()}</div>`;
    },

    renderCalcPanel() {
      if(this.calcType==='ear')return `<section class="card calc-panel"><div class="kicker">TVM · Slide 56</div><h2>Effective Annual Rate</h2><div class="formula-box"><div class="formula-expression">EAR = (1 + APR/m)<sup>m</sup> − 1</div></div><div class="form-grid"><div class="form-field"><label>APR (%)</label><input id="earApr" type="number" step="any" value="8"/></div><div class="form-field"><label>Compounds per year (m)</label><input id="earM" type="number" step="1" value="4"/></div></div><button class="btn primary calc-button" onclick="App.calculateEAR()">Calculate</button><div id="calcResult"></div></section>`;
      if(this.calcType==='annuity')return `<section class="card calc-panel"><div class="kicker">TVM · Slide 33</div><h2>Annuity Value</h2><div class="form-grid"><div class="form-field"><label>Calculation</label><select id="annMode"><option value="pv">Present Value</option><option value="fv">Future Value</option></select></div><div class="form-field"><label>PMT</label><input id="annPmt" type="number" step="any" value="100"/></div><div class="form-field"><label>Rate per period (%)</label><input id="annRate" type="number" step="any" value="5"/></div><div class="form-field"><label>Number of periods</label><input id="annT" type="number" step="1" value="5"/></div></div><button class="btn primary calc-button" onclick="App.calculateAnnuity()">Calculate</button><div id="calcResult"></div></section>`;
      if(this.calcType==='perpetuity')return `<section class="card calc-panel"><div class="kicker">TVM · Slides 44 & 49</div><h2>Perpetuity Value</h2><div class="form-grid"><div class="form-field"><label>Type</label><select id="perpMode"><option value="plain">Perpetuity</option><option value="growing">Growing perpetuity</option></select></div><div class="form-field"><label>First periodic cash flow (C)</label><input id="perpC" type="number" step="any" value="30000"/></div><div class="form-field"><label>Discount rate r (%)</label><input id="perpR" type="number" step="any" value="8"/></div><div class="form-field"><label>Growth rate g (%)</label><input id="perpG" type="number" step="any" value="4"/></div></div><button class="btn primary calc-button" onclick="App.calculatePerpetuity()">Calculate</button><div id="calcResult"></div></section>`;
      if(this.calcType==='bond')return `<section class="card calc-panel"><div class="kicker">Valuation · Slide 15</div><h2>Coupon Bond Price</h2><div class="form-grid"><div class="form-field"><label>Face value (M)</label><input id="bondM" type="number" step="any" value="1000"/></div><div class="form-field"><label>Coupon rate per year (%)</label><input id="bondCoupon" type="number" step="any" value="8"/></div><div class="form-field"><label>Required return / YTM per year (%)</label><input id="bondYtm" type="number" step="any" value="10"/></div><div class="form-field"><label>Years to maturity</label><input id="bondYears" type="number" step="any" value="5"/></div><div class="form-field"><label>Payments per year</label><select id="bondFreq"><option value="1">Annual</option><option value="2" selected>Semiannual</option></select></div></div><button class="btn primary calc-button" onclick="App.calculateBond()">Calculate</button><div id="calcResult"></div></section>`;
      if(this.calcType==='gordon')return `<section class="card calc-panel"><div class="kicker">Valuation · Slides 24–25</div><h2>Dividend Valuation</h2><div class="form-grid"><div class="form-field"><label>Model</label><select id="stockMode"><option value="zero">Zero growth</option><option value="gordon" selected>Constant growth (Gordon)</option></select></div><div class="form-field"><label>Next dividend / constant dividend</label><input id="stockDiv" type="number" step="any" value="5"/></div><div class="form-field"><label>Required return (%)</label><input id="stockR" type="number" step="any" value="12"/></div><div class="form-field"><label>Growth rate (%)</label><input id="stockG" type="number" step="any" value="4"/></div></div><button class="btn primary calc-button" onclick="App.calculateStock()">Calculate</button><div id="calcResult"></div></section>`;
      if(this.calcType==='risk')return `<section class="card calc-panel"><div class="kicker">Risk · Slides 7 & 12</div><h2>Expected Value & Standard Deviation</h2><p class="small muted">Enter two possible payoffs and probabilities. Probabilities should sum to 1.</p><div class="form-grid"><div class="form-field"><label>Payoff 1</label><input id="riskX1" type="number" value="1400"/></div><div class="form-field"><label>Probability 1</label><input id="riskP1" type="number" step="any" value="0.5"/></div><div class="form-field"><label>Payoff 2</label><input id="riskX2" type="number" value="700"/></div><div class="form-field"><label>Probability 2</label><input id="riskP2" type="number" step="any" value="0.5"/></div></div><button class="btn primary calc-button" onclick="App.calculateRisk()">Calculate</button><div id="calcResult"></div></section>`;
      if(this.calcType==='ratios')return `<section class="card calc-panel"><div class="kicker">Firm Performance · Slide 6</div><h2>Liquidity Ratios</h2><div class="form-grid"><div class="form-field"><label>Current assets</label><input id="ratioCA" type="number" value="343"/></div><div class="form-field"><label>Inventory</label><input id="ratioInv" type="number" value="128"/></div><div class="form-field"><label>Cash + marketable securities</label><input id="ratioCash" type="number" value="60"/></div><div class="form-field"><label>Current liabilities</label><input id="ratioCL" type="number" value="225"/></div></div><button class="btn primary calc-button" onclick="App.calculateRatios()">Calculate</button><div id="calcResult"></div></section>`;
      return `<section class="card calc-panel"><div class="kicker">TVM · Slide 8</div><h2>Lump-Sum Valuation</h2><div class="form-grid"><div class="form-field"><label>Calculation</label><select id="lumpMode"><option value="pv">Present Value</option><option value="fv">Future Value</option></select></div><div class="form-field"><label>Cash amount</label><input id="lumpAmount" type="number" step="any" value="1000"/></div><div class="form-field"><label>Rate per period (%)</label><input id="lumpRate" type="number" step="any" value="8"/></div><div class="form-field"><label>Number of periods</label><input id="lumpT" type="number" step="1" value="3"/></div></div><button class="btn primary calc-button" onclick="App.calculateLump()">Calculate</button><div id="calcResult"></div></section>`;
    },

    renderQuestionBank() {
      const f=this.qbank;
      const filtered=this.data.questions.filter(q=>
        (f.module==='all'||q.module===f.module) &&
        (f.origin==='all'||(f.origin==='original'?/original|instructor/i.test(q.origin):f.origin==='past'?/past exam/i.test(q.origin):f.origin==='variants'?/exam-style variant/i.test(q.origin):(!(/original|instructor|past exam/i.test(q.origin))))) &&
        (f.type==='all'||q.type===f.type) &&
        (f.difficulty==='all'||q.difficulty===f.difficulty) &&
        (f.skill==='all'||q.skill===f.skill)
      );
      const modOpts=this.data.modules.map(m=>`<option value="${m.id}" ${f.module===m.id?'selected':''}>${m.order}. ${esc(m.name)}</option>`).join('');
      return `<div class="page-head"><div><div class="eyebrow">Question Bank</div><h1>${filtered.length} / ${this.data.questions.length} questions</h1><p class="lead">Browse without revealing answers. Filter by course module, origin, question type, or difficulty, then launch focused practice.</p></div></div>
        <div class="card pad flat qbank-toolbar"><div class="form-grid"><div class="form-field"><label>Module</label><select onchange="App.setQBankFilter('module',this.value)"><option value="all">All modules</option>${modOpts}</select></div><div class="form-field"><label>Origin</label><select onchange="App.setQBankFilter('origin',this.value)"><option value="all" ${f.origin==='all'?'selected':''}>All origins</option><option value="past" ${f.origin==='past'?'selected':''}>Past exam — normalized/adapted</option><option value="variants" ${f.origin==='variants'?'selected':''}>Generated exam-style variants</option><option value="original" ${f.origin==='original'?'selected':''}>Original / instructor-linked</option><option value="generated" ${f.origin==='generated'?'selected':''}>All generated practice</option></select></div><div class="form-field"><label>Type</label><select onchange="App.setQBankFilter('type',this.value)"><option value="all" ${f.type==='all'?'selected':''}>All types</option><option value="mcq" ${f.type==='mcq'?'selected':''}>MCQ</option><option value="numeric" ${f.type==='numeric'?'selected':''}>Numerical</option></select></div><div class="form-field"><label>Difficulty</label><select onchange="App.setQBankFilter('difficulty',this.value)"><option value="all" ${f.difficulty==='all'?'selected':''}>All levels</option>${['Foundation','Standard','Advanced','Challenge'].map(x=>`<option value="${x}" ${f.difficulty===x?'selected':''}>${x}</option>`).join('')}</select></div><div class="form-field"><label>Skill</label><select onchange="App.setQBankFilter('skill',this.value)"><option value="all" ${f.skill==='all'?'selected':''}>All skills</option>${[...new Set(this.data.questions.map(q=>q.skill).filter(Boolean))].sort().map(x=>`<option value="${esc(x)}" ${f.skill===x?'selected':''}>${esc(x)}</option>`).join('')}</select></div></div></div>
        <div class="grid grid-2 section">${filtered.map(q=>`<article class="card pad flat qbank-card"><div class="qbank-meta"><span class="badge">${esc(q.difficulty)}</span><span class="badge origin">${esc(q.type.toUpperCase())}</span><span class="badge origin">${esc(q.skill||'Practice')}</span><span class="badge origin">${esc(q.origin)}</span></div><h3>${esc(q.prompt)}</h3><div class="small muted">${esc(this.moduleName(q.module))} · ${esc(this.data.lessons[q.concept]?.title||q.concept)}</div><div class="small muted qbank-source">Source: ${esc(q.source)}</div><div class="action-row"><button class="btn sm primary" onclick="App.startPractice('concept','${q.concept}')">Practice concept</button><button class="btn sm" onclick='App.openQuestionSource("${q.id}")'>◫ Source</button><button class="btn sm" onclick="App.toggleBookmark('question','${q.id}')">${this.isBookmarked('question',q.id)?'★ Saved':'☆ Save'}</button></div></article>`).join('')||`<div class="empty card">No questions match these filters.</div>`}</div>`;
    },

    renderProgress() {
      const stats=this.stats();
      const moduleRows=this.data.modules.map(m=>{
        const lessonDone=m.lessons.filter(id=>this.state.completedLessons.includes(id)).length;
        const qs=this.data.questions.filter(q=>q.module===m.id);
        const qa=qs.map(q=>this.state.attempts[q.id]).filter(Boolean);
        const attempts=qa.reduce((n,a)=>n+(a.count||0),0), correct=qa.reduce((n,a)=>n+(a.correct||0),0);
        const accuracy=attempts?Math.round(correct/attempts*100):null;
        const mistakes=this.state.mistakes.filter(x=>qs.some(q=>q.id===x.questionId)).length;
        const due=this.dueFlashcards().filter(c=>c.module===m.id).length;
        return {m,lessonDone,lessonPct:Math.round(lessonDone/m.lessons.length*100),attempts,accuracy,mistakes,due};
      });
      return `<div class="page-head"><div><div class="eyebrow">Progress & Analytics</div><h1>Evidence from your actual study activity</h1><p class="lead">These metrics are calculated from completed lessons, submitted practice attempts, mistakes, and flashcard review dates stored in this browser. No synthetic mastery scores are inserted.</p></div></div>
        <div class="grid grid-4">${this.statCard(stats.lessonProgress+'%','Lesson completion')}${this.statCard(stats.accuracy+'%','Practice accuracy')}${this.statCard(this.state.mistakes.length,'Recorded mistakes')}${this.statCard(this.dueFlashcards().length,'Flashcards due')}</div>
        <section class="section"><div class="section-head"><h2>By module</h2></div><div class="card pad"><div class="table-scroll"><table class="result-table progress-table"><thead><tr><th>Module</th><th>Lessons</th><th>Attempts</th><th>Accuracy</th><th>Mistakes</th><th>Cards due</th></tr></thead><tbody>${moduleRows.map(x=>`<tr><td><strong>${x.m.order}. ${esc(x.m.name)}</strong><div class="progress mini-progress"><span style="width:${x.lessonPct}%"></span></div></td><td>${x.lessonDone}/${x.m.lessons.length} (${x.lessonPct}%)</td><td>${x.attempts}</td><td>${x.accuracy===null?'—':x.accuracy+'%'}</td><td>${x.mistakes}</td><td>${x.due}</td></tr>`).join('')}</tbody></table></div></div></section>`;
    },

    renderGlossary() {
      const cards=[...this.data.flashcards].sort((a,b)=>a.front.localeCompare(b.front));
      return `<div class="page-head"><div><div class="eyebrow">Finance Glossary</div><h1>${cards.length} source-linked key terms</h1><p class="lead">English remains primary; Vietnamese translations support terminology recognition. Entries are built from the same source-grounded flashcard layer.</p></div></div><div class="glossary-search card pad flat"><div class="search-wrap" style="max-width:none"><span class="search-icon">⌕</span><input class="search-input" placeholder="Search English or Vietnamese terms…" oninput="App.filterGlossary(this.value)"/></div></div><div class="grid grid-2 section" id="glossaryGrid">${cards.map(c=>{const hay=[c.front,c.vi,c.back,this.moduleName(c.module),c.source].join(' ').toLowerCase();return `<article class="card pad flat glossary-entry" data-search="${esc(hay)}"><div class="kicker">${esc(this.moduleName(c.module))}</div><h3>${esc(c.front)}</h3><div class="vi">${this.vi(c.vi)}</div><p class="glossary-definition">${esc(c.back)}</p><div class="small muted">Source: ${esc(c.source)}</div><div class="action-row"><button class="btn sm" onclick="App.toggleBookmark('flashcard','${c.id}')">${this.isBookmarked('flashcard',c.id)?'★ Saved':'☆ Save'}</button><button class="btn sm primary" onclick="App.go('flashcards')">Study flashcards</button></div></article>`;}).join('')}</div>`;
    },

    renderSaved() {
      const items=this.state.bookmarks.map(key=>{
        const [type,id]=key.split(':');
        if(type==='lesson'){const x=this.data.lessons[id];return x&&{key,type,title:x.title,meta:`Lesson · ${this.moduleName(x.module)}`,action:`App.go('learn/${id}')`};}
        if(type==='question'){const x=this.data.questions.find(q=>q.id===id);return x&&{key,type,title:x.prompt,meta:`Question · ${this.moduleName(x.module)}`,action:`App.startPractice('concept','${x.concept}')`};}
        if(type==='formula'){const x=this.data.formulas.find(f=>f.id===id);return x&&{key,type,title:x.name,meta:`Formula · ${this.moduleName(x.module)}`,action:`App.go('formulas')`};}
        if(type==='flashcard'){const x=this.allFlashcards().find(c=>c.id===id);return x&&{key,type,title:x.front,meta:`Flashcard · ${x.personal?'Personal · ':''}${this.moduleName(x.module)}`,action:`App.go('flashcards')`};}
        if(type==='source'){const x=this.data.sources.find(a=>a.id===id);return x&&{key,type,title:x.name,meta:`Source · ${x.type}`,action:`App.go('sources')`};}
        return null;
      }).filter(Boolean);
      return `<div class="page-head"><div><div class="eyebrow">Saved</div><h1>${items.length} bookmarked items</h1><p class="lead">Bookmarks persist locally with your study state.</p></div></div>${items.length?`<div class="grid grid-2">${items.map(x=>`<article class="card pad flat saved-card"><span class="badge">${esc(x.type.toUpperCase())}</span><h3 style="margin-top:12px">${esc(x.title)}</h3><div class="small muted">${esc(x.meta)}</div><div class="action-row"><button class="btn sm primary" onclick="${x.action}">Open</button><button class="btn sm" onclick="App.removeBookmark('${x.key}')">Remove</button></div></article>`).join('')}</div>`:`<div class="card empty">Nothing saved yet. Use ☆ Save on lessons, questions, formulas, flashcards, or sources.</div>`}`;
    },

    renderExam() {
      if(!this.exam)return `<div class="exam-shell"><div class="page-head"><div><div class="eyebrow">Exam Mode</div><h1>English-only test conditions</h1><p class="lead">No Vietnamese translations, hints, sources, or immediate explanations during the test. Review appears only after submission.</p></div></div><div class="grid grid-2"><div class="card pad"><h2>Mixed course exam</h2><p class="muted">20 questions · 25 minutes · all seven modules · mixed conceptual and numerical items.</p><button class="btn primary" onclick="App.startExam('mixed')">Start mixed exam</button></div><div class="card pad"><h2>Past-exam drill</h2><p class="muted">20 questions · 25 minutes · normalized/adapted prior-paper patterns from the uploaded archive.</p><button class="btn primary" onclick="App.startExam('past')">Start past-exam drill</button></div><div class="card pad"><h2>Generated exam-style variants</h2><p class="muted">20 questions · 25 minutes · new scenarios and numbers modeled on recurring exam structures, clearly labeled as generated practice.</p><button class="btn primary" onclick="App.startExam('variants')">Start variant exam</button></div></div></div>`;
      if(this.exam.submitted)return this.renderExamResults();
      const q=this.data.questions.find(x=>x.id===this.exam.ids[this.exam.index]); const ans=this.exam.answers[q.id];
      return `<div class="exam-shell"><div class="exam-top"><div><div class="eyebrow">Finance Mastery · Exam Mode</div><strong>Question ${this.exam.index+1} of ${this.exam.ids.length}</strong></div><div class="timer" id="examTimer">${formatTime(this.exam.remaining)}</div></div><div class="exam-nav">${this.exam.ids.map((id,i)=>`<button class="exam-dot ${i===this.exam.index?'current':''} ${this.exam.answers[id]!==undefined?'answered':''} ${this.exam.marked.includes(id)?'marked':''}" onclick="App.examGo(${i})">${i+1}</button>`).join('')}</div><article class="card question-card"><div class="question-top"><span class="badge">${esc(q.difficulty)}</span><label class="small"><input type="checkbox" ${this.exam.marked.includes(q.id)?'checked':''} onchange="App.toggleExamMark('${q.id}')"/> Mark for review</label></div><div class="question-prompt">${esc(q.prompt)}</div>${q.type==='mcq'?q.options.map((o,i)=>`<button class="option ${ans===i?'selected':''}" onclick="App.examAnswer('${q.id}',${i})"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`).join(''):`<div class="numeric-wrap"><span>${q.unit==='$'?'$':q.unit==='₫'?'₫':''}</span><input class="numeric-input" type="number" value="${ans??''}" oninput="App.examNumeric('${q.id}',this.value)"/><span>${q.unit==='%'?'%':''}</span></div>`}<div class="practice-controls"><button class="btn" onclick="App.examPrev()" ${this.exam.index===0?'disabled':''}>← Previous</button>${this.exam.index<this.exam.ids.length-1?`<button class="btn primary" onclick="App.examNext()">Next →</button>`:`<button class="btn primary" onclick="App.submitExam()">Submit exam</button>`}</div></article></div>`;
    },

    renderExamResults() {
      const rows=this.exam.ids.map(id=>{const q=this.data.questions.find(x=>x.id===id);const a=this.exam.answers[id];return {q,a,correct:this.isAnswerCorrect(q,a)};}); const score=Math.round(rows.filter(x=>x.correct).length/rows.length*100);
      const byModule=this.data.modules.map(m=>{const r=rows.filter(x=>x.q.module===m.id);return r.length?{m,score:Math.round(r.filter(x=>x.correct).length/r.length*100),n:r.length}:null;}).filter(Boolean);
      return `<div class="exam-shell"><div class="page-head"><div><div class="eyebrow">Exam Review</div><h1>${score}%</h1><p class="lead">${rows.filter(x=>x.correct).length} of ${rows.length} correct. Sources and explanations are restored after submission.</p></div><button class="btn" onclick="App.resetExam()">New exam</button></div><div class="grid grid-3">${this.statCard(score+'%','Score')}${this.statCard(rows.filter(x=>!x.correct).length,'Incorrect')}${this.statCard(this.exam.marked.length,'Marked for review')}</div><section class="section"><div class="section-head"><h2>Performance by module</h2></div><div class="grid grid-4">${byModule.map(x=>this.statCard(x.score+'%',`${x.m.order}. ${shortName(x.m.name)} · ${x.n} Q`)).join('')}</div></section><div class="card pad section"><h2>Question review</h2><div class="table-scroll"><table class="result-table"><thead><tr><th>#</th><th>Question</th><th>Result</th><th>Explanation</th></tr></thead><tbody>${rows.map((x,i)=>`<tr><td>${i+1}</td><td>${esc(x.q.prompt)}<div class="small muted">${esc(x.q.source)}</div></td><td><span class="badge ${x.correct?'high':''}">${x.correct?'Correct':'Incorrect'}</span></td><td>${esc(x.q.explanation)}</td></tr>`).join('')}</tbody></table></div></div></div>`;
    },

    renderSources() {
      return `<div class="page-head"><div><div class="eyebrow">Sources</div><h1>Academic source inventory</h1><p class="lead">v0.6 keeps the source hierarchy, the supporting LTTC note sets, and the labeled past-exam archive. It also adds 210 generated exam-style variants that imitate recurring question structures while changing scenarios, numbers, and distractors. Prior papers influence practice design, not the governing theory.</p></div></div><div class="source-hierarchy card pad"><div class="kicker">Priority order</div><div class="hierarchy-flow"><span>Latest official lecture</span><b>→</b><span>Instructor-commented Q&A</span><b>→</b><span>Original tutorial</span><b>→</b><span>Supporting textbook</span><b>→</b><span>Practice workbook</span></div><p class="small muted">“Copy of” tutorial files with informal answers remain working notes and are not treated as official answer keys.</p></div><div class="callout warning source-warning"><strong>Bodie scan constraint:</strong> the uploaded Bodie/Merton/Cleeton scan contains 150 PDF pages. Its table of contents lists later chapters, but those chapter pages are not assumed available merely because they appear in the TOC.</div><div class="grid grid-2">${this.data.sources.map(s=>`<article class="card source-card"><div class="kicker">${esc(s.type)}</div><h3>${esc(s.name)}</h3><div class="source-meta"><span class="badge">${esc(s.priority)}</span>${s.pages?`<span class="badge">${s.pages} pages/slides</span>`:''}</div><div class="small"><strong>Mapped to:</strong> ${esc(s.mapped)}</div><p class="muted small">${esc(s.note)}</p><button class="btn sm" onclick="App.toggleBookmark('source','${s.id}')">${this.isBookmarked('source',s.id)?'★ Saved':'☆ Save'}</button></article>`).join('')}</div>`;
    },

    renderSettings() {
      return `<div class="page-head"><div><div class="eyebrow">Settings</div><h1>Learning preferences</h1><p class="lead">Academic content remains English-first. Vietnamese support stays secondary.</p></div></div><div class="grid grid-2"><section class="card pad"><h2>Appearance</h2><div class="form-field"><label>Theme</label><select onchange="App.setTheme(this.value)"><option value="light" ${this.state.theme==='light'?'selected':''}>Light</option><option value="dark" ${this.state.theme==='dark'?'selected':''}>Dark</option></select></div></section><section class="card pad"><h2>Vietnamese Learning Support</h2><div class="form-field"><label>Support level</label><select onchange="App.setViSupport(this.value)"><option value="off" ${this.state.viSupport==='off'?'selected':''}>OFF</option><option value="key-terms" ${this.state.viSupport==='key-terms'?'selected':''}>KEY TERMS ONLY</option></select></div><p class="muted small">Key terms are bilingual; theory, formulas, questions, and exam conditions remain English-first.</p></section><section class="card pad"><h2>Personal study notes</h2><p class="muted">Highlights, comments, and personal flashcards are stored locally in this browser. Export a backup if you want to move them to another device or protect them before clearing browser data.</p><div class="action-row"><button class="btn" onclick="App.exportStudyNotes()">Export notes</button><button class="btn" onclick="App.triggerImportStudyNotes()">Import notes</button></div></section><section class="card pad"><h2>Progress data</h2><p class="muted">Progress, mistakes, bookmarks, annotations, and flashcard scheduling are stored locally in your browser.</p><button class="btn danger" onclick="App.resetProgress()">Reset all local data</button></section><section class="card pad"><h2>Source policy</h2><p class="muted">Uploaded course materials are the academic source of truth. Supporting textbooks/notes enrich only course-mapped topics. Prior papers supply exam patterns and adapted practice, not theory authority; outside web knowledge is not used in this build.</p></section></div>`;
    },

    renderDrawer() {
      const d=this.drawer; const loc=d.location || (d.slide?`Slide ${d.slide}`:'Location preserved in source reference');
      return `<div class="drawer-backdrop" onclick="App.closeDrawer(event)"><aside class="drawer" onclick="event.stopPropagation()"><div class="drawer-head"><div><div class="eyebrow">Source Reference</div><h2>${esc(d.file)}</h2></div><button class="icon-btn" onclick="App.closeDrawer()">×</button></div><div class="grid grid-2"><div class="callout"><div class="kicker">Location</div><strong>${esc(loc)}</strong></div><div class="callout"><div class="kicker">Source level</div><strong>${esc(d.level||'Course source')}</strong></div></div>${d.preview?`<div class="source-preview"><img src="${esc(d.preview)}" alt="Source preview"/></div>`:`<div class="callout warning source-preview-missing">A visual preview is not bundled for this location yet. The file/location reference remains preserved.</div>`}<p class="small muted drawer-note">Source references are kept visible but secondary to the reading flow.</p></aside></div>`;
    },

    statCard(value,label){return `<div class="card stat"><div class="stat-value">${esc(String(value))}</div><div class="stat-label">${esc(label)}</div></div>`;},
    stats(){const attempted=Object.values(this.state.attempts);const total=attempted.reduce((a,b)=>a+(b.count||0),0);const correct=attempted.reduce((a,b)=>a+(b.correct||0),0);const totalLessons=Object.keys(this.data.lessons).length;return {completedLessons:this.state.completedLessons.length,lessonProgress:totalLessons?Math.round(this.state.completedLessons.length/totalLessons*100):0,accuracy:total?Math.round(correct/total*100):0};},
    weakConcept(){const rows=Object.entries(this.state.attempts).map(([qid,a])=>{const q=this.data.questions.find(x=>x.id===qid);if(!q||!a.count)return null;return {q,rate:a.correct/a.count,wrong:a.count-a.correct,count:a.count};}).filter(Boolean).filter(x=>x.wrong>0).sort((a,b)=>a.rate-b.rate||b.wrong-a.wrong);if(!rows.length)return null;const w=rows[0],lesson=this.data.lessons[w.q.concept];return {title:lesson?.title||w.q.concept,lesson:w.q.concept,reason:`${w.wrong} incorrect attempt${w.wrong===1?'':'s'} across ${w.count} attempt${w.count===1?'':'s'} (${Math.round(w.rate*100)}% correct).`};},

    // Navigation + state
    go(path){this.mobileOpen=false;location.hash='#'+path;}, openModule(id){this.go('module/'+id);}, toggleMobile(force){this.mobileOpen=typeof force==='boolean'?force:!this.mobileOpen;this.render();}, toggleTheme(){this.setTheme(this.state.theme==='dark'?'light':'dark');}, setTheme(v){this.state.theme=v;saveState();applyTheme();this.render();}, setViSupport(v){this.state.viSupport=v;saveState();this.render();}, vi(text){return this.state.viSupport==='off'?'':esc(text||'');},
    resetProgress(){if(confirm('Reset all local Finance Mastery progress, mistakes, annotations, personal flashcards, and review history?')){this.state=freshState();saveState();this.exam=null;this.render();}},
    toggleLessonComplete(id){const i=this.state.completedLessons.indexOf(id);if(i>=0)this.state.completedLessons.splice(i,1);else this.state.completedLessons.push(id);saveState();this.render();},
    toggleBookmark(type,id){const key=type+':'+id,i=this.state.bookmarks.indexOf(key);if(i>=0)this.state.bookmarks.splice(i,1);else this.state.bookmarks.push(key);saveState();toast(i>=0?'Bookmark removed':'Saved');this.render();}, isBookmarked(type,id){return this.state.bookmarks.includes(type+':'+id);},

    setQBankFilter(key,value){this.qbank[key]=value;this.render();},
    filterGlossary(query){const q=String(query||'').trim().toLowerCase();document.querySelectorAll('.glossary-entry').forEach(el=>{el.style.display=!q||String(el.dataset.search||'').includes(q)?'':'none';});},
    removeBookmark(key){const i=this.state.bookmarks.indexOf(key);if(i>=0)this.state.bookmarks.splice(i,1);saveState();this.render();},

    // Sources
    openSource(source){this.drawer=source;this.render();},
    openQuestionSource(id){const q=this.data.questions.find(x=>x.id===id);this.drawer={file:q?.source||'Source',location:q?.source||'',level:q?.origin||'Practice source',preview:this.previewForQuestion(q)};this.render();},
    previewForQuestion(q){if(!q)return null;const map={
      'defining-finance':'assets/source-previews/intro-slide-12.png','household-decisions':'assets/source-previews/intro-slide-20.png','financial-system':'assets/source-previews/intro-slide-45.png','lump-sum':'assets/source-previews/tvm-slide-8.png','apr-ear':'assets/source-previews/tvm-slide-56.png','annuities':'assets/source-previews/tvm-slide-33.png','npv':'assets/source-previews/tvm-slide-61.png','mortgage-arm':'assets/source-previews-v02/qa1-page-1.png','loan-consolidation':'assets/source-previews-v02/qa3-page-1.png','bond-valuation':'assets/source-previews-v02/valuation-slide-15.png','equity-valuation':'assets/source-previews-v02/valuation-slide-25.png','probability-expected-value':'assets/source-previews-v02/risk-slide-7.png','variance-standard-deviation':'assets/source-previews-v02/risk-slide-12.png','leverage-risk':'assets/source-previews-v02/risk-slide-14.png','risk-aversion-premium':'assets/source-previews-v02/risk-slide-19.png','liquidity-ratios':'assets/source-previews-v02/perf-slide-6.png','dupont-analysis':'assets/source-previews-v02/perf-slide-23.png','money-functions-payment':'assets/source-previews-v05/markets-notes-01.png','financial-instruments-deep':'assets/source-previews-v05/markets-notes-01.png','market-quality-regulation':'assets/source-previews-v05/markets-notes-01.png','portfolio-risk-two-assets':'assets/source-previews-v05/past-exams-01.png'};return map[q.concept]||(/past exam/i.test(q.origin)?'assets/source-previews-v05/past-exams-01.png':null);},
    closeDrawer(){this.drawer=null;this.render();},

    // Practice
    resetPractice(mode='mixed',concept=null,silent=false){let qs=[...this.data.questions];if(this.data.modules.some(m=>m.id===mode))qs=qs.filter(q=>q.module===mode);if(mode==='concept'&&concept)qs=qs.filter(q=>q.concept===concept);if(mode==='mistakes'){const set=new Set(this.state.mistakes.map(m=>m.questionId));qs=qs.filter(q=>set.has(q.id));}if(mode==='past')qs=qs.filter(q=>/past exam/i.test(q.origin));if(mode==='variants')qs=qs.filter(q=>/exam-style variant/i.test(q.origin));if(mode==='original')qs=qs.filter(q=>/original|instructor/i.test(q.origin));if(mode==='generated')qs=qs.filter(q=>!(/original|instructor|past exam/i.test(q.origin)));qs=shuffle(qs);this.practice={ids:qs.map(q=>q.id),index:0,selected:null,checked:false,numeric:'',mode};if(!silent){if(location.hash!=='#practice')this.go('practice');else this.render();}},
    startPractice(mode='mixed',concept=null){this.resetPractice(mode,concept);}, selectOption(i){if(this.practice.checked)return;this.practice.selected=i;this.render();}, setNumeric(v){this.practice.numeric=v;},
    checkPractice(){const q=this.data.questions.find(x=>x.id===this.practice.ids[this.practice.index]);if(q.type==='mcq'&&this.practice.selected===null)return toast('Choose an answer first.');if(q.type==='numeric'&&(this.practice.numeric===''||Number.isNaN(Number(this.practice.numeric))))return toast('Enter a numeric answer first.');this.practice.checked=true;const result=this.evaluateCurrent(q);this.recordAttempt(q,result);this.render();},
    evaluateCurrent(q){const user=q.type==='mcq'?this.practice.selected:Number(this.practice.numeric);return {user,correct:this.isAnswerCorrect(q,user)};},
    isAnswerCorrect(q,user){if(user===undefined||user===null||Number.isNaN(Number(user)))return false;if(q.type==='mcq')return Number(user)===Number(q.answer);const tol=q.tolerance??0.01;return Math.abs(Number(user)-Number(q.answer))<=tol;},
    recordAttempt(q,result){const a=this.state.attempts[q.id]||{count:0,correct:0};a.count++;if(result.correct)a.correct++;this.state.attempts[q.id]=a;if(!result.correct){const ua=q.type==='mcq'?(q.options[result.user]??'No answer'):`${result.user}${q.unit||''}`;this.state.mistakes.push({questionId:q.id,userAnswer:ua,date:new Date().toISOString()});}saveState();},
    nextPractice(){this.practice.index=this.practice.index>=this.practice.ids.length-1?0:this.practice.index+1;this.practice.selected=null;this.practice.numeric='';this.practice.checked=false;this.render();},

    // Flashcards
    allFlashcards(){return [...this.data.flashcards,...(this.state.personalFlashcards||[])];},
    filteredFlashcards(){let c=this.allFlashcards();if(this.flash.filter==='personal')c=c.filter(x=>x.personal);else if(this.data.modules.some(m=>m.id===this.flash.filter))c=c.filter(x=>x.module===this.flash.filter);if(this.flash.filter==='due')c=this.dueFlashcards();return c;},
    dueFlashcards(){const now=Date.now();return this.allFlashcards().filter(c=>{const r=this.state.flashcards[c.id];return !r||!r.next||new Date(r.next).getTime()<=now;});},
    flipFlashcard(){this.flash.flipped=!this.flash.flipped;this.render();}, setFlashFilter(v){this.flash.filter=v;this.flash.index=0;this.flash.flipped=false;this.render();},
    rateFlash(rating){const cards=this.filteredFlashcards(),c=cards[this.flash.index];if(!c)return;const days={again:0,hard:1,good:3,easy:7}[rating],next=new Date();next.setDate(next.getDate()+days);const rec=this.state.flashcards[c.id]||{count:0};rec.count++;rec.last=new Date().toISOString();rec.next=next.toISOString();rec.rating=rating;this.state.flashcards[c.id]=rec;saveState();this.flash.index=(this.flash.index+1)%cards.length;this.flash.flipped=false;this.render();},

    // Personal annotations, comments, and flashcards
    bindAnnotationUI(route){
      this.hideSelectionToolbar();
      if(route.page!=='learn'||!route.arg)return;
      this.applyLessonAnnotations(route.arg);
      const main=document.querySelector('.lesson-main');
      if(!main)return;
      const capture=()=>setTimeout(()=>this.captureTheorySelection(route.arg),0);
      main.addEventListener('mouseup',capture);
      main.addEventListener('keyup',capture);
      main.addEventListener('touchend',capture,{passive:true});
      main.addEventListener('click',e=>{const mark=e.target.closest('.annotation-mark');if(mark&&window.getSelection()?.isCollapsed!==false){e.preventDefault();this.openAnnotationDetails((mark.dataset.annotationIds||'').split(/\s+/).filter(Boolean));}});
      if(this._pendingAnnotationScroll){const id=this._pendingAnnotationScroll;this._pendingAnnotationScroll=null;setTimeout(()=>{const el=document.querySelector(`[data-annotation-ids~="${id}"]`);if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.add('annotation-focus');setTimeout(()=>el.classList.remove('annotation-focus'),1800);}},80);}
    },

    captureTheorySelection(lessonId){
      const sel=window.getSelection();
      if(!sel||sel.rangeCount===0||sel.isCollapsed){this.hideSelectionToolbar();return;}
      const text=sel.toString().replace(/\s+/g,' ').trim();
      if(text.length<2){this.hideSelectionToolbar();return;}
      if(text.length>1600){this.hideSelectionToolbar();toast('Select a shorter passage (up to about 1,600 characters).');return;}
      const range=sel.getRangeAt(0);
      const startEl=range.startContainer.nodeType===1?range.startContainer:range.startContainer.parentElement;
      const endEl=range.endContainer.nodeType===1?range.endContainer:range.endContainer.parentElement;
      const startBlock=startEl?.closest?.('.annotatable');
      const endBlock=endEl?.closest?.('.annotatable');
      if(!startBlock||startBlock!==endBlock){this.hideSelectionToolbar();return;}
      const blockId=startBlock.dataset.annotationBlock;
      const pre=document.createRange();pre.selectNodeContents(startBlock);pre.setEnd(range.startContainer,range.startOffset);
      const start=pre.toString().length;
      const end=start+range.toString().length;
      const rect=range.getBoundingClientRect();
      this.annotation.pending={lessonId,blockId,start,end,text:range.toString().trim(),rect:{left:rect.left,top:rect.top,width:rect.width,height:rect.height}};
      this.showSelectionToolbar();
    },

    showSelectionToolbar(){
      this.hideSelectionToolbar();
      const p=this.annotation.pending;if(!p)return;
      const el=document.createElement('div');el.id='selectionStudyToolbar';el.className='selection-study-toolbar';
      el.innerHTML=`<div class="selection-toolbar-label">Highlight</div><button class="color-dot yellow" title="Yellow highlight" aria-label="Yellow highlight" onclick="App.addHighlight('yellow')"></button><button class="color-dot rose" title="Rose highlight" aria-label="Rose highlight" onclick="App.addHighlight('rose')"></button><button class="color-dot green" title="Green highlight" aria-label="Green highlight" onclick="App.addHighlight('green')"></button><button class="color-dot blue" title="Blue highlight" aria-label="Blue highlight" onclick="App.addHighlight('blue')"></button><span class="selection-toolbar-divider"></span><button class="selection-tool-btn" onclick="App.openCommentComposer()">✎ Comment</button><button class="selection-tool-btn" onclick="App.openFlashcardComposer()">▣ Flashcard</button>`;
      document.body.appendChild(el);
      const box=el.getBoundingClientRect();
      const left=Math.max(10,Math.min(window.innerWidth-box.width-10,p.rect.left+p.rect.width/2-box.width/2));
      const top=Math.max(10,Math.min(window.innerHeight-box.height-10,p.rect.top-box.height-12));
      el.style.left=`${left}px`;el.style.top=`${top}px`;
      this.annotation.toolbarOpen=true;
      setTimeout(()=>document.addEventListener('mousedown',this._annotationOutsideHandler=(e)=>{if(!e.target.closest('#selectionStudyToolbar')&&!e.target.closest('.annotation-modal'))this.hideSelectionToolbar();},{once:true}),0);
    },

    hideSelectionToolbar(){const el=document.getElementById('selectionStudyToolbar');if(el)el.remove();this.annotation.toolbarOpen=false;},

    findOrCreateAnnotation(p){
      let a=(this.state.annotations||[]).find(x=>x.lessonId===p.lessonId&&x.blockId===p.blockId&&x.start===p.start&&x.end===p.end);
      if(!a){const lesson=this.data.lessons[p.lessonId];a={id:uid('ann'),lessonId:p.lessonId,moduleId:lesson?.module||'',blockId:p.blockId,start:p.start,end:p.end,text:p.text,highlight:null,comment:'',flashcardId:null,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};this.state.annotations.push(a);}return a;
    },

    addHighlight(color='yellow'){
      const p=this.annotation.pending;if(!p)return;
      const a=this.findOrCreateAnnotation(p);a.highlight=color;a.updatedAt=new Date().toISOString();saveState();this.hideSelectionToolbar();window.getSelection()?.removeAllRanges();this.annotation.pending=null;this.rerenderPreserveScroll();toast('Highlight saved');
    },

    openCommentComposer(annotationId=null){
      let a=annotationId?(this.state.annotations||[]).find(x=>x.id===annotationId):null;
      const p=a?{lessonId:a.lessonId,blockId:a.blockId,start:a.start,end:a.end,text:a.text}:this.annotation.pending;if(!p)return;
      this.hideSelectionToolbar();
      this.showAnnotationModal(`<div class="eyebrow">Personal comment</div><h2>Add a note to this passage</h2><blockquote class="modal-quote">${esc(p.text)}</blockquote><label class="modal-label">Your comment</label><textarea id="annotationCommentInput" class="annotation-textarea" maxlength="3000" placeholder="Write what you want to remember, a clarification, an exam trap, or your own explanation…">${esc(a?.comment||'')}</textarea><div class="modal-actions"><button class="btn" onclick="App.closeAnnotationModal()">Cancel</button><button class="btn primary" onclick="App.saveCommentFromModal('${annotationId||''}')">Save comment</button></div>`);
      setTimeout(()=>document.getElementById('annotationCommentInput')?.focus(),30);
    },

    saveCommentFromModal(annotationId=''){
      const comment=(document.getElementById('annotationCommentInput')?.value||'').trim();if(!comment)return toast('Write a comment first.');
      let a=annotationId?(this.state.annotations||[]).find(x=>x.id===annotationId):null;if(!a){const p=this.annotation.pending;if(!p)return;a=this.findOrCreateAnnotation(p);}a.comment=comment;a.updatedAt=new Date().toISOString();saveState();this.closeAnnotationModal();window.getSelection()?.removeAllRanges();this.annotation.pending=null;this.rerenderPreserveScroll();toast('Comment saved');
    },

    openFlashcardComposer(annotationId=null,flashcardId=null){
      let a=annotationId?(this.state.annotations||[]).find(x=>x.id===annotationId):null;
      let card=flashcardId?(this.state.personalFlashcards||[]).find(x=>x.id===flashcardId):a?.flashcardId?(this.state.personalFlashcards||[]).find(x=>x.id===a.flashcardId):null;
      const p=a?{lessonId:a.lessonId,blockId:a.blockId,start:a.start,end:a.end,text:a.text}:this.annotation.pending;
      if(!p&&!card)return;
      const lessonId=p?.lessonId||card.lessonId;const lesson=this.data.lessons[lessonId];
      this.hideSelectionToolbar();
      this.showAnnotationModal(`<div class="eyebrow">Personal flashcard</div><h2>${card?'Edit':'Turn selection into'} a flashcard</h2><label class="modal-label">Front</label><textarea id="personalCardFront" class="annotation-textarea compact" maxlength="1600">${esc(card?.front||p?.text||'')}</textarea><label class="modal-label">Back / answer</label><textarea id="personalCardBack" class="annotation-textarea" maxlength="4000" placeholder="Explain the concept in your own words, write the definition, formula logic, or exam cue…">${esc(card?.back||'')}</textarea><div class="modal-source-line">Linked lesson: <strong>${esc(lesson?.title||lessonId||'Personal')}</strong></div><div class="modal-actions"><button class="btn" onclick="App.closeAnnotationModal()">Cancel</button><button class="btn primary" onclick="App.savePersonalFlashcard('${annotationId||''}','${card?.id||''}')">${card?'Update':'Create'} flashcard</button></div>`);
      setTimeout(()=>document.getElementById('personalCardBack')?.focus(),30);
    },

    savePersonalFlashcard(annotationId='',cardId=''){
      const front=(document.getElementById('personalCardFront')?.value||'').trim(),back=(document.getElementById('personalCardBack')?.value||'').trim();if(!front||!back)return toast('Both front and back are required.');
      let a=annotationId?(this.state.annotations||[]).find(x=>x.id===annotationId):null;if(!a&&this.annotation.pending)a=this.findOrCreateAnnotation(this.annotation.pending);
      const lessonId=a?.lessonId||this.annotation.pending?.lessonId||'';const lesson=this.data.lessons[lessonId];
      let card=cardId?(this.state.personalFlashcards||[]).find(x=>x.id===cardId):a?.flashcardId?(this.state.personalFlashcards||[]).find(x=>x.id===a.flashcardId):null;
      if(card){card.front=front;card.back=back;card.updatedAt=new Date().toISOString();}
      else{card={id:uid('pf'),front,back,vi:'',module:lesson?.module||'intro',lessonId,source:`Personal · ${lesson?.title||'Finance Mastery lesson'}`,personal:true,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};this.state.personalFlashcards.push(card);if(a)a.flashcardId=card.id;}
      if(a)a.updatedAt=new Date().toISOString();saveState();this.closeAnnotationModal();window.getSelection()?.removeAllRanges();this.annotation.pending=null;this.rerenderPreserveScroll();toast('Personal flashcard saved');
    },

    showAnnotationModal(html){this.closeAnnotationModal();const wrap=document.createElement('div');wrap.id='annotationModal';wrap.className='annotation-modal-backdrop';wrap.innerHTML=`<div class="annotation-modal" role="dialog" aria-modal="true"><button class="annotation-modal-close" aria-label="Close" onclick="App.closeAnnotationModal()">×</button>${html}</div>`;wrap.addEventListener('mousedown',e=>{if(e.target===wrap)this.closeAnnotationModal();});document.body.appendChild(wrap);},
    closeAnnotationModal(){document.getElementById('annotationModal')?.remove();},

    applyLessonAnnotations(lessonId){
      const annotations=(this.state.annotations||[]).filter(a=>a.lessonId===lessonId);
      document.querySelectorAll('.annotatable[data-annotation-block]').forEach(block=>{
        const anns=annotations.filter(a=>a.blockId===block.dataset.annotationBlock&&a.end>a.start);if(!anns.length)return;
        const plainText=block.textContent||'';anns.forEach(a=>{const current=plainText.slice(a.start,a.end);if(normalizeText(current)!==normalizeText(a.text)){const exact=plainText.indexOf(a.text);if(exact>=0){a.start=exact;a.end=exact+a.text.length;}}});
        const walker=document.createTreeWalker(block,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement?.closest('.annotation-mark')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
        const nodes=[];let node,pos=0;while(node=walker.nextNode()){nodes.push({node,start:pos,end:pos+node.nodeValue.length});pos+=node.nodeValue.length;}
        nodes.forEach(info=>{
          const relevant=anns.filter(a=>a.start<info.end&&a.end>info.start);if(!relevant.length)return;
          const boundaries=new Set([0,info.node.nodeValue.length]);relevant.forEach(a=>{boundaries.add(Math.max(0,a.start-info.start));boundaries.add(Math.min(info.node.nodeValue.length,a.end-info.start));});const points=[...boundaries].sort((a,b)=>a-b);const frag=document.createDocumentFragment();
          for(let i=0;i<points.length-1;i++){const s=points[i],e=points[i+1],value=info.node.nodeValue.slice(s,e);if(!value)continue;const gs=info.start+s,ge=info.start+e;const cover=relevant.filter(a=>a.start<ge&&a.end>gs);if(!cover.length){frag.appendChild(document.createTextNode(value));continue;}const span=document.createElement('span');span.className='annotation-mark';const latestHighlight=cover.filter(a=>a.highlight).sort((a,b)=>new Date(a.updatedAt)-new Date(b.updatedAt)).pop();if(latestHighlight)span.classList.add(`highlight-${latestHighlight.highlight}`);if(cover.some(a=>a.comment))span.classList.add('has-comment');if(cover.some(a=>a.flashcardId))span.classList.add('has-flashcard');span.dataset.annotationIds=cover.map(a=>a.id).join(' ');span.textContent=value;const comments=cover.filter(a=>a.comment).map(a=>a.comment);if(comments.length)span.title=comments.join('\n');frag.appendChild(span);}info.node.replaceWith(frag);
        });
      });
    },

    openAnnotationDetails(ids){
      const anns=(this.state.annotations||[]).filter(a=>ids.includes(a.id));if(!anns.length)return;const a=anns[0];const lesson=this.data.lessons[a.lessonId];
      this.showAnnotationModal(`<div class="eyebrow">Saved annotation</div><h2>${esc(lesson?.title||'Lesson note')}</h2><blockquote class="modal-quote">${esc(a.text)}</blockquote>${a.comment?`<div class="annotation-comment modal-comment"><strong>Your comment</strong><p>${esc(a.comment)}</p></div>`:''}<div class="annotation-detail-tags">${a.highlight?`<span class="badge">${esc(a.highlight)} highlight</span>`:''}${a.flashcardId?`<span class="badge personal-badge">Personal flashcard</span>`:''}</div><div class="modal-actions wrap"><button class="btn" onclick="App.openCommentComposer('${a.id}')">${a.comment?'Edit':'Add'} comment</button>${a.comment?`<button class="btn" onclick="App.removeAnnotationComment('${a.id}')">Remove comment</button>`:''}${a.flashcardId?`<button class="btn" onclick="App.openFlashcardComposer('${a.id}','${a.flashcardId}')">Edit flashcard</button>`:`<button class="btn" onclick="App.openFlashcardComposer('${a.id}')">Create flashcard</button>`}${a.highlight?`<button class="btn" onclick="App.removeAnnotationHighlight('${a.id}')">Remove highlight</button>`:''}<button class="btn danger" onclick="App.deleteAnnotation('${a.id}')">Delete annotation</button></div>`);
    },

    editAnnotationComment(id){this.openCommentComposer(id);},
    removeAnnotationComment(id){const a=(this.state.annotations||[]).find(x=>x.id===id);if(!a)return;a.comment='';a.updatedAt=new Date().toISOString();this.pruneEmptyAnnotation(a);saveState();this.closeAnnotationModal();this.rerenderPreserveScroll();toast('Comment removed');},
    removeAnnotationHighlight(id){const a=(this.state.annotations||[]).find(x=>x.id===id);if(!a)return;a.highlight=null;a.updatedAt=new Date().toISOString();this.pruneEmptyAnnotation(a);saveState();this.closeAnnotationModal();this.rerenderPreserveScroll();toast('Highlight removed');},
    deleteAnnotation(id){const i=(this.state.annotations||[]).findIndex(x=>x.id===id);if(i<0)return;if(!confirm('Delete this annotation? Personal flashcards created from it will be kept unless you delete them separately.'))return;this.state.annotations.splice(i,1);saveState();this.closeAnnotationModal();this.rerenderPreserveScroll();},
    pruneEmptyAnnotation(a){if(!a.highlight&&!a.comment&&!a.flashcardId){const i=this.state.annotations.indexOf(a);if(i>=0)this.state.annotations.splice(i,1);}},
    openAnnotationInLesson(lessonId,id){if(window.FinanceAnnotations)return window.FinanceAnnotations.openInLesson(id);this._pendingAnnotationScroll=id;this.go(`learn/${lessonId}`);},

    editPersonalFlashcard(id){if(window.FinanceAnnotations)return window.FinanceAnnotations.editPersonalFlashcard(id);const card=(this.state.personalFlashcards||[]).find(x=>x.id===id);if(!card)return;this.openFlashcardComposer(null,id);},
    deletePersonalFlashcard(id){if(window.FinanceAnnotations)return window.FinanceAnnotations.deletePersonalFlashcard(id);if(!confirm('Delete this personal flashcard?'))return;const i=(this.state.personalFlashcards||[]).findIndex(x=>x.id===id);if(i>=0)this.state.personalFlashcards.splice(i,1);(this.state.annotations||[]).forEach(a=>{if(a.flashcardId===id){a.flashcardId=null;this.pruneEmptyAnnotation(a);}});delete this.state.flashcards[id];saveState();this.flash.index=0;this.render();toast('Personal flashcard deleted');},

    filterNotes(query){const q=String(query||'').trim().toLowerCase();document.querySelectorAll('[data-note-search]').forEach(el=>{el.style.display=!q||String(el.dataset.noteSearch||'').includes(q)?'':'none';});},
    rerenderPreserveScroll(){const y=window.scrollY;this.render();requestAnimationFrame(()=>window.scrollTo({top:y,behavior:'auto'}));},

    exportStudyNotes(){const payload={format:'finance-mastery-personal-study-v1',exportedAt:new Date().toISOString(),annotations:this.state.annotations||[],personalFlashcards:this.state.personalFlashcards||[],personalReviews:Object.fromEntries(Object.entries(this.state.flashcards||{}).filter(([id])=>(this.state.personalFlashcards||[]).some(c=>c.id===id)))};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`finance-mastery-notes-${new Date().toISOString().slice(0,10)}.json`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);},
    triggerImportStudyNotes(){const input=document.createElement('input');input.type='file';input.accept='.json,application/json';input.onchange=()=>this.importStudyNotes(input.files?.[0]);input.click();},
    async importStudyNotes(file){if(!file)return;try{const payload=JSON.parse(await file.text());if(payload.format!=='finance-mastery-personal-study-v1')throw new Error('Unsupported backup format');const merge=(oldArr,newArr)=>{const m=new Map((oldArr||[]).map(x=>[x.id,x]));(newArr||[]).forEach(x=>m.set(x.id,x));return [...m.values()];};this.state.annotations=merge(this.state.annotations,payload.annotations);this.state.personalFlashcards=merge(this.state.personalFlashcards,payload.personalFlashcards);this.state.flashcards={...this.state.flashcards,...(payload.personalReviews||{})};saveState();this.render();toast('Study notes imported');}catch(e){toast('Could not import this backup file.');}},

    // Calculators
    setCalc(t){this.calcType=t;this.render();},
    calculateLump(){const mode=val('lumpMode'),amount=num('lumpAmount'),r=num('lumpRate')/100,t=num('lumpT');if(!validNums(amount,r,t))return toast('Check calculator inputs.');const result=mode==='pv'?amount/Math.pow(1+r,t):amount*Math.pow(1+r,t);const formula=mode==='pv'?'PV = FVₜ / (1+r)ᵗ':'FVₜ = PV(1+r)ᵗ';const subst=mode==='pv'?`PV = ${fmt(amount)} / (1 + ${r.toFixed(4)})^${t}`:`FV = ${fmt(amount)} × (1 + ${r.toFixed(4)})^${t}`;calcResult(resultCard('$'+fmt(result),`${formula}\n${subst}\n= ${fmt(result)}`,'2023 Time Value of Money.pdf · Slide 8'));},
    calculateEAR(){const apr=num('earApr')/100,m=num('earM');if(!validNums(apr,m)||m<=0)return toast('Check calculator inputs.');const ear=Math.pow(1+apr/m,m)-1;calcResult(resultCard((ear*100).toFixed(4)+'%',`EAR = (1 + APR/m)^m − 1\nEAR = (1 + ${apr.toFixed(4)}/${m})^${m} − 1\n= ${(ear*100).toFixed(4)}%`,'2023 Time Value of Money.pdf · Slide 56'));},
    calculateAnnuity(){const mode=val('annMode'),pmt=num('annPmt'),r=num('annRate')/100,t=num('annT');if(!validNums(pmt,r,t)||r===0)return toast('Check inputs; rate must be non-zero.');const result=mode==='pv'?pmt*((1-1/Math.pow(1+r,t))/r):pmt*((Math.pow(1+r,t)-1)/r);const formula=mode==='pv'?'PV = PMT × [(1 − 1/(1+r)^t)/r]':'FV = PMT × [((1+r)^t − 1)/r]';calcResult(resultCard('$'+fmt(result),`${formula}\nPMT=${fmt(pmt)}, r=${r.toFixed(4)}, t=${t}\n= ${fmt(result)}`,'2023 Time Value of Money.pdf · Slide 33'));},
    calculatePerpetuity(){const mode=val('perpMode'),c=num('perpC'),r=num('perpR')/100,g=num('perpG')/100;if(!validNums(c,r,g)||r<=0)return toast('Check inputs.');if(mode==='growing'&&g>=r)return toast('Course formula requires g < r.');const result=mode==='plain'?c/r:c/(r-g);const steps=mode==='plain'?`PV = C/r\nPV = ${fmt(c)}/${r.toFixed(4)}\n= ${fmt(result)}`:`PV = C/(r−g)\nPV = ${fmt(c)}/(${r.toFixed(4)}−${g.toFixed(4)})\n= ${fmt(result)}`;calcResult(resultCard('$'+fmt(result),steps,mode==='plain'?'2023 Time Value of Money.pdf · Slide 44':'2023 Time Value of Money.pdf · Slide 49'));},
    calculateBond(){const M=num('bondM'),coupon=num('bondCoupon')/100,ytm=num('bondYtm')/100,years=num('bondYears'),freq=num('bondFreq');if(!validNums(M,coupon,ytm,years,freq)||freq<=0)return toast('Check inputs.');const n=years*freq,r=ytm/freq,INT=M*coupon/freq;const pvFace=M/Math.pow(1+r,n);const pvCoupons=r===0?INT*n:INT*((1-1/Math.pow(1+r,n))/r);const price=pvFace+pvCoupons;calcResult(resultCard('$'+fmt(price),`Periodic coupon = ${fmt(INT)}\nPeriodic required return = ${(r*100).toFixed(4)}%\nPayments n = ${n}\nPV(par) = ${fmt(pvFace)}\nPV(coupons) = ${fmt(pvCoupons)}\nBond price = ${fmt(price)}`,'2023 Valuation of securities.pdf · Slide 15'));},
    calculateStock(){const mode=val('stockMode'),div=num('stockDiv'),r=num('stockR')/100,g=num('stockG')/100;if(!validNums(div,r,g)||r<=0)return toast('Check inputs.');if(mode==='gordon'&&g>=r)return toast('Constant-growth formula requires required return > growth rate.');const price=mode==='zero'?div/r:div/(r-g);const steps=mode==='zero'?`P₀ = Div/rₛ\nP₀ = ${fmt(div)}/${r.toFixed(4)}\n= ${fmt(price)}`:`P₀ = Div₁/(rₛ−g)\nP₀ = ${fmt(div)}/(${r.toFixed(4)}−${g.toFixed(4)})\n= ${fmt(price)}`;calcResult(resultCard('$'+fmt(price),steps,mode==='zero'?'2023 Valuation of securities.pdf · Slide 24':'2023 Valuation of securities.pdf · Slide 25'));},
    calculateRisk(){const x1=num('riskX1'),p1=num('riskP1'),x2=num('riskX2'),p2=num('riskP2');if(!validNums(x1,p1,x2,p2)||Math.abs((p1+p2)-1)>0.0001)return toast('Probabilities must sum to 1.');const ev=p1*x1+p2*x2,variance=p1*Math.pow(x1-ev,2)+p2*Math.pow(x2-ev,2),sd=Math.sqrt(variance);calcResult(resultCard(`E(X) = ${fmt(ev)} · σ = ${fmt(sd)}`,`E(X) = ${p1}×${x1} + ${p2}×${x2} = ${fmt(ev)}\nVariance = ${fmt(variance)}\nStandard deviation = √Variance = ${fmt(sd)}`,'2023 Understanding risk.pdf · Slides 7 & 12'));},
    calculateRatios(){const ca=num('ratioCA'),inv=num('ratioInv'),cash=num('ratioCash'),cl=num('ratioCL');if(!validNums(ca,inv,cash,cl)||cl===0)return toast('Check inputs; current liabilities cannot be zero.');const current=ca/cl,quick=(ca-inv)/cl,cashR=cash/cl;calcResult(resultCard(`Current ${current.toFixed(3)} · Quick ${quick.toFixed(3)} · Cash ${cashR.toFixed(3)}`,`Current = ${ca}/${cl} = ${current.toFixed(3)}\nQuick = (${ca}−${inv})/${cl} = ${quick.toFixed(3)}\nCash = ${cash}/${cl} = ${cashR.toFixed(3)}`,'2023 Analyzing Firm Performance.pdf · Slide 6'));},

    // Exam
    startExam(mode='mixed'){let pool=[...this.data.questions];if(mode==='past')pool=pool.filter(q=>/past exam/i.test(q.origin));if(mode==='variants')pool=pool.filter(q=>/exam-style variant/i.test(q.origin));const ids=shuffle(pool).slice(0,Math.min(20,pool.length)).map(q=>q.id);this.exam={ids,index:0,answers:{},marked:[],remaining:1500,submitted:false,lastTick:Date.now(),mode};this.render();},
    startExamTicker(){clearInterval(this._examTimer);this._examTimer=setInterval(()=>{if(!this.exam||this.exam.submitted){clearInterval(this._examTimer);return;}const now=Date.now(),elapsed=Math.floor((now-this.exam.lastTick)/1000);if(elapsed>0){this.exam.remaining=Math.max(0,this.exam.remaining-elapsed);this.exam.lastTick=now;const el=document.getElementById('examTimer');if(el)el.textContent=formatTime(this.exam.remaining);if(this.exam.remaining<=0){clearInterval(this._examTimer);this.submitExam(true);}}},1000);},
    examAnswer(id,i){this.exam.answers[id]=i;this.render();}, examNumeric(id,v){this.exam.answers[id]=v===''?undefined:Number(v);}, examGo(i){this.exam.index=i;this.render();}, examNext(){if(this.exam.index<this.exam.ids.length-1)this.exam.index++;this.render();}, examPrev(){if(this.exam.index>0)this.exam.index--;this.render();}, toggleExamMark(id){const i=this.exam.marked.indexOf(id);if(i>=0)this.exam.marked.splice(i,1);else this.exam.marked.push(id);}, submitExam(auto=false){if(!auto&&!confirm('Submit the exam now?'))return;this.exam.submitted=true;clearInterval(this._examTimer);this.render();}, resetExam(){this.exam=null;clearInterval(this._examTimer);this.render();},

    // Search
    bindSearch(){const input=document.getElementById('globalSearch');if(!input)return;input.addEventListener('input',e=>this.search(e.target.value));input.addEventListener('focus',e=>{if(e.target.value.trim())this.search(e.target.value);});document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap')){const box=document.getElementById('searchResults');if(box)box.innerHTML='';}},{once:true});},
    search(query){const box=document.getElementById('searchResults');if(!box)return;const q=query.trim().toLowerCase();if(!q){box.innerHTML='';return;}const results=[];Object.entries(this.data.lessons).forEach(([id,l])=>{const hay=[l.title,l.vi,l.definition,l.intuition,...l.relationships].join(' ').toLowerCase();if(hay.includes(q))results.push({title:l.title,meta:`Lesson · ${this.moduleName(l.module)}`,action:`App.go('learn/${id}')`});});this.data.formulas.forEach(f=>{if([f.name,f.vi,f.expression,f.use].join(' ').toLowerCase().includes(q))results.push({title:f.name,meta:`Formula · ${f.source}`,action:`App.go('formulas')`});});this.data.questions.forEach(x=>{if([x.prompt,x.explanation,x.origin].join(' ').toLowerCase().includes(q))results.push({title:x.prompt,meta:`Practice · ${this.moduleName(x.module)} · ${x.origin}`,action:`App.startPractice('concept','${x.concept}')`});});this.allFlashcards().forEach(c=>{if([c.front,c.vi,c.back,c.source].join(' ').toLowerCase().includes(q))results.push({title:c.front,meta:`${c.personal?'Personal flashcard':'Glossary / Flashcard'} · ${this.moduleName(c.module)}`,action:c.personal?`App.go('flashcards');App.setFlashFilter('personal')`:`App.go('glossary')`});});this.data.sources.forEach(s=>{if([s.name,s.type,s.mapped,s.note].join(' ').toLowerCase().includes(q))results.push({title:s.name,meta:`Source · ${s.type} · ${s.mapped}`,action:`App.go('sources')`});});this.data.modules.forEach(m=>{if([m.name,m.vi,...m.topics].join(' ').toLowerCase().includes(q))results.push({title:m.name,meta:`Module · ${m.lessons.length} lessons`,action:`App.openModule('${m.id}')`});});box.innerHTML=`<div class="search-results">${results.length?results.slice(0,12).map(r=>`<div class="search-result" onclick="${r.action}"><div class="search-result-title">${esc(r.title)}</div><div class="search-result-meta">${esc(r.meta)}</div></div>`).join(''):`<div class="empty small">No matching source-grounded content.</div>`}</div>`;},
    moduleName(id){return this.data.modules.find(m=>m.id===id)?.name||id;}
  };

  function freshState(){return {...defaults,completedLessons:[],attempts:{},mistakes:[],bookmarks:[],flashcards:{},annotations:[],personalFlashcards:[]};}
  function loadState(){try{let raw=localStorage.getItem(STORAGE_KEY);if(raw)return {...freshState(),...JSON.parse(raw)};raw=localStorage.getItem(LEGACY_KEY);if(raw){const migrated={...freshState(),...JSON.parse(raw)};localStorage.setItem(STORAGE_KEY,JSON.stringify(migrated));return migrated;}return freshState();}catch(e){return freshState();}}
  function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(App.state));}
  function applyTheme(){document.documentElement.dataset.theme=App.state.theme;}
  function parseRoute(){const raw=(location.hash||'#dashboard').slice(1),[page,arg]=raw.split('/');const titles={dashboard:'Dashboard',learn:'Learn',module:'Module',practice:'Practice',questionbank:'Question Bank',mistakes:'Mistake Notebook',notes:'Notes & Highlights',flashcards:'Flashcards',formulas:'Formula Sheet',calculators:'Calculators',exam:'Exam Mode',progress:'Progress & Analytics',glossary:'Glossary',saved:'Saved',sources:'Sources',settings:'Settings'};return {page,arg,title:titles[page]};}
  function esc(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  function jsonAttr(obj){return JSON.stringify(obj).replace(/'/g,"&#39;");}
  function val(id){return document.getElementById(id)?.value;} function num(id){return Number(val(id));} function validNums(...xs){return xs.every(Number.isFinite);} function fmt(n){return Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});} function formatAnswer(n){return Number(n).toLocaleString('en-US',{maximumFractionDigits:4});}
  function calcResult(html){const el=document.getElementById('calcResult');if(el)el.innerHTML=html;} function resultCard(value,steps,source){return `<div class="result-box"><div class="kicker">Answer</div><div class="result-value">${esc(value)}</div><div class="calc-steps">${esc(steps)}</div><div class="small muted">Source formula: ${esc(source)}</div></div>`;}
  function normalizeText(s){return String(s||'').replace(/\s+/g,' ').trim();}
  function uid(prefix='id'){return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;}
  function shuffle(arr){return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);} function formatTime(s){const m=Math.floor(s/60),sec=s%60;return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;}
  function toast(msg){const old=document.querySelector('.toast');if(old)old.remove();const el=document.createElement('div');el.className='toast';el.textContent=msg;document.body.appendChild(el);setTimeout(()=>el.remove(),1800);} function shortName(s){return s.replace('Understanding ','').replace('Managing ','').replace('Introduction to ','Intro: ');}

  window.App=App; App.init();
})();

"use strict";

window.FM_Annotations = (() => {
  const KEY = "fm_annotations_v1";
  const read = () => {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
    catch { return []; }
  };
  const write = rows => localStorage.setItem(KEY, JSON.stringify(rows));
  const all = () => read();
  const byLesson = lessonId => read().filter(x => x.lessonId === lessonId);
  const add = entry => {
    const rows = read();
    const item = { id: `A${Date.now()}${Math.random().toString(36).slice(2,6)}`, createdAt: new Date().toISOString(), ...entry };
    rows.unshift(item); write(rows); return item;
  };
  const remove = id => write(read().filter(x => x.id !== id));
  const update = (id, patch) => write(read().map(x => x.id === id ? {...x, ...patch} : x));

  function unwrapMarks(root){
    root.querySelectorAll("mark.fm-highlight").forEach(mark => {
      const text = document.createTextNode(mark.textContent);
      mark.replaceWith(text);
    });
    root.normalize();
  }

  function highlightExactText(root, quote, color){
    if(!quote || quote.length < 2) return false;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node){
        if(!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if(node.parentElement?.closest("mark,.lesson-tools,.source-chip")) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.includes(quote) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const node = walker.nextNode();
    if(!node) return false;
    const idx = node.nodeValue.indexOf(quote);
    const before = node.nodeValue.slice(0,idx), after = node.nodeValue.slice(idx+quote.length);
    const mark = document.createElement("mark");
    mark.className = "fm-highlight";
    mark.dataset.color = color || "yellow";
    mark.textContent = quote;
    const frag=document.createDocumentFragment();
    if(before) frag.append(document.createTextNode(before));
    frag.append(mark);
    if(after) frag.append(document.createTextNode(after));
    node.replaceWith(frag);
    return true;
  }

  function applyHighlights(root, lessonId){
    if(!root) return;
    unwrapMarks(root);
    byLesson(lessonId).filter(x=>x.type==="highlight").slice().reverse().forEach(a=>highlightExactText(root,a.quote,a.color));
  }

  function selectedQuote(){
    const sel = window.getSelection();
    if(!sel || sel.isCollapsed) return null;
    const txt = sel.toString().replace(/\s+/g," ").trim();
    if(txt.length < 2 || txt.length > 600) return null;
    const anchor = sel.anchorNode?.parentElement;
    const lesson = anchor?.closest("[data-lesson-id]");
    if(!lesson) return null;
    return { quote: txt, lessonId: lesson.dataset.lessonId, moduleId: lesson.dataset.moduleId || "", rect: sel.getRangeAt(0).getBoundingClientRect() };
  }

  return { all, byLesson, add, remove, update, applyHighlights, selectedQuote };
})();

/* Sprechen! — practice features: dashboard, flashcards (spaced repetition), gap texts,
   fill-in tables, article trainer, quizzes / A1 mock exam and grammar chapters.
   Relies on globals from index.html: course, usefulWordGroups, speakGerman, canSpeak, state, chooseLesson. */
(() => {
  const D = window.PRACTICE_DATA;
  const byId = id => document.getElementById(id);
  const esc = value => String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
  const shuffle = list => { const a = [...list]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sample = (list, n) => shuffle(list).slice(0, n);
  const uniqBy = (list, key) => [...new Map(list.map(item => [key(item), item])).values()];
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const load = (key, fallback) => { try { const v = JSON.parse(localStorage.getItem(key)); return v && typeof v === "object" ? { ...fallback, ...v } : { ...fallback }; } catch { return { ...fallback }; } };
  const persist = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ } };
  const speak = text => { if (typeof speakGerman === "function") speakGerman([text]); };
  const audioOK = typeof canSpeak !== "undefined" && canSpeak;
  const localDay = (t = Date.now()) => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };
  const dayKey = () => new Date(localDay()).toISOString().slice(0, 10);
  const speakBtn = text => audioOK ? `<button class="icon-btn" type="button" data-say="${esc(text)}" aria-label="${esc(text)} anhören">🔊</button>` : "";
  const articleClass = text => (/^(der|die|das) /.exec(text) || [])[1] || "";

  const progress = load("sprechen-practice-v1", { quiz: {}, mock: [], gaps: {}, tables: {}, artikel: 0 });
  const saveProgress = () => persist("sprechen-practice-v1", progress);

  /* ================================================================ Answer checking */
  const norm = s => String(s).trim().replace(/\s+/g, " ").replace(/[.!?]$/, "");
  const fold = s => norm(s).toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");
  function judge(value, alternatives) {
    const v = norm(value);
    if (!v) return "empty";
    if (alternatives.some(a => norm(a) === v)) return "ok";
    if (alternatives.some(a => norm(a).toLowerCase() === v.toLowerCase())) return "case";
    if (alternatives.some(a => fold(a) === fold(v))) return "umlaut";
    return "wrong";
  }
  const judgeNote = { case: "Achte auf Groß-/Kleinschreibung.", umlaut: "Fast! Schreib ä, ö, ü oder ß." };

  /* ================================================================ Router */
  const ROUTES = ["start", "stunden", "karten", "ueben", "test", "grammatik"];
  const TITLES = { start: "Übersicht", stunden: "Stunden", karten: "Karteikarten", ueben: "Üben", test: "Test", grammatik: "Grammatik" };
  let currentView = "";
  function route() {
    const [rawName, sub, id] = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
    const name = ROUTES.includes(rawName) ? rawName : "start";
    const changed = name !== currentView;
    currentView = name;
    document.body.dataset.view = name;
    document.querySelectorAll("[data-route]").forEach(link => {
      const active = link.dataset.route === name;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
    });
    const title = byId("appbarTitle");
    if (title) title.textContent = TITLES[name];
    if (audioOK && changed) window.speechSynthesis.cancel();
    ({ start: renderStart, karten: renderCards, ueben: () => renderPractice(sub, id), test: () => renderQuizHome(sub), grammatik: () => renderGrammar(sub) })[name]?.();
    if (changed && name !== "stunden") window.scrollTo({ top: 0 });
  }
  const go = hash => { if (location.hash === hash) route(); else location.hash = hash; };

  /* ================================================================ Flashcards (SRS) */
  const MIN = 60e3, DAY = 864e5;
  const srs = load("sprechen-srs-v1", { cards: {}, day: "", newCount: 0, newPerDay: 15, dir: "de", deck: "words" });
  const saveSrs = () => persist("sprechen-srs-v1", srs);
  const resetDay = () => { if (srs.day !== dayKey()) { srs.day = dayKey(); srs.newCount = 0; saveSrs(); } };

  const wordCards = () => usefulWordGroups.flatMap(([, list]) => list.map(([de, en]) => ({ id: "w:" + de, de, en })));
  const phraseCards = lessons => uniqBy(lessons.flatMap(lesson => lesson.phrases.map(([de, en]) => ({ id: "p:" + de, de, en }))), c => c.id);
  const tableById = id => D.tables.find(t => t.id === id);
  let decks = [];
  function buildDecks() {
    const nounCards = D.nouns.map(([a, n, en]) => ({ id: "w:" + a + " " + n, de: a + " " + n, en }));
    const perfekt = tableById("perfekt").rows.map(([inf, aux, part]) => ({ id: "v:pp:" + inf, de: `${aux} ${part}`, en: `${inf} → Perfekt (er/sie)`, deFront: inf, hint: "Perfekt?" }));
    const verbForms = ["vokalwechsel", "modalverben", "sein-haben", "wissen-moegen"].flatMap(id => {
      const t = tableById(id);
      return t.head.slice(1).map((verb, col) => ({ id: "v:f:" + verb, de: `du ${t.rows[1][col + 1]} · er ${t.rows[2][col + 1]} · ihr ${t.rows[4][col + 1]}`, en: `${verb}: du / er / ihr`, deFront: verb, hint: "du · er · ihr?" }));
    });
    decks = [
      { key: "words", group: "Wortschatz", label: "Alle 200 A1-Wörter", cards: wordCards() },
      { key: "nouns", group: "Wortschatz", label: "60 Nomen mit Artikel", cards: nounCards },
      ...usefulWordGroups.map(([title, list], i) => ({ key: "wg" + i, group: "Wortschatz nach Thema", label: title, cards: list.map(([de, en]) => ({ id: "w:" + de, de, en })) })),
      { key: "phr-a11", group: "Redemittel", label: "A1.1 · Stunden 1–14", cards: phraseCards(course.slice(0, 14)) },
      { key: "phr-a12", group: "Redemittel", label: "A1.2 · Stunden 15–20", cards: phraseCards(course.slice(14, 20)) },
      { key: "phr-a2", group: "Redemittel", label: "A2 · Stunden 21–32", cards: phraseCards(course.slice(20)) },
      { key: "pp", group: "Grammatik", label: "Perfekt: Partizip II", cards: perfekt },
      { key: "vf", group: "Grammatik", label: "Verbformen: du · er · ihr", cards: verbForms },
      ...course.map((lesson, i) => ({ key: "l" + i, group: "Einzelne Stunden", label: `${i + 1}. ${lesson.title}`, cards: phraseCards([lesson]) }))
    ];
  }
  const currentDeck = () => decks.find(d => d.key === srs.deck) || decks[0];

  function schedule(s, rating, now = Date.now()) {
    const n = { ease: 2.5, ivl: 0, step: 0, reps: 0, lapses: 0, learning: true, isNew: true, ...s };
    const graduate = ivl => Object.assign(n, { learning: false, ivl, step: 0, due: localDay(now) + ivl * DAY });
    if (n.learning) {
      if (rating === 1) Object.assign(n, { step: 0, due: now + MIN });
      else if (rating === 2) n.due = now + 6 * MIN;
      else if (rating === 3) { if (n.step >= 1) graduate(Math.max(1, n.ivl || 1)); else Object.assign(n, { step: 1, due: now + 10 * MIN }); }
      else graduate(Math.max(4, n.ivl + 1));
    } else if (rating === 1) {
      Object.assign(n, { lapses: n.lapses + 1, ease: Math.max(1.3, n.ease - 0.2), ivl: Math.max(1, Math.round(n.ivl * 0.5)), learning: true, step: 1, due: now + 10 * MIN });
    } else if (rating === 2) { n.ease = Math.max(1.3, n.ease - 0.15); graduate(Math.max(n.ivl + 1, Math.round(n.ivl * 1.2))); }
    else if (rating === 3) graduate(Math.max(n.ivl + 1, Math.round(n.ivl * n.ease)));
    else { n.ease += 0.15; graduate(Math.max(n.ivl + 2, Math.round(n.ivl * n.ease * 1.3))); }
    n.reps += 1;
    n.isNew = false;
    return n;
  }
  function intervalLabel(s, rating) {
    const now = Date.now();
    const n = schedule(s, rating, now);
    if (n.learning) { const m = Math.round((n.due - now) / MIN); return m < 2 ? "<1 Min" : `${m} Min`; }
    if (n.ivl < 31) return `${n.ivl} T`;
    return `${(n.ivl / 30).toFixed(1).replace(".", ",")} Mo`;
  }
  function deckStats(deck) {
    resetDay();
    const now = Date.now();
    let fresh = 0, learning = 0, due = 0, mature = 0;
    deck.cards.forEach(c => {
      const s = srs.cards[c.id];
      if (!s) fresh += 1;
      else if (s.learning) learning += 1;
      else if (s.due <= now) due += 1;
      if (s && !s.learning && s.ivl >= 7) mature += 1;
    });
    return { fresh, newToday: Math.min(fresh, Math.max(0, srs.newPerDay - srs.newCount)), learning, due, mature, total: deck.cards.length };
  }
  let lastCardId = null;
  function nextCard() {
    resetDay();
    const now = Date.now();
    const cards = currentDeck().cards;
    const withState = cards.map(c => [c, srs.cards[c.id]]);
    const byDue = (a, b) => a[1].due - b[1].due;
    const learningDue = withState.filter(([, s]) => s && s.learning && s.due <= now).sort(byDue);
    const reviewDue = withState.filter(([, s]) => s && !s.learning && s.due <= now).sort(byDue);
    const fresh = srs.newCount < srs.newPerDay ? withState.filter(([, s]) => !s) : [];
    const ahead = withState.filter(([, s]) => s && s.learning && s.due <= now + 20 * MIN).sort(byDue);
    const candidates = [...learningDue, ...reviewDue, ...fresh.slice(0, 1), ...ahead];
    const pick = candidates.find(([c]) => c.id !== lastCardId) || candidates[0];
    return pick ? pick[0] : null;
  }
  let activeCard = null, cardFlipped = false;

  function renderCards() {
    if (!decks.length) buildDecks();
    const deck = currentDeck();
    const stats = deckStats(deck);
    const groups = [...new Set(decks.map(d => d.group))];
    byId("view-cards").innerHTML = `
      <header class="view-head"><p class="eyebrow">Karteikarten · Spaced Repetition</p><h1>Karten lernen</h1><p class="lead">Wie Anki: Du siehst eine Karte, erinnerst dich, drehst sie um und bewertest ehrlich. Schwierige Karten kommen schnell zurück, leichte erst nach Tagen.</p></header>
      <div class="cards-layout">
      <div class="toolbar" id="cardsToolbar">
        <label class="field"><span>Stapel</span><select id="deckSelect">${groups.map(g => `<optgroup label="${esc(g)}">${decks.filter(d => d.group === g).map(d => `<option value="${d.key}" ${d.key === deck.key ? "selected" : ""}>${esc(d.label)} (${d.cards.length})</option>`).join("")}</optgroup>`).join("")}</select></label>
        <div class="field"><span>Richtung</span><div class="seg" role="group" aria-label="Richtung"><button type="button" data-dir="de" class="${srs.dir === "de" ? "active" : ""}">DE → EN</button><button type="button" data-dir="en" class="${srs.dir === "en" ? "active" : ""}">EN → DE</button></div></div>
        <label class="field"><span>Neue / Tag</span><select id="newPerDay">${[5, 10, 15, 20, 30, 50].map(n => `<option ${n === srs.newPerDay ? "selected" : ""}>${n}</option>`).join("")}</select></label>
      </div>
      <div class="srs-counts" aria-live="polite"><span class="count new"><b>${stats.newToday}</b> neu</span><span class="count learn"><b>${stats.learning}</b> lernen</span><span class="count due"><b>${stats.due}</b> fällig</span><span class="count mature"><b>${stats.mature}</b>/${stats.total} sicher</span></div>
      <div id="cardStage"></div>
      <details class="help-box"><summary>Wie funktioniert das?</summary><ol><li>Lies die Vorderseite und sag die Antwort <b>laut</b>.</li><li>Dreh die Karte um (Tippen oder Leertaste) und vergleiche.</li><li>Bewerte: <b>Nochmal</b> = falsch, <b>Schwer</b> = mit Mühe, <b>Gut</b> = richtig, <b>Leicht</b> = sofort. Tasten 1–4.</li><li>Komm jeden Tag 10 Minuten zurück — die fälligen Karten sind das Wichtigste.</li></ol></details>
      </div>`;
    renderCardStage();
  }
  function renderCardStage() {
    const stage = byId("cardStage");
    if (!stage) return;
    activeCard = nextCard();
    cardFlipped = false;
    if (!activeCard) {
      const stats = deckStats(currentDeck());
      stage.innerHTML = `<div class="empty-state"><div class="empty-icon">🎉</div><h2>Fertig für heute!</h2><p>${stats.fresh ? `Noch ${stats.fresh} neue Karten in diesem Stapel.` : "Du hast alle Karten dieses Stapels gesehen."} Komm morgen wieder für die fälligen Wiederholungen.</p>${stats.fresh ? `<button class="button primary" type="button" data-more-new>10 weitere neue Karten</button>` : ""}</div>`;
      return;
    }
    stage.innerHTML = cardHTML();
    if (srs.dir === "de" && !activeCard.deFront) speak(activeCard.de);
  }
  function cardHTML() {
    const c = activeCard;
    const s = srs.cards[c.id];
    const front = srs.dir === "de" ? (c.deFront || c.de) : c.en;
    const frontIsGerman = srs.dir === "de";
    const tag = !s ? `<span class="card-tag new">neu</span>` : s.learning ? `<span class="card-tag learn">lernen</span>` : `<span class="card-tag due">Wiederholung</span>`;
    return `
      <div class="flashcard ${cardFlipped ? "flipped" : ""}" id="flashcard" role="button" tabindex="0" aria-label="Karte umdrehen">
        <div class="flash-top">${tag}${frontIsGerman ? speakBtn(front) : ""}</div>
        <div class="flash-front ${frontIsGerman ? articleClass(front) : ""}">${esc(front)}</div>
        ${c.hint && frontIsGerman ? `<div class="flash-hint">${esc(c.hint)}</div>` : ""}
        ${cardFlipped ? `<div class="flash-divider"></div><div class="flash-back ${frontIsGerman ? "" : articleClass(c.de)}">${esc(frontIsGerman ? c.en : c.de)} ${frontIsGerman ? "" : speakBtn(c.de)}</div>${frontIsGerman && c.deFront ? `<div class="flash-sub">${esc(c.de)} ${speakBtn(c.de)}</div>` : ""}` : `<div class="flash-tap">Tippen zum Umdrehen</div>`}
      </div>
      ${cardFlipped ? `<div class="rate-row">${[[1, "Nochmal", "again"], [2, "Schwer", "hard"], [3, "Gut", "good"], [4, "Leicht", "easy"]].map(([r, label, cls]) => `<button class="rate ${cls}" type="button" data-rate="${r}"><b>${label}</b><small>${intervalLabel(s, r)}</small></button>`).join("")}</div>` : `<button class="button primary wide" type="button" data-flip>Antwort zeigen</button>`}
      <p class="kbd-hint">Leertaste: umdrehen · 1 – 4: bewerten</p>`;
  }
  function flipCard() {
    if (!activeCard || cardFlipped) return;
    cardFlipped = true;
    byId("cardStage").innerHTML = cardHTML();
    if (srs.dir === "en" || activeCard.deFront) speak(activeCard.de);
  }
  function rateCard(rating) {
    if (!activeCard || !cardFlipped) return;
    const prev = srs.cards[activeCard.id];
    if (!prev) srs.newCount += 1;
    srs.cards[activeCard.id] = schedule(prev, rating);
    lastCardId = activeCard.id;
    saveSrs();
    renderCards();
  }

  /* ================================================================ Practice: gaps, tables, articles */
  const NAMES = new Set(["Tim", "Motia", "Maya", "Cohen", "Anna", "Lena", "Sara"]);
  function gapWord(sentence, seed = 0) {
    const tokens = sentence.split(" ");
    const options = tokens.map((t, i) => [i, t.replace(/^[„“"(¿¡]+|[.,!?;:…“”")]+$/g, "")]).filter(([, w]) => w.length >= 3 && /^[A-Za-zÄÖÜäöüß-]+$/.test(w) && !NAMES.has(w));
    if (!options.length) return null;
    const ranked = [...options].sort((a, b) => b[1].length - a[1].length).slice(0, 3);
    const [index, word] = ranked[seed % ranked.length];
    tokens[index] = tokens[index].replace(word, `[${word}]`);
    return { text: tokens.join(" "), word };
  }
  const gapParts = sentence => sentence.split(/\[([^\]]+)\]/);
  function gapSentence(sentence) {
    return gapParts(sentence).map((part, i) => {
      if (i % 2 === 0) return esc(part);
      const longest = Math.max(...part.split("|").map(a => a.length));
      return `<span class="gap-slot"><input class="gap-input" type="text" data-answers="${esc(part)}" style="width:calc(${Math.max(3, longest)}ch + 1.4em)" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Lücke"></span>`;
    }).join("");
  }
  const umlautBar = () => `<div class="umlaut-bar" aria-label="Sonderzeichen">${["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"].map(ch => `<button type="button" data-insert="${ch}">${ch}</button>`).join("")}</div>`;
  let lastGapInput = null;

  let practiceState = { tab: "luecken", gap: null, table: null, level: "mittel", lesson: null, artikel: null };
  function renderPractice(sub, id) {
    const tab = ["luecken", "tabellen", "artikel"].includes(sub) ? sub : "luecken";
    practiceState.tab = tab;
    const el = byId("view-practice");
    el.innerHTML = `
      <header class="view-head"><p class="eyebrow">Schreiben · Erinnern · Kontrollieren</p><h1>Üben</h1><p class="lead">Fülle die Lücken, vervollständige die Tabellen und trainiere die Artikel. Deine besten Ergebnisse werden gespeichert.</p></header>
      <div class="tabs" role="tablist">${[["luecken", "✏️ Lückentexte"], ["tabellen", "▦ Tabellen"], ["artikel", "🎨 Artikel"]].map(([k, l]) => `<a class="tab ${k === tab ? "active" : ""}" role="tab" aria-selected="${k === tab}" href="#/ueben/${k}">${l}</a>`).join("")}</div>
      <div id="practiceBody"></div>`;
    if (tab === "luecken") renderGapHome(id);
    if (tab === "tabellen") renderTableHome(id);
    if (tab === "artikel") renderArtikel();
  }

  function centerActiveChip(list) {
    const active = list?.querySelector(".active");
    if (active && list.scrollWidth > list.clientWidth) list.scrollLeft = active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2;
  }
  function scoreBadge(value) { return value ? `<span class="score-badge ${value >= 80 ? "good" : value >= 50 ? "mid" : "low"}">${value}%</span>` : `<span class="score-badge none">–</span>`; }

  function renderGapHome(id) {
    const cat = D.gaps.find(g => g.id === id);
    const isLesson = id && id.startsWith("stunde-");
    const body = byId("practiceBody");
    body.innerHTML = `
      <div class="chooser">
        <p class="chooser-label">Grammatik</p>
        <div class="chip-grid">${D.gaps.map(g => `<a class="chip-card ${g.id === id ? "active" : ""}" href="#/ueben/luecken/${g.id}"><span class="chip-icon">${g.icon}</span><span class="chip-title">${esc(g.title)}</span>${scoreBadge(progress.gaps[g.id])}</a>`).join("")}</div>
        <p class="chooser-label">Aus den Stunden (mit Wortkasten)</p>
        <label class="field inline"><select id="gapLessonSelect"><option value="">Stunde wählen …</option>${course.map((l, i) => `<option value="${i}" ${isLesson && Number(id.slice(7)) === i ? "selected" : ""}>${i + 1}. ${esc(l.title)} ${progress.gaps["stunde-" + i] ? `· ${progress.gaps["stunde-" + i]}%` : ""}</option>`).join("")}</select></label>
      </div>
      <div id="gapExercise"></div>`;
    body.querySelectorAll(".chip-grid").forEach(centerActiveChip);
    if (cat) startGapExercise(cat.id, cat.title, sample(cat.items, Math.min(10, cat.items.length)).map(([s, hint]) => ({ s, hint })), false);
    else if (isLesson) startLessonGaps(Number(id.slice(7)));
    else byId("gapExercise").innerHTML = `<div class="empty-state small"><div class="empty-icon">✏️</div><p>Wähle oben ein Thema. Tipp: Beginne mit <b>sein & haben</b> und <b>Präsens</b>.</p></div>`;
  }
  function startLessonGaps(index) {
    const lesson = course[index];
    const lines = uniqBy([...lesson.dialogue.map(([, de, en]) => [de, en]), ...lesson.phrases], ([de]) => de);
    const items = lines.map(([de, en], i) => { const g = gapWord(de, i); return g && { s: g.text, hint: en, word: g.word }; }).filter(Boolean).slice(0, 12);
    startGapExercise("stunde-" + index, `Stunde ${index + 1}: ${lesson.title}`, items, true);
  }
  function startGapExercise(key, title, items, withBank) {
    const bank = withBank ? shuffle(items.map(i => i.word)) : [];
    byId("gapExercise").innerHTML = `
      <section class="exercise" data-gap-key="${esc(key)}">
        <div class="exercise-head"><h2>${esc(title)}</h2><button class="button small" type="button" data-gap-new>🔀 Neue Runde</button></div>
        ${withBank ? `<div class="word-bank" aria-label="Wortkasten">${bank.map(w => `<button type="button" class="bank-word" data-bank="${esc(w)}">${esc(w)}</button>`).join("")}</div>` : `<p class="subtle">Schreib die richtige Form. Die Hilfe in Klammern zeigt das Verb oder die Regel.</p>`}
        <ol class="gap-list">${items.map(item => `<li class="gap-item"><div class="gap-line">${gapSentence(item.s)}</div><div class="gap-hint">${withBank ? `<span class="english-hint">${esc(item.hint)}</span>` : `(${esc(item.hint)})`}</div><div class="gap-feedback"></div></li>`).join("")}</ol>
        <div class="sticky-actions">${umlautBar()}<div class="action-row"><button class="button primary" type="button" data-gap-check>Prüfen</button><button class="button" type="button" data-gap-reveal>Lösungen</button></div><p class="result-line" aria-live="polite"></p></div>
      </section>`;
  }
  function checkGaps(container, key) {
    let right = 0, total = 0;
    container.querySelectorAll(".gap-item, tbody tr").forEach(row => {
      const inputs = [...row.querySelectorAll("input[data-answers]")];
      if (!inputs.length) return;
      const notes = [];
      inputs.forEach(input => {
        const alts = input.dataset.answers.split("|");
        const verdict = judge(input.value, alts);
        const ok = ["ok", "case", "umlaut"].includes(verdict);
        total += 1;
        if (ok) right += 1;
        input.classList.toggle("is-ok", ok);
        input.classList.toggle("is-wrong", !ok);
        const cell = input.closest("td");
        if (cell) { if (ok) delete cell.dataset.solution; else cell.dataset.solution = alts[0]; }
        if (judgeNote[verdict]) notes.push(`<span class="note">${esc(alts[0])}: ${judgeNote[verdict]}</span>`);
        else if (!ok) notes.push(`<span class="solution">✔ ${esc(alts[0])}</span>`);
      });
      const fb = row.querySelector(".gap-feedback");
      if (fb) fb.innerHTML = notes.join(" ");
    });
    const score = pct(right, total);
    if (key) {
      const [bucket, id] = key.startsWith("table:") ? ["tables", key.slice(6)] : ["gaps", key];
      progress[bucket][id] = Math.max(score, progress[bucket][id] || 0);
      saveProgress();
    }
    const line = container.querySelector(".result-line");
    if (line) line.innerHTML = `<b>${right} / ${total}</b> richtig · ${score}% ${score === 100 ? "🎉 Perfekt!" : score >= 80 ? "👍 Sehr gut!" : score >= 50 ? "Weiter so!" : "Schau dir die Lösungen an und versuch es nochmal."}`;
  }
  function revealGaps(container) {
    container.querySelectorAll("input[data-answers]").forEach(input => {
      if (input.classList.contains("is-ok")) return;
      input.value = input.dataset.answers.split("|")[0];
      input.classList.remove("is-wrong");
      input.classList.add("is-revealed");
      delete input.closest("td")?.dataset.solution;
    });
  }

  function renderTableHome(id) {
    const table = D.tables.find(t => t.id === id) || null;
    const groups = [...new Set(D.tables.map(t => t.group))];
    byId("practiceBody").innerHTML = `
      <div class="chooser">${groups.map(g => `<p class="chooser-label">${g === "Kasus" ? "Kasus & Artikel" : "Konjugation"}</p><div class="chip-grid">${D.tables.filter(t => t.group === g).map(t => `<a class="chip-card ${t.id === id ? "active" : ""}" href="#/ueben/tabellen/${t.id}"><span class="chip-title">${esc(t.title)}</span>${scoreBadge(progress.tables[t.id])}</a>`).join("")}</div>`).join("")}</div>
      <div id="tableExercise">${table ? "" : `<div class="empty-state small"><div class="empty-icon">▦</div><p>Wähle eine Tabelle. Die Kasus-Tabellen sind das Herz der A1-Grammatik.</p></div>`}</div>`;
    byId("practiceBody").querySelectorAll(".chip-grid").forEach(centerActiveChip);
    if (table) renderFillTable(table);
  }
  function renderFillTable(t) {
    const ratio = { leicht: 0.35, mittel: 0.65, alles: 1 }[practiceState.level];
    const cells = t.rows.flatMap((row, r) => row.slice(1).map((_, c) => `${r}:${c + 1}`));
    const blanks = new Set(sample(cells, Math.max(1, Math.round(cells.length * ratio))));
    byId("tableExercise").innerHTML = `
      <section class="exercise" data-gap-key="table:${t.id}">
        <div class="exercise-head"><div><h2>${esc(t.title)}</h2><p class="subtle">${esc(t.note)}</p></div><div class="seg" role="group" aria-label="Schwierigkeit">${["leicht", "mittel", "alles"].map(l => `<button type="button" data-level="${l}" class="${practiceState.level === l ? "active" : ""}">${l[0].toUpperCase() + l.slice(1)}</button>`).join("")}</div></div>
        <div class="table-wrap"><table class="fill-table"><thead><tr>${t.head.map(h => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${t.rows.map((row, r) => `<tr><th scope="row">${esc(row[0])}</th>${row.slice(1).map((cell, c) => blanks.has(`${r}:${c + 1}`) ? `<td class="blank"><input type="text" data-answers="${esc(cell)}" aria-label="${esc(row[0])}, ${esc(t.head[c + 1])}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></td>` : `<td>${esc(cell.split("|")[0])}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
        <div class="sticky-actions">${umlautBar()}<div class="action-row"><button class="button primary" type="button" data-gap-check>Prüfen</button><button class="button" type="button" data-gap-reveal>Lösungen</button><button class="button" type="button" data-table-new>🔀 Neu</button></div><p class="result-line" aria-live="polite"></p></div>
      </section>`;
  }

  function nounPool() {
    const fromWords = usefulWordGroups.flatMap(([, list]) => list).filter(([de]) => /^(der|die|das) [A-ZÄÖÜ]/.test(de)).map(([de, en]) => [de.split(" ")[0], de.slice(4), en]);
    return uniqBy([...fromWords, ...D.nouns], ([a, n]) => a + n);
  }
  function renderArtikel() {
    const body = byId("practiceBody");
    if (!practiceState.artikel) {
      body.innerHTML = `<section class="exercise artikel-intro"><div class="empty-icon">🎨</div><h2>Artikel-Trainer</h2><p>20 Nomen aus dem A1-Wortschatz. Tippe <b class="art-der">der</b>, <b class="art-die">die</b> oder <b class="art-das">das</b> — so schnell du kannst.</p><p class="subtle">Bestes Ergebnis: ${progress.artikel ? progress.artikel + " / 20" : "noch keins"}</p><button class="button primary" type="button" data-artikel-start>Start</button></section>`;
      return;
    }
    const s = practiceState.artikel;
    if (s.i >= s.items.length) {
      progress.artikel = Math.max(progress.artikel || 0, s.right); saveProgress();
      body.innerHTML = `<section class="exercise artikel-intro"><div class="empty-icon">${s.right >= 17 ? "🏆" : s.right >= 12 ? "👍" : "💪"}</div><h2>${s.right} / ${s.items.length} richtig</h2>${s.wrong.length ? `<p>Diese Nomen solltest du wiederholen:</p><div class="word-bank">${s.wrong.map(([art, n]) => `<span class="bank-word static art-${art}">${art} ${esc(n)}</span>`).join("")}</div>` : `<p>Alles richtig — ausgezeichnet!</p>`}<button class="button primary" type="button" data-artikel-start>Nochmal</button></section>`;
      return;
    }
    const [art, noun, en] = s.items[s.i];
    body.innerHTML = `
      <section class="exercise artikel-game">
        <div class="quiz-progress"><div style="width:${pct(s.i, s.items.length)}%"></div></div>
        <p class="subtle">${s.i + 1} / ${s.items.length} · ${s.right} richtig</p>
        <div class="artikel-noun">${s.answered ? `<span class="art-${art}">${art}</span> ` : "___ "}${esc(noun)}</div>
        <p class="artikel-en">${esc(en)}</p>
        <div class="artikel-buttons">${["der", "die", "das"].map(x => `<button type="button" class="art-btn art-${x} ${s.answered ? (x === art ? "correct" : x === s.answered ? "wrong" : "dim") : ""}" data-artikel="${x}" ${s.answered ? "disabled" : ""}>${x}</button>`).join("")}</div>
        ${s.answered ? `<button class="button primary wide" type="button" data-artikel-next>Weiter →</button>` : ""}
      </section>`;
    byId("practiceBody").querySelector(s.answered ? "[data-artikel-next]" : ".art-btn")?.focus({ preventScroll: true });
  }

  /* ================================================================ Quiz engine */
  const UNITS = Array.from({ length: 8 }, (_, u) => ({ u, from: u * 4, to: u * 4 + 3, level: course[u * 4].level }));
  const mcQ = (section, prompt, answer, distractors, explain = "", extra = {}) => ({ type: "mc", section, prompt, answer, options: shuffle([answer, ...distractors]), explain, ...extra });
  const distract = (pool, answer, n = 3) => sample(uniqBy(pool.filter(x => x !== answer), x => x), n);

  function unitQuestions(u) {
    const lessons = course.slice(u * 4, u * 4 + 4);
    const phrases = uniqBy(lessons.flatMap(l => l.phrases), ([de]) => de);
    const deList = phrases.map(([de]) => de), enList = phrases.map(([, en]) => en);
    const qs = [];
    sample(phrases, 4).forEach(([de, en]) => qs.push(mcQ("Redemittel", `Wie sagt man auf Deutsch?<br><span class="q-big">${esc(en)}</span>`, de, distract(deList, de), "", { say: de })));
    sample(phrases, 3).forEach(([de, en]) => qs.push(mcQ("Verstehen", `Was bedeutet:<br><span class="q-big">${esc(de)}</span>`, en, distract(enList, en), "", { sayPrompt: de })));
    const allLines = lessons.flatMap(l => l.dialogue.map(([, de]) => de));
    sample(lessons, 3).forEach(lesson => {
      const k = Math.floor(Math.random() * (lesson.dialogue.length - 1));
      const ask = lesson.dialogue[k][1], reply = lesson.dialogue[k + 1][1];
      qs.push(mcQ("Dialog", `<span class="speaker-chip">A</span> ${esc(ask)}<br>Was passt als Antwort?`, reply, distract(allLines.filter(l => l !== ask), reply), `Aus dem Dialog „${esc(lesson.dialogueTitle)}“.`, { sayPrompt: ask }));
    });
    const clozePool = phrases.map(([de], i) => ({ de, g: gapWord(de, i) })).filter(x => x.g);
    const clozeWords = clozePool.map(x => x.g.word);
    sample(clozePool, 3).forEach(({ de, g }) => qs.push(mcQ("Lücke", `Welches Wort fehlt?<br><span class="q-big">${esc(g.text).replace(/\[[^\]]+\]/, "____")}</span>`, g.word, distract(clozeWords, g.word), `Ganzer Satz: ${esc(de)}`, { say: de })));
    const grammarPool = D.mc.filter(m => m.unit === u);
    (grammarPool.length ? sample(grammarPool, 5) : sample(D.mc, 5)).forEach(m => qs.push(mcQ("Grammatik", esc(m.q).replace("___", "<span class=\"blank-line\">____</span>").replace("___", "<span class=\"blank-line\">____</span>"), m.o[0], m.o.slice(1), esc(m.x))));
    return shuffle(qs);
  }
  function vocabQuestions() {
    const groups = usefulWordGroups;
    return Array.from({ length: 20 }, (_, i) => {
      const [, list] = groups[Math.floor(Math.random() * groups.length)];
      const [de, en] = list[Math.floor(Math.random() * list.length)];
      return i % 2
        ? mcQ("Wortschatz", `Was heißt <span class="q-big">${esc(de)}</span>?`, en, distract(list.map(w => w[1]), en), "", { sayPrompt: de })
        : mcQ("Wortschatz", `Wie heißt <span class="q-big">${esc(en)}</span> auf Deutsch?`, de, distract(list.map(w => w[0]), de), "", { say: de });
    });
  }
  function mockQuestions() {
    const qs = [];
    sample(D.hoeren, 5).forEach(h => qs.push({ type: "listen", section: "Hören", script: h.s, prompt: esc(h.q), answer: h.o[0], options: shuffle(h.o) }));
    sample(D.lesen, 2).forEach(text => text.q.forEach(([statement, truth]) => qs.push({ type: "mc", section: "Lesen", context: `<div class="reading-text"><p class="reading-title">${esc(text.title)}</p>${esc(text.text).replace(/\n/g, "<br>")}</div>`, prompt: esc(statement), answer: truth ? "Richtig" : "Falsch", options: ["Richtig", "Falsch"] })));
    sample(D.mc, 8).forEach(m => qs.push(mcQ("Sprachbausteine", esc(m.q).replace("___", "<span class=\"blank-line\">____</span>").replace("___", "<span class=\"blank-line\">____</span>"), m.o[0], m.o.slice(1), esc(m.x))));
    qs.push({ type: "form", section: "Schreiben", context: `<div class="reading-text">${esc(D.schreiben.intro)}</div>`, prompt: "Anmeldung · Deutschkurs", fields: D.schreiben.fields, points: D.schreiben.fields.length });
    return qs;
  }

  let quiz = null;
  function startQuiz(key, title, questions, opts = {}) {
    quiz = { key, title, questions, i: 0, score: 0, max: questions.reduce((s, q) => s + (q.points || 1), 0), wrong: [], answered: false, ...opts };
    renderQuizQuestion();
  }
  function renderQuizHome(sub) {
    if (sub === "sprechen") return renderSpeaking();
    if (sub === "schreiben") return renderWriting();
    if (quiz && sub === "laufend") return renderQuizQuestion();
    quiz = null;
    const best = k => progress.quiz[k];
    const mockBest = Math.max(0, ...progress.mock.map(m => m.pct));
    byId("view-quiz").innerHTML = `
      <header class="view-head"><p class="eyebrow">Testen · Wiederholen · Prüfung</p><h1>Test & A1-Prüfung</h1><p class="lead">Teste dich nach jeder Einheit aus vier Stunden und mach regelmäßig die Probeprüfung. Ab 60 % bestehst du die A1-Prüfung.</p></header>
      <section class="feature-grid">
        <button class="feature-card accent" type="button" data-start-mock><span class="feature-icon">🎓</span><b>A1-Probeprüfung</b><span>Hören · Lesen · Sprachbausteine · Formular — ca. 30 Punkte</span>${mockBest ? `<span class="feature-score">Bestes Ergebnis: ${mockBest}% ${mockBest >= 60 ? "✓ bestanden" : ""}</span>` : `<span class="feature-score">Noch nicht gemacht</span>`}</button>
        <button class="feature-card" type="button" data-start-vocab><span class="feature-icon">⚡</span><b>Wortschatz-Sprint</b><span>20 schnelle Fragen zu den 200 A1-Wörtern</span>${best("vocab") ? `<span class="feature-score">Bestes Ergebnis: ${best("vocab")}%</span>` : ""}</button>
        <a class="feature-card" href="#/test/sprechen"><span class="feature-icon">🗣️</span><b>Sprechen-Training</b><span>Prüfungsteile 1–3 mit Themenkarten und Musterantworten</span></a>
        <a class="feature-card" href="#/test/schreiben"><span class="feature-icon">✉️</span><b>Schreiben-Training</b><span>Kurze E-Mail mit Checkliste und Musterlösung</span></a>
      </section>
      <h2 class="section-title">Einheiten-Quiz</h2>
      <p class="subtle">Redemittel, Dialoge, Lücken und Grammatik aus vier Stunden. Für die A1-Prüfung zählen die Einheiten 1–5.</p>
      <div class="unit-grid">${UNITS.map(({ u, from, to, level }) => `<button class="unit-card ${level.startsWith("A2") ? "a2" : ""}" type="button" data-start-unit="${u}"><span class="unit-level">${level}</span><b>Einheit ${u + 1}</b><span class="unit-range">Stunden ${from + 1}–${to + 1}</span><span class="unit-titles">${course.slice(from, to + 1).map(l => l.icon).join(" ")}</span>${scoreBadge(best("unit" + u))}</button>`).join("")}</div>`;
  }
  function renderQuizQuestion() {
    const el = byId("view-quiz");
    if (location.hash !== "#/test/laufend") { history.replaceState(null, "", "#/test/laufend"); }
    if (quiz.i >= quiz.questions.length) return renderQuizResult();
    const q = quiz.questions[quiz.i];
    quiz.answered = false;
    const progressBar = `<div class="quiz-top"><button class="button small ghost" type="button" data-quiz-quit>✕ Beenden</button><span class="quiz-count">${quiz.i + 1} / ${quiz.questions.length}</span></div><div class="quiz-progress"><div style="width:${pct(quiz.i, quiz.questions.length)}%"></div></div>`;
    let body = "";
    if (q.type === "listen") {
      body = `<div class="listen-box"><button class="listen-btn" type="button" data-play>▶</button><div><b>Hör zu</b><p class="subtle">${audioOK ? "In der Prüfung hörst du jeden Text zweimal." : "Dein Browser kann keinen Text vorlesen — lies den Text stattdessen."}</p></div></div>${audioOK ? `<details class="transcript"><summary>Text anzeigen (Hilfe)</summary><p>${esc(q.script)}</p></details>` : `<div class="reading-text">${esc(q.script)}</div>`}`;
    }
    if (q.type === "form") {
      body = `${q.context}<div class="form-grid">${q.fields.map((f, i) => `<label class="form-field"><span>${esc(f.label)}</span><input type="text" data-field="${i}" autocomplete="off" autocorrect="off" spellcheck="false" ${quiz.answered ? "disabled" : ""}><small class="form-feedback"></small></label>`).join("")}</div>`;
    } else if (q.context) body += q.context;
    const options = q.type === "form" ? "" : `<div class="options ${q.options.length === 2 ? "two" : ""}">${q.options.map((o, i) => `<button class="option" type="button" data-option="${i}"><span class="option-key">${String.fromCharCode(65 + i)}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
    el.innerHTML = `
      <section class="quiz-shell">
        ${progressBar}
        <div class="quiz-card">
          <p class="quiz-section">${esc(quiz.title)} · ${esc(q.section)}</p>
          ${body}
          <div class="quiz-prompt">${q.prompt} ${q.sayPrompt ? speakBtn(q.sayPrompt) : ""}</div>
          ${options}
          ${q.type === "form" ? `<div class="sticky-actions">${umlautBar()}<button class="button primary wide" type="button" data-form-check>Prüfen</button></div>` : ""}
          <div class="quiz-feedback" aria-live="polite"></div>
        </div>
      </section>`;
    if (q.type === "listen" && audioOK) setTimeout(() => speakScript(q.script), 250);
  }
  const speakScript = text => { if (!audioOK) return; window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = "de-DE"; u.rate = 0.82; window.speechSynthesis.speak(u); };
  function answerOption(index) {
    if (!quiz || quiz.answered) return;
    const q = quiz.questions[quiz.i];
    const chosen = q.options[index];
    const ok = chosen === q.answer;
    quiz.answered = true;
    if (ok) quiz.score += 1; else quiz.wrong.push({ q, chosen });
    document.querySelectorAll("#view-quiz .option").forEach((btn, i) => {
      btn.disabled = true;
      if (q.options[i] === q.answer) btn.classList.add("correct");
      else if (i === index) btn.classList.add("wrong");
    });
    if (q.say) speak(q.say);
    showQuizFeedback(ok, ok ? "Richtig!" : `Richtig ist: <b>${esc(q.answer)}</b>`, q.explain);
  }
  function checkForm() {
    if (!quiz || quiz.answered) return;
    const q = quiz.questions[quiz.i];
    let right = 0;
    const misses = [];
    q.fields.forEach((f, i) => {
      const input = document.querySelector(`#view-quiz [data-field="${i}"]`);
      const v = input.value;
      const ok = f.contains ? f.contains.every(word => fold(v).includes(fold(word))) : ["ok", "case", "umlaut"].includes(judge(v, f.a));
      if (ok) right += 1; else misses.push(f.label);
      input.classList.add(ok ? "is-ok" : "is-wrong");
      input.disabled = true;
      input.parentElement.querySelector(".form-feedback").textContent = ok ? "" : `✔ ${f.a[0]}`;
    });
    quiz.answered = true;
    quiz.score += right;
    if (right < q.fields.length) quiz.wrong.push({ q: { prompt: `Formular: ${misses.join(", ")}`, answer: "siehe Lösung im Formular" }, chosen: `${right}/${q.fields.length}` });
    showQuizFeedback(right === q.fields.length, `${right} von ${q.fields.length} Feldern richtig.`, "Lies den Text genau: Zahlen, Namen und Orte direkt übernehmen.");
  }
  function showQuizFeedback(ok, message, explain) {
    const last = quiz.i === quiz.questions.length - 1;
    document.querySelector("#view-quiz .quiz-feedback").innerHTML = `<div class="feedback ${ok ? "ok" : "bad"}"><b>${ok ? "✓" : "✗"} ${message}</b>${explain ? `<p>${explain}</p>` : ""}</div><button class="button primary wide" type="button" data-quiz-next>${last ? "Ergebnis anzeigen" : "Weiter →"}</button>`;
    document.querySelector("#view-quiz [data-quiz-next]").focus({ preventScroll: true });
  }
  function renderQuizResult() {
    const score = pct(quiz.score, quiz.max);
    const passMark = quiz.key === "mock" ? 60 : 70;
    if (quiz.key === "mock") { progress.mock = [...progress.mock, { date: dayKey(), pct: score }].slice(-10); }
    else progress.quiz[quiz.key] = Math.max(progress.quiz[quiz.key] || 0, score);
    saveProgress();
    const finished = quiz;
    byId("view-quiz").innerHTML = `
      <section class="quiz-shell">
        <div class="result-hero ${score >= passMark ? "pass" : "fail"}">
          <div class="ring" style="--p:${score}"><span>${score}%</span></div>
          <div><p class="eyebrow">${esc(finished.title)}</p><h2>${score >= 90 ? "Ausgezeichnet!" : score >= passMark ? (finished.key === "mock" ? "Bestanden! 🎉" : "Gut gemacht!") : "Noch ein bisschen üben"}</h2><p>${finished.score} von ${finished.max} Punkten${finished.key === "mock" ? ` · Bestehensgrenze: 60 %` : ""}</p></div>
        </div>
        ${finished.wrong.length ? `<h3 class="section-title">Das solltest du wiederholen</h3><ul class="review-list">${finished.wrong.map(({ q, chosen }) => `<li><div class="review-q">${q.prompt}</div><div class="review-a"><span class="bad">✗ ${esc(chosen)}</span><span class="good">✔ ${esc(q.answer)}</span></div></li>`).join("")}</ul>` : ""}
        <div class="action-row"><button class="button primary" type="button" data-quiz-again>Nochmal</button><a class="button" href="#/test">Zur Übersicht</a><a class="button" href="#/grammatik">Grammatik wiederholen</a></div>
      </section>`;
    quiz = { ...finished, restart: true };
  }

  /* ---- Speaking & writing trainers */
  let speakState = { teil: 1, i: 0, shown: false, order: [] };
  function renderSpeaking() {
    const S = D.sprechen;
    const t = speakState.teil;
    let body = "";
    if (t === 1) {
      body = `<div class="speak-card"><p class="speak-task">Stell dich vor. Benutze alle Stichwörter:</p><div class="word-bank">${S.teil1.prompts.map(p => `<span class="bank-word static">${esc(p)}</span>`).join("")}</div><p class="speak-task">Danach fragt der Prüfer:</p><ul>${S.teil1.extra.map(e => `<li>${esc(e)}</li>`).join("")}</ul>${speakState.shown ? `<div class="model-answer"><b>Beispiel</b><p>${esc(S.teil1.model)}</p>${speakBtn(S.teil1.model)}</div>` : ""}</div>
        <div class="action-row"><button class="button primary" type="button" data-speak-show>${speakState.shown ? "Beispiel ausblenden" : "Beispiel zeigen"}</button><button class="button" type="button" data-speak-timer>⏱ 60 Sekunden</button></div>`;
    } else {
      const cards = t === 2 ? S.teil2.cards : S.teil3.cards;
      if (speakState.order.length !== cards.length) speakState.order = shuffle(cards.map((_, i) => i));
      const card = cards[speakState.order[speakState.i % cards.length]];
      body = t === 2
        ? `<div class="speak-card topic-card"><p class="topic-label">Thema: ${esc(card[0])}</p><div class="topic-word">${esc(card[1])}</div><p class="speak-task">Stell eine Frage mit diesem Wort. Dein Partner antwortet.</p>${speakState.shown ? `<div class="model-answer"><p><b>Frage:</b> ${esc(card[2])} ${speakBtn(card[2])}</p><p><b>Antwort:</b> ${esc(card[3])} ${speakBtn(card[3])}</p></div>` : ""}</div>`
        : `<div class="speak-card topic-card"><div class="topic-emoji">${card[0]}</div><div class="topic-word">${esc(card[1])}</div><p class="speak-task">Formuliere eine höfliche Bitte. Dein Partner reagiert.</p>${speakState.shown ? `<div class="model-answer"><p><b>Bitte:</b> ${esc(card[2])} ${speakBtn(card[2])}</p><p><b>Reaktion:</b> ${esc(card[3])} ${speakBtn(card[3])}</p></div>` : ""}</div>`;
      body += `<div class="action-row"><button class="button primary" type="button" data-speak-show>${speakState.shown ? "Lösung ausblenden" : "Lösung zeigen"}</button><button class="button" type="button" data-speak-next>Nächste Karte →</button></div>`;
    }
    byId("view-quiz").innerHTML = `
      <header class="view-head"><a class="back-link" href="#/test">← Test</a><p class="eyebrow">A1-Prüfung · Sprechen</p><h1>Sprechen-Training</h1><p class="lead">Übe laut — am besten mit einem Partner. Erst selbst sprechen, dann das Beispiel vergleichen.</p></header>
      <div class="tabs">${[1, 2, 3].map(n => `<button class="tab ${n === t ? "active" : ""}" type="button" data-speak-teil="${n}">Teil ${n}</button>`).join("")}</div>
      <h2 class="section-title">${esc([S.teil1, S.teil2, S.teil3][t - 1].title)}</h2>
      ${body}
      <p class="timer" id="speakTimer" aria-live="polite"></p>`;
  }
  let timerHandle = null;
  function startTimer() {
    clearInterval(timerHandle);
    let left = 60;
    const tick = () => { const el = byId("speakTimer"); if (!el) return clearInterval(timerHandle); el.textContent = left > 0 ? `⏱ ${left} s` : "⏰ Zeit ist um!"; if (left-- <= 0) clearInterval(timerHandle); };
    tick();
    timerHandle = setInterval(tick, 1000);
  }
  function renderWriting() {
    const W = D.schreiben.letter;
    let draft = "";
    try { draft = localStorage.getItem("sprechen-writing-draft") || ""; } catch { /* ignore */ }
    byId("view-quiz").innerHTML = `
      <header class="view-head"><a class="back-link" href="#/test">← Test</a><p class="eyebrow">A1-Prüfung · Schreiben Teil 2</p><h1>Schreiben-Training</h1></header>
      <section class="exercise">
        <p class="speak-task">${esc(W.task)}</p>
        <textarea id="writingArea" class="writing-area" rows="8" placeholder="Sehr geehrte Damen und Herren, …" spellcheck="false">${esc(draft)}</textarea>
        <p class="subtle" id="wordCount"></p>
        ${umlautBar()}
        <h3>Checkliste</h3>
        <div class="checklist-grid">${W.checks.map(c => `<label class="exam-check"><input type="checkbox"> ${esc(c)}</label>`).join("")}</div>
        <details class="help-box"><summary>Musterlösung zeigen</summary><p class="model-text">${esc(W.model).replace(/\n/g, "<br>")}</p></details>
      </section>`;
    updateWordCount();
  }
  function updateWordCount() {
    const area = byId("writingArea");
    if (!area) return;
    const n = area.value.trim() ? area.value.trim().split(/\s+/).length : 0;
    byId("wordCount").textContent = `${n} Wörter ${n >= 25 && n <= 45 ? "✓ gute Länge" : "· Ziel: ca. 30"}`;
    try { localStorage.setItem("sprechen-writing-draft", area.value); } catch { /* ignore */ }
  }

  /* ================================================================ Grammar */
  function renderGrammar(id) {
    const chapters = D.grammar;
    const index = Math.max(0, chapters.findIndex(c => c.id === id));
    const c = chapters[index];
    const table = t => `<div class="table-wrap"><table class="g-table"><thead><tr>${t.head.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r => `<tr>${r.map((cell, i) => i ? `<td>${cell}</td>` : `<th scope="row">${cell}</th>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    const prev = chapters[index - 1], next = chapters[index + 1];
    byId("view-grammar").innerHTML = `
      <header class="view-head"><p class="eyebrow">A1-Grammatik · verständlich erklärt</p><h1>Grammatik</h1><p class="lead">16 Kapitel mit Regeln, Tabellen, Beispielen zum Anhören und typischen Fehlern. Jedes Kapitel führt direkt zur passenden Übung.</p>
        <div class="action-row"><button class="button" type="button" data-open-revision>📚 Nachschlagen: alle Tabellen, Satzbau-Labor & 200 Wörter</button></div></header>
      <div class="grammar-layout">
        <nav class="chapter-list" aria-label="Kapitel">${chapters.map((ch, i) => `<a class="chapter-link ${i === index ? "active" : ""}" href="#/grammatik/${ch.id}" ${i === index ? 'aria-current="true"' : ""}><span class="chapter-num">${i + 1}</span><span>${esc(ch.title)}</span></a>`).join("")}</nav>
        <article class="chapter">
          <header class="chapter-head"><span class="chapter-icon">${c.icon}</span><div><p class="eyebrow">Kapitel ${index + 1} · ${c.level}</p><h2>${c.title}</h2></div></header>
          <div class="callout key"><b>Kurz gesagt</b><p>${c.summary}</p></div>
          ${c.sections.map(s => `<section class="g-section"><h3>${s.h}</h3>${s.p ? `<p>${s.p}</p>` : ""}${s.table ? table(s.table) : ""}${s.examples ? `<ul class="example-list">${s.examples.map(([de, en]) => `<li><div><b>${esc(de)}</b><span>${esc(en)}</span></div>${speakBtn(de)}</li>`).join("")}</ul>` : ""}</section>`).join("")}
          ${c.mistakes ? `<section class="g-section"><h3>Typische Fehler</h3><ul class="mistake-list">${c.mistakes.map(([wrong, right, why]) => `<li><span class="wrong">✗ ${esc(wrong)}</span><span class="right">✔ ${esc(right)}</span><span class="why">${esc(why)}</span></li>`).join("")}</ul></section>` : ""}
          ${c.tip ? `<div class="callout tip"><b>💡 Tipp</b><p>${c.tip}</p></div>` : ""}
          <div class="practice-links"><p class="eyebrow">Jetzt üben</p><div class="action-row">${c.practice?.gaps ? `<a class="button primary" href="#/ueben/luecken/${c.practice.gaps}">✏️ Lückentext</a>` : ""}${c.practice?.table ? `<a class="button" href="#/ueben/tabellen/${c.practice.table}">▦ Tabelle ausfüllen</a>` : ""}${c.practice?.artikel ? `<a class="button" href="#/ueben/artikel">🎨 Artikel-Trainer</a>` : ""}</div></div>
          <nav class="pager">${prev ? `<a href="#/grammatik/${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a href="#/grammatik/${next.id}">${esc(next.title)} →</a>` : "<span></span>"}</nav>
        </article>
      </div>`;
    centerActiveChip(byId("view-grammar").querySelector(".chapter-list"));
    if (id) window.scrollTo({ top: 0 });
  }

  /* ================================================================ Start / dashboard */
  function renderStart() {
    if (!decks.length) buildDecks();
    const a1Done = state.complete.filter(i => i < 20).length;
    const words = decks[0].cards;
    const learned = words.filter(c => { const s = srs.cards[c.id]; return s && !s.learning; }).length;
    const dueAll = uniqBy(decks.flatMap(d => d.cards), c => c.id).filter(c => { const s = srs.cards[c.id]; return s && s.due <= Date.now(); }).length;
    const gapAvg = Math.round(D.gaps.reduce((sum, g) => sum + (progress.gaps[g.id] || 0), 0) / D.gaps.length);
    const tableAvg = Math.round(D.tables.reduce((sum, t) => sum + (progress.tables[t.id] || 0), 0) / D.tables.length);
    const mockBest = Math.max(0, ...progress.mock.map(m => m.pct));
    const parts = [pct(a1Done, 20), pct(learned, words.length), Math.round((gapAvg + tableAvg) / 2), mockBest];
    const readiness = Math.round(parts[0] * 0.25 + parts[1] * 0.25 + parts[2] * 0.25 + parts[3] * 0.25);
    const nextLesson = course.findIndex((_, i) => !state.complete.includes(i)) >= 0 ? course.findIndex((_, i) => !state.complete.includes(i)) : 0;
    const weakest = [...D.gaps].sort((a, b) => (progress.gaps[a.id] || 0) - (progress.gaps[b.id] || 0))[0];
    const tile = (icon, label, value, sub, p, href) => `<a class="stat-tile" href="${href}"><span class="stat-icon">${icon}</span><span class="stat-label">${label}</span><b class="stat-value">${value}</b><span class="stat-sub">${sub}</span><span class="meter"><span style="width:${p}%"></span></span></a>`;
    byId("view-start").innerHTML = `
      <section class="start-hero">
        <div class="start-copy"><p class="eyebrow">Ziel: Goethe-Zertifikat A1</p><h1>Hallo Motia! 👋</h1><p>Lerne jeden Tag ein bisschen: eine Stunde sprechen, Karten wiederholen, eine Übung machen. So bist du bereit für die A1-Prüfung.</p>
          <div class="action-row"><a class="button lime" href="#/karten">🃏 Karten wiederholen${dueAll ? ` · ${dueAll} fällig` : ""}</a><button class="button glass" type="button" data-go-lesson="${nextLesson}">▶ Weiter mit Stunde ${nextLesson + 1}</button></div></div>
        <div class="readiness"><div class="ring big" style="--p:${readiness}"><span>${readiness}%</span></div><p>A1-Bereitschaft</p></div>
      </section>
      <section class="stat-grid">
        ${tile("🗣️", "Stunden A1 (1–20)", `${a1Done}/20`, "Gesprächsstunden abgeschlossen", parts[0], "#/stunden")}
        ${tile("🃏", "Wörter gelernt", `${learned}/${words.length}`, `${dueAll} Karten heute fällig`, parts[1], "#/karten")}
        ${tile("✏️", "Übungen", `${parts[2]}%`, "Ø Lückentexte & Tabellen", parts[2], "#/ueben")}
        ${tile("🎓", "Probeprüfung", mockBest ? `${mockBest}%` : "–", mockBest >= 60 ? "bestanden ✓" : "Ziel: 60 %", parts[3], "#/test")}
      </section>
      <h2 class="section-title">Dein Plan für heute</h2>
      <ol class="today-plan">
        <li><a href="#/karten"><span>1</span><div><b>10 Minuten Karten</b><small>Zuerst die fälligen Karten, dann neue Wörter.</small></div></a></li>
        <li><button type="button" data-go-lesson="${nextLesson}"><span>2</span><div><b>Stunde ${nextLesson + 1}: ${esc(course[nextLesson].title)}</b><small>Redemittel laut lesen, Dialog spielen.</small></div></button></li>
        <li><a href="#/ueben/luecken/${weakest.id}"><span>3</span><div><b>Lückentext: ${esc(weakest.title)}</b><small>Dein schwächstes Grammatikthema.</small></div></a></li>
        <li><a href="#/test"><span>4</span><div><b>Einmal pro Woche: Probeprüfung</b><small>Miss deinen Fortschritt.</small></div></a></li>
      </ol>
      <h2 class="section-title">So ist die A1-Prüfung aufgebaut</h2>
      <section class="exam-grid">${D.examInfo.map(([icon, title, time, text]) => `<article class="exam-part"><span class="exam-icon">${icon}</span><div><b>${title}</b> <span class="subtle">${time}</span><p>${text}</p></div></article>`).join("")}</section>
      <p class="subtle center">Bestanden ab 60 von 100 Punkten. Fortschritt wird nur in diesem Browser gespeichert.</p>`;
  }

  /* ================================================================ Events */
  document.addEventListener("click", event => {
    const t = event.target;
    const say = t.closest("[data-say]");
    if (say) { event.stopPropagation(); speak(say.dataset.say); return; }
    const insert = t.closest("[data-insert]");
    if (insert) {
      const field = document.activeElement?.matches?.("input[type=text], textarea") ? document.activeElement : lastGapInput;
      if (field && document.body.contains(field) && !field.disabled) {
        const s = field.selectionStart ?? field.value.length, e = field.selectionEnd ?? field.value.length;
        field.value = field.value.slice(0, s) + insert.dataset.insert + field.value.slice(e);
        field.focus(); field.setSelectionRange(s + 1, s + 1);
        field.dispatchEvent(new Event("input", { bubbles: true }));
      }
      return;
    }
    const lessonBtn = t.closest("[data-go-lesson]");
    if (lessonBtn) { chooseLesson(lessonBtn.dataset.goLesson); go("#/stunden"); return; }
    if (t.closest("#lessonNav [data-lesson]") && currentView !== "stunden") { go("#/stunden"); return; }
    if (t.closest("[data-open-revision]")) { byId("revisionDialog").showModal(); return; }

    // flashcards
    if (t.closest("[data-dir]")) { srs.dir = t.closest("[data-dir]").dataset.dir; saveSrs(); renderCards(); return; }
    if (t.closest("[data-flip]") || (t.closest("#flashcard") && !cardFlipped)) { flipCard(); return; }
    if (t.closest("[data-rate]")) { rateCard(Number(t.closest("[data-rate]").dataset.rate)); return; }
    if (t.closest("[data-more-new]")) { srs.newCount = Math.max(0, srs.newCount - 10); saveSrs(); renderCards(); return; }

    // gaps & tables
    const exercise = t.closest(".exercise[data-gap-key]");
    if (t.closest("[data-gap-check]") && exercise) { checkGaps(exercise, exercise.dataset.gapKey); return; }
    if (t.closest("[data-gap-reveal]") && exercise) { revealGaps(exercise); return; }
    if (t.closest("[data-gap-new]")) { const [, , , id] = location.hash.split("/"); renderGapHome(decodeURIComponent(id || "")); return; }
    if (t.closest("[data-table-new]")) { renderFillTable(D.tables.find(x => x.id === exercise.dataset.gapKey.slice(6))); return; }
    if (t.closest("[data-level]")) { practiceState.level = t.closest("[data-level]").dataset.level; renderFillTable(D.tables.find(x => x.id === exercise.dataset.gapKey.slice(6))); return; }
    const bank = t.closest("[data-bank]");
    if (bank) {
      const inputs = [...document.querySelectorAll("#gapExercise .gap-input")];
      const target = (lastGapInput && !lastGapInput.value && inputs.includes(lastGapInput)) ? lastGapInput : inputs.find(i => !i.value);
      if (target) { target.value = bank.dataset.bank; bank.classList.add("used"); const nextEmpty = inputs.find(i => !i.value); (nextEmpty || target).focus({ preventScroll: true }); lastGapInput = nextEmpty || target; }
      return;
    }

    // article trainer
    if (t.closest("[data-artikel-start]")) { practiceState.artikel = { items: sample(nounPool(), 20), i: 0, right: 0, wrong: [], answered: null }; renderArtikel(); return; }
    const art = t.closest("[data-artikel]");
    if (art && practiceState.artikel && !practiceState.artikel.answered) {
      const s = practiceState.artikel, [correct, noun] = s.items[s.i];
      s.answered = art.dataset.artikel;
      if (s.answered === correct) s.right += 1; else s.wrong.push(s.items[s.i]);
      speak(`${correct} ${noun}`);
      renderArtikel();
      return;
    }
    if (t.closest("[data-artikel-next]")) { const s = practiceState.artikel; s.i += 1; s.answered = null; renderArtikel(); return; }

    // quiz
    if (t.closest("[data-start-unit]")) { const u = Number(t.closest("[data-start-unit]").dataset.startUnit); startQuiz("unit" + u, `Einheit ${u + 1}`, unitQuestions(u)); return; }
    if (t.closest("[data-start-vocab]")) { startQuiz("vocab", "Wortschatz-Sprint", vocabQuestions()); return; }
    if (t.closest("[data-start-mock]")) { startQuiz("mock", "A1-Probeprüfung", mockQuestions()); return; }
    if (t.closest("[data-option]")) { answerOption(Number(t.closest("[data-option]").dataset.option)); return; }
    if (t.closest("[data-form-check]")) { checkForm(); return; }
    if (t.closest("[data-play]")) { speakScript(quiz.questions[quiz.i].script); return; }
    if (t.closest("[data-quiz-next]")) { quiz.i += 1; renderQuizQuestion(); window.scrollTo({ top: 0 }); return; }
    if (t.closest("[data-quiz-quit]")) { quiz = null; go("#/test"); return; }
    if (t.closest("[data-quiz-again]")) {
      const k = quiz.key;
      if (k === "mock") startQuiz("mock", "A1-Probeprüfung", mockQuestions());
      else if (k === "vocab") startQuiz("vocab", "Wortschatz-Sprint", vocabQuestions());
      else startQuiz(k, quiz.title, unitQuestions(Number(k.slice(4))));
      return;
    }
    if (t.closest("[data-speak-teil]")) { speakState = { teil: Number(t.closest("[data-speak-teil]").dataset.speakTeil), i: 0, shown: false, order: [] }; renderSpeaking(); return; }
    if (t.closest("[data-speak-show]")) { speakState.shown = !speakState.shown; renderSpeaking(); return; }
    if (t.closest("[data-speak-next]")) { speakState.i += 1; speakState.shown = false; renderSpeaking(); return; }
    if (t.closest("[data-speak-timer]")) { startTimer(); return; }
  });

  document.addEventListener("focusin", event => { if (event.target.matches?.("input[type=text], textarea")) lastGapInput = event.target; });
  // Keep the caret in the text field when tapping helper buttons.
  document.addEventListener("mousedown", event => { if (event.target.closest?.("[data-insert], [data-bank]")) event.preventDefault(); });
  document.addEventListener("input", event => { if (event.target.id === "writingArea") updateWordCount(); if (event.target.matches?.("input.is-wrong, input.is-ok")) event.target.classList.remove("is-wrong", "is-ok"); });
  document.addEventListener("change", event => {
    if (event.target.id === "deckSelect") { srs.deck = event.target.value; lastCardId = null; saveSrs(); renderCards(); }
    if (event.target.id === "newPerDay") { srs.newPerDay = Number(event.target.value); saveSrs(); renderCards(); }
    if (event.target.id === "gapLessonSelect" && event.target.value !== "") go(`#/ueben/luecken/stunde-${event.target.value}`);
  });
  document.addEventListener("keydown", event => {
    if (byId("revisionDialog")?.open) return;
    const typing = event.target.matches?.("input, textarea, select");
    if (typing && event.key === "Enter" && event.target.matches("input[data-answers], [data-field]")) {
      event.preventDefault();
      const scope = event.target.closest(".exercise, .quiz-card");
      const inputs = [...scope.querySelectorAll("input[data-answers], [data-field]")];
      const next = inputs[inputs.indexOf(event.target) + 1];
      if (next) next.focus(); else scope.querySelector("[data-gap-check], [data-form-check]")?.click();
      return;
    }
    if (typing || event.metaKey || event.ctrlKey || event.altKey) return;
    if (currentView === "karten" && activeCard) {
      if ((event.key === " " || event.key === "Enter") && !cardFlipped) { event.preventDefault(); flipCard(); }
      else if (cardFlipped && ["1", "2", "3", "4"].includes(event.key)) rateCard(Number(event.key));
      else if (cardFlipped && event.key === " ") { event.preventDefault(); rateCard(3); }
    }
    if (currentView === "test" && quiz && !quiz.answered && quiz.questions[quiz.i]?.options) {
      const n = "abcd1234".indexOf(event.key.toLowerCase()) % 4;
      if (n >= 0 && n < quiz.questions[quiz.i].options.length) answerOption(n);
    }
  });

  window.addEventListener("hashchange", route);
  buildDecks();
  route();
})();


"use strict";

/* ==========================================
   THE HIDDEN FILES
   14 — NAVIGATION & CASE FILES

   CASE 01–10 PLAYABLE
   CASE 10 — THE FINAL INVESTIGATION
   THE MERIDIAN CONSPIRACY
========================================== */

(function () {

  /* ======================================
     CASE INFORMATION
  ====================================== */

  const CASES = [
    {
      id: "01",
      name: "The Invoice Trap",
      type: "Find the Error",
      save: "thf_case01_puzzle_v1_",
      opener: "invOpen"
    },
    {
      id: "02",
      name: "The Midnight Journal",
      type: "Journal Matching",
      save: "thf_case02_matching_v1_",
      opener: "thfCase02Open"
    },
    {
      id: "03",
      name: "The Depreciation Code",
      type: "Calculator Challenge",
      save: "thf_case03_calculator_v1_",
      opener: "thfCase03Open"
    },
    {
      id: "04",
      name: "The Missing Inventory",
      type: "Sequence Builder",
      save: "thf_case04_sequence_v1_",
      opener: "thfCase04Open"
    },
    {
      id: "05",
      name: "The Commission Connection",
      type: "Timeline Marker",
      save: "thf_case05_timeline_v1_",
      opener: "thfCase05Open"
    },
    {
      id: "06",
      name: "The Bank Trail",
      type: "Bank Reconciliation",
      save: "thf_case06_bank_v1_",
      opener: "thfCase06Open"
    },
    {
      id: "07",
      name: "The Misclassified Files",
      type: "Interrogation Room",
      save: "thf_case07_classification_v1_",
      opener: "thfCase07Open"
    },
    {
      id: "08",
      name: "The Vanishing Liability",
      type: "Document Reconstruction",
      save: "thf_case08_reconstruction_v1_",
      opener: "thfCase08Open"
    },
    {
      id: "09",
      name: "The Altered Statement",
      type: "Financial Statement Comparison",
      save: "thf_case09_statement_v1_",
      opener: "thfCase09Open"
    },
    {
      id: "10",
      name: "The Final Investigation",
      type: "Grand Finale — The Meridian Conspiracy",
      save: "thf_case10_final_v1_",
      opener: "thfCase10Open"
    }
  ];

  const PLAYABLE_CASES = 10;

  const STYLE_ID = "thf-navigation-style";

  /* ======================================
     CASE FILE LOADER
  ====================================== */

  const FILES = {
    "07": {
      css: "16-case07.css",
      js: "16-case07.js"
    },

    "08": {
      css: "17-case08.css",
      js: "17-case08.js"
    },

    "09": {
      css: "18-case09.css",
      js: "18-case09.js"
    },

    "10": {
      css: "19-case10.css",
      js: "19-case10.js"
    }
  };

  /* ======================================
     LANGUAGE
  ====================================== */

  const TEXT = {
    en: {
      profile: "PROFILE",
      logout: "LOGOUT / SWITCH DETECTIVE",

      story: "STORY MODE",
      storyDesc: "Experience the investigation story.",

      files: "CASE FILES",
      filesDesc: "Open and continue your investigations.",

      evidence: "EVIDENCE BOARD",
      evidenceDesc: "Review clues and accounting findings.",

      select: "SELECT AN INVESTIGATION",

      intro: "Complete each case to unlock the next.",

      complete: "COMPLETED",
      available: "AVAILABLE",
      started: "IN PROGRESS",
      locked: "LOCKED",
      soon: "COMING SOON",

      open: "OPEN CASE",
      resume: "CONTINUE CASE",
      review: "REVIEW CASE",

      back: "BACK TO SEASON 01",

      prologue: "Complete the Story Mode prologue first.",
      previous: "Complete the previous case first.",

      unavailable: "This case is not available yet.",
      missing: "The case script could not be loaded.",
      noLives: "No lives available.",
      boardMissing: "Evidence Board is not ready.",

      finale: "GRAND FINALE",
      finaleDesc: "The Meridian Conspiracy",
      seasonComplete: "SEASON 01 COMPLETE"
    },

    ms: {
      profile: "PROFIL",
      logout: "LOG KELUAR / TUKAR DETEKTIF",

      story: "MOD CERITA",
      storyDesc: "Ikuti jalan cerita penyiasatan.",

      files: "FAIL KES",
      filesDesc: "Buka dan sambung penyiasatan.",

      evidence: "PAPAN BUKTI",
      evidenceDesc: "Semak petunjuk dan penemuan perakaunan.",

      select: "PILIH PENYIASATAN",

      intro: "Selesaikan setiap kes untuk membuka kes berikutnya.",

      complete: "SELESAI",
      available: "TERSEDIA",
      started: "SEDANG DISIASAT",
      locked: "TERKUNCI",
      soon: "AKAN DATANG",

      open: "BUKA KES",
      resume: "SAMBUNG KES",
      review: "SEMAK KES",

      back: "KEMBALI KE MUSIM 01",

      prologue: "Selesaikan prolog Mod Cerita dahulu.",
      previous: "Selesaikan kes sebelumnya dahulu.",

      unavailable: "Kes ini belum tersedia.",
      missing: "Fail JavaScript kes gagal dimuatkan.",
      noLives: "Nyawa telah habis.",
      boardMissing: "Papan Bukti belum tersedia.",

      finale: "GRAND FINALE",
      finaleDesc: "The Meridian Conspiracy",
      seasonComplete: "SEASON 01 COMPLETE"
    }
  };

  let currentPage = "season";
  let initialized = false;

  /* ======================================
     PROFILE & LANGUAGE
  ====================================== */

  function profile() {
    return typeof getActiveDetective === "function"
      ? getActiveDetective()
      : null;
  }

  function language() {
    const p = profile();

    if (!p) return "en";

    const value =
      typeof getProfileLanguage === "function"
        ? getProfileLanguage(p)
        : (p.settings?.language || p.language || "en");

    return ["ms", "bm", "malay"].includes(
      String(value).toLowerCase()
    ) ? "ms" : "en";
  }

  function t() {
    return TEXT[language()];
  }

  function profileId() {
    const p = profile();

    if (!p) return null;

    return String(
      p.id ||
      p.profileId ||
      p.username ||
      p.name ||
      "default"
    );
  }

  /* ======================================
     ELEMENT HELPERS
  ====================================== */

  function el(tag, className = "", value) {
    const node = document.createElement(tag);

    if (className) {
      node.className = className;
    }

    if (value !== undefined) {
      node.textContent = String(value);
    }

    return node;
  }

  function button(
    label,
    action,
    className = "primary-btn"
  ) {
    const node = el(
      "button",
      className,
      label
    );

    node.type = "button";

    if (typeof action === "function") {
      node.addEventListener(
        "click",
        action
      );
    }

    return node;
  }

  /* ======================================
     STORAGE & PROGRESS
  ====================================== */

  function read(prefix) {
    const id = profileId();

    if (!id || !prefix) {
      return {};
    }

    try {
      const saved = localStorage.getItem(
        prefix + id
      );

      return saved
        ? JSON.parse(saved) || {}
        : {};

    } catch (error) {
      return {};
    }
  }

  function progress() {
    if (typeof thfLoadProgress === "function") {
      return thfLoadProgress();
    }

    return {
      xp: 0,
      lives: 3,
      cases: {}
    };
  }

  /* ======================================
     STORY COMPLETION
  ====================================== */

  function storyDone() {
    return read(
      "thf_story_s1_v1_"
    ).completed === true;
  }

  /* ======================================
     CASE COMPLETION
  ====================================== */

  function caseDone(index, p = progress()) {

    if (
      index < 0 ||
      index >= PLAYABLE_CASES
    ) {
      return false;
    }

    const item = CASES[index];

    if (!item) {
      return false;
    }

    if (
      p.cases?.[item.id]?.completed === true
    ) {
      return true;
    }

    return read(
      item.save
    ).completed === true;
  }

  /* ======================================
     CASE IN PROGRESS
  ====================================== */

  function caseStarted(index, p = progress()) {

    if (
      index < 0 ||
      index >= PLAYABLE_CASES
    ) {
      return false;
    }

    if (caseDone(index, p)) {
      return false;
    }

    const item = CASES[index];

    if (!item) {
      return false;
    }

    const saved = read(item.save);

    const record =
      p.cases?.[item.id] || {};

    if (index === 0) {

      const investigation = read(
        "thf_case01_investigation_v1_"
      );

      return (
        investigation.interviewed === true ||
        investigation.solved === true ||
        (
          Array.isArray(
            investigation.clues
          ) &&
          investigation.clues.length > 0
        ) ||
        saved.started === true ||
        saved.errorFound === true
      );
    }

    const choices =
      saved.choices &&
      typeof saved.choices === "object"
        ? Object.keys(saved.choices).length
        : 0;

    const answers =
      saved.answers &&
      typeof saved.answers === "object"
        ? Object.keys(saved.answers).length
        : 0;

    const hints =
      Array.isArray(saved.hints)
        ? saved.hints.some(
            value => Number(value) > 0
          )
        : Number(saved.hints || 0) > 0;

    return (
      saved.started === true ||
      saved.solved === true ||
      Number(saved.stage || 0) >= 2 ||
      Number(saved.phase || 0) >= 2 ||
      hints ||
      Number(saved.mistakes || 0) > 0 ||
      choices > 0 ||
      answers > 0 ||
      Number(record.hints || 0) > 0 ||
      Number(record.mistakes || 0) > 0
    );
  }

  /* ======================================
     UNLOCK CASES
  ====================================== */

  function unlocked(index, p = progress()) {

    if (
      index < 0 ||
      index >= PLAYABLE_CASES
    ) {
      return false;
    }

    if (caseDone(index, p)) {
      return true;
    }

    if (index === 0) {
      return storyDone();
    }

    return caseDone(
      index - 1,
      p
    );
  }

  /* ======================================
     SHOW SCREEN
  ====================================== */

  function show(id) {
    const target = document.getElementById(id);

    if (!target) {
      console.warn(
        "Missing screen:",
        id
      );
      return;
    }

    if (typeof showScreen === "function") {
      showScreen(id);
    }

    document
      .querySelectorAll("#app > .screen")
      .forEach(function (screen) {

        const hidden = screen.id !== id;

        screen.classList.toggle(
          "hidden",
          hidden
        );

        screen.hidden = hidden;
      });

    target.hidden = false;

    target.classList.remove(
      "hidden"
    );

    window.scrollTo(0, 0);
  }

  /* ======================================
     NAVIGATION STYLES
  ====================================== */

  function addStyle() {

    if (
      document.getElementById(STYLE_ID)
    ) {
      return;
    }

    const style = document.createElement(
      "style"
    );

    style.id = STYLE_ID;

    style.textContent = `

      .thf-nav-menu {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(190px, 1fr));
        gap: 16px;
        margin: 24px 0;
      }

      .thf-nav-card {
        min-height: 155px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 22px 16px;
        text-align: center;
        border: 1px solid rgba(218,180,103,.45);
        border-radius: 16px;
        background: rgba(12,23,42,.88);
        color: #f3e7d0;
        cursor: pointer;
        font: inherit;
        transition: .2s;
      }

      .thf-nav-card:hover {
        border-color: #e3be75;
        background: rgba(35,43,59,.95);
        transform: translateY(-2px);
      }

      .thf-nav-icon {
        font-size: 34px;
      }

      .thf-nav-card strong {
        font-size: 16px;
        letter-spacing: 1px;
      }

      .thf-nav-card small {
        opacity: .8;
        line-height: 1.5;
      }

      .thf-case-grid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(230px, 1fr));
        gap: 16px;
        margin: 24px 0;
      }

      .thf-case-card {
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(218,180,103,.35);
        border-radius: 15px;
        padding: 20px;
        background: rgba(12,23,42,.9);
        color: #f3e7d0;
      }

      .thf-case-card h3 {
        margin: 10px 0;
        color: #f2d69b;
      }

      .thf-case-card p {
        margin: 10px 0;
        line-height: 1.6;
      }

      .thf-case-card button {
        width: 100%;
        margin-top: auto;
      }

      .thf-case-status {
        color: #e0bd77;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: 700;
      }

      .thf-case-card.is-completed {
        border-color: #42c993;
      }

      .thf-case-card.is-available {
        border-color: #d9b66f;
      }

      .thf-case-card.is-locked {
        opacity: .7;
      }

      .thf-case-card .thf-case-action {
        margin-top: 18px;
        min-height: 44px;
      }

      /* ==================================
         CASE 10 — GRAND FINALE
      ================================== */

      .thf-case-card.is-finale {
        position: relative;
        overflow: hidden;

        border: 2px solid #d5a35b;

        background:
          radial-gradient(
            circle at top right,
            rgba(130,55,45,.38),
            transparent 55%
          ),
          linear-gradient(
            150deg,
            #182940,
            #0a1424
          );

        box-shadow:
          0 0 25px rgba(201,145,69,.13);
      }

      .thf-case-card.is-finale h3 {
        color: #ffda9b;
        font-size: 21px;
      }

      .thf-case-card.is-finale .thf-case-status {
        color: #ffc9a0;
      }

      .thf-case-card.is-finale.is-available {
        box-shadow:
          0 0 28px rgba(218,145,72,.3);
      }

      .thf-case-card.is-finale.is-completed {
        border-color: #52c994;

        box-shadow:
          0 0 25px rgba(70,190,130,.2);
      }

      .thf-finale-label {
        display: inline-block;

        align-self: flex-start;

        margin: 0 0 12px;

        padding: 7px 12px;

        border: 1px solid #c78365;
        border-radius: 25px;

        background: rgba(112,40,43,.5);

        color: #ffcaaf;

        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1.5px;
      }

      .thf-finale-icon {
        font-size: 42px;
        text-align: center;
        margin: 8px 0;
      }

      .thf-finale-desc {
        color: #e5c99b;
        font-size: 13px;
        text-align: center;
      }

      .thf-case-card.is-finale .thf-case-action {
        background:
          linear-gradient(
            135deg,
            #84532e,
            #c7934c
          );

        border: 1px solid #f1c67c;
        color: #fff8eb;

        font-weight: 800;
        letter-spacing: 1px;
      }

      .thf-case-card.is-finale .thf-case-action:hover {
        filter: brightness(1.15);
      }

      .thf-season-complete-banner {
        text-align: center;

        padding: 22px;

        margin: 15px 0;

        background:
          linear-gradient(
            135deg,
            #183b32,
            #14243a
          );

        border: 1px solid #53c796;
        border-radius: 14px;

        color: #e7f8e9;
      }

      .thf-season-complete-banner strong {
        display: block;

        font-size: 22px;
        color: #eacb88;

        margin-bottom: 8px;
      }

      .thf-season-complete-banner p {
        margin: 0;
        color: #d1e7dc;
      }

      /* ==================================
         NAVIGATION ACTIONS
      ================================== */

      .thf-nav-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 22px;
      }

      .thf-nav-actions button {
        flex: 1 1 180px;
      }

      #hq-screen #switch-profile-btn {
        display: none !important;
      }

      #thf-casefiles-hq-btn,
      #thf-evidence-hq-btn,
      #thf-evidence-overview-btn,
      #thf-casefiles-overview-btn,
      #thf-casefiles-story-btn,
      #thf-evidence-investigation-btn {
        display: none !important;
      }

      #evidence-screen .thf-evidence-case button {
        display: none !important;
      }

      #investigation-entry-area,
      #case-preview-list,
      .overview-notice {
        display: none !important;
      }

      @media (max-width: 600px) {

        .thf-nav-menu,
        .thf-case-grid {
          grid-template-columns: 1fr;
        }

        .thf-nav-card {
          min-height: 130px;
        }

        .thf-case-card.is-finale h3 {
          font-size: 19px;
        }
      }

    `;

    document.head.appendChild(style);
  }

  /* ======================================
     PROFILE & HEADQUARTERS
  ====================================== */


function setupProfile() {

  // Logout is now handled inside
  // Detective Profile & Settings.

  const edit = document.getElementById(
    "edit-profile-btn"
  );

  if (edit) {
    edit.textContent = t().profile;
  }

}

  function setupHQ() {

    const coming = document.querySelector(
      ".hq-season-card .coming-label"
    );

    if (coming) {
      coming.style.display = "none";
    }

    const evidence = document.getElementById(
      "thf-evidence-hq-btn"
    );

    if (evidence) {
      evidence.style.display = "none";
    }
  }

  /* ======================================
     CREATE CASE FILES SCREEN
  ====================================== */

  function createScreen() {

    let screen = document.getElementById(
      "case-files-screen"
    );

    if (!screen) {

      const app = document.getElementById("app");

      if (!app) {
        return false;
      }

      screen = el(
        "section",
        "screen app-page hidden"
      );

      screen.id = "case-files-screen";

      const panel = el(
        "div",
        "page-panel wide-panel"
      );

      const eyebrow = el(
        "p",
        "eyebrow",
        "THE HIDDEN FILES"
      );

      const heading = el("h2");
      heading.id = "thf-files-heading";

      const intro = el(
        "p",
        "page-description"
      );

      intro.id = "thf-files-intro";

      const stats = el(
        "div",
        "season-progress-panel"
      );

      stats.id = "thf-files-stats";

      const grid = el(
        "div",
        "thf-case-grid"
      );

      grid.id = "thf-files-grid";

      const actions = el(
        "div",
        "thf-nav-actions"
      );

      actions.id = "thf-files-actions";

      panel.append(
        eyebrow,
        heading,
        intro,
        stats,
        grid,
        actions
      );

      screen.appendChild(panel);

      app.appendChild(screen);
    }

    if (
      typeof screenIds !== "undefined" &&
      Array.isArray(screenIds) &&
      !screenIds.includes("case-files-screen")
    ) {
      screenIds.push("case-files-screen");
    }

    return true;
  }

  /* ======================================
     LOAD CASE CSS & JAVASCRIPT
  ====================================== */

  function loadCaseFiles(caseId) {

    const config = FILES[caseId];

    if (!config) {
      return Promise.resolve();
    }

    const styleId =
      "thf-case" + caseId + "-style";

    const scriptId =
      "thf-case" + caseId + "-script";

    const openerName =
      "thfCase" + caseId + "Open";

    /* LOAD CSS */

    if (
      !document.getElementById(styleId)
    ) {

      const link = document.createElement(
        "link"
      );

      link.id = styleId;
      link.rel = "stylesheet";
      link.href = config.css;

      document.head.appendChild(link);
    }

    /* LOAD JAVASCRIPT */

    return new Promise(function (resolve, reject) {

      if (
        typeof window[openerName] === "function"
      ) {
        resolve();
        return;
      }

      let script = document.getElementById(
        scriptId
      );

      if (script) {

        script.addEventListener(
          "load",
          function () {

            if (
              typeof window[openerName] === "function"
            ) {
              resolve();
            } else {
              reject(
                new Error(
                  "Missing opener: " + openerName
                )
              );
            }
          },
          { once: true }
        );

        script.addEventListener(
          "error",
          reject,
          { once: true }
        );

        return;
      }

      script = document.createElement(
        "script"
      );

      script.id = scriptId;
      script.src = config.js;

      script.onload = function () {

        if (
          typeof window[openerName] === "function"
        ) {
          resolve();
        } else {
          reject(
            new Error(
              "Missing opener: " + openerName
            )
          );
        }
      };

      script.onerror = function () {
        reject(
          new Error(
            "Unable to load " + config.js
          )
        );
      };

      document.body.appendChild(script);
    });
  }

  /* ======================================
     OPEN CASE
  ====================================== */

  async function openCase(index) {

    const item = CASES[index];

    const p = progress();

    if (
      !item ||
      index >= PLAYABLE_CASES
    ) {
      alert(t().unavailable);
      return;
    }

    /* CHECK UNLOCK */

    if (!unlocked(index, p)) {

      alert(
        index === 0
          ? t().prologue
          : t().previous
      );

      return;
    }

    /* CHECK LIVES */

    const completed = caseDone(index, p);

    if (
      !completed &&
      Number(p.lives ?? 3) <= 0
    ) {
      alert(t().noLives);
      return;
    }

    /* LOAD FILES */

    if (FILES[item.id]) {

      try {
        await loadCaseFiles(item.id);

      } catch (error) {

        console.error(error);

        alert(t().missing);
        return;
      }
    }

    /* FIND CASE OPENER */

    const opener = window[item.opener];

    if (
      typeof opener !== "function"
    ) {

      console.error(
        "Missing opener:",
        item.opener
      );

      alert(t().missing);
      return;
    }

    /* OPEN GAME */

    try {
      opener();

    } catch (error) {

      console.error(
        "Unable to open Case " + item.id,
        error
      );

      alert(t().missing);
    }
  }

  /* ======================================
     RENDER CASE FILES
  ====================================== */

  function renderFiles() {

    if (!createScreen()) {
      return;
    }

    const p = progress();

    const heading = document.getElementById(
      "thf-files-heading"
    );

    const intro = document.getElementById(
      "thf-files-intro"
    );

    const stats = document.getElementById(
      "thf-files-stats"
    );

    const grid = document.getElementById(
      "thf-files-grid"
    );

    const actions = document.getElementById(
      "thf-files-actions"
    );

    heading.textContent = t().select;

    intro.textContent = t().intro;

    /* COUNT COMPLETED CASES */

    let completedCount = 0;

    CASES.forEach(function (item, index) {

      if (caseDone(index, p)) {
        completedCount++;
      }
    });

    /* PROGRESS DISPLAY */

    stats.textContent =
      completedCount +
      " / 10 CASES · " +
      (p.xp ?? 0) +
      " XP · ❤️ " +
      (p.lives ?? 3) +
      "/3";

    grid.replaceChildren();

    /* ==================================
       SEASON COMPLETE BANNER
    ================================== */

    if (caseDone(9, p)) {

      const banner = el(
        "div",
        "thf-season-complete-banner"
      );

      banner.append(
        el(
          "strong",
          "",
          "🏆 " + t().seasonComplete
        ),
        el(
          "p",
          "",
          "THE HIDDEN FILES — FINANCIAL ACCOUNTING & REPORTING"
        )
      );

      grid.appendChild(banner);
    }

    /* ==================================
       CASE CARDS
    ================================== */

    CASES.forEach(function (item, index) {

      const done = caseDone(index, p);

      const ready = unlocked(index, p);

      const started = caseStarted(index, p);

      const comingSoon =
        index >= PLAYABLE_CASES;

      const isFinale = item.id === "10";

      let status = t().locked;

      if (done) {

        status = t().complete;

      } else if (comingSoon) {

        status = t().soon;

      } else if (ready && started) {

        status = t().started;

      } else if (ready) {

        status = t().available;
      }

      /* CREATE CARD */

      const card = el(
        "article",
        "thf-case-card"
      );

      if (done) {

        card.classList.add(
          "is-completed"
        );

      } else if (
        ready &&
        !comingSoon
      ) {

        card.classList.add(
          "is-available"
        );

      } else {

        card.classList.add(
          "is-locked"
        );
      }

      /* FINALE DESIGN */

      if (isFinale) {

        card.classList.add(
          "is-finale"
        );

        card.appendChild(
          el(
            "span",
            "thf-finale-label",
            "⚠ " + t().finale
          )
        );

        card.appendChild(
          el(
            "div",
            "thf-finale-icon",
            done ? "🏆" : "🔐"
          )
        );
      }

      /* CASE STATUS */

      const statusLine = el(
        "p",
        "thf-case-status",
        "CASE " +
          item.id +
          " · " +
          status
      );

      const name = el(
        "h3",
        "",
        item.name
      );

      const type = el(
        "p",
        "",
        item.type
      );

      card.append(
        statusLine,
        name,
        type
      );

      if (isFinale) {

        card.appendChild(
          el(
            "p",
            "thf-finale-desc",
            "9 CASES · 1 FINAL TRUTH"
          )
        );
      }

      /* CASE ACTION */

      if (comingSoon) {

        card.appendChild(
          el(
            "p",
            "",
            "🔒 " + t().soon
          )
        );

      } else if (ready) {

        let label = t().open;

        if (done) {

          label = t().review;

        } else if (started) {

          label = t().resume;
        }

        if (isFinale && !done && !started) {

          label = "⚠ " + t().finale +
            " — " + t().open;
        }

        const openButton = button(
          label,
          function () {
            openCase(index);
          }
        );

        openButton.classList.add(
          "thf-case-action"
        );

        card.appendChild(
          openButton
        );

      } else {

        card.appendChild(
          el(
            "p",
            "",
            "🔒 " + (
              index === 0
                ? t().prologue
                : t().locked
            )
          )
        );
      }

      grid.appendChild(card);
    });

    /* ==================================
       BACK BUTTON
    ================================== */

    actions.replaceChildren();

    actions.appendChild(
      button(
        t().back,
        openSeason,
        "secondary-btn"
      )
    );
  }

  /* ======================================
     OPEN CASE FILES
  ====================================== */

function showStoryLockedPopup() {

  // Prevent duplicate popups
  if (document.getElementById("thf-story-lock-popup")) {
    return;
  }

  const overlay = document.createElement("div");
  overlay.id = "thf-story-lock-popup";

  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.8);
  `;

  const popup = document.createElement("div");

  popup.style.cssText = `
    width: 100%;
    max-width: 400px;
    padding: 30px 24px;
    box-sizing: border-box;
    text-align: center;
    background: #101e33;
    border: 1px solid #d9b66f;
    border-radius: 18px;
    color: #f3e7d0;
    box-shadow: 0 15px 50px rgba(0,0,0,0.5);
  `;

  const icon = document.createElement("div");
  icon.textContent = "🔒";
  icon.style.fontSize = "42px";

  const title = document.createElement("h2");
  title.textContent = t().locked;
  title.style.color = "#e3be75";
  title.style.margin = "15px 0";

  const message = document.createElement("p");
  message.textContent = t().prologue;
  message.style.margin = "20px 0";
  message.style.lineHeight = "1.6";

  const close = document.createElement("button");
  close.type = "button";
  close.className = "primary-btn";
  close.textContent = "OK";

  close.addEventListener("click", function () {
    overlay.remove();
  });

  popup.append(icon, title, message, close);
  overlay.appendChild(popup);

  document.body.appendChild(overlay);
}


function openFiles() {

  if (!profile()) {
    show("profile-screen");
    return;
  }

  // Story Mode must be completed first
  if (!storyDone()) {
    showStoryLockedPopup();
    return;
  }

  currentPage = "files";

  renderFiles();

  show("case-files-screen");
}

  /* ======================================
     STORY MODE
  ====================================== */

  function openStory() {

    const storyArea = document.getElementById(
      "story-entry-area"
    );

    const original = storyArea
      ? storyArea.querySelector("button")
      : null;

    if (original) {

      original.click();
      return;
    }

    if (
      document.getElementById(
        "story-screen"
      )
    ) {

      show("story-screen");
      return;
    }

    show("far-overview-screen");
  }

  /* ======================================
     EVIDENCE BOARD
  ====================================== */

  function openBoard() {

    if (
      typeof thfOpenEvidence === "function"
    ) {

      thfOpenEvidence(
        "far-overview-screen"
      );

      return;
    }

    alert(t().boardMissing);
  }

  /* ======================================
     MENU CARD
  ====================================== */

  function menuCard(
    icon,
    label,
    description,
    action
  ) {

    const card = button(
      "",
      action,
      "thf-nav-card"
    );

    card.append(
      el(
        "span",
        "thf-nav-icon",
        icon
      ),
      el(
        "strong",
        "",
        label
      ),
      el(
        "small",
        "",
        description
      )
    );

    return card;
  }

  /* ======================================
     SEASON MENU
  ====================================== */

  function renderSeasonMenu() {

    const overview = document.getElementById(
      "far-overview-screen"
    );

    if (!overview) {
      return;
    }

    let menu = document.getElementById(
      "thf-season-menu"
    );

    if (!menu) {

      menu = el(
        "div",
        "thf-nav-menu"
      );

      menu.id = "thf-season-menu";

      const storyArea = document.getElementById(
        "story-entry-area"
      );

      if (storyArea) {

        storyArea.before(menu);

      } else {

        const panel = overview.querySelector(
          ".page-panel"
        );

        if (panel) {
          panel.appendChild(menu);
        }
      }
    }

    menu.replaceChildren();

    menu.append(
      menuCard(
        "📖",
        t().story,
        t().storyDesc,
        openStory
      ),


menuCard(
  storyDone() ? "📁" : "🔒",
  t().files,
  storyDone()
    ? t().filesDesc
    : t().prologue,
  openFiles
),


      menuCard(
        "🗂️",
        t().evidence,
        t().evidenceDesc,
        openBoard
      )
    );

    /* HIDE ORIGINAL STORY ENTRY */

    const storyArea = document.getElementById(
      "story-entry-area"
    );

    if (storyArea) {

      storyArea.style.position = "absolute";
      storyArea.style.width = "1px";
      storyArea.style.height = "1px";
      storyArea.style.overflow = "hidden";
      storyArea.style.opacity = "0";
      storyArea.style.pointerEvents = "none";
    }
  }

  /* ======================================
     OPEN SEASON 01
  ====================================== */

  function openSeason() {

    if (!profile()) {

      show("profile-screen");
      return;
    }

    currentPage = "season";

    if (
      typeof renderStoryEntry === "function"
    ) {
      renderStoryEntry();
    }

    if (
      typeof invRenderEntry === "function"
    ) {
      invRenderEntry();
    }

    renderSeasonMenu();

    show("far-overview-screen");
  }

  /* ======================================
     REFRESH NAVIGATION
  ====================================== */

  function refreshNavigation() {

    setupProfile();

    setupHQ();

    renderSeasonMenu();

    if (currentPage === "files") {
      renderFiles();
    }
  }

  /* ======================================
     INITIALISE
  ====================================== */

  function init() {

    if (initialized) {
      return;
    }

    initialized = true;

    addStyle();

    createScreen();

    refreshNavigation();

    /* SEASON 01 BUTTON */

    const seasonButton = document.getElementById(
      "season-1-btn"
    );

    if (seasonButton) {

      seasonButton.addEventListener(
        "click",
        function () {

          queueMicrotask(
            openSeason
          );
        }
      );
    }

    /* STORY COMPLETE */

    const storyComplete = document.getElementById(
      "story-complete-back-btn"
    );

    if (storyComplete) {

      storyComplete.addEventListener(
        "click",
        function () {

          queueMicrotask(
            openSeason
          );
        }
      );
    }

    /* EDIT PROFILE */

    const profileButton = document.getElementById(
      "edit-profile-btn"
    );

    if (profileButton) {

      profileButton.addEventListener(
        "click",
        function () {

          queueMicrotask(
            setupProfile
          );
        }
      );
    }

    /* PROFILE FORM */

    const profileForm = document.getElementById(
      "edit-profile-form"
    );

    if (profileForm) {

      profileForm.addEventListener(
        "submit",
        function () {

          queueMicrotask(
            refreshNavigation
          );
        }
      );
    }
  }

  /* ======================================
     GLOBAL FUNCTIONS
  ====================================== */

  window.thfOpenCaseFiles = openFiles;

  window.thfOpenSeasonMenu = openSeason;

  window.thfRefreshCaseFiles = renderFiles;

  window.thfRefreshNavigation =
    refreshNavigation;

  /* ======================================
     START
  ====================================== */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );

  } else {

    init();
  }

})();

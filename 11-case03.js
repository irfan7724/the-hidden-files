
"use strict";

/* ==========================================
   THE HIDDEN FILES
   CASE 03 — THE DEPRECIATION CODE
   Complete Replacement
========================================== */

const THF_C03_PREFIX = "thf_case03_calculator_v1_";

const THF_C03_TEXT = {
  en: {
    title: "The Depreciation Code",
    label: "CASE 03 / 10 · CALCULATOR CHALLENGE",
    subtitle: "Meridian Holdings Berhad · FY2025",
    exit: "EXIT",
    evidence: "01 · EVIDENCE",
    calculator: "02 · CALCULATOR",
    report: "03 · CASE REPORT",
    intro: "The Machine That Never Depreciated",
    story:
      "Alya discovered that a RM50,000 production machine was not depreciated in the 2025 draft accounts. Examine the documents and calculate the correct annual depreciation.",
    alya:
      "Detective, the machine was available for use on 1 January 2025. Depreciation begins when an asset is available for use.",
    documentA: "DOCUMENT A — FIXED ASSET REGISTER",
    documentB: "DOCUMENT B — ACCOUNTING POLICY",
    asset: "Asset",
    assetValue: "Production Machinery — MX-104",
    cost: "Cost",
    residual: "Residual Value",
    useful: "Useful Life",
    available: "Available for Use",
    method: "Depreciation Method",
    period: "Reporting Period",
    policy:
      "Straight-line depreciation starts when an asset is available for use.",
    begin: "START CALCULATOR CHALLENGE",
    puzzle: "Calculate Annual Depreciation",
    instruction:
      "Use the calculator and enter the annual depreciation expense in RM.",
    calcTitle: "INVESTIGATION CALCULATOR",
    answerTitle: "YOUR FINAL ANSWER",
    answerLabel: "Annual depreciation (RM)",
    placeholder: "Enter amount in RM",
    useResult: "USE CALCULATOR RESULT",
    verify: "VERIFY CALCULATION",
    invalid: "Enter a valid non-negative amount.",
    invalidCalc: "Invalid calculation.",
    wrong:
      "Incorrect. Recheck the residual value and useful life.",
    life: "One life has been deducted.",
    remaining: "One attempt remains.",
    revealed:
      "Correct answer revealed: (RM50,000 − RM5,000) ÷ 5 = RM9,000. This case earns 0 XP.",
    correct:
      "Correct! Annual depreciation is RM9,000.",
    next: "PREPARE CASE REPORT",
    reportTitle: "CASE 03 — DEPRECIATION REPORT",
    reportIntro:
      "Review your findings before submitting.",
    finding1: "Depreciation Calculation",
    finding1Text:
      "(RM50,000 − RM5,000) ÷ 5 = RM9,000 per year.",
    finding2: "Accounting Entry",
    finding2Text:
      "Dr Depreciation Expense RM9,000; Cr Accumulated Depreciation — Machinery RM9,000.",
    finding3: "Profit Impact",
    finding3Text:
      "Recording the missing depreciation reduces adjusted 2025 profit before tax by RM9,000.",
    finding4: "Connection to Previous Cases",
    finding4Text:
      "The RM50,000 reclassification from Cases 01 and 02 is counted once. Depreciation is a separate adjustment.",
    submit: "SUBMIT CASE 03 REPORT",
    completed: "CASE 03 COMPLETE",
    completedText:
      "The depreciation report has been filed successfully.",
    score: "XP EARNED",
    once: "XP is awarded only once per case.",
    files: "RETURN TO CASE FILES",
    viewEvidence: "📂 VIEW EVIDENCE",
    hints: "💡 HINT",
    evidenceTitle: "Investigation Documents",
    hintsTitle: "Detective Assistance",
    close: "CLOSE",
    freeEvidence:
      "Reviewing evidence does not deduct XP or lives.",
    hintRule:
      "Hints reduce maximum XP but do not deduct lives.",
    hint1Title: "HINT 1 — FORMULA",
    hint1Text:
      "Deduct residual value from cost, then divide by useful life.",
    hint1Formula:
      "(Cost − Residual Value) ÷ Useful Life",
    hint2Title: "HINT 2 — GUIDED CALCULATION",
    hint2Text:
      "The machine was available on 1 January, so use one full year.",
    hint2Formula:
      "(50,000 − 5,000) ÷ 5",
    hint1Action: "UNLOCK HINT 1 · MAX 7 XP",
    hint2Action: "UNLOCK HINT 2 · MAX 5 XP",
    hintLocked: "Unlock Hint 1 first.",
    hintDone: "The puzzle has been resolved.",
    locked: "Complete Case 02 before opening Case 03.",
    exitConfirm:
      "Exit Case 03? Your progress will be saved.",
    saved: "Progress saved automatically.",
    saveError: "Unable to save progress."
  },

  ms: {
    title: "The Depreciation Code",
    label: "KES 03 / 10 · CABARAN KALKULATOR",
    subtitle: "Meridian Holdings Berhad · Tahun Kewangan 2025",
    exit: "KELUAR",
    evidence: "01 · BUKTI",
    calculator: "02 · KALKULATOR",
    report: "03 · LAPORAN KES",
    intro: "Mesin yang Tidak Pernah Disusutnilaikan",
    story:
      "Alya mendapati mesin pengeluaran RM50,000 tidak disusutnilaikan dalam akaun draf 2025. Semak dokumen dan kira susut nilai tahunan.",
    alya:
      "Detektif, mesin tersedia untuk digunakan pada 1 Januari 2025. Susut nilai bermula apabila aset tersedia untuk digunakan.",
    documentA: "DOKUMEN A — DAFTAR ASET TETAP",
    documentB: "DOKUMEN B — POLISI PERAKAUNAN",
    asset: "Aset",
    assetValue: "Mesin Pengeluaran — MX-104",
    cost: "Kos",
    residual: "Nilai Sisa",
    useful: "Hayat Berguna",
    available: "Tersedia untuk Digunakan",
    method: "Kaedah Susut Nilai",
    period: "Tempoh Pelaporan",
    policy:
      "Susut nilai garis lurus bermula apabila aset tersedia untuk digunakan.",
    begin: "MULAKAN CABARAN KALKULATOR",
    puzzle: "Kira Susut Nilai Tahunan",
    instruction:
      "Gunakan kalkulator dan masukkan belanja susut nilai tahunan dalam RM.",
    calcTitle: "KALKULATOR PENYIASATAN",
    answerTitle: "JAWAPAN AKHIR",
    answerLabel: "Susut nilai tahunan (RM)",
    placeholder: "Masukkan jumlah RM",
    useResult: "GUNAKAN HASIL KALKULATOR",
    verify: "SEMAK PENGIRAAN",
    invalid: "Masukkan jumlah yang sah dan tidak negatif.",
    invalidCalc: "Pengiraan tidak sah.",
    wrong:
      "Salah. Semak nilai sisa dan hayat berguna.",
    life: "Satu nyawa ditolak.",
    remaining: "Tinggal satu percubaan.",
    revealed:
      "Jawapan didedahkan: (RM50,000 − RM5,000) ÷ 5 = RM9,000. Kes ini mendapat 0 XP.",
    correct:
      "Betul! Susut nilai tahunan ialah RM9,000.",
    next: "SEDIAKAN LAPORAN KES",
    reportTitle: "KES 03 — LAPORAN SUSUT NILAI",
    reportIntro:
      "Semak penemuan sebelum menghantar laporan.",
    finding1: "Pengiraan Susut Nilai",
    finding1Text:
      "(RM50,000 − RM5,000) ÷ 5 = RM9,000 setahun.",
    finding2: "Jurnal Perakaunan",
    finding2Text:
      "Dr Belanja Susut Nilai RM9,000; Cr Susut Nilai Terkumpul — Mesin RM9,000.",
    finding3: "Kesan Keuntungan",
    finding3Text:
      "Merekodkan susut nilai tertinggal mengurangkan keuntungan sebelum cukai terlaras 2025 sebanyak RM9,000.",
    finding4: "Hubungan dengan Kes Terdahulu",
    finding4Text:
      "Pengelasan semula RM50,000 daripada Kes 01 dan 02 dikira sekali sahaja. Susut nilai ialah pelarasan berasingan.",
    submit: "HANTAR LAPORAN KES 03",
    completed: "KES 03 SELESAI",
    completedText:
      "Laporan susut nilai berjaya difailkan.",
    score: "XP DIPEROLEH",
    once: "XP hanya diberikan sekali bagi setiap kes.",
    files: "KEMBALI KE FAIL KES",
    viewEvidence: "📂 LIHAT BUKTI",
    hints: "💡 PETUNJUK",
    evidenceTitle: "Dokumen Penyiasatan",
    hintsTitle: "Bantuan Detektif",
    close: "TUTUP",
    freeEvidence:
      "Semakan bukti tidak menolak XP atau nyawa.",
    hintRule:
      "Hint mengurangkan XP maksimum tetapi tidak menolak nyawa.",
    hint1Title: "HINT 1 — FORMULA",
    hint1Text:
      "Tolak nilai sisa daripada kos, kemudian bahagi dengan hayat berguna.",
    hint1Formula:
      "(Kos − Nilai Sisa) ÷ Hayat Berguna",
    hint2Title: "HINT 2 — PANDUAN PENGIRAAN",
    hint2Text:
      "Mesin tersedia pada 1 Januari, jadi gunakan setahun penuh.",
    hint2Formula:
      "(50,000 − 5,000) ÷ 5",
    hint1Action: "BUKA HINT 1 · MAKSIMUM 7 XP",
    hint2Action: "BUKA HINT 2 · MAKSIMUM 5 XP",
    hintLocked: "Buka Hint 1 dahulu.",
    hintDone: "Puzzle sudah diselesaikan.",
    locked: "Selesaikan Kes 02 sebelum membuka Kes 03.",
    exitConfirm:
      "Keluar Kes 03? Kemajuan akan disimpan.",
    saved: "Kemajuan disimpan secara automatik.",
    saveError: "Kemajuan tidak dapat disimpan."
  }
};

// ==========================================
// STATE
// ==========================================

function thfC03Default() {
  return {
    started: false,
    stage: 1,
    expression: "",
    calculatorResult: "",
    answer: "",
    hints: 0,
    mistakes: 0,
    matched: false,
    completed: false
  };
}

let thfC03State = thfC03Default();
let thfC03Feedback = "";
let thfC03FeedbackSuccess = false;
let thfC03Ready = false;
let thfC03ReturnFocus = null;

// ==========================================
// PROFILE / LANGUAGE
// ==========================================

function thfC03Profile() {
  return typeof getActiveDetective === "function"
    ? getActiveDetective()
    : null;
}

function thfC03T() {
  const profile = thfC03Profile();

  const lang =
    profile &&
    typeof getProfileLanguage === "function"
      ? getProfileLanguage(profile)
      : profile?.settings?.language || "en";

  return THF_C03_TEXT[
    lang === "ms" ? "ms" : "en"
  ];
}

function thfC03Key() {
  const profile = thfC03Profile();

  return profile
    ? THF_C03_PREFIX + profile.id
    : null;
}

// ==========================================
// DOM HELPERS
// ==========================================

function thfC03El(tag, className = "", text) {
  const el = document.createElement(tag);

  if (className) {
    el.className = className;
  }

  if (text !== undefined) {
    el.textContent = String(text);
  }

  return el;
}

function thfC03Button(
  text,
  action,
  className = "primary-btn"
) {
  const button = thfC03El(
    "button",
    className,
    text
  );

  button.type = "button";
  button.addEventListener("click", action);

  return button;
}

function thfC03Set(id, text) {
  const el = document.getElementById(id);

  if (el) {
    el.textContent = text;
  }
}

function thfC03Actions(...buttons) {
  const row = thfC03El(
    "div",
    "thf-c03-actions"
  );

  buttons.forEach(button => {
    row.appendChild(button);
  });

  return row;
}

function thfC03FeedbackBox(
  message,
  success = false
) {
  const box = thfC03El(
    "div",
    "thf-c03-feedback" +
      (success ? " success" : ""),
    message
  );

  box.style.whiteSpace = "pre-line";
  box.setAttribute("role", "status");

  return box;
}

// ==========================================
// NAVIGATION
// ==========================================

function thfC03ShowScreen(id) {
  if (typeof showScreen === "function") {
    showScreen(id);
  }

  document
    .querySelectorAll("#app > .screen")
    .forEach(screen => {
      screen.classList.toggle(
        "hidden",
        screen.id !== id
      );
    });

  window.scrollTo(0, 0);
}

function thfC03ReturnToFiles() {
  if (
    typeof thfOpenCaseFiles === "function"
  ) {
    thfOpenCaseFiles();
    return;
  }

  if (
    document.getElementById(
      "case-files-screen"
    )
  ) {
    thfC03ShowScreen(
      "case-files-screen"
    );
    return;
  }

  thfC03ShowScreen(
    "far-overview-screen"
  );
}

// ==========================================
// LOAD / SAVE
// ==========================================

function thfC03Load() {
  thfC03State = thfC03Default();

  const key = thfC03Key();
  if (!key) return;

  try {
    const saved = JSON.parse(
      localStorage.getItem(key) || "null"
    );

    if (!saved || typeof saved !== "object") {
      return;
    }

    thfC03State.started =
      saved.started === true;

    thfC03State.matched =
      saved.matched === true;

    thfC03State.completed =
      saved.completed === true &&
      thfC03State.matched;

    thfC03State.expression =
      typeof saved.expression === "string"
        ? saved.expression.slice(0, 60)
        : "";

    thfC03State.calculatorResult =
      typeof saved.calculatorResult === "string"
        ? saved.calculatorResult.slice(0, 30)
        : "";

    thfC03State.answer =
      typeof saved.answer === "string"
        ? saved.answer.slice(0, 30)
        : "";

    thfC03State.hints =
      Number.isInteger(saved.hints)
        ? Math.max(
            0,
            Math.min(2, saved.hints)
          )
        : 0;

    thfC03State.mistakes =
      Number.isInteger(saved.mistakes)
        ? Math.max(0, saved.mistakes)
        : 0;

    if (
      typeof thfCaseStatus === "function"
    ) {
      const score =
        thfCaseStatus("03");

      thfC03State.hints = Math.max(
        thfC03State.hints,
        Math.min(2, score?.hints || 0)
      );

      thfC03State.mistakes = Math.max(
        thfC03State.mistakes,
        score?.mistakes || 0
      );
    }

    thfC03State.stage =
      thfC03State.completed
        ? 4
        : thfC03State.matched
          ? 3
          : saved.stage === 2
            ? 2
            : 1;

  } catch (error) {
    console.warn(
      "Case 03 load error:",
      error
    );
  }
}

function thfC03Save() {
  const key = thfC03Key();

  if (!key) return false;

  try {
    localStorage.setItem(
      key,
      JSON.stringify(thfC03State)
    );

    thfC03Set(
      "thf-c03-save",
      thfC03T().saved
    );

    return true;

  } catch (error) {
    console.error(
      "Case 03 save error:",
      error
    );

    thfC03Set(
      "thf-c03-save",
      thfC03T().saveError
    );

    return false;
  }
}

// ==========================================
// UNLOCK CASE 03
// ==========================================

function thfC03Unlocked() {
  const profile = thfC03Profile();

  if (!profile) return false;

  if (
    typeof thfCaseStatus === "function" &&
    thfCaseStatus("02")?.completed === true
  ) {
    return true;
  }

  try {
    const saved = JSON.parse(
      localStorage.getItem(
        "thf_case02_matching_v1_" +
        profile.id
      ) || "null"
    );

    return saved?.completed === true;

  } catch {
    return false;
  }
}

// ==========================================
// BUILD CASE 03 SCREEN
// ==========================================

function thfC03Build() {
  if (
    document.getElementById(
      "case03-screen"
    )
  ) {
    return;
  }

  const app = document.getElementById(
    "app"
  );

  if (!app) return;

  const screen = thfC03El(
    "section",
    "screen app-page thf-c03-screen hidden"
  );

  screen.id = "case03-screen";

  const panel = thfC03El(
    "div",
    "page-panel thf-c03-panel"
  );

  const header = thfC03El(
    "div",
    "thf-c03-header"
  );

  const heading = thfC03El("div");

  const label = thfC03El(
    "p",
    "eyebrow"
  );

  label.id = "thf-c03-label";

  const title = thfC03El(
    "h2",
    "",
    "The Depreciation Code"
  );

  const subtitle = thfC03El("p");
  subtitle.id = "thf-c03-subtitle";

  heading.append(
    label,
    title,
    subtitle
  );

  const exit = thfC03Button(
    "EXIT",
    thfC03Exit,
    "secondary-btn"
  );

  exit.id = "thf-c03-exit";

  header.append(heading, exit);

  const status = thfC03El(
    "div",
    "thf-c03-status"
  );

  status.id = "thf-c03-status";

  const tools = thfC03El(
    "div",
    "thf-c03-tools"
  );

  tools.id = "thf-c03-tools";

  const content = thfC03El("div");
  content.id = "thf-c03-content";

  const save = thfC03El(
    "p",
    "thf-c03-small"
  );

  save.id = "thf-c03-save";

  panel.append(
    header,
    status,
    tools,
    content,
    save
  );

  screen.appendChild(panel);
  app.appendChild(screen);

  if (
    typeof screenIds !== "undefined" &&
    !screenIds.includes(
      "case03-screen"
    )
  ) {
    screenIds.push("case03-screen");
  }

  // Build modal
  const modal = thfC03El(
    "div",
    "thf-c03-modal"
  );

  modal.id = "thf-c03-modal";
  modal.hidden = true;

  modal.setAttribute(
    "role",
    "dialog"
  );

  modal.setAttribute(
    "aria-modal",
    "true"
  );

  const card = thfC03El(
    "div",
    "thf-c03-modal-card"
  );

  const modalHeader = thfC03El(
    "div",
    "thf-c03-modal-header"
  );

  const modalTitle = thfC03El("h3");
  modalTitle.id = "thf-c03-modal-title";

  const close = thfC03Button(
    "CLOSE",
    thfC03CloseModal,
    "thf-c03-close"
  );

  close.id = "thf-c03-modal-close";

  modalHeader.append(
    modalTitle,
    close
  );

  const body = thfC03El("div");
  body.id = "thf-c03-modal-body";

  card.append(
    modalHeader,
    body
  );

  modal.appendChild(card);
  document.body.appendChild(modal);

  modal.addEventListener(
    "click",
    event => {
      if (event.target === modal) {
        thfC03CloseModal();
      }
    }
  );

  document.addEventListener(
    "keydown",
    event => {
      if (modal.hidden) return;

      if (event.key === "Escape") {
        thfC03CloseModal();
        return;
      }

      if (event.key !== "Tab") return;

      const buttons = Array.from(
        modal.querySelectorAll(
          "button:not(:disabled)"
        )
      );

      if (!buttons.length) return;

      const first = buttons[0];
      const last =
        buttons[buttons.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();

      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    }
  );
}

// ==========================================
// MODAL
// ==========================================

function thfC03OpenModal(title) {
  const modal = document.getElementById(
    "thf-c03-modal"
  );

  if (!modal) return;

  thfC03ReturnFocus =
    document.activeElement;

  thfC03Set(
    "thf-c03-modal-title",
    title
  );

  modal.hidden = false;

  document.getElementById(
    "thf-c03-modal-close"
  )?.focus();
}

function thfC03CloseModal() {
  const modal = document.getElementById(
    "thf-c03-modal"
  );

  if (modal) {
    modal.hidden = true;
  }

  if (
    thfC03ReturnFocus?.isConnected
  ) {
    thfC03ReturnFocus.focus();
  }
}

// ==========================================
// EVIDENCE DOCUMENTS
// ==========================================

function thfC03Paper(title, rows) {
  const paper = thfC03El(
    "div",
    "thf-c03-paper"
  );

  paper.append(
    thfC03El(
      "p",
      "",
      "MERIDIAN HOLDINGS BERHAD"
    ),
    thfC03El(
      "h4",
      "",
      title
    )
  );

  rows.forEach(([name, value]) => {
    const row = thfC03El(
      "div",
      "thf-c03-paper-row"
    );

    row.append(
      thfC03El("span", "", name),
      thfC03El("span", "", value)
    );

    paper.appendChild(row);
  });

  return paper;
}

function thfC03Documents(container) {
  const t = thfC03T();

  container.appendChild(
    thfC03Paper(
      t.documentA,
      [
        [t.asset, t.assetValue],
        [t.cost, "RM50,000"],
        [t.residual, "RM5,000"],
        [t.useful, "5 years / 5 tahun"],
        [t.available, "1 January 2025"]
      ]
    )
  );

  container.appendChild(
    thfC03Paper(
      t.documentB,
      [
        [t.method, "Straight-line"],
        [t.period, "31 December 2025"]
      ]
    )
  );

  const policy = thfC03El(
    "div",
    "thf-c03-paper"
  );

  policy.appendChild(
    thfC03El("p", "", t.policy)
  );

  container.appendChild(policy);
}

function thfC03ViewEvidence() {
  const body = document.getElementById(
    "thf-c03-modal-body"
  );

  if (!body) return;

  body.replaceChildren();

  body.appendChild(
    thfC03El(
      "p",
      "thf-c03-small",
      thfC03T().freeEvidence
    )
  );

  thfC03Documents(body);

  thfC03OpenModal(
    thfC03T().evidenceTitle
  );
}

// ==========================================
// HINT SYSTEM
// ==========================================

function thfC03SaveHints(level) {
  if (
    thfC03State.matched ||
    thfC03State.completed
  ) {
    return;
  }

  const target = Math.max(
    thfC03State.hints,
    Math.min(2, level)
  );

  if (
    typeof thfLoadProgress === "function" &&
    typeof thfSaveProgress === "function" &&
    typeof thfGetCase === "function"
  ) {
    const progress = thfLoadProgress();
    const record = thfGetCase(
      progress,
      "03"
    );

    if (!record.completed) {
      record.hints = Math.max(
        record.hints || 0,
        target
      );

      thfSaveProgress(progress);
    }
  }

  thfC03State.hints = target;
  thfC03Save();
}

function thfC03UnlockHint(level) {
  if (
    thfC03State.matched ||
    thfC03State.completed
  ) {
    return;
  }

  if (
    level === 2 &&
    thfC03State.hints < 1
  ) {
    return;
  }

  thfC03SaveHints(level);
  thfC03RenderHints();
  thfC03RenderTools();
}

function thfC03RenderHints() {
  const t = thfC03T();

  const body = document.getElementById(
    "thf-c03-modal-body"
  );

  if (!body) return;

  body.replaceChildren();

  body.appendChild(
    thfC03El(
      "p",
      "thf-c03-small",
      t.hintRule
    )
  );

  if (thfC03State.matched) {
    body.appendChild(
      thfC03FeedbackBox(
        t.hintDone,
        true
      )
    );
  }

  [1, 2].forEach(level => {
    const unlocked =
      thfC03State.hints >= level;

    const card = thfC03El(
      "div",
      "thf-c03-hint"
    );

    card.appendChild(
      thfC03El(
        "h4",
        "",
        level === 1
          ? t.hint1Title
          : t.hint2Title
      )
    );

    if (unlocked) {
      card.appendChild(
        thfC03El(
          "p",
          "",
          level === 1
            ? t.hint1Text
            : t.hint2Text
        )
      );

      card.appendChild(
        thfC03El(
          "div",
          "thf-c03-formula",
          level === 1
            ? t.hint1Formula
            : t.hint2Formula
        )
      );

    } else if (!thfC03State.matched) {
      const button = thfC03Button(
        level === 1
          ? t.hint1Action
          : t.hint2Action,
        () => thfC03UnlockHint(level),
        "secondary-btn"
      );

      if (
        level === 2 &&
        thfC03State.hints < 1
      ) {
        button.disabled = true;
        button.title = t.hintLocked;
      }

      card.appendChild(button);
    }

    body.appendChild(card);
  });
}

function thfC03OpenHints() {
  thfC03RenderHints();

  thfC03OpenModal(
    thfC03T().hintsTitle
  );
}

function thfC03RenderTools() {
  const tools = document.getElementById(
    "thf-c03-tools"
  );

  if (!tools) return;

  tools.replaceChildren();

  if (thfC03State.stage >= 2) {
    const t = thfC03T();

    tools.append(
      thfC03Button(
        t.viewEvidence,
        thfC03ViewEvidence,
        "secondary-btn"
      ),
      thfC03Button(
        t.hints +
        " (" +
        thfC03State.hints +
        "/2)",
        thfC03OpenHints,
        "secondary-btn"
      )
    );
  }
}

// ==========================================
// OPEN / EXIT
// ==========================================

function thfCase03Open() {
  if (!thfC03Profile()) {
    thfC03ShowScreen(
      "profile-screen"
    );
    return;
  }

  if (!thfC03Unlocked()) {
    alert(thfC03T().locked);
    return;
  }

  thfC03Init();
  thfC03Load();

  thfC03State.started = true;
  thfC03Save();

  thfC03Feedback = "";
  thfC03FeedbackSuccess = false;

  thfC03Render();

  thfC03ShowScreen(
    "case03-screen"
  );
}

function thfC03Exit() {
  if (
    !window.confirm(
      thfC03T().exitConfirm
    )
  ) {
    return;
  }

  thfC03CloseModal();
  thfC03Save();

  if (
    typeof thfRefreshAll === "function"
  ) {
    thfRefreshAll();
  }

  thfC03ReturnToFiles();
}

// ==========================================
// STAGE 1 — INTRO
// ==========================================

function thfC03RenderIntro(container) {
  const t = thfC03T();

  const box = thfC03El(
    "div",
    "thf-c03-box"
  );

  box.append(
    thfC03El("h3", "", t.intro),
    thfC03El("p", "", t.story),
    thfC03FeedbackBox(
      "👩‍💼 ALYA RAHMAN\n" +
      t.alya
    )
  );

  thfC03Documents(box);

  box.appendChild(
    thfC03Actions(
      thfC03Button(
        t.begin,
        () => {
          thfC03State.stage = 2;
          thfC03Save();
          thfC03Render();
        }
      )
    )
  );

  container.appendChild(box);
}

// ==========================================
// SAFE CALCULATOR — NO EVAL()
//
// Supports:
// +  -  *  /  (  )  decimals
// ==========================================

function thfC03Calculate(expression) {
  const source = expression.replace(
    /\s+/g,
    ""
  );

  if (
    !source ||
    source.length > 60 ||
    !/^[0-9.+\-*/()]+$/.test(source)
  ) {
    throw new Error(
      "Invalid expression"
    );
  }

  let index = 0;

  function parseNumber() {
    const remaining = source.slice(index);

    const match = remaining.match(
      /^(?:\d+(?:\.\d*)?|\.\d+)/
    );

    if (!match) {
      throw new Error(
        "Invalid number"
      );
    }

    index += match[0].length;

    return Number(match[0]);
  }

  function parseFactor() {
    if (source[index] === "+") {
      index++;
      return parseFactor();
    }

    if (source[index] === "-") {
      index++;
      return -parseFactor();
    }

    if (source[index] === "(") {
      index++;

      const result = parseSum();

      if (source[index] !== ")") {
        throw new Error(
          "Missing closing bracket"
        );
      }

      index++;
      return result;
    }

    return parseNumber();
  }

  function parseProduct() {
    let value = parseFactor();

    while (
      source[index] === "*" ||
      source[index] === "/"
    ) {
      const operator = source[index++];
      const right = parseFactor();

      if (
        operator === "/" &&
        right === 0
      ) {
        throw new Error(
          "Division by zero"
        );
      }

      value =
        operator === "*"
          ? value * right
          : value / right;
    }

    return value;
  }

  function parseSum() {
    let value = parseProduct();

    while (
      source[index] === "+" ||
      source[index] === "-"
    ) {
      const operator = source[index++];
      const right = parseProduct();

      value =
        operator === "+"
          ? value + right
          : value - right;
    }

    return value;
  }

  const result = parseSum();

  if (
    index !== source.length ||
    !Number.isFinite(result)
  ) {
    throw new Error(
      "Invalid calculation"
    );
  }

  return Math.round(
    result * 1000000
  ) / 1000000;
}

// ==========================================
// CALCULATOR KEYPAD
// ==========================================

function thfC03KeyPress(key) {
  if (thfC03State.matched) return;

  thfC03Feedback = "";

  if (key === "C") {
    thfC03State.expression = "";
    thfC03State.calculatorResult = "";

  } else if (key === "DEL") {
    thfC03State.expression =
      thfC03State.expression.slice(
        0,
        -1
      );

    thfC03State.calculatorResult = "";

  } else if (key === "=") {
    try {
      const result = thfC03Calculate(
        thfC03State.expression
      );

      thfC03State.calculatorResult =
        String(result);

      thfC03State.expression =
        String(result);

    } catch {
      thfC03State.calculatorResult = "";

      thfC03Feedback =
        thfC03T().invalidCalc;
    }

  } else if (
    thfC03State.expression.length < 60
  ) {
    thfC03State.expression += key;
    thfC03State.calculatorResult = "";
  }

  thfC03Save();
  thfC03Render();

  document.getElementById(
    "thf-c03-calculator"
  )?.scrollIntoView({
    block: "nearest"
  });
}

// ==========================================
// MISTAKES / LIVES
// ==========================================

function thfC03Mistakes() {
  if (
    typeof thfCaseStatus === "function"
  ) {
    return Math.max(
      thfC03State.mistakes,
      thfCaseStatus("03")?.mistakes || 0
    );
  }

  return thfC03State.mistakes;
}

function thfC03RegisterWrong() {
  if (
    typeof thfRegisterMistake === "function"
  ) {
    thfRegisterMistake("03");
  }

  thfC03State.mistakes =
    Math.max(
      thfC03State.mistakes + 1,
      thfC03Mistakes()
    );

  thfC03Save();

  return thfC03Mistakes();
}

// ==========================================
// VERIFY ANSWER
// ==========================================

function thfC03Verify() {
  if (thfC03State.matched) return;

  const t = thfC03T();

  const raw = thfC03State.answer
    .trim()
    .replace(/,/g, "");

  if (
    !/^\d+(?:\.\d{1,2})?$/.test(raw)
  ) {
    thfC03Feedback = t.invalid;
    thfC03FeedbackSuccess = false;

    thfC03Render();
    return;
  }

  if (Number(raw) === 9000) {
    thfC03State.matched = true;

    thfC03Feedback = t.correct;
    thfC03FeedbackSuccess = true;

    thfC03Save();
    thfC03Render();
    return;
  }

  const before = thfC03Mistakes();
  const after = thfC03RegisterWrong();

  if (after >= 2) {
    thfC03State.matched = true;
    thfC03State.answer = "9000";

    thfC03Feedback = t.revealed;

  } else {
    thfC03Feedback =
      t.wrong + "\n" + t.remaining;

    if (before === 0) {
      thfC03Feedback +=
        "\n" + t.life;
    }
  }

  thfC03FeedbackSuccess = false;

  thfC03Save();
  thfC03Render();
}

// ==========================================
// STAGE 2 — CALCULATOR PUZZLE
// ==========================================

function thfC03RenderPuzzle(container) {
  const t = thfC03T();

  const box = thfC03El(
    "div",
    "thf-c03-box"
  );

  box.append(
    thfC03El("h3", "", t.puzzle),
    thfC03El("p", "", t.instruction)
  );

  const workspace = thfC03El(
    "div",
    "thf-c03-workspace"
  );

  const calc = thfC03El(
    "div",
    "thf-c03-calculator"
  );

  calc.id = "thf-c03-calculator";

  calc.appendChild(
    thfC03El(
      "h4",
      "",
      t.calcTitle
    )
  );

  const display = thfC03El(
    "div",
    "thf-c03-display",
    thfC03State.expression || "0"
  );

  display.setAttribute(
    "aria-live",
    "polite"
  );

  calc.appendChild(display);

  const keys = thfC03El(
    "div",
    "thf-c03-keys"
  );

  [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "(", "+",
    ")", "DEL", "C", "="
  ].forEach(key => {
    let className = "thf-c03-key";

    if (key === "=") {
      className += " equal";

    } else if (
      ["+", "-", "*", "/"].includes(key)
    ) {
      className += " operator";
    }

    const button = thfC03Button(
      key,
      () => thfC03KeyPress(key),
      className
    );

    button.disabled =
      thfC03State.matched;

    keys.appendChild(button);
  });

  calc.appendChild(keys);

  const answer = thfC03El(
    "div",
    "thf-c03-answer"
  );

  answer.appendChild(
    thfC03El(
      "h4",
      "",
      t.answerTitle
    )
  );

  const label = thfC03El(
    "label",
    "",
    t.answerLabel
  );

  label.htmlFor =
    "thf-c03-answer-input";

  const input = document.createElement(
    "input"
  );

  input.id = "thf-c03-answer-input";
  input.type = "text";
  input.inputMode = "decimal";
  input.placeholder = t.placeholder;
  input.value = thfC03State.answer;

  input.disabled =
    thfC03State.matched;

  input.addEventListener(
    "input",
    () => {
      thfC03State.answer =
        input.value.slice(0, 30);

      thfC03Save();
    }
  );

  answer.append(label, input);

  const useResult = thfC03Button(
    t.useResult,
    () => {
      if (
        !thfC03State.calculatorResult ||
        thfC03State.matched
      ) {
        return;
      }

      thfC03State.answer =
        thfC03State.calculatorResult;

      thfC03Save();
      thfC03Render();
    },
    "secondary-btn"
  );

  useResult.disabled =
    !thfC03State.calculatorResult ||
    thfC03State.matched;

  answer.appendChild(useResult);

  workspace.append(calc, answer);
  box.appendChild(workspace);

  if (thfC03Feedback) {
    box.appendChild(
      thfC03FeedbackBox(
        thfC03Feedback,
        thfC03FeedbackSuccess
      )
    );
  }

  if (thfC03State.matched) {
    box.appendChild(
      thfC03Actions(
        thfC03Button(
          t.next,
          () => {
            thfC03State.stage = 3;
            thfC03Feedback = "";

            thfC03Save();
            thfC03Render();
          }
        )
      )
    );

  } else {
    box.appendChild(
      thfC03Actions(
        thfC03Button(
          t.verify,
          thfC03Verify
        )
      )
    );
  }

  container.appendChild(box);
}

// ==========================================
// SUBMIT REPORT / XP
// ==========================================

function thfC03Submit() {
  if (
    !thfC03State.matched ||
    thfC03State.completed
  ) {
    return;
  }

  if (
    typeof thfCompleteCase !== "function"
  ) {
    console.error(
      "Case 03: progress system is unavailable."
    );
    return;
  }

  const record = thfCompleteCase("03");

  if (!record?.completed) {
    console.error(
      "Case 03: could not record completion."
    );
    return;
  }

  thfC03State.completed = true;
  thfC03State.stage = 4;

  thfC03Save();
  thfC03Render();

  if (
    typeof thfRefreshAll === "function"
  ) {
    thfRefreshAll();
  }

  if (
    typeof thfRefreshEvidence === "function"
  ) {
    thfRefreshEvidence();
  }
}

// ==========================================
// STAGE 3 — CASE REPORT
// ==========================================

function thfC03RenderReport(
  container,
  completed
) {
  const t = thfC03T();

  const box = thfC03El(
    "div",
    "thf-c03-box"
  );

  box.append(
    thfC03El(
      "h3",
      "",
      completed
        ? t.completed
        : t.reportTitle
    ),
    thfC03El(
      "p",
      "",
      completed
        ? t.completedText
        : t.reportIntro
    )
  );

  [
    [t.finding1, t.finding1Text],
    [t.finding2, t.finding2Text],
    [t.finding3, t.finding3Text],
    [t.finding4, t.finding4Text]
  ].forEach(([title, description]) => {
    const item = thfC03El(
      "div",
      "thf-c03-finding"
    );

    item.append(
      thfC03El(
        "strong",
        "",
        title
      ),
      thfC03El(
        "p",
        "",
        description
      )
    );

    box.appendChild(item);
  });

  if (completed) {
    const record =
      typeof thfCaseStatus === "function"
        ? thfCaseStatus("03")
        : null;

    const result = thfC03El(
      "div",
      "thf-c03-result"
    );

    result.append(
      thfC03El("p", "", t.score),
      thfC03El(
        "strong",
        "",
        "+" +
        (record?.xp ?? 0) +
        " XP"
      ),
      thfC03El("p", "", t.once)
    );

    box.appendChild(result);

    box.appendChild(
      thfC03Actions(
        thfC03Button(
          t.files,
          () => {
            if (
              typeof thfRefreshAll === "function"
            ) {
              thfRefreshAll();
            }

            thfC03ReturnToFiles();
          }
        )
      )
    );

  } else {
    box.appendChild(
      thfC03Actions(
        thfC03Button(
          t.submit,
          thfC03Submit
        )
      )
    );
  }

  container.appendChild(box);
}

// ==========================================
// MAIN RENDER
// ==========================================

function thfC03Render() {
  const t = thfC03T();

  thfC03Set(
    "thf-c03-label",
    t.label
  );

  thfC03Set(
    "thf-c03-subtitle",
    t.subtitle
  );

  thfC03Set(
    "thf-c03-exit",
    t.exit
  );

  thfC03Set(
    "thf-c03-save",
    t.saved
  );

  const status = document.getElementById(
    "thf-c03-status"
  );

  const content = document.getElementById(
    "thf-c03-content"
  );

  if (!status || !content) return;

  status.replaceChildren();
  content.replaceChildren();

  [
    t.evidence,
    t.calculator,
    t.report
  ].forEach((label, index) => {
    const step = thfC03El(
      "span",
      "",
      label
    );

    if (
      index + 1 ===
      Math.min(thfC03State.stage, 3)
    ) {
      step.style.borderColor =
        "#d9b66f";

      step.style.background =
        "#35435a";
    }

    status.appendChild(step);
  });

  thfC03RenderTools();

  if (thfC03State.completed) {
    thfC03RenderReport(
      content,
      true
    );

  } else if (thfC03State.stage === 1) {
    thfC03RenderIntro(content);

  } else if (thfC03State.stage === 2) {
    thfC03RenderPuzzle(content);

  } else {
    thfC03RenderReport(
      content,
      false
    );
  }
}

// ==========================================
// INITIALISE
// ==========================================

function thfC03Init() {
  if (thfC03Ready) return;

  thfC03Build();
  thfC03Ready = true;
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    thfC03Init
  );
} else {
  thfC03Init();
}

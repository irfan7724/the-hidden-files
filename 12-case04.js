
"use strict";

/* ==========================================
   THE HIDDEN FILES
   CASE 04 — THE MISSING INVENTORY
   Sequence Builder + Evidence + Hints
========================================== */

const THF_C04_PREFIX = "thf_case04_sequence_v1_";

const THF_C04_CORRECT = [
  "register", "nrv", "compare", "difference", "journal"
];

const THF_C04_INITIAL = [
  "journal", "compare", "register", "difference", "nrv"
];

const THF_C04_TEXT = {
  en: {
    label: "CASE 04 / 10 · SEQUENCE BUILDER",
    title: "The Missing Inventory",
    subtitle: "Meridian Holdings Berhad · FY2025",
    exit: "EXIT",
    stage1: "01 · EVIDENCE",
    stage2: "02 · SEQUENCE BUILDER",
    stage3: "03 · CASE REPORT",
    introTitle: "The Inventory That Lost Its Value",
    intro: "Alya has found a year-end inventory batch still recorded at RM80,000. New evidence suggests that its net realisable value is lower. Investigate the required adjustment.",
    alya: "Detective, follow the evidence logically. Under IAS 2, inventory is measured at the lower of cost and net realisable value.",
    documentA: "DOCUMENT A — INVENTORY REGISTER",
    documentB: "DOCUMENT B — NRV ASSESSMENT",
    documentC: "DOCUMENT C — ACCOUNTING POLICY",
    batch: "Inventory Batch",
    date: "Reporting Date",
    cost: "Recorded Cost",
    ledger: "Current Ledger Balance",
    selling: "Estimated Selling Price",
    sellingCost: "Costs to Complete and Sell",
    nrv: "Net Realisable Value",
    review: "Review Status",
    reviewValue: "Adjustment not yet posted",
    policy: "IAS 2: Inventories are measured at the lower of cost and net realisable value. NRV equals estimated selling price less estimated costs of completion and sale.",
    begin: "START SEQUENCE BUILDER",
    puzzleTitle: "Reconstruct the Inventory Review",
    puzzleText: "The five audit steps are mixed up. Use ▲ and ▼ to arrange them in the correct order.",
    up: "Move up",
    down: "Move down",
    verify: "VERIFY SEQUENCE",
    wrong: "Incorrect sequence. Think about what must happen before the next step.",
    oneLife: "One life has been deducted.",
    noLives: "No lives available. Wait for recovery before submitting an incorrect sequence.",
    secondTry: "One attempt remains.",
    reveal: "Second incorrect attempt. Correct sequence revealed. This case earns 0 XP.",
    correct: "Correct! The inventory review follows the right sequence. The required write-down is RM15,000.",
    next: "PREPARE CASE REPORT",
    reportTitle: "CASE 04 — INVENTORY VALUATION REPORT",
    reportIntro: "Review the accounting treatment before submitting.",
    findings: [
      ["NRV Calculation", "RM70,000 − RM5,000 = RM65,000."],
      ["Inventory Measurement", "Lower of cost RM80,000 and NRV RM65,000 = RM65,000."],
      ["Required Adjustment", "Dr Inventory Write-down Expense RM15,000; Cr Inventory RM15,000."],
      ["Financial Statement Impact", "Inventory and 2025 profit before tax decrease by RM15,000. This adjustment is separate from the machinery cases."]
    ],
    submit: "SUBMIT CASE 04 REPORT",
    completeTitle: "CASE 04 COMPLETE",
    completeText: "The inventory valuation report has been filed.",
    score: "XP EARNED",
    replay: "XP is awarded only once per case.",
    files: "RETURN TO CASE FILES",
    locked: "Complete Case 03 before opening Case 04.",
    exitConfirm: "Exit Case 04? Progress will be saved.",
    save: "Progress saved automatically.",
    saveError: "Unable to save progress.",
    evidenceBtn: "📂 VIEW EVIDENCE",
    hintBtn: "💡 HINT",
    evidenceTitle: "Inventory Investigation Documents",
    hintsTitle: "Detective Assistance",
    close: "CLOSE",
    evidenceFree: "Reviewing evidence does not affect XP or lives.",
    hintRule: "Hints reduce the maximum available XP but do not deduct lives.",
    hint1Title: "HINT 1 — IAS 2 Principle",
    hint1Text: "Establish cost and NRV, compare them, determine the write-down, then record the journal.",
    hint1Formula: "Cost vs NRV → Lower value → Write-down → Journal",
    hint2Title: "HINT 2 — Sequence Guidance",
    hint2Text: "Start with the Inventory Register and end with the adjusting journal.",
    hint2Formula: "1. Inspect records\n2. Establish NRV\n3. Compare values\n4. Calculate difference\n5. Record adjustment",
    hint1Action: "UNLOCK HINT 1 · MAX 7 XP",
    hint2Action: "UNLOCK HINT 2 · MAX 5 XP",
    hintLocked: "Unlock Hint 1 first.",
    hintDone: "The puzzle has already been resolved.",
    steps: [
      { id: "register", title: "Inspect the Inventory Register", detail: "Confirm the recorded cost of batch INV-B204." },
      { id: "nrv", title: "Determine Net Realisable Value", detail: "Deduct completion and selling costs from expected selling price." },
      { id: "compare", title: "Compare Cost with NRV", detail: "Apply the lower-of-cost-and-NRV requirement." },
      { id: "difference", title: "Calculate the Required Write-down", detail: "Determine how much inventory must decrease." },
      { id: "journal", title: "Record the Adjusting Journal", detail: "Recognise the expense and reduce inventory." }
    ]
  },

  ms: {
    label: "KES 04 / 10 · SUSUNAN LANGKAH",
    title: "The Missing Inventory",
    subtitle: "Meridian Holdings Berhad · Tahun Kewangan 2025",
    exit: "KELUAR",
    stage1: "01 · BUKTI",
    stage2: "02 · SUSUNAN LANGKAH",
    stage3: "03 · LAPORAN KES",
    introTitle: "Inventori yang Kehilangan Nilai",
    intro: "Alya menemui inventori akhir tahun yang masih direkodkan pada RM80,000. Bukti menunjukkan nilai boleh realisasi bersihnya lebih rendah. Siasat pelarasan yang diperlukan.",
    alya: "Detektif, ikut bukti secara logik. Menurut IAS 2, inventori dinilai pada kos atau nilai boleh realisasi bersih, yang mana lebih rendah.",
    documentA: "DOKUMEN A — DAFTAR INVENTORI",
    documentB: "DOKUMEN B — PENILAIAN NRV",
    documentC: "DOKUMEN C — POLISI PERAKAUNAN",
    batch: "Kumpulan Inventori",
    date: "Tarikh Pelaporan",
    cost: "Kos Direkodkan",
    ledger: "Baki Lejar Semasa",
    selling: "Anggaran Harga Jualan",
    sellingCost: "Kos Menyiapkan dan Menjual",
    nrv: "Nilai Boleh Realisasi Bersih",
    review: "Status Semakan",
    reviewValue: "Pelarasan belum direkodkan",
    policy: "IAS 2: Inventori dinilai pada kos atau nilai boleh realisasi bersih, yang mana lebih rendah. NRV ialah harga jualan dianggarkan selepas ditolak kos menyiapkan dan menjual.",
    begin: "MULAKAN SUSUNAN LANGKAH",
    puzzleTitle: "Bina Semula Proses Semakan Inventori",
    puzzleText: "Lima langkah audit telah dicampur. Gunakan ▲ dan ▼ untuk menyusun langkah dengan betul.",
    up: "Alih ke atas",
    down: "Alih ke bawah",
    verify: "SEMAK SUSUNAN",
    wrong: "Susunan salah. Fikirkan perkara yang perlu dibuat sebelum langkah berikutnya.",
    oneLife: "Satu nyawa ditolak.",
    noLives: "Nyawa telah habis. Tunggu pemulihan sebelum menghantar susunan yang salah.",
    secondTry: "Tinggal satu percubaan.",
    reveal: "Jawapan salah kedua. Susunan betul didedahkan. Kes ini mendapat 0 XP.",
    correct: "Betul! Susunan semakan inventori tepat. Penurunan nilai yang diperlukan ialah RM15,000.",
    next: "SEDIAKAN LAPORAN KES",
    reportTitle: "KES 04 — LAPORAN PENILAIAN INVENTORI",
    reportIntro: "Semak rawatan perakaunan sebelum menghantar laporan.",
    findings: [
      ["Pengiraan NRV", "RM70,000 − RM5,000 = RM65,000."],
      ["Penilaian Inventori", "Kos RM80,000 atau NRV RM65,000, yang mana lebih rendah = RM65,000."],
      ["Pelarasan Diperlukan", "Dr Belanja Penurunan Nilai Inventori RM15,000; Cr Inventori RM15,000."],
      ["Kesan Penyata Kewangan", "Inventori dan keuntungan sebelum cukai 2025 berkurang RM15,000. Pelarasan ini berasingan daripada kes mesin."]
    ],
    submit: "HANTAR LAPORAN KES 04",
    completeTitle: "KES 04 SELESAI",
    completeText: "Laporan penilaian inventori berjaya difailkan.",
    score: "XP DIPEROLEH",
    replay: "XP hanya diberikan sekali bagi setiap kes.",
    files: "KEMBALI KE FAIL KES",
    locked: "Selesaikan Kes 03 sebelum membuka Kes 04.",
    exitConfirm: "Keluar Kes 04? Kemajuan akan disimpan.",
    save: "Kemajuan disimpan secara automatik.",
    saveError: "Kemajuan tidak dapat disimpan.",
    evidenceBtn: "📂 LIHAT BUKTI",
    hintBtn: "💡 PETUNJUK",
    evidenceTitle: "Dokumen Penyiasatan Inventori",
    hintsTitle: "Bantuan Detektif",
    close: "TUTUP",
    evidenceFree: "Semakan bukti tidak menjejaskan XP atau nyawa.",
    hintRule: "Hint mengurangkan XP maksimum tetapi tidak menolak nyawa.",
    hint1Title: "HINT 1 — Prinsip IAS 2",
    hint1Text: "Tentukan kos dan NRV, bandingkan kedua-duanya, kira penurunan nilai dan rekod jurnal.",
    hint1Formula: "Kos vs NRV → Nilai rendah → Penurunan nilai → Jurnal",
    hint2Title: "HINT 2 — Panduan Susunan",
    hint2Text: "Mulakan dengan Daftar Inventori dan akhiri dengan jurnal pelarasan.",
    hint2Formula: "1. Semak rekod\n2. Tentukan NRV\n3. Bandingkan nilai\n4. Kira perbezaan\n5. Rekod pelarasan",
    hint1Action: "BUKA HINT 1 · MAKSIMUM 7 XP",
    hint2Action: "BUKA HINT 2 · MAKSIMUM 5 XP",
    hintLocked: "Buka Hint 1 dahulu.",
    hintDone: "Puzzle sudah diselesaikan.",
    steps: [
      { id: "register", title: "Semak Daftar Inventori", detail: "Sahkan kos kumpulan INV-B204." },
      { id: "nrv", title: "Tentukan Nilai Boleh Realisasi Bersih", detail: "Tolak kos menyiapkan dan menjual daripada harga jualan." },
      { id: "compare", title: "Bandingkan Kos dengan NRV", detail: "Gunakan nilai yang lebih rendah." },
      { id: "difference", title: "Kira Penurunan Nilai Diperlukan", detail: "Tentukan jumlah pengurangan inventori." },
      { id: "journal", title: "Rekod Jurnal Pelarasan", detail: "Iktiraf belanja dan kurangkan inventori." }
    ]
  }
};

// ==========================================
// STATE
// ==========================================

function thfC04Default() {
  return {
    started: false,
    stage: 1,
    order: [...THF_C04_INITIAL],
    hints: 0,
    mistakes: 0,
    matched: false,
    completed: false,
    revealed: false
  };
}

let thfC04State = thfC04Default();
let thfC04Feedback = "";
let thfC04FeedbackSuccess = false;
let thfC04Ready = false;
let thfC04ReturnFocus = null;

// ==========================================
// HELPERS
// ==========================================

function thfC04Profile() {
  return typeof getActiveDetective === "function"
    ? getActiveDetective()
    : null;
}

function thfC04T() {
  const profile = thfC04Profile();

  const language = profile &&
    typeof getProfileLanguage === "function"
    ? getProfileLanguage(profile)
    : profile?.settings?.language || "en";

  return THF_C04_TEXT[
    language === "ms" ? "ms" : "en"
  ];
}

function thfC04Key() {
  const profile = thfC04Profile();
  return profile ? THF_C04_PREFIX + profile.id : null;
}

function thfC04El(tag, className = "", value) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (value !== undefined) {
    element.textContent = String(value);
  }
  return element;
}

function thfC04Button(label, action, className = "primary-btn") {
  const button = thfC04El("button", className, label);
  button.type = "button";
  button.addEventListener("click", action);
  return button;
}

function thfC04Set(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function thfC04Actions(...buttons) {
  const row = thfC04El("div", "thf-c04-actions");
  buttons.forEach(button => row.appendChild(button));
  return row;
}

function thfC04FeedbackBox(message, success = false) {
  const box = thfC04El(
    "div",
    "thf-c04-feedback" + (success ? " success" : ""),
    message
  );
  box.style.whiteSpace = "pre-line";
  box.setAttribute("role", "status");
  return box;
}

// ==========================================
// NAVIGATION
// ==========================================

function thfC04ShowScreen(id) {
  if (typeof showScreen === "function") {
    showScreen(id);
  }

  document.querySelectorAll("#app > .screen")
    .forEach(screen => {
      screen.classList.toggle(
        "hidden",
        screen.id !== id
      );
    });

  window.scrollTo(0, 0);
}

function thfC04ReturnToFiles() {
  if (typeof thfRefreshAll === "function") {
    thfRefreshAll();
  }

  if (typeof thfOpenCaseFiles === "function") {
    thfOpenCaseFiles();
    return;
  }

  if (document.getElementById("case-files-screen")) {
    thfC04ShowScreen("case-files-screen");
    return;
  }

  thfC04ShowScreen("far-overview-screen");
}

// ==========================================
// STORAGE
// ==========================================

function thfC04Load() {
  thfC04State = thfC04Default();

  const key = thfC04Key();
  if (!key) return;

  try {
    const saved = JSON.parse(
      localStorage.getItem(key) || "null"
    );

    if (!saved || typeof saved !== "object") return;

    thfC04State.started = saved.started === true;
    thfC04State.matched = saved.matched === true;
    thfC04State.completed =
      saved.completed === true && thfC04State.matched;
    thfC04State.revealed = saved.revealed === true;

    if (
      Array.isArray(saved.order) &&
      saved.order.length === 5 &&
      new Set(saved.order).size === 5 &&
      THF_C04_CORRECT.every(id => saved.order.includes(id))
    ) {
      thfC04State.order = [...saved.order];
    }

    thfC04State.hints = Number.isInteger(saved.hints)
      ? Math.max(0, Math.min(2, saved.hints))
      : 0;

    thfC04State.mistakes = Number.isInteger(saved.mistakes)
      ? Math.max(0, Math.min(2, saved.mistakes))
      : 0;

    if (typeof thfCaseStatus === "function") {
      const record = thfCaseStatus("04");

      thfC04State.hints = Math.max(
        thfC04State.hints,
        Math.min(2, record?.hints || 0)
      );

      thfC04State.mistakes = Math.max(
        thfC04State.mistakes,
        Math.min(2, record?.mistakes || 0)
      );

      if (record?.completed) {
        thfC04State.completed = true;
        thfC04State.matched = true;
      }
    }

    thfC04State.stage = thfC04State.completed
      ? 4
      : thfC04State.matched
        ? 3
        : saved.stage === 2 ? 2 : 1;

  } catch (error) {
    console.warn("Case 04 load error:", error);
  }
}

function thfC04Save() {
  const key = thfC04Key();
  if (!key) return false;

  try {
    localStorage.setItem(
      key,
      JSON.stringify(thfC04State)
    );
    thfC04Set("thf-c04-save", thfC04T().save);
    return true;

  } catch (error) {
    console.error("Case 04 save error:", error);
    thfC04Set("thf-c04-save", thfC04T().saveError);
    return false;
  }
}

// ==========================================
// UNLOCK
// ==========================================

function thfC04Unlocked() {
  const profile = thfC04Profile();
  if (!profile) return false;

  if (
    typeof thfCaseStatus === "function" &&
    thfCaseStatus("03")?.completed === true
  ) {
    return true;
  }

  try {
    const saved = JSON.parse(
      localStorage.getItem(
        "thf_case03_calculator_v1_" + profile.id
      ) || "null"
    );

    return saved?.completed === true;

  } catch {
    return false;
  }
}

function thfC04Mistakes() {
  const recorded = typeof thfCaseStatus === "function"
    ? thfCaseStatus("04")?.mistakes || 0
    : 0;

  return Math.max(thfC04State.mistakes, recorded);
}

// ==========================================
// BUILD SCREEN
// ==========================================

function thfC04Build() {
  const app = document.getElementById("app");
  if (!app) return false;

  let screen = document.getElementById("case04-screen");

  if (!screen) {
    screen = thfC04El(
      "section",
      "screen app-page thf-c04-screen hidden"
    );
    screen.id = "case04-screen";
    app.appendChild(screen);
  }

  if (!document.getElementById("thf-c04-content")) {
    screen.replaceChildren();

    const panel = thfC04El("div", "page-panel thf-c04-panel");
    const header = thfC04El("div", "thf-c04-header");
    const heading = thfC04El("div");

    const label = thfC04El("p", "eyebrow");
    label.id = "thf-c04-label";

    const title = thfC04El("h2", "", "The Missing Inventory");

    const subtitle = thfC04El("p");
    subtitle.id = "thf-c04-subtitle";

    heading.append(label, title, subtitle);

    const exit = thfC04Button(
      "EXIT",
      thfC04Exit,
      "secondary-btn"
    );
    exit.id = "thf-c04-exit";

    header.append(heading, exit);

    const status = thfC04El("div", "thf-c04-status");
    status.id = "thf-c04-status";

    const tools = thfC04El("div", "thf-c04-tools");
    tools.id = "thf-c04-tools";

    const content = thfC04El("div");
    content.id = "thf-c04-content";

    const save = thfC04El("p", "thf-c04-small");
    save.id = "thf-c04-save";

    panel.append(header, status, tools, content, save);
    screen.appendChild(panel);
  }

  if (
    typeof screenIds !== "undefined" &&
    !screenIds.includes("case04-screen")
  ) {
    screenIds.push("case04-screen");
  }

  if (!document.getElementById("thf-c04-modal")) {
    const modal = thfC04El("div", "thf-c04-modal");
    modal.id = "thf-c04-modal";
    modal.hidden = true;

    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    const card = thfC04El("div", "thf-c04-modal-card");
    const modalHeader = thfC04El(
      "div",
      "thf-c04-modal-header"
    );

    const modalTitle = thfC04El("h3");
    modalTitle.id = "thf-c04-modal-title";

    const close = thfC04Button(
      "CLOSE",
      thfC04CloseModal,
      "thf-c04-close"
    );
    close.id = "thf-c04-modal-close";

    modalHeader.append(modalTitle, close);

    const body = thfC04El("div");
    body.id = "thf-c04-modal-body";

    card.append(modalHeader, body);
    modal.appendChild(card);
    document.body.appendChild(modal);

    modal.addEventListener("click", event => {
      if (event.target === modal) thfC04CloseModal();
    });

    document.addEventListener("keydown", event => {
      if (modal.hidden) return;

      if (event.key === "Escape") {
        thfC04CloseModal();
        return;
      }

      if (event.key !== "Tab") return;

      const buttons = Array.from(
        modal.querySelectorAll("button:not(:disabled)")
      );

      if (!buttons.length) return;

      const first = buttons[0];
      const last = buttons[buttons.length - 1];

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
    });
  }

  return true;
}

// ==========================================
// MODAL
// ==========================================

function thfC04OpenModal(title) {
  const modal = document.getElementById("thf-c04-modal");
  if (!modal) return;

  thfC04ReturnFocus = document.activeElement;
  thfC04Set("thf-c04-modal-title", title);

  modal.hidden = false;
  document.getElementById("thf-c04-modal-close")?.focus();
}

function thfC04CloseModal() {
  const modal = document.getElementById("thf-c04-modal");

  if (modal) modal.hidden = true;

  if (thfC04ReturnFocus?.isConnected) {
    thfC04ReturnFocus.focus();
  }
}

// ==========================================
// EVIDENCE
// ==========================================

function thfC04Paper(title, rows) {
  const paper = thfC04El("div", "thf-c04-paper");

  paper.append(
    thfC04El("p", "", "MERIDIAN HOLDINGS BERHAD"),
    thfC04El("h4", "", title)
  );

  rows.forEach(([name, value]) => {
    const row = thfC04El("div", "thf-c04-paper-row");

    row.append(
      thfC04El("span", "", name),
      thfC04El("span", "", value)
    );

    paper.appendChild(row);
  });

  return paper;
}

function thfC04Documents(container) {
  const t = thfC04T();

  container.appendChild(
    thfC04Paper(t.documentA, [
      [t.batch, "INV-B204 · Finished Goods"],
      [t.date, "31 December 2025"],
      [t.cost, "RM80,000"],
      [t.ledger, "RM80,000"]
    ])
  );

  container.appendChild(
    thfC04Paper(t.documentB, [
      [t.selling, "RM70,000"],
      [t.sellingCost, "RM5,000"],
      [t.nrv, "RM65,000"],
      [t.review, t.reviewValue]
    ])
  );

  const policy = thfC04El("div", "thf-c04-paper");

  policy.append(
    thfC04El("h4", "", t.documentC),
    thfC04El("p", "", t.policy)
  );

  container.appendChild(policy);
}

function thfC04ViewEvidence() {
  const body = document.getElementById("thf-c04-modal-body");
  if (!body) return;

  body.replaceChildren();

  body.appendChild(
    thfC04El("p", "thf-c04-small", thfC04T().evidenceFree)
  );

  thfC04Documents(body);
  thfC04OpenModal(thfC04T().evidenceTitle);
}

// ==========================================
// HINTS
// ==========================================

function thfC04SaveHints(level) {
  if (thfC04State.matched || thfC04State.completed) return;

  const target = Math.max(
    thfC04State.hints,
    Math.min(2, level)
  );

  if (
    typeof thfLoadProgress === "function" &&
    typeof thfSaveProgress === "function" &&
    typeof thfGetCase === "function"
  ) {
    const progress = thfLoadProgress();
    const record = thfGetCase(progress, "04");

    if (!record.completed) {
      record.hints = Math.max(record.hints || 0, target);
      thfSaveProgress(progress);
    }
  }

  thfC04State.hints = target;
  thfC04Save();
}

function thfC04UnlockHint(level) {
  if (thfC04State.matched) return;
  if (level === 2 && thfC04State.hints < 1) return;

  thfC04SaveHints(level);
  thfC04RenderHints();
  thfC04RenderTools();
}

function thfC04RenderHints() {
  const t = thfC04T();
  const body = document.getElementById("thf-c04-modal-body");

  if (!body) return;
  body.replaceChildren();

  body.appendChild(
    thfC04El("p", "thf-c04-small", t.hintRule)
  );

  if (thfC04State.matched) {
    body.appendChild(
      thfC04FeedbackBox(t.hintDone, true)
    );
  }

  [1, 2].forEach(level => {
    const unlocked = thfC04State.hints >= level;
    const card = thfC04El("div", "thf-c04-hint");

    card.appendChild(
      thfC04El(
        "h4",
        "",
        level === 1 ? t.hint1Title : t.hint2Title
      )
    );

    if (unlocked) {
      card.append(
        thfC04El(
          "p",
          "",
          level === 1 ? t.hint1Text : t.hint2Text
        ),
        thfC04El(
          "div",
          "thf-c04-formula",
          level === 1 ? t.hint1Formula : t.hint2Formula
        )
      );

      card.lastElementChild.style.whiteSpace = "pre-line";

    } else if (!thfC04State.matched) {
      const button = thfC04Button(
        level === 1 ? t.hint1Action : t.hint2Action,
        () => thfC04UnlockHint(level),
        "secondary-btn"
      );

      if (level === 2 && thfC04State.hints < 1) {
        button.disabled = true;
        button.title = t.hintLocked;
      }

      card.appendChild(button);
    }

    body.appendChild(card);
  });
}

function thfC04OpenHints() {
  thfC04RenderHints();
  thfC04OpenModal(thfC04T().hintsTitle);
}

function thfC04RenderTools() {
  const tools = document.getElementById("thf-c04-tools");
  if (!tools) return;

  tools.replaceChildren();

  if (thfC04State.stage >= 2) {
    const t = thfC04T();

    tools.append(
      thfC04Button(
        t.evidenceBtn,
        thfC04ViewEvidence,
        "secondary-btn"
      ),
      thfC04Button(
        t.hintBtn + " (" + thfC04State.hints + "/2)",
        thfC04OpenHints,
        "secondary-btn"
      )
    );
  }
}

// ==========================================
// OPEN / EXIT
// ==========================================

function thfCase04Open() {
  if (!thfC04Profile()) {
    thfC04ShowScreen("profile-screen");
    return;
  }

  if (!thfC04Unlocked()) {
    alert(thfC04T().locked);
    return;
  }

  if (!thfC04Init()) return;

  thfC04Load();
  thfC04State.started = true;
  thfC04Save();

  thfC04Feedback = "";
  thfC04FeedbackSuccess = false;

  thfC04Render();
  thfC04ShowScreen("case04-screen");
}

function thfC04Exit() {
  if (!window.confirm(thfC04T().exitConfirm)) return;

  thfC04CloseModal();
  thfC04Save();
  thfC04ReturnToFiles();
}

// ==========================================
// STAGE 1 — EVIDENCE
// ==========================================

function thfC04RenderIntro(container) {
  const t = thfC04T();
  const box = thfC04El("div", "thf-c04-box");

  box.append(
    thfC04El("h3", "", t.introTitle),
    thfC04El("p", "", t.intro),
    thfC04FeedbackBox("👩‍💼 ALYA RAHMAN\n" + t.alya)
  );

  thfC04Documents(box);

  box.appendChild(
    thfC04Actions(
      thfC04Button(t.begin, () => {
        thfC04State.stage = 2;
        thfC04Save();
        thfC04Render();
      })
    )
  );

  container.appendChild(box);
}

// ==========================================
// STAGE 2 — SEQUENCE PUZZLE
// ==========================================

function thfC04Move(index, direction) {
  if (thfC04State.matched) return;

  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= 5) return;

  const order = [...thfC04State.order];

  [order[index], order[nextIndex]] = [
    order[nextIndex],
    order[index]
  ];

  thfC04State.order = order;
  thfC04Feedback = "";

  thfC04Save();
  thfC04Render();

  const card = document.querySelector(
    `[data-c04-position="${nextIndex}"]`
  );

  const selector = direction < 0
    ? '[data-c04-move="up"]'
    : '[data-c04-move="down"]';

  (
    card?.querySelector(selector) ||
    card?.querySelector("button:not(:disabled)")
  )?.focus();
}

function thfC04Verify() {
  if (thfC04State.matched) return;

  const t = thfC04T();

  const correct = THF_C04_CORRECT.every(
    (id, index) => thfC04State.order[index] === id
  );

  if (correct) {
    thfC04State.matched = true;
    thfC04Feedback = t.correct;
    thfC04FeedbackSuccess = true;

    thfC04Save();
    thfC04Render();
    return;
  }

  const before = thfC04Mistakes();

  if (before === 0 && typeof thfRequireLife === "function") {
    if (!thfRequireLife()) return;
  }

  if (typeof thfRegisterMistake === "function") {
    thfRegisterMistake("04");
  } else {
    thfC04State.mistakes = Math.min(
      2,
      thfC04State.mistakes + 1
    );
  }

  const after = typeof thfCaseStatus === "function"
    ? thfCaseStatus("04")?.mistakes ?? thfC04State.mistakes
    : thfC04State.mistakes;

  thfC04State.mistakes = Math.max(
    thfC04State.mistakes,
    after
  );

  if (after === before) {
    thfC04Feedback = t.noLives;
    thfC04FeedbackSuccess = false;
    thfC04Render();
    return;
  }

  if (after >= 2) {
    thfC04State.matched = true;
    thfC04State.revealed = true;
    thfC04State.order = [...THF_C04_CORRECT];

    thfC04Feedback = t.reveal;
  } else {
    thfC04Feedback = t.wrong + "\n" + t.secondTry;

    if (before === 0) {
      thfC04Feedback += "\n" + t.oneLife;
    }
  }

  thfC04FeedbackSuccess = false;
  thfC04Save();
  thfC04Render();
}

function thfC04RenderPuzzle(container) {
  const t = thfC04T();
  const box = thfC04El("div", "thf-c04-box");

  box.append(
    thfC04El("h3", "", t.puzzleTitle),
    thfC04El("p", "", t.puzzleText)
  );

  const sequence = thfC04El("div", "thf-c04-sequence");

  thfC04State.order.forEach((id, index) => {
    const step = t.steps.find(item => item.id === id);
    if (!step) return;

    const card = thfC04El("div", "thf-c04-step");
    card.dataset.c04Position = String(index);

    const number = thfC04El(
      "span",
      "thf-c04-step-number",
      String(index + 1).padStart(2, "0")
    );

    const content = thfC04El("div", "thf-c04-step-content");

    content.append(
      thfC04El("strong", "", step.title),
      thfC04El("small", "", step.detail)
    );

    const controls = thfC04El("div", "thf-c04-move");

    const up = thfC04Button(
      "▲",
      () => thfC04Move(index, -1),
      "thf-c04-move-btn"
    );

    up.dataset.c04Move = "up";
    up.setAttribute("aria-label", t.up + ": " + step.title);
    up.disabled = index === 0 || thfC04State.matched;

    const down = thfC04Button(
      "▼",
      () => thfC04Move(index, 1),
      "thf-c04-move-btn"
    );

    down.dataset.c04Move = "down";
    down.setAttribute("aria-label", t.down + ": " + step.title);
    down.disabled = index === 4 || thfC04State.matched;

    controls.append(up, down);
    card.append(number, content, controls);
    sequence.appendChild(card);
  });

  box.appendChild(sequence);

  if (thfC04Feedback) {
    box.appendChild(
      thfC04FeedbackBox(
        thfC04Feedback,
        thfC04FeedbackSuccess
      )
    );
  }

  if (thfC04State.matched) {
    box.appendChild(
      thfC04Actions(
        thfC04Button(t.next, () => {
          thfC04State.stage = 3;
          thfC04Feedback = "";
          thfC04Save();
          thfC04Render();
        })
      )
    );
  } else {
    box.appendChild(
      thfC04Actions(
        thfC04Button(t.verify, thfC04Verify)
      )
    );
  }

  container.appendChild(box);
}

// ==========================================
// SUBMIT CASE REPORT
// ==========================================

function thfC04Submit() {
  if (!thfC04State.matched || thfC04State.completed) return;

  if (typeof thfCompleteCase !== "function") {
    console.error("Case 04: Progress system unavailable.");
    return;
  }

  const record = thfCompleteCase("04");

  if (!record?.completed) {
    console.error("Case 04: Completion was not saved.");
    return;
  }

  thfC04State.completed = true;
  thfC04State.stage = 4;

  thfC04Save();
  thfC04Render();

  if (typeof thfRefreshAll === "function") {
    thfRefreshAll();
  }

  if (typeof thfRefreshEvidence === "function") {
    thfRefreshEvidence();
  }
}

// ==========================================
// STAGE 3 — CASE REPORT
// ==========================================

function thfC04RenderReport(container, completed) {
  const t = thfC04T();
  const box = thfC04El("div", "thf-c04-box");

  box.append(
    thfC04El(
      "h3",
      "",
      completed ? t.completeTitle : t.reportTitle
    ),
    thfC04El(
      "p",
      "",
      completed ? t.completeText : t.reportIntro
    )
  );

  t.findings.forEach(([title, description]) => {
    const card = thfC04El("div", "thf-c04-finding");

    card.append(
      thfC04El("strong", "", title),
      thfC04El("p", "", description)
    );

    box.appendChild(card);
  });

  if (completed) {
    const record = typeof thfCaseStatus === "function"
      ? thfCaseStatus("04")
      : null;

    const result = thfC04El("div", "thf-c04-result");

    result.append(
      thfC04El("p", "", t.score),
      thfC04El("strong", "", "+" + (record?.xp ?? 0) + " XP"),
      thfC04El("p", "", t.replay)
    );

    box.appendChild(result);

    box.appendChild(
      thfC04Actions(
        thfC04Button(
          t.files,
          thfC04ReturnToFiles
        )
      )
    );

  } else {
    box.appendChild(
      thfC04Actions(
        thfC04Button(t.submit, thfC04Submit)
      )
    );
  }

  container.appendChild(box);
}

// ==========================================
// MAIN RENDER
// ==========================================

function thfC04Render() {
  const t = thfC04T();

  thfC04Set("thf-c04-label", t.label);
  thfC04Set("thf-c04-subtitle", t.subtitle);
  thfC04Set("thf-c04-exit", t.exit);
  thfC04Set("thf-c04-save", t.save);

  const status = document.getElementById("thf-c04-status");
  const content = document.getElementById("thf-c04-content");

  if (!status || !content) return;

  status.replaceChildren();
  content.replaceChildren();

  [t.stage1, t.stage2, t.stage3].forEach((label, index) => {
    const step = thfC04El("span", "", label);

    if (index + 1 === Math.min(thfC04State.stage, 3)) {
      step.style.borderColor = "#d9b66f";
      step.style.background = "#35435a";
    }

    status.appendChild(step);
  });

  thfC04RenderTools();

  if (thfC04State.completed) {
    thfC04RenderReport(content, true);
  } else if (thfC04State.stage === 1) {
    thfC04RenderIntro(content);
  } else if (thfC04State.stage === 2) {
    thfC04RenderPuzzle(content);
  } else {
    thfC04RenderReport(content, false);
  }
}

// ==========================================
// INITIALISE
// ==========================================

function thfC04Init() {
  if (thfC04Ready && document.getElementById("thf-c04-content")) {
    return true;
  }

  const built = thfC04Build();
  thfC04Ready = built;
  return built;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", thfC04Init);
} else {
  thfC04Init();
}

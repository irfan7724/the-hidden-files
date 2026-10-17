
/* ==========================================
   THE HIDDEN FILES
   CASE 02 — THE MIDNIGHT JOURNAL
   Evidence + Matching + Hints + Report
========================================== */

"use strict";

const THF_C02_PREFIX = "thf_case02_matching_v1_";
const THF_C02_ID = "02";

const THF_C02_TEXT = {
  en: {
    label: "CASE 02 / 10 · JOURNAL MATCHING",
    title: "The Midnight Journal",
    subtitle: "Meridian Holdings Berhad · 31 December 2025",
    exit: "EXIT",
    stageEvidence: "01 · EVIDENCE",
    stagePuzzle: "02 · JOURNAL MATCHING",
    stageReport: "03 · CASE REPORT",
    introTitle: "A Journal Entry at 11:47 PM",
    intro:
      "Alya has found a late-night year-end journal entry. It concerns the RM50,000 production machine investigated in Case 01. Verify the accounts, amount and audit trail.",
    alya:
      "Detective, review the records carefully. A late posting does not by itself prove fraud.",
    evidenceTitle: "DOCUMENT A — JOURNAL AUDIT TRAIL",
    company: "MERIDIAN HOLDINGS BERHAD",
    ref: "Reference",
    posted: "Posted",
    operator: "Prepared By",
    approved: "Approval Status",
    approvalValue: "Pending independent review",
    note: "Narration",
    noteValue: "Year-end reclassification of production machinery.",
    originalTitle: "DOCUMENT B — ORIGINAL POSTING",
    originalNote:
      "The original journal classified machinery as Office Expense. Verify the correction without recording the liability twice.",
    correctionTitle: "YOUR ASSIGNMENT",
    correctionNote:
      "Match the correct debit account, credit account and amount. You can reopen documents or request hints.",
    begin: "BEGIN JOURNAL MATCHING",
    debit: "DEBIT ACCOUNT",
    credit: "CREDIT ACCOUNT",
    amount: "AMOUNT",
    debitOptions: [
      "Machinery (PPE)",
      "Office Expense",
      "Accounts Payable"
    ],
    creditOptions: [
      "Accounts Payable",
      "Office Expense",
      "Machinery (PPE)"
    ],
    amountOptions: [
      "RM5,000",
      "RM50,000",
      "RM500,000"
    ],
    check: "VERIFY JOURNAL MATCH",
    chooseAll: "Choose one answer in each column.",
    wrong:
      "Incorrect match. Check the original entry and purpose of the correction.",
    wrongLife: "One life has been deducted.",
    secondTry: "One attempt remains before the answer is revealed.",
    reveal:
      "Second incorrect attempt. Correct match revealed: Dr Machinery (PPE) RM50,000 / Cr Office Expense RM50,000. This case earns 0 XP.",
    correct:
      "Correct! Dr Machinery (PPE) RM50,000; Cr Office Expense RM50,000.",
    next: "PREPARE CASE REPORT",
    reportTitle: "CASE 02 — JOURNAL REVIEW REPORT",
    reportIntro: "Review your findings before submitting.",
    finding1: "Correcting Entry",
    finding1Text:
      "Debit Machinery (PPE) RM50,000; Credit Office Expense RM50,000.",
    finding2: "Financial Statement Impact",
    finding2Text:
      "This is the same RM50,000 correction identified in Case 01. Do not count the adjustment twice. Depreciation is a separate issue.",
    finding3: "Audit Trail Concern",
    finding3Text:
      "The 11:47 PM posting and pending independent review warrant further examination, but do not alone prove fraud.",
    finding4: "Conclusion",
    finding4Text:
      "Journal classification verified. Review authorisation and supporting records.",
    submit: "SUBMIT CASE 02 REPORT",
    completedTitle: "CASE 02 COMPLETE",
    completedText: "The journal report has been filed successfully.",
    score: "XP EARNED",
    replay: "XP is awarded only once per case.",
    backFiles: "RETURN TO CASE FILES",
    save: "Progress is saved automatically.",
    saveError: "Unable to save progress.",
    locked: "Complete Case 01 before opening Case 02.",
    exitConfirm: "Exit Case 02? Your progress will be saved.",
    learning: "Continue Learning is active. No XP will be earned.",
    evidenceButton: "📂 VIEW EVIDENCE",
    hintButton: "💡 HINT",
    evidenceModal: "Investigation Documents",
    hintModal: "Detective Assistance",
    close: "CLOSE",
    hint1Title: "HINT 1 — Accounting Format",
    hint1Text:
      "Transfer the amount from the incorrect expense account to the correct asset account. Do not record the existing payable again.",
    hint1Format:
      "Dr  Correct asset account   RM____\nCr  Wrong expense account   RM____",
    hint2Title: "HINT 2 — Guided Matching",
    hint2Text:
      "Machinery is PPE. Credit the expense originally debited and use the original invoice amount.",
    hint2Format:
      "Debit  → Machinery (PPE)\nCredit → Office Expense\nAmount → Original machine cost",
    hint1Action: "UNLOCK HINT 1 · MAX 7 XP",
    hint2Action: "UNLOCK HINT 2 · MAX 5 XP",
    hintLocked: "Unlock Hint 1 first.",
    hintFreeReview:
      "Reviewing evidence is free and does not affect XP or lives.",
    hintExplanation:
      "Hints do not deduct lives, but reduce the maximum XP.",
    hintDisabled: "Puzzle resolved. Hints are no longer needed."
  },

  ms: {
    label: "KES 02 / 10 · PADANAN JURNAL",
    title: "The Midnight Journal",
    subtitle: "Meridian Holdings Berhad · 31 Disember 2025",
    exit: "KELUAR",
    stageEvidence: "01 · BUKTI",
    stagePuzzle: "02 · PADANAN JURNAL",
    stageReport: "03 · LAPORAN KES",
    introTitle: "Catatan Jurnal pada 11:47 Malam",
    intro:
      "Alya menemui jurnal akhir tahun yang direkodkan lewat malam. Jurnal ini berkaitan mesin RM50,000 dalam Kes 01. Semak akaun, jumlah dan jejak audit.",
    alya:
      "Detektif, semak rekod dengan teliti. Catatan lewat malam tidak membuktikan penipuan dengan sendirinya.",
    evidenceTitle: "DOKUMEN A — JEJAK AUDIT JURNAL",
    company: "MERIDIAN HOLDINGS BERHAD",
    ref: "Rujukan",
    posted: "Direkodkan",
    operator: "Disediakan Oleh",
    approved: "Status Kelulusan",
    approvalValue: "Menunggu semakan bebas",
    note: "Keterangan",
    noteValue: "Pengelasan semula mesin pengeluaran pada akhir tahun.",
    originalTitle: "DOKUMEN B — CATATAN ASAL",
    originalNote:
      "Jurnal asal mengelaskan mesin sebagai Belanja Pejabat. Semak pembetulan tanpa merekodkan liabiliti dua kali.",
    correctionTitle: "TUGAS PENYIASATAN",
    correctionNote:
      "Padankan akaun debit, akaun kredit dan jumlah. Dokumen dan hint boleh dibuka semula.",
    begin: "MULAKAN PADANAN JURNAL",
    debit: "AKAUN DEBIT",
    credit: "AKAUN KREDIT",
    amount: "JUMLAH",
    debitOptions: [
      "Mesin (PPE)",
      "Belanja Pejabat",
      "Akaun Belum Bayar"
    ],
    creditOptions: [
      "Akaun Belum Bayar",
      "Belanja Pejabat",
      "Mesin (PPE)"
    ],
    amountOptions: [
      "RM5,000",
      "RM50,000",
      "RM500,000"
    ],
    check: "SEMAK PADANAN JURNAL",
    chooseAll: "Pilih satu jawapan dalam setiap lajur.",
    wrong: "Padanan salah. Semak jurnal asal dan tujuan pembetulan.",
    wrongLife: "Satu nyawa ditolak.",
    secondTry: "Tinggal satu percubaan sebelum jawapan didedahkan.",
    reveal:
      "Jawapan salah kedua. Padanan betul: Dr Mesin (PPE) RM50,000 / Cr Belanja Pejabat RM50,000. Kes ini mendapat 0 XP.",
    correct:
      "Betul! Dr Mesin (PPE) RM50,000; Cr Belanja Pejabat RM50,000.",
    next: "SEDIAKAN LAPORAN KES",
    reportTitle: "KES 02 — LAPORAN SEMAKAN JURNAL",
    reportIntro: "Semak penemuan sebelum menghantar laporan.",
    finding1: "Jurnal Pembetulan",
    finding1Text:
      "Debit Mesin (PPE) RM50,000; Kredit Belanja Pejabat RM50,000.",
    finding2: "Kesan terhadap Penyata Kewangan",
    finding2Text:
      "Ini pembetulan RM50,000 yang sama seperti Kes 01. Jangan kira pelarasan dua kali. Susut nilai ialah isu berasingan.",
    finding3: "Kebimbangan Jejak Audit",
    finding3Text:
      "Catatan 11:47 malam dan semakan bebas yang belum selesai memerlukan siasatan lanjut, tetapi tidak membuktikan penipuan.",
    finding4: "Kesimpulan",
    finding4Text:
      "Klasifikasi jurnal disahkan. Semak kebenaran dan dokumen sokongan.",
    submit: "HANTAR LAPORAN KES 02",
    completedTitle: "KES 02 SELESAI",
    completedText: "Laporan jurnal berjaya difailkan.",
    score: "XP DIPEROLEH",
    replay: "XP hanya diberikan sekali bagi setiap kes.",
    backFiles: "KEMBALI KE FAIL KES",
    save: "Kemajuan disimpan secara automatik.",
    saveError: "Kemajuan tidak dapat disimpan.",
    locked: "Selesaikan Kes 01 sebelum membuka Kes 02.",
    exitConfirm: "Keluar Kes 02? Kemajuan akan disimpan.",
    learning: "Continue Learning aktif. Tiada XP diperoleh.",
    evidenceButton: "📂 LIHAT BUKTI",
    hintButton: "💡 PETUNJUK",
    evidenceModal: "Dokumen Penyiasatan",
    hintModal: "Bantuan Detektif",
    close: "TUTUP",
    hint1Title: "HINT 1 — Format Perakaunan",
    hint1Text:
      "Pindahkan jumlah daripada akaun belanja yang salah kepada akaun aset yang betul. Jangan rekod Akaun Belum Bayar sekali lagi.",
    hint1Format:
      "Dr  Akaun aset yang betul   RM____\nCr  Akaun belanja yang salah RM____",
    hint2Title: "HINT 2 — Panduan Padanan",
    hint2Text:
      "Mesin ialah PPE. Kreditkan belanja asal dan gunakan jumlah invois asal.",
    hint2Format:
      "Debit  → Mesin (PPE)\nKredit → Belanja Pejabat\nJumlah → Kos asal mesin",
    hint1Action: "BUKA HINT 1 · MAKSIMUM 7 XP",
    hint2Action: "BUKA HINT 2 · MAKSIMUM 5 XP",
    hintLocked: "Buka Hint 1 dahulu.",
    hintFreeReview:
      "Semakan bukti adalah percuma dan tidak menjejaskan XP atau nyawa.",
    hintExplanation:
      "Hint tidak menolak nyawa tetapi mengurangkan XP maksimum.",
    hintDisabled: "Puzzle telah selesai. Hint tidak diperlukan."
  }
};

// ==========================================
// STATE
// ==========================================

function thfC02Default() {
  return {
    started: false,
    stage: 1,
    selections: {
      debit: null,
      credit: null,
      amount: null
    },
    matched: false,
    completed: false,
    hints: 0
  };
}

let thfC02State = thfC02Default();
let thfC02Feedback = "";
let thfC02FeedbackSuccess = false;
let thfC02Ready = false;
let thfC02ModalReturnFocus = null;

// ==========================================
// HELPERS
// ==========================================

function thfC02Profile() {
  return typeof getActiveDetective === "function"
    ? getActiveDetective()
    : null;
}

function thfC02Language() {
  const profile = thfC02Profile();

  return profile &&
    typeof getProfileLanguage === "function"
    ? getProfileLanguage(profile)
    : "en";
}

function thfC02T() {
  return THF_C02_TEXT[
    thfC02Language() === "ms" ? "ms" : "en"
  ];
}

function thfC02Key() {
  const profile = thfC02Profile();

  return profile
    ? THF_C02_PREFIX + profile.id
    : null;
}

function thfC02El(tag, className = "", value) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (value !== undefined) {
    element.textContent = String(value);
  }

  return element;
}

function thfC02Button(
  label,
  action,
  className = "primary-btn"
) {
  const button = thfC02El(
    "button",
    className,
    label
  );

  button.type = "button";
  button.addEventListener("click", action);

  return button;
}

function thfC02Set(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

function thfC02ShowScreen(id) {
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

function thfC02ReturnToFiles() {
  if (typeof thfOpenCaseFiles === "function") {
    thfOpenCaseFiles();
    return;
  }

  if (document.getElementById("case-files-screen")) {
    thfC02ShowScreen("case-files-screen");
    return;
  }

  thfC02ShowScreen("far-overview-screen");
}

// ==========================================
// LOAD / SAVE
// ==========================================

function thfC02Load() {
  thfC02State = thfC02Default();

  const key = thfC02Key();
  if (!key) return;

  try {
    const saved = JSON.parse(
      localStorage.getItem(key) || "null"
    );

    if (!saved || typeof saved !== "object") {
      return;
    }

    thfC02State.started = saved.started === true;
    thfC02State.matched = saved.matched === true;
    thfC02State.completed =
      saved.completed === true &&
      thfC02State.matched;

    thfC02State.hints = Number.isInteger(saved.hints)
      ? Math.max(0, Math.min(2, saved.hints))
      : 0;

    const selections = saved.selections || {};

    ["debit", "credit", "amount"].forEach(field => {
      const index = selections[field];

      thfC02State.selections[field] =
        Number.isInteger(index) &&
        index >= 0 &&
        index <= 2
          ? index
          : null;
    });

    if (thfC02State.completed) {
      thfC02State.stage = 4;
    } else if (thfC02State.matched) {
      thfC02State.stage = 3;
    } else if (saved.stage === 2) {
      thfC02State.stage = 2;
    }

    if (typeof thfCaseStatus === "function") {
      const scoreHints =
        thfCaseStatus("02")?.hints || 0;

      thfC02State.hints = Math.max(
        thfC02State.hints,
        Math.min(2, scoreHints)
      );
    }

  } catch (error) {
    console.warn("Case 02 load failed:", error);
  }
}

function thfC02Save() {
  const key = thfC02Key();
  if (!key) return false;

  try {
    localStorage.setItem(
      key,
      JSON.stringify(thfC02State)
    );

    thfC02Set(
      "thf-c02-save",
      thfC02T().save
    );

    return true;

  } catch (error) {
    console.error("Case 02 save failed:", error);

    thfC02Set(
      "thf-c02-save",
      thfC02T().saveError
    );

    return false;
  }
}

// ==========================================
// UNLOCK
// ==========================================

function thfC02Unlocked() {
  const profile = thfC02Profile();

  if (!profile) return false;

  if (
    typeof thfCaseStatus === "function" &&
    thfCaseStatus("01")?.completed === true
  ) {
    return true;
  }

  try {
    const saved = JSON.parse(
      localStorage.getItem(
        "thf_case01_puzzle_v1_" + profile.id
      ) || "null"
    );

    return saved?.completed === true;

  } catch {
    return false;
  }
}

function thfC02Mistakes() {
  return typeof thfCaseStatus === "function"
    ? thfCaseStatus("02")?.mistakes || 0
    : 0;
}

// ==========================================
// BUILD SCREEN AND MODAL
// ==========================================

function thfC02BuildScreen() {
  if (document.getElementById("case02-screen")) {
    return;
  }

  const app = document.getElementById("app");
  if (!app) return;

  const screen = thfC02El(
    "section",
    "screen app-page thf-c02-screen hidden"
  );

  screen.id = "case02-screen";

  const panel = thfC02El(
    "div",
    "page-panel thf-c02-panel"
  );

  const header = thfC02El(
    "div",
    "thf-c02-header"
  );

  const heading = thfC02El("div");

  const eyebrow = thfC02El("p", "eyebrow");
  eyebrow.id = "thf-c02-label";

  const title = thfC02El(
    "h2",
    "",
    "The Midnight Journal"
  );

  const subtitle = thfC02El("p");
  subtitle.id = "thf-c02-subtitle";

  heading.append(eyebrow, title, subtitle);

  const exit = thfC02Button(
    "EXIT",
    thfC02Exit,
    "secondary-btn"
  );

  exit.id = "thf-c02-exit";
  header.append(heading, exit);

  const status = thfC02El(
    "div",
    "thf-c02-status"
  );

  status.id = "thf-c02-status";

  const tools = thfC02El(
    "div",
    "thf-c02-tools"
  );

  tools.id = "thf-c02-tools";

  const content = thfC02El("div");
  content.id = "thf-c02-content";

  const save = thfC02El(
    "p",
    "thf-c02-small"
  );

  save.id = "thf-c02-save";

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
    !screenIds.includes("case02-screen")
  ) {
    screenIds.push("case02-screen");
  }

  const modal = thfC02El(
    "div",
    "thf-c02-modal"
  );

  modal.id = "thf-c02-modal";
  modal.hidden = true;

  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute(
    "aria-label",
    "Case 02 Assistance"
  );

  const modalCard = thfC02El(
    "div",
    "thf-c02-modal-card"
  );

  const modalHeader = thfC02El(
    "div",
    "thf-c02-modal-header"
  );

  const modalTitle = thfC02El("h3");
  modalTitle.id = "thf-c02-modal-title";

  const close = thfC02Button(
    "CLOSE",
    thfC02CloseModal,
    "thf-c02-close"
  );

  close.id = "thf-c02-modal-close";

  modalHeader.append(modalTitle, close);

  const modalBody = thfC02El("div");
  modalBody.id = "thf-c02-modal-body";

  modalCard.append(
    modalHeader,
    modalBody
  );

  modal.appendChild(modalCard);
  document.body.appendChild(modal);

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      thfC02CloseModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (modal.hidden) return;

    if (event.key === "Escape") {
      thfC02CloseModal();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = Array.from(
      modal.querySelectorAll(
        "button:not(:disabled)"
      )
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[
      focusable.length - 1
    ];

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

// ==========================================
// MODAL CONTROLS
// ==========================================

function thfC02OpenModal(title) {
  const modal = document.getElementById(
    "thf-c02-modal"
  );

  if (!modal) return;

  thfC02ModalReturnFocus =
    document.activeElement;

  thfC02Set(
    "thf-c02-modal-title",
    title
  );

  modal.hidden = false;

  document.getElementById(
    "thf-c02-modal-close"
  )?.focus();
}

function thfC02CloseModal() {
  const modal = document.getElementById(
    "thf-c02-modal"
  );

  if (modal) {
    modal.hidden = true;
  }

  if (thfC02ModalReturnFocus?.isConnected) {
    thfC02ModalReturnFocus.focus();
  }
}

// ==========================================
// EVIDENCE DOCUMENTS
// ==========================================

function thfC02PaperRow(table, values) {
  const row = document.createElement("tr");

  values.forEach(value => {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  });

  table.appendChild(row);
}

function thfC02Paper(title, rows) {
  const t = thfC02T();

  const paper = thfC02El(
    "div",
    "thf-c02-paper"
  );

  paper.append(
    thfC02El("p", "", t.company),
    thfC02El("h4", "", title)
  );

  const wrap = thfC02El(
    "div",
    "thf-c02-table-wrap"
  );

  const table = thfC02El(
    "table",
    "thf-c02-table"
  );

  rows.forEach(row => {
    thfC02PaperRow(table, row);
  });

  wrap.appendChild(table);
  paper.appendChild(wrap);

  return paper;
}

function thfC02EvidenceDocuments(container) {
  const t = thfC02T();

  container.appendChild(
    thfC02Paper(
      t.evidenceTitle,
      [
        [t.ref, "AJ-2025-1147"],
        [t.posted, "31 Dec 2025 · 11:47 PM"],
        [
          t.operator,
          "Sofia Tan — Financial Controller"
        ],
        [t.approved, t.approvalValue],
        [t.note, t.noteValue]
      ]
    )
  );

  container.appendChild(
    thfC02Paper(
      t.originalTitle,
      [
        [t.ref, "GL-2025-014"],
        [t.posted, "2 Jan 2025"],
        [
          t.debit,
          "Office Expense · RM50,000"
        ],
        [
          t.credit,
          "Accounts Payable · RM50,000"
        ]
      ]
    )
  );

  container.appendChild(
    thfC02El(
      "p",
      "thf-c02-small",
      t.originalNote
    )
  );
}

function thfC02ViewEvidence() {
  const t = thfC02T();

  const body = document.getElementById(
    "thf-c02-modal-body"
  );

  if (!body) return;

  body.replaceChildren();

  body.appendChild(
    thfC02El(
      "p",
      "thf-c02-small",
      t.hintFreeReview
    )
  );

  thfC02EvidenceDocuments(body);
  thfC02OpenModal(t.evidenceModal);
}

// ==========================================
// HINT SYSTEM
// ==========================================

function thfC02SaveHints(count) {
  if (
    thfC02State.completed ||
    thfC02State.matched
  ) {
    return;
  }

  const target = Math.max(
    thfC02State.hints,
    Math.min(2, count)
  );

  thfC02State.hints = target;
  thfC02Save();

  if (
    typeof thfLoadProgress === "function" &&
    typeof thfSaveProgress === "function" &&
    typeof thfGetCase === "function"
  ) {
    const progress = thfLoadProgress();
    const record = thfGetCase(
      progress,
      THF_C02_ID
    );

    if (!record.completed) {
      record.hints = Math.max(
        record.hints || 0,
        target
      );

      thfSaveProgress(progress);
    }
  }
}

function thfC02UnlockHint(level) {
  if (
    thfC02State.matched ||
    thfC02State.completed
  ) {
    return;
  }

  if (
    level === 2 &&
    thfC02State.hints < 1
  ) {
    return;
  }

  thfC02SaveHints(level);
  thfC02RenderHintsBody();
  thfC02RenderTools();
}

function thfC02RenderHintsBody() {
  const t = thfC02T();

  const body = document.getElementById(
    "thf-c02-modal-body"
  );

  if (!body) return;

  body.replaceChildren();

  body.appendChild(
    thfC02El(
      "p",
      "thf-c02-hint-cost",
      t.hintExplanation
    )
  );

  if (thfC02State.matched) {
    body.appendChild(
      thfC02El(
        "p",
        "thf-c02-feedback success",
        t.hintDisabled
      )
    );
  }

  [1, 2].forEach(level => {
    const unlocked =
      thfC02State.hints >= level;

    const card = thfC02El(
      "div",
      "thf-c02-hint-card"
    );

    card.appendChild(
      thfC02El(
        "h4",
        "",
        level === 1
          ? t.hint1Title
          : t.hint2Title
      )
    );

    if (unlocked) {
      card.appendChild(
        thfC02El(
          "p",
          "",
          level === 1
            ? t.hint1Text
            : t.hint2Text
        )
      );

      const format = thfC02El(
        "div",
        "thf-c02-hint-format",
        level === 1
          ? t.hint1Format
          : t.hint2Format
      );

      format.style.whiteSpace = "pre-line";
      card.appendChild(format);

    } else if (!thfC02State.matched) {
      const action = thfC02Button(
        level === 1
          ? t.hint1Action
          : t.hint2Action,
        () => thfC02UnlockHint(level),
        "secondary-btn"
      );

      if (
        level === 2 &&
        thfC02State.hints < 1
      ) {
        action.disabled = true;
        action.title = t.hintLocked;
      }

      card.appendChild(action);
    }

    body.appendChild(card);
  });
}

function thfC02OpenHints() {
  thfC02RenderHintsBody();
  thfC02OpenModal(
    thfC02T().hintModal
  );
}

function thfC02RenderTools() {
  const tools = document.getElementById(
    "thf-c02-tools"
  );

  if (!tools) return;

  tools.replaceChildren();

  const t = thfC02T();

  if (thfC02State.stage >= 2) {
    tools.appendChild(
      thfC02Button(
        t.evidenceButton,
        thfC02ViewEvidence,
        "secondary-btn"
      )
    );

    tools.appendChild(
      thfC02Button(
        t.hintButton +
        " (" +
        thfC02State.hints +
        "/2)",
        thfC02OpenHints,
        "secondary-btn"
      )
    );
  }
}

// ==========================================
// OPEN / EXIT CASE
// ==========================================

function thfCase02Open() {
  if (!thfC02Profile()) {
    thfC02ShowScreen("profile-screen");
    return;
  }

  if (!thfC02Unlocked()) {
    alert(thfC02T().locked);
    return;
  }

  thfC02Init();
  thfC02Load();

  thfC02State.started = true;
  thfC02Save();

  thfC02Feedback = "";
  thfC02FeedbackSuccess = false;

  thfC02Render();
  thfC02ShowScreen("case02-screen");
}

function thfC02Exit() {
  if (!window.confirm(
    thfC02T().exitConfirm
  )) {
    return;
  }

  thfC02CloseModal();
  thfC02Save();

  if (
    typeof thfRefreshAll === "function"
  ) {
    thfRefreshAll();
  }

  thfC02ReturnToFiles();
}

// ==========================================
// UI HELPERS
// ==========================================

function thfC02FeedbackBox(
  message,
  success = false
) {
  const box = thfC02El(
    "div",
    "thf-c02-feedback" +
      (success ? " success" : ""),
    message
  );

  box.style.whiteSpace = "pre-line";
  box.setAttribute("role", "status");

  return box;
}

function thfC02Actions(...buttons) {
  const actions = thfC02El(
    "div",
    "thf-c02-actions"
  );

  buttons.forEach(button => {
    actions.appendChild(button);
  });

  return actions;
}

// ==========================================
// STAGE 1 — EVIDENCE
// ==========================================

function thfC02RenderEvidence(container) {
  const t = thfC02T();

  const box = thfC02El(
    "div",
    "thf-c02-box"
  );

  box.append(
    thfC02El("h3", "", t.introTitle),
    thfC02El("p", "", t.intro),
    thfC02FeedbackBox(
      "👩‍💼 ALYA RAHMAN\n" + t.alya
    )
  );

  thfC02EvidenceDocuments(box);

  box.appendChild(
    thfC02Actions(
      thfC02Button(
        t.begin,
        () => {
          thfC02State.stage = 2;
          thfC02Save();
          thfC02Render();
        }
      )
    )
  );

  container.appendChild(box);
}

// ==========================================
// STAGE 2 — JOURNAL MATCHING
// ==========================================

function thfC02Choose(field, index) {
  if (thfC02State.matched) return;

  thfC02State.selections[field] = index;
  thfC02Feedback = "";

  thfC02Save();
  thfC02Render();
}

function thfC02Verify() {
  const t = thfC02T();
  const selections = thfC02State.selections;

  if (
    Object.values(selections).some(
      value => value === null
    )
  ) {
    thfC02Feedback = t.chooseAll;
    thfC02FeedbackSuccess = false;
    thfC02Render();
    return;
  }

  const correct =
    selections.debit === 0 &&
    selections.credit === 1 &&
    selections.amount === 1;

  if (correct) {
    thfC02State.matched = true;
    thfC02Feedback = t.correct;
    thfC02FeedbackSuccess = true;

    thfC02Save();
    thfC02Render();
    return;
  }

  const before = thfC02Mistakes();

  if (
    typeof thfRegisterMistake === "function"
  ) {
    thfRegisterMistake("02");
  }

  const mistakes = thfC02Mistakes();

  if (mistakes >= 2) {
    thfC02State.matched = true;

    thfC02State.selections = {
      debit: 0,
      credit: 1,
      amount: 1
    };

    thfC02Feedback = t.reveal;
    thfC02FeedbackSuccess = false;

    thfC02Save();

  } else {
    thfC02Feedback =
      t.wrong + "\n" + t.secondTry;

    if (before === 0) {
      thfC02Feedback +=
        "\n" + t.wrongLife;
    }

    if (
      typeof thfLoadProgress === "function" &&
      thfLoadProgress().learningMode
    ) {
      thfC02Feedback +=
        "\n" + t.learning;
    }

    thfC02FeedbackSuccess = false;
  }

  thfC02Render();
}

function thfC02RenderMatching(container) {
  const t = thfC02T();

  const box = thfC02El(
    "div",
    "thf-c02-box"
  );

  box.append(
    thfC02El("h3", "", t.correctionTitle),
    thfC02El("p", "", t.correctionNote)
  );

  const grid = thfC02El(
    "div",
    "thf-c02-matching"
  );

  [
    ["debit", t.debit, t.debitOptions],
    ["credit", t.credit, t.creditOptions],
    ["amount", t.amount, t.amountOptions]
  ].forEach(([field, title, options]) => {
    const group = thfC02El(
      "div",
      "thf-c02-match"
    );

    group.appendChild(
      thfC02El("h4", "", title)
    );

    options.forEach((option, index) => {
      const choice = thfC02Button(
        option,
        () => thfC02Choose(field, index),
        "thf-c02-option"
      );

      const selected =
        thfC02State.selections[field] === index;

      choice.classList.toggle(
        "selected",
        selected
      );

      choice.setAttribute(
        "aria-pressed",
        String(selected)
      );

      choice.disabled = thfC02State.matched;

      group.appendChild(choice);
    });

    grid.appendChild(group);
  });

  box.appendChild(grid);

  if (thfC02Feedback) {
    box.appendChild(
      thfC02FeedbackBox(
        thfC02Feedback,
        thfC02FeedbackSuccess
      )
    );
  }

  if (thfC02State.matched) {
    box.appendChild(
      thfC02Actions(
        thfC02Button(
          t.next,
          () => {
            thfC02State.stage = 3;
            thfC02Feedback = "";

            thfC02Save();
            thfC02Render();
          }
        )
      )
    );

  } else {
    box.appendChild(
      thfC02Actions(
        thfC02Button(
          t.check,
          thfC02Verify
        )
      )
    );
  }

  container.appendChild(box);
}

// ==========================================
// SUBMIT CASE REPORT
// ==========================================

function thfC02Submit() {
  if (!thfC02State.matched) return;

  thfC02State.completed = true;
  thfC02State.stage = 4;

  const saved = thfC02Save();

  if (
    saved &&
    typeof thfCompleteCase === "function"
  ) {
    thfCompleteCase("02");
  }

  if (
    typeof thfRefreshAll === "function"
  ) {
    thfRefreshAll();
  }

  thfC02Render();
}

// ==========================================
// STAGE 3 — CASE REPORT
// ==========================================

function thfC02RenderReport(
  container,
  completed
) {
  const t = thfC02T();

  const box = thfC02El(
    "div",
    "thf-c02-box"
  );

  box.append(
    thfC02El(
      "h3",
      "",
      completed
        ? t.completedTitle
        : t.reportTitle
    ),
    thfC02El(
      "p",
      "",
      completed
        ? t.completedText
        : t.reportIntro
    )
  );

  const findings = [
    [t.finding1, t.finding1Text],
    [t.finding2, t.finding2Text],
    [t.finding3, t.finding3Text],
    [t.finding4, t.finding4Text]
  ];

  findings.forEach(
    ([title, description]) => {
      const item = thfC02El(
        "div",
        "thf-c02-finding"
      );

      item.append(
        thfC02El(
          "strong",
          "",
          title
        ),
        thfC02El(
          "p",
          "",
          description
        )
      );

      box.appendChild(item);
    }
  );

  if (completed) {
    const score =
      typeof thfCaseStatus === "function"
        ? thfCaseStatus("02")
        : null;

    const result = thfC02El(
      "div",
      "thf-c02-result"
    );

    result.append(
      thfC02El("p", "", t.score),
      thfC02El(
        "strong",
        "",
        "+" + (score?.xp ?? 0) + " XP"
      ),
      thfC02El("p", "", t.replay)
    );

    box.appendChild(result);

    box.appendChild(
      thfC02Actions(
        thfC02Button(
          t.backFiles,
          () => {
            if (
              typeof thfRefreshAll === "function"
            ) {
              thfRefreshAll();
            }

            thfC02ReturnToFiles();
          }
        )
      )
    );

  } else {
    box.appendChild(
      thfC02Actions(
        thfC02Button(
          t.submit,
          thfC02Submit
        )
      )
    );
  }

  container.appendChild(box);
}

// ==========================================
// MAIN RENDER
// ==========================================

function thfC02Render() {
  const t = thfC02T();

  thfC02Set("thf-c02-label", t.label);
  thfC02Set("thf-c02-subtitle", t.subtitle);
  thfC02Set("thf-c02-exit", t.exit);
  thfC02Set("thf-c02-save", t.save);

  const status = document.getElementById(
    "thf-c02-status"
  );

  const content = document.getElementById(
    "thf-c02-content"
  );

  if (!status || !content) return;

  status.replaceChildren();
  content.replaceChildren();

  [
    t.stageEvidence,
    t.stagePuzzle,
    t.stageReport
  ].forEach((label, index) => {
    const step = thfC02El(
      "span",
      "",
      label
    );

    if (
      index + 1 === Math.min(
        thfC02State.stage,
        3
      )
    ) {
      step.style.borderColor = "#d9b66f";
      step.style.background = "#35435a";
    }

    status.appendChild(step);
  });

  thfC02RenderTools();

  if (thfC02State.completed) {
    thfC02RenderReport(
      content,
      true
    );

  } else if (thfC02State.stage === 1) {
    thfC02RenderEvidence(content);

  } else if (thfC02State.stage === 2) {
    thfC02RenderMatching(content);

  } else {
    thfC02RenderReport(
      content,
      false
    );
  }
}

// ==========================================
// INITIALISE
// ==========================================

function thfC02Init() {
  if (thfC02Ready) return;

  thfC02BuildScreen();
  thfC02Ready = true;
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    thfC02Init
  );
} else {
  thfC02Init();
}

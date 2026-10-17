
/* ========================================
   THE HIDDEN FILES
   07 - CASE 01: THE INVOICE TRAP
   Find the Error + Scoring + Case Report
======================================== */

"use strict";

// Load scoring assets.
(function loadProgressAssets() {
  if (!document.querySelector('link[href="08-progress.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "08-progress.css";
    document.head.appendChild(link);
  }

  if (!document.querySelector('script[src="08-progress.js"]')) {
    const script = document.createElement("script");
    script.src = "08-progress.js";
    script.async = false;
    document.head.appendChild(script);
  }
})();

if (
  typeof screenIds !== "undefined" &&
  !screenIds.includes("case01-screen")
) {
  screenIds.push("case01-screen");
}

const CASE01_SAVE_PREFIX = "thf_case01_puzzle_v1_";

const CASE01_TEXT = {
  en: {
    label: "CASE 01 — PUZZLE",
    subtitle: "Financial Accounting & Reporting · Find the Error",
    exit: "EXIT",
    step1: "01 FIND THE ERROR",
    step2: "02 CORRECT THE ENTRY",
    step3: "03 CASE REPORT",
    start: "START FIND THE ERROR",
    continue: "CONTINUE CASE 01 PUZZLE",
    review: "REVIEW CASE 01 REPORT",
    prompt1: "Find the incorrect accounting entry",
    instruction1:
      "Review the journal entry. Select the account row containing the classification error.",
    documentTitle: "GENERAL JOURNAL — GL-2025-014",
    journalNote:
      "Purchase of production machinery for RM50,000. Invoice INV-2025-001.",
    date: "Posting Date: 2 January 2025",
    account: "Account",
    debit: "Debit",
    credit: "Credit",
    expense: "Office Expense",
    payable: "Accounts Payable",
    wrong:
      "Incorrect. Review the account debited for the machinery.",
    right:
      "Correct! Office Expense is the wrong classification. Production machinery should be recognised as PPE.",
    next: "CONTINUE TO CORRECTION",
    prompt2: "Choose the correcting journal entry",
    instruction2:
      "Which entry corrects the classification without recording the purchase twice?",
    options: [
      "Dr Machinery (PPE) RM50,000 / Cr Office Expense RM50,000",
      "Dr Office Expense RM50,000 / Cr Machinery (PPE) RM50,000",
      "Dr Machinery (PPE) RM50,000 / Cr Accounts Payable RM50,000"
    ],
    correctionWrong:
      "Incorrect. Accounts Payable was already credited. Reverse the expense and recognise the machinery.",
    correctionRight:
      "Correct! Dr Machinery (PPE), Cr Office Expense — RM50,000 each.",
    nextReport: "PREPARE CASE REPORT",
    reportHeading: "CASE 01 — INVESTIGATION REPORT",
    reportStatus: "ACCOUNTING ERROR IDENTIFIED",
    reportError: "Finding",
    reportErrorText:
      "Production machinery costing RM50,000 was incorrectly recorded as Office Expense.",
    reportCorrection: "Required Correction",
    reportCorrectionText:
      "Dr Machinery (PPE) RM50,000; Cr Office Expense RM50,000.",
    reportImpact: "Profit Before Tax Impact",
    reportImpactText:
      "Reclassification increases profit before tax by RM50,000 before depreciation. Depreciation is addressed in Case 03.",
    reportConclusion: "Conclusion",
    reportConclusionText:
      "The classification is incorrect. This finding alone does not establish fraud.",
    reportSubmit: "SUBMIT CASE REPORT",
    completedTitle: "CASE 01 COMPLETE",
    completedText: "Case Report filed successfully.",
    backDesk: "RETURN TO INVESTIGATION DESK",
    backOverview: "RETURN TO CASE FILES",
    saveNote: "Progress saves automatically.",
    saveError: "Progress could not be saved.",
    locked: "Complete the Mini Deduction first.",
    exitConfirm: "Exit puzzle? Progress will be saved.",
    reportLocked: "Complete the correction first.",
    secondWrong:
      "Second incorrect attempt. The correct answer has been revealed. You may continue learning, but this case earns 0 XP.",
    lifeLost: "One life lost.",
    learning: "Continue Learning — no further XP.",
    scoreLabel: "XP EARNED",
    scoreReplay:
      "This case was already completed. No additional XP is awarded."
  },

  ms: {
    label: "KES 01 — PUZZLE",
    subtitle: "Financial Accounting & Reporting · Cari Kesilapan",
    exit: "KELUAR",
    step1: "01 CARI KESILAPAN",
    step2: "02 BETULKAN CATATAN",
    step3: "03 LAPORAN KES",
    start: "MULAKAN CARI KESILAPAN",
    continue: "SAMBUNG PUZZLE KES 01",
    review: "SEMAK LAPORAN KES 01",
    prompt1: "Cari catatan perakaunan yang salah",
    instruction1:
      "Semak catatan jurnal. Tekan baris akaun yang mengandungi kesilapan klasifikasi.",
    documentTitle: "JURNAL AM — GL-2025-014",
    journalNote:
      "Pembelian mesin pengeluaran RM50,000. Invois INV-2025-001.",
    date: "Tarikh Catatan: 2 Januari 2025",
    account: "Akaun",
    debit: "Debit",
    credit: "Kredit",
    expense: "Belanja Pejabat",
    payable: "Akaun Belum Bayar",
    wrong:
      "Salah. Semak akaun yang didebitkan bagi pembelian mesin.",
    right:
      "Betul! Belanja Pejabat ialah klasifikasi yang salah. Mesin pengeluaran perlu diiktiraf sebagai PPE.",
    next: "TERUSKAN KE PEMBETULAN",
    prompt2: "Pilih catatan jurnal pembetulan",
    instruction2:
      "Catatan manakah membetulkan klasifikasi tanpa merekodkan pembelian dua kali?",
    options: [
      "Dr Mesin (PPE) RM50,000 / Cr Belanja Pejabat RM50,000",
      "Dr Belanja Pejabat RM50,000 / Cr Mesin (PPE) RM50,000",
      "Dr Mesin (PPE) RM50,000 / Cr Akaun Belum Bayar RM50,000"
    ],
    correctionWrong:
      "Salah. Akaun Belum Bayar sudah dikreditkan. Batalkan belanja dan iktiraf mesin sebagai aset.",
    correctionRight:
      "Betul! Dr Mesin (PPE), Cr Belanja Pejabat — RM50,000 setiap satu.",
    nextReport: "SEDIAKAN LAPORAN KES",
    reportHeading: "KES 01 — LAPORAN PENYIASATAN",
    reportStatus: "KESILAPAN PERAKAUNAN DIKENAL PASTI",
    reportError: "Penemuan",
    reportErrorText:
      "Mesin pengeluaran RM50,000 tersalah direkodkan sebagai Belanja Pejabat.",
    reportCorrection: "Pembetulan",
    reportCorrectionText:
      "Dr Mesin (PPE) RM50,000; Cr Belanja Pejabat RM50,000.",
    reportImpact: "Kesan terhadap Keuntungan Sebelum Cukai",
    reportImpactText:
      "Pengelasan semula meningkatkan keuntungan sebanyak RM50,000 sebelum susut nilai. Susut nilai dikira dalam Kes 03.",
    reportConclusion: "Kesimpulan",
    reportConclusionText:
      "Klasifikasi salah, tetapi penemuan ini sahaja tidak membuktikan penipuan.",
    reportSubmit: "HANTAR LAPORAN KES",
    completedTitle: "KES 01 SELESAI",
    completedText: "Laporan Kes berjaya difailkan.",
    backDesk: "KEMBALI KE MEJA PENYIASATAN",
    backOverview: "KEMBALI KE FAIL KES",
    saveNote: "Kemajuan disimpan secara automatik.",
    saveError: "Kemajuan tidak dapat disimpan.",
    locked: "Selesaikan Mini Deduction dahulu.",
    exitConfirm:
      "Keluar puzzle? Kemajuan akan disimpan.",
    reportLocked:
      "Selesaikan pembetulan dahulu.",
    secondWrong:
      "Jawapan salah kedua. Jawapan betul telah didedahkan. Awak boleh terus belajar tetapi kes ini memperoleh 0 XP.",
    lifeLost: "Satu nyawa ditolak.",
    learning:
      "Teruskan pembelajaran — tiada XP tambahan.",
    scoreLabel: "XP DIPEROLEH",
    scoreReplay:
      "Kes ini sudah selesai. Tiada XP tambahan."
  }
};

// ========================================
// CASE STATE
// ========================================

let case01State = {
  stage: 1,
  errorFound: false,
  correctionFound: false,
  completed: false
};

let case01Feedback = "";
let case01FeedbackSuccess = false;

// ========================================
// HELPERS
// ========================================

function case01Profile() {
  return typeof getActiveDetective === "function"
    ? getActiveDetective()
    : null;
}

function case01Lang() {
  const profile = case01Profile();

  return profile?.settings?.language === "ms"
    ? "ms"
    : "en";
}

function case01T() {
  return CASE01_TEXT[case01Lang()];
}

function case01Key() {
  const profile = case01Profile();

  return profile
    ? CASE01_SAVE_PREFIX + profile.id
    : null;
}

function case01El(tag, className = "", text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = String(text);
  }

  return element;
}

function case01Button(
  text,
  action,
  className = "primary-btn"
) {
  const button = case01El(
    "button",
    className,
    text
  );

  button.type = "button";
  button.addEventListener("click", action);

  return button;
}

function case01Set(id, text) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = text;
  }
}

function case01ShowScreen(id) {
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

// ========================================
// RETURN TO CASE FILES
// ========================================

function case01ReturnToFiles() {
  if (typeof thfOpenCaseFiles === "function") {
    thfOpenCaseFiles();
    return;
  }

  if (
    document.getElementById(
      "case-files-screen"
    )
  ) {
    case01ShowScreen("case-files-screen");
    return;
  }

  // Fallback if Case Files is unavailable.
  case01ShowScreen("far-overview-screen");
}

// ========================================
// LOAD AND SAVE
// ========================================

function case01Load() {
  case01State = {
    stage: 1,
    errorFound: false,
    correctionFound: false,
    completed: false
  };

  const key = case01Key();

  if (!key) return;

  try {
    const saved = JSON.parse(
      localStorage.getItem(key) || "null"
    );

    if (!saved || typeof saved !== "object") {
      return;
    }

    case01State.errorFound =
      saved.errorFound === true;

    case01State.correctionFound =
      saved.correctionFound === true &&
      case01State.errorFound;

    case01State.completed =
      saved.completed === true &&
      case01State.correctionFound;

    if (case01State.completed) {
      case01State.stage = 4;
    } else if (case01State.correctionFound) {
      case01State.stage = 3;
    } else if (case01State.errorFound) {
      case01State.stage = 2;
    }

  } catch (error) {
    console.warn(
      "Case 01 load error:",
      error
    );
  }
}

function case01Save() {
  const key = case01Key();

  if (!key) return false;

  try {
    localStorage.setItem(
      key,
      JSON.stringify(case01State)
    );

    case01Set(
      "case01-save-message",
      case01T().saveNote
    );

    return true;

  } catch (error) {
    console.error(
      "Case 01 save error:",
      error
    );

    case01Set(
      "case01-save-message",
      case01T().saveError
    );

    return false;
  }
}

// ========================================
// INVESTIGATION UNLOCK
// ========================================

function case01Unlocked() {
  const profile = case01Profile();

  if (!profile) return false;

  try {
    const saved = JSON.parse(
      localStorage.getItem(
        "thf_case01_investigation_v1_" +
        profile.id
      ) || "null"
    );

    const requiredClues = [
      "invoice-date",
      "invoice-item",
      "ledger-entry",
      "asset-usage"
    ];

    return (
      saved?.solved === true &&
      saved?.interviewed === true &&
      Array.isArray(saved?.clues) &&
      requiredClues.every(id =>
        saved.clues.includes(id)
      )
    );

  } catch (error) {
    return false;
  }
}

// ========================================
// XP AND MISTAKES
// ========================================

function case01ScoreAvailable() {
  return (
    typeof thfLoadProgress === "function" &&
    typeof thfRegisterMistake === "function" &&
    typeof thfCompleteCase === "function"
  );
}

function case01Mistakes() {
  if (!case01ScoreAvailable()) {
    return 0;
  }

  return (
    typeof thfCaseStatus === "function"
      ? thfCaseStatus("01")?.mistakes || 0
      : 0
  );
}

function case01RegisterWrong() {
  if (!case01ScoreAvailable()) {
    return 1;
  }

  const before = thfLoadProgress();
  const oldLives = before.lives;

  const result = thfRegisterMistake("01");

  if (
    result.mistakes === 1 &&
    oldLives > 0
  ) {
    case01Feedback +=
      "\n" + case01T().lifeLost;
  }

  if (thfLoadProgress().learningMode) {
    case01Feedback +=
      "\n" + case01T().learning;
  }

  return result.mistakes;
}

// ========================================
// LAUNCH BUTTON IN INVESTIGATION DESK
// ========================================

function case01RenderEntry() {
  const area = document.getElementById(
    "inv-deduction-area"
  );

  if (!area) return;

  document.getElementById(
    "case01-launch-area"
  )?.remove();

  if (!case01Unlocked()) return;

  case01Load();

  const launch = case01El(
    "div",
    "case01-actions"
  );

  launch.id = "case01-launch-area";

  const t = case01T();

  launch.appendChild(
    case01Button(
      case01State.completed
        ? t.review
        : case01State.errorFound
          ? t.continue
          : t.start,
      case01Open
    )
  );

  area.appendChild(launch);
}

// ========================================
// OPEN CASE 01 PUZZLE
// ========================================

function case01Open() {
  if (!case01Profile()) {
    case01ShowScreen("profile-screen");
    return;
  }

  if (!case01Unlocked()) {
    alert(case01T().locked);
    return;
  }

  case01Load();

  case01Feedback = "";
  case01FeedbackSuccess = false;

  case01Render();
  case01ShowScreen("case01-screen");
}

// ========================================
// EXIT PUZZLE
// ========================================

function case01Exit() {
  if (!window.confirm(
    case01T().exitConfirm
  )) {
    return;
  }

  case01Save();

  if (typeof thfRefreshAll === "function") {
    thfRefreshAll();
  }

  case01ReturnToFiles();
}

// ========================================
// FEEDBACK
// ========================================

function case01ShowFeedback(
  container,
  message,
  success
) {
  const feedback = case01El(
    "div",
    "case01-feedback" +
      (success ? " success" : ""),
    message
  );

  feedback.style.whiteSpace = "pre-line";
  feedback.setAttribute(
    "role",
    "status"
  );

  container.appendChild(feedback);
}

// ========================================
// STAGE 1 — FIND THE ERROR
// ========================================

function case01ChooseRow(index) {
  const t = case01T();

  if (case01State.errorFound) return;

  if (index !== 0) {
    case01Feedback = t.wrong;
    case01FeedbackSuccess = false;

    const mistakes = case01RegisterWrong();

    if (mistakes >= 2) {
      case01State.errorFound = true;

      case01Feedback =
        t.secondWrong + "\n" + t.right;

      case01Save();
    }

    case01Render();
    return;
  }

  case01State.errorFound = true;
  case01Feedback = t.right;
  case01FeedbackSuccess = true;

  case01Save();
  case01Render();
}

function case01RenderStage1(container) {
  const t = case01T();

  const box = case01El(
    "div",
    "case01-box"
  );

  box.appendChild(
    case01El("h3", "", t.prompt1)
  );

  box.appendChild(
    case01El("p", "", t.instruction1)
  );

  const paper = case01El(
    "div",
    "case01-document"
  );

  paper.appendChild(
    case01El(
      "h4",
      "",
      t.documentTitle
    )
  );

  paper.appendChild(
    case01El("p", "", t.date)
  );

  paper.appendChild(
    case01El("p", "", t.journalNote)
  );

  const header = case01El(
    "div",
    "case01-row"
  );

  header.style.background = "#e3ded3";
  header.style.border = "none";

  [
    t.account,
    t.debit,
    t.credit
  ].forEach(value => {
    header.appendChild(
      case01El("span", "", value)
    );
  });

  paper.appendChild(header);

  const rows = [
    [t.expense, "RM50,000", "—"],
    [t.payable, "—", "RM50,000"]
  ];

  rows.forEach((values, index) => {
    const row = case01Button(
      "",
      () => case01ChooseRow(index),
      "case01-row"
    );

    values.forEach(value => {
      row.appendChild(
        case01El("span", "", value)
      );
    });

    row.setAttribute(
      "aria-label",
      values.join(", ")
    );

    row.disabled =
      case01State.errorFound;

    if (
      case01State.errorFound &&
      index === 0
    ) {
      row.classList.add("selected");
    }

    paper.appendChild(row);
  });

  box.appendChild(paper);

  if (case01Feedback) {
    case01ShowFeedback(
      box,
      case01Feedback,
      case01FeedbackSuccess
    );
  }

  if (case01State.errorFound) {
    const actions = case01El(
      "div",
      "case01-actions"
    );

    actions.appendChild(
      case01Button(
        t.next,
        () => {
          case01State.stage = 2;
          case01Feedback = "";

          case01Save();
          case01Render();
        }
      )
    );

    box.appendChild(actions);
  }

  container.appendChild(box);
}

// ========================================
// STAGE 2 — CORRECT THE ENTRY
// ========================================

function case01ChooseCorrection(index) {
  const t = case01T();

  if (case01State.correctionFound) {
    return;
  }

  if (index !== 0) {
    case01Feedback =
      t.correctionWrong;

    case01FeedbackSuccess = false;

    const mistakes =
      case01RegisterWrong();

    if (mistakes >= 2) {
      case01State.correctionFound = true;

      case01Feedback =
        t.secondWrong +
        "\n" +
        t.correctionRight;

      case01Save();
    }

    case01Render();
    return;
  }

  case01State.correctionFound = true;
  case01Feedback = t.correctionRight;
  case01FeedbackSuccess = true;

  case01Save();
  case01Render();
}

function case01RenderStage2(container) {
  const t = case01T();

  const box = case01El(
    "div",
    "case01-box"
  );

  box.appendChild(
    case01El("h3", "", t.prompt2)
  );

  box.appendChild(
    case01El("p", "", t.instruction2)
  );

  const choices = case01El(
    "div",
    "case01-choices"
  );

  t.options.forEach(
    (option, index) => {
      const choice = case01Button(
        option,
        () => case01ChooseCorrection(index),
        "case01-choice"
      );

      if (
        case01State.correctionFound &&
        index === 0
      ) {
        choice.classList.add(
          "selected"
        );
      }

      choice.disabled =
        case01State.correctionFound;

      choices.appendChild(choice);
    }
  );

  box.appendChild(choices);

  if (case01Feedback) {
    case01ShowFeedback(
      box,
      case01Feedback,
      case01FeedbackSuccess
    );
  }

  if (case01State.correctionFound) {
    const actions = case01El(
      "div",
      "case01-actions"
    );

    actions.appendChild(
      case01Button(
        t.nextReport,
        () => {
          case01State.stage = 3;
          case01Feedback = "";

          case01Save();
          case01Render();
        }
      )
    );

    box.appendChild(actions);
  }

  container.appendChild(box);
}

// ========================================
// SUBMIT CASE REPORT
// ========================================

function case01SubmitReport() {
  if (!case01State.correctionFound) {
    alert(case01T().reportLocked);
    return;
  }

  case01State.completed = true;
  case01State.stage = 4;

  const saved = case01Save();

  if (
    saved &&
    case01ScoreAvailable()
  ) {
    thfCompleteCase("01");
  }

  if (
    typeof thfRefreshAll === "function"
  ) {
    thfRefreshAll();
  }

  case01Render();
}

// ========================================
// STAGE 3 — CASE REPORT
// ========================================

function case01RenderReport(
  container,
  completed
) {
  const t = case01T();

  const report = case01El(
    "div",
    "case01-report"
  );

  report.appendChild(
    case01El(
      "h3",
      "",
      completed
        ? t.completedTitle
        : t.reportHeading
    )
  );

  report.appendChild(
    case01El(
      "p",
      "case01-stamp",
      t.reportStatus
    )
  );

  const grid = case01El(
    "div",
    "case01-report-grid"
  );

  const findings = [
    [
      t.reportError,
      t.reportErrorText
    ],
    [
      t.reportCorrection,
      t.reportCorrectionText
    ],
    [
      t.reportImpact,
      t.reportImpactText
    ],
    [
      t.reportConclusion,
      t.reportConclusionText
    ]
  ];

  findings.forEach(
    ([heading, description]) => {
      const item = case01El(
        "div",
        "case01-report-item"
      );

      item.appendChild(
        case01El(
          "strong",
          "",
          heading
        )
      );

      item.appendChild(
        case01El(
          "p",
          "",
          description
        )
      );

      grid.appendChild(item);
    }
  );

  report.appendChild(grid);

  if (completed) {
    case01ShowFeedback(
      report,
      t.completedText,
      true
    );

    const score =
      typeof thfCaseStatus === "function"
        ? thfCaseStatus("01")
        : null;

    const result = case01El(
      "div",
      "thf-score-result"
    );

    result.appendChild(
      case01El(
        "p",
        "",
        t.scoreLabel
      )
    );

    result.appendChild(
      case01El(
        "strong",
        "",
        "+" + (score?.xp || 0) + " XP"
      )
    );

    result.appendChild(
      case01El(
        "p",
        "",
        t.scoreReplay
      )
    );

    report.appendChild(result);
  }

  const actions = case01El(
    "div",
    "case01-actions"
  );

  if (!completed) {
    actions.appendChild(
      case01Button(
        t.reportSubmit,
        case01SubmitReport
      )
    );

  } else {
    // Optional: revisit the investigation.
    actions.appendChild(
      case01Button(
        t.backDesk,
        () => {
          if (
            typeof invLoad === "function"
          ) {
            invLoad();
          }

          if (
            typeof invRender === "function"
          ) {
            invRender();
          }

          case01RenderEntry();

          case01ShowScreen(
            "investigation-screen"
          );
        },
        "secondary-btn"
      )
    );

    // Main navigation: Case Files.
    actions.appendChild(
      case01Button(
        t.backOverview,
        () => {
          if (
            typeof thfRefreshAll === "function"
          ) {
            thfRefreshAll();
          }

          case01ReturnToFiles();
        }
      )
    );
  }

  report.appendChild(actions);
  container.appendChild(report);
}

// ========================================
// MAIN RENDER
// ========================================

function case01Render() {
  const t = case01T();

  case01Set(
    "case01-label",
    t.label
  );

  case01Set(
    "case01-subtitle",
    t.subtitle
  );

  case01Set(
    "case01-exit-btn",
    t.exit
  );

  case01Set(
    "case01-step1",
    t.step1
  );

  case01Set(
    "case01-step2",
    t.step2
  );

  case01Set(
    "case01-step3",
    t.step3
  );

  case01Set(
    "case01-save-message",
    t.saveNote
  );

  [1, 2, 3].forEach(stage => {
    const element =
      document.getElementById(
        "case01-step" + stage
      );

    if (element) {
      element.classList.toggle(
        "active",
        stage === Math.min(
          case01State.stage,
          3
        )
      );
    }
  });

  const container =
    document.getElementById(
      "case01-content"
    );

  if (!container) return;

  container.replaceChildren();

  if (case01State.completed) {
    case01RenderReport(
      container,
      true
    );

  } else if (case01State.stage === 1) {
    case01RenderStage1(container);

  } else if (case01State.stage === 2) {
    case01RenderStage2(container);

  } else {
    case01RenderReport(
      container,
      false
    );
  }
}

// ========================================
// INITIALISE
// ========================================

function case01Initialise() {
  const exitButton =
    document.getElementById(
      "case01-exit-btn"
    );

  if (exitButton) {
    exitButton.addEventListener(
      "click",
      case01Exit
    );
  }

  const investigation =
    document.getElementById(
      "investigation-screen"
    );

  if (investigation) {
    investigation.addEventListener(
      "click",
      () => {
        queueMicrotask(
          case01RenderEntry
        );
      }
    );

    const observer =
      new MutationObserver(() => {
        if (
          !investigation.classList.contains(
            "hidden"
          )
        ) {
          case01RenderEntry();
        }
      });

    observer.observe(investigation, {
      attributes: true,
      attributeFilter: ["class"]
    });
  }

  case01RenderEntry();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    case01Initialise
  );
} else {
  case01Initialise();
}

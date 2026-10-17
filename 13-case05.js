
"use strict";

/* ==========================================
   THE HIDDEN FILES — SEASON 01
   CASE 05: THE COMMISSION CONNECTION
   Timeline Marker + Evidence + Hints
========================================== */

const THF_C05_PREFIX = "thf_case05_timeline_v1_";

const THF_C05_EVENTS = [
  "invoice",
  "approval",
  "yearend",
  "dispatch",
  "control"
];

const THF_C05_ANSWERS = {
  event: "control",
  year: "2026",
  commission: "investigate"
};

const THF_C05_TEXT = {
  en: {
    label: "CASE 05 / 10 · TIMELINE MARKER",
    title: "The Commission Connection",
    subtitle: "Meridian Holdings Berhad · FY2025",
    exit: "EXIT",
    stage1: "01 · EVIDENCE",
    stage2: "02 · TIMELINE",
    stage3: "03 · CASE REPORT",
    introTitle: "A Sale Before Its Time",
    intro: "A RM300,000 sale was recognised just before year-end. Marcus Lee approved an RM18,000 commission for his brother, Ryan Lee. Investigate the revenue cut-off and commission approval.",
    alya: "The invoice date alone does not determine revenue recognition. Find out when control transferred to the customer. Investigate the commission separately.",
    docA: "DOCUMENT A — SALES INVOICE",
    docB: "DOCUMENT B — DELIVERY & ACCEPTANCE",
    docC: "DOCUMENT C — COMMISSION APPROVAL",
    docD: "DOCUMENT D — ACCOUNTING POLICY",
    policy: "IFRS 15: Revenue is recognised when the customer obtains control of the goods. Issuing an invoice does not itself establish transfer of control.",
    begin: "START TIMELINE INVESTIGATION",
    puzzleTitle: "Mark the Decisive Event",
    puzzleText: "Answer all three questions. Correct answers turn green and are locked. Incorrect answers turn red and can be changed.",
    q1: "1. Which event determines transfer of control?",
    q2: "2. In which year should the RM300,000 revenue be recognised?",
    q3: "3. What does the commission evidence establish?",
    events: [
      ["30 DEC 2025", "Invoice issued; RM300,000 revenue posted"],
      ["30 DEC 2025", "Marcus approves Ryan's RM18,000 commission"],
      ["31 DEC 2025", "Financial year-end"],
      ["02 JAN 2026", "Goods dispatched from warehouse"],
      ["04 JAN 2026", "Customer accepts goods; control transfers"]
    ],
    years: [
      ["2025", "Recognise revenue in FY2025"],
      ["2026", "Recognise revenue in FY2026"]
    ],
    commissionChoices: [
      ["fraud", "The approval proves fraud occurred."],
      ["ignore", "The family relationship is irrelevant."],
      ["investigate", "Investigate a possible conflict of interest without assuming fraud."]
    ],
    verify: "VERIFY FINDINGS",
    missing: "Answer every question that is not yet confirmed.",
    correctLabel: "✓ CORRECT — LOCKED",
    wrongLabel: "✕ INCORRECT — TRY AGAIN",
    pendingLabel: "● SELECTED — NOT VERIFIED",
    progress: "ANSWERS CONFIRMED",
    wrong: "Some answers are incorrect. Change the red answers and verify again.",
    secondTry: "One attempt remains.",
    noLives: "No lives available. Try again after recovery.",
    reveal: "Second incorrect attempt. Correct answers revealed. This case earns 0 XP.",
    correct: "All three findings are correct!",
    next: "PREPARE CASE REPORT",
    reportTitle: "CASE 05 — REVENUE CUT-OFF REPORT",
    reportIntro: "Review the accounting conclusions before submitting.",
    findings: [
      [
        "Transfer of Control",
        "The customer obtained control on 4 January 2026, according to the acceptance evidence and contractual terms."
      ],
      [
        "Revenue Recognition",
        "The RM300,000 revenue posted on 30 December 2025 was premature. Recognise the revenue in 2026."
      ],
      [
        "2025 Adjusting Entry",
        "Dr Sales Revenue RM300,000; Cr Trade Receivables RM300,000, assuming the unpaid invoice created a receivable. No 2025 cost-of-sales reversal is needed because the related cost was not posted."
      ],
      [
        "Commission Red Flag",
        "Marcus Lee approved RM18,000 for his brother Ryan Lee. This requires independent investigation, but the relationship alone does not prove fraud."
      ],
      [
        "Impact on 2025 Profit",
        "Reduce draft 2025 profit before tax by RM300,000. Do not deduct the RM18,000 commission again without evidence supporting a further adjustment."
      ]
    ],
    submit: "SUBMIT CASE 05 REPORT",
    completeTitle: "CASE 05 COMPLETE",
    completeText: "Revenue cut-off findings and the commission red flag have been filed.",
    score: "XP EARNED",
    replay: "XP is awarded only once.",
    files: "RETURN TO CASE FILES",
    locked: "Complete Case 04 before opening Case 05.",
    exitConfirm: "Exit Case 05? Progress will be saved.",
    save: "Progress saved automatically.",
    saveError: "Unable to save progress.",
    evidenceBtn: "📂 VIEW EVIDENCE",
    hintBtn: "💡 HINT",
    evidenceTitle: "Sales & Commission Documents",
    hintsTitle: "Detective Assistance",
    close: "CLOSE",
    evidenceFree: "Reviewing evidence does not deduct XP or lives.",
    hintRule: "Hints reduce maximum available XP but do not deduct lives.",
    hint1Title: "HINT 1 — IFRS 15",
    hint1Text: "Revenue recognition depends on transfer of control, not the invoice date.",
    hint1Formula: "Contract → Control transfer → Revenue year",
    hint2Title: "HINT 2 — Follow the Customer",
    hint2Text: "Find the customer acceptance date. For the commission, recommend an independent investigation.",
    hint2Formula: "Acceptance: 04 JAN 2026\nRevenue: 2026\nCommission: Investigate",
    hint1Action: "UNLOCK HINT 1 · MAX 7 XP",
    hint2Action: "UNLOCK HINT 2 · MAX 5 XP",
    hintLocked: "Unlock Hint 1 first.",
    hintDone: "The puzzle is already resolved."
  },

  ms: {
    label: "KES 05 / 10 · PENANDA GARIS MASA",
    title: "The Commission Connection",
    subtitle: "Meridian Holdings Berhad · Tahun Kewangan 2025",
    exit: "KELUAR",
    stage1: "01 · BUKTI",
    stage2: "02 · GARIS MASA",
    stage3: "03 · LAPORAN KES",
    introTitle: "Jualan Sebelum Masanya",
    intro: "Jualan RM300,000 diiktiraf sebelum akhir tahun. Marcus Lee meluluskan komisen RM18,000 untuk adiknya Ryan Lee. Siasat cut-off hasil dan kelulusan komisen.",
    alya: "Tarikh invois sahaja tidak menentukan pengiktirafan hasil. Cari tarikh kawalan berpindah kepada pelanggan. Siasat isu komisen secara berasingan.",
    docA: "DOKUMEN A — INVOIS JUALAN",
    docB: "DOKUMEN B — PENGHANTARAN & PENERIMAAN",
    docC: "DOKUMEN C — KELULUSAN KOMISEN",
    docD: "DOKUMEN D — POLISI PERAKAUNAN",
    policy: "IFRS 15: Hasil diiktiraf apabila pelanggan memperoleh kawalan barang. Pengeluaran invois sahaja tidak membuktikan pemindahan kawalan.",
    begin: "MULAKAN SIASATAN GARIS MASA",
    puzzleTitle: "Tandakan Peristiwa Penentu",
    puzzleText: "Jawab ketiga-tiga soalan. Jawapan betul menjadi hijau dan terkunci. Jawapan salah menjadi merah dan boleh ditukar.",
    q1: "1. Peristiwa manakah menentukan pemindahan kawalan?",
    q2: "2. Tahun manakah hasil RM300,000 patut diiktiraf?",
    q3: "3. Apakah kesimpulan daripada bukti komisen?",
    events: [
      ["30 DIS 2025", "Invois dikeluarkan; hasil RM300,000 direkodkan"],
      ["30 DIS 2025", "Marcus meluluskan komisen RM18,000 untuk Ryan"],
      ["31 DIS 2025", "Tarikh akhir tahun kewangan"],
      ["02 JAN 2026", "Barang keluar dari gudang"],
      ["04 JAN 2026", "Pelanggan menerima barang; kawalan berpindah"]
    ],
    years: [
      ["2025", "Iktiraf hasil pada 2025"],
      ["2026", "Iktiraf hasil pada 2026"]
    ],
    commissionChoices: [
      ["fraud", "Kelulusan ini membuktikan penipuan."],
      ["ignore", "Hubungan keluarga tidak relevan."],
      ["investigate", "Siasat potensi konflik kepentingan tanpa menganggap penipuan berlaku."]
    ],
    verify: "SEMAK PENEMUAN",
    missing: "Jawab semua soalan yang belum disahkan.",
    correctLabel: "✓ BETUL — TERKUNCI",
    wrongLabel: "✕ SALAH — CUBA LAGI",
    pendingLabel: "● DIPILIH — BELUM DISEMAK",
    progress: "JAWAPAN DISAHKAN",
    wrong: "Ada jawapan salah. Tukar jawapan merah dan semak semula.",
    secondTry: "Tinggal satu percubaan.",
    noLives: "Nyawa telah habis. Cuba semula selepas pemulihan.",
    reveal: "Jawapan salah kedua. Jawapan betul didedahkan. Kes ini mendapat 0 XP.",
    correct: "Ketiga-tiga penemuan betul!",
    next: "SEDIAKAN LAPORAN KES",
    reportTitle: "KES 05 — LAPORAN CUT-OFF HASIL",
    reportIntro: "Semak kesimpulan perakaunan sebelum menghantar laporan.",
    findings: [
      [
        "Pemindahan Kawalan",
        "Pelanggan memperoleh kawalan pada 4 Januari 2026 berdasarkan bukti penerimaan dan syarat kontrak."
      ],
      [
        "Pengiktirafan Hasil",
        "Hasil RM300,000 yang direkodkan pada 30 Disember 2025 terlalu awal. Iktiraf hasil pada 2026."
      ],
      [
        "Jurnal Pelarasan 2025",
        "Dr Hasil Jualan RM300,000; Cr Penghutang Perdagangan RM300,000, dengan andaian invois belum dibayar mewujudkan penghutang. Tiada pembalikan kos jualan 2025 diperlukan kerana kos berkaitan belum direkodkan."
      ],
      [
        "Amaran Komisen",
        "Marcus Lee meluluskan RM18,000 untuk adiknya Ryan Lee. Perkara ini memerlukan siasatan bebas tetapi tidak membuktikan penipuan secara automatik."
      ],
      [
        "Kesan kepada Keuntungan 2025",
        "Kurangkan keuntungan sebelum cukai draf 2025 sebanyak RM300,000. Jangan tolak lagi RM18,000 tanpa bukti pelarasan tambahan."
      ]
    ],
    submit: "HANTAR LAPORAN KES 05",
    completeTitle: "KES 05 SELESAI",
    completeText: "Penemuan cut-off hasil dan amaran komisen telah difailkan.",
    score: "XP DIPEROLEH",
    replay: "XP diberikan sekali sahaja.",
    files: "KEMBALI KE FAIL KES",
    locked: "Selesaikan Kes 04 sebelum membuka Kes 05.",
    exitConfirm: "Keluar Kes 05? Kemajuan akan disimpan.",
    save: "Kemajuan disimpan secara automatik.",
    saveError: "Kemajuan tidak dapat disimpan.",
    evidenceBtn: "📂 LIHAT BUKTI",
    hintBtn: "💡 PETUNJUK",
    evidenceTitle: "Dokumen Jualan & Komisen",
    hintsTitle: "Bantuan Detektif",
    close: "TUTUP",
    evidenceFree: "Semakan bukti tidak menolak XP atau nyawa.",
    hintRule: "Hint mengurangkan XP maksimum tetapi tidak menolak nyawa.",
    hint1Title: "HINT 1 — IFRS 15",
    hint1Text: "Pengiktirafan hasil bergantung pada pemindahan kawalan, bukan tarikh invois.",
    hint1Formula: "Kontrak → Pemindahan kawalan → Tahun hasil",
    hint2Title: "HINT 2 — Ikut Bukti Pelanggan",
    hint2Text: "Cari tarikh penerimaan pelanggan. Bagi komisen, cadangkan siasatan bebas.",
    hint2Formula: "Penerimaan: 04 JAN 2026\nHasil: 2026\nKomisen: Siasat",
    hint1Action: "BUKA HINT 1 · MAKSIMUM 7 XP",
    hint2Action: "BUKA HINT 2 · MAKSIMUM 5 XP",
    hintLocked: "Buka Hint 1 dahulu.",
    hintDone: "Puzzle sudah diselesaikan."
  }
};

/* ==========================================
   01 — STATE
========================================== */

function thfC05Default() {
  return {
    started: false,
    stage: 1,
    event: null,
    year: null,
    commission: null,
    verified: {
      event: false,
      year: false,
      commission: false
    },
    results: {
      event: null,
      year: null,
      commission: null
    },
    hints: 0,
    mistakes: 0,
    matched: false,
    completed: false,
    revealed: false
  };
}

let thfC05State = thfC05Default();
let thfC05Feedback = "";
let thfC05FeedbackSuccess = false;
let thfC05Ready = false;
let thfC05ReturnFocus = null;

/* ==========================================
   02 — HELPERS
========================================== */

function thfC05Profile() {
  return typeof getActiveDetective === "function"
    ? getActiveDetective()
    : null;
}

function thfC05T() {
  const profile = thfC05Profile();

  const language =
    profile && typeof getProfileLanguage === "function"
      ? getProfileLanguage(profile)
      : profile?.settings?.language || "en";

  return THF_C05_TEXT[language === "ms" ? "ms" : "en"];
}

function thfC05Key() {
  const profile = thfC05Profile();
  return profile ? THF_C05_PREFIX + profile.id : null;
}

function thfC05El(tag, className = "", value) {
  const element = document.createElement(tag);

  if (className) element.className = className;
  if (value !== undefined) {
    element.textContent = String(value);
  }

  return element;
}

function thfC05Button(label, action, className = "primary-btn") {
  const button = thfC05El("button", className, label);
  button.type = "button";
  button.addEventListener("click", action);
  return button;
}

function thfC05Set(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function thfC05Fields() {
  return ["event", "year", "commission"];
}

function thfC05IsCorrect(field) {
  return (
    thfC05State.verified[field] === true &&
    thfC05State.results[field] === "correct"
  );
}

function thfC05IsWrong(field) {
  return (
    thfC05State.verified[field] === true &&
    thfC05State.results[field] === "wrong"
  );
}

function thfC05CorrectCount() {
  return thfC05Fields().filter(thfC05IsCorrect).length;
}

function thfC05AllCorrect() {
  return thfC05CorrectCount() === 3;
}

function thfC05FeedbackBox(message, success = false) {
  const box = thfC05El(
    "div",
    "thf-c05-feedback " + (success ? "success" : "error"),
    message
  );

  box.style.whiteSpace = "pre-line";
  box.setAttribute("role", "status");
  return box;
}

function thfC05Actions(...buttons) {
  const row = thfC05El("div", "thf-c05-actions");
  buttons.forEach(button => row.appendChild(button));
  return row;
}

/* ==========================================
   03 — NAVIGATION
========================================== */

function thfC05ShowScreen(id) {
  if (typeof showScreen === "function") {
    showScreen(id);
  }

  document.querySelectorAll("#app > .screen").forEach(screen => {
    screen.classList.toggle("hidden", screen.id !== id);
  });

  window.scrollTo(0, 0);
}

function thfC05ReturnToFiles() {
  thfC05CloseModal();

  if (typeof thfRefreshAll === "function") {
    thfRefreshAll();
  }

  if (typeof thfRefreshEvidence === "function") {
    thfRefreshEvidence();
  }

  if (typeof thfOpenCaseFiles === "function") {
    thfOpenCaseFiles();
    return;
  }

  if (document.getElementById("case-files-screen")) {
    thfC05ShowScreen("case-files-screen");
    return;
  }

  thfC05ShowScreen("far-overview-screen");
}

/* ==========================================
   04 — STORAGE
========================================== */

function thfC05Load() {
  thfC05State = thfC05Default();

  const key = thfC05Key();
  if (!key) return;

  try {
    const saved = JSON.parse(
      localStorage.getItem(key) || "null"
    );

    if (saved && typeof saved === "object") {
      thfC05State.started = saved.started === true;
      thfC05State.revealed = saved.revealed === true;

      thfC05State.hints = Number.isInteger(saved.hints)
        ? Math.max(0, Math.min(2, saved.hints))
        : 0;

      thfC05State.mistakes = Number.isInteger(saved.mistakes)
        ? Math.max(0, Math.min(2, saved.mistakes))
        : 0;

      thfC05State.event = THF_C05_EVENTS.includes(saved.event)
        ? saved.event
        : null;

      thfC05State.year = ["2025", "2026"].includes(saved.year)
        ? saved.year
        : null;

      thfC05State.commission = [
        "fraud", "ignore", "investigate"
      ].includes(saved.commission)
        ? saved.commission
        : null;

      if (saved.verified && typeof saved.verified === "object") {
        thfC05Fields().forEach(field => {
          if (
            saved.verified[field] === true &&
            thfC05State[field] !== null
          ) {
            thfC05State.verified[field] = true;
            thfC05State.results[field] =
              thfC05State[field] === THF_C05_ANSWERS[field]
                ? "correct"
                : "wrong";
          }
        });

      } else if (saved.matched || saved.completed) {
        thfC05Fields().forEach(field => {
          thfC05State[field] = THF_C05_ANSWERS[field];
          thfC05State.verified[field] = true;
          thfC05State.results[field] = "correct";
        });
      }
    }

    if (typeof thfCaseStatus === "function") {
      const record = thfCaseStatus("05");

      thfC05State.hints = Math.max(
        thfC05State.hints,
        Math.min(2, record?.hints || 0)
      );

      thfC05State.mistakes = Math.max(
        thfC05State.mistakes,
        Math.min(2, record?.mistakes || 0)
      );

      if (record?.completed) {
        thfC05Fields().forEach(field => {
          thfC05State[field] = THF_C05_ANSWERS[field];
          thfC05State.verified[field] = true;
          thfC05State.results[field] = "correct";
        });
        thfC05State.completed = true;
      }
    }

    thfC05State.matched = thfC05AllCorrect();

    if (!thfC05State.completed) {
      thfC05State.completed =
        saved?.completed === true && thfC05State.matched;
    }

    thfC05State.stage = thfC05State.completed
      ? 4
      : thfC05State.matched
        ? saved?.stage === 2 ? 2 : 3
        : saved?.stage === 2 ? 2 : 1;

  } catch (error) {
    console.warn("Case 05 load error:", error);
  }
}

function thfC05Save() {
  const key = thfC05Key();
  if (!key) return false;

  try {
    localStorage.setItem(
      key,
      JSON.stringify(thfC05State)
    );

    thfC05Set("thf-c05-save", thfC05T().save);
    return true;

  } catch (error) {
    console.error("Case 05 save error:", error);
    thfC05Set("thf-c05-save", thfC05T().saveError);
    return false;
  }
}

/* ==========================================
   05 — UNLOCK & LIVES
========================================== */

function thfC05Unlocked() {
  const profile = thfC05Profile();
  if (!profile) return false;

  if (
    typeof thfCaseStatus === "function" &&
    thfCaseStatus("04")?.completed === true
  ) {
    return true;
  }

  try {
    const saved = JSON.parse(
      localStorage.getItem(
        "thf_case04_sequence_v1_" + profile.id
      ) || "null"
    );

    return saved?.completed === true;
  } catch {
    return false;
  }
}

function thfC05Mistakes() {
  const recorded = typeof thfCaseStatus === "function"
    ? thfCaseStatus("05")?.mistakes || 0
    : 0;

  return Math.max(thfC05State.mistakes, recorded);
}

/* ==========================================
   06 — BUILD SCREEN
========================================== */

function thfC05Build() {
  const app = document.getElementById("app");
  if (!app) return false;

  let screen = document.getElementById("case05-screen");

  if (!screen) {
    screen = thfC05El(
      "section",
      "screen app-page thf-c05-screen hidden"
    );
    screen.id = "case05-screen";
    app.appendChild(screen);
  }

  if (!document.getElementById("thf-c05-content")) {
    screen.replaceChildren();

    const panel = thfC05El("div", "page-panel thf-c05-panel");
    const header = thfC05El("div", "thf-c05-header");
    const heading = thfC05El("div");

    const label = thfC05El("p", "eyebrow");
    label.id = "thf-c05-label";

    const title = thfC05El("h2", "", "The Commission Connection");

    const subtitle = thfC05El("p");
    subtitle.id = "thf-c05-subtitle";

    heading.append(label, title, subtitle);

    const exit = thfC05Button(
      "EXIT",
      thfC05Exit,
      "secondary-btn"
    );
    exit.id = "thf-c05-exit";

    header.append(heading, exit);

    const status = thfC05El("div", "thf-c05-status");
    status.id = "thf-c05-status";

    const tools = thfC05El("div", "thf-c05-tools");
    tools.id = "thf-c05-tools";

    const content = thfC05El("div");
    content.id = "thf-c05-content";

    const save = thfC05El("p", "thf-c05-small");
    save.id = "thf-c05-save";

    panel.append(header, status, tools, content, save);
    screen.appendChild(panel);
  }

  if (
    typeof screenIds !== "undefined" &&
    !screenIds.includes("case05-screen")
  ) {
    screenIds.push("case05-screen");
  }

  if (!document.getElementById("thf-c05-modal")) {
    const modal = thfC05El("div", "thf-c05-modal");
    modal.id = "thf-c05-modal";
    modal.hidden = true;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    const card = thfC05El("div", "thf-c05-modal-card");
    const modalHeader = thfC05El(
      "div",
      "thf-c05-modal-header"
    );

    const modalTitle = thfC05El("h3");
    modalTitle.id = "thf-c05-modal-title";

    const close = thfC05Button(
      "CLOSE",
      thfC05CloseModal,
      "thf-c05-close"
    );
    close.id = "thf-c05-modal-close";

    modalHeader.append(modalTitle, close);

    const body = thfC05El("div");
    body.id = "thf-c05-modal-body";

    card.append(modalHeader, body);
    modal.appendChild(card);
    document.body.appendChild(modal);

    modal.addEventListener("click", event => {
      if (event.target === modal) thfC05CloseModal();
    });

    document.addEventListener("keydown", event => {
      if (modal.hidden) return;

      if (event.key === "Escape") {
        thfC05CloseModal();
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

/* ==========================================
   07 — MODAL
========================================== */

function thfC05OpenModal(title) {
  const modal = document.getElementById("thf-c05-modal");
  if (!modal) return;

  thfC05ReturnFocus = document.activeElement;
  thfC05Set("thf-c05-modal-title", title);

  const close = document.getElementById("thf-c05-modal-close");
  if (close) close.textContent = thfC05T().close;

  modal.hidden = false;
  close?.focus();
}

function thfC05CloseModal() {
  const modal = document.getElementById("thf-c05-modal");
  if (modal) modal.hidden = true;

  if (thfC05ReturnFocus?.isConnected) {
    thfC05ReturnFocus.focus();
  }
}

/* ==========================================
   08 — EVIDENCE DOCUMENTS
========================================== */

function thfC05Paper(title, rows) {
  const paper = thfC05El("div", "thf-c05-paper");

  paper.append(
    thfC05El("p", "", "MERIDIAN HOLDINGS BERHAD"),
    thfC05El("h4", "", title)
  );

  rows.forEach(([name, value]) => {
    const row = thfC05El("div", "thf-c05-paper-row");

    row.append(
      thfC05El("span", "", name),
      thfC05El("span", "", value)
    );

    paper.appendChild(row);
  });

  return paper;
}

function thfC05Documents(container) {
  const t = thfC05T();

  const ms = t === THF_C05_TEXT.ms;

  container.appendChild(
    thfC05Paper(t.docA, [
      [ms ? "Pelanggan" : "Customer", "Northstar Retail Sdn Bhd"],
      [ms ? "Nombor Invois" : "Invoice Number", "INV-2025-3091"],
      [ms ? "Jumlah Jualan" : "Sales Amount", "RM300,000"],
      [ms ? "Tarikh Invois" : "Invoice Date", "30 December 2025"],
      [ms ? "Tarikh Pelaporan" : "Reporting Date", "31 December 2025"]
    ])
  );

  container.appendChild(
    thfC05Paper(t.docB, [
      [ms ? "Barang Keluar Gudang" : "Warehouse Dispatch", "2 January 2026"],
      [ms ? "Penerimaan Pelanggan" : "Customer Acceptance", "4 January 2026"],
      [
        ms ? "Syarat Kontrak" : "Contract Condition",
        ms
          ? "Kawalan berpindah selepas penerimaan pelanggan"
          : "Control transfers upon customer acceptance"
      ],
      [
        ms ? "Kos Jualan 2025" : "2025 Cost of Sales",
        ms
          ? "Belum direkodkan; barang masih dalam inventori penutup"
          : "Not posted; goods remain in closing inventory"
      ]
    ])
  );

  container.appendChild(
    thfC05Paper(t.docC, [
      [ms ? "Eksekutif Jualan" : "Sales Executive", "Ryan Lee · EMP-030"],
      [ms ? "Pelulus Komisen" : "Commission Approver", "Marcus Lee · EMP-001"],
      [ms ? "Hubungan" : "Relationship", ms ? "Adik-beradik" : "Brothers"],
      [ms ? "Komisen Diluluskan" : "Commission Approved", "RM18,000"],
      [ms ? "Tarikh Kelulusan" : "Approval Date", "30 December 2025"],
      [
        ms ? "Status Belanja / Bayaran" : "Expense / Payment Status",
        ms ? "Belum dipastikan" : "Not established"
      ]
    ])
  );

  const policy = thfC05El("div", "thf-c05-paper");
  policy.append(
    thfC05El("h4", "", t.docD),
    thfC05El("p", "", t.policy)
  );

  container.appendChild(policy);
}

function thfC05ViewEvidence() {
  const body = document.getElementById("thf-c05-modal-body");
  if (!body) return;

  body.replaceChildren();

  body.appendChild(
    thfC05El("p", "thf-c05-small", thfC05T().evidenceFree)
  );

  thfC05Documents(body);
  thfC05OpenModal(thfC05T().evidenceTitle);
}

/* ==========================================
   09 — HINTS
========================================== */

function thfC05SaveHints(level) {
  if (thfC05State.matched || thfC05State.completed) return;

  const target = Math.max(
    thfC05State.hints,
    Math.min(2, level)
  );

  if (
    typeof thfLoadProgress === "function" &&
    typeof thfSaveProgress === "function" &&
    typeof thfGetCase === "function"
  ) {
    const progress = thfLoadProgress();
    const record = thfGetCase(progress, "05");

    if (record && !record.completed) {
      record.hints = Math.max(record.hints || 0, target);
      thfSaveProgress(progress);
    }
  }

  thfC05State.hints = target;
  thfC05Save();
}

function thfC05UnlockHint(level) {
  if (thfC05State.matched) return;
  if (level === 2 && thfC05State.hints < 1) return;

  thfC05SaveHints(level);
  thfC05RenderHints();
  thfC05RenderTools();
}

function thfC05RenderHints() {
  const t = thfC05T();
  const body = document.getElementById("thf-c05-modal-body");
  if (!body) return;

  body.replaceChildren();

  body.appendChild(
    thfC05El("p", "thf-c05-small", t.hintRule)
  );

  if (thfC05State.matched) {
    body.appendChild(
      thfC05FeedbackBox(t.hintDone, true)
    );
  }

  [1, 2].forEach(level => {
    const unlocked = thfC05State.hints >= level;
    const card = thfC05El("div", "thf-c05-hint");

    card.appendChild(
      thfC05El(
        "h4",
        "",
        level === 1 ? t.hint1Title : t.hint2Title
      )
    );

    if (unlocked) {
      const formula = thfC05El(
        "div",
        "thf-c05-formula",
        level === 1 ? t.hint1Formula : t.hint2Formula
      );
      formula.style.whiteSpace = "pre-line";

      card.append(
        thfC05El(
          "p",
          "",
          level === 1 ? t.hint1Text : t.hint2Text
        ),
        formula
      );

    } else if (!thfC05State.matched) {
      const button = thfC05Button(
        level === 1 ? t.hint1Action : t.hint2Action,
        () => thfC05UnlockHint(level),
        "secondary-btn"
      );

      if (level === 2 && thfC05State.hints < 1) {
        button.disabled = true;
        button.title = t.hintLocked;
      }

      card.appendChild(button);
    }

    body.appendChild(card);
  });
}

function thfC05OpenHints() {
  thfC05RenderHints();
  thfC05OpenModal(thfC05T().hintsTitle);
}

function thfC05RenderTools() {
  const tools = document.getElementById("thf-c05-tools");
  if (!tools) return;

  tools.replaceChildren();

  if (thfC05State.stage >= 2) {
    const t = thfC05T();

    tools.append(
      thfC05Button(
        t.evidenceBtn,
        thfC05ViewEvidence,
        "secondary-btn"
      ),
      thfC05Button(
        t.hintBtn + " (" + thfC05State.hints + "/2)",
        thfC05OpenHints,
        "secondary-btn"
      )
    );
  }
}

/* ==========================================
   10 — OPEN / EXIT
========================================== */

function thfCase05Open() {
  if (!thfC05Profile()) {
    thfC05ShowScreen("profile-screen");
    return;
  }

  if (!thfC05Unlocked()) {
    alert(thfC05T().locked);
    return;
  }

  if (!thfC05Init()) return;

  thfC05Load();
  thfC05State.started = true;
  thfC05Save();

  thfC05Feedback = "";
  thfC05FeedbackSuccess = false;

  thfC05Render();
  thfC05ShowScreen("case05-screen");
}

function thfC05Exit() {
  if (!window.confirm(thfC05T().exitConfirm)) return;

  thfC05Save();
  thfC05ReturnToFiles();
}

/* ==========================================
   11 — INTRODUCTION
========================================== */

function thfC05RenderIntro(container) {
  const t = thfC05T();
  const box = thfC05El("div", "thf-c05-box");

  box.append(
    thfC05El("h3", "", t.introTitle),
    thfC05El("p", "", t.intro),
    thfC05FeedbackBox("👩‍💼 ALYA RAHMAN\n" + t.alya, true)
  );

  thfC05Documents(box);

  box.appendChild(
    thfC05Actions(
      thfC05Button(t.begin, () => {
        thfC05State.stage = 2;
        thfC05Save();
        thfC05Render();
      })
    )
  );

  container.appendChild(box);
}

/* ==========================================
   12 — ANSWER STATUS
========================================== */

function thfC05QuestionStatus(field) {
  const t = thfC05T();

  if (thfC05IsCorrect(field)) {
    return ["correct", t.correctLabel];
  }

  if (thfC05IsWrong(field)) {
    return ["wrong", t.wrongLabel];
  }

  if (thfC05State[field] !== null) {
    return ["pending", t.pendingLabel];
  }

  return null;
}

function thfC05StatusLabel(field) {
  const status = thfC05QuestionStatus(field);
  if (!status) return null;

  return thfC05El(
    "div",
    "thf-c05-question-status " + status[0],
    status[1]
  );
}

function thfC05SelectedClass(field, value) {
  if (thfC05State[field] !== value) return "";

  if (thfC05IsCorrect(field)) return " selected correct";
  if (thfC05IsWrong(field)) return " selected wrong";

  return " selected";
}

function thfC05Choose(field, value) {
  if (thfC05State.matched || thfC05IsCorrect(field)) return;

  thfC05State[field] = value;
  thfC05State.verified[field] = false;
  thfC05State.results[field] = null;

  thfC05Feedback = "";
  thfC05FeedbackSuccess = false;

  thfC05Save();
  thfC05Render();
}

function thfC05Choice(field, value, label) {
  const selected = thfC05State[field] === value;

  const button = thfC05Button(
    label,
    () => thfC05Choose(field, value),
    "thf-c05-choice" + thfC05SelectedClass(field, value)
  );

  button.setAttribute("aria-pressed", String(selected));
  button.dataset.c05Choice = value;

  if (selected && thfC05IsCorrect(field)) {
    button.dataset.result = "correct";
  }

  if (selected && thfC05IsWrong(field)) {
    button.dataset.result = "wrong";
  }

  button.disabled =
    thfC05IsCorrect(field) || thfC05State.matched;

  return button;
}

/* ==========================================
   13 — VERIFY FINDINGS
========================================== */

function thfC05Verify() {
  if (thfC05State.matched) return;

  const t = thfC05T();

  const missing = thfC05Fields().some(field => {
    return (
      !thfC05IsCorrect(field) &&
      thfC05State[field] === null
    );
  });

  if (missing) {
    thfC05Feedback = t.missing;
    thfC05FeedbackSuccess = false;
    thfC05Render();
    return;
  }

  const incorrect = thfC05Fields().some(field => {
    return (
      !thfC05IsCorrect(field) &&
      thfC05State[field] !== THF_C05_ANSWERS[field]
    );
  });

  const before = thfC05Mistakes();

  // Check life availability before recording a wrong attempt.
  if (
    incorrect &&
    typeof thfRequireLife === "function" &&
    !thfRequireLife()
  ) {
    thfC05Feedback = t.noLives;
    thfC05FeedbackSuccess = false;
    thfC05Render();
    return;
  }

  thfC05Fields().forEach(field => {
    if (thfC05IsCorrect(field)) return;

    thfC05State.verified[field] = true;
    thfC05State.results[field] =
      thfC05State[field] === THF_C05_ANSWERS[field]
        ? "correct"
        : "wrong";
  });

  if (thfC05AllCorrect()) {
    thfC05State.matched = true;
    thfC05Feedback = t.correct;
    thfC05FeedbackSuccess = true;

    thfC05Save();
    thfC05Render();
    return;
  }

  if (typeof thfRegisterMistake === "function") {
    thfRegisterMistake("05");
  } else {
    thfC05State.mistakes = Math.min(
      2,
      thfC05State.mistakes + 1
    );
  }

  const after = thfC05Mistakes();

  if (after <= before) {
    thfC05Feedback = t.noLives;
    thfC05FeedbackSuccess = false;
    thfC05Save();
    thfC05Render();
    return;
  }

  thfC05State.mistakes = Math.max(
    thfC05State.mistakes,
    after
  );

  if (after >= 2) {
    thfC05Fields().forEach(field => {
      thfC05State[field] = THF_C05_ANSWERS[field];
      thfC05State.verified[field] = true;
      thfC05State.results[field] = "correct";
    });

    thfC05State.matched = true;
    thfC05State.revealed = true;
    thfC05Feedback = t.reveal;

  } else {
    thfC05Feedback = t.wrong + "\n" + t.secondTry;
  }

  thfC05FeedbackSuccess = false;
  thfC05Save();
  thfC05Render();
}

/* ==========================================
   14 — PUZZLE UI
========================================== */

function thfC05RenderQuestionHeader(container, title, field) {
  container.appendChild(
    thfC05El("div", "thf-c05-question", title)
  );

  const status = thfC05StatusLabel(field);
  if (status) container.appendChild(status);
}

function thfC05RenderPuzzle(container) {
  const t = thfC05T();
  const box = thfC05El("div", "thf-c05-box");

  box.append(
    thfC05El("h3", "", t.puzzleTitle),
    thfC05El("p", "", t.puzzleText)
  );

  box.appendChild(
    thfC05FeedbackBox(
      t.progress + ": " + thfC05CorrectCount() + " / 3",
      thfC05AllCorrect()
    )
  );

  // QUESTION 1 — TIMELINE

  thfC05RenderQuestionHeader(box, t.q1, "event");

  const timeline = thfC05El("div", "thf-c05-timeline");

  t.events.forEach(([date, description], index) => {
    const id = THF_C05_EVENTS[index];
    const selected = thfC05State.event === id;

    const event = thfC05Button(
      "",
      () => thfC05Choose("event", id),
      "thf-c05-event" + thfC05SelectedClass("event", id)
    );

    event.append(
      thfC05El("strong", "", date),
      thfC05El("span", "", description)
    );

    event.setAttribute("aria-pressed", String(selected));

    if (selected && thfC05IsCorrect("event")) {
      event.dataset.result = "correct";
    }

    if (selected && thfC05IsWrong("event")) {
      event.dataset.result = "wrong";
    }

    event.disabled =
      thfC05IsCorrect("event") || thfC05State.matched;

    timeline.appendChild(event);
  });

  box.appendChild(timeline);

  // QUESTION 2 — REVENUE YEAR

  thfC05RenderQuestionHeader(box, t.q2, "year");

  const years = thfC05El("div", "thf-c05-choice-grid");

  t.years.forEach(([value, label]) => {
    years.appendChild(
      thfC05Choice("year", value, label)
    );
  });

  box.appendChild(years);

  // QUESTION 3 — COMMISSION

  thfC05RenderQuestionHeader(box, t.q3, "commission");

  const commissions = thfC05El(
    "div",
    "thf-c05-choice-grid"
  );

  t.commissionChoices.forEach(([value, label]) => {
    commissions.appendChild(
      thfC05Choice("commission", value, label)
    );
  });

  box.appendChild(commissions);

  // FEEDBACK

  if (thfC05Feedback) {
    box.appendChild(
      thfC05FeedbackBox(
        thfC05Feedback,
        thfC05FeedbackSuccess
      )
    );
  }

  // ACTIONS

  if (thfC05State.matched) {
    box.appendChild(
      thfC05Actions(
        thfC05Button(t.next, () => {
          thfC05State.stage = 3;
          thfC05Feedback = "";
          thfC05Save();
          thfC05Render();
        })
      )
    );
  } else {
    box.appendChild(
      thfC05Actions(
        thfC05Button(t.verify, thfC05Verify)
      )
    );
  }

  container.appendChild(box);
}

/* ==========================================
   15 — SUBMIT REPORT
========================================== */

function thfC05Submit() {
  if (!thfC05State.matched || thfC05State.completed) return;

  if (typeof thfCompleteCase !== "function") {
    console.error("Case 05: Progress system unavailable.");
    return;
  }

  const record = thfCompleteCase("05");

  if (!record?.completed) {
    console.error("Case 05: Completion was not saved.");
    return;
  }

  thfC05State.completed = true;
  thfC05State.stage = 4;

  thfC05Save();
  thfC05Render();

  if (typeof thfRefreshAll === "function") {
    thfRefreshAll();
  }

  if (typeof thfRefreshEvidence === "function") {
    thfRefreshEvidence();
  }
}

/* ==========================================
   16 — CASE REPORT
========================================== */

function thfC05RenderReport(container, completed) {
  const t = thfC05T();
  const box = thfC05El("div", "thf-c05-box");

  box.append(
    thfC05El(
      "h3",
      "",
      completed ? t.completeTitle : t.reportTitle
    ),
    thfC05El(
      "p",
      "",
      completed ? t.completeText : t.reportIntro
    )
  );

  t.findings.forEach(([title, description]) => {
    const card = thfC05El("div", "thf-c05-finding");

    card.append(
      thfC05El("strong", "", title),
      thfC05El("p", "", description)
    );

    box.appendChild(card);
  });

  if (completed) {
    const record = typeof thfCaseStatus === "function"
      ? thfCaseStatus("05")
      : null;

    const result = thfC05El("div", "thf-c05-result");

    result.append(
      thfC05El("p", "", t.score),
      thfC05El("strong", "", "+" + (record?.xp ?? 0) + " XP"),
      thfC05El("p", "", t.replay)
    );

    box.appendChild(result);

    box.appendChild(
      thfC05Actions(
        thfC05Button(
          t.files,
          thfC05ReturnToFiles
        )
      )
    );

  } else {
    box.appendChild(
      thfC05Actions(
        thfC05Button(t.submit, thfC05Submit)
      )
    );
  }

  container.appendChild(box);
}

/* ==========================================
   17 — MAIN RENDER
========================================== */

function thfC05Render() {
  const t = thfC05T();

  thfC05Set("thf-c05-label", t.label);
  thfC05Set("thf-c05-subtitle", t.subtitle);
  thfC05Set("thf-c05-exit", t.exit);
  thfC05Set("thf-c05-save", t.save);

  const status = document.getElementById("thf-c05-status");
  const content = document.getElementById("thf-c05-content");

  if (!status || !content) return;

  status.replaceChildren();
  content.replaceChildren();

  [t.stage1, t.stage2, t.stage3].forEach((label, index) => {
    const step = thfC05El("span", "", label);

    if (index + 1 === Math.min(thfC05State.stage, 3)) {
      step.style.borderColor = "#d9b66f";
      step.style.background = "#35435a";
    }

    status.appendChild(step);
  });

  thfC05RenderTools();

  if (thfC05State.completed) {
    thfC05RenderReport(content, true);

  } else if (thfC05State.stage === 1) {
    thfC05RenderIntro(content);

  } else if (thfC05State.stage === 2) {
    thfC05RenderPuzzle(content);

  } else {
    thfC05RenderReport(content, false);
  }
}

/* ==========================================
   18 — INITIALISE
========================================== */

function thfC05Init() {
  if (
    thfC05Ready &&
    document.getElementById("thf-c05-content")
  ) {
    return true;
  }

  thfC05Ready = thfC05Build();
  return thfC05Ready;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", thfC05Init);
} else {
  thfC05Init();
}

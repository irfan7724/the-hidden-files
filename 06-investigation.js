
/* ========================================
   THE HIDDEN FILES
   06 - INVESTIGATION DESK
======================================== */

"use strict";

screenIds.push("investigation-screen");

const INV_SAVE_PREFIX = "thf_case01_investigation_v1_";

const INV_DOCUMENTS = [
  { id: "invoice", icon: "📄" },
  { id: "ledger", icon: "📒" },
  { id: "asset", icon: "🗂️" }
];

const INV_CLUES = [
  "invoice-date",
  "invoice-item",
  "ledger-entry",
  "asset-usage"
];

const INV_TEXT = {
  en: {
    caseLabel: "CASE 01 / 10",
    title: "The Invoice Trap",
    subtitle: "Meridian Holdings Berhad · FY2025",
    exit: "EXIT",
    clueCounter: "CLUES",
    deductionLocked: "DEDUCTION: LOCKED",
    deductionReady: "DEDUCTION: READY",
    deductionSolved: "DEDUCTION: SOLVED",
    intro:
      "A RM50,000 supplier invoice has been flagged during the review of Meridian's 2025 financial statements. Examine the original invoice, accounting ledger and asset records. Then speak to Alya before making your deduction.",
    evidenceHeading: "Evidence Files",
    evidenceHelp:
      "Open each document and tap the highlighted information to collect clues.",
    witnessHeading: "Witness Interview",
    boardHeading: "Evidence Board",
    notFound: "NOT YET DISCOVERED",
    found: "EVIDENCE FOUND",
    open: "OPEN DOCUMENT",
    reviewed: "CLUE COLLECTED",
    close: "CLOSE",
    inspect: "🔎 Collect this clue",
    collected: "✓ Clue collected",
    interview: "INTERVIEW ALYA",
    interviewed: "✓ Interview completed",
    alyaName: "ALYA RAHMAN",
    alyaIntro:
      "Alya is waiting to discuss the suspicious invoice.",
    alyaStatement:
      "The invoice shows a machine acquired for production use. Compare what was purchased with how the accountant recorded it. Focus on the nature of the item, not just the amount paid.",
    clueTitles: [
      "Invoice Date",
      "Nature of Purchase",
      "Ledger Classification",
      "Asset Usage"
    ],
    clueDescriptions: [
      "The invoice is dated 2 January 2025.",
      "The RM50,000 purchase is production machinery.",
      "The full RM50,000 was debited to Office Expense.",
      "The machine was available for use from 1 January 2025."
    ],
    documents: {
      invoice: "Supplier Invoice",
      ledger: "General Ledger",
      asset: "Asset Register"
    },
    deductionTitle: "MINI DEDUCTION",
    deductionQuestion:
      "Based on the evidence, what is the most likely accounting issue?",
    deductionWait:
      "Collect all four clues and interview Alya to unlock the deduction.",
    choices: [
      "The machinery purchase was incorrectly recorded as an expense.",
      "The company failed to record a cash sale.",
      "The supplier invoice must be deleted because it is suspicious."
    ],
    incorrect:
      "Not quite. Review the nature of the machinery and the ledger classification. Try again — no penalty.",
    correct:
      "Correct! Production machinery is a non-current asset when the recognition criteria are met. The RM50,000 cost was incorrectly charged to Office Expense. The next step is to investigate the appropriate correction and depreciation.",
    completed:
      "Investigation stage complete. The interactive Find the Error puzzle will be added in the next step.",
    returnOverview: "RETURN TO SEASON OVERVIEW",
    entryStart: "OPEN CASE 01 — INVESTIGATION DESK",
    entryResume: "CONTINUE CASE 01 — INVESTIGATION DESK",
    entryDone: "REVIEW CASE 01 — INVESTIGATION DESK",
    locked:
      "🔒 Complete the Season 01 prologue first to unlock Case 01.",
    exitConfirm:
      "Return to Season Overview? Your investigation progress will be saved.",
    saveFailed:
      "Warning: progress could not be saved in this browser.",
    saveReady: "Progress saves automatically on this device.",
    docCompany: "MERIDIAN HOLDINGS BERHAD",
    docInvoice: "SUPPLIER INVOICE",
    docLedger: "GENERAL LEDGER EXTRACT",
    docAsset: "FIXED ASSET REGISTER",
    invoiceNumber: "Invoice No.",
    invoiceDate: "Invoice Date",
    supplier: "Supplier",
    item: "Item",
    amount: "Amount",
    total: "Total",
    ledgerDate: "Posting Date",
    ledgerAccount: "Account",
    debit: "Debit",
    credit: "Credit",
    assetDescription: "Asset Description",
    availableDate: "Available for Use",
    estimatedLife: "Estimated Useful Life",
    residualValue: "Residual Value",
    years: "5 years",
    invoiceHint: "Select both highlighted invoice details.",
    ledgerHint: "Select the highlighted ledger entry.",
    assetHint: "Select the highlighted availability date."
  },

  ms: {
    caseLabel: "KES 01 / 10",
    title: "The Invoice Trap",
    subtitle: "Meridian Holdings Berhad · Tahun Kewangan 2025",
    exit: "KELUAR",
    clueCounter: "PETUNJUK",
    deductionLocked: "DEDUKSI: TERKUNCI",
    deductionReady: "DEDUKSI: TERSEDIA",
    deductionSolved: "DEDUKSI: SELESAI",
    intro:
      "Invois pembekal bernilai RM50,000 telah ditandakan semasa semakan penyata kewangan Meridian bagi tahun 2025. Periksa invois asal, lejar perakaunan dan rekod aset. Kemudian temu bual Alya sebelum membuat deduksi.",
    evidenceHeading: "Fail Bukti",
    evidenceHelp:
      "Buka setiap dokumen dan tekan maklumat yang ditandakan untuk mengumpul petunjuk.",
    witnessHeading: "Temu Bual Saksi",
    boardHeading: "Papan Bukti",
    notFound: "BELUM DITEMUI",
    found: "BUKTI DITEMUI",
    open: "BUKA DOKUMEN",
    reviewed: "PETUNJUK DIKUMPUL",
    close: "TUTUP",
    inspect: "🔎 Kumpul petunjuk ini",
    collected: "✓ Petunjuk dikumpul",
    interview: "TEMU BUAL ALYA",
    interviewed: "✓ Temu bual selesai",
    alyaName: "ALYA RAHMAN",
    alyaIntro:
      "Alya sedang menunggu untuk membincangkan invois yang mencurigakan.",
    alyaStatement:
      "Invois menunjukkan sebuah mesin yang dibeli untuk kegunaan pengeluaran. Bandingkan barang yang dibeli dengan cara akauntan merekodkannya. Fokus pada sifat aset, bukan hanya jumlah yang dibayar.",
    clueTitles: [
      "Tarikh Invois",
      "Jenis Pembelian",
      "Klasifikasi Lejar",
      "Penggunaan Aset"
    ],
    clueDescriptions: [
      "Invois bertarikh 2 Januari 2025.",
      "Pembelian RM50,000 ialah mesin pengeluaran.",
      "Keseluruhan RM50,000 didebitkan kepada Belanja Pejabat.",
      "Mesin tersedia untuk digunakan mulai 1 Januari 2025."
    ],
    documents: {
      invoice: "Invois Pembekal",
      ledger: "Lejar Am",
      asset: "Daftar Aset"
    },
    deductionTitle: "DEDUKSI MINI",
    deductionQuestion:
      "Berdasarkan bukti, apakah isu perakaunan yang paling mungkin berlaku?",
    deductionWait:
      "Kumpul keempat-empat petunjuk dan temu bual Alya untuk membuka deduksi.",
    choices: [
      "Pembelian mesin tersalah direkodkan sebagai belanja.",
      "Syarikat gagal merekodkan jualan tunai.",
      "Invois pembekal mesti dipadam kerana mencurigakan."
    ],
    incorrect:
      "Belum tepat. Semak semula jenis mesin dan klasifikasi dalam lejar. Cuba lagi — tiada penalti.",
    correct:
      "Betul! Mesin pengeluaran ialah aset bukan semasa apabila memenuhi kriteria pengiktirafan. Kos RM50,000 tersalah direkodkan sebagai Belanja Pejabat. Langkah seterusnya ialah menyiasat pembetulan dan susut nilai.",
    completed:
      "Peringkat penyiasatan selesai. Puzzle Find the Error akan ditambah dalam langkah seterusnya.",
    returnOverview: "KEMBALI KE PILIHAN KES",
    entryStart: "BUKA KES 01 — MEJA PENYIASATAN",
    entryResume: "SAMBUNG KES 01 — MEJA PENYIASATAN",
    entryDone: "SEMAK SEMULA KES 01 — MEJA PENYIASATAN",
    locked:
      "🔒 Selesaikan prolog Season 01 dahulu untuk membuka Kes 01.",
    exitConfirm:
      "Kembali ke pilihan kes? Kemajuan penyiasatan akan disimpan.",
    saveFailed:
      "Amaran: kemajuan tidak dapat disimpan dalam browser ini.",
    saveReady: "Kemajuan disimpan secara automatik pada peranti ini.",
    docCompany: "MERIDIAN HOLDINGS BERHAD",
    docInvoice: "INVOIS PEMBEKAL",
    docLedger: "PETIKAN LEJAR AM",
    docAsset: "DAFTAR ASET TETAP",
    invoiceNumber: "No. Invois",
    invoiceDate: "Tarikh Invois",
    supplier: "Pembekal",
    item: "Item",
    amount: "Amaun",
    total: "Jumlah",
    ledgerDate: "Tarikh Catatan",
    ledgerAccount: "Akaun",
    debit: "Debit",
    credit: "Kredit",
    assetDescription: "Penerangan Aset",
    availableDate: "Tersedia Untuk Digunakan",
    estimatedLife: "Anggaran Hayat Berguna",
    residualValue: "Nilai Sisa",
    years: "5 tahun",
    invoiceHint: "Pilih kedua-dua maklumat invois yang ditandakan.",
    ledgerHint: "Pilih catatan lejar yang ditandakan.",
    assetHint: "Pilih tarikh penggunaan aset yang ditandakan."
  }
};

let invState = {
  clues: [],
  interviewed: false,
  solved: false
};

let invCurrentDocument = null;
let invModalReturnFocus = null;

// ========================================
// HELPERS
// ========================================

function invProfile() {
  return typeof getActiveDetective === "function"
    ? getActiveDetective()
    : null;
}

function invLang() {
  const profile = invProfile();
  return profile &&
    typeof getProfileLanguage === "function"
    ? getProfileLanguage(profile)
    : "en";
}

function invT() {
  return INV_TEXT[invLang()];
}

function invSet(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function invElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function invButton(text, handler, className = "primary-btn") {
  const button = invElement("button", className, text);
  button.type = "button";
  button.addEventListener("click", handler);
  return button;
}

function invSaveKey() {
  const profile = invProfile();
  return profile ? INV_SAVE_PREFIX + profile.id : null;
}

function invDefaultState() {
  return {
    clues: [],
    interviewed: false,
    solved: false
  };
}

function invLoad() {
  invState = invDefaultState();

  const key = invSaveKey();
  if (!key) return;

  try {
    const saved = JSON.parse(
      localStorage.getItem(key) || "null"
    );

    if (!saved || typeof saved !== "object") return;

    invState.clues = Array.isArray(saved.clues)
      ? INV_CLUES.filter(id => saved.clues.includes(id))
      : [];

    invState.interviewed = saved.interviewed === true;
    invState.solved = saved.solved === true;
  } catch (error) {
    console.warn("Investigation save error:", error);
  }
}

function invSave() {
  const key = invSaveKey();
  if (!key) return false;

  try {
    localStorage.setItem(key, JSON.stringify(invState));
    invSet("inv-save-notice", invT().saveReady);
    return true;
  } catch (error) {
    console.error("Investigation save failed:", error);
    invSet("inv-save-notice", invT().saveFailed);
    return false;
  }
}

function invPrologueCompleted() {
  const profile = invProfile();
  if (!profile) return false;

  try {
    const key = "thf_story_s1_v1_" + profile.id;
    const saved = JSON.parse(
      localStorage.getItem(key) || "null"
    );
    return saved?.completed === true;
  } catch (error) {
    return false;
  }
}

function invHasClue(id) {
  return invState.clues.includes(id);
}

function invAllReady() {
  return invState.clues.length === INV_CLUES.length &&
    invState.interviewed;
}

// ========================================
// SEASON OVERVIEW ENTRY
// ========================================

function invRenderEntry() {
  const area = document.getElementById(
    "investigation-entry-area"
  );
  if (!area) return;

  area.replaceChildren();

  const t = invT();

  if (!invPrologueCompleted()) {
    area.appendChild(
      invElement("p", "inv-entry-locked", t.locked)
    );
    return;
  }

  invLoad();

  const hasProgress =
    invState.clues.length > 0 || invState.interviewed;

  const label = invState.solved
    ? t.entryDone
    : hasProgress
      ? t.entryResume
      : t.entryStart;

  area.appendChild(
    invButton(
      label,
      invOpen,
      "primary-btn inv-entry-button"
    )
  );
}

// ========================================
// OPEN / EXIT
// ========================================

function invOpen() {
  if (!invProfile()) {
    showScreen("profile-screen");
    return;
  }

  if (!invPrologueCompleted()) {
    invRenderEntry();
    showScreen("far-overview-screen");
    return;
  }

  invLoad();
  invRender();
  showScreen("investigation-screen");
}

function invExit() {
  if (!window.confirm(invT().exitConfirm)) return;

  invSave();
  invCloseDocument();
  invRenderEntry();
  showScreen("far-overview-screen");
}

// ========================================
// CLUE COLLECTION
// ========================================

function invCollectClue(id) {
  if (!INV_CLUES.includes(id)) return;
  if (invHasClue(id)) return;

  invState.clues.push(id);
  invSave();
  invRender();

  if (invCurrentDocument) {
    invRenderDocument(invCurrentDocument);
  }
}

// ========================================
// DOCUMENT HTML BUILDERS
// ========================================

function invPaperTitle(title) {
  const paper = invElement("div", "inv-paper");
  paper.appendChild(
    invElement("p", "", invT().docCompany)
  );
  paper.appendChild(invElement("h3", "", title));
  return paper;
}

function invAddRow(table, cells, header = false) {
  const row = document.createElement("tr");

  cells.forEach(value => {
    const cell = document.createElement(
      header ? "th" : "td"
    );
    cell.textContent = value;
    row.appendChild(cell);
  });

  table.appendChild(row);
}

function invAddClueButton(paper, clueId, detail) {
  const found = invHasClue(clueId);
  const t = invT();

  const button = invButton(
    (found ? t.collected : t.inspect) + " — " + detail,
    () => invCollectClue(clueId),
    "inv-find-btn"
  );

  button.disabled = found;
  paper.appendChild(button);
}

function invBuildInvoice() {
  const t = invT();
  const paper = invPaperTitle(t.docInvoice);

  paper.appendChild(
    invElement("p", "", t.invoiceNumber + ": INV-2025-001")
  );
  paper.appendChild(
    invElement("p", "", t.supplier + ": Apex Machinery Sdn. Bhd.")
  );

  const table = document.createElement("table");
  invAddRow(table, [t.item, t.amount], true);
  invAddRow(table, ["Production Machine", "RM50,000"]);
  invAddRow(table, [t.total, "RM50,000"]);

  paper.appendChild(table);

  invAddClueButton(
    paper,
    "invoice-date",
    t.invoiceDate + ": 2 January 2025"
  );

  invAddClueButton(
    paper,
    "invoice-item",
    "Production Machine — RM50,000"
  );

  paper.appendChild(
    invElement("p", "", t.invoiceHint)
  );

  return paper;
}

function invBuildLedger() {
  const t = invT();
  const paper = invPaperTitle(t.docLedger);

  paper.appendChild(
    invElement(
      "p",
      "",
      "Journal Ref: GL-2025-014 | " +
      t.ledgerDate + ": 2 January 2025"
    )
  );

  const table = document.createElement("table");

  invAddRow(
    table,
    [t.ledgerAccount, t.debit, t.credit],
    true
  );

  invAddRow(
    table,
    ["Office Expense", "RM50,000", "—"]
  );

  invAddRow(
    table,
    ["Accounts Payable", "—", "RM50,000"]
  );

  paper.appendChild(table);

  invAddClueButton(
    paper,
    "ledger-entry",
    "Dr Office Expense RM50,000"
  );

  paper.appendChild(
    invElement("p", "", t.ledgerHint)
  );

  return paper;
}

function invBuildAsset() {
  const t = invT();
  const paper = invPaperTitle(t.docAsset);

  const table = document.createElement("table");

  invAddRow(table, ["Field", "Details"], true);
  invAddRow(
    table,
    [t.assetDescription, "Production Machine"]
  );
  invAddRow(
    table,
    [t.availableDate, "1 January 2025"]
  );
  invAddRow(
    table,
    [t.estimatedLife, t.years]
  );
  invAddRow(
    table,
    [t.residualValue, "RM5,000"]
  );

  paper.appendChild(table);

  invAddClueButton(
    paper,
    "asset-usage",
    t.availableDate + ": 1 January 2025"
  );

  paper.appendChild(
    invElement("p", "", t.assetHint)
  );

  return paper;
}

// ========================================
// DOCUMENT VIEWER
// ========================================

function invOpenDocument(id) {
  if (!INV_DOCUMENTS.some(doc => doc.id === id)) return;

  invCurrentDocument = id;
  invModalReturnFocus = document.activeElement;
  invRenderDocument(id);

  document.getElementById(
    "inv-document-modal"
  ).classList.remove("hidden");

  document.getElementById(
    "inv-document-close"
  ).focus();
}

function invRenderDocument(id) {
  const t = invT();

  invSet("inv-document-title", t.documents[id]);
  invSet("inv-document-close", t.close);

  const body = document.getElementById(
    "inv-document-body"
  );
  body.replaceChildren();

  if (id === "invoice") {
    body.appendChild(invBuildInvoice());
  } else if (id === "ledger") {
    body.appendChild(invBuildLedger());
  } else if (id === "asset") {
    body.appendChild(invBuildAsset());
  }
}

function invCloseDocument() {
  const modal = document.getElementById(
    "inv-document-modal"
  );

  modal.classList.add("hidden");
  invCurrentDocument = null;

  if (
    invModalReturnFocus &&
    document.contains(invModalReturnFocus)
  ) {
    invModalReturnFocus.focus();
  }

  invModalReturnFocus = null;
}

// ========================================
// WITNESS INTERVIEW
// ========================================

function invInterviewAlya() {
  if (invState.interviewed) return;

  invState.interviewed = true;
  invSave();
  invRender();
}

// ========================================
// MINI DEDUCTION
// ========================================

function invChooseDeduction(index) {
  const feedback = document.getElementById(
    "inv-deduction-feedback"
  );

  if (index !== 0) {
    feedback.textContent = invT().incorrect;
    feedback.className = "inv-feedback";
    return;
  }

  invState.solved = true;
  invSave();
  invRender();
}

function invRenderDeduction() {
  const t = invT();
  const area = document.getElementById(
    "inv-deduction-area"
  );

  area.replaceChildren();

  area.appendChild(
    invElement("h3", "", t.deductionTitle)
  );

  if (!invAllReady()) {
    area.appendChild(
      invElement("p", "", t.deductionWait)
    );
    return;
  }

  area.appendChild(
    invElement("p", "", t.deductionQuestion)
  );

  if (invState.solved) {
    area.appendChild(
      invElement(
        "p",
        "inv-feedback inv-success",
        t.correct
      )
    );

    area.appendChild(
      invElement("p", "", t.completed)
    );

    area.appendChild(
      invButton(
        t.returnOverview,
        () => {
          invSave();
          invRenderEntry();
          showScreen("far-overview-screen");
        }
      )
    );

    return;
  }

  const choices = invElement("div", "inv-choice-list");

  t.choices.forEach((choice, index) => {
    choices.appendChild(
      invButton(
        choice,
        () => invChooseDeduction(index),
        "inv-choice"
      )
    );
  });

  area.appendChild(choices);

  const feedback = invElement(
    "p",
    "inv-feedback hidden",
    ""
  );
  feedback.id = "inv-deduction-feedback";

  area.appendChild(feedback);
}

// ========================================
// MAIN RENDER
// ========================================

function invRender() {
  const t = invT();

  invSet("inv-case-label", t.caseLabel);
  invSet("inv-title", t.title);
  invSet("inv-subtitle", t.subtitle);
  invSet("inv-exit-btn", t.exit);
  invSet("inv-intro", t.intro);
  invSet("inv-evidence-heading", t.evidenceHeading);
  invSet("inv-evidence-help", t.evidenceHelp);
  invSet("inv-witness-heading", t.witnessHeading);
  invSet("inv-board-heading", t.boardHeading);
  invSet("inv-save-notice", t.saveReady);

  invSet(
    "inv-clue-counter",
    t.clueCounter + " " +
    invState.clues.length + " / " + INV_CLUES.length
  );

  invSet(
    "inv-deduction-status",
    invState.solved
      ? t.deductionSolved
      : invAllReady()
        ? t.deductionReady
        : t.deductionLocked
  );

  // Documents
  const documentList = document.getElementById(
    "inv-document-list"
  );
  documentList.replaceChildren();

  INV_DOCUMENTS.forEach(doc => {
    const card = invButton(
      "",
      () => invOpenDocument(doc.id),
      "inv-document-card"
    );

    card.appendChild(
      invElement("span", "inv-document-icon", doc.icon)
    );

    card.appendChild(
      invElement(
        "span",
        "inv-document-name",
        t.documents[doc.id]
      )
    );

    const docClues = doc.id === "invoice"
      ? ["invoice-date", "invoice-item"]
      : doc.id === "ledger"
        ? ["ledger-entry"]
        : ["asset-usage"];

    const foundCount = docClues.filter(
      id => invHasClue(id)
    ).length;

    card.appendChild(
      invElement(
        "span",
        "inv-document-status",
        foundCount + " / " + docClues.length +
        " · " + t.open
      )
    );

    documentList.appendChild(card);
  });

  // Witness
  const witnessArea = document.getElementById(
    "inv-witness-area"
  );
  witnessArea.replaceChildren();

  const witnessCard = invElement(
    "div",
    "inv-witness-card"
  );

  witnessCard.appendChild(
    invElement("div", "inv-witness-avatar", "👩‍💼")
  );

  const witnessInfo = invElement(
    "div",
    "inv-witness-info"
  );

  witnessInfo.appendChild(
    invElement("strong", "", t.alyaName)
  );

  witnessInfo.appendChild(
    invElement(
      "p",
      "",
      invState.interviewed
        ? t.alyaStatement
        : t.alyaIntro
    )
  );

  const interviewButton = invButton(
    invState.interviewed
      ? t.interviewed
      : t.interview,
    invInterviewAlya,
    "secondary-btn"
  );

  interviewButton.disabled = invState.interviewed;

  witnessInfo.appendChild(interviewButton);
  witnessCard.appendChild(witnessInfo);
  witnessArea.appendChild(witnessCard);

  // Evidence Board
  const board = document.getElementById(
    "inv-evidence-board"
  );
  board.replaceChildren();

  INV_CLUES.forEach((id, index) => {
    const found = invHasClue(id);

    const clue = invElement(
      "div",
      "inv-clue" + (found ? " found" : "")
    );

    clue.appendChild(
      invElement(
        "strong",
        "",
        found
          ? "✓ " + t.clueTitles[index]
          : "🔒 " + t.notFound
      )
    );

    clue.appendChild(
      invElement(
        "p",
        "",
        found
          ? t.clueDescriptions[index]
          : "???"
      )
    );

    board.appendChild(clue);
  });

  invRenderDeduction();
}

// ========================================
// INITIALISATION
// ========================================

function invInitialise() {
  document.getElementById(
    "inv-exit-btn"
  ).addEventListener("click", invExit);

  document.getElementById(
    "inv-document-close"
  ).addEventListener("click", invCloseDocument);

  document.getElementById(
    "inv-document-modal"
  ).addEventListener("click", event => {
    if (event.target.id === "inv-document-modal") {
      invCloseDocument();
    }
  });

  document.addEventListener("keydown", event => {
    const modal = document.getElementById(
      "inv-document-modal"
    );

    if (modal.classList.contains("hidden")) return;

    if (event.key === "Escape") {
      invCloseDocument();
    }

    if (event.key === "Tab") {
      const buttons = Array.from(
        modal.querySelectorAll(
          "button:not(:disabled)"
        )
      );

      if (!buttons.length) return;

      const first = buttons[0];
      const last = buttons[buttons.length - 1];

      if (event.shiftKey &&
          document.activeElement === first) {
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
  });

  // Season 01 Overview can be reached
  // from the Season Selection screen.
  document.getElementById(
    "season-1-btn"
  ).addEventListener("click", invRenderEntry);

  // After the prologue, unlock Case 01.
  document.getElementById(
    "story-complete-back-btn"
  ).addEventListener("click", () => {
    invRenderEntry();
  });

  // Refresh entry after a profile change.
  document.getElementById(
    "switch-profile-btn"
  ).addEventListener("click", () => {
    invRenderEntry();
  });

  invRenderEntry();
}

document.addEventListener(
  "DOMContentLoaded",
  invInitialise
);

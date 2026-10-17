
"use strict";

/* ==========================================
   THE HIDDEN FILES
   CASE 07 — THE MISCLASSIFIED FILES
   16-case07.js
========================================== */

(function () {

  const CASE_ID = "07";
  const SAVE_KEY = "thf_case07_classification_v1_";
  const SCREEN_ID = "case07-screen";

  let state = null;
  let feedback = "";
  let feedbackType = "bad";
  let activeModal = null;

  /* ======================================
     01 — LANGUAGE AND PLAYER
  ====================================== */

  function getLang() {
    const p =
      typeof getActiveDetective === "function"
        ? getActiveDetective()
        : null;

    let lang = "en";

    if (
      p &&
      typeof getProfileLanguage === "function"
    ) {
      lang = getProfileLanguage(p);
    } else if (p) {
      lang = p.settings?.language ||
        p.language ||
        "en";
    }

    return ["ms", "bm", "malay"].includes(
      String(lang).toLowerCase()
    ) ? "ms" : "en";
  }

  function t(en, ms) {
    return getLang() === "ms" ? ms : en;
  }

  function playerId() {
    const p =
      typeof getActiveDetective === "function"
        ? getActiveDetective()
        : null;

    return String(
      p?.id ||
      p?.profileId ||
      p?.username ||
      p?.name ||
      "default"
    );
  }

  /* ======================================
     02 — DOCUMENTS
  ====================================== */

  const DOCUMENTS = [
    {
      id: "invoice",
      icon: "🧾",
      name: {
        en: "Machinery Purchase Invoice",
        ms: "Invois Pembelian Mesin"
      },
      content: {
        en:
          "MERIDIAN CORPORATION\n\n" +
          "MACHINERY PURCHASE INVOICE\n\n" +
          "Date: 15 November 2025\n" +
          "Supplier: Industrial Machines Ltd.\n\n" +
          "Production Machinery: RM120,000\n" +
          "Estimated Useful Life: 5 Years\n\n" +
          "Purpose: Production operations\n" +
          "Status: Installed and operational.",

        ms:
          "MERIDIAN CORPORATION\n\n" +
          "INVOIS PEMBELIAN MESIN\n\n" +
          "Tarikh: 15 November 2025\n" +
          "Pembekal: Industrial Machines Ltd.\n\n" +
          "Mesin Pengeluaran: RM120,000\n" +
          "Anggaran Hayat Guna: 5 Tahun\n\n" +
          "Tujuan: Operasi pengeluaran\n" +
          "Status: Telah dipasang dan digunakan."
      }
    },
    {
      id: "ledger",
      icon: "📒",
      name: {
        en: "General Ledger",
        ms: "Lejar Am"
      },
      content: {
        en:
          "MERIDIAN CORPORATION\n\n" +
          "GENERAL LEDGER 2025\n\n" +
          "Debit:\n" +
          "Repairs and Maintenance RM120,000\n\n" +
          "Credit:\n" +
          "Bank RM120,000\n\n" +
          "Description:\n" +
          "Purchase of production machinery.",

        ms:
          "MERIDIAN CORPORATION\n\n" +
          "LEJAR AM 2025\n\n" +
          "Debit:\n" +
          "Pembaikan dan Penyelenggaraan RM120,000\n\n" +
          "Kredit:\n" +
          "Bank RM120,000\n\n" +
          "Butiran:\n" +
          "Pembelian mesin pengeluaran."
      }
    },
    {
      id: "bank",
      icon: "🏦",
      name: {
        en: "Bank Reconciliation",
        ms: "Penyesuaian Bank"
      },
      content: {
        en:
          "MERIDIAN CORPORATION\n\n" +
          "BANK RECONCILIATION\n" +
          "December 2025\n\n" +
          "Adjusted Balance: RM108,000\n\n" +
          "No information about machinery " +
          "classification is included.",

        ms:
          "MERIDIAN CORPORATION\n\n" +
          "PENYESUAIAN BANK\n" +
          "Disember 2025\n\n" +
          "Baki Terlaras: RM108,000\n\n" +
          "Tiada maklumat tentang " +
          "pengelasan mesin."
      }
    },
    {
      id: "insurance",
      icon: "📄",
      name: {
        en: "Insurance Receipt",
        ms: "Resit Insurans"
      },
      content: {
        en:
          "MERIDIAN CORPORATION\n\n" +
          "INSURANCE PAYMENT\n\n" +
          "Amount: RM24,000\n" +
          "Coverage: 12 Months\n" +
          "Starting: 1 December 2025\n\n" +
          "This document does not explain " +
          "the machinery transaction.",

        ms:
          "MERIDIAN CORPORATION\n\n" +
          "BAYARAN INSURANS\n\n" +
          "Jumlah: RM24,000\n" +
          "Tempoh: 12 Bulan\n" +
          "Bermula: 1 Disember 2025\n\n" +
          "Dokumen ini tidak menjelaskan " +
          "transaksi mesin."
      }
    }
  ];

  /* ======================================
     03 — INTERROGATION SCENES
  ====================================== */

  const SCENES = [
    {
      id: "purchase",

      statement: {
        en:
          "The RM120,000 was just routine " +
          "maintenance. It should be recorded " +
          "as an expense.",

        ms:
          "RM120,000 itu cuma penyelenggaraan " +
          "biasa. Ia patut direkod sebagai belanja."
      },

      questions: [
        {
          en: "What exactly did the company purchase?",
          ms: "Apakah sebenarnya yang syarikat beli?"
        },
        {
          en: "Who approved this transaction?",
          ms: "Siapa meluluskan transaksi ini?"
        },
        {
          en: "Why was it recorded as maintenance?",
          ms: "Kenapa ia direkod sebagai penyelenggaraan?"
        }
      ],

      answers: [
        {
          en:
            "We purchased a production machine, " +
            "but I considered it an operating cost.",

          ms:
            "Kami membeli mesin pengeluaran, " +
            "tetapi saya anggap ia kos operasi."
        },
        {
          en:
            "I approved the accounting entry myself.",

          ms:
            "Saya sendiri meluluskan catatan tersebut."
        },
        {
          en:
            "It was easier to close the accounts " +
            "that way.",

          ms:
            "Cara itu lebih mudah untuk " +
            "menutup akaun."
        }
      ],

      evidence: "invoice",

      revelation: {
        en:
          "The invoice proves that the company " +
          "purchased a production machine with " +
          "a five-year useful life. The purchase " +
          "supports recognition as PPE.",

        ms:
          "Invois membuktikan syarikat membeli " +
          "mesin pengeluaran dengan hayat guna " +
          "lima tahun. Pembelian ini menyokong " +
          "pengiktirafan sebagai PPE."
      }
    },
    {
      id: "record",

      statement: {
        en:
          "There was no accounting entry " +
          "for the machinery purchase.",

        ms:
          "Tiada catatan perakaunan dibuat " +
          "untuk pembelian mesin tersebut."
      },

      questions: [
        {
          en: "Was the purchase entered into the ledger?",
          ms: "Adakah pembelian dimasukkan dalam lejar?"
        },
        {
          en: "Did you review the year-end records?",
          ms: "Awak semak rekod akhir tahun?"
        },
        {
          en: "Were there any unusual entries?",
          ms: "Ada sebarang catatan luar biasa?"
        }
      ],

      answers: [
        {
          en:
            "As far as I remember, no machinery " +
            "entry was recorded.",

          ms:
            "Setahu saya, tiada catatan " +
            "pembelian mesin dibuat."
        },
        {
          en:
            "Yes. I reviewed the records myself.",

          ms:
            "Ya. Saya sendiri menyemak rekod itu."
        },
        {
          en:
            "There was a large repairs expense, " +
            "but I did not investigate it.",

          ms:
            "Ada belanja pembaikan yang besar, " +
            "tetapi saya tidak menyiasatnya."
        }
      ],

      evidence: "ledger",

      revelation: {
        en:
          "The general ledger contradicts Daniel. " +
          "RM120,000 was debited to Repairs " +
          "and Maintenance.",

        ms:
          "Lejar am bercanggah dengan Daniel. " +
          "RM120,000 telah didebitkan kepada " +
          "Pembaikan dan Penyelenggaraan."
      }
    },
    {
      id: "benefit",

      statement: {
        en:
          "The machinery does not provide " +
          "future economic benefits. " +
          "That is why I treated it as an expense.",

        ms:
          "Mesin itu tidak memberikan manfaat " +
          "ekonomi masa depan. Sebab itu saya " +
          "rekod sebagai belanja."
      },

      questions: [
        {
          en: "Is the machinery still being used?",
          ms: "Adakah mesin itu masih digunakan?"
        },
        {
          en: "How long is the machine expected to last?",
          ms: "Berapa lama mesin dijangka digunakan?"
        },
        {
          en: "Did management influence your decision?",
          ms: "Adakah pengurusan mempengaruhi keputusan awak?"
        }
      ],

      answers: [
        {
          en:
            "Yes. The production team " +
            "is still using the machine.",

          ms:
            "Ya. Bahagian pengeluaran " +
            "masih menggunakan mesin itu."
        },
        {
          en:
            "I believe it will last several years.",

          ms:
            "Saya percaya ia boleh digunakan " +
            "selama beberapa tahun."
        },
        {
          en:
            "Management wanted the accounts " +
            "closed quickly. I followed instructions.",

          ms:
            "Pengurusan mahu akaun ditutup " +
            "dengan cepat. Saya ikut arahan."
        }
      ],

      evidence: "invoice",

      revelation: {
        en:
          "The machine is operational and has " +
          "an estimated useful life of five years. " +
          "Daniel's claim about future economic " +
          "benefits contradicts the evidence.",

        ms:
          "Mesin sedang digunakan dan mempunyai " +
          "anggaran hayat guna lima tahun. " +
          "Dakwaan Daniel tentang manfaat " +
          "ekonomi masa depan bercanggah " +
          "dengan bukti."
      }
    }
  ];

  /* ======================================
     04 — GAME STATE
  ====================================== */

  function freshState() {
    return {
      started: false,
      scene: 0,
      asked: {},
      solved: {},
      selectedEvidence: "",
      hints: 0,
      accusation: -1,
      accusationCorrect: false,
      completed: false
    };
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(
        SAVE_KEY + playerId()
      );

      if (!saved) return freshState();

      const data = JSON.parse(saved);

      return {
        ...freshState(),
        ...data,
        asked: data.asked || {},
        solved: data.solved || {}
      };

    } catch (error) {
      return freshState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(
        SAVE_KEY + playerId(),
        JSON.stringify(state)
      );
    } catch (error) {
      console.warn("Case 07 save error:", error);
    }
  }

  function progressRecord() {
    if (
      typeof thfLoadProgress !== "function" ||
      typeof thfGetCase !== "function"
    ) {
      return null;
    }

    const progress = thfLoadProgress();

    return {
      progress,
      record: thfGetCase(progress, CASE_ID)
    };
  }

  function syncHints() {
    const data = progressRecord();

    if (!data) return;

    state.hints = Math.min(
      2,
      Math.max(
        Number(state.hints || 0),
        Number(data.record.hints || 0)
      )
    );

    data.record.hints = state.hints;

    if (
      typeof thfSaveProgress === "function"
    ) {
      thfSaveProgress(data.progress);
    }

    saveState();
  }

  function solvedCount() {
    return SCENES.filter(function (scene) {
      return state.solved[scene.id] === true;
    }).length;
  }

  function allSolved() {
    return solvedCount() === SCENES.length;
  }

  function pressure() {
    return Math.round(
      solvedCount() / SCENES.length * 100
    );
  }

  /* ======================================
     05 — ELEMENT HELPERS
  ====================================== */

  function el(tag, className = "", text = "") {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
  }

  function btn(label, action, className = "c07-btn") {
    const button = el("button", className, label);
    button.type = "button";
    button.addEventListener("click", action);
    return button;
  }

  function panel(parent) {
    const box = el("div", "c07-panel");
    parent.appendChild(box);
    return box;
  }

  /* ======================================
     06 — SCREEN
  ====================================== */

  function buildScreen() {
    let screen = document.getElementById(
      SCREEN_ID
    );

    if (screen) return screen;

    const app = document.getElementById("app");

    if (!app) return null;

    screen = el("section", "screen hidden");
    screen.id = SCREEN_ID;
    screen.hidden = true;

    const content = el("div", "c07-shell");
    content.id = "c07-content";

    screen.appendChild(content);
    app.appendChild(screen);

    if (
      typeof screenIds !== "undefined" &&
      Array.isArray(screenIds) &&
      !screenIds.includes(SCREEN_ID)
    ) {
      screenIds.push(SCREEN_ID);
    }

    return screen;
  }

  function showCaseScreen() {
    const screen = buildScreen();

    if (!screen) return;

    if (typeof showScreen === "function") {
      showScreen(SCREEN_ID);
    }

    document.querySelectorAll(
      "#app > .screen"
    ).forEach(function (item) {
      const hide = item !== screen;
      item.hidden = hide;
      item.classList.toggle("hidden", hide);
    });

    screen.hidden = false;
    screen.classList.remove("hidden");

    screen.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function exitCase() {
    closeModal();

    const screen = document.getElementById(
      SCREEN_ID
    );

    if (screen) {
      screen.hidden = true;
      screen.classList.add("hidden");
    }

    if (
      typeof window.thfOpenCaseFiles === "function"
    ) {
      window.thfOpenCaseFiles();
    }
  }

  function page(title) {
    const root = document.getElementById(
      "c07-content"
    );

    root.replaceChildren();

    const header = el("header", "c07-top");
    const info = el("div");

    info.append(
      el(
        "p",
        "c07-kicker",
        t(
          "CASE 07 · INTERROGATION ROOM",
          "KES 07 · BILIK SOAL SIASAT"
        )
      ),
      el("h1", "c07-title", title)
    );

    header.append(
      info,
      btn(
        t("← CASE FILES", "← FAIL KES"),
        exitCase,
        "c07-btn ghost"
      )
    );

    root.appendChild(header);
    return root;
  }

  /* ======================================
     07 — MODAL SYSTEM
  ====================================== */

  function closeModal() {
    if (activeModal) {
      activeModal.remove();
      activeModal = null;
    }
  }

  function createModal(extraClass = "") {
    closeModal();

    const overlay = el(
      "div",
      "c07-modal-backdrop"
    );

    const modal = el(
      "div",
      "c07-modal " + extraClass
    );

    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    overlay.appendChild(modal);

    overlay.addEventListener(
      "click",
      function (event) {
        if (event.target === overlay) {
          closeModal();
        }
      }
    );

    document.body.appendChild(overlay);
    activeModal = overlay;

    return modal;
  }

  function showNotice(title, message) {
    const modal = createModal(
      "c07-hint-modal"
    );

    modal.append(
      el("h3", "", title),
      el("div", "c07-hint-card", message),
      btn(
        t("CLOSE", "TUTUP"),
        closeModal,
        "c07-btn secondary"
      )
    );
  }

  /* ======================================
     08 — HINT CONTENT
  ====================================== */

  function hintText(number) {
    if (number === 1) {
      return t(
        "Look for a document that directly " +
        "contradicts Daniel's statement. " +
        "Focus on what he is claiming " +
        "and what the records actually show.",

        "Cari dokumen yang bercanggah " +
        "secara langsung dengan kenyataan " +
        "Daniel. Fokus pada apa yang " +
        "didakwanya dan perkara yang " +
        "ditunjukkan dalam rekod."
      );
    }

    return t(
      "The machinery invoice proves what " +
      "was purchased and its useful life. " +
      "The general ledger shows how " +
      "the purchase was recorded.",

      "Invois mesin membuktikan apa yang " +
      "dibeli dan hayat gunanya. " +
      "Lejar am menunjukkan bagaimana " +
      "pembelian tersebut direkod."
    );
  }

  /* ======================================
     09 — HINT LIBRARY
     REOPEN UNLOCKED HINTS
  ====================================== */

  function openHintLibrary() {
    const modal = createModal(
      "c07-hint-modal"
    );

    const heading = el(
      "div",
      "c07-hint-heading"
    );

    const headingInfo = el("div");

    headingInfo.append(
      el(
        "h3",
        "c07-hint-title",
        t(
          "DETECTIVE HINTS",
          "PETUNJUK DETEKTIF"
        )
      ),
      el(
        "p",
        "c07-hint-count",
        state.hints +
        " / 2 " +
        t(
          "HINTS UNLOCKED",
          "PETUNJUK DIBUKA"
        )
      )
    );

    heading.append(
      el("div", "c07-hint-icon", "💡"),
      headingInfo
    );

    modal.appendChild(heading);

    /* Hint 1 and Hint 2 */

    for (let number = 1; number <= 2; number++) {
      const unlocked = state.hints >= number;

      const card = el(
        "div",
        unlocked
          ? "c07-hint-card"
          : "c07-hint-card c07-hint-locked"
      );

      card.appendChild(
        el(
          "h4",
          "",
          unlocked
            ? "💡 " + t(
                "HINT ",
                "PETUNJUK "
              ) + number
            : "🔒 " + t(
                "HINT ",
                "PETUNJUK "
              ) + number
        )
      );

      card.appendChild(
        el(
          "p",
          "",
          unlocked
            ? hintText(number)
            : t(
                "This hint has not been unlocked.",
                "Petunjuk ini belum dibuka."
              )
        )
      );

      modal.appendChild(card);
    }

    /* Actions */

    const actions = el(
      "div",
      "c07-hint-actions"
    );

    if (state.hints < 2) {
      actions.appendChild(
        btn(
          t(
            "UNLOCK HINT ",
            "BUKA PETUNJUK "
          ) + (state.hints + 1),
          unlockNextHint
        )
      );
    }

    actions.appendChild(
      btn(
        t("CLOSE", "TUTUP"),
        closeModal,
        "c07-btn secondary"
      )
    );

    modal.appendChild(actions);

    if (state.hints >= 2) {
      modal.appendChild(
        el(
          "p",
          "c07-hint-warning",
          t(
            "Both hints are unlocked. " +
            "You may review them anytime " +
            "without additional XP penalties.",

            "Kedua-dua petunjuk telah dibuka. " +
            "Kau boleh membacanya semula " +
            "tanpa penalti XP tambahan."
          )
        )
      );
    }
  }

  /* ======================================
     10 — UNLOCK NEW HINT
  ====================================== */

  function unlockNextHint() {
    if (state.hints >= 2) {
      openHintLibrary();
      return;
    }

    state.hints++;

    syncHints();
    saveState();

    /* Reopen library with new hint visible */
    openHintLibrary();

    /* Refresh button count behind modal */
    render();
  }

  function hintButton() {
    const label =
      state.hints >= 2
        ? t(
            "💡 VIEW HINTS (2/2)",
            "💡 LIHAT PETUNJUK (2/2)"
          )
        : state.hints === 1
          ? t(
              "💡 HINTS (1/2)",
              "💡 PETUNJUK (1/2)"
            )
          : t(
              "💡 HINTS (0/2)",
              "💡 PETUNJUK (0/2)"
            );

    return btn(
      label,
      openHintLibrary,
      "c07-btn secondary"
    );
  }

  /* ======================================
     11 — EVIDENCE VIEWER
  ====================================== */

  function openDocument(doc) {
    const modal = createModal();

    modal.append(
      el(
        "h3",
        "",
        doc.icon + " " + doc.name[getLang()]
      ),
      el(
        "div",
        "c07-document",
        doc.content[getLang()]
      ),
      btn(
        t("CLOSE", "TUTUP"),
        closeModal,
        "c07-btn secondary"
      )
    );
  }

  function evidenceViewer(root) {
    const box = panel(root);

    box.append(
      el(
        "h3",
        "c07-section-title",
        t(
          "EVIDENCE VIEWER",
          "PAPARAN BUKTI"
        )
      ),
      el(
        "p",
        "c07-note",
        t(
          "Inspect the documents and select " +
          "one to challenge Daniel's statement.",

          "Periksa dokumen dan pilih satu " +
          "untuk mencabar kenyataan Daniel."
        )
      )
    );

    const grid = el(
      "div",
      "c07-evidence-grid"
    );

    DOCUMENTS.forEach(function (doc) {
      const selected =
        state.selectedEvidence === doc.id;

      const card = el(
        "button",
        selected
          ? "c07-evidence selected"
          : "c07-evidence"
      );

      card.type = "button";

      card.append(
        el(
          "strong",
          "",
          doc.icon + " " + doc.name[getLang()]
        ),
        el(
          "small",
          "",
          t(
            "INSPECT DOCUMENT",
            "PERIKSA DOKUMEN"
          )
        )
      );

      card.addEventListener(
        "click",
        function () {
          state.selectedEvidence = doc.id;
          saveState();
          render();
          openDocument(doc);
        }
      );

      grid.appendChild(card);
    });

    box.appendChild(grid);
  }

  /* ======================================
     12 — INTRODUCTION
  ====================================== */

  function showIntro() {
    const root = page(
      "THE MISCLASSIFIED FILES"
    );

    const box = panel(root);

    box.append(
      el(
        "h2",
        "c07-section-title",
        t(
          "THE INTERROGATION",
          "SOAL SIASAT"
        )
      ),
      el(
        "p",
        "c07-intro",
        t(
          "Alya Rahman has brought Daniel Harris, " +
          "the senior accountant of Meridian " +
          "Corporation, into the interrogation room. " +
          "A RM120,000 production machine appears " +
          "to have been incorrectly classified " +
          "as an expense. Question Daniel, " +
          "inspect the evidence and expose " +
          "three contradictions.",

          "Alya Rahman membawa Daniel Harris, " +
          "akauntan kanan Meridian Corporation, " +
          "ke bilik soal siasat. Mesin pengeluaran " +
          "bernilai RM120,000 dipercayai telah " +
          "tersalah klasifikasi sebagai belanja. " +
          "Soal Daniel, periksa bukti dan " +
          "bongkar tiga percanggahan."
        )
      )
    );

    box.appendChild(
      btn(
        t(
          "BEGIN INTERROGATION",
          "MULAKAN SOAL SIASAT"
        ),
        function () {
          state.started = true;
          saveState();
          render();
        }
      )
    );
  }

  /* ======================================
     13 — MISTAKES AND FEEDBACK
  ====================================== */

  function registerMistake() {
    if (
      typeof thfRegisterMistake === "function"
    ) {
      thfRegisterMistake(CASE_ID);
    }
  }

  function setFeedback(text, type = "bad") {
    feedback = text;
    feedbackType = type;
  }

  function clearFeedback() {
    feedback = "";
    feedbackType = "bad";
  }

  /* ======================================
     14 — INTERROGATION
  ====================================== */

  function showInterrogation() {
    const scene = SCENES[state.scene];

    if (!scene) {
      showFinalAccusation();
      return;
    }

    const solved =
      state.solved[scene.id] === true;

    const root = page(
      "THE MISCLASSIFIED FILES"
    );

    /* Pressure Meter */

    const meterBox = panel(root);
    const meterHeader = el(
      "div",
      "c07-row c07-between"
    );

    meterHeader.append(
      el(
        "strong",
        "",
        t(
          "SUSPECT PRESSURE",
          "TEKANAN SUSPEK"
        )
      ),
      el(
        "span",
        "c07-chip",
        pressure() + "%"
      )
    );

    const bar = el(
      "div",
      "c07-progress"
    );

    const fill = el("span");
    fill.style.width = pressure() + "%";
    bar.appendChild(fill);

    meterBox.append(
      meterHeader,
      bar,
      el(
        "p",
        "c07-note",
        t(
          "CONTRADICTION ",
          "PERCANGGAHAN "
        ) +
        (state.scene + 1) +
        " / 3"
      )
    );

    /* Daniel Harris */

    const roomBox = panel(root);
    const room = el("div", "c07-room");
    const suspect = el("div", "c07-person");

    const danielImage =
      document.createElement("img");

    danielImage.src = "daniel-harris.png";
    danielImage.alt = "Daniel Harris";
    danielImage.className =
      "c07-character-image";

    suspect.append(
      danielImage,
      el(
        "strong",
        "",
        "Daniel Harris"
      ),
      el(
        "small",
        "",
        t(
          "Senior Accountant",
          "Akauntan Kanan"
        )
      )
    );

    /* Dialogue */

    const dialogue = el(
      "div",
      "c07-dialogue"
    );

    dialogue.appendChild(
      el(
        "span",
        "c07-speaker",
        t(
          "DANIEL'S STATEMENT",
          "KENYATAAN DANIEL"
        )
      )
    );

    const askedIndex =
      state.asked[scene.id];

    const statement =
      askedIndex === undefined
        ? scene.statement[getLang()]
        : scene.answers[askedIndex][getLang()];

    dialogue.appendChild(
      el(
        "div",
        "c07-quote",
        statement
      )
    );

    if (!solved) {
      dialogue.appendChild(
        el(
          "h3",
          "c07-section-title",
          t(
            "QUESTION THE SUSPECT",
            "SOAL SUSPEK"
          )
        )
      );

      scene.questions.forEach(
        function (question, index) {
          const selected =
            askedIndex === index;

          dialogue.appendChild(
            btn(
              question[getLang()],
              function () {
                state.asked[scene.id] = index;

                setFeedback(
                  t(
                    "Daniel has answered. " +
                    "Inspect the evidence and " +
                    "challenge his statement.",

                    "Daniel sudah menjawab. " +
                    "Periksa bukti dan cabar " +
                    "kenyataannya."
                  ),
                  "good"
                );

                saveState();
                render();
              },
              selected
                ? "c07-question selected"
                : "c07-question"
            )
          );
        }
      );

    } else {
      dialogue.appendChild(
        el(
          "div",
          "c07-feedback good",
          t(
            "CONTRADICTION EXPOSED!\n",
            "PERCANGGAHAN TERBONGKAR!\n"
          ) +
          scene.revelation[getLang()]
        )
      );
    }

    room.append(suspect, dialogue);
    roomBox.appendChild(room);

    /* Evidence */

    evidenceViewer(root);

    /* Controls */

    const controls = panel(root);
    const actions = el("div", "c07-row");

    if (!solved) {
      actions.appendChild(
        btn(
          t(
            "PRESENT EVIDENCE",
            "KEMUKAKAN BUKTI"
          ),
          function () {
            presentEvidence(scene);
          }
        )
      );
    } else {
      actions.appendChild(
        btn(
          state.scene === 2
            ? t(
                "FINAL ACCUSATION →",
                "TUDUHAN AKHIR →"
              )
            : t(
                "NEXT STATEMENT →",
                "KENYATAAN SETERUSNYA →"
              ),
          function () {
            if (state.scene < 2) {
              state.scene++;
              state.selectedEvidence = "";
              clearFeedback();
              saveState();
              render();
            } else {
              clearFeedback();
              showFinalAccusation();
            }
          }
        )
      );
    }

    actions.appendChild(hintButton());
    controls.appendChild(actions);

    if (feedback) {
      controls.appendChild(
        el(
          "div",
          "c07-feedback " + feedbackType,
          feedback
        )
      );
    }
  }

  /* ======================================
     15 — PRESENT EVIDENCE
  ====================================== */

  function presentEvidence(scene) {
    if (
      state.asked[scene.id] === undefined
    ) {
      setFeedback(
        t(
          "Question Daniel before presenting evidence.",
          "Soal Daniel dahulu sebelum " +
          "mengemukakan bukti."
        )
      );

      render();
      return;
    }

    if (!state.selectedEvidence) {
      setFeedback(
        t(
          "Select an evidence document first.",
          "Pilih satu dokumen bukti dahulu."
        )
      );

      render();
      return;
    }

    if (
      state.selectedEvidence === scene.evidence
    ) {
      state.solved[scene.id] = true;
      clearFeedback();
      saveState();
      render();
    } else {
      registerMistake();

      setFeedback(
        t(
          "This document does not contradict " +
          "Daniel's statement. Try another one.",

          "Dokumen ini tidak bercanggah " +
          "dengan kenyataan Daniel. " +
          "Cuba dokumen lain."
        )
      );

      saveState();
      render();
    }
  }

  /* ======================================
     16 — FINAL ACCUSATION
  ====================================== */

  function showFinalAccusation() {
    const root = page(
      "THE MISCLASSIFIED FILES"
    );

    const box = panel(root);

    box.append(
      el(
        "h2",
        "c07-section-title",
        t(
          "FINAL ACCUSATION",
          "TUDUHAN AKHIR"
        )
      ),
      el(
        "p",
        "c07-intro",
        t(
          "You have exposed three contradictions. " +
          "What is the correct accounting conclusion?",

          "Kau berjaya membongkar tiga " +
          "percanggahan. Apakah kesimpulan " +
          "perakaunan yang betul?"
        )
      )
    );

    const options = [
      {
        en:
          "The RM120,000 machinery should be " +
          "recognized as PPE instead of " +
          "routine repairs expense.",

        ms:
          "Mesin RM120,000 patut diiktiraf " +
          "sebagai PPE dan bukannya " +
          "belanja pembaikan biasa."
      },
      {
        en:
          "The machinery should be recorded " +
          "as revenue because it supports production.",

        ms:
          "Mesin patut direkod sebagai hasil " +
          "kerana menyokong pengeluaran."
      },
      {
        en:
          "The bank reconciliation proves " +
          "the machinery purchase was fraudulent.",

        ms:
          "Penyesuaian bank membuktikan " +
          "pembelian mesin ialah penipuan."
      }
    ];

    options.forEach(function (option, index) {
      const selected =
        state.accusation === index;

      box.appendChild(
        btn(
          (index + 1) + ". " +
          option[getLang()],
          function () {
            const previous = state.accusation;

            state.accusation = index;
            state.accusationCorrect =
              index === 0;

            if (
              index !== 0 &&
              previous !== index
            ) {
              registerMistake();
            }

            saveState();
            showFinalAccusation();
          },
          selected
            ? "c07-question selected"
            : "c07-question"
        )
      );
    });

    if (state.accusation >= 0) {
      box.appendChild(
        el(
          "div",
          state.accusationCorrect
            ? "c07-feedback good"
            : "c07-feedback bad",
          state.accusationCorrect
            ? t(
                "Correct. The evidence supports " +
                "recognizing the machinery as PPE.",

                "Betul. Bukti menyokong " +
                "pengiktirafan mesin sebagai PPE."
              )
            : t(
                "This conclusion is not supported " +
                "by the available evidence.",

                "Kesimpulan ini tidak " +
                "disokong oleh bukti."
              )
        )
      );
    }

    const actions = el("div", "c07-row");

    const submit = btn(
      t(
        "SUBMIT CASE REPORT",
        "HANTAR LAPORAN KES"
      ),
      completeCase
    );

    submit.disabled =
      !state.accusationCorrect;

    actions.append(
      submit,
      hintButton(),
      btn(
        t(
          "REVIEW EVIDENCE",
          "SEMAK BUKTI"
        ),
        function () {
          state.scene = 2;
          showInterrogation();
        },
        "c07-btn ghost"
      )
    );

    box.appendChild(actions);
  }

  /* ======================================
     17 — COMPLETE CASE
  ====================================== */

  function completeCase() {
    if (
      !state.accusationCorrect ||
      !allSolved()
    ) {
      return;
    }

    if (
      typeof thfCompleteCase === "function"
    ) {
      thfCompleteCase(CASE_ID);
    }

    state.completed = true;
    saveState();

    if (
      typeof thfRefreshNavigation === "function"
    ) {
      thfRefreshNavigation();
    }

    if (
      typeof thfRefreshCaseFiles === "function"
    ) {
      thfRefreshCaseFiles();
    }

    showReport();
  }

  /* ======================================
     18 — CASE REPORT
  ====================================== */

  function showReport() {
    const root = page(
      t(
        "CASE 07 COMPLETED",
        "KES 07 SELESAI"
      )
    );

    const box = panel(root);
    box.classList.add("c07-report");

    box.append(
      el(
        "h2",
        "c07-section-title",
        t(
          "ALYA RAHMAN — FINAL CASE REPORT",
          "ALYA RAHMAN — LAPORAN KES AKHIR"
        )
      ),
      el(
        "p",
        "",
        t(
          "The investigation identified " +
          "an incorrect classification of " +
          "RM120,000 production machinery.",

          "Siasatan mengenal pasti " +
          "salah klasifikasi mesin pengeluaran " +
          "bernilai RM120,000."
        )
      )
    );

    const findings = [
      t(
        "The invoice confirms a production " +
        "machine with a five-year useful life.",

        "Invois mengesahkan mesin pengeluaran " +
        "dengan hayat guna lima tahun."
      ),
      t(
        "The general ledger shows that " +
        "RM120,000 was incorrectly debited " +
        "to Repairs and Maintenance.",

        "Lejar am menunjukkan RM120,000 " +
        "tersalah debit kepada " +
        "Pembaikan dan Penyelenggaraan."
      ),
      t(
        "Correcting entry: Dr Property, " +
        "Plant and Equipment RM120,000; " +
        "Cr Repairs and Maintenance RM120,000.",

        "Catatan pembetulan: Dr Hartanah, " +
        "Loji dan Peralatan RM120,000; " +
        "Cr Pembaikan dan Penyelenggaraan " +
        "RM120,000."
      ),
      t(
        "Before depreciation and tax effects, " +
        "the correction increases assets " +
        "and profit by RM120,000. Depreciation " +
        "must be assessed separately.",

        "Sebelum kesan susut nilai dan cukai, " +
        "pembetulan meningkatkan aset dan " +
        "untung sebanyak RM120,000. Susut " +
        "nilai perlu dinilai berasingan."
      )
    ];

    const list = document.createElement("ol");

    findings.forEach(function (finding) {
      list.appendChild(
        el("li", "", finding)
      );
    });

    box.appendChild(list);

    const data = progressRecord();

    if (data) {
      box.appendChild(
        el(
          "div",
          "c07-feedback good",
          t(
            "CASE COMPLETED · XP EARNED: ",
            "KES SELESAI · XP DIPEROLEH: "
          ) +
          Number(data.record.xp || 0)
        )
      );
    }

    const actions = el("div", "c07-row");

    actions.append(
      btn(
        t(
          "RETURN TO CASE FILES",
          "KEMBALI KE FAIL KES"
        ),
        exitCase
      ),
      hintButton(),
      btn(
        t(
          "REVIEW INTERROGATION",
          "SEMAK SOAL SIASAT"
        ),
        function () {
          state.scene = 0;
          showInterrogation();
        },
        "c07-btn secondary"
      )
    );

    box.appendChild(actions);
  }

  /* ======================================
     19 — RENDER
  ====================================== */

  function render() {
    if (!buildScreen()) return;

    if (state.completed) {
      showReport();
      return;
    }

    if (!state.started) {
      showIntro();
      return;
    }

    if (allSolved()) {
      showFinalAccusation();
      return;
    }

    showInterrogation();
  }

  /* ======================================
     20 — OPEN CASE 07
  ====================================== */

  function openCase07() {
    if (
      typeof thfCaseStatus === "function"
    ) {
      const previous = thfCaseStatus("06");

      if (previous?.completed !== true) {
        showNotice(
          t("CASE LOCKED", "KES DIKUNCI"),
          t(
            "Complete Case 06 first.",
            "Selesaikan Kes 06 dahulu."
          )
        );
        return;
      }
    }

    state = loadState();
    syncHints();

    const data = progressRecord();

    if (
      data &&
      !state.completed &&
      !data.record.completed &&
      Number(data.progress.lives ?? 3) <= 0
    ) {
      showNotice(
        t(
          "NO LIVES AVAILABLE",
          "NYAWA TELAH HABIS"
        ),
        t(
          "Wait for life recovery before " +
          "continuing the investigation.",

          "Tunggu sehingga nyawa pulih " +
          "sebelum meneruskan siasatan."
        )
      );
      return;
    }

    clearFeedback();
    showCaseScreen();
    render();
  }

  /* ======================================
     21 — GLOBAL FUNCTIONS
  ====================================== */

  window.thfCase07Open = openCase07;
  window.thfOpenCase07 = openCase07;
  window.thfCase07ReturnToFiles = exitCase;

  /* ======================================
     22 — INITIALISE
  ====================================== */

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      buildScreen,
      { once: true }
    );
  } else {
    buildScreen();
  }

})();

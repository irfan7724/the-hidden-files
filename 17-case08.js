
"use strict";

/* ==========================================
   THE HIDDEN FILES
   CASE 08 — THE VANISHING LIABILITY
   File: 17-case08.js
========================================== */

(function () {

  const CASE_ID = "08";
  const SCREEN_ID = "case08-screen";
  const SAVE_KEY = "thf_case08_reconstruction_v1_";

  let state = null;
  let activeModal = null;
  let feedback = "";
  let feedbackType = "bad";

  /* ======================================
     LANGUAGE AND PLAYER
  ====================================== */

  function lang() {
    const p = typeof getActiveDetective === "function"
      ? getActiveDetective() : null;

    const value = p && typeof getProfileLanguage === "function"
      ? getProfileLanguage(p)
      : (p?.settings?.language || p?.language || "en");

    return ["ms", "bm", "malay"].includes(
      String(value).toLowerCase()
    ) ? "ms" : "en";
  }

  function t(en, ms) {
    return lang() === "ms" ? ms : en;
  }

  function playerId() {
    const p = typeof getActiveDetective === "function"
      ? getActiveDetective() : null;

    return String(
      p?.id || p?.profileId ||
      p?.username || p?.name || "default"
    );
  }

  /* ======================================
     CASE DOCUMENTS
  ====================================== */

  const DOCUMENTS = [
    {
      id: "invoice",
      icon: "🧾",
      name: {
        en: "Supplier Invoice",
        ms: "Invois Pembekal"
      },
      content: {
        en:
          "MERIDIAN CORPORATION\n" +
          "SUPPLIER INVOICE\n\n" +
          "Invoice No: INV-4582\n" +
          "Date: 27 December 2025\n" +
          "Supplier: Northern Industrial Supplies\n\n" +
          "Production Materials: RM85,000\n" +
          "Payment Terms: 60 Days\n" +
          "Payment Status: UNPAID\n\n" +
          "Goods delivered to Meridian Corporation.",

        ms:
          "MERIDIAN CORPORATION\n" +
          "INVOIS PEMBEKAL\n\n" +
          "No. Invois: INV-4582\n" +
          "Tarikh: 27 Disember 2025\n" +
          "Pembekal: Northern Industrial Supplies\n\n" +
          "Bahan Pengeluaran: RM85,000\n" +
          "Tempoh Bayaran: 60 Hari\n" +
          "Status Bayaran: BELUM DIBAYAR\n\n" +
          "Barang dihantar kepada Meridian Corporation."
      }
    },
    {
      id: "grn",
      icon: "📦",
      name: {
        en: "Goods Received Note",
        ms: "Nota Penerimaan Barang"
      },
      content: {
        en:
          "MERIDIAN CORPORATION\n" +
          "GOODS RECEIVED NOTE\n\n" +
          "GRN No: GRN-2025-091\n" +
          "Date Received: 29 December 2025\n" +
          "Related Invoice: INV-4582\n\n" +
          "Production Materials: RM85,000\n" +
          "Quantity: Fully received\n" +
          "Condition: Accepted\n\n" +
          "Warehouse Supervisor: Approved",

        ms:
          "MERIDIAN CORPORATION\n" +
          "NOTA PENERIMAAN BARANG\n\n" +
          "No. GRN: GRN-2025-091\n" +
          "Tarikh Terima: 29 Disember 2025\n" +
          "Invois Berkaitan: INV-4582\n\n" +
          "Bahan Pengeluaran: RM85,000\n" +
          "Kuantiti: Diterima sepenuhnya\n" +
          "Keadaan: Diterima\n\n" +
          "Penyelia Gudang: Diluluskan"
      }
    },
    {
      id: "ledger",
      icon: "📒",
      name: {
        en: "Accounts Payable Ledger",
        ms: "Lejar Akaun Belum Bayar"
      },
      content: {
        en:
          "MERIDIAN CORPORATION\n" +
          "ACCOUNTS PAYABLE LEDGER\n\n" +
          "Reporting Date: 31 December 2025\n\n" +
          "Northern Industrial Supplies\n" +
          "Invoice INV-4582: NOT RECORDED\n\n" +
          "No payable was recognized for " +
          "the RM85,000 materials received.",

        ms:
          "MERIDIAN CORPORATION\n" +
          "LEJAR AKAUN BELUM BAYAR\n\n" +
          "Tarikh Pelaporan: 31 Disember 2025\n\n" +
          "Northern Industrial Supplies\n" +
          "Invois INV-4582: TIDAK DIREKOD\n\n" +
          "Tiada liabiliti direkodkan untuk " +
          "bahan RM85,000 yang diterima."
      }
    },
    {
      id: "bank",
      icon: "🏦",
      name: {
        en: "Bank Statement",
        ms: "Penyata Bank"
      },
      content: {
        en:
          "MERIDIAN CORPORATION\n" +
          "BANK STATEMENT\n\n" +
          "Date: 31 December 2025\n" +
          "Closing Bank Balance: RM310,000\n\n" +
          "No payment to Northern Industrial " +
          "Supplies appears in December.",

        ms:
          "MERIDIAN CORPORATION\n" +
          "PENYATA BANK\n\n" +
          "Tarikh: 31 Disember 2025\n" +
          "Baki Akhir Bank: RM310,000\n\n" +
          "Tiada bayaran kepada Northern " +
          "Industrial Supplies pada Disember."
      }
    },
    {
      id: "purchase",
      icon: "📋",
      name: {
        en: "Purchase Order",
        ms: "Pesanan Belian"
      },
      content: {
        en:
          "MERIDIAN CORPORATION\n" +
          "PURCHASE ORDER\n\n" +
          "PO No: PO-2025-184\n" +
          "Date: 20 December 2025\n" +
          "Supplier: Northern Industrial Supplies\n" +
          "Materials Ordered: RM85,000\n\n" +
          "Order approved by Procurement Department.",

        ms:
          "MERIDIAN CORPORATION\n" +
          "PESANAN BELIAN\n\n" +
          "No. PO: PO-2025-184\n" +
          "Tarikh: 20 Disember 2025\n" +
          "Pembekal: Northern Industrial Supplies\n" +
          "Bahan Dipesan: RM85,000\n\n" +
          "Pesanan diluluskan Jabatan Perolehan."
      }
    }
  ];

  /* ======================================
     STATE
  ====================================== */

  function freshState() {
    return {
      started: false,
      stage: 0,
      recovered: [],
      reconstruction: {
        invoice: "",
        grn: "",
        ledger: ""
      },
      amount: "",
      debit: "",
      credit: "",
      impact: "",
      hints: 0,
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
        recovered: Array.isArray(data.recovered)
          ? data.recovered : [],
        reconstruction: {
          ...freshState().reconstruction,
          ...(data.reconstruction || {})
        }
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
      console.warn("Case 08 save error", error);
    }
  }

  function progressRecord() {
    if (
      typeof thfLoadProgress !== "function" ||
      typeof thfGetCase !== "function"
    ) return null;

    const progress = thfLoadProgress();

    return {
      progress,
      record: thfGetCase(progress, CASE_ID)
    };
  }

  function syncHints() {
    const data = progressRecord();

    if (!data || !data.record) return;

    state.hints = Math.min(2, Math.max(
      Number(state.hints || 0),
      Number(data.record.hints || 0)
    ));

    data.record.hints = state.hints;

    if (typeof thfSaveProgress === "function") {
      thfSaveProgress(data.progress);
    }

    saveState();
  }

  /* ======================================
     DOM HELPERS
  ====================================== */

  function el(tag, cls = "", value = "") {
    const node = document.createElement(tag);
    node.className = cls;
    node.textContent = value;
    return node;
  }

  function btn(label, action, cls = "c08-btn") {
    const node = el("button", cls, label);
    node.type = "button";
    node.addEventListener("click", action);
    return node;
  }

  function panel(root) {
    const box = el("div", "c08-panel");
    root.appendChild(box);
    return box;
  }

  function notice(message, type = "bad") {
    feedback = message;
    feedbackType = type;
  }

  function clearNotice() {
    feedback = "";
    feedbackType = "bad";
  }

  function addFeedback(box) {
    if (!feedback) return;

    box.appendChild(el(
      "div",
      "c08-feedback " + feedbackType,
      feedback
    ));
  }

  function mistake() {
    if (typeof thfRegisterMistake === "function") {
      thfRegisterMistake(CASE_ID);
    }
  }

  /* ======================================
     SCREEN AND NAVIGATION
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

    const content = el("div", "c08-shell");
    content.id = "c08-content";

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
      const hidden = item !== screen;
      item.hidden = hidden;
      item.classList.toggle("hidden", hidden);
    });

    screen.hidden = false;
    screen.classList.remove("hidden");
    screen.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function closeModal() {
    if (activeModal) {
      activeModal.remove();
      activeModal = null;
    }
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

    if (typeof window.thfOpenCaseFiles === "function") {
      window.thfOpenCaseFiles();
    }
  }

  function page(title) {
    const root = document.getElementById(
      "c08-content"
    );

    root.replaceChildren();

    const top = el("header", "c08-top");
    const info = el("div");

    info.append(
      el("p", "c08-kicker",
        t(
          "CASE 08 · FINANCIAL FORENSICS",
          "KES 08 · FORENSIK KEWANGAN"
        )
      ),
      el("h1", "c08-title", title)
    );

    top.append(
      info,
      btn(
        t("← CASE FILES", "← FAIL KES"),
        exitCase,
        "c08-btn ghost"
      )
    );

    root.appendChild(top);

    return root;
  }

  function createModal(cls = "") {
    closeModal();

    const backdrop = el(
      "div",
      "c08-modal-backdrop"
    );

    const modal = el(
      "div",
      "c08-modal " + cls
    );

    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    backdrop.appendChild(modal);

    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) closeModal();
    });

    document.body.appendChild(backdrop);
    activeModal = backdrop;

    return modal;
  }

  function showMessage(title, message) {
    const modal = createModal("c08-hint-modal");

    modal.append(
      el("h3", "", title),
      el("p", "c08-note", message),
      btn(
        t("CLOSE", "TUTUP"),
        closeModal,
        "c08-btn secondary"
      )
    );
  }

  /* ======================================
     HINT LIBRARY
  ====================================== */

  function hintText(number) {
    if (number === 1) {
      return t(
        "Check whether the supplier's materials " +
        "were actually received before 31 December. " +
        "A purchase order alone does not prove receipt.",

        "Semak sama ada bahan pembekal benar-benar " +
        "diterima sebelum 31 Disember. Pesanan belian " +
        "sahaja tidak membuktikan penerimaan."
      );
    }

    return t(
      "Match Invoice INV-4582 with GRN-2025-091. " +
      "The RM85,000 materials were received but " +
      "not recorded in Accounts Payable. Consider " +
      "the effect on inventory and liabilities.",

      "Padankan Invois INV-4582 dengan GRN-2025-091. " +
      "Bahan RM85,000 telah diterima tetapi tidak " +
      "direkod dalam Akaun Belum Bayar. Pertimbangkan " +
      "kesannya terhadap inventori dan liabiliti."
    );
  }

  function openHints() {
    const modal = createModal("c08-hint-modal");

    const heading = el("div", "c08-hint-heading");
    const info = el("div");

    info.append(
      el("h3", "",
        t("DETECTIVE HINTS", "PETUNJUK DETEKTIF")
      ),
      el(
        "p",
        "c08-hint-count",
        state.hints + " / 2 " +
        t("HINTS UNLOCKED", "PETUNJUK DIBUKA")
      )
    );

    heading.append(
      el("div", "c08-hint-icon", "💡"),
      info
    );

    modal.appendChild(heading);

    for (let i = 1; i <= 2; i++) {
      const unlocked = state.hints >= i;

      const card = el(
        "div",
        unlocked
          ? "c08-hint-card"
          : "c08-hint-card locked"
      );

      card.append(
        el(
          "h4",
          "",
          (unlocked ? "💡 " : "🔒 ") +
          t("HINT ", "PETUNJUK ") + i
        ),
        el(
          "p",
          "",
          unlocked
            ? hintText(i)
            : t(
                "This hint is still locked.",
                "Petunjuk ini masih dikunci."
              )
        )
      );

      modal.appendChild(card);
    }

    const actions = el("div", "c08-hint-actions");

    if (state.hints < 2) {
      actions.appendChild(btn(
        t("UNLOCK HINT ", "BUKA PETUNJUK ") +
        (state.hints + 1),
        function () {
          state.hints++;
          syncHints();
          saveState();
          render();
          openHints();
        }
      ));
    }

    actions.appendChild(btn(
      t("CLOSE", "TUTUP"),
      closeModal,
      "c08-btn secondary"
    ));

    modal.appendChild(actions);
  }

  function hintButton() {
    return btn(
      state.hints === 2
        ? t(
            "💡 VIEW HINTS (2/2)",
            "💡 LIHAT PETUNJUK (2/2)"
          )
        : t(
            "💡 HINTS",
            "💡 PETUNJUK"
          ) + " (" + state.hints + "/2)",
      openHints,
      "c08-btn secondary"
    );
  }

  /* ======================================
     DOCUMENT VIEWER
  ====================================== */

  function openDocument(doc) {
    const modal = createModal();

    modal.append(
      el("h3", "",
        doc.icon + " " + doc.name[lang()]
      ),
      el(
        "div",
        "c08-paper",
        doc.content[lang()]
      ),
      btn(
        t("CLOSE", "TUTUP"),
        closeModal,
        "c08-btn secondary"
      )
    );
  }

  function evidenceViewer(root) {
    const box = panel(root);

    box.append(
      el("h3", "c08-section-title",
        t("EVIDENCE VIEWER", "PAPARAN BUKTI")
      ),
      el("p", "c08-note",
        t(
          "All recovered corporate documents " +
          "are available for inspection.",

          "Semua dokumen korporat yang ditemui " +
          "boleh diperiksa."
        )
      )
    );

    const grid = el("div", "c08-document-grid");

    DOCUMENTS.forEach(function (doc) {
      grid.appendChild(btn(
        doc.icon + " " + doc.name[lang()],
        function () {
          openDocument(doc);
        },
        "c08-document-card"
      ));
    });

    box.appendChild(grid);
  }

  /* ======================================
     STAGE 0 — INTRO
  ====================================== */

  function intro() {
    const root = page("THE VANISHING LIABILITY");
    const box = panel(root);

    box.append(
      el("h2", "c08-section-title",
        t("A MISSING OBLIGATION", "LIABILITI YANG HILANG")
      ),
      el("p", "c08-intro",
        t(
          "After exposing the machinery misclassification, " +
          "Alya Rahman discovers another irregularity at " +
          "Meridian Corporation. A supplier claims that " +
          "RM85,000 remains unpaid, but the year-end " +
          "Accounts Payable Ledger contains no matching " +
          "entry. Investigate the documents and reconstruct " +
          "the missing liability.",

          "Selepas membongkar salah klasifikasi mesin, " +
          "Alya Rahman menemui satu lagi kejanggalan " +
          "di Meridian Corporation. Pembekal mendakwa " +
          "RM85,000 masih belum dibayar, tetapi Lejar " +
          "Akaun Belum Bayar akhir tahun tidak menunjukkan " +
          "catatan tersebut. Siasat dokumen dan bina " +
          "semula liabiliti yang hilang."
        )
      ),
      btn(
        t("BEGIN INVESTIGATION", "MULAKAN SIASATAN"),
        function () {
          state.started = true;
          state.stage = 1;
          saveState();
          render();
        }
      )
    );
  }

  /* ======================================
     STAGE 1 — RECOVER DOCUMENTS
  ====================================== */

  function stageOne() {
    const root = page("THE VANISHING LIABILITY");
    const box = panel(root);

    box.append(
      el("p", "c08-step-label",
        t(
          "STAGE 1 / 3 — RECOVER MISSING DOCUMENTS",
          "PERINGKAT 1 / 3 — CARI DOKUMEN HILANG"
        )
      ),
      el("h2", "c08-section-title",
        t(
          "WHICH TWO DOCUMENTS PROVE THE PURCHASE?",
          "DUA DOKUMEN MANAKAH MEMBUKTIKAN PEMBELIAN?"
        )
      ),
      el("p", "c08-note",
        t(
          "Select exactly TWO documents that establish " +
          "the invoiced amount and confirm receipt " +
          "before the reporting date.",

          "Pilih tepat DUA dokumen yang mengesahkan " +
          "jumlah invois dan penerimaan barang " +
          "sebelum tarikh pelaporan."
        )
      )
    );

    const grid = el("div", "c08-document-grid");

    DOCUMENTS.forEach(function (doc) {
      const selected = state.recovered.includes(doc.id);

      const card = btn(
        (selected ? "✓ " : "") +
        doc.icon + " " + doc.name[lang()],
        function () {
          if (state.recovered.includes(doc.id)) {
            state.recovered = state.recovered.filter(
              id => id !== doc.id
            );
          } else if (state.recovered.length < 2) {
            state.recovered.push(doc.id);
          }

          clearNotice();
          saveState();
          render();
        },
        selected
          ? "c08-document-card selected"
          : "c08-document-card"
      );

      grid.appendChild(card);
    });

    box.appendChild(grid);

    const actions = el("div", "c08-row");

    actions.append(
      btn(
        t("VERIFY DOCUMENTS", "SAHKAN DOKUMEN"),
        function () {
          if (state.recovered.length !== 2) {
            notice(t(
              "Select exactly two documents.",
              "Pilih tepat dua dokumen."
            ));
            render();
            return;
          }

          if (
            state.recovered.includes("invoice") &&
            state.recovered.includes("grn")
          ) {
            state.stage = 2;
            clearNotice();
            saveState();
            render();
          } else {
            mistake();
            notice(t(
              "These documents do not establish both " +
              "the invoiced amount and receipt date.",

              "Dokumen ini tidak membuktikan " +
              "jumlah invois dan tarikh penerimaan."
            ));
            render();
          }
        }
      ),
      hintButton()
    );

    box.appendChild(actions);
    addFeedback(box);

    evidenceViewer(root);
  }

  /* ======================================
     STAGE 2 — RECONSTRUCT LIABILITY
  ====================================== */

  function makeSelect(label, value, options, change) {
    const wrap = el("label", "c08-slot");

    wrap.appendChild(el(
      "span", "c08-slot-title", label
    ));

    const select = el("select", "c08-select");

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = t(
      "SELECT DOCUMENT",
      "PILIH DOKUMEN"
    );
    select.appendChild(placeholder);

    options.forEach(function (doc) {
      const option = document.createElement("option");
      option.value = doc.id;
      option.textContent =
        doc.icon + " " + doc.name[lang()];
      select.appendChild(option);
    });

    select.value = value;

    select.addEventListener("change", function () {
      change(select.value);
      saveState();
    });

    wrap.appendChild(select);
    return wrap;
  }

  function stageTwo() {
    const root = page("THE VANISHING LIABILITY");
    const box = panel(root);

    box.append(
      el("p", "c08-step-label",
        t(
          "STAGE 2 / 3 — DOCUMENT RECONSTRUCTION",
          "PERINGKAT 2 / 3 — PEMBINAAN SEMULA DOKUMEN"
        )
      ),
      el("h2", "c08-section-title",
        t(
          "RECONSTRUCT THE TRANSACTION",
          "BINA SEMULA TRANSAKSI"
        )
      ),
      el("p", "c08-note",
        t(
          "Assign the correct source document to each " +
          "part of the missing transaction.",

          "Tetapkan dokumen sumber yang betul " +
          "kepada setiap bahagian transaksi " +
          "yang tidak direkodkan."
        )
      )
    );

    const workspace = el("div", "c08-workspace");

    const fields = [
      {
        key: "invoice",
        en: "Proof of Amount",
        ms: "Bukti Jumlah"
      },
      {
        key: "grn",
        en: "Proof of Goods Received",
        ms: "Bukti Penerimaan Barang"
      },
      {
        key: "ledger",
        en: "Proof of Missing Entry",
        ms: "Bukti Catatan Hilang"
      }
    ];

    fields.forEach(function (field) {
      workspace.appendChild(makeSelect(
        t(field.en, field.ms),
        state.reconstruction[field.key],
        DOCUMENTS,
        function (value) {
          state.reconstruction[field.key] = value;
        }
      ));
    });

    box.appendChild(workspace);

    const actions = el("div", "c08-row");

    actions.append(
      btn(
        t(
          "VERIFY RECONSTRUCTION",
          "SAHKAN PEMBINAAN SEMULA"
        ),
        function () {
          const r = state.reconstruction;

          if (!r.invoice || !r.grn || !r.ledger) {
            notice(t(
              "Complete all three document slots.",
              "Lengkapkan ketiga-tiga ruang dokumen."
            ));
            render();
            return;
          }

          if (
            r.invoice === "invoice" &&
            r.grn === "grn" &&
            r.ledger === "ledger"
          ) {
            state.stage = 3;
            clearNotice();
            saveState();
            render();
          } else {
            mistake();
            notice(t(
              "The document reconstruction is incorrect. " +
              "Review each document's purpose.",

              "Pembinaan semula dokumen tidak betul. " +
              "Semak tujuan setiap dokumen."
            ));
            render();
          }
        }
      ),
      hintButton()
    );

    box.appendChild(actions);
    addFeedback(box);

    evidenceViewer(root);
  }

  /* ======================================
     STAGE 3 — FINANCIAL IMPACT
  ====================================== */

  function stageThree() {
    const root = page("THE VANISHING LIABILITY");
    const box = panel(root);

    box.append(
      el("p", "c08-step-label",
        t(
          "STAGE 3 / 3 — FINANCIAL IMPACT",
          "PERINGKAT 3 / 3 — KESAN KEWANGAN"
        )
      ),
      el("h2", "c08-section-title",
        t(
          "RESTORE THE MISSING LIABILITY",
          "PULIHKAN LIABILITI YANG HILANG"
        )
      ),
      el("p", "c08-note",
        t(
          "The materials were received before year-end " +
          "and remain unpaid. Assume they are still " +
          "held as inventory on 31 December 2025. " +
          "Complete the correcting journal entry.",

          "Bahan diterima sebelum akhir tahun dan " +
          "masih belum dibayar. Andaikan bahan masih " +
          "dipegang sebagai inventori pada " +
          "31 Disember 2025. Lengkapkan catatan " +
          "jurnal pembetulan."
        )
      )
    );

    const workspace = el("div", "c08-workspace");

    const amountWrap = el("label", "c08-slot");

    amountWrap.appendChild(el(
      "span",
      "c08-slot-title",
      t(
        "Unrecorded Liability (RM)",
        "Liabiliti Tidak Direkod (RM)"
      )
    ));

    const amountInput = el("input", "c08-input");
    amountInput.type = "number";
    amountInput.min = "0";
    amountInput.step = "0.01";
    amountInput.placeholder = "RM";
    amountInput.value = state.amount;

    amountInput.addEventListener("input", function () {
      state.amount = amountInput.value;
      saveState();
    });

    amountWrap.appendChild(amountInput);
    workspace.appendChild(amountWrap);

    function accountSelect(title, key) {
      const wrap = el("label", "c08-slot");

      wrap.appendChild(el(
        "span", "c08-slot-title", title
      ));

      const select = el("select", "c08-select");

      const choices = [
        ["", t("SELECT ACCOUNT", "PILIH AKAUN")],
        ["inventory", t("Inventory", "Inventori")],
        ["bank", "Bank"],
        ["payable", t(
          "Accounts Payable",
          "Akaun Belum Bayar"
        )],
        ["revenue", t("Revenue", "Hasil")],
        ["expense", t(
          "Repairs Expense",
          "Belanja Pembaikan"
        )]
      ];

      choices.forEach(function (item) {
        const option = document.createElement("option");
        option.value = item[0];
        option.textContent = item[1];
        select.appendChild(option);
      });

      select.value = state[key];

      select.addEventListener("change", function () {
        state[key] = select.value;
        saveState();
      });

      wrap.appendChild(select);
      return wrap;
    }

    workspace.append(
      accountSelect(
        t("Debit Account", "Akaun Debit"),
        "debit"
      ),
      accountSelect(
        t("Credit Account", "Akaun Kredit"),
        "credit"
      )
    );

    const impactWrap = el("label", "c08-slot");

    impactWrap.appendChild(el(
      "span",
      "c08-slot-title",
      t(
        "Effect Before Correction",
        "Kesan Sebelum Pembetulan"
      )
    ));

    const impactSelect = el("select", "c08-select");

    const impacts = [
      ["", t("SELECT EFFECT", "PILIH KESAN")],
      ["under", t(
        "Assets and liabilities understated",
        "Aset dan liabiliti terkurang nyata"
      )],
      ["over", t(
        "Assets and liabilities overstated",
        "Aset dan liabiliti terlebih nyata"
      )],
      ["profit", t(
        "Revenue overstated",
        "Hasil terlebih nyata"
      )]
    ];

    impacts.forEach(function (item) {
      const option = document.createElement("option");
      option.value = item[0];
      option.textContent = item[1];
      impactSelect.appendChild(option);
    });

    impactSelect.value = state.impact;

    impactSelect.addEventListener("change", function () {
      state.impact = impactSelect.value;
      saveState();
    });

    impactWrap.appendChild(impactSelect);
    workspace.appendChild(impactWrap);

    box.appendChild(workspace);

    const actions = el("div", "c08-row");

    actions.append(
      btn(
        t(
          "SUBMIT FINDINGS",
          "HANTAR PENEMUAN"
        ),
        function () {
          if (
            state.amount === "" ||
            !state.debit ||
            !state.credit ||
            !state.impact
          ) {
            notice(t(
              "Complete all fields before submitting.",
              "Lengkapkan semua ruangan sebelum hantar."
            ));
            render();
            return;
          }

          const correct =
            Number(state.amount) === 85000 &&
            state.debit === "inventory" &&
            state.credit === "payable" &&
            state.impact === "under";

          if (correct) {
            completeCase();
          } else {
            mistake();
            notice(t(
              "The journal entry or financial impact " +
              "is incorrect. Review the evidence.",

              "Catatan jurnal atau kesan kewangan " +
              "tidak betul. Semak semula bukti."
            ));
            render();
          }
        }
      ),
      hintButton()
    );

    box.appendChild(actions);
    addFeedback(box);

    evidenceViewer(root);
  }

  /* ======================================
     COMPLETE CASE
  ====================================== */

  function completeCase() {
    if (state.completed) return;

    if (typeof thfCompleteCase === "function") {
      thfCompleteCase(CASE_ID);
    }

    state.completed = true;
    saveState();

    if (typeof thfRefreshAll === "function") {
      thfRefreshAll();
    } else {
      if (typeof thfRefreshNavigation === "function") {
        thfRefreshNavigation();
      }
      if (typeof thfRefreshCaseFiles === "function") {
        thfRefreshCaseFiles();
      }
    }

    report();
  }

  /* ======================================
     FINAL CASE REPORT
  ====================================== */

  function report() {
    const root = page(t(
      "CASE 08 COMPLETED",
      "KES 08 SELESAI"
    ));

    const box = panel(root);
    box.classList.add("c08-report");

    box.append(
      el("h2", "c08-section-title",
        t(
          "ALYA RAHMAN — FINAL CASE REPORT",
          "ALYA RAHMAN — LAPORAN KES AKHIR"
        )
      ),
      el("p", "",
        t(
          "The investigation confirms an unrecorded " +
          "RM85,000 trade payable relating to materials " +
          "received on 29 December 2025.",

          "Siasatan mengesahkan akaun belum bayar " +
          "RM85,000 yang tidak direkodkan bagi " +
          "bahan diterima pada 29 Disember 2025."
        )
      )
    );

    const table = el("table", "c08-table");

    const header = document.createElement("tr");

    [
      t("Account", "Akaun"),
      "Debit (RM)",
      "Credit (RM)"
    ].forEach(function (name) {
      header.appendChild(el("th", "", name));
    });

    table.appendChild(header);

    const rows = [
      [
        t("Inventory", "Inventori"),
        "85,000",
        "—"
      ],
      [
        t("Accounts Payable", "Akaun Belum Bayar"),
        "—",
        "85,000"
      ]
    ];

    rows.forEach(function (values) {
      const row = document.createElement("tr");

      values.forEach(function (value) {
        row.appendChild(el("td", "", value));
      });

      table.appendChild(row);
    });

    box.appendChild(table);

    const findings = [
      t(
        "The supplier invoice confirms RM85,000 " +
        "remains payable.",

        "Invois pembekal mengesahkan RM85,000 " +
        "masih belum dibayar."
      ),
      t(
        "The GRN confirms the materials were " +
        "received before 31 December 2025.",

        "GRN mengesahkan bahan diterima sebelum " +
        "31 Disember 2025."
      ),
      t(
        "The Accounts Payable Ledger omitted " +
        "the transaction.",

        "Lejar Akaun Belum Bayar tidak " +
        "merekodkan transaksi tersebut."
      ),
      t(
        "Before correction, inventory and " +
        "liabilities were understated by RM85,000. " +
        "Under the stated inventory assumption, " +
        "profit is unchanged.",

        "Sebelum pembetulan, inventori dan " +
        "liabiliti terkurang nyata RM85,000. " +
        "Berdasarkan andaian inventori yang " +
        "dinyatakan, untung tidak berubah."
      )
    ];

    const list = document.createElement("ol");

    findings.forEach(function (finding) {
      list.appendChild(el("li", "", finding));
    });

    box.appendChild(list);

    const data = progressRecord();

    if (data && data.record) {
      box.appendChild(el(
        "div",
        "c08-feedback good",
        t(
          "CASE COMPLETED · XP EARNED: ",
          "KES SELESAI · XP DIPEROLEH: "
        ) + Number(data.record.xp || 0)
      ));
    }

    const actions = el("div", "c08-row");

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
          "REVIEW EVIDENCE",
          "SEMAK BUKTI"
        ),
        function () {
          evidenceReview();
        },
        "c08-btn secondary"
      )
    );

    box.appendChild(actions);
  }

  function evidenceReview() {
    const root = page("THE VANISHING LIABILITY");

    const box = panel(root);

    box.append(
      el("h2", "c08-section-title",
        t("CASE EVIDENCE REVIEW", "SEMAKAN BUKTI KES")
      ),
      btn(
        t("← BACK TO REPORT", "← KEMBALI KE LAPORAN"),
        report,
        "c08-btn secondary"
      )
    );

    evidenceViewer(root);
  }

  /* ======================================
     RENDER
  ====================================== */

  function render() {
    if (!buildScreen()) return;

    if (state.completed) {
      report();
      return;
    }

    if (!state.started) {
      intro();
      return;
    }

    if (state.stage === 1) {
      stageOne();
    } else if (state.stage === 2) {
      stageTwo();
    } else if (state.stage === 3) {
      stageThree();
    } else {
      intro();
    }
  }

  /* ======================================
     OPEN CASE
  ====================================== */

  function openCase08() {
    if (typeof thfCaseStatus === "function") {
      const previous = thfCaseStatus("07");

      if (!previous || previous.completed !== true) {
        showMessage(
          t("CASE LOCKED", "KES DIKUNCI"),
          t(
            "Complete Case 07 first.",
            "Selesaikan Kes 07 dahulu."
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
      !data.record?.completed &&
      Number(data.progress.lives ?? 3) <= 0
    ) {
      showMessage(
        t("NO LIVES AVAILABLE", "NYAWA TELAH HABIS"),
        t(
          "Wait for life recovery before continuing.",
          "Tunggu nyawa pulih sebelum meneruskan."
        )
      );
      return;
    }

    clearNotice();
    showCaseScreen();
    render();
  }

  /* ======================================
     GLOBAL API
  ====================================== */

  window.thfCase08Open = openCase08;
  window.thfOpenCase08 = openCase08;
  window.thfCase08ReturnToFiles = exitCase;

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

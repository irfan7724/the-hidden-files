"use strict";

/* ==========================================
   THE HIDDEN FILES
   CASE 09 — THE ALTERED STATEMENT
========================================== */

(function () {

  const ID = "09";
  const PREFIX = "thf_case09_statement_v1_";
  const SCREEN = "case09-screen";

  const ROWS = [
    {
      id: "ppe",
      en: "Property, Plant & Equipment",
      ms: "Hartanah, Loji dan Peralatan",
      draft: 500000,
      board: 380000
    },
    {
      id: "inventory",
      en: "Inventory",
      ms: "Inventori",
      draft: 200000,
      board: 115000
    },
    {
      id: "cash",
      en: "Cash and Bank",
      ms: "Tunai dan Bank",
      draft: 108000,
      board: 108000
    },
    {
      id: "payable",
      en: "Trade Payables",
      ms: "Akaun Belum Bayar",
      draft: 150000,
      board: 65000
    },
    {
      id: "revenue",
      en: "Revenue",
      ms: "Hasil",
      draft: 900000,
      board: 900000
    },
    {
      id: "profit",
      en: "Profit Before Tax",
      ms: "Untung Sebelum Cukai",
      draft: 240000,
      board: 120000
    }
  ];

  const TARGETS = [
    "ppe",
    "inventory",
    "payable",
    "profit"
  ];

  const DOCS = [
    {
      id: "machinery",
      icon: "🧾",
      name: {
        en: "Case 07 · Machinery Invoice",
        ms: "Kes 07 · Invois Mesin"
      },
      body: {
        en:
          "MERIDIAN CORPORATION\n" +
          "Machinery purchased: RM120,000\n" +
          "Original journal: Dr Repairs and Maintenance, Cr Bank\n" +
          "Correcting reclassification:\n" +
          "Dr PPE RM120,000\n" +
          "Cr Repairs and Maintenance RM120,000\n\n" +
          "Depreciation and tax effects are excluded.",
        ms:
          "MERIDIAN CORPORATION\n" +
          "Mesin dibeli: RM120,000\n" +
          "Jurnal asal: Dr Pembaikan dan Penyelenggaraan, Cr Bank\n" +
          "Pengelasan semula:\n" +
          "Dr PPE RM120,000\n" +
          "Cr Pembaikan dan Penyelenggaraan RM120,000\n\n" +
          "Kesan susut nilai dan cukai tidak diambil kira."
      }
    },
    {
      id: "supplier",
      icon: "📦",
      name: {
        en: "Case 08 · Invoice & GRN",
        ms: "Kes 08 · Invois dan GRN"
      },
      body: {
        en:
          "MERIDIAN CORPORATION\n" +
          "Supplier Invoice INV-4582: RM85,000\n" +
          "GRN-2025-091\n" +
          "Materials received: 29 December 2025\n" +
          "Invoice unpaid and omitted from Trade Payables.\n" +
          "Materials remain in inventory.\n\n" +
          "Correction:\n" +
          "Dr Inventory RM85,000\n" +
          "Cr Trade Payables RM85,000",
        ms:
          "MERIDIAN CORPORATION\n" +
          "Invois INV-4582: RM85,000\n" +
          "GRN-2025-091\n" +
          "Bahan diterima: 29 Disember 2025\n" +
          "Invois belum dibayar dan tidak direkodkan.\n" +
          "Bahan masih dalam inventori.\n\n" +
          "Pembetulan:\n" +
          "Dr Inventori RM85,000\n" +
          "Cr Akaun Belum Bayar RM85,000"
      }
    },
    {
      id: "approval",
      icon: "📑",
      name: {
        en: "Board Version Approval",
        ms: "Kelulusan Versi Lembaga"
      },
      body: {
        en:
          "MERIDIAN CORPORATION\n" +
          "Board Presentation · FY2025\n" +
          "Revised figures submitted.\n" +
          "No signed adjustment schedule attached.\n" +
          "The document does not prove who changed the figures.",
        ms:
          "MERIDIAN CORPORATION\n" +
          "Pembentangan Lembaga · FY2025\n" +
          "Angka yang diubah telah diserahkan.\n" +
          "Tiada jadual pelarasan bertandatangan.\n" +
          "Dokumen tidak membuktikan siapa yang mengubah angka."
      }
    },
    {
      id: "bank",
      icon: "🏦",
      name: {
        en: "Bank Reconciliation",
        ms: "Penyata Penyesuaian Bank"
      },
      body: {
        en:
          "MERIDIAN CORPORATION\n" +
          "Adjusted bank balance: RM108,000\n" +
          "No difference in cash between the statements.",
        ms:
          "MERIDIAN CORPORATION\n" +
          "Baki bank terlaras: RM108,000\n" +
          "Tiada perbezaan tunai antara kedua-dua penyata."
      }
    }
  ];

  const TEXT = {
    en: {
      title: "THE ALTERED STATEMENT",
      subtitle: "CASE 09 · FINANCIAL STATEMENT COMPARISON",
      back: "← CASE FILES",
      introTitle: "TWO VERSIONS. ONE TRUTH.",
      intro:
        "Alya Rahman discovers two versions of Meridian Corporation's " +
        "financial statements. The working draft includes the corrections " +
        "from Cases 07 and 08, but the board version omits them. " +
        "Identify the differences, trace the evidence and restore the figures.",
      start: "BEGIN COMPARISON",
      phase1: "PHASE 1 / 3 · SPOT THE MANIPULATION",
      phase2: "PHASE 2 / 3 · TRACE THE EVIDENCE",
      phase3: "PHASE 3 / 3 · RESTORE THE STATEMENT",
      draft: "CORRECTED WORKING DRAFT",
      board: "BOARD VERSION",
      instruction1:
        "Click the FOUR altered amounts in the Board Version.",
      instruction2:
        "Match each suspicious amount with the correct evidence.",
      instruction3:
        "Enter the four correct amounts to restore the Board Version.",
      verify: "VERIFY SELECTION",
      check: "CHECK EVIDENCE",
      restore: "RESTORE STATEMENT",
      evidence: "EVIDENCE VIEWER",
      hint: "💡 HINTS",
      close: "CLOSE",
      unlock: "UNLOCK HINT",
      selected: "ALTERED AMOUNTS SELECTED",
      correct: "Correct. Continue to the next phase.",
      wrong1:
        "Incorrect selection. Compare both statements carefully.",
      wrong2:
        "Incorrect evidence link. Review the source documents.",
      wrong3:
        "One or more restored amounts are incorrect.",
      missing: "Complete every field before submitting.",
      complete: "CASE 09 COMPLETED",
      report: "ALYA RAHMAN · FINAL CASE REPORT",
      reportIntro:
        "The board version omitted corrections identified in " +
        "Cases 07 and 08.",
      return: "RETURN TO CASE FILES",
      review: "REVIEW EVIDENCE",
      locked: "Complete Case 08 first.",
      noLives: "No lives available.",
      select: "SELECT EVIDENCE",
      hint1:
        "Only four amounts differ. Cash and Revenue are unchanged.",
      hint2:
        "Machinery affects PPE and Profit by RM120,000. " +
        "The supplier invoice affects Inventory and Payables by RM85,000.",
      warning:
        "The evidence identifies misstatements, but does not prove " +
        "who altered the board file or establish fraudulent intent."
    },

    ms: {
      title: "THE ALTERED STATEMENT",
      subtitle: "KES 09 · PERBANDINGAN PENYATA KEWANGAN",
      back: "← FAIL KES",
      introTitle: "DUA VERSI. SATU KEBENARAN.",
      intro:
        "Alya Rahman menemui dua versi penyata kewangan Meridian Corporation. " +
        "Draf kerja mengandungi pembetulan daripada Kes 07 dan 08, " +
        "tetapi versi lembaga tidak memasukkannya. " +
        "Cari perbezaan, semak bukti dan pulihkan angka yang betul.",
      start: "MULAKAN PERBANDINGAN",
      phase1: "FASA 1 / 3 · KESAN MANIPULASI",
      phase2: "FASA 2 / 3 · JEJAK BUKTI",
      phase3: "FASA 3 / 3 · PULIHKAN PENYATA",
      draft: "DRAF KERJA YANG DIBETULKAN",
      board: "VERSI LEMBAGA",
      instruction1:
        "Klik EMPAT amaun yang telah diubah dalam Versi Lembaga.",
      instruction2:
        "Padankan setiap amaun dengan dokumen bukti yang betul.",
      instruction3:
        "Masukkan empat amaun yang betul untuk memulihkan penyata.",
      verify: "SAHKAN PILIHAN",
      check: "SEMAK BUKTI",
      restore: "PULIHKAN PENYATA",
      evidence: "PAPARAN BUKTI",
      hint: "💡 PETUNJUK",
      close: "TUTUP",
      unlock: "BUKA PETUNJUK",
      selected: "AMAUN DIUBAH DIPILIH",
      correct: "Betul. Teruskan ke fasa seterusnya.",
      wrong1:
        "Pilihan salah. Bandingkan kedua-dua penyata dengan teliti.",
      wrong2:
        "Padanan bukti salah. Semak dokumen sumber.",
      wrong3:
        "Satu atau lebih amaun pembetulan salah.",
      missing: "Lengkapkan semua ruangan dahulu.",
      complete: "KES 09 SELESAI",
      report: "ALYA RAHMAN · LAPORAN KES AKHIR",
      reportIntro:
        "Versi lembaga tidak memasukkan pembetulan daripada Kes 07 dan 08.",
      return: "KEMBALI KE FAIL KES",
      review: "SEMAK BUKTI",
      locked: "Selesaikan Kes 08 dahulu.",
      noLives: "Nyawa telah habis.",
      select: "PILIH BUKTI",
      hint1:
        "Hanya empat amaun berbeza. Tunai dan Hasil tidak berubah.",
      hint2:
        "Mesin menjejaskan PPE dan Untung sebanyak RM120,000. " +
        "Invois pembekal menjejaskan Inventori dan Akaun Belum Bayar " +
        "sebanyak RM85,000.",
      warning:
        "Bukti menunjukkan salah nyata tetapi tidak membuktikan " +
        "siapa yang mengubah fail atau niat penipuan."
    }
  };

  let state = null;
  let overlay = null;
  let feedback = "";
  let feedbackKind = "bad";

  function byId(id) {
    return document.getElementById(id);
  }

  function profile() {
    return typeof getActiveDetective === "function"
      ? getActiveDetective()
      : null;
  }

  function language() {
    const p = profile();

    let value = "en";

    if (p && typeof getProfileLanguage === "function") {
      value = getProfileLanguage(p);
    } else if (p) {
      value = p.settings?.language || p.language || "en";
    }

    return ["ms", "bm", "malay"].includes(
      String(value).toLowerCase()
    ) ? "ms" : "en";
  }

  function t() {
    return TEXT[language()];
  }

  function profileId() {
    const p = profile();

    return String(
      p?.id ||
      p?.profileId ||
      p?.username ||
      p?.name ||
      "default"
    );
  }

  function freshState() {
    return {
      started: false,
      phase: 1,
      marked: [],
      links: {},
      figures: {},
      hints: 0,
      completed: false
    };
  }

  function load() {
    try {
      const saved = JSON.parse(
        localStorage.getItem(PREFIX + profileId()) || "{}"
      );

      return {
        ...freshState(),
        ...saved,
        marked: Array.isArray(saved.marked)
          ? saved.marked
          : [],
        links: saved.links || {},
        figures: saved.figures || {}
      };
    } catch (error) {
      return freshState();
    }
  }

  function save() {
    try {
      localStorage.setItem(
        PREFIX + profileId(),
        JSON.stringify(state)
      );
    } catch (error) {
      console.warn("Case 09 autosave failed:", error);
    }
  }

  function element(tag, className = "", value = "") {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = value;
    return node;
  }

  function button(label, action, className = "c09-btn") {
    const node = element("button", className, label);
    node.type = "button";
    node.addEventListener("click", action);
    return node;
  }

  function panel(root) {
    const node = element("section", "c09-panel");
    root.appendChild(node);
    return node;
  }

  function money(amount) {
    return "RM " + Number(amount).toLocaleString("en-MY");
  }

  function mistake(message) {
    if (typeof thfRegisterMistake === "function") {
      thfRegisterMistake(ID);
    }

    feedback = message;
    feedbackKind = "bad";
    render();
  }

  function buildScreen() {
    let screen = byId(SCREEN);

    if (screen) return screen;

    const app = byId("app");
    if (!app) return null;

    screen = element("section", "screen hidden");
    screen.id = SCREEN;
    screen.hidden = true;

    const content = element("div", "c09-shell");
    content.id = "c09-content";

    screen.appendChild(content);
    app.appendChild(screen);

    if (
      typeof screenIds !== "undefined" &&
      Array.isArray(screenIds) &&
      !screenIds.includes(SCREEN)
    ) {
      screenIds.push(SCREEN);
    }

    return screen;
  }

  function show() {
    const screen = buildScreen();
    if (!screen) return;

    if (typeof showScreen === "function") {
      showScreen(SCREEN);
    }

    document.querySelectorAll("#app > .screen").forEach(
      function (item) {
        const hidden = item !== screen;
        item.hidden = hidden;
        item.classList.toggle("hidden", hidden);
      }
    );

    screen.hidden = false;
    screen.classList.remove("hidden");
    screen.scrollTop = 0;

    window.scrollTo(0, 0);
  }

  function exit() {
    closeModal();

    if (typeof window.thfOpenCaseFiles === "function") {
      window.thfOpenCaseFiles();
    } else if (typeof showScreen === "function") {
      showScreen("far-overview-screen");
    }
  }

  function shell(title) {
    const root = byId("c09-content");
    root.replaceChildren();

    const top = element("header", "c09-top");
    const info = element("div");

    info.append(
      element("p", "c09-kicker", t().subtitle),
      element("h1", "c09-title", title)
    );

    top.append(
      info,
      button(t().back, exit, "c09-btn ghost")
    );

    root.appendChild(top);
    return root;
  }

  function modal(title) {
    closeModal();

    overlay = element("div", "c09-modal-bg");

    const box = element("div", "c09-modal");
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");

    box.appendChild(element("h3", "", title));
    overlay.appendChild(box);

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        closeModal();
      }
    });

    document.body.appendChild(overlay);

    return box;
  }

  function closeModal() {
    if (overlay) {
      overlay.remove();
      overlay = null;
    }
  }

  function openDocument(doc) {
    const box = modal(
      doc.icon + " " + doc.name[language()]
    );

    box.append(
      element("div", "c09-paper", doc.body[language()]),
      button(t().close, closeModal, "c09-btn secondary")
    );
  }

  function syncHints() {
    if (
      typeof thfLoadProgress !== "function" ||
      typeof thfGetCase !== "function" ||
      typeof thfSaveProgress !== "function"
    ) {
      return;
    }

    const progress = thfLoadProgress();
    const record = thfGetCase(progress, ID);

    if (!record) return;

    state.hints = Math.max(
      state.hints,
      Number(record.hints || 0)
    );

    record.hints = state.hints;

    thfSaveProgress(progress);
    save();
  }

  function openHints() {
    const box = modal(
      t().hint + " (" + state.hints + "/2)"
    );

    [t().hint1, t().hint2].forEach(function (hint, index) {
      const unlocked = state.hints > index;

      const card = element(
        "div",
        "c09-hint" + (unlocked ? "" : " locked")
      );

      card.append(
        element(
          "strong",
          "",
          (unlocked ? "💡 " : "🔒 ") +
          "HINT " + (index + 1)
        ),
        element(
          "p",
          "",
          unlocked
            ? hint
            : (
              language() === "ms"
                ? "Petunjuk masih dikunci."
                : "Hint is locked."
            )
        )
      );

      box.appendChild(card);
    });

    const actions = element("div", "c09-row");

    if (state.hints < 2) {
      actions.appendChild(
        button(
          t().unlock + " " + (state.hints + 1),
          function () {
            state.hints++;
            syncHints();
            save();
            openHints();
            render();
          }
        )
      );
    }

    actions.appendChild(
      button(t().close, closeModal, "c09-btn secondary")
    );

    box.appendChild(actions);
  }

  function evidenceViewer(root) {
    const section = panel(root);
    section.appendChild(
      element("h3", "", t().evidence)
    );

    const grid = element("div", "c09-evidence-grid");

    DOCS.forEach(function (doc) {
      grid.appendChild(
        button(
          doc.icon + " " + doc.name[language()],
          function () {
            openDocument(doc);
          },
          "c09-doc"
        )
      );
    });

    section.appendChild(grid);
  }

  function controls(section, action, label) {
    const row = element("div", "c09-row");

    row.append(
      button(label, action),
      button(
        t().hint + " (" + state.hints + "/2)",
        openHints,
        "c09-btn secondary"
      )
    );

    section.appendChild(row);

    if (feedback) {
      section.appendChild(
        element(
          "div",
          "c09-feedback " + feedbackKind,
          feedback
        )
      );
    }
  }

  function intro() {
    const root = shell(t().title);
    const section = panel(root);

    section.append(
      element("h2", "", t().introTitle),
      element("p", "", t().intro),
      button(t().start, function () {
        state.started = true;
        save();
        render();
      })
    );
  }

  function statements(root, clickable) {
    const layout = element("div", "c09-comparison");

    ["draft", "board"].forEach(function (version) {
      const sheet = element("section", "c09-sheet");

      sheet.append(
        element(
          "h3",
          "",
          version === "draft"
            ? t().draft
            : t().board
        ),
        element(
          "p",
          "",
          "MERIDIAN CORPORATION · FY2025"
        )
      );

      const table = element("table", "c09-table");
      const heading = element("tr");

      heading.append(
        element(
          "th",
          "",
          language() === "ms" ? "Akaun" : "Account"
        ),
        element("th", "", "RM")
      );

      table.appendChild(heading);

      ROWS.forEach(function (record) {
        const tr = element("tr");
        const td = element("td");

        tr.appendChild(
          element("td", "", record[language()])
        );

        if (version === "board" && clickable) {
          const marked = state.marked.includes(record.id);

          td.appendChild(
            button(
              (marked ? "✓ " : "") + money(record.board),
              function () {
                if (marked) {
                  state.marked = state.marked.filter(
                    function (id) {
                      return id !== record.id;
                    }
                  );
                } else {
                  state.marked.push(record.id);
                }

                feedback = "";
                save();
                render();
              },
              "c09-figure" + (marked ? " selected" : "")
            )
          );
        } else {
          td.textContent = money(record[version]);
        }

        tr.appendChild(td);
        table.appendChild(tr);
      });

      sheet.appendChild(table);
      layout.appendChild(sheet);
    });

    root.appendChild(layout);
  }

  /* ======================================
     PHASE 1 — SPOT THE MANIPULATION
  ====================================== */

  function phase1() {
    const root = shell(t().title);
    const section = panel(root);

    section.append(
      element("p", "c09-kicker", t().phase1),
      element("h2", "", t().introTitle),
      element("p", "", t().instruction1),
      element(
        "span",
        "c09-chip",
        t().selected + ": " +
        state.marked.length + "/4"
      )
    );

    statements(root, true);

    const actions = panel(root);

    controls(
      actions,
      function () {
        const correct =
          state.marked.length === 4 &&
          TARGETS.every(function (id) {
            return state.marked.includes(id);
          });

        if (correct) {
          state.phase = 2;
          feedback = "";
          save();
          render();
        } else {
          mistake(t().wrong1);
        }
      },
      t().verify
    );

    evidenceViewer(root);
  }

  /* ======================================
     PHASE 2 — TRACE THE EVIDENCE
  ====================================== */

  function evidenceSelect(key) {
    const field = element("label", "c09-field");

    const record = ROWS.find(function (item) {
      return item.id === key;
    });

    field.appendChild(
      element("span", "", record[language()])
    );

    const select = element("select", "c09-select");

    const blank = document.createElement("option");
    blank.value = "";
    blank.textContent = t().select;
    select.appendChild(blank);

    DOCS.forEach(function (doc) {
      const option = document.createElement("option");

      option.value = doc.id;
      option.textContent =
        doc.icon + " " + doc.name[language()];

      select.appendChild(option);
    });

    select.value = state.links[key] || "";

    select.addEventListener("change", function () {
      state.links[key] = select.value;
      save();
    });

    field.appendChild(select);
    return field;
  }

  function phase2() {
    const root = shell(t().title);
    const section = panel(root);

    section.append(
      element("p", "c09-kicker", t().phase2),
      element("h2", "", t().evidence),
      element("p", "", t().instruction2)
    );

    const grid = element("div", "c09-form-grid");

    TARGETS.forEach(function (key) {
      grid.appendChild(evidenceSelect(key));
    });

    section.appendChild(grid);

    controls(
      section,
      function () {
        const missing = TARGETS.some(function (key) {
          return !state.links[key];
        });

        if (missing) {
          feedback = t().missing;
          render();
          return;
        }

        const correct = TARGETS.every(function (key) {
          const expected =
            key === "ppe" || key === "profit"
              ? "machinery"
              : "supplier";

          return state.links[key] === expected;
        });

        if (correct) {
          state.phase = 3;
          feedback = "";
          save();
          render();
        } else {
          mistake(t().wrong2);
        }
      },
      t().check
    );

    evidenceViewer(root);
  }

  /* ======================================
     PHASE 3 — RESTORE THE STATEMENT
  ====================================== */

  function phase3() {
    const root = shell(t().title);
    const section = panel(root);

    section.append(
      element("p", "c09-kicker", t().phase3),
      element("h2", "", t().board),
      element("p", "", t().instruction3)
    );

    const grid = element("div", "c09-form-grid");

    TARGETS.forEach(function (key) {
      const record = ROWS.find(function (item) {
        return item.id === key;
      });

      const field = element("label", "c09-field");

      field.appendChild(
        element(
          "span",
          "",
          record[language()] + " (RM)"
        )
      );

      const input = element("input", "c09-input");

      input.type = "number";
      input.min = "0";
      input.step = "1";
      input.placeholder = "RM";
      input.value = state.figures[key] ?? "";

      input.addEventListener("input", function () {
        state.figures[key] = input.value;
        save();
      });

      field.appendChild(input);
      grid.appendChild(field);
    });

    section.appendChild(grid);

    controls(
      section,
      function () {
        const missing = TARGETS.some(function (key) {
          return (
            state.figures[key] === undefined ||
            state.figures[key] === ""
          );
        });

        if (missing) {
          feedback = t().missing;
          render();
          return;
        }

        const correct = TARGETS.every(function (key) {
          const record = ROWS.find(function (item) {
            return item.id === key;
          });

          return Number(state.figures[key]) === record.draft;
        });

        if (correct) {
          completeCase();
        } else {
          mistake(t().wrong3);
        }
      },
      t().restore
    );

    evidenceViewer(root);
  }

  /* ======================================
     CASE COMPLETION
  ====================================== */

  function completeCase() {
    if (state.completed) return;

    state.completed = true;
    save();

    if (typeof thfCompleteCase === "function") {
      thfCompleteCase(ID);
    }

    if (typeof thfRefreshAll === "function") {
      thfRefreshAll();
    }

    if (typeof thfRefreshCaseFiles === "function") {
      thfRefreshCaseFiles();
    }

    feedback = "";
    report();
  }

  /* ======================================
     FINAL CASE REPORT
  ====================================== */

  function report() {
    const root = shell(t().complete);
    const section = panel(root);

    section.append(
      element("h2", "", t().report),
      element("p", "", t().reportIntro)
    );

    const table = element("table", "c09-report-table");
    const heading = element("tr");

    [
      language() === "ms" ? "Akaun" : "Account",
      t().board,
      t().draft
    ].forEach(function (value) {
      heading.appendChild(element("th", "", value));
    });

    table.appendChild(heading);

    TARGETS.forEach(function (key) {
      const record = ROWS.find(function (item) {
        return item.id === key;
      });

      const tr = element("tr");

      [
        record[language()],
        money(record.board),
        money(record.draft)
      ].forEach(function (value) {
        tr.appendChild(element("td", "", value));
      });

      table.appendChild(tr);
    });

    section.appendChild(table);

    const facts = language() === "ms"
      ? [
          "PPE dan untung sebelum cukai masing-masing " +
          "terkurang nyata RM120,000 sebelum kesan " +
          "susut nilai dan cukai.",
          "Inventori dan akaun belum bayar masing-masing " +
          "terkurang nyata RM85,000.",
          "Jumlah aset terkurang nyata RM205,000, " +
          "liabiliti RM85,000 dan ekuiti RM120,000."
        ]
      : [
          "PPE and profit before tax were each understated " +
          "by RM120,000 before depreciation and tax effects.",
          "Inventory and trade payables were each " +
          "understated by RM85,000.",
          "Total assets were understated by RM205,000, " +
          "liabilities by RM85,000 and equity by RM120,000."
        ];

    const list = element("ul");

    facts.forEach(function (fact) {
      list.appendChild(element("li", "", fact));
    });

    section.appendChild(list);

    section.appendChild(
      element("div", "c09-feedback good", t().warning)
    );

    const actions = element("div", "c09-row");

    actions.append(
      button(t().return, exit),
      button(
        t().hint + " (" + state.hints + "/2)",
        openHints,
        "c09-btn secondary"
      ),
      button(
        t().review,
        function () {
          evidenceViewer(root);
        },
        "c09-btn secondary"
      )
    );

    section.appendChild(actions);
  }

  /* ======================================
     RENDER GAME
  ====================================== */

  function render() {
    if (!buildScreen() || !state) return;

    if (state.completed) {
      report();
      return;
    }

    if (!state.started) {
      intro();
      return;
    }

    if (state.phase === 1) {
      phase1();
    } else if (state.phase === 2) {
      phase2();
    } else {
      phase3();
    }
  }

  /* ======================================
     OPEN CASE 09
  ====================================== */

  function openCase09() {
    if (
      typeof thfCaseStatus === "function" &&
      thfCaseStatus("08")?.completed !== true
    ) {
      alert(t().locked);
      return;
    }

    if (
      typeof thfLoadProgress === "function" &&
      typeof thfCaseStatus === "function"
    ) {
      const progress = thfLoadProgress();

      if (
        !thfCaseStatus(ID)?.completed &&
        Number(progress.lives ?? 3) <= 0
      ) {
        alert(t().noLives);
        return;
      }
    }

    state = load();
    syncHints();
    feedback = "";

    show();
    render();
  }

  window.thfCase09Open = openCase09;
  window.thfOpenCase09 = openCase09;
  window.thfCase09ReturnToFiles = exit;

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
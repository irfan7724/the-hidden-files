
"use strict";

/* ==========================================
   THE HIDDEN FILES
   CASE 10 — STUDY MODE
   File: 22-case10-study.js

   - Review 18 original questions
   - Show player's saved answers
   - Show correct answers and explanations
   - Evidence Viewer
   - Five stages
   - BM / English
   - No changes to XP, lives or progress
========================================== */

(function () {

  const PREFIX = "thf_case10_final_v1_";
  const ID = "thf-study-screen";

  const STAGES = [
    "THE CONSPIRACY BOARD",
    "THE HIDDEN TRANSACTIONS",
    "THE FINAL INTERROGATION",
    "THE FINAL RECONCILIATION",
    "THE FINAL VERDICT"
  ];

  const TASKS = [
    [
      { id: "a", en: "Machinery wrongly expensed", ms: "Mesin salah direkod sebagai belanja", answer: "machinery" },
      { id: "b", en: "Unrecorded supplier liability", ms: "Liabiliti pembekal tidak direkod", answer: "supplier" },
      { id: "c", en: "Four altered financial figures", ms: "Empat angka kewangan diubah", answer: "statement" },
      { id: "d", en: "Sequence of system activity", ms: "Urutan aktiviti sistem", answer: "access" }
    ],
    [
      { id: "a", en: "RM120,000 machinery — Debit", ms: "Mesin RM120,000 — Debit", answer: "ppe" },
      { id: "b", en: "RM120,000 machinery — Credit", ms: "Mesin RM120,000 — Kredit", answer: "repairs" },
      { id: "c", en: "RM85,000 goods received — Debit", ms: "Barang diterima RM85,000 — Debit", answer: "inventory" },
      { id: "d", en: "RM85,000 goods received — Credit", ms: "Barang diterima RM85,000 — Kredit", answer: "payables" }
    ],
    [
      { id: "a", en: "Daniel: 'I did not prepare Version B extracts.'", ms: "Daniel: 'Saya tidak menyediakan petikan Versi B.'", answer: "approval" },
      { id: "b", en: "Sarah: 'I never approved the reporting package.'", ms: "Sarah: 'Saya tidak pernah meluluskan pakej laporan.'", answer: "approval" },
      { id: "c", en: "Adrian: 'I never instructed the use of Version B.'", ms: "Adrian: 'Saya tidak pernah mengarahkan penggunaan Versi B.'", answer: "instruction" }
    ],
    [
      { id: "ppe", en: "Property, Plant & Equipment", ms: "Hartanah, Loji dan Peralatan", answer: "500000" },
      { id: "inventory", en: "Inventory", ms: "Inventori", answer: "200000" },
      { id: "payables", en: "Trade Payables", ms: "Akaun Belum Bayar", answer: "150000" },
      { id: "profit", en: "Profit Before Tax", ms: "Untung Sebelum Cukai", answer: "240000" }
    ],
    [
      { id: "daniel", en: "Daniel Harris — Senior Accountant", ms: "Daniel Harris — Akauntan Kanan", answer: "preparer" },
      { id: "sarah", en: "Sarah Malik — Finance Director", ms: "Sarah Malik — Pengarah Kewangan", answer: "approver" },
      { id: "adrian", en: "Adrian Cole — Chief Financial Officer", ms: "Adrian Cole — Ketua Pegawai Kewangan", answer: "director" }
    ]
  ];

  const CHOICES = {
    1: [
      ["machinery", "E07 — Machinery Invoice"],
      ["supplier", "E08 — Supplier Invoice & GRN"],
      ["statement", "E09 — Altered Board Statement"],
      ["access", "E10-A — System Access Log"],
      ["approval", "E10-C — Signed Approval Trail"]
    ],
    2: [
      ["ppe", "Property, Plant & Equipment"],
      ["repairs", "Repairs and Maintenance"],
      ["inventory", "Inventory"],
      ["payables", "Trade Payables"],
      ["revenue", "Revenue"],
      ["cash", "Cash"]
    ],
    3: [
      ["access", "E10-A — System Access Log"],
      ["instruction", "E10-B — Internal Instruction"],
      ["approval", "E10-C — Signed Approval Trail"],
      ["supplier", "E08 — Supplier Invoice & GRN"]
    ],
    5: [
      ["preparer", "Prepared the journal extracts"],
      ["approver", "Approved the reporting package"],
      ["director", "Directed and released Version B"],
      ["uninvolved", "No documented involvement"]
    ]
  };

  const EVIDENCE = [
    {
      id: "machinery",
      name: "E07 — Machinery Invoice",
      icon: "⚙️",
      en: "Machinery costing RM120,000 was recorded as Repairs and Maintenance. Correction: Dr PPE RM120,000, Cr Repairs and Maintenance RM120,000. Depreciation and tax effects are excluded.",
      ms: "Mesin RM120,000 direkod sebagai Pembaikan dan Penyelenggaraan. Pembetulan: Dr PPE RM120,000, Cr Pembaikan dan Penyelenggaraan RM120,000. Kesan susut nilai dan cukai tidak diambil kira."
    },
    {
      id: "supplier",
      name: "E08 — Supplier Invoice & GRN",
      icon: "📦",
      en: "Invoice INV-4582: RM85,000. Goods received on 29 December 2025 and still in inventory. Correction: Dr Inventory RM85,000, Cr Trade Payables RM85,000.",
      ms: "Invois INV-4582: RM85,000. Barang diterima pada 29 Disember 2025 dan masih dalam inventori. Pembetulan: Dr Inventori RM85,000, Cr Akaun Belum Bayar RM85,000."
    },
    {
      id: "statement",
      name: "E09 — Altered Board Statement",
      icon: "📊",
      en: "Board Version: PPE RM380,000, Inventory RM115,000, Trade Payables RM65,000, Profit Before Tax RM120,000. Corrected amounts: RM500,000, RM200,000, RM150,000 and RM240,000.",
      ms: "Versi lembaga: PPE RM380,000, Inventori RM115,000, Akaun Belum Bayar RM65,000, Untung Sebelum Cukai RM120,000. Angka betul: RM500,000, RM200,000, RM150,000 dan RM240,000."
    },
    {
      id: "access",
      name: "E10-A — System Access Log",
      icon: "🔐",
      en: "28 Dec 2025, 22:14 — DHARRIS posted an adjustment removing RM120,000 from PPE. 30 Dec 2025, 20:32 — SMALIK approved the revised reporting package. 31 Dec 2025, 21:10 — ACOLE released Board Version B. User accounts alone do not prove who operated them.",
      ms: "28 Dis 2025, 22:14 — DHARRIS merekod pelarasan mengeluarkan RM120,000 daripada PPE. 30 Dis 2025, 20:32 — SMALIK meluluskan pakej laporan. 31 Dis 2025, 21:10 — ACOLE mengeluarkan Versi B. Akaun pengguna sahaja tidak membuktikan siapa yang menggunakannya."
    },
    {
      id: "instruction",
      name: "E10-B — Internal Instruction",
      icon: "✉️",
      en: "Adrian Cole instructed Sarah Malik and Daniel Harris to use the revised board package, omit the original adjustment schedule and ensure the figures matched Version B. The message metadata and acknowledgements were verified.",
      ms: "Adrian Cole mengarahkan Sarah Malik dan Daniel Harris menggunakan pakej lembaga yang diubah, tidak memasukkan jadual pelarasan asal dan memastikan angka sama dengan Versi B. Metadata mesej dan pengakuan penerimaan telah disahkan."
    },
    {
      id: "approval",
      name: "E10-C — Signed Approval Trail",
      icon: "🖋️",
      en: "Daniel Harris acknowledged preparing Version B journal extracts. Sarah Malik signed approval of the reporting package. Adrian Cole signed final release to the board. Each acknowledged the missing adjustment schedule.",
      ms: "Daniel Harris mengakui menyediakan petikan jurnal Versi B. Sarah Malik menandatangani kelulusan pakej laporan. Adrian Cole menandatangani pelepasan akhir kepada lembaga. Setiap seorang mengakui jadual pelarasan tidak disertakan."
    }
  ];

  const NOTES = [
    [
      ["The machinery invoice proves the RM120,000 was wrongly expensed.", "Invois mesin membuktikan RM120,000 tersalah direkod sebagai belanja."],
      ["The supplier invoice and GRN show an unrecorded RM85,000 payable.", "Invois pembekal dan GRN menunjukkan hutang RM85,000 belum direkod."],
      ["The altered statement contains the four misstated figures.", "Penyata yang diubah mengandungi empat angka yang salah."],
      ["The access log documents the sequence of system activity.", "Log akses merekodkan urutan aktiviti sistem."]
    ],
    [
      ["Debit PPE to recognise the machinery as an asset.", "Debit PPE untuk mengiktiraf mesin sebagai aset."],
      ["Credit Repairs and Maintenance to reverse the incorrect expense.", "Kredit Pembaikan dan Penyelenggaraan untuk membalikkan belanja yang salah."],
      ["Debit Inventory for goods received before year-end.", "Debit Inventori bagi barang diterima sebelum akhir tahun."],
      ["Credit Trade Payables for the supplier liability.", "Kredit Akaun Belum Bayar bagi hutang pembekal."]
    ],
    [
      ["The signed trail confirms Daniel prepared the extracts.", "Jejak bertandatangan mengesahkan Daniel menyediakan petikan jurnal."],
      ["The signed trail confirms Sarah approved the package.", "Jejak bertandatangan mengesahkan Sarah meluluskan pakej laporan."],
      ["The internal instruction confirms Adrian directed Version B.", "Arahan dalaman mengesahkan Adrian mengarahkan penggunaan Versi B."]
    ],
    [
      ["RM380,000 + RM120,000 = RM500,000.", "RM380,000 + RM120,000 = RM500,000."],
      ["RM115,000 + RM85,000 = RM200,000.", "RM115,000 + RM85,000 = RM200,000."],
      ["RM65,000 + RM85,000 = RM150,000.", "RM65,000 + RM85,000 = RM150,000."],
      ["RM120,000 + RM120,000 = RM240,000, excluding depreciation and tax effects.", "RM120,000 + RM120,000 = RM240,000, tanpa kesan susut nilai dan cukai."]
    ],
    [
      ["Daniel prepared Version B journal extracts.", "Daniel menyediakan petikan jurnal Versi B."],
      ["Sarah approved the reporting package.", "Sarah meluluskan pakej pelaporan."],
      ["Adrian directed and released Version B.", "Adrian mengarahkan dan mengeluarkan Versi B."]
    ]
  ];

  const STORIES = {
    en: [
      "Alya: Connect each finding to its supporting evidence.",
      "Alya: Reconstruct the two correcting journal entries.",
      "Alya: Confront each person's claim with documentary evidence.",
      "Alya: Calculate the corrected financial statement amounts.",
      "Alya: Identify each person's documented role."
    ],
    ms: [
      "Alya: Hubungkan setiap penemuan dengan bukti sokongan.",
      "Alya: Bina semula dua catatan jurnal pembetulan.",
      "Alya: Cabar setiap kenyataan menggunakan bukti dokumen.",
      "Alya: Kira angka penyata kewangan yang telah dibetulkan.",
      "Alya: Kenal pasti peranan setiap individu berdasarkan dokumen."
    ]
  };

  let screen = null;
  let evidenceScreen = null;
  let currentStage = 0;
  let previousOverflow = "";

  function profile() {
    return typeof getActiveDetective === "function"
      ? getActiveDetective() : null;
  }

  function playerId() {
    const p = profile();
    return String(
      p?.id || p?.profileId ||
      p?.username || p?.name || "default"
    );
  }

  function lang() {
    const p = profile();
    const value = p && typeof getProfileLanguage === "function"
      ? getProfileLanguage(p)
      : p?.settings?.language || p?.language || "en";

    return ["ms", "bm", "malay"].includes(
      String(value).toLowerCase()
    ) ? "ms" : "en";
  }

  function tr(en, ms) {
    return lang() === "ms" ? ms : en;
  }

  function readSave() {
    try {
      return JSON.parse(
        localStorage.getItem(PREFIX + playerId()) || "{}"
      );
    } catch (error) {
      return {};
    }
  }

  function completed() {
    if (readSave().completed === true) return true;

    if (typeof thfLoadProgress === "function") {
      try {
        return thfLoadProgress()
          ?.cases?.["10"]?.completed === true;
      } catch (error) {}
    }

    return false;
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = String(text);
    return node;
  }

  function btn(text, callback, secondary = false) {
    const node = el(
      "button",
      "thf-study-btn" + (secondary ? " secondary" : ""),
      text
    );
    node.type = "button";
    node.addEventListener("click", callback);
    return node;
  }

  function answerLabel(stage, value) {
    if (value === undefined || value === null || value === "") {
      return tr("No saved answer", "Tiada jawapan disimpan");
    }

    if (stage === 4) {
      const number = Number(value);
      return Number.isFinite(number)
        ? "RM" + number.toLocaleString("en-MY")
        : String(value);
    }

    const match = CHOICES[stage]?.find(
      item => item[0] === value
    );

    return match ? match[1] : String(value);
  }

  function addStyles() {
    if (document.getElementById("thf-study-css")) return;

    const style = document.createElement("style");
    style.id = "thf-study-css";
    style.textContent = `
      #${ID} {
        position: fixed;
        inset: 0;
        z-index: 30000;
        overflow-y: auto;
        padding: 24px 16px 65px;
        box-sizing: border-box;
        background: radial-gradient(
          circle at top, #294563, #0b1525 70%
        );
        color: #f5e9d6;
        font-family: Arial, sans-serif;
      }

      #${ID}[hidden] { display: none !important; }
      #${ID} * { box-sizing: border-box; }

      .thf-study-wrap {
        max-width: 1000px;
        margin: 0 auto;
      }

      .thf-study-header {
        text-align: center;
        padding: 15px 0 25px;
      }

      .thf-study-header h1 {
        color: #ffdb9c;
        font-size: clamp(27px, 6vw, 45px);
      }

      .thf-study-header p {
        color: #c8d5e4;
        line-height: 1.7;
      }

      .thf-study-safe {
        color: #9ce5bb !important;
        font-size: 12px;
        font-weight: bold;
      }

      .thf-study-tabs {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 9px;
        margin: 20px 0 30px;
      }

      .thf-study-tab {
        background: #1c304b;
        border: 1px solid #60758b;
        border-radius: 10px;
        padding: 14px 7px;
        color: #e6d5b8;
        font: inherit;
        font-size: 12px;
        cursor: pointer;
      }

      .thf-study-tab.active {
        background: #76532c;
        border-color: #f0c782;
        color: white;
      }

      .thf-study-stage-title {
        text-align: center;
        color: #f5cb89;
        margin: 25px 0;
      }

      .thf-study-story {
        background: #1d324b;
        border-left: 4px solid #d8ae70;
        padding: 18px;
        border-radius: 8px;
        line-height: 1.8;
      }

      .thf-study-question {
        background: #14273d;
        border: 1px solid #536d88;
        border-radius: 14px;
        padding: 22px;
        margin: 20px 0;
      }

      .thf-study-question h3 {
        color: #fff0d8;
        line-height: 1.6;
      }

      .thf-study-number {
        color: #e9bd7a;
        font-size: 12px;
        font-weight: bold;
      }

      .thf-study-choices {
        display: grid;
        gap: 8px;
        margin: 16px 0;
      }

      .thf-study-choice {
        padding: 12px;
        border: 1px solid #58728c;
        border-radius: 8px;
        background: #1d344f;
        color: #dce8f3;
        font-size: 13px;
      }

      .thf-study-choice.correct {
        background: #1a4839;
        border-color: #71bf96;
        color: #e1ffeb;
      }

      .thf-study-answer {
        padding: 15px;
        margin: 12px 0;
        border-radius: 9px;
        border: 1px solid #6abd91;
        background: #1c4235;
        color: #e3ffed;
        line-height: 1.7;
      }

      .thf-study-player {
        padding: 15px;
        margin: 12px 0;
        border-radius: 9px;
        background: #243a54;
        color: #e0eaf4;
        line-height: 1.7;
      }

      .thf-study-player.wrong {
        border: 1px solid #cc8274;
        color: #ffddd7;
      }

      .thf-study-note {
        padding: 15px;
        margin: 12px 0;
        border-left: 3px solid #e0b776;
        border-radius: 8px;
        background: #1b3048;
        color: #dce7f2;
        line-height: 1.8;
      }

      .thf-study-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        margin: 28px 0;
      }

      .thf-study-btn {
        min-height: 45px;
        padding: 12px 18px;
        border: 1px solid #e8be7d;
        border-radius: 9px;
        background: #a77b3e;
        color: #fff8eb;
        font: inherit;
        font-weight: bold;
        cursor: pointer;
      }

      .thf-study-btn.secondary {
        background: #1d334e;
        border-color: #7891a8;
      }

      .thf-study-btn:disabled {
        opacity: .35;
        cursor: not-allowed;
      }

      .thf-study-modal {
        position: fixed;
        inset: 0;
        z-index: 31000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        background: rgba(3, 8, 18, .92);
      }

      .thf-study-modal-inner {
        width: min(100%, 700px);
        max-height: 88vh;
        overflow-y: auto;
        background: #162b43;
        border: 1px solid #e2b779;
        border-radius: 15px;
        padding: 24px;
        color: #e7e3d9;
      }

      .thf-study-modal-inner h3 {
        color: #f5ce91;
      }

      .thf-study-modal-inner p {
        line-height: 1.9;
      }

      .thf-study-evidence-list {
        display: grid;
        gap: 10px;
        margin: 20px 0;
      }

      @media (max-width: 700px) {
        .thf-study-tabs {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .thf-study-question { padding: 16px; }

        .thf-study-actions {
          flex-direction: column;
        }

        .thf-study-actions .thf-study-btn {
          width: 100%;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #${ID} * { animation: none !important; }
      }
    `;

    document.head.appendChild(style);
  }

  function closeEvidence() {
    if (evidenceScreen) {
      evidenceScreen.remove();
      evidenceScreen = null;
    }
  }

  function openEvidence(documentId = null) {
    closeEvidence();

    evidenceScreen = el("div", "thf-study-modal");

    const box = el("div", "thf-study-modal-inner");
    const documentData = EVIDENCE.find(
      item => item.id === documentId
    );

    box.appendChild(
      el(
        "h3",
        "",
        documentData
          ? documentData.icon + " " + documentData.name
          : tr("📁 EVIDENCE VIEWER", "📁 PAPARAN BUKTI")
      )
    );

    if (documentData) {
      box.appendChild(
        el("p", "", documentData[lang()])
      );

      box.appendChild(
        btn(
          tr("← ALL EVIDENCE", "← SEMUA BUKTI"),
          () => openEvidence(),
          true
        )
      );
    } else {
      const list = el(
        "div", "thf-study-evidence-list"
      );

      EVIDENCE.forEach(item => {
        list.appendChild(
          btn(
            item.icon + " " + item.name,
            () => openEvidence(item.id),
            true
          )
        );
      });

      box.appendChild(list);
    }

    box.appendChild(
      btn(tr("CLOSE", "TUTUP"), closeEvidence, true)
    );

    evidenceScreen.appendChild(box);

    evidenceScreen.addEventListener("click", event => {
      if (event.target === evidenceScreen) closeEvidence();
    });

    document.body.appendChild(evidenceScreen);
  }

  function questionCard(task, index) {
    const stageNumber = currentStage + 1;
    const saved = readSave();
    const answers = saved.answers?.[stageNumber] || {};
    const playerAnswer = answers[task.id];

    const card = el("article", "thf-study-question");

    card.appendChild(
      el(
        "span",
        "thf-study-number",
        tr("QUESTION ", "SOALAN ") +
        (index + 1) + " / " +
        TASKS[currentStage].length
      )
    );

    card.appendChild(
      el("h3", "", task[lang()])
    );

    if (stageNumber !== 4) {
      const choices = el("div", "thf-study-choices");

      CHOICES[stageNumber].forEach(choice => {
        const correct = choice[0] === task.answer;

        choices.appendChild(
          el(
            "div",
            "thf-study-choice" + (correct ? " correct" : ""),
            (correct ? "✓ " : "○ ") + choice[1]
          )
        );
      });

      card.appendChild(choices);
    } else {
      const amounts = [
        "RM380,000",
        "RM115,000",
        "RM65,000",
        "RM120,000"
      ];

      card.appendChild(
        el(
          "div",
          "thf-study-choice",
          tr(
            "Original Board Version: ",
            "Amaun asal Board Version: "
          ) + amounts[index]
        )
      );
    }

    card.appendChild(
      el(
        "div",
        "thf-study-answer",
        "✓ " +
        tr("CORRECT ANSWER: ", "JAWAPAN BETUL: ") +
        answerLabel(stageNumber, task.answer)
      )
    );

    const hasAnswer =
      playerAnswer !== undefined &&
      playerAnswer !== null &&
      String(playerAnswer) !== "";

    const wrong = hasAnswer &&
      String(playerAnswer) !== String(task.answer);

    card.appendChild(
      el(
        "div",
        "thf-study-player" + (wrong ? " wrong" : ""),
        tr(
          "YOUR SAVED ANSWER: ",
          "JAWAPAN KAU YANG DISIMPAN: "
        ) + answerLabel(stageNumber, playerAnswer)
      )
    );

    const explanation = NOTES[currentStage][index];

    card.appendChild(
      el(
        "div",
        "thf-study-note",
        "💡 " +
        tr("EXPLANATION: ", "PENERANGAN: ") +
        explanation[lang() === "ms" ? 1 : 0]
      )
    );

    return card;
  }

  function render() {
    if (!screen || screen.hidden) return;

    screen.replaceChildren();
    screen.scrollTop = 0;

    const wrap = el("div", "thf-study-wrap");
    const header = el("header", "thf-study-header");

    header.append(
      el("p", "", "THE HIDDEN FILES — SEASON 01"),
      el(
        "h1",
        "",
        tr("📖 REVIEW CASE 10", "📖 ULANG KAJI CASE 10")
      ),
      el("p", "", "THE MERIDIAN CONSPIRACY"),
      el(
        "p",
        "thf-study-safe",
        tr(
          "READ ONLY — XP, LIVES AND PROGRESS UNCHANGED",
          "MOD BACA SAHAJA — XP, NYAWA DAN PROGRESS KEKAL"
        )
      )
    );

    wrap.appendChild(header);

    const tabs = el("nav", "thf-study-tabs");

    STAGES.forEach((name, index) => {
      const tab = el(
        "button",
        "thf-study-tab" +
          (index === currentStage ? " active" : ""),
        "STAGE 0" + (index + 1) + " · " + name
      );

      tab.type = "button";

      tab.addEventListener("click", () => {
        currentStage = index;
        render();
      });

      tabs.appendChild(tab);
    });

    wrap.appendChild(tabs);

    wrap.appendChild(
      el(
        "h2",
        "thf-study-stage-title",
        STAGES[currentStage]
      )
    );

    wrap.appendChild(
      el(
        "p",
        "thf-study-story",
        STORIES[lang()][currentStage]
      )
    );

    TASKS[currentStage].forEach((task, index) => {
      wrap.appendChild(questionCard(task, index));
    });

    const actions = el("div", "thf-study-actions");

    const previous = btn(
      tr("← PREVIOUS STAGE", "← STAGE SEBELUM"),
      () => {
        currentStage--;
        render();
      },
      true
    );

    previous.disabled = currentStage === 0;

    const next = btn(
      tr("NEXT STAGE →", "STAGE SETERUSNYA →"),
      () => {
        currentStage++;
        render();
      }
    );

    next.disabled = currentStage === STAGES.length - 1;

    actions.append(
      previous,
      btn(
        tr("📁 VIEW ALL EVIDENCE", "📁 LIHAT SEMUA BUKTI"),
        () => openEvidence(),
        true
      ),
      next
    );

    wrap.appendChild(actions);

    const footer = el("div", "thf-study-actions");

    footer.appendChild(
      btn(
        tr("← BACK TO TROPHY", "← KEMBALI KE PIALA"),
        closeStudy,
        true
      )
    );

    wrap.appendChild(footer);
    screen.appendChild(wrap);
  }

  function openStudy() {
    if (!completed()) {
      alert(tr(
        "Complete Case 10 first.",
        "Selesaikan Case 10 dahulu."
      ));
      return;
    }

    addStyles();

    if (!screen) {
      screen = el("section");
      screen.id = ID;
      screen.hidden = true;
      document.body.appendChild(screen);
    }

    if (screen.hidden) {
      previousOverflow = document.body.style.overflow;
    }

    screen.hidden = false;
    document.body.style.overflow = "hidden";
    currentStage = 0;
    render();
  }

  function closeStudy() {
    closeEvidence();

    if (screen) screen.hidden = true;

    document.body.style.overflow =
      previousOverflow || (
        document.getElementById("thf-victory-screen")
          ?.hidden === false ? "hidden" : ""
      );
  }

  function addReviewButton() {
    if (!completed()) return;

    const ending = document.querySelector(
      "#case10-screen .c10-ending"
    );

    if (!ending) return;

    if (ending.querySelector("#thf-case10-study-button")) {
      return;
    }

    const review = btn(
      tr("📖 REVIEW CASE 10", "📖 ULANG KAJI CASE 10"),
      openStudy
    );

    review.id = "thf-case10-study-button";

    const actions = ending.querySelector(".c10-actions");

    if (actions) actions.prepend(review);
    else ending.appendChild(review);
  }

  function init() {
    addReviewButton();

    const app = document.getElementById("app");

    if (app) {
      const observer = new MutationObserver(addReviewButton);

      observer.observe(app, {
        childList: true,
        subtree: true
      });
    }
  }

  window.thfOpenCase10Study = openStudy;

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );
  } else {
    init();
  }

})();

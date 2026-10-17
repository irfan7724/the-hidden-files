
"use strict";

/* ==========================================
   THE HIDDEN FILES — CASE 10
   THE MERIDIAN CONSPIRACY
========================================== */

(function () {

  const ID = "10";
  const PREFIX = "thf_case10_final_v1_";
  const SCREEN = "case10-screen";

  const STAGES = [
    "THE CONSPIRACY BOARD",
    "THE HIDDEN TRANSACTIONS",
    "THE FINAL INTERROGATION",
    "THE FINAL RECONCILIATION",
    "THE FINAL VERDICT"
  ];

  const EVIDENCE = [
    {
      id: "machinery",
      icon: "⚙️",
      name: "E07 — Machinery Invoice",
      en: "Case 07: Machinery costing RM120,000 was recorded as Repairs and Maintenance. The correcting entry is Dr PPE RM120,000, Cr Repairs and Maintenance RM120,000. Depreciation and tax effects are excluded.",
      ms: "Kes 07: Mesin bernilai RM120,000 direkod sebagai Pembaikan dan Penyelenggaraan. Pembetulan ialah Dr PPE RM120,000, Cr Pembaikan dan Penyelenggaraan RM120,000. Susut nilai dan cukai tidak diambil kira."
    },
    {
      id: "supplier",
      icon: "📦",
      name: "E08 — Supplier Invoice & GRN",
      en: "Case 08: Invoice INV-4582, RM85,000. Goods were received on 29 December 2025 and remain in inventory. The liability was not recorded. Correction: Dr Inventory RM85,000, Cr Trade Payables RM85,000.",
      ms: "Kes 08: Invois INV-4582, RM85,000. Barang diterima pada 29 Disember 2025 dan masih dalam inventori. Liabiliti tidak direkodkan. Pembetulan: Dr Inventori RM85,000, Cr Akaun Belum Bayar RM85,000."
    },
    {
      id: "statement",
      icon: "📊",
      name: "E09 — Altered Board Statement",
      en: "Case 09: Board Version showed PPE RM380,000, Inventory RM115,000, Trade Payables RM65,000 and Profit Before Tax RM120,000. Corrected figures: RM500,000, RM200,000, RM150,000 and RM240,000 respectively.",
      ms: "Kes 09: Versi lembaga menunjukkan PPE RM380,000, Inventori RM115,000, Akaun Belum Bayar RM65,000 dan Untung Sebelum Cukai RM120,000. Angka dibetulkan masing-masing RM500,000, RM200,000, RM150,000 dan RM240,000."
    },
    {
      id: "access",
      icon: "🔐",
      name: "E10-A — System Access Log",
      en: "28 Dec 2025, 22:14 — User DHARRIS posted an adjustment removing RM120,000 from PPE. 30 Dec 2025, 20:32 — User SMALIK approved the revised reporting package. 31 Dec 2025, 21:10 — User ACOLE released Board Version B. User accounts alone do not prove the identity of the person operating them.",
      ms: "28 Dis 2025, 22:14 — Akaun DHARRIS merekod pelarasan mengeluarkan RM120,000 daripada PPE. 30 Dis 2025, 20:32 — Akaun SMALIK meluluskan pakej laporan yang diubah. 31 Dis 2025, 21:10 — Akaun ACOLE mengeluarkan Versi Lembaga B. Akaun pengguna sahaja tidak membuktikan identiti individu yang menggunakannya."
    },
    {
      id: "instruction",
      icon: "✉️",
      name: "E10-B — Internal Instruction",
      en: "Message from Adrian Cole to Sarah Malik and Daniel Harris: 'Use the revised board package. Keep the original adjustment schedule out of the presentation. Daniel, ensure the figures match Version B.' Message metadata and acknowledgements have been verified for the game investigation.",
      ms: "Mesej Adrian Cole kepada Sarah Malik dan Daniel Harris: 'Gunakan pakej lembaga yang diubah. Jangan masukkan jadual pelarasan asal dalam pembentangan. Daniel, pastikan angka sama dengan Versi B.' Metadata mesej dan pengakuan penerimaan telah disahkan dalam penyiasatan game."
    },
    {
      id: "approval",
      icon: "🖋️",
      name: "E10-C — Signed Approval Trail",
      en: "Signed audit trail: Daniel Harris acknowledged preparing Version B journal extracts; Sarah Malik signed approval of the reporting package; Adrian Cole signed final release to the board. Each acknowledged the missing adjustment schedule.",
      ms: "Jejak audit bertandatangan: Daniel Harris mengakui menyediakan petikan jurnal Versi B; Sarah Malik menandatangani kelulusan pakej laporan; Adrian Cole menandatangani pelepasan akhir kepada lembaga. Setiap seorang mengakui jadual pelarasan tidak disertakan."
    }
  ];

  const LANG = {
    en: {
      back: "← CASE FILES",
      finale: "THE FINAL INVESTIGATION",
      intro: "Every secret leaves a trace.",
      alert: "CLASSIFIED · FINAL OPERATION",
      message: "Alya, the evidence is connected. The journal entries, the missing liability and the altered statements were handled by different people. You must establish each person's role before the board meeting.",
      start: "BEGIN FINAL OPERATION",
      continue: "CONTINUE INVESTIGATION",
      stage: "FINAL STAGE",
      lives: "LIVES",
      hints: "HINTS",
      evidence: "EVIDENCE VIEWER",
      check: "SUBMIT FINDINGS",
      next: "ENTER NEXT STAGE",
      close: "CLOSE",
      unlock: "UNLOCK HINT",
      correct: "EVIDENCE VERIFIED. Stage cleared.",
      wrong: "The findings are incorrect. Review the evidence.",
      missing: "Complete all fields before submitting.",
      done: "SEASON 01 COMPLETE",
      report: "FINAL INVESTIGATION REPORT",
      return: "RETURN TO CASE FILES",
      story1: "Alya: These were not random errors. Connect each finding to the record that proves it.",
      story2: "Alya: Reconstruct the two correcting entries. One wrong debit or credit could distort the final statement.",
      story3: "Alya: Three people, three statements. Confront each claim with documentary evidence.",
      story4: "Alya: The board needs corrected figures. Reconcile the amounts before the final verdict.",
      story5: "Alya: Identify the documented role of each person. Separate what the records establish from what they cannot prove.",
      question1: "Match each finding with its supporting evidence.",
      question2: "Select the correct accounting treatment.",
      question3: "Choose the evidence that contradicts each statement.",
      question4: "Enter the corrected amounts (RM).",
      question5: "Match each person with their documented role.",
      hintTexts: [
        [
          "The machinery issue belongs to Case 07. The supplier liability belongs to Case 08.",
          "Use the altered statement for the final figures and the access log for the sequence of events."
        ],
        [
          "An asset wrongly recorded as an expense must be reclassified to PPE.",
          "Goods received but unpaid increase both Inventory and Trade Payables."
        ],
        [
          "The signed approval trail identifies who prepared and approved the reporting package.",
          "The internal instruction establishes who directed the use of Version B."
        ],
        [
          "PPE increases by RM120,000. Inventory and Trade Payables each increase by RM85,000.",
          "Profit before tax increases by RM120,000 under the game's no-depreciation and no-tax assumptions."
        ],
        [
          "Daniel prepared the extracts; Sarah approved the package; Adrian directed and released it.",
          "The evidence supports coordinated handling of Version B, but account access logs alone cannot establish who typed every entry."
        ]
      ],
      cleared: "STAGE CLEARED",
      transition: "The evidence has been secured. The investigation moves closer to the truth.",
      warning: "Findings are based on the fictional records presented. The case establishes coordinated involvement in the reporting process; criminal intent would require further independent investigation.",
      finalQuote: "The numbers never lied. Someone made them tell a different story.",
      teaser: "CASE CLOSED · MERIDIAN CORPORATION",
      locked: "Complete Case 09 first.",
      noLives: "No lives remaining. Use the game's existing recovery system.",
      caseReview: "REVIEW FINAL REPORT",
      reward: "FINAL CASE BONUS",
      credits: "Investigation led by Alya Rahman"
    },
    ms: {
      back: "← FAIL KES",
      finale: "THE FINAL INVESTIGATION",
      intro: "Setiap rahsia meninggalkan jejak.",
      alert: "SULIT · OPERASI TERAKHIR",
      message: "Alya, semua bukti saling berkaitan. Jurnal, liabiliti yang hilang dan penyata yang diubah dikendalikan oleh individu berbeza. Buktikan peranan mereka sebelum mesyuarat lembaga bermula.",
      start: "MULAKAN OPERASI TERAKHIR",
      continue: "SAMBUNG PENYIASATAN",
      stage: "PERINGKAT AKHIR",
      lives: "NYAWA",
      hints: "PETUNJUK",
      evidence: "PAPARAN BUKTI",
      check: "HANTAR PENEMUAN",
      next: "MASUK PERINGKAT SETERUSNYA",
      close: "TUTUP",
      unlock: "BUKA PETUNJUK",
      correct: "BUKTI DISAHKAN. Peringkat selesai.",
      wrong: "Penemuan tidak tepat. Semak semula bukti.",
      missing: "Lengkapkan semua ruangan dahulu.",
      done: "SEASON 01 COMPLETE",
      report: "LAPORAN PENYIASATAN AKHIR",
      return: "KEMBALI KE FAIL KES",
      story1: "Alya: Ini bukan kesilapan rawak. Hubungkan setiap penemuan dengan rekod yang membuktikannya.",
      story2: "Alya: Bina semula dua catatan pembetulan. Debit atau kredit yang salah boleh mengubah penyata akhir.",
      story3: "Alya: Tiga individu, tiga kenyataan. Cabar setiap kenyataan dengan bukti dokumen.",
      story4: "Alya: Lembaga memerlukan angka yang betul. Selesaikan penyesuaian sebelum keputusan akhir.",
      story5: "Alya: Kenal pasti peranan setiap individu berdasarkan rekod. Bezakan perkara yang terbukti daripada yang belum pasti.",
      question1: "Padankan penemuan dengan bukti sokongan.",
      question2: "Pilih rawatan perakaunan yang betul.",
      question3: "Pilih bukti yang menyangkal setiap kenyataan.",
      question4: "Masukkan amaun yang dibetulkan (RM).",
      question5: "Padankan setiap individu dengan peranan yang didokumenkan.",
      hintTexts: [
        [
          "Isu mesin daripada Kes 07. Liabiliti pembekal daripada Kes 08.",
          "Gunakan penyata yang diubah untuk angka akhir dan log akses untuk urutan kejadian."
        ],
        [
          "Aset yang salah direkod sebagai belanja perlu dikelaskan semula kepada PPE.",
          "Barang yang diterima tetapi belum dibayar meningkatkan Inventori dan Akaun Belum Bayar."
        ],
        [
          "Jejak kelulusan bertandatangan mengenal pasti penyedia dan pelulus laporan.",
          "Arahan dalaman menunjukkan siapa mengarahkan penggunaan Versi B."
        ],
        [
          "PPE bertambah RM120,000. Inventori dan Akaun Belum Bayar bertambah RM85,000.",
          "Untung sebelum cukai bertambah RM120,000 berdasarkan andaian tanpa susut nilai dan cukai."
        ],
        [
          "Daniel menyediakan petikan, Sarah meluluskan pakej, Adrian mengarah dan mengeluarkannya.",
          "Bukti menyokong penglibatan bersama, tetapi log akses sahaja tidak membuktikan siapa menaip setiap catatan."
        ]
      ],
      cleared: "PERINGKAT SELESAI",
      transition: "Bukti telah diperoleh. Penyiasatan semakin hampir kepada kebenaran.",
      warning: "Penemuan berdasarkan rekod fiksyen dalam game. Kes ini menunjukkan penglibatan bersama dalam proses pelaporan; niat jenayah memerlukan siasatan bebas selanjutnya.",
      finalQuote: "Angka tidak pernah menipu. Seseorang telah mengubah cerita di sebaliknya.",
      teaser: "KES DITUTUP · MERIDIAN CORPORATION",
      locked: "Selesaikan Case 09 dahulu.",
      noLives: "Nyawa telah habis. Gunakan sistem pemulihan game sedia ada.",
      caseReview: "SEMAK LAPORAN AKHIR",
      reward: "BONUS KES AKHIR",
      credits: "Penyiasatan diketuai Alya Rahman"
    }
  };

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

  let state;
  let modalNode = null;
  let feedback = "";
  let transition = false;

  function el(tag, className = "", content = "") {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = content;
    return node;
  }

  function btn(label, action, className = "c10-btn") {
    const node = el("button", className, label);
    node.type = "button";
    node.addEventListener("click", action);
    return node;
  }

  function activeProfile() {
    return typeof getActiveDetective === "function"
      ? getActiveDetective()
      : null;
  }

  function lang() {
    const p = activeProfile();
    const value = p && typeof getProfileLanguage === "function"
      ? getProfileLanguage(p)
      : (p?.settings?.language || p?.language || "en");

    return ["ms", "bm", "malay"].includes(String(value).toLowerCase())
      ? "ms" : "en";
  }

  function t() {
    return LANG[lang()];
  }

  function playerId() {
    const p = activeProfile();
    return String(p?.id || p?.profileId || p?.username || p?.name || "default");
  }

  function key() {
    return PREFIX + playerId();
  }

  function fresh() {
    return {
      started: false,
      stage: 1,
      transition: false,
      answers: {},
      hints: [0, 0, 0, 0, 0],
      completed: false,
      bonusAwarded: false
    };
  }

  function load() {
    try {
      const data = JSON.parse(localStorage.getItem(key()) || "{}");
      return {
        ...fresh(),
        ...data,
        answers: data.answers || {},
        hints: Array.isArray(data.hints)
          ? data.hints.slice(0, 5)
          : [0, 0, 0, 0, 0]
      };
    } catch (error) {
      return fresh();
    }
  }

  function save() {
    try {
      localStorage.setItem(key(), JSON.stringify(state));
    } catch (error) {
      console.warn("Case 10 autosave:", error);
    }
  }

  function progress() {
    return typeof thfLoadProgress === "function"
      ? thfLoadProgress()
      : { lives: 3, xp: 0, cases: {} };
  }

  function completed09() {
    const p = progress();
    if (p.cases?.["09"]?.completed === true) return true;

    try {
      const data = JSON.parse(
        localStorage.getItem("thf_case09_statement_v1_" + playerId()) || "{}"
      );
      return data.completed === true;
    } catch (error) {
      return false;
    }
  }

  function screen() {
    let node = document.getElementById(SCREEN);
    if (node) return node;

    const app = document.getElementById("app");
    if (!app) return null;

    node = el("section", "screen hidden");
    node.id = SCREEN;
    node.hidden = true;

    const content = el("div", "c10-shell");
    content.id = "c10-content";
    node.appendChild(content);
    app.appendChild(node);

    if (
      typeof screenIds !== "undefined" &&
      Array.isArray(screenIds) &&
      !screenIds.includes(SCREEN)
    ) {
      screenIds.push(SCREEN);
    }

    return node;
  }

  function show() {
    const node = screen();
    if (!node) return;

    if (typeof showScreen === "function") {
      showScreen(SCREEN);
    }

    document.querySelectorAll("#app > .screen").forEach(function (item) {
      const hidden = item !== node;
      item.hidden = hidden;
      item.classList.toggle("hidden", hidden);
    });

    node.hidden = false;
    node.classList.remove("hidden");
    node.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function closeModal() {
    if (modalNode) {
      modalNode.remove();
      modalNode = null;
    }
  }

  function modal(title) {
    closeModal();

    modalNode = el("div", "c10-modal-bg");
    const box = el("div", "c10-modal");
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.appendChild(el("h3", "", title));

    modalNode.appendChild(box);
    modalNode.addEventListener("click", function (event) {
      if (event.target === modalNode) closeModal();
    });

    document.body.appendChild(modalNode);
    return box;
  }

  function openEvidence() {
    const box = modal(t().evidence);
    const grid = el("div", "c10-evidence-grid");

    EVIDENCE.forEach(function (doc) {
      grid.appendChild(btn(
        doc.icon + " " + doc.name,
        function () {
          const paper = modal(doc.name);
          paper.appendChild(el("div", "c10-paper", doc[lang()]));
          paper.appendChild(btn(t().close, closeModal, "c10-btn secondary"));
        },
        "c10-evidence-card"
      ));
    });

    box.appendChild(grid);
    box.appendChild(btn(t().close, closeModal, "c10-btn secondary"));
  }

  function openHints() {
    const index = state.stage - 1;
    const count = Number(state.hints[index] || 0);
    const box = modal(t().hints + " " + count + "/2");

    t().hintTexts[index].forEach(function (hint, i) {
      const unlocked = i < count;
      const card = el(
        "div",
        "c10-hint" + (unlocked ? "" : " locked")
      );

      card.appendChild(el(
        "strong",
        "",
        (unlocked ? "💡 " : "🔒 ") + "HINT " + (i + 1)
      ));

      card.appendChild(el(
        "p",
        "",
        unlocked ? hint : "—"
      ));

      box.appendChild(card);
    });

    if (count < 2) {
      box.appendChild(btn(
        t().unlock + " " + (count + 1),
        function () {
          state.hints[index] = count + 1;
          save();
          openHints();
          render();
        }
      ));
    }

    box.appendChild(btn(t().close, closeModal, "c10-btn secondary"));
  }

  function exit() {
    closeModal();
    if (typeof window.thfOpenCaseFiles === "function") {
      window.thfOpenCaseFiles();
    }
  }

  function root(title) {
    const area = document.getElementById("c10-content");
    area.replaceChildren();

    const header = el("header", "c10-top");
    const info = el("div");

    info.append(
      el("p", "c10-kicker", "SEASON 01 · GRAND FINALE"),
      el("h1", "c10-title", title)
    );

    header.append(
      info,
      btn(t().back, exit, "c10-btn ghost")
    );

    area.appendChild(header);
    return area;
  }

  function panel(parent) {
    const node = el("section", "c10-panel");
    parent.appendChild(node);
    return node;
  }

  function intro() {
    const area = document.getElementById("c10-content");
    area.replaceChildren();

    const section = el("div", "c10-intro");
    const inner = el("div", "c10-intro-inner");

    inner.append(
      el("span", "c10-alert", t().alert),
      el("div", "c10-intro-symbol", "🔐"),
      el("h1", "c10-intro-title", t().finale),
      el("p", "c10-intro-subtitle", "THE MERIDIAN CONSPIRACY"),
      el("div", "c10-intro-line")
    );

    const message = el("div", "c10-transmission");
    message.append(
      el("strong", "", "📡 INCOMING TRANSMISSION · 12:47 AM"),
      el("p", "", t().message)
    );

    inner.appendChild(message);
    inner.appendChild(el("p", "c10-subtitle", t().intro));

    inner.appendChild(btn(
      t().start,
      function () {
        state.started = true;
        save();
        render();
      },
      "c10-btn c10-intro-button"
    ));

    inner.appendChild(btn(
      t().back,
      exit,
      "c10-btn ghost"
    ));

    section.appendChild(inner);
    area.appendChild(section);
  }

  function progressPanel(parent) {
    const p = progress();
    const section = el("div", "c10-progress-panel");

    const heading = el("div", "c10-progress-top");
    heading.append(
      el("strong", "", "⚠ " + t().stage + " " + state.stage + "/5"),
      el("span", "", (state.stage - 1) * 20 + "% COMPLETE")
    );
    section.appendChild(heading);

    const track = el("div", "c10-progress-track");
    const numbers = el("div", "c10-stage-numbers");

    for (let i = 1; i <= 5; i++) {
      track.appendChild(el(
        "div",
        "c10-progress-segment" + (i <= state.stage ? " active" : "")
      ));
      numbers.appendChild(el(
        "span",
        i <= state.stage ? "active" : "",
        String(i).padStart(2, "0")
      ));
    }

    section.append(track, numbers);

    const stats = el("div", "c10-stats");
    const data = [
      [t().lives, "❤️ " + (p.lives ?? 3)],
      [t().hints, (state.hints[state.stage - 1] || 0) + "/2"],
      ["XP", String(p.xp ?? 0)]
    ];

    data.forEach(function (entry) {
      const card = el("div", "c10-stat");
      card.append(
        el("span", "", entry[0]),
        el("strong", "", entry[1])
      );
      stats.appendChild(card);
    });

    section.appendChild(stats);
    parent.appendChild(section);
  }

  function stageHeader(parent) {
    const heading = el("div", "c10-stage-heading");
    heading.append(
      el("span", "number", "0" + state.stage),
      el("h2", "", STAGES[state.stage - 1])
    );
    parent.appendChild(heading);

    const story = el("div", "c10-story");
    story.append(
      el("span", "speaker", "ALYA RAHMAN"),
      el("p", "", t()["story" + state.stage])
    );
    parent.appendChild(story);

    parent.appendChild(el(
      "p",
      "c10-subtitle",
      t()["question" + state.stage]
    ));
  }

  function choiceField(task, stage) {
    const field = el("label", "c10-link-field");
    field.appendChild(el("strong", "", task[lang()]));

    if (stage === 4) {
      const input = el("input", "c10-input");
      input.type = "number";
      input.min = "0";
      input.step = "1";
      input.placeholder = "RM";
      input.value = state.answers[stage]?.[task.id] ?? "";

      input.addEventListener("input", function () {
        state.answers[stage] ||= {};
        state.answers[stage][task.id] = input.value;
        save();
      });

      field.appendChild(input);
    } else {
      const select = el("select", "c10-select");
      const blank = document.createElement("option");
      blank.value = "";
      blank.textContent = lang() === "ms"
        ? "Pilih jawapan"
        : "Select answer";
      select.appendChild(blank);

      CHOICES[stage].forEach(function (entry) {
        const option = document.createElement("option");
        option.value = entry[0];
        option.textContent = entry[1];
        select.appendChild(option);
      });

      select.value = state.answers[stage]?.[task.id] || "";

      select.addEventListener("change", function () {
        state.answers[stage] ||= {};
        state.answers[stage][task.id] = select.value;
        save();
      });

      field.appendChild(select);
    }

    return field;
  }

  function stageContent(parent) {
    const section = panel(parent);
    stageHeader(section);

    if (state.stage === 1) {
      const board = el("div", "c10-conspiracy-board");
      const grid = el("div", "c10-conspiracy-grid");

      [
        ["⚙️", "CASE 07", "MACHINERY"],
        ["📦", "CASE 08", "MISSING LIABILITY"],
        ["📊", "CASE 09", "ALTERED STATEMENT"]
      ].forEach(function (item) {
        const card = el("div", "c10-conspiracy-card");
        card.append(
          el("strong", "", item[1]),
          el("p", "", item[2])
        );
        grid.appendChild(card);
      });

      board.appendChild(grid);
      section.appendChild(board);
    }

    if (state.stage === 3) {
      const suspects = [
        ["👨🏻‍💼", "DANIEL HARRIS", "SENIOR ACCOUNTANT"],
        ["👩🏻‍💼", "SARAH MALIK", "FINANCE DIRECTOR"],
        ["👨🏼‍💼", "ADRIAN COLE", "CHIEF FINANCIAL OFFICER"]
      ];

      suspects.forEach(function (suspect) {
        const card = el("div", "c10-interrogation");
        card.append(
          el("div", "c10-suspect-icon", suspect[0]),
          el("h3", "", suspect[1]),
          el("p", "c10-suspect-role", suspect[2])
        );
        section.appendChild(card);
      });
    }

    if (state.stage === 4) {
      const table = el("table", "c10-financial-table");
      const header = el("tr");

      [
        "ACCOUNT",
        "BOARD VERSION (RM)"
      ].forEach(function (name) {
        header.appendChild(el("th", "", name));
      });

      table.appendChild(header);

      [
        ["PPE", "380,000"],
        ["INVENTORY", "115,000"],
        ["TRADE PAYABLES", "65,000"],
        ["PROFIT BEFORE TAX", "120,000"]
      ].forEach(function (row) {
        const tr = el("tr");
        tr.append(
          el("td", "", row[0]),
          el("td", "highlight", row[1])
        );
        table.appendChild(tr);
      });

      section.appendChild(table);
    }

    TASKS[state.stage - 1].forEach(function (task) {
      section.appendChild(choiceField(task, state.stage));
    });

    if (feedback) {
      section.appendChild(el("div", "c10-feedback bad", feedback));
    }

    const actions = el("div", "c10-actions");

    actions.append(
      btn(t().check, checkAnswers),
      btn(
        "📁 " + t().evidence,
        openEvidence,
        "c10-btn secondary"
      ),
      btn(
        "💡 " + t().hints + " (" +
        (state.hints[state.stage - 1] || 0) + "/2)",
        openHints,
        "c10-btn secondary"
      )
    );

    section.appendChild(actions);
  }

  function registerMistake() {
    if (typeof thfRegisterMistake === "function") {
      thfRegisterMistake(ID);
    }
  }

  function checkAnswers() {
    const stage = state.stage;
    const answers = state.answers[stage] || {};
    const tasks = TASKS[stage - 1];

    const missing = tasks.some(function (task) {
      return answers[task.id] === undefined ||
        String(answers[task.id]).trim() === "";
    });

    if (missing) {
      feedback = t().missing;
      render();
      return;
    }

    const correct = tasks.every(function (task) {
      return String(answers[task.id]).trim() === task.answer;
    });

    if (!correct) {
      registerMistake();
      feedback = t().wrong;
      render();
      return;
    }

    feedback = "";
    transition = true;
    state.transition = true;
    save();
    render();
  }

  function transitionScreen() {
    const area = root(t().finale);
    const section = el("div", "c10-transition");

    section.append(
      el("div", "c10-transition-icon", "🔓"),
      el("span", "c10-chip", "STAGE " + state.stage + "/5"),
      el("h2", "", t().cleared),
      el("p", "", t().transition)
    );

    section.appendChild(btn(
      state.stage === 5 ? t().report : t().next,
      function () {
        if (state.stage === 5) {
          complete();
          return;
        }

        state.stage++;
        state.transition = false;
        transition = false;
        save();
        render();
      }
    ));

    area.appendChild(section);
  }

  function complete() {
    if (!state.completed) {
      state.completed = true;
      save();

      if (typeof thfCompleteCase === "function") {
        thfCompleteCase(ID);
      }

      if (typeof thfRefreshCaseFiles === "function") {
        thfRefreshCaseFiles();
      }

      if (typeof thfRefreshAll === "function") {
        thfRefreshAll();
      }
    }

    state.transition = false;
    transition = false;
    save();
    render();
  }

  function ending() {
    const area = document.getElementById("c10-content");
    area.replaceChildren();

    const section = el("div", "c10-ending");

    section.append(
      el("div", "c10-ending-trophy", "🏆"),
      el("p", "c10-kicker", "THE HIDDEN FILES"),
      el("h1", "", t().done),
      el("p", "c10-intro-subtitle", "FINANCIAL ACCOUNTING & REPORTING"),
      el("p", "c10-ending-quote", '"' + t().finalQuote + '"')
    );

    const stats = el("div", "c10-ending-stats");
    const p = progress();

    [
      ["CASES SOLVED", "10/10"],
      ["TOTAL XP", String(p.xp ?? 0)],
      ["SEASON STATUS", "CLEARED"],
      ["FINAL RANK", String(p.rank || "DETECTIVE")]
    ].forEach(function (item) {
      const card = el("div", "c10-ending-stat");
      card.append(
        el("span", "", item[0]),
        el("strong", "", item[1])
      );
      stats.appendChild(card);
    });

    section.appendChild(stats);

    const report = el("div", "c10-final-report");
    report.append(
      el("h3", "", "📁 " + t().report),
      el("p", "", lang() === "ms"
        ? "Penyiasatan mendapati tiga individu mempunyai peranan yang didokumenkan dalam penyediaan dan pelepasan Versi B."
        : "The investigation establishes three documented roles in the preparation and release of Version B.")
    );

    const findings = lang() === "ms"
      ? [
          "Daniel Harris menyediakan petikan jurnal Versi B.",
          "Sarah Malik meluluskan pakej pelaporan yang diubah.",
          "Adrian Cole mengarahkan penggunaan dan pelepasan Versi B.",
          "PPE dan untung sebelum cukai terkurang nyata RM120,000.",
          "Inventori dan akaun belum bayar terkurang nyata RM85,000.",
          "Jumlah aset terkurang nyata RM205,000 berdasarkan andaian game."
        ]
      : [
          "Daniel Harris prepared Version B journal extracts.",
          "Sarah Malik approved the revised reporting package.",
          "Adrian Cole directed the use and release of Version B.",
          "PPE and profit before tax were understated by RM120,000.",
          "Inventory and trade payables were understated by RM85,000.",
          "Total assets were understated by RM205,000 under the game assumptions."
        ];

    const list = el("ul");

    findings.forEach(function (finding) {
      list.appendChild(el("li", "", finding));
    });

    report.appendChild(list);
    report.appendChild(el("div", "c10-feedback info", t().warning));

    section.appendChild(report);
    section.appendChild(el("p", "c10-kicker", t().credits));
    section.appendChild(el("h2", "", t().teaser));

    const actions = el("div", "c10-actions");
    actions.style.justifyContent = "center";

    actions.append(
      btn(t().return, exit),
      btn(t().evidence, openEvidence, "c10-btn secondary")
    );

    section.appendChild(actions);
    area.appendChild(section);
  }

  function render() {
    if (!screen() || !state) return;

    if (state.completed) {
      ending();
      return;
    }

    if (!state.started) {
      intro();
      return;
    }

    if (state.transition || transition) {
      transitionScreen();
      return;
    }

    const area = root(t().finale);
    progressPanel(area);
    stageContent(area);
  }

  function openCase10() {
    if (!completed09()) {
      alert(t().locked);
      return;
    }

    state = load();

    if (
      !state.completed &&
      Number(progress().lives ?? 3) <= 0
    ) {
      alert(t().noLives);
      return;
    }

    transition = state.transition === true;
    feedback = "";

    show();
    render();
  }

  window.thfCase10Open = openCase10;
  window.thfOpenCase10 = openCase10;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", screen, { once: true });
  } else {
    screen();
  }

})();

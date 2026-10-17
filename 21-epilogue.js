
"use strict";

/* =========================================
   THE HIDDEN FILES
   21 — THE TRUE STORY
   SEASON 01 EPILOGUE

   HTML + CSS + VANILLA JAVASCRIPT
   No libraries required
========================================= */

(function () {

  const ID = "thf-epilogue-screen";

  let screen = null;
  let chapter = 0;
  let historyOpen = false;
  let previousOverflow = "";

  /* =====================================
     LANGUAGE & PROFILE
  ===================================== */

  function profile() {
    return typeof getActiveDetective === "function"
      ? getActiveDetective()
      : null;
  }

  function lang() {
    const p = profile();

    const value =
      p && typeof getProfileLanguage === "function"
        ? getProfileLanguage(p)
        : p?.settings?.language || p?.language || "en";

    return ["ms", "bm", "malay"].includes(
      String(value).toLowerCase()
    ) ? "ms" : "en";
  }

  function playerName() {
    const p = profile();

    return String(
      p?.name || p?.username || "DETECTIVE"
    );
  }

  const UI = {
    en: {
      watch: "🎬 WATCH THE TRUE STORY",
      subtitle: "HOW ALL TEN CASES CONNECTED",
      next: "NEXT",
      back: "BACK",
      history: "HISTORY",
      closeHistory: "CLOSE HISTORY",
      skip: "SKIP",
      finish: "FINISH STORY",
      replay: "REPLAY STORY",
      trophy: "BACK TO TROPHY",
      case: "CASE",
      narrator: "ALYA RAHMAN",
      return: "RETURN TO HEADQUARTERS",
      end: "THE END",
      season: "SEASON 01 — FINANCIAL ACCOUNTING & REPORTING",
      coming: "SEASON 02 — COMING SOON",
      locked: "Complete Case 10 to unlock the true story."
    },

    ms: {
      watch: "🎬 TONTON KISAH SEBENAR",
      subtitle: "BAGAIMANA SEPULUH KES BERKAIT",
      next: "SETERUSNYA",
      back: "KEMBALI",
      history: "SEJARAH",
      closeHistory: "TUTUP SEJARAH",
      skip: "LANGKAU",
      finish: "TAMATKAN CERITA",
      replay: "ULANG CERITA",
      trophy: "KEMBALI KE PIALA",
      case: "KES",
      narrator: "ALYA RAHMAN",
      return: "KEMBALI KE IBU PEJABAT",
      end: "TAMAT",
      season: "SEASON 01 — PERAKAUNAN & PELAPORAN KEWANGAN",
      coming: "SEASON 02 — AKAN DATANG",
      locked: "Selesaikan Case 10 untuk membuka kisah sebenar."
    }
  };

  function t() {
    return UI[lang()];
  }

  /* =====================================
     EPILOGUE STORY
     10 CASES + FINAL REVELATION
  ===================================== */

  const STORY = [
    {
      number: "01",
      title: "The Invoice Trap",
      icon: "📄",
      en: [
        "It began with an invoice. A document that seemed ordinary, until its details failed to match the accounting records.",
        "At the time, I believed I was investigating a single recording error. I had no reason to suspect how far the trail would lead."
      ],
      ms: [
        "Semuanya bermula dengan satu invois. Dokumen yang kelihatan biasa, sehinggalah butirannya tidak sepadan dengan rekod perakaunan.",
        "Ketika itu, aku menyangka ini cuma satu kesilapan merekod transaksi. Aku belum tahu sejauh mana penyiasatan ini akan membawa aku."
      ]
    },

    {
      number: "02",
      title: "The Midnight Journal",
      icon: "📖",
      en: [
        "The next discovery was hidden among journal entries. Some entries needed closer examination before the financial records could be trusted.",
        "The invoice was no longer my only concern. I had to understand how transactions moved from source documents into the ledger."
      ],
      ms: [
        "Penemuan seterusnya tersembunyi dalam catatan jurnal. Beberapa catatan perlu diperiksa dengan teliti sebelum rekod kewangan boleh dipercayai.",
        "Invois itu bukan lagi satu-satunya persoalan. Aku perlu memahami bagaimana transaksi dipindahkan daripada dokumen sumber ke dalam lejar."
      ]
    },

    {
      number: "03",
      title: "The Depreciation Code",
      icon: "⚙️",
      en: [
        "The depreciation investigation brought me to the company's non-current assets. A small calculation difference could change the value reported in the accounts.",
        "I began to understand something important: a financial statement can be misleading even when its figures appear precise."
      ],
      ms: [
        "Penyiasatan susut nilai membawa aku kepada aset bukan semasa syarikat. Perbezaan pengiraan boleh mengubah nilai yang dilaporkan dalam akaun.",
        "Aku mula memahami satu perkara penting: penyata kewangan boleh mengelirukan walaupun angka-angkanya kelihatan tepat."
      ]
    },

    {
      number: "04",
      title: "The Missing Inventory",
      icon: "📦",
      en: [
        "Then came the warehouse records. The movement of goods had to be traced in the correct order.",
        "Inventory was another piece of the reporting puzzle. To understand the numbers, I needed to follow the documents behind them."
      ],
      ms: [
        "Kemudian muncul rekod gudang. Pergerakan barang perlu dijejaki mengikut urutan yang betul.",
        "Inventori menjadi satu lagi bahagian dalam teka-teki pelaporan kewangan. Untuk memahami angka, aku perlu meneliti dokumen di sebaliknya."
      ]
    },

    {
      number: "05",
      title: "The Commission Connection",
      icon: "🕒",
      en: [
        "The commission records introduced a new question: when should a transaction be recognised?",
        "By arranging events on a timeline, I learned that dates could be just as important as amounts. The investigation was no longer about checking numbers alone."
      ],
      ms: [
        "Rekod komisen menimbulkan persoalan baharu: bilakah sesuatu transaksi sepatutnya diiktiraf?",
        "Dengan menyusun peristiwa mengikut garis masa, aku sedar tarikh sama pentingnya dengan jumlah wang. Penyiasatan ini bukan lagi sekadar menyemak angka."
      ]
    },

    {
      number: "06",
      title: "The Bank Trail",
      icon: "🏦",
      en: [
        "The bank reconciliation revealed why differences between records needed careful investigation. Some differences could be explained by timing; others required correction.",
        "Six cases had taught me to question the records, trace the supporting evidence and separate genuine errors from ordinary timing differences."
      ],
      ms: [
        "Rekonsiliasi bank menunjukkan mengapa perbezaan antara rekod perlu disiasat dengan teliti. Ada perbezaan berpunca daripada masa; ada pula memerlukan pembetulan.",
        "Enam kes telah mengajar aku supaya mempersoalkan rekod, menjejaki bukti sokongan dan membezakan kesilapan sebenar daripada perbezaan masa yang biasa."
      ]
    },

    {
      number: "07",
      title: "The Misclassified Files",
      icon: "🔎",
      en: [
        "Then the investigation took a serious turn. Machinery worth RM120,000 had been recorded as repairs and maintenance.",
        "The correct entry was to debit Property, Plant and Equipment and credit Repairs and Maintenance. Daniel Harris was questioned about the classification.",
        "This was a concrete reporting error. Correcting it would increase both assets and profit before tax by RM120,000, under the case assumptions."
      ],
      ms: [
        "Kemudian penyiasatan berubah menjadi lebih serius. Mesin bernilai RM120,000 telah direkodkan sebagai perbelanjaan pembaikan dan penyelenggaraan.",
        "Catatan yang betul ialah debit Property, Plant and Equipment dan kredit Repairs and Maintenance. Daniel Harris disoal tentang pengelasan tersebut.",
        "Ini merupakan kesilapan pelaporan yang jelas. Pembetulannya meningkatkan aset dan keuntungan sebelum cukai sebanyak RM120,000, berdasarkan andaian kes."
      ]
    },

    {
      number: "08",
      title: "The Vanishing Liability",
      icon: "📑",
      en: [
        "A supplier invoice and goods received note exposed another missing transaction. Goods worth RM85,000 had been received, but the corresponding accounting entry was absent.",
        "The correction was to debit Inventory and credit Trade Payables.",
        "The financial statements were missing both an asset and a liability. The records were beginning to reveal a larger reporting problem."
      ],
      ms: [
        "Invois pembekal dan nota penerimaan barang mendedahkan satu lagi transaksi yang tidak direkodkan. Barang bernilai RM85,000 telah diterima, tetapi catatan perakaunannya tiada.",
        "Pembetulannya ialah debit Inventory dan kredit Trade Payables.",
        "Penyata kewangan kehilangan satu aset dan satu liabiliti. Rekod yang disiasat kini menunjukkan masalah pelaporan yang lebih besar."
      ]
    },

    {
      number: "09",
      title: "The Altered Statement",
      icon: "📊",
      en: [
        "Two versions of the financial statements brought the findings together.",
        "Property, Plant and Equipment differed by RM120,000. Inventory and Trade Payables each differed by RM85,000. Profit Before Tax differed by RM120,000.",
        "Cash and Revenue remained unchanged in the comparison. The altered figures matched the corrections uncovered in the previous two cases.",
        "For the first time, the connection was unmistakable: the errors in the underlying records were reflected in the reporting package."
      ],
      ms: [
        "Dua versi penyata kewangan akhirnya menghubungkan penemuan-penemuan utama.",
        "Property, Plant and Equipment berbeza sebanyak RM120,000. Inventory dan Trade Payables masing-masing berbeza RM85,000. Profit Before Tax pula berbeza RM120,000.",
        "Cash dan Revenue kekal sama dalam perbandingan tersebut. Angka yang berubah sepadan dengan pembetulan daripada dua kes sebelumnya.",
        "Buat pertama kali, hubungannya menjadi jelas: kesilapan dalam rekod asas turut muncul dalam pakej pelaporan kewangan."
      ]
    },

    {
      number: "10",
      title: "The Final Investigation",
      icon: "🗂️",
      en: [
        "The final investigation uncovered the reporting trail behind Version B.",
        "Daniel Harris prepared the journal extracts. Sarah Malik approved the reporting package. Adrian Cole directed the use and release of Version B.",
        "The signed approval trail, internal instruction and access records helped establish how the reporting package moved through the organisation.",
        "Those records identified responsibilities and actions. They did not, by themselves, prove every person's motive or criminal intent.",
        "But the accounting conclusion was clear. The reported figures required correction."
      ],
      ms: [
        "Penyiasatan terakhir membongkar jejak pelaporan di sebalik Version B.",
        "Daniel Harris menyediakan petikan jurnal. Sarah Malik meluluskan pakej pelaporan. Adrian Cole mengarahkan penggunaan dan pelepasan Version B.",
        "Jejak kelulusan bertandatangan, arahan dalaman dan rekod akses membantu menjelaskan bagaimana pakej pelaporan itu melalui organisasi.",
        "Rekod tersebut mengenal pasti tanggungjawab dan tindakan. Namun, rekod itu sahaja tidak membuktikan motif atau niat jenayah setiap individu.",
        "Tetapi kesimpulan perakaunannya jelas. Angka yang dilaporkan memerlukan pembetulan."
      ]
    },

    {
      number: "FINAL",
      title: "The Truth Between the Files",
      icon: "🏆",
      en: [
        "Ten cases. Ten investigations. At first, I thought I was dealing with separate accounting problems.",
        "The first six cases taught me how to read the evidence. The final four showed me how the records, statements and reporting decisions were connected.",
        "Under the game's assumptions, the corrections increased total assets by RM205,000, Trade Payables by RM85,000 and Profit Before Tax by RM120,000.",
        "The truth was never hidden in a single document.",
        "It was hidden between the files."
      ],
      ms: [
        "Sepuluh kes. Sepuluh penyiasatan. Pada mulanya, aku menyangka semuanya masalah perakaunan yang berasingan.",
        "Enam kes pertama mengajar aku cara membaca bukti. Empat kes terakhir menunjukkan bagaimana rekod, penyata dan keputusan pelaporan saling berkait.",
        "Berdasarkan andaian game, pembetulan meningkatkan jumlah aset sebanyak RM205,000, Trade Payables sebanyak RM85,000 dan Profit Before Tax sebanyak RM120,000.",
        "Kebenaran tidak pernah tersembunyi dalam satu dokumen sahaja.",
        "Ia tersembunyi di antara fail-fail itu."
      ]
    }
  ];

  /* =====================================
     ELEMENT HELPERS
  ===================================== */

  function el(tag, className, value) {
    const node = document.createElement(tag);

    if (className) node.className = className;

    if (value !== undefined) {
      node.textContent = String(value);
    }

    return node;
  }

  function btn(label, callback, secondary = false) {
    const node = el(
      "button",
      secondary ? "ep-btn secondary" : "ep-btn",
      label
    );

    node.type = "button";
    node.addEventListener("click", callback);

    return node;
  }

  /* =====================================
     STYLES
  ===================================== */

  function styles() {
    if (document.getElementById("thf-epilogue-css")) {
      return;
    }

    const style = el("style");
    style.id = "thf-epilogue-css";

    style.textContent = `
      #${ID} {
        position: fixed;
        inset: 0;
        z-index: 16000;
        overflow-y: auto;
        padding: 22px 14px 35px;
        box-sizing: border-box;
        color: #f5e7cf;
        background:
          radial-gradient(circle at 50% 15%,
            #243b55 0%, #101c30 48%, #060d18 100%);
        font-family: Arial, sans-serif;
      }

      #${ID}[hidden] {
        display: none !important;
      }

      #${ID} * {
        box-sizing: border-box;
      }

      .ep-container {
        max-width: 900px;
        margin: 0 auto;
      }

      .ep-heading {
        text-align: center;
        color: #e5bc79;
        font-size: 12px;
        letter-spacing: 3px;
        margin: 12px 0;
      }

      .ep-title {
        text-align: center;
        color: #ffe0a1;
        font-size: clamp(26px, 6vw, 45px);
        margin: 12px 0;
      }

      .ep-subtitle {
        text-align: center;
        color: #bfcddd;
        font-size: 12px;
        letter-spacing: 2px;
      }

      .ep-progress {
        height: 7px;
        background: #25354a;
        border-radius: 20px;
        overflow: hidden;
        margin: 25px 0;
      }

      .ep-progress-fill {
        height: 100%;
        background: linear-gradient(90deg,
          #9c6d32, #ffe3a2);
        transition: width .3s;
      }

      .ep-scene {
        position: relative;
        overflow: hidden;
        min-height: 210px;
        border: 1px solid #b48a52;
        border-radius: 15px;
        background:
          radial-gradient(circle at 50% 50%,
            rgba(216,169,88,.17),
            transparent 65%),
          linear-gradient(145deg, #203651, #091422);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px;
        text-align: center;
        animation: ep-appear .45s ease;
      }

      .ep-scene::before {
        content: "";
        position: absolute;
        inset: 12px;
        border: 1px solid rgba(221,173,94,.13);
        border-radius: 9px;
        pointer-events: none;
      }

      .ep-scene-icon {
        font-size: clamp(65px, 14vw, 110px);
        filter: drop-shadow(0 0 20px #aa773c);
        animation: ep-float 3s ease-in-out infinite;
      }

      .ep-case-label {
        color: #d7a86c;
        font-size: 12px;
        letter-spacing: 3px;
        margin: 12px 0;
      }

      .ep-scene-title {
        color: #ffdea0;
        font-size: clamp(22px, 5vw, 35px);
        margin: 4px 0;
      }

      .ep-dialogue {
        border: 1px solid #a9834f;
        border-radius: 14px;
        background: rgba(10,20,35,.96);
        padding: 24px;
        margin: 20px 0;
        min-height: 195px;
        animation: ep-appear .4s ease;
      }

      .ep-speaker {
        color: #e7b979;
        font-size: 12px;
        letter-spacing: 2px;
        font-weight: bold;
        margin-bottom: 14px;
      }

      .ep-dialogue p {
        color: #e2e9f1;
        font-size: 16px;
        line-height: 1.85;
        margin: 0 0 15px;
      }

      .ep-dialogue p:last-child {
        margin-bottom: 0;
      }

      .ep-controls {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        margin: 20px 0;
      }

      .ep-btn {
        min-height: 44px;
        padding: 12px 19px;
        border: 1px solid #e8bd78;
        border-radius: 9px;
        background: linear-gradient(135deg, #82582d, #c5964f);
        color: #fff7e8;
        font: inherit;
        font-weight: bold;
        cursor: pointer;
      }

      .ep-btn.secondary {
        background: #192d47;
        border-color: #7890a8;
      }

      .ep-btn:disabled {
        opacity: .4;
        cursor: not-allowed;
      }

      .ep-history {
        border: 1px solid #a9834f;
        border-radius: 12px;
        background: #102039;
        padding: 18px;
        margin: 20px 0;
        max-height: 380px;
        overflow-y: auto;
      }

      .ep-history button {
        display: block;
        width: 100%;
        text-align: left;
        padding: 12px;
        margin: 6px 0;
        color: #e6d5b9;
        background: #1c304a;
        border: 1px solid #435674;
        border-radius: 7px;
        cursor: pointer;
      }

      .ep-history button:hover {
        border-color: #d6aa69;
      }

      .ep-end {
        text-align: center;
        padding: 30px 15px;
        animation: ep-appear .8s ease;
      }

      .ep-end-trophy {
        font-size: 110px;
        filter: drop-shadow(0 0 25px #e0ac58);
        animation: ep-float 3s infinite;
      }

      .ep-end h1 {
        color: #ffdc9d;
        font-size: clamp(32px, 7vw, 58px);
      }

      .ep-end-quote {
        color: #f4d39a;
        font-size: clamp(17px, 4vw, 25px);
        line-height: 1.8;
        margin: 25px auto;
      }

      .ep-end-season {
        color: #c7d3df;
        font-size: 12px;
        letter-spacing: 2px;
      }

      .ep-coming {
        border: 1px solid #b38a55;
        background: #14243a;
        padding: 22px;
        border-radius: 12px;
        margin: 30px auto;
        max-width: 440px;
        color: #eac78b;
        letter-spacing: 2px;
      }

      @keyframes ep-appear {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes ep-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      @media (max-width: 600px) {
        .ep-controls {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .ep-btn {
          padding: 12px 8px;
          font-size: 12px;
        }

        .ep-dialogue {
          padding: 17px;
        }

        .ep-dialogue p {
          font-size: 14px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #${ID} * {
          animation: none !important;
          transition: none !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =====================================
     CASE 10 COMPLETION CHECK
  ===================================== */

  function completed() {
    if (typeof thfLoadProgress === "function") {
      const progress = thfLoadProgress();

      if (progress?.cases?.["10"]?.completed === true) {
        return true;
      }
    }

    const p = profile();

    const playerId = String(
      p?.id ||
      p?.profileId ||
      p?.username ||
      p?.name ||
      "default"
    );

    try {
      const saved = JSON.parse(
        localStorage.getItem(
          "thf_case10_final_v1_" + playerId
        ) || "{}"
      );

      return saved.completed === true;
    } catch (error) {
      return false;
    }
  }

  /* =====================================
     CREATE SCREEN
  ===================================== */

  function createScreen() {
    styles();

    if (screen) return;

    screen = el("section");
    screen.id = ID;
    screen.hidden = true;

    document.body.appendChild(screen);
  }

  function openStory() {
    if (!completed()) {
      alert(t().locked);
      return;
    }

    createScreen();

    chapter = 0;
    historyOpen = false;

    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    screen.hidden = false;

    render();
  }

  function closeStory() {
    if (!screen) return;

    screen.hidden = true;

    document.body.style.overflow =
      previousOverflow || (
        document.getElementById("thf-victory-screen")?.hidden === false
          ? "hidden"
          : ""
      );
  }

  /* =====================================
     RENDER STORY
  ===================================== */

  function render() {
    if (!screen) return;

    screen.replaceChildren();
    screen.scrollTop = 0;

    if (chapter >= STORY.length) {
      renderEnding();
      return;
    }

    const data = STORY[chapter];

    const container = el("div", "ep-container");

    container.append(
      el("p", "ep-heading", "THE HIDDEN FILES"),
      el("h1", "ep-title", "THE TRUTH REVEALED"),
      el("p", "ep-subtitle", t().subtitle)
    );

    /* PROGRESS BAR */

    const progress = el("div", "ep-progress");
    const fill = el("div", "ep-progress-fill");

    fill.style.width =
      ((chapter + 1) / STORY.length * 100) + "%";

    progress.appendChild(fill);
    container.appendChild(progress);

    /* CHAPTER VISUAL */

    const scene = el("div", "ep-scene");

    scene.append(
      el("div", "ep-scene-icon", data.icon),

      el(
        "p",
        "ep-case-label",
        data.number === "FINAL"
          ? "FINAL REVELATION"
          : t().case + " " + data.number
      ),

      el("h2", "ep-scene-title", data.title)
    );

    container.appendChild(scene);

    /* ALYA'S DIALOGUE */

    const dialogue = el("div", "ep-dialogue");

    dialogue.appendChild(
      el(
        "div",
        "ep-speaker",
        "🎙 " + t().narrator
      )
    );

    data[lang()].forEach(function (line) {
      dialogue.appendChild(
        el("p", "", line)
      );
    });

    container.appendChild(dialogue);

    /* CONTROLS */

    const controls = el("div", "ep-controls");

    const back = btn(
      "← " + t().back,
      function () {
        if (chapter > 0) {
          chapter--;
          historyOpen = false;
          render();
        }
      },
      true
    );

    back.disabled = chapter === 0;

    controls.appendChild(back);

    controls.appendChild(
      btn(
        "📜 " + (
          historyOpen
            ? t().closeHistory
            : t().history
        ),
        function () {
          historyOpen = !historyOpen;
          render();
        },
        true
      )
    );

    controls.appendChild(
      btn(
        t().skip,
        function () {
          chapter = STORY.length;
          historyOpen = false;
          render();
        },
        true
      )
    );

    controls.appendChild(
      btn(
        chapter === STORY.length - 1
          ? t().finish + " →"
          : t().next + " →",
        function () {
          chapter++;
          historyOpen = false;
          render();
        }
      )
    );

    container.appendChild(controls);

    /* HISTORY */

    if (historyOpen) {
      const history = el("div", "ep-history");

      history.appendChild(
        el("h3", "", t().history)
      );

      STORY.forEach(function (item, index) {
        if (index > chapter) return;

        history.appendChild(
          btn(
            item.number + " — " + item.title,
            function () {
              chapter = index;
              historyOpen = false;
              render();
            },
            true
          )
        );
      });

      container.appendChild(history);
    }

    container.appendChild(
      btn(
        t().trophy,
        closeStory,
        true
      )
    );

    screen.appendChild(container);
  }

  /* =====================================
     FINAL ENDING
  ===================================== */

  function renderEnding() {
    const container = el(
      "div",
      "ep-container ep-end"
    );

    container.append(
      el("div", "ep-end-trophy", "🏆"),
      el("p", "ep-heading", "THE HIDDEN FILES"),
      el("h1", "", t().end),
      el("p", "ep-end-season", t().season),
      el(
        "p",
        "ep-end-quote",
        "EVERY FILE HAD A PURPOSE.\n" +
        "EVERY CASE HELD A CLUE.\n" +
        "EVERY DETAIL LED TO THE TRUTH."
      ),
      el(
        "h2",
        "",
        playerName().toUpperCase()
      ),
      el(
        "p",
        "ep-heading",
        "SEASON 01 CHAMPION"
      ),
      el(
        "div",
        "ep-coming",
        "✦ " + t().coming + " ✦"
      )
    );

    const actions = el("div", "ep-controls");

    actions.append(
      btn(
        t().replay,
        function () {
          chapter = 0;
          render();
        }
      ),

      btn(
        t().trophy,
        closeStory,
        true
      ),

      btn(
        t().return,
        function () {
          closeStory();

          if (typeof thfOpenSeasonMenu === "function") {
            const victory = document.getElementById(
              "thf-victory-screen"
            );

            if (victory) victory.hidden = true;

            document.body.style.overflow = "";

            thfOpenSeasonMenu();
          }
        },
        true
      )
    );

    container.appendChild(actions);

    screen.appendChild(container);
  }

  /* =====================================
     ADD BUTTON TO VICTORY SCREEN

     Works with existing 20-victory.js
     without editing that file.
  ===================================== */

  function addVictoryButton() {
    const victory = document.getElementById(
      "thf-victory-screen"
    );

    if (!victory) return;

    const actions = victory.querySelector(
      ".thf-victory-actions"
    );

    if (!actions) return;

    if (
      actions.querySelector(
        "#thf-watch-true-story"
      )
    ) {
      return;
    }

    const watch = el(
      "button",
      "thf-victory-btn",
      t().watch
    );

    watch.id = "thf-watch-true-story";
    watch.type = "button";

    watch.addEventListener(
      "click",
      openStory
    );

    /* Put story before Final Report */

    actions.prepend(watch);
  }

  /* =====================================
     OBSERVE VICTORY SCREEN

     20-victory.js rebuilds its buttons
     after trophy reveal or replay.
  ===================================== */

  function init() {
    createScreen();

    addVictoryButton();

    const observer = new MutationObserver(
      addVictoryButton
    );

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /* =====================================
     GLOBAL FUNCTION
  ===================================== */

  window.thfOpenEpilogue = openStory;

  /* =====================================
     START
  ===================================== */

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

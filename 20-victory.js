
"use strict";

/* THE HIDDEN FILES — GRAND VICTORY
   File: 20-victory.js
   Includes Study Mode integration
*/

(function () {
  const ID = "thf-victory-screen";
  const PREFIX = "thf_case10_final_v1_";

  let screen = null;
  let lastEnding = null;
  let previousOverflow = "";

  function player() {
    return typeof getActiveDetective === "function"
      ? getActiveDetective() : null;
  }

  function playerId() {
    const p = player();
    return String(
      p?.id || p?.profileId ||
      p?.username || p?.name || "default"
    );
  }

  function lang() {
    const p = player();
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

  function completed() {
    try {
      const saved = JSON.parse(
        localStorage.getItem(PREFIX + playerId()) || "{}"
      );

      if (saved.completed === true) return true;
    } catch (error) {}

    if (typeof thfLoadProgress === "function") {
      try {
        return thfLoadProgress()
          ?.cases?.["10"]?.completed === true;
      } catch (error) {}
    }

    return false;
  }

  function element(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) {
      node.textContent = String(content);
    }
    return node;
  }

  function button(label, callback, secondary = false) {
    const node = element(
      "button",
      "thf-victory-btn" + (secondary ? " secondary" : ""),
      label
    );
    node.type = "button";
    node.addEventListener("click", callback);
    return node;
  }

  function addStyles() {
    if (document.getElementById("thf-victory-css")) return;

    const style = document.createElement("style");
    style.id = "thf-victory-css";
    style.textContent = `
      #${ID} {
        position: fixed;
        inset: 0;
        z-index: 15000;
        overflow-y: auto;
        padding: 25px 15px 60px;
        box-sizing: border-box;
        background:
          radial-gradient(circle at 50% 20%,
            #30476a, #101d32 52%, #060d19);
        color: #f7e8ce;
        font-family: Arial, sans-serif;
        text-align: center;
      }

      #${ID}[hidden] { display: none !important; }
      #${ID} * { box-sizing: border-box; }

      .thf-victory-container {
        width: min(100%, 850px);
        margin: 0 auto;
        animation: thf-v-enter .5s ease;
      }

      .thf-victory-kicker {
        color: #d9ad70;
        letter-spacing: 3px;
        font-size: 12px;
        margin-top: 22px;
      }

      .thf-victory-title {
        color: #ffe1a1;
        font-size: clamp(30px, 7vw, 60px);
        text-shadow: 0 0 30px #ae763f;
        margin: 18px 0;
      }

      .thf-victory-subtitle {
        color: #d1dbe7;
        line-height: 1.8;
      }

      .thf-victory-trophy {
        font-size: clamp(110px, 24vw, 190px);
        margin: 30px 0;
        filter: drop-shadow(0 0 35px #dca34d);
        animation: thf-v-float 3s ease-in-out infinite;
      }

      .thf-victory-panel {
        background: rgba(13, 27, 45, .92);
        border: 1px solid #bd9357;
        border-radius: 18px;
        padding: 25px;
        margin: 22px 0;
        box-shadow: 0 0 35px rgba(196, 142, 60, .1);
      }

      .thf-victory-panel h2,
      .thf-victory-panel h3 {
        color: #f4cf91;
      }

      .thf-victory-panel p {
        line-height: 1.8;
        color: #d9e2ed;
      }

      .thf-victory-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin-top: 20px;
      }

      .thf-victory-stat {
        padding: 16px 8px;
        background: #1c304a;
        border: 1px solid #536d89;
        border-radius: 12px;
      }

      .thf-victory-stat strong {
        display: block;
        color: #ffdb9a;
        font-size: 21px;
        margin-bottom: 7px;
      }

      .thf-victory-stat span {
        color: #cad7e5;
        font-size: 12px;
      }

      .thf-victory-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        margin: 25px 0;
      }

      .thf-victory-btn {
        padding: 14px 19px;
        min-height: 46px;
        border-radius: 9px;
        border: 1px solid #edc783;
        background: linear-gradient(135deg, #855a30, #c59752);
        color: #fff9ed;
        font: inherit;
        font-weight: bold;
        cursor: pointer;
      }

      .thf-victory-btn.secondary {
        background: #1b304c;
        border-color: #8195a9;
      }

      .thf-victory-btn:hover {
        filter: brightness(1.15);
      }

      .thf-victory-report {
        text-align: left;
      }

      .thf-victory-report p {
        border-bottom: 1px solid #354961;
        padding-bottom: 10px;
      }

      .thf-victory-confetti {
        position: fixed;
        top: -25px;
        width: 8px;
        height: 15px;
        pointer-events: none;
        z-index: 15001;
        animation: thf-v-fall linear forwards;
      }

      @keyframes thf-v-float {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }

      @keyframes thf-v-enter {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes thf-v-fall {
        to { transform: translateY(110vh) rotate(720deg); opacity: 0; }
      }

      @media (max-width: 600px) {
        .thf-victory-stats {
          grid-template-columns: 1fr;
        }

        .thf-victory-actions {
          flex-direction: column;
        }

        .thf-victory-btn { width: 100%; }
        .thf-victory-panel { padding: 18px; }
      }

      @media (prefers-reduced-motion: reduce) {
        #${ID} * { animation: none !important; }
      }
    `;

    document.head.appendChild(style);
  }

  function createScreen() {
    addStyles();

    if (screen) return;

    screen = element("section");
    screen.id = ID;
    screen.hidden = true;
    document.body.appendChild(screen);
  }

  function clearConfetti() {
    document.querySelectorAll(
      ".thf-victory-confetti"
    ).forEach(node => node.remove());
  }

  function confetti() {
    clearConfetti();

    if (window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches) return;

    const colors = ["#e9bc71", "#fff1c1", "#b9803c", "#ffffff"];

    for (let i = 0; i < 45; i++) {
      const piece = element("span", "thf-victory-confetti");
      piece.style.left = (Math.random() * 100) + "%";
      piece.style.background = colors[i % colors.length];
      piece.style.animationDuration =
        (3 + Math.random() * 3) + "s";
      piece.style.animationDelay =
        (Math.random() * 1.5) + "s";
      document.body.appendChild(piece);
      piece.addEventListener("animationend", () => piece.remove());
    }
  }

  function closeVictory() {
    if (screen) screen.hidden = true;
    clearConfetti();
    document.body.style.overflow = previousOverflow;
  }

  function openStudy() {
    if (typeof window.thfOpenCase10Study !== "function") {
      alert("Study Mode is not loaded. Check 22-case10-study.js");
      return;
    }

    // Keep trophy underneath Study Mode.
    window.thfOpenCase10Study();
  }

  function openEpilogue() {
    if (typeof window.thfOpenEpilogue === "function") {
      window.thfOpenEpilogue();
    } else {
      alert("21-epilogue.js is not loaded.");
    }
  }

  function seasonMenu() {
    closeVictory();

    if (typeof thfOpenSeasonMenu === "function") {
      thfOpenSeasonMenu();
    } else if (typeof window.thfOpenSeasonMenu === "function") {
      window.thfOpenSeasonMenu();
    }
  }

  function renderBase(title, subtitle) {
    screen.replaceChildren();

    const container = element(
      "div", "thf-victory-container"
    );

    container.append(
      element("p", "thf-victory-kicker",
        "THE HIDDEN FILES — SEASON 01"),
      element("h1", "thf-victory-title", title),
      element("p", "thf-victory-subtitle", subtitle)
    );

    screen.appendChild(container);
    screen.scrollTop = 0;
    return container;
  }

  function showPrelude() {
    const container = renderBase(
      tr("FINAL CASE COMPLETED", "KES TERAKHIR SELESAI"),
      tr(
        "Ten investigations. One hidden truth.",
        "Sepuluh penyiasatan. Satu kebenaran tersembunyi."
      )
    );

    const panel = element("div", "thf-victory-panel");

    panel.append(
      element("div", "thf-victory-trophy", "🔒"),
      element("h2", "",
        tr("Your final achievement awaits",
           "Pencapaian terakhir menanti")),
      element("p", "",
        tr(
          "The Meridian investigation is complete.",
          "Penyiasatan Meridian telah selesai."
        ))
    );

    const actions = element("div", "thf-victory-actions");

    actions.append(
      button(
        tr("🏆 REVEAL TROPHY", "🏆 DEDAHKAN PIALA"),
        revealTrophy
      ),
      button(
        tr("📖 REVIEW CASE 10", "📖 ULANG KAJI CASE 10"),
        openStudy,
        true
      )
    );

    panel.appendChild(actions);
    container.appendChild(panel);
  }

  function revealTrophy() {
    const p = player();
    const name = String(
      p?.name || p?.username || "DETECTIVE"
    ).toUpperCase();

    const container = renderBase(
      "GRAND VICTORY",
      tr("SEASON 01 CHAMPION", "JUARA SEASON 01")
    );

    container.appendChild(
      element("div", "thf-victory-trophy", "🏆")
    );

    const panel = element("div", "thf-victory-panel");

    panel.append(
      element("h2", "", name),
      element("p", "",
        tr(
          "You have solved all ten cases and uncovered the truth.",
          "Kau berjaya menyelesaikan kesemua sepuluh kes."
        ))
    );

    const stats = element("div", "thf-victory-stats");

    const xp = p?.xp ?? p?.totalXP ?? "—";
    const rank = p?.rank ?? "CHAMPION";

    [
      ["10/10", tr("CASES", "KES")],
      [String(xp), "XP"],
      [String(rank), "RANK"]
    ].forEach(([value, label]) => {
      const card = element("div", "thf-victory-stat");
      card.append(
        element("strong", "", value),
        element("span", "", label)
      );
      stats.appendChild(card);
    });

    panel.appendChild(stats);

    const actions = element("div", "thf-victory-actions");

    actions.append(
      button(
        tr("📖 REVIEW CASE 10", "📖 ULANG KAJI CASE 10"),
        openStudy
      ),
      button(
        tr("📋 VIEW FINAL REPORT", "📋 LIHAT LAPORAN AKHIR"),
        showReport,
        true
      ),
      button(
        tr("🏆 REPLAY GRAND VICTORY", "🏆 ULANG KEMENANGAN"),
        showPrelude,
        true
      ),
      button(
        tr("← BACK TO SEASON MENU", "← MENU SEASON"),
        seasonMenu,
        true
      )
    );

    panel.appendChild(actions);
    container.appendChild(panel);
    confetti();
  }

  function showReport() {
    const container = renderBase(
      tr("FINAL INVESTIGATION REPORT", "LAPORAN SIASATAN AKHIR"),
      "THE MERIDIAN CONSPIRACY"
    );

    const panel = element(
      "div", "thf-victory-panel thf-victory-report"
    );

    const findings = lang() === "ms"
      ? [
          "Kes 07: Mesin RM120,000 tersalah direkod sebagai belanja.",
          "Kes 08: Inventori dan Trade Payables RM85,000 tidak direkod.",
          "Kes 09: Version B mengandungi angka pelaporan yang salah.",
          "Kes 10: Daniel menyediakan petikan jurnal, Sarah meluluskan pakej dan Adrian mengarahkan penggunaan Version B.",
          "Jumlah aset terkurang nyata RM205,000.",
          "Trade Payables terkurang nyata RM85,000.",
          "Profit Before Tax terkurang nyata RM120,000.",
          "Kesimpulan tertakluk pada andaian game; rekod tidak semestinya membuktikan niat jenayah."
        ]
      : [
          "Case 07: RM120,000 machinery was wrongly expensed.",
          "Case 08: RM85,000 inventory and trade payables were unrecorded.",
          "Case 09: Version B contained misstated financial figures.",
          "Case 10: Daniel prepared the extracts, Sarah approved the package and Adrian directed the use of Version B.",
          "Total assets were understated by RM205,000.",
          "Trade Payables were understated by RM85,000.",
          "Profit Before Tax was understated by RM120,000.",
          "Conclusions follow the game's assumptions; records do not necessarily establish criminal intent."
        ];

    findings.forEach(item => {
      panel.appendChild(element("p", "", "• " + item));
    });

    const actions = element("div", "thf-victory-actions");

    actions.append(
      button(
        tr("📖 REVIEW CASE 10", "📖 ULANG KAJI CASE 10"),
        openStudy
      ),
      button(
        tr("← BACK TO TROPHY", "← KEMBALI KE PIALA"),
        revealTrophy,
        true
      )
    );

    panel.appendChild(actions);
    container.appendChild(panel);
  }

  function openVictory() {
    if (!completed()) {
      alert(tr(
        "Complete Case 10 first.",
        "Selesaikan Case 10 dahulu."
      ));
      return;
    }

    createScreen();

    if (screen.hidden) {
      previousOverflow = document.body.style.overflow;
    }

    screen.hidden = false;
    document.body.style.overflow = "hidden";
    showPrelude();
  }

  function addReplayButton(ending) {
    if (!ending || ending.querySelector("#thf-replay-victory")) {
      return;
    }

    const replay = button(
      tr("🏆 REPLAY GRAND VICTORY", "🏆 ULANG KEMENANGAN"),
      openVictory
    );

    replay.id = "thf-replay-victory";

    const actions = ending.querySelector(".c10-actions");
    if (actions) actions.prepend(replay);
    else ending.appendChild(replay);
  }

  function checkCompletion() {
    const ending = document.querySelector(
      "#case10-screen .c10-ending"
    );

    if (!ending) {
      lastEnding = null;
      return;
    }

    addReplayButton(ending);

    const caseScreen = document.getElementById("case10-screen");

    if (
      ending !== lastEnding &&
      caseScreen &&
      !caseScreen.hidden &&
      completed()
    ) {
      lastEnding = ending;
      openVictory();
    }
  }

  function init() {
    createScreen();
    checkCompletion();

    const app = document.getElementById("app");
    if (app) {
      const observer = new MutationObserver(checkCompletion);
      observer.observe(app, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["hidden", "class"]
      });
    }
  }

  window.thfOpenVictory = openVictory;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

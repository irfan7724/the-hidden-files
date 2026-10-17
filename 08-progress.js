
/* ========================================
   THE HIDDEN FILES
   08 - PROGRESS & SCORING

   LIFE RECOVERY SYSTEM
   +1 LIFE EVERY 30 SECONDS

   DETECTIVE STATISTICS CONNECTED
======================================== */

"use strict";

/* ========================================
   01. LOAD EVIDENCE ASSETS
======================================== */

(function loadEvidenceAssets() {

  if (!document.querySelector(
    'link[href="09-evidence.css"]'
  )) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "09-evidence.css";
    document.head.appendChild(link);
  }

  if (!document.querySelector(
    'script[src="09-evidence.js"]'
  )) {
    const script = document.createElement("script");
    script.src = "09-evidence.js";
    script.async = false;
    document.head.appendChild(script);
  }

})();

/* ========================================
   02. SETTINGS
======================================== */

const THF_PROGRESS_PREFIX = "thf_progress_s1_v1_";

const THF_MAX_LIVES = 3;
const THF_MAX_CASES = 10;
const THF_LIFE_RECOVERY_MS = 30000;

let thfLifeInterval = null;
let thfLifeLastProfileKey = null;

/* ========================================
   03. PROFILE & LANGUAGE
======================================== */

function thfProfile() {

  return typeof getActiveDetective === "function"
    ? getActiveDetective()
    : null;

}

function thfLanguage() {

  const profile = thfProfile();

  if (
    profile &&
    typeof getProfileLanguage === "function"
  ) {
    return getProfileLanguage(profile) === "ms"
      ? "ms"
      : "en";
  }

  return profile?.settings?.language === "ms"
    ? "ms"
    : "en";

}

function thfText(en, ms) {

  return thfLanguage() === "ms"
    ? ms
    : en;

}

function thfProgressKey() {

  const profile = thfProfile();

  return profile
    ? THF_PROGRESS_PREFIX + profile.id
    : null;

}

/* ========================================
   04. DEFAULT PROGRESS
======================================== */

function thfDefaultProgress() {

  return {
    version: 2,
    lives: 3,
    lifeRecoveryAt: null,
    xp: 0,
    streak: 0,
    learningMode: false,
    cases: {}
  };

}

/* ========================================
   05. RAW SAVE
======================================== */

function thfWriteProgressRaw(
  progress,
  key = thfProgressKey()
) {

  if (!key) return false;

  try {

    localStorage.setItem(
      key,
      JSON.stringify(progress)
    );

    return true;

  } catch (error) {

    console.error(
      "Progress save failed:",
      error
    );

    return false;

  }

}

/* ========================================
   06. RECOVER LIVES
======================================== */

function thfApplyLifeRecovery(
  progress,
  now = Date.now()
) {

  let changed = false;

  if (progress.lives >= THF_MAX_LIVES) {

    if (progress.lifeRecoveryAt !== null) {
      progress.lifeRecoveryAt = null;
      changed = true;
    }

    if (progress.learningMode) {
      progress.learningMode = false;
      changed = true;
    }

    return changed;
  }

  if (
    !Number.isFinite(progress.lifeRecoveryAt) ||
    progress.lifeRecoveryAt <= 0
  ) {

    progress.lifeRecoveryAt =
      now + THF_LIFE_RECOVERY_MS;

    changed = true;
  }

  if (now >= progress.lifeRecoveryAt) {

    const recovered =
      1 +
      Math.floor(
        (now - progress.lifeRecoveryAt) /
        THF_LIFE_RECOVERY_MS
      );

    progress.lives = Math.min(
      THF_MAX_LIVES,
      progress.lives + recovered
    );

    progress.lifeRecoveryAt =
      progress.lives === THF_MAX_LIVES
        ? null
        : progress.lifeRecoveryAt +
          recovered * THF_LIFE_RECOVERY_MS;

    changed = true;
  }

  if (progress.learningMode) {
    progress.learningMode = false;
    changed = true;
  }

  return changed;

}

/* ========================================
   07. LOAD PROGRESS
======================================== */

function thfLoadProgress() {

  const result = thfDefaultProgress();
  const key = thfProgressKey();

  if (!key) return result;

  try {

    const raw = localStorage.getItem(key);

    if (!raw) return result;

    const saved = JSON.parse(raw);

    if (
      !saved ||
      typeof saved !== "object"
    ) {
      return result;
    }

    result.lives = Number.isInteger(saved.lives)
      ? Math.max(
          0,
          Math.min(
            THF_MAX_LIVES,
            saved.lives
          )
        )
      : THF_MAX_LIVES;

    result.cases =
      saved.cases &&
      typeof saved.cases === "object" &&
      !Array.isArray(saved.cases)
        ? saved.cases
        : {};

    result.streak = Number.isInteger(
      saved.streak
    )
      ? Math.max(
          0,
          Math.min(4, saved.streak)
        )
      : 0;

    result.lifeRecoveryAt =
      Number.isFinite(saved.lifeRecoveryAt)
        ? saved.lifeRecoveryAt
        : null;

    result.learningMode = false;

    result.xp = Math.min(
      100,
      Object.values(result.cases).reduce(
        (total, record) => {

          if (
            !record ||
            record.completed !== true
          ) {
            return total;
          }

          const points = Number(record.xp);

          return total +
            (
              [0, 3, 5, 7, 10].includes(points)
                ? points
                : 0
            );

        },
        0
      )
    );

    const changed =
      thfApplyLifeRecovery(result);

    if (
      changed ||
      saved.version !== 2 ||
      saved.learningMode === true
    ) {
      thfWriteProgressRaw(result, key);
    }

    return result;

  } catch (error) {

    console.warn(
      "Progress load failed:",
      error
    );

    return result;

  }

}

/* ========================================
   08. SAVE PROGRESS
======================================== */

function thfSaveProgress(progress) {

  progress.version = 2;
  progress.learningMode = false;

  if (progress.lives >= THF_MAX_LIVES) {
    progress.lifeRecoveryAt = null;
  }

  const saved =
    thfWriteProgressRaw(progress);

  if (saved) {
    thfRefreshAll();
  }

  return saved;

}

/* ========================================
   09. CASE RECORDS
======================================== */

function thfGetCase(progress, caseId) {

  if (
    !progress.cases ||
    typeof progress.cases !== "object"
  ) {
    progress.cases = {};
  }

  if (!progress.cases[caseId]) {

    progress.cases[caseId] = {
      mistakes: 0,
      hints: 0,
      completed: false,
      xp: 0,
      firstTry: false,
      completedAt: null
    };

  }

  return progress.cases[caseId];

}

function thfCaseStatus(caseId) {

  const progress = thfLoadProgress();

  return progress.cases[caseId] || null;

}

/* ========================================
   10. COUNTDOWN TIMER
======================================== */

function thfLifeSecondsRemaining(
  progress = thfLoadProgress()
) {

  if (progress.lives >= THF_MAX_LIVES) {
    return 0;
  }

  return Math.max(
    0,
    Math.ceil(
      (
        progress.lifeRecoveryAt -
        Date.now()
      ) / 1000
    )
  );

}

function thfLifeClock(
  progress = thfLoadProgress()
) {

  const seconds =
    thfLifeSecondsRemaining(progress);

  const minutes = Math.floor(
    seconds / 60
  );

  const remaining = seconds % 60;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(remaining).padStart(2, "0")
  );

}

/* ========================================
   11. LIFE CHECK
======================================== */

function thfHasLives() {

  return thfLoadProgress().lives > 0;

}

function thfRequireLife() {

  const progress = thfLoadProgress();

  if (progress.lives > 0) {
    return true;
  }

  const clock = thfLifeClock(progress);

  alert(
    thfText(
      "No lives left. Wait " +
        clock +
        " for your next life.",

      "Nyawa sudah habis. Tunggu " +
        clock +
        " untuk nyawa seterusnya."
    )
  );

  return false;

}

/* ========================================
   12. REGISTER MISTAKE
======================================== */

function thfRegisterMistake(caseId) {

  const progress = thfLoadProgress();

  const record = thfGetCase(
    progress,
    caseId
  );

  if (record.completed) {
    return record;
  }

  if (record.mistakes >= 2) {
    return record;
  }

  if (
    record.mistakes === 0 &&
    progress.lives === 0
  ) {
    thfRequireLife();
    return record;
  }

  record.mistakes = Math.min(
    2,
    (record.mistakes || 0) + 1
  );

  /*
    Only the first mistake in a case
    deducts one life.
  */

  if (record.mistakes === 1) {

    progress.streak = 0;

    if (progress.lives > 0) {

      if (
        progress.lives === THF_MAX_LIVES ||
        !Number.isFinite(
          progress.lifeRecoveryAt
        )
      ) {

        progress.lifeRecoveryAt =
          Date.now() +
          THF_LIFE_RECOVERY_MS;

      }

      progress.lives--;

    }

  }

  thfSaveProgress(progress);

  return record;

}

/* ========================================
   13. COMPLETE CASE
======================================== */

function thfCompleteCase(caseId) {

  const progress = thfLoadProgress();

  const record = thfGetCase(
    progress,
    caseId
  );

  if (record.completed) {
    return record;
  }

  let points = 0;

  if (record.mistakes >= 2) {

    points = 0;

  } else if (record.mistakes === 1) {

    points = 3;

  } else if (record.hints >= 2) {

    points = 5;

  } else if (record.hints === 1) {

    points = 7;

  } else {

    points = 10;

  }

  record.completed = true;
  record.xp = points;

  record.firstTry =
    record.mistakes === 0;

  record.completedAt =
    new Date().toISOString();

  /*
    Five first-try completions
    award one extra life.
  */

  if (record.firstTry) {

    progress.streak++;

    if (progress.streak >= 5) {

      if (
        progress.lives < THF_MAX_LIVES
      ) {

        progress.lives++;

        if (
          progress.lives === THF_MAX_LIVES
        ) {
          progress.lifeRecoveryAt = null;
        }

      }

      progress.streak = 0;

    }

  } else {

    progress.streak = 0;

  }

  progress.xp = Math.min(
    100,
    progress.xp + points
  );

  thfSaveProgress(progress);

  return record;

}

/* ========================================
   14. DETECTIVE RANK
======================================== */

function thfRank(xp) {

  if (xp >= 90) {
    return "Master Detective";
  }

  if (xp >= 70) {
    return "Senior Detective";
  }

  if (xp >= 40) {
    return "Junior Detective";
  }

  return "Rookie Detective";

}

/* ========================================
   15. ELEMENT HELPER
======================================== */

function thfMake(
  tag,
  className,
  value
) {

  const element =
    document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (value !== undefined) {
    element.textContent = value;
  }

  return element;

}

function thfCompletedCount(progress) {

  return Object.values(progress.cases)
    .filter(
      record =>
        record?.completed === true
    )
    .length;

}

/* ========================================
   16. LIFE STATUS TEXT
======================================== */

function thfLifeNotice(progress) {

  if (
    progress.lives >= THF_MAX_LIVES
  ) {
    return null;
  }

  const clock =
    thfLifeClock(progress);

  if (progress.lives === 0) {

    return thfText(
      "❤️ 0/3 — Wait " +
        clock +
        " for 1 life.",

      "❤️ 0/3 — Tunggu " +
        clock +
        " untuk 1 nyawa."
    );

  }

  return thfText(
    "❤️ Next life in " +
      clock +
      " · +1 every 30 seconds.",

    "❤️ Nyawa seterusnya dalam " +
      clock +
      " · +1 setiap 30 saat."
  );

}

/* ========================================
   17. DETECTIVE STATISTICS
======================================== */

function thfRenderDetectiveStatistics(
  progress = thfLoadProgress()
) {

  const container = document.getElementById(
    "detective-statistics"
  );

  if (!container) return;

  const profile = thfProfile();

  if (!profile) {

    container.textContent = thfText(
      "No detective selected.",
      "Tiada detektif dipilih."
    );

    return;

  }

  const xp = progress.xp;
  const lives = progress.lives;

  const rank = thfRank(xp);

  const completed =
    thfCompletedCount(progress);

  const ms = thfLanguage() === "ms";

  const stats = [
    [
      "⭐",
      ms ? "JUMLAH XP" : "TOTAL XP",
      xp + " / 100"
    ],
    [
      "🏅",
      ms ? "PANGKAT DETEKTIF" : "DETECTIVE RANK",
      rank
    ],
    [
      "❤️",
      ms ? "BAKI NYAWA" : "REMAINING LIVES",
      lives + " / 3"
    ],
    [
      "📁",
      ms ? "KES SELESAI" : "CASES COMPLETED",
      completed + " / 10"
    ]
  ];

  container.replaceChildren();

  stats.forEach(([icon, label, value]) => {

    const row = document.createElement("div");
    row.className = "detective-stat-row";

    const name = document.createElement("span");
    name.textContent = icon + " " + label;

    const amount = document.createElement("strong");
    amount.textContent = value;

    row.append(name, amount);

    container.appendChild(row);

  });

  if (lives < THF_MAX_LIVES) {

    const notice = document.createElement("p");

    notice.id = "detective-life-recovery";
    notice.className = "settings-helper";

    notice.textContent = ms
      ? "⏱ Nyawa seterusnya dalam " +
        thfLifeClock(progress)
      : "⏱ Next life in " +
        thfLifeClock(progress);

    container.appendChild(notice);

  }

}

/* ========================================
   18. DASHBOARD
======================================== */

function thfRefreshDashboard(
  progress = thfLoadProgress()
) {

  const completed =
    thfCompletedCount(progress);

  const score = document.getElementById(
    "thf-dashboard"
  );

  if (score) {

    score.replaceChildren();

    const panel = thfMake(
      "div",
      "thf-score-panel"
    );

    const items = [
      [
        "⭐ " + progress.xp,
        "XP / 100"
      ],
      [
        "❤️ " + progress.lives,
        "LIVES / 3"
      ],
      [
        completed + " / 10",
        thfText("CASES", "KES")
      ]
    ];

    items.forEach(
      ([value, label]) => {

        const item = thfMake(
          "div",
          "thf-score-item"
        );

        item.append(
          thfMake(
            "strong",
            "",
            value
          ),
          thfMake(
            "span",
            "",
            label
          )
        );

        panel.appendChild(item);

      }
    );

    score.appendChild(panel);

    score.appendChild(
      thfMake(
        "p",
        "thf-progress-caption",
        thfText(
          "Detective Rank: ",
          "Pangkat Detektif: "
        ) + thfRank(progress.xp)
      )
    );

    const track = thfMake(
      "div",
      "thf-progress-track"
    );

    const fill = thfMake(
      "div",
      "thf-progress-fill"
    );

    fill.style.width =
      progress.xp + "%";

    track.appendChild(fill);
    score.appendChild(track);

    const notice =
      thfLifeNotice(progress);

    if (notice) {

      score.appendChild(
        thfMake(
          "p",
          "thf-scoring-notice thf-life-timer",
          notice
        )
      );

    }

  }

  const list = document.getElementById(
    "case-preview-list"
  );

  if (list) {

    const first = list.querySelector(
      ".case-preview"
    );

    const status = first?.querySelector(
      ".case-preview-status"
    );

    if (
      status &&
      progress.cases["01"]?.completed
    ) {

      status.textContent = thfText(
        "✓ COMPLETED",
        "✓ SELESAI"
      );

      status.classList.add(
        "thf-case-badge"
      );

    }

  }

}

/* ========================================
   19. SEASON OVERVIEW
======================================== */

function thfRefreshOverview(
  progress = thfLoadProgress()
) {

  const completed =
    thfCompletedCount(progress);

  const element = document.getElementById(
    "thf-overview-score"
  );

  if (!element) return;

  element.textContent =
    "⭐ " +
    progress.xp +
    " XP · ❤️ " +
    progress.lives +
    "/3 · " +
    completed +
    "/10 " +
    thfText(
      "cases completed",
      "kes selesai"
    ) +
    (
      progress.lives < THF_MAX_LIVES
        ? " · ⏱ " +
          thfLifeClock(progress)
        : ""
    );

}

/* ========================================
   20. REFRESH ALL
======================================== */

function thfRefreshAll() {

  const progress = thfLoadProgress();

  thfRefreshDashboard(progress);

  thfRefreshOverview(progress);

  thfRenderDetectiveStatistics(progress);

  if (
    typeof thfRefreshEvidence ===
    "function"
  ) {
    thfRefreshEvidence();
  }

}

/* ========================================
   21. INSTALL DASHBOARD
======================================== */

function thfInstallDashboard() {

  const hq = document.querySelector(
    "#hq-screen .hq-season-card"
  );

  const overview =
    document.querySelector(
      "#far-overview-screen .season-progress-panel"
    );

  if (
    hq &&
    !document.getElementById(
      "thf-dashboard"
    )
  ) {

    const dashboard =
      thfMake("div");

    dashboard.id =
      "thf-dashboard";

    hq.after(dashboard);

  }

  if (
    overview &&
    !document.getElementById(
      "thf-overview-score"
    )
  ) {

    const score = thfMake(
      "p",
      "thf-progress-caption"
    );

    score.id =
      "thf-overview-score";

    overview.after(score);

  }

  thfRefreshAll();

}

/* ========================================
   22. LIVE COUNTDOWN
======================================== */

function thfLifeTick() {

  const key = thfProgressKey();

  if (key !== thfLifeLastProfileKey) {

    thfLifeLastProfileKey = key;
    thfRefreshAll();
    return;

  }

  if (!key) return;

  const progress =
    thfLoadProgress();

  const notice =
    thfLifeNotice(progress);

  const timer = document.querySelector(
    "#thf-dashboard .thf-life-timer"
  );

  if (timer && notice) {
    timer.textContent = notice;
  }

  if (
    progress.lives < THF_MAX_LIVES &&
    !timer
  ) {
    thfRefreshAll();
  }

  if (
    progress.lives === THF_MAX_LIVES &&
    timer
  ) {
    thfRefreshAll();
  }

  const overview =
    document.getElementById(
      "thf-overview-score"
    );

  if (overview) {

    const completed =
      thfCompletedCount(progress);

    overview.textContent =
      "⭐ " +
      progress.xp +
      " XP · ❤️ " +
      progress.lives +
      "/3 · " +
      completed +
      "/10 " +
      thfText(
        "cases completed",
        "kes selesai"
      ) +
      (
        progress.lives < THF_MAX_LIVES
          ? " · ⏱ " +
            thfLifeClock(progress)
          : ""
      );

  }

  const displayedLives =
    document.querySelector(
      "#thf-dashboard .thf-score-item:nth-child(2) strong"
    );

  if (
    displayedLives &&
    displayedLives.textContent !==
      "❤️ " + progress.lives
  ) {
    thfRefreshAll();
  }

  /*
    Update Detective Statistics
    while Settings is open.
  */

  const settingsScreen = document.getElementById(
    "edit-profile-screen"
  );

  if (
    settingsScreen &&
    !settingsScreen.classList.contains("hidden")
  ) {

    thfRenderDetectiveStatistics(progress);

  }

}

/* ========================================
   23. INITIALISE
======================================== */

function thfInit() {

  thfInstallDashboard();

  thfLifeLastProfileKey =
    thfProgressKey();

  if (thfLifeInterval === null) {

    thfLifeInterval = setInterval(
      thfLifeTick,
      1000
    );

  }

  const refreshIds = [
    "open-seasons-btn",
    "season-1-btn",
    "switch-profile-btn",
    "settings-logout-btn",
    "enter-hq-btn",
    "save-profile-btn",
    "cancel-profile-btn",
    "far-back-btn",
    "hq-avatar"
  ];

  refreshIds.forEach(id => {

    document.getElementById(id)
      ?.addEventListener(
        "click",
        () => {

          queueMicrotask(
            thfRefreshAll
          );

        }
      );

  });

  document.getElementById(
    "profile-list"
  )?.addEventListener(
    "click",
    () => {

      queueMicrotask(
        thfRefreshAll
      );

    }
  );

  document.addEventListener(
    "visibilitychange",
    () => {

      if (!document.hidden) {
        thfRefreshAll();
      }

    }
  );

  window.addEventListener(
    "focus",
    thfRefreshAll
  );

}

/* ========================================
   24. START SYSTEM
======================================== */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    thfInit
  );

} else {

  thfInit();

}

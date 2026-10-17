
"use strict";

/* ========================================
   THE HIDDEN FILES
   09 - EVIDENCE BOARD
   UPDATED VERSION
======================================== */

// ========================================
// REGISTER SCREEN
// ========================================

if (
  typeof screenIds !== "undefined" &&
  !screenIds.includes("evidence-screen")
) {
  screenIds.push("evidence-screen");
}

// ========================================
// CASE DATA
// ========================================

const THF_EVIDENCE_CASES = [
  "The Invoice Trap",
  "The Midnight Journal",
  "The Depreciation Code",
  "The Missing Inventory",
  "The Commission Connection",
  "The Bank Trail",
  "The Misclassified Files",
  "The Silenced Adjustment",
  "The Altered Statement",
  "The Final Investigation"
];

const THF_EVIDENCE_CLUES = [
  "invoice-date",
  "invoice-item",
  "ledger-entry",
  "asset-usage"
];

// ========================================
// TRANSLATIONS
// ========================================

const THF_EVIDENCE_I18N = {
  en: {
    button: "OPEN EVIDENCE BOARD",
    title: "Evidence Board",
    subtitle: "CLASSIFIED RECORDS",
    description:
      "Review collected evidence, accounting findings and investigation progress.",
    back: "BACK",
    hq: "HEADQUARTERS",
    overview: "SEASON OVERVIEW",
    caseFiles: "CASE FILES",
    cases: "CASES COMPLETE",
    clues: "CLUES FOUND",
    xp: "TOTAL XP",
    lives: "LIVES",
    dashboard: "Investigation Progress",
    dashboardHelp:
      "Case selection is located in Case Files.",
    locked: "LOCKED",
    available: "AVAILABLE",
    progress: "IN PROGRESS",
    complete: "COMPLETED",
    case: "CASE",
    rank: "Detective Rank",
    collected: "Case 01 Evidence Collected",
    collectedHelp:
      "Evidence is unlocked through investigation.",
    unknown: "UNDISCOVERED EVIDENCE",
    unknownText:
      "Investigate the documents to reveal this clue.",
    witness: "Witness Interview",
    witnessPending:
      "Alya has not been interviewed.",
    witnessDone:
      "Alya confirmed the purchase was production machinery.",
    deduction: "Mini Deduction",
    deductionPending: "Not completed.",
    deductionDone:
      "Machinery was incorrectly classified as an expense.",
    findingsTitle: "Investigation Findings",
    caseXp: "XP earned",

    findings: [
      [
        "Case 01 - Accounting Finding",
        "Complete Case 01 to unlock this finding.",
        "Dr Machinery (PPE) RM50,000; Cr Office Expense RM50,000. Increase profit before tax by RM50,000 before depreciation."
      ],
      [
        "Case 02 - Journal Trail",
        "Complete Case 02 to unlock this finding.",
        "The 11:47 PM journal concerns the same RM50,000 correction as Case 01. Do not double count it."
      ],
      [
        "Case 03 - Depreciation",
        "Complete Case 03 to unlock this finding.",
        "Straight-line depreciation: (RM50,000 - RM5,000) / 5 = RM9,000. Reduce 2025 profit before tax by RM9,000."
      ],
      [
        "Case 04 - Inventory Valuation",
        "Complete Case 04 to unlock this finding.",
        "IAS 2: inventory cost RM80,000 exceeds NRV RM65,000. Write down inventory by RM15,000."
      ],
      [
        "Case 05 - Revenue Cut-off and Commission",
        "Complete Case 05 to unlock this finding.",
        "Control transferred on 4 January 2026. Reverse RM300,000 revenue recorded in 2025. The RM18,000 commission approval requires further investigation."
      ]
    ],

    clueTitles: [
      "Invoice Date",
      "Nature of Purchase",
      "Ledger Classification",
      "Asset Usage"
    ],

    clueDescriptions: [
      "Supplier invoice dated 2 January 2025.",
      "RM50,000 production machinery.",
      "RM50,000 debited to Office Expense.",
      "Machinery available for use from 1 January 2025."
    ]
  },

  ms: {
    button: "BUKA PAPAN BUKTI",
    title: "Papan Bukti",
    subtitle: "REKOD SULIT",
    description:
      "Semak bukti terkumpul, penemuan perakaunan dan kemajuan penyiasatan.",
    back: "KEMBALI",
    hq: "IBU PEJABAT",
    overview: "PILIHAN MUSIM",
    caseFiles: "FAIL KES",
    cases: "KES SELESAI",
    clues: "PETUNJUK DITEMUI",
    xp: "JUMLAH XP",
    lives: "NYAWA",
    dashboard: "Kemajuan Penyiasatan",
    dashboardHelp:
      "Pemilihan kes berada di halaman Fail Kes.",
    locked: "TERKUNCI",
    available: "TERSEDIA",
    progress: "SEDANG DISIASAT",
    complete: "SELESAI",
    case: "KES",
    rank: "Pangkat Detektif",
    collected: "Bukti Dikumpul - Kes 01",
    collectedHelp:
      "Bukti dibuka melalui penyiasatan.",
    unknown: "BUKTI BELUM DITEMUI",
    unknownText:
      "Siasat dokumen untuk mendedahkan petunjuk.",
    witness: "Temu Bual Saksi",
    witnessPending:
      "Alya belum ditemu bual.",
    witnessDone:
      "Alya mengesahkan pembelian melibatkan mesin pengeluaran.",
    deduction: "Deduksi Mini",
    deductionPending: "Belum selesai.",
    deductionDone:
      "Mesin tersalah diklasifikasikan sebagai belanja.",
    findingsTitle: "Penemuan Penyiasatan",
    caseXp: "XP diperoleh",

    findings: [
      [
        "Kes 01 - Penemuan Perakaunan",
        "Selesaikan Kes 01 untuk membuka penemuan.",
        "Dr Mesin (PPE) RM50,000; Cr Belanja Pejabat RM50,000. Keuntungan sebelum cukai meningkat RM50,000 sebelum susut nilai."
      ],
      [
        "Kes 02 - Jejak Jurnal",
        "Selesaikan Kes 02 untuk membuka penemuan.",
        "Jurnal 11:47 malam berkaitan pembetulan RM50,000 yang sama seperti Kes 01. Jangan kira dua kali."
      ],
      [
        "Kes 03 - Susut Nilai",
        "Selesaikan Kes 03 untuk membuka penemuan.",
        "Susut nilai: (RM50,000 - RM5,000) / 5 = RM9,000. Kurangkan keuntungan sebelum cukai 2025 sebanyak RM9,000."
      ],
      [
        "Kes 04 - Penilaian Inventori",
        "Selesaikan Kes 04 untuk membuka penemuan.",
        "IAS 2: kos inventori RM80,000 melebihi NRV RM65,000. Inventori perlu diturunkan nilainya sebanyak RM15,000."
      ],
      [
        "Kes 05 - Cut-off Hasil dan Komisen",
        "Selesaikan Kes 05 untuk membuka penemuan.",
        "Kawalan barang berpindah pada 4 Januari 2026. Hasil RM300,000 yang direkodkan dalam 2025 perlu dibalikkan. Kelulusan komisen RM18,000 memerlukan siasatan lanjut."
      ]
    ],

    clueTitles: [
      "Tarikh Invois",
      "Jenis Pembelian",
      "Klasifikasi Lejar",
      "Penggunaan Aset"
    ],

    clueDescriptions: [
      "Invois pembekal bertarikh 2 Januari 2025.",
      "Mesin pengeluaran RM50,000.",
      "RM50,000 didebitkan kepada Belanja Pejabat.",
      "Mesin tersedia untuk digunakan mulai 1 Januari 2025."
    ]
  }
};

// ========================================
// VARIABLES
// ========================================

let thfEvidenceReturnScreen = "hq-screen";
let thfEvidenceReady = false;

// ========================================
// PROFILE AND LANGUAGE
// ========================================

function thfEvidenceProfile() {
  return typeof getActiveDetective === "function"
    ? getActiveDetective()
    : null;
}

function thfEvidenceLang() {
  const profile = thfEvidenceProfile();

  if (
    profile &&
    typeof getProfileLanguage === "function"
  ) {
    return getProfileLanguage(profile);
  }

  return "en";
}

function thfEvidenceT() {
  return THF_EVIDENCE_I18N[
    thfEvidenceLang() === "ms" ? "ms" : "en"
  ];
}

// ========================================
// STORAGE
// ========================================

function thfEvidenceRead(prefix) {
  const profile = thfEvidenceProfile();

  if (!profile) return {};

  try {
    const saved = JSON.parse(
      localStorage.getItem(
        prefix + profile.id
      ) || "null"
    );

    return saved &&
      typeof saved === "object"
      ? saved
      : {};
  } catch (error) {
    return {};
  }
}

// ========================================
// LOAD EVIDENCE DATA
// ========================================

function thfEvidenceData() {
  const story = thfEvidenceRead(
    "thf_story_s1_v1_"
  );

  const inv = thfEvidenceRead(
    "thf_case01_investigation_v1_"
  );

  const prefixes = [
    "thf_case01_puzzle_v1_",
    "thf_case02_matching_v1_",
    "thf_case03_calculator_v1_",
    "thf_case04_sequence_v1_",
    "thf_case05_timeline_v1_",
    "thf_case06_bank_v1_"
  ];

  const progress =
    typeof thfLoadProgress === "function"
      ? thfLoadProgress()
      : {
          xp: 0,
          lives: 3,
          cases: {}
        };

  const records = prefixes.map(prefix =>
    thfEvidenceRead(prefix)
  );

  const clues = Array.isArray(inv.clues)
    ? THF_EVIDENCE_CLUES.filter(id =>
        inv.clues.includes(id)
      )
    : [];

  return {
    storyDone: story.completed === true,
    inv,
    progress,
    clues,

    done: records.map((record, index) => {
      const id = String(
        index + 1
      ).padStart(2, "0");

      return (
        record.completed === true ||
        progress.cases?.[id]?.completed === true
      );
    }),

    started: records.map((record, index) => {
      if (index === 0) {
        return (
          clues.length > 0 ||
          inv.interviewed === true ||
          record.errorFound === true
        );
      }

      return record.started === true;
    })
  };
}

// ========================================
// ELEMENT HELPERS
// ========================================

function thfEvidenceEl(
  tag,
  className = "",
  value
) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (value !== undefined) {
    element.textContent = String(value);
  }

  return element;
}

function thfEvidenceButton(
  text,
  action,
  className = "secondary-btn"
) {
  const button = thfEvidenceEl(
    "button",
    className,
    text
  );

  button.type = "button";

  button.addEventListener(
    "click",
    action
  );

  return button;
}

function thfEvidenceSection(
  title,
  description = ""
) {
  const section = thfEvidenceEl(
    "section",
    "thf-evidence-section"
  );

  section.appendChild(
    thfEvidenceEl("h3", "", title)
  );

  if (description) {
    section.appendChild(
      thfEvidenceEl(
        "p",
        "thf-evidence-help",
        description
      )
    );
  }

  return section;
}

// ========================================
// SCREEN NAVIGATION
// ========================================

function thfEvidenceShowScreen(id) {
  if (typeof showScreen === "function") {
    showScreen(id);
  }

  document.querySelectorAll(
    "#app > .screen"
  ).forEach(screen => {
    screen.classList.toggle(
      "hidden",
      screen.id !== id
    );
  });

  window.scrollTo(0, 0);
}

function thfEvidenceNavigate(id) {
  if (id === "case-files-screen") {
    if (
      typeof thfOpenCaseFiles === "function"
    ) {
      thfOpenCaseFiles();
    }

    return;
  }

  if (id === "investigation-screen") {
    if (typeof invLoad === "function") {
      invLoad();
    }

    if (typeof invRender === "function") {
      invRender();
    }

    if (
      typeof case01RenderEntry === "function"
    ) {
      case01RenderEntry();
    }
  }

  if (id === "far-overview-screen") {
    if (
      typeof invRenderEntry === "function"
    ) {
      invRenderEntry();
    }

    if (
      typeof renderStoryEntry === "function"
    ) {
      renderStoryEntry();
    }
  }

  if (
    typeof thfRefreshDashboard === "function"
  ) {
    thfRefreshDashboard();
  }

  if (
    typeof thfRefreshOverview === "function"
  ) {
    thfRefreshOverview();
  }

  thfEvidenceShowScreen(id);
}

// ========================================
// BUILD EVIDENCE SCREEN
// ========================================

function thfBuildEvidenceScreen() {
  if (
    document.getElementById(
      "evidence-screen"
    )
  ) {
    return;
  }

  const app = document.getElementById("app");

  if (!app) return;

  const screen = thfEvidenceEl(
    "section",
    "screen app-page thf-evidence-screen hidden"
  );

  screen.id = "evidence-screen";

  const panel = thfEvidenceEl(
    "div",
    "page-panel thf-evidence-panel"
  );

  const header = thfEvidenceEl(
    "div",
    "thf-evidence-header"
  );

  const heading = thfEvidenceEl("div");

  heading.append(
    thfEvidenceEl(
      "p",
      "eyebrow",
      "THE HIDDEN FILES"
    ),
    thfEvidenceEl(
      "h2",
      "",
      thfEvidenceT().title
    )
  );

  const back = thfEvidenceButton(
    thfEvidenceT().back,
    thfCloseEvidence
  );

  back.id = "thf-evidence-back";

  header.append(
    heading,
    back
  );

  const description = thfEvidenceEl(
    "p",
    "thf-evidence-help"
  );

  description.id =
    "thf-evidence-description";

  const content = thfEvidenceEl("div");
  content.id = "thf-evidence-content";

  const footer = thfEvidenceEl(
    "div",
    "thf-evidence-footer"
  );

  footer.id = "thf-evidence-footer";

  panel.append(
    header,
    description,
    content,
    footer
  );

  screen.appendChild(panel);
  app.appendChild(screen);
}

// ========================================
// INSTALL EVIDENCE BUTTONS
// ========================================

function thfInstallEvidenceButtons() {
  const targets = [
    [
      "#hq-screen .hq-actions",
      "thf-evidence-hq-btn",
      "hq-screen"
    ],
    [
      "#story-entry-area",
      "thf-evidence-overview-btn",
      "far-overview-screen"
    ],
    [
      "#investigation-screen .investigation-header",
      "thf-evidence-investigation-btn",
      "investigation-screen"
    ]
  ];

  targets.forEach(
    ([selector, id, origin]) => {
      const parent =
        document.querySelector(selector);

      if (!parent) return;

      let button =
        document.getElementById(id);

      if (!button) {
        button = thfEvidenceButton(
          thfEvidenceT().button,
          () => thfOpenEvidence(origin)
        );

        button.id = id;
        parent.appendChild(button);
      }

      button.textContent =
        thfEvidenceT().button;
    }
  );
}

// ========================================
// OPEN AND CLOSE
// ========================================

function thfOpenEvidence(
  origin = "hq-screen"
) {
  if (!thfEvidenceProfile()) {
    thfEvidenceShowScreen(
      "profile-screen"
    );
    return;
  }

  thfEvidenceReturnScreen = origin;

  thfRefreshEvidence();

  thfEvidenceShowScreen(
    "evidence-screen"
  );
}

function thfCloseEvidence() {
  thfEvidenceNavigate(
    thfEvidenceReturnScreen
  );
}

// ========================================
// CASE FILES COMPATIBILITY
// ========================================

function thfEvidenceOpenCase(index) {
  if (
    typeof thfCaseFilesOpenCase === "function"
  ) {
    thfCaseFilesOpenCase(index);
  }
}

// ========================================
// RENDER CASE DASHBOARD
// ========================================

function thfRenderCaseDashboard(
  container,
  data
) {
  const t = thfEvidenceT();

  const section = thfEvidenceSection(
    t.dashboard,
    t.dashboardHelp
  );

  const grid = thfEvidenceEl(
    "div",
    "thf-evidence-grid"
  );

  THF_EVIDENCE_CASES.forEach(
    (name, index) => {
      const playable = index < 6;

      const done =
        playable &&
        data.done[index] === true;

      const unlocked =
        index === 0
          ? data.storyDone
          : playable &&
            data.done[index - 1];

      const started =
        playable &&
        data.started[index];

      const status = done
        ? "completed"
        : unlocked && started
          ? "in-progress"
          : unlocked
            ? "available"
            : "locked";

      const label =
        status === "completed"
          ? t.complete
          : status === "in-progress"
            ? t.progress
            : status === "available"
              ? t.available
              : t.locked;

      const card = thfEvidenceEl(
        "article",
        "thf-evidence-case " + status
      );

      const top = thfEvidenceEl(
        "div",
        "thf-evidence-case-top"
      );

      top.append(
        thfEvidenceEl(
          "span",
          "thf-evidence-case-number",
          t.case + " " +
            String(index + 1).padStart(
              2,
              "0"
            )
        ),
        thfEvidenceEl(
          "span",
          "thf-evidence-status",
          label
        )
      );

      card.append(
        top,
        thfEvidenceEl(
          "h4",
          "",
          name
        )
      );

      if (done) {
        const id = String(
          index + 1
        ).padStart(2, "0");

        const xp =
          data.progress.cases?.[id]?.xp ?? 0;

        card.appendChild(
          thfEvidenceEl(
            "p",
            "",
            t.caseXp + ": " +
              xp + " / 10"
          )
        );
      }

      grid.appendChild(card);
    }
  );

  section.appendChild(grid);
  container.appendChild(section);
}

// ========================================
// RENDER COLLECTED CLUES
// ========================================

function thfRenderEvidenceFiles(
  container,
  data
) {
  const t = thfEvidenceT();

  const section = thfEvidenceSection(
    t.collected,
    t.collectedHelp
  );

  const grid = thfEvidenceEl(
    "div",
    "thf-evidence-grid"
  );

  THF_EVIDENCE_CLUES.forEach(
    (id, index) => {
      const found =
        data.clues.includes(id);

      const card = thfEvidenceEl(
        "article",
        "thf-evidence-file" +
          (found ? " found" : "")
      );

      card.append(
        thfEvidenceEl(
          "strong",
          "",
          found
            ? "✓ " + t.clueTitles[index]
            : "🔒 " + t.unknown
        ),
        thfEvidenceEl(
          "p",
          "",
          found
            ? t.clueDescriptions[index]
            : t.unknownText
        )
      );

      grid.appendChild(card);
    }
  );

  section.appendChild(grid);
  container.appendChild(section);
}

// ========================================
// RENDER FINDINGS
// ========================================

function thfRenderFindings(
  container,
  data
) {
  const t = thfEvidenceT();

  const section = thfEvidenceSection(
    t.findingsTitle
  );

  const milestones = [
    data.storyDone,
    data.clues.length === 4,
    data.inv.interviewed === true,
    data.inv.solved === true,
    data.done[0] === true
  ];

  const finished =
    milestones.filter(Boolean).length;

  const track = thfEvidenceEl(
    "div",
    "thf-evidence-progress"
  );

  const fill = thfEvidenceEl("div");

  fill.style.width =
    finished * 20 + "%";

  track.appendChild(fill);

  section.append(
    track,
    thfEvidenceEl(
      "p",
      "thf-evidence-help",
      finished + " / 5"
    )
  );

  const findings = [
    [
      t.witness,
      data.inv.interviewed === true
        ? t.witnessDone
        : t.witnessPending
    ],
    [
      t.deduction,
      data.inv.solved === true
        ? t.deductionDone
        : t.deductionPending
    ]
  ];

  t.findings.forEach(
    (finding, index) => {
      findings.push([
        finding[0],
        data.done[index]
          ? finding[2]
          : finding[1]
      ]);
    }
  );

  findings.forEach(
    ([title, description]) => {
      const card = thfEvidenceEl(
        "div",
        "thf-evidence-finding"
      );

      card.append(
        thfEvidenceEl(
          "h4",
          "",
          title
        ),
        thfEvidenceEl(
          "p",
          "",
          description
        )
      );

      section.appendChild(card);
    }
  );

  container.appendChild(section);
}

// ========================================
// REFRESH EVIDENCE BOARD
// ========================================

function thfRefreshEvidence() {
  if (!thfEvidenceReady) return;

  const t = thfEvidenceT();
  const data = thfEvidenceData();

  thfInstallEvidenceButtons();

  const screen = document.getElementById(
    "evidence-screen"
  );

  if (!screen) return;

  const heading = screen.querySelector(
    ".thf-evidence-header h2"
  );

  if (heading) {
    heading.textContent = t.title;
  }

  const back = document.getElementById(
    "thf-evidence-back"
  );

  if (back) {
    back.textContent = t.back;
  }

  const description =
    document.getElementById(
      "thf-evidence-description"
    );

  if (description) {
    description.textContent =
      t.description;
  }

  const footer = document.getElementById(
    "thf-evidence-footer"
  );

  if (footer) {
    footer.replaceChildren();

    footer.append(
      thfEvidenceButton(
        t.caseFiles,
        () => thfEvidenceNavigate(
          "case-files-screen"
        ),
        "primary-btn"
      ),
      thfEvidenceButton(
        t.hq,
        () => thfEvidenceNavigate(
          "hq-screen"
        )
      ),
      thfEvidenceButton(
        t.overview,
        () => thfEvidenceNavigate(
          "far-overview-screen"
        )
      )
    );
  }

  const content = document.getElementById(
    "thf-evidence-content"
  );

  if (!content) return;

  content.replaceChildren();

  const completed = Object.values(
    data.progress.cases || {}
  ).filter(
    record => record?.completed === true
  ).length;

  const stats = thfEvidenceEl(
    "div",
    "thf-evidence-stats"
  );

  const statItems = [
    [
      completed + " / 10",
      t.cases
    ],
    [
      data.clues.length + " / 4",
      t.clues
    ],
    [
      data.progress.xp + " / 100",
      t.xp
    ],
    [
      data.progress.lives + " / 3",
      t.lives
    ]
  ];

  statItems.forEach(
    ([value, label]) => {
      const card = thfEvidenceEl(
        "div",
        "thf-evidence-stat"
      );

      card.append(
        thfEvidenceEl(
          "strong",
          "",
          value
        ),
        thfEvidenceEl(
          "span",
          "",
          label
        )
      );

      stats.appendChild(card);
    }
  );

  content.appendChild(stats);

  const rank =
    typeof thfRank === "function"
      ? thfRank(data.progress.xp)
      : "Rookie Detective";

  content.appendChild(
    thfEvidenceEl(
      "p",
      "thf-evidence-help",
      t.rank + ": " + rank
    )
  );

  thfRenderCaseDashboard(
    content,
    data
  );

  thfRenderEvidenceFiles(
    content,
    data
  );

  thfRenderFindings(
    content,
    data
  );
}

// ========================================
// INITIALISATION
// ========================================

function thfEvidenceInit() {
  if (thfEvidenceReady) return;

  thfBuildEvidenceScreen();

  thfEvidenceReady = true;

  thfRefreshEvidence();

  const refreshTargets = [
    "case01-screen",
    "investigation-screen",
    "profile-list",
    "enter-hq-btn",
    "save-profile-btn",
    "switch-profile-btn"
  ];

  refreshTargets.forEach(id => {
    const element =
      document.getElementById(id);

    if (!element) return;

    element.addEventListener(
      "click",
      () => {
        queueMicrotask(
          thfRefreshEvidence
        );
      }
    );
  });
}

// ========================================
// START EVIDENCE SYSTEM
// ========================================

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    thfEvidenceInit
  );
} else {
  thfEvidenceInit();
}

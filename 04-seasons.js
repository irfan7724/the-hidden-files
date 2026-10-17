
/* ========================================
   THE HIDDEN FILES
   04 - SEASON SELECTION
======================================== */

"use strict";

// ========================================
// REGISTER NEW SCREENS
// ========================================

// Reuse the existing navigation system
// without changing 02-accounts.js.

screenIds.push(
  "seasons-screen",
  "far-overview-screen"
);

// ========================================
// SEASON 01 CASE DATA
// ========================================

const FAR_CASE_PREVIEWS = [
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

// ========================================
// SEASON TRANSLATIONS
// ========================================

const SEASON_TRANSLATIONS = {
  en: {
    archive: "CLASSIFIED ARCHIVE",
    selectTitle: "Select Your Season",
    selectDescription:
      "Each season holds a different mystery. Your detective identity remains the same.",
    farDescription:
      "Investigate suspicious financial statements and uncover the truth.",
    available: "AVAILABLE →",
    comingSoon: "COMING SOON",
    backHQ: "BACK TO HEADQUARTERS",
    farIntro:
      "Meridian Holdings Berhad is preparing its financial statements for the year ended 31 December 2025. But something does not add up.",
    cases: "INVESTIGATION CASES",
    previewNotice:
      "Story Mode and investigations will be activated in the next development steps.",
    backSeasons: "BACK TO SEASONS",
    selectSeasonButton: "SELECT SEASON",
    locked: "NOT YET AVAILABLE"
  },

  ms: {
    archive: "ARKIB SULIT",
    selectTitle: "Pilih Musim Penyiasatan",
    selectDescription:
      "Setiap musim mempunyai misteri yang berbeza. Identiti detektif anda kekal sama.",
    farDescription:
      "Siasat penyata kewangan yang mencurigakan dan bongkar kebenaran.",
    available: "TERSEDIA →",
    comingSoon: "AKAN DATANG",
    backHQ: "KEMBALI KE IBU PEJABAT",
    farIntro:
      "Meridian Holdings Berhad sedang menyediakan penyata kewangan bagi tahun berakhir 31 Disember 2025. Namun, terdapat sesuatu yang tidak kena.",
    cases: "KES PENYIASATAN",
    previewNotice:
      "Mod Cerita dan penyiasatan akan diaktifkan dalam langkah pembangunan seterusnya.",
    backSeasons: "KEMBALI KE PILIHAN MUSIM",
    selectSeasonButton: "PILIH MUSIM",
    locked: "BELUM TERSEDIA"
  }
};

// ========================================
// LANGUAGE HELPERS
// ========================================

function currentSeasonLanguage() {
  const profile = getActiveDetective();

  if (!profile) return "en";

  return getProfileLanguage(profile);
}

function translateSeasonScreens() {
  const language = currentSeasonLanguage();
  const t = SEASON_TRANSLATIONS[language];

  document.querySelectorAll(
    "[data-season-i18n]"
  ).forEach(element => {
    const key = element.dataset.seasonI18n;

    if (Object.prototype.hasOwnProperty.call(t, key)) {
      element.textContent = t[key];
    }
  });

  const selectButton = document.getElementById(
    "open-seasons-btn"
  );

  if (selectButton) {
    selectButton.textContent = t.selectSeasonButton;
  }
}

// ========================================
// CASE PREVIEW LIST
// ========================================

function renderCasePreviews() {
  const container = document.getElementById(
    "case-preview-list"
  );

  if (!container) return;

  container.replaceChildren();

  const language = currentSeasonLanguage();
  const t = SEASON_TRANSLATIONS[language];

  FAR_CASE_PREVIEWS.forEach((caseTitle, index) => {
    const card = document.createElement("div");
    card.className = "case-preview";

    const number = document.createElement("div");
    number.className = "case-preview-number";
    number.textContent = String(index + 1).padStart(
      2, "0"
    );

    const info = document.createElement("div");
    info.className = "case-preview-info";

    const title = document.createElement("div");
    title.className = "case-preview-title";
    title.textContent = caseTitle;

    const status = document.createElement("div");
    status.className = "case-preview-status";
    status.textContent = t.locked;

    info.append(title, status);
    card.append(number, info);
    container.appendChild(card);
  });
}

// ========================================
// NAVIGATION
// ========================================

function openSeasonSelection() {
  if (!getActiveDetective()) {
    showScreen("profile-screen");
    return;
  }

  translateSeasonScreens();
  showScreen("seasons-screen");
}

function openFarOverview() {
  if (!getActiveDetective()) {
    showScreen("profile-screen");
    return;
  }

  translateSeasonScreens();
  renderCasePreviews();

  showScreen("far-overview-screen");
}

function returnToSeasons() {
  translateSeasonScreens();
  showScreen("seasons-screen");
}

function returnToHeadquarters() {
  const profile = getActiveDetective();

  if (!profile) {
    showScreen("profile-screen");
    return;
  }

  applyProfilePreferences(profile);
  translateSeasonScreens();

  showScreen("hq-screen");
}

// ========================================
// INITIALISATION
// ========================================

function initialiseSeasons() {
  document.getElementById(
    "open-seasons-btn"
  ).addEventListener(
    "click",
    openSeasonSelection
  );

  document.getElementById(
    "season-1-btn"
  ).addEventListener(
    "click",
    openFarOverview
  );

  document.getElementById(
    "seasons-back-btn"
  ).addEventListener(
    "click",
    returnToHeadquarters
  );

  document.getElementById(
    "far-back-btn"
  ).addEventListener(
    "click",
    returnToSeasons
  );

  translateSeasonScreens();
  renderCasePreviews();

  // Apply translated Season button when
  // a player changes profile preferences.
  document.getElementById(
    "edit-profile-form"
  ).addEventListener("submit", () => {
    queueMicrotask(translateSeasonScreens);
  });
}

document.addEventListener(
  "DOMContentLoaded",
  initialiseSeasons
);


/* ========================================
   THE HIDDEN FILES
   03 - PROFILE SETTINGS & AVATARS
======================================== */

"use strict";

const DETECTIVE_AVATARS = [
  { id: "detective", icon: "🕵️", name: "Detective" },
  { id: "agent", icon: "👩‍💼", name: "Agent" },
  { id: "analyst", icon: "👨‍💻", name: "Analyst" },
  { id: "inspector", icon: "👩‍🔬", name: "Inspector" },
  { id: "expert", icon: "🧑‍💼", name: "Expert" },
  { id: "investigator", icon: "👨‍⚖️", name: "Investigator" }
];

let selectedAvatar = "detective";

const PROFILE_TRANSLATIONS = {
  en: {
    settingsEyebrow: "DETECTIVE SETTINGS",
    settingsTitle: "Profile & Settings",
    settingsDescription:
      "Personalise your detective identity. Your investigation progress will be preserved.",
    nameLabel: "Detective Name",
    avatarLabel: "Choose Your Avatar",
    preferencesLabel: "Preferences",
    languageLabel: "Language",
    soundLabel: "Sound Effects",
    motionLabel: "Reduced Motion",
    saveButton: "SAVE CHANGES",
    backButton: "BACK TO HEADQUARTERS",
    editButton: "EDIT DETECTIVE PROFILE",
    switchButton: "LOGOUT / SWITCH DETECTIVE",
    greeting: "Welcome, Detective ",
    hqDescription: "Your investigation headquarters is ready.",
    seasonDescription:
      "The Meridian Files — 10 investigations are waiting to be uncovered.",
    comingLabel: "Investigation system coming next",
    errorName: "Name must contain 2 to 24 characters.",
    errorSave: "Unable to save profile changes.",
    musicTitle: "🎵 Background Music & Volume",
    musicToggle: "Background Music",
    musicVolume: "Music Volume",
    sectionTitles: [
      "🕵️ DETECTIVE IDENTITY",
      "🌐 LANGUAGE",
      "🔊 SOUND & MUSIC",
      "⚙️ ACCESSIBILITY",
      "📊 DETECTIVE STATISTICS",
      "🔐 ACCOUNT"
    ]
  },

  ms: {
    settingsEyebrow: "TETAPAN DETEKTIF",
    settingsTitle: "Profil & Tetapan",
    settingsDescription:
      "Sesuaikan identiti detektif anda. Kemajuan penyiasatan anda akan dikekalkan.",
    nameLabel: "Nama Detektif",
    avatarLabel: "Pilih Avatar Anda",
    preferencesLabel: "Tetapan",
    languageLabel: "Bahasa",
    soundLabel: "Kesan Bunyi",
    motionLabel: "Kurangkan Animasi",
    saveButton: "SIMPAN PERUBAHAN",
    backButton: "KEMBALI KE IBU PEJABAT",
    editButton: "EDIT PROFIL DETEKTIF",
    switchButton: "LOG KELUAR / TUKAR DETEKTIF",
    greeting: "Selamat kembali, Detektif ",
    hqDescription: "Ibu pejabat penyiasatan anda sudah bersedia.",
    seasonDescription:
      "The Meridian Files — 10 kes penyiasatan menanti untuk dibongkar.",
    comingLabel: "Sistem penyiasatan akan datang",
    errorName: "Nama mesti mengandungi 2 hingga 24 aksara.",
    errorSave: "Perubahan profil tidak dapat disimpan.",
    musicTitle: "🎵 Muzik Latar & Kelantangan",
    musicToggle: "Muzik Latar",
    musicVolume: "Kelantangan Muzik",
    sectionTitles: [
      "🕵️ IDENTITI DETEKTIF",
      "🌐 BAHASA",
      "🔊 BUNYI & MUZIK",
      "⚙️ KEBOLEHCAPAIAN",
      "📊 STATISTIK DETEKTIF",
      "🔐 AKAUN"
    ]
  }
};

/* ========================================
   PROFILE HELPERS
======================================== */

function getActiveDetective() {
  return profiles.find(
    profile => profile.id === activeProfileId
  ) || null;
}

function getProfileLanguage(profile) {
  return profile?.settings?.language === "ms"
    ? "ms"
    : "en";
}

function getAvatarIcon(avatarId) {
  return DETECTIVE_AVATARS.find(
    item => item.id === avatarId
  )?.icon || "🕵️";
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

/* ========================================
   LANGUAGE SETTINGS
======================================== */

function applySettingsTranslations(language) {
  const t = PROFILE_TRANSLATIONS[
    language === "ms" ? "ms" : "en"
  ];

  const ids = {
    "settings-eyebrow": "settingsEyebrow",
    "settings-title": "settingsTitle",
    "settings-description": "settingsDescription",
    "settings-name-label": "nameLabel",
    "settings-avatar-label": "avatarLabel",
    "settings-preferences-label": "preferencesLabel",
    "settings-language-label": "languageLabel",
    "settings-sound-label": "soundLabel",
    "settings-motion-label": "motionLabel",
    "save-profile-btn": "saveButton",
    "cancel-profile-btn": "backButton",
    "edit-profile-btn": "editButton",
    "switch-profile-btn": "switchButton",
    "settings-logout-btn": "switchButton",
    "settings-music-title": "musicTitle",
    "settings-music-label": "musicToggle",
    "settings-volume-label": "musicVolume"
  };

  Object.entries(ids).forEach(([id, key]) => {
    setText(id, t[key]);
  });

  document.querySelectorAll(
    "#edit-profile-screen .settings-section-title"
  ).forEach((element, index) => {
    if (t.sectionTitles[index]) {
      element.textContent = t.sectionTitles[index];
    }
  });

  updateMusicVolumeLabel();
  
// DELETE PROFILE BUTTON TRANSLATION

const deleteButton = document.getElementById(
  "delete-profile-btn"
);

if (deleteButton) {

  deleteButton.textContent =
    language === "ms"
      ? "PADAM PROFIL DETEKTIF"
      : "DELETE DETECTIVE PROFILE";

}

}

function updateMusicVolumeLabel() {
  const slider = document.getElementById(
    "profile-music-volume"
  );

  const language = document.getElementById(
    "profile-language"
  )?.value === "ms" ? "ms" : "en";

  if (slider) {
    setText(
      "profile-music-volume-value",
      slider.value + "%"
    );
  }

  const checkbox = document.getElementById(
    "profile-music"
  );

  if (slider && checkbox) {
    slider.disabled = !checkbox.checked;
  }

}

/* ========================================
   APPLY PROFILE PREFERENCES
======================================== */

function applyProfilePreferences(profile) {
  if (!profile) return;

  const language = getProfileLanguage(profile);
  const t = PROFILE_TRANSLATIONS[language];

  document.documentElement.lang = language;

  document.body.classList.toggle(
    "reduced-motion",
    profile.settings?.reducedMotion === true
  );

  applySettingsTranslations(language);

  setText(
    "hq-greeting",
    t.greeting + profile.name
  );

  setText(
    "hq-avatar",
    getAvatarIcon(profile.avatar)
  );

  const avatar = document.getElementById("hq-avatar");

  if (avatar) {
    avatar.setAttribute(
      "aria-label",
      language === "ms"
        ? "Buka Profil dan Tetapan Detektif"
        : "Open Detective Profile and Settings"
    );
  }

  const description = document.querySelector(
    "#hq-screen > .page-panel > .page-description"
  );

  if (description) {
    description.textContent = t.hqDescription;
  }

  const season = document.querySelector(
    ".hq-season-card p"
  );

  if (season) {
    season.textContent = t.seasonDescription;
  }

  const coming = document.querySelector(
    ".coming-label"
  );

  if (coming) {
    coming.textContent = t.comingLabel;
  }
}

/* ========================================
   AVATAR SELECTION
======================================== */

function renderAvatarOptions() {
  const container = document.getElementById(
    "avatar-options"
  );

  if (!container) return;

  container.replaceChildren();

  DETECTIVE_AVATARS.forEach(avatar => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "avatar-option";

    const selected = selectedAvatar === avatar.id;

    button.classList.toggle("selected", selected);

    button.setAttribute(
      "aria-pressed",
      String(selected)
    );

    const icon = document.createElement("span");
    icon.className = "avatar-icon";
    icon.textContent = avatar.icon;

    const label = document.createElement("span");
    label.textContent = avatar.name;

    button.append(icon, label);

    button.addEventListener("click", () => {
      selectedAvatar = avatar.id;
      renderAvatarOptions();
    });

    container.appendChild(button);
  });
}

/* ========================================
   DETECTIVE STATISTICS
======================================== */

function renderDetectiveStatistics() {
  if (
    typeof thfRenderDetectiveStatistics === "function"
  ) {
    thfRenderDetectiveStatistics();
  }
}

/* ========================================
   AUDIO HELPERS
======================================== */

function thfRestoreAudioPreview() {
  if (
    typeof thfApplyAudioSettings === "function"
  ) {
    const settings = thfApplyAudioSettings();

    if (
      settings.musicEnabled &&
      typeof thfStartBackgroundMusic === "function"
    ) {
      thfStartBackgroundMusic();
    }
  }
}

/* ========================================
   OPEN PROFILE SETTINGS
======================================== */

function openProfileSettings() {
  const profile = getActiveDetective();
  if (!profile) return;

  selectedAvatar = profile.avatar || "detective";

  document.getElementById(
    "edit-detective-name"
  ).value = profile.name;

  document.getElementById(
    "profile-language"
  ).value = getProfileLanguage(profile);

  document.getElementById(
    "profile-sound"
  ).checked = profile.settings?.sound === true;

  document.getElementById(
    "profile-motion"
  ).checked = profile.settings?.reducedMotion === true;

  const error = document.getElementById(
    "edit-profile-error"
  );

  error.hidden = true;
  error.textContent = "";

  const music = document.getElementById(
    "profile-music"
  );

  const volume = document.getElementById(
    "profile-music-volume"
  );

  if (music) {
    music.checked =
      profile.settings?.musicEnabled !== false;
  }

  if (volume) {
    const savedVolume =
      Number.isFinite(profile.settings?.musicVolume)
        ? profile.settings.musicVolume
        : 0.3;

    volume.value = Math.round(
      savedVolume * 100
    );
  }

  applyProfilePreferences(profile);
  renderAvatarOptions();
  updateMusicVolumeLabel();
  renderDetectiveStatistics();

  showScreen("edit-profile-screen");
}

/* ========================================
   SAVE PROFILE SETTINGS
======================================== */

function saveProfileSettings(event) {
  event.preventDefault();

  const profile = getActiveDetective();
  if (!profile) return;

  const name = document.getElementById(
    "edit-detective-name"
  ).value.trim();

  const language = document.getElementById(
    "profile-language"
  ).value === "ms" ? "ms" : "en";

  const error = document.getElementById(
    "edit-profile-error"
  );

  error.hidden = true;
  error.textContent = "";

  if (name.length < 2 || name.length > 24) {
    error.textContent =
      PROFILE_TRANSLATIONS[language].errorName;

    error.hidden = false;
    return;
  }

  const old = {
    name: profile.name,
    avatar: profile.avatar,
    settings: profile.settings
  };

  profile.name = name;
  profile.avatar = selectedAvatar;

  profile.settings = {
    ...profile.settings,

    language: language,

    sound: document.getElementById(
      "profile-sound"
    ).checked,

    reducedMotion: document.getElementById(
      "profile-motion"
    ).checked,

    musicEnabled: document.getElementById(
      "profile-music"
    )?.checked ?? true,

    musicVolume: Number(
      document.getElementById(
        "profile-music-volume"
      )?.value ?? 30
    ) / 100
  };

  if (!saveProfiles()) {
    profile.name = old.name;
    profile.avatar = old.avatar;
    profile.settings = old.settings;

    error.textContent =
      PROFILE_TRANSLATIONS[language].errorSave;

    error.hidden = false;

    thfRestoreAudioPreview();
    return;
  }

  applyProfilePreferences(profile);
  thfRestoreAudioPreview();

  if (
    typeof thfRefreshAll === "function"
  ) {
    thfRefreshAll();
  }

  showScreen("hq-screen");
}

/* ========================================
   INITIALISE SETTINGS
======================================== */

function initialiseProfileSettings() {

  document.getElementById(
    "edit-profile-btn"
  )?.addEventListener(
    "click",
    openProfileSettings
  );

  document.getElementById(
    "edit-profile-form"
  )?.addEventListener(
    "submit",
    saveProfileSettings
  );

  document.getElementById(
    "cancel-profile-btn"
  )?.addEventListener("click", () => {
    const profile = getActiveDetective();

    if (profile) {
      applyProfilePreferences(profile);
    }

    thfRestoreAudioPreview();
    showScreen("hq-screen");
  });

  document.getElementById(
    "profile-language"
  )?.addEventListener("change", event => {
    applySettingsTranslations(event.target.value);
  });

  const updatePreview = () => {
    const enabled = document.getElementById(
      "profile-music"
    )?.checked ?? true;

    const volume = Number(
      document.getElementById(
        "profile-music-volume"
      )?.value ?? 30
    ) / 100;

    updateMusicVolumeLabel();

    if (
      typeof thfSetMusicPreview === "function"
    ) {
      thfSetMusicPreview(enabled, volume);
    }
  };

  document.getElementById(
    "profile-music"
  )?.addEventListener("change", updatePreview);

  document.getElementById(
    "profile-music-volume"
  )?.addEventListener("input", updatePreview);

  const profile = getActiveDetective();

  if (profile) {
    applyProfilePreferences(profile);
  }
}

/* ========================================
   START PROFILE SYSTEM
======================================== */

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initialiseProfileSettings
  );
} else {
  initialiseProfileSettings();
}

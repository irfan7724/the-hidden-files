
/* ========================================
   THE HIDDEN FILES
   02 - DETECTIVE PROFILE SYSTEM
======================================== */

"use strict";

const PROFILE_STORAGE_KEY = "thf_profiles_v1";
const ACTIVE_PROFILE_KEY = "thf_active_profile_v1";

let profiles = [];
let activeProfileId = null;

// ----------------------------------------
// CUSTOM POPUP
// ----------------------------------------

function showDetectivePopup(options = {}) {

  const existing = document.getElementById(
    "thf-profile-popup"
  );

  if (existing) {
    existing.remove();
  }

  const overlay = document.createElement("div");
  overlay.id = "thf-profile-popup";

  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.8);
  `;

  const modal = document.createElement("div");

  modal.style.cssText = `
    width: 100%;
    max-width: 430px;
    padding: 30px 25px;
    box-sizing: border-box;
    text-align: center;
    background: linear-gradient(
      145deg,
      #15263d,
      #0b1525
    );
    border: 1px solid #d9b66f;
    border-radius: 18px;
    color: #f3e7d0;
    box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  `;

  const icon = document.createElement("div");
  icon.textContent = options.icon || "⚠️";
  icon.style.fontSize = "42px";
  icon.style.marginBottom = "12px";

  const title = document.createElement("h2");
  title.textContent = options.title || "CONFIRM ACTION";

  title.style.cssText = `
    color: #e3be75;
    font-size: 22px;
    margin: 0 0 16px;
    letter-spacing: 1px;
  `;

  const message = document.createElement("p");
  message.textContent = options.message || "";

  message.style.cssText = `
    white-space: pre-line;
    line-height: 1.7;
    font-size: 14px;
    margin: 0 0 25px;
    color: #e6e0d5;
  `;

  const actions = document.createElement("div");

  actions.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  `;

  function makeButton(label, background) {

    const button = document.createElement("button");

    button.type = "button";
    button.textContent = label;

    button.style.cssText = `
      min-width: 120px;
      padding: 12px 20px;
      border: 1px solid #d9b66f;
      border-radius: 9px;
      background: ${background};
      color: #ffffff;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
    `;

    return button;
  }

  const cancelButton = makeButton(
    options.cancelText || "CANCEL",
    "#29364a"
  );

  const confirmButton = makeButton(
    options.confirmText || "DELETE",
    "#973d3d"
  );

  function closePopup() {
    overlay.remove();
  }

  cancelButton.addEventListener("click", closePopup);

  confirmButton.addEventListener("click", function () {

    closePopup();

    if (typeof options.onConfirm === "function") {
      options.onConfirm();
    }

  });

  actions.append(cancelButton, confirmButton);

  modal.append(
    icon,
    title,
    message,
    actions
  );

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  cancelButton.focus();
}

// ----------------------------------------
// SAFE LOCAL STORAGE
// ----------------------------------------

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn("Storage unavailable:", error);
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error("Could not save data:", error);

    alert(
      "Your browser could not save this profile. " +
      "Please enable site storage and try again."
    );

    return false;
  }
}

function loadProfiles() {
  try {
    const saved = JSON.parse(
      readStorage(PROFILE_STORAGE_KEY) || "[]"
    );

    if (!Array.isArray(saved)) return [];

    return saved.filter(profile =>
      profile &&
      typeof profile.id === "string" &&
      typeof profile.name === "string"
    );
  } catch (error) {
    console.error("Profile data error:", error);
    return [];
  }
}

function saveProfiles() {
  return writeStorage(
    PROFILE_STORAGE_KEY,
    JSON.stringify(profiles)
  );
}

// ----------------------------------------
// SCREEN NAVIGATION
// ----------------------------------------

const screenIds = [
  "welcome-screen",
  "profile-screen",
  "created-screen",
  "hq-screen",
  "edit-profile-screen"
];

function showScreen(screenId) {
  screenIds.forEach(id => {

    const screen = document.getElementById(id);

    if (screen) {
      screen.classList.toggle(
        "hidden",
        id !== screenId
      );
    }

  });

  window.scrollTo(0, 0);
}

// ----------------------------------------
// PROFILE DISPLAY
// ----------------------------------------

function renderProfileList() {

  const container = document.getElementById(
    "profile-list"
  );

  container.replaceChildren();

  if (profiles.length === 0) {

    const empty = document.createElement("p");
    empty.className = "empty-profiles";

    empty.textContent =
      "No detective profiles yet. Create one below.";

    container.appendChild(empty);
    return;
  }

  profiles.forEach(profile => {

    const button = document.createElement("button");

    button.type = "button";
    button.className = "profile-card";

    const avatar = document.createElement("span");
    avatar.className = "profile-avatar";

    avatar.textContent =
      typeof getAvatarIcon === "function"
        ? getAvatarIcon(profile.avatar)
        : "🕵️";

    const info = document.createElement("span");

    const name = document.createElement("span");
    name.className = "profile-card-name";
    name.textContent = profile.name;

    const hint = document.createElement("p");
    hint.className = "profile-card-hint";
    hint.textContent = "Tap to continue investigation";

    info.append(name, hint);
    button.append(avatar, info);

    button.addEventListener("click", () => {
      loginProfile(profile.id);
    });

    container.appendChild(button);
  });
}

// ----------------------------------------
// CREATE PROFILE
// ----------------------------------------

function generateProfileId() {

  if (
    window.crypto &&
    typeof window.crypto.randomUUID === "function"
  ) {
    return window.crypto.randomUUID();
  }

  return (
    "detective-" +
    Date.now() +
    "-" +
    Math.random().toString(36).slice(2)
  );
}

function createProfile(event) {

  event.preventDefault();

  const input = document.getElementById(
    "detective-name"
  );

  const errorText = document.getElementById(
    "profile-error"
  );

  const name = input.value.trim();

  errorText.hidden = true;
  errorText.textContent = "";

  if (name.length < 2 || name.length > 24) {

    errorText.textContent =
      "Please enter a name between 2 and 24 characters.";

    errorText.hidden = false;
    return;
  }

  const newProfile = {
    id: generateProfileId(),
    name: name,
    avatar: "detective",
    createdAt: new Date().toISOString(),
    seasons: {}
  };

  profiles.push(newProfile);

  if (!saveProfiles()) {
    profiles.pop();
    return;
  }

  activeProfileId = null;

  document.getElementById(
    "created-message"
  ).textContent =
    "Detective " + name +
    ", your profile is ready. " +
    "Your investigation begins now.";

  document.getElementById(
    "enter-hq-btn"
  ).onclick = () => {
    loginProfile(newProfile.id);
  };

  input.value = "";

  showScreen("created-screen");
}

// ----------------------------------------
// LOGIN / LOGOUT
// ----------------------------------------

function loginProfile(profileId) {

  const profile = profiles.find(
    item => item.id === profileId
  );

  if (!profile) return;

  if (!writeStorage(
    ACTIVE_PROFILE_KEY,
    profile.id
  )) {
    return;
  }

  activeProfileId = profile.id;

  document.getElementById(
    "hq-greeting"
  ).textContent =
    "Welcome, Detective " + profile.name;

  if (typeof applyProfilePreferences === "function") {
    applyProfilePreferences(profile);
  }

  showScreen("hq-screen");
}

function logoutProfile() {

  try {
    localStorage.removeItem(ACTIVE_PROFILE_KEY);
  } catch (error) {

    console.error("Logout storage error:", error);

    alert(
      "Unable to log out. Please check browser storage."
    );

    return;
  }

  activeProfileId = null;

  renderProfileList();
  showScreen("profile-screen");
}

// ----------------------------------------
// INITIALISATION
// ----------------------------------------

function initialiseAccounts() {

  profiles = loadProfiles();

  document.getElementById(
    "start-btn"
  ).addEventListener("click", () => {
    renderProfileList();
    showScreen("profile-screen");
  });

  document.getElementById(
    "profile-back-btn"
  ).addEventListener("click", () => {
    showScreen("welcome-screen");
  });

  document.getElementById(
    "create-profile-form"
  ).addEventListener("submit", createProfile);

  document.getElementById(
    "switch-profile-btn"
  ).addEventListener("click", logoutProfile);

  const savedActiveId = readStorage(
    ACTIVE_PROFILE_KEY
  );

  const existingProfile = profiles.find(
    item => item.id === savedActiveId
  );

  if (existingProfile) {
    loginProfile(existingProfile.id);
  } else {
    showScreen("welcome-screen");
  }
}

document.addEventListener(
  "DOMContentLoaded",
  initialiseAccounts
);

// ----------------------------------------
// DELETE DETECTIVE PROFILE
// ----------------------------------------

function deleteDetectiveProfile() {

  const profile = profiles.find(
    item => item.id === activeProfileId
  );

  if (!profile) return;

  const language =
    ["ms", "bm", "malay"].includes(
      String(
        typeof getProfileLanguage === "function"
          ? getProfileLanguage(profile)
          : profile.settings?.language || "en"
      ).toLowerCase()
    )
      ? "ms"
      : "en";

  const message = language === "ms"
    ? "Adakah anda pasti mahu memadam profil \"" +
      profile.name + "\"?\n\n" +
      "Semua kemajuan penyiasatan profil ini " +
      "akan dipadam secara kekal.\n\n" +
      "Tindakan ini tidak boleh dibatalkan."
    : "Are you sure you want to delete \"" +
      profile.name + "\"?\n\n" +
      "All investigation progress for this " +
      "detective will be permanently deleted.\n\n" +
      "This action cannot be undone.";

  showDetectivePopup({

    icon: "🗑️",

    title: language === "ms"
      ? "PADAM PROFIL?"
      : "DELETE PROFILE?",

    message: message,

    cancelText: language === "ms"
      ? "BATAL"
      : "CANCEL",

    confirmText: language === "ms"
      ? "PADAM"
      : "DELETE",

    onConfirm: function () {

      const profileId = profile.id;

      const previousProfiles = profiles;

      // Keep all other detective profiles.
      profiles = profiles.filter(
        item => item.id !== profileId
      );

      if (!saveProfiles()) {
        profiles = previousProfiles;
        return;
      }

      // Delete only this detective's saved data.
      try {

        const keysToDelete = [];

        for (let i = 0; i < localStorage.length; i++) {

          const key = localStorage.key(i);

          if (
            key &&
            key.startsWith("thf_") &&
            key.endsWith("_" + profileId)
          ) {
            keysToDelete.push(key);
          }
        }

        keysToDelete.forEach(key => {
          localStorage.removeItem(key);
        });

        localStorage.removeItem(
          ACTIVE_PROFILE_KEY
        );

      } catch (error) {

        console.error(
          "Profile cleanup error:",
          error
        );

      }

      activeProfileId = null;

      renderProfileList();
      showScreen("profile-screen");
    }

  });
}

// ----------------------------------------
// DELETE PROFILE BUTTON
// ----------------------------------------

function initialiseDeleteProfile() {

  const button = document.getElementById(
    "delete-profile-btn"
  );

  if (!button) return;

  button.addEventListener(
    "click",
    deleteDetectiveProfile
  );
}

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initialiseDeleteProfile
  );

} else {

  initialiseDeleteProfile();

}

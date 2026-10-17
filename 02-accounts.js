
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

  // New profile is saved, but does not
  // automatically enter HQ.
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
    alert("Unable to log out. Please check browser storage.");
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

/* ========================================
   DELETE DETECTIVE PROFILE
======================================== */

function deleteDetectiveProfile() {

  const profile = profiles.find(
    item => item.id === activeProfileId
  );

  if (!profile) return;

  const language =
    profile.settings?.language === "ms"
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

  const confirmed = window.confirm(message);

  if (!confirmed) return;

  const profileId = profile.id;

  // Keep other detective profiles.
  const previousProfiles = profiles;

  profiles = profiles.filter(
    item => item.id !== profileId
  );

  // Save the updated profile list.
  if (!saveProfiles()) {
    profiles = previousProfiles;
    return;
  }

  // Remove only progress belonging to this detective.
  try {

    const progressPrefix =
      "thf_progress_s1_v1_";

    localStorage.removeItem(
      progressPrefix + profileId
    );

    // Remove active login.
    localStorage.removeItem(
      ACTIVE_PROFILE_KEY
    );

  } catch (error) {

    console.error(
      "Profile cleanup error:",
      error
    );

  }

  // Stop using the deleted profile.
  activeProfileId = null;

  // Return to profile selection.
  renderProfileList();
  showScreen("profile-screen");

}

/* ========================================
   DELETE PROFILE BUTTON
======================================== */

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

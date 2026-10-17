
/* ========================================
   THE HIDDEN FILES
   23 - BACKGROUND AUDIO SYSTEM
======================================== */

"use strict";

/* ========================================
   01. BACKGROUND MUSIC
======================================== */

const thfBackgroundMusic = new Audio(
  "background-music.mp3"
);

thfBackgroundMusic.loop = true;
thfBackgroundMusic.preload = "auto";
thfBackgroundMusic.volume = 0.3;

/* ========================================
   02. GET SAVED AUDIO SETTINGS
======================================== */

function thfAudioSettings() {

  const profile =
    typeof getActiveDetective === "function"
      ? getActiveDetective()
      : null;

  const settings = profile?.settings || {};

  return {
    musicEnabled:
      settings.musicEnabled !== false,

    musicVolume:
      Number.isFinite(settings.musicVolume)
        ? Math.max(
            0,
            Math.min(1, settings.musicVolume)
          )
        : 0.3
  };
}

/* ========================================
   03. APPLY SAVED SETTINGS
======================================== */

function thfApplyAudioSettings() {

  const settings = thfAudioSettings();

  thfBackgroundMusic.volume =
    settings.musicVolume;

  if (!settings.musicEnabled) {
    thfBackgroundMusic.pause();
  }

  return settings;
}

/* ========================================
   04. PLAY BACKGROUND MUSIC
======================================== */

function thfStartBackgroundMusic() {

  const settings = thfApplyAudioSettings();

  if (!settings.musicEnabled) return;

  if (!thfBackgroundMusic.paused) return;

  thfBackgroundMusic.play().catch(() => {
    // Browser may require a user interaction.
  });
}

/* ========================================
   05. PAUSE MUSIC
======================================== */

function thfPauseBackgroundMusic() {

  thfBackgroundMusic.pause();

}

/* ========================================
   06. LIVE SETTINGS PREVIEW
======================================== */

function thfSetMusicPreview(enabled, volume) {

  thfBackgroundMusic.volume = Math.max(
    0,
    Math.min(1, volume)
  );

  if (enabled) {

    if (thfBackgroundMusic.paused) {
      thfBackgroundMusic.play().catch(() => {});
    }

  } else {

    thfBackgroundMusic.pause();

  }
}

/* ========================================
   07. START AUDIO AFTER INTERACTION
======================================== */

function thfInitAudio() {

  thfApplyAudioSettings();

  function firstInteraction() {

    thfStartBackgroundMusic();

    document.removeEventListener(
      "pointerdown",
      firstInteraction
    );

    document.removeEventListener(
      "keydown",
      firstInteraction
    );
  }

  document.addEventListener(
    "pointerdown",
    firstInteraction
  );

  document.addEventListener(
    "keydown",
    firstInteraction
  );
}

/* ========================================
   08. INITIALISE AUDIO
======================================== */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    thfInitAudio
  );

} else {

  thfInitAudio();

}

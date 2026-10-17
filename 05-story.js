
/* ========================================
   THE HIDDEN FILES
   05 - STORY MODE ENGINE
======================================== */

"use strict";

// Register screens with existing navigation.
screenIds.push(
  "story-screen",
  "story-complete-screen"
);

const STORY_SAVE_KEY = "thf_story_s1_v1";

const STORY_DIALOGUES = [
  {
    speaker: "SYSTEM",
    character: false,
    en: "31 December 2025.\nMeridian Holdings Berhad is preparing its year-end financial statements.",
    ms: "31 Disember 2025.\nMeridian Holdings Berhad sedang menyediakan penyata kewangan akhir tahunnya."
  },
  {
    speaker: "SYSTEM",
    character: false,
    en: "The board meeting is approaching. Everything looks perfect on paper. Perhaps a little too perfect.",
    ms: "Mesyuarat lembaga pengarah semakin hampir. Segalanya kelihatan sempurna di atas kertas. Mungkin terlalu sempurna."
  },
  {
    speaker: "UNKNOWN",
    character: false,
    en: "CONFIDENTIAL MESSAGE RECEIVED:\n'The profit looks perfect. Too perfect. Check the approvals, follow the money, and don't trust the final report.'",
    ms: "MESEJ SULIT DITERIMA:\n'Keuntungan nampak sempurna. Terlalu sempurna. Semak kelulusan, jejaki aliran wang dan jangan terus percaya laporan akhir.'"
  },
  {
    speaker: "SYSTEM",
    character: false,
    en: "The sender's identity is hidden. No supporting documents were attached.",
    ms: "Identiti pengirim disembunyikan. Tiada dokumen sokongan dilampirkan."
  },
  {
    speaker: "ALYA RAHMAN",
    character: true,
    en: "Detective, I'm Alya Rahman. I'll be supervising your investigation into Meridian's financial reporting.",
    ms: "Detektif, saya Alya Rahman. Saya akan menyelia penyiasatan awak terhadap pelaporan kewangan Meridian."
  },
  {
    speaker: "ALYA RAHMAN",
    character: true,
    en: "We've received an anonymous tip. But remember: an accusation is not evidence.",
    ms: "Kita menerima maklumat tanpa nama. Tetapi ingat: tuduhan bukanlah bukti."
  },
  {
    speaker: "ALYA RAHMAN",
    character: true,
    en: "Our job is to verify the accounting records, inspect original documents and understand what actually happened.",
    ms: "Tugas kita ialah mengesahkan rekod perakaunan, memeriksa dokumen asal dan memahami perkara yang benar-benar berlaku."
  },
  {
    speaker: "ALYA RAHMAN",
    character: true,
    en: "Meridian's draft profit before tax is RM500,000. That number is only a starting point, not a conclusion.",
    ms: "Keuntungan sebelum cukai dalam draf Meridian ialah RM500,000. Angka itu hanya titik permulaan, bukan kesimpulan."
  },
  {
    speaker: "ALYA RAHMAN",
    character: true,
    en: "Some transactions may be recorded in the wrong accounts. Others may belong to a different reporting period.",
    ms: "Sesetengah transaksi mungkin direkodkan dalam akaun yang salah. Ada juga yang mungkin tergolong dalam tempoh pelaporan berbeza."
  },
  {
    speaker: "ALYA RAHMAN",
    character: true,
    en: "You will investigate ten case files. Each one may reveal a different part of the financial picture.",
    ms: "Awak akan menyiasat sepuluh fail kes. Setiap satu mungkin mendedahkan bahagian berbeza dalam gambaran kewangan syarikat."
  },
  {
    speaker: "ALYA RAHMAN",
    character: true,
    en: "Be careful with assumptions. Suspicious approvals, unusual payments and accounting errors do not automatically prove fraud.",
    ms: "Berhati-hati dengan andaian. Kelulusan mencurigakan, pembayaran luar biasa dan kesilapan perakaunan tidak semestinya membuktikan penipuan."
  },
  {
    speaker: "ALYA RAHMAN",
    character: true,
    en: "Your first file is waiting: THE INVOICE TRAP.\nLet's find out what the records are hiding.",
    ms: "Fail pertama awak sedang menunggu: THE INVOICE TRAP.\nMari kita bongkar perkara yang tersembunyi dalam rekod tersebut."
  }
];

const STORY_UI = {
  en: {
    chapter: "PROLOGUE — THE ANONYMOUS TIP",
    start: "START STORY MODE",
    resume: "CONTINUE STORY",
    replay: "REPLAY PROLOGUE",
    exit: "EXIT",
    back: "BACK",
    history: "HISTORY",
    next: "NEXT →",
    finish: "FINISH BRIEFING →",
    close: "CLOSE",
    historyTitle: "Dialogue History",
    completeTitle: "The Investigation Begins",
    completeDescription:
      "The briefing is complete. Case 01 — The Invoice Trap is now unlocked. Return to Season Overview and open Case Files to begin your investigation.",
    returnButton: "RETURN TO SEASON OVERVIEW",
    exitConfirm:
      "Leave Story Mode? Your current position will be saved.",
    saveWarning:
      "Your browser could not save Story Mode progress. You can continue, but your position may be lost after refresh."
  },

  ms: {
    chapter: "PROLOG — MAKLUMAT TANPA NAMA",
    start: "MULAKAN MOD CERITA",
    resume: "SAMBUNG CERITA",
    replay: "ULANG PROLOG",
    exit: "KELUAR",
    back: "KEMBALI",
    history: "SEJARAH",
    next: "SETERUSNYA →",
    finish: "TAMATKAN TAKLIMAT →",
    close: "TUTUP",
    historyTitle: "Sejarah Dialog",
    completeTitle: "Penyiasatan Bermula",
    completeDescription:
      "Taklimat telah selesai. Case 01 — The Invoice Trap kini dibuka. Kembali ke Season Overview dan buka Fail Kes untuk memulakan penyiasatan.",
    returnButton: "KEMBALI KE PILIHAN KES",
    exitConfirm:
      "Keluar daripada Mod Cerita? Kedudukan semasa akan disimpan.",
    saveWarning:
      "Browser tidak dapat menyimpan kemajuan cerita. Awak masih boleh meneruskan, tetapi kedudukan mungkin hilang selepas refresh."
  }
};

let storyPosition = 0;
let storyCompleted = false;
let storyHistoryOpen = false;
let storyHistoryReturnFocus = null;

// ========================================
// PROFILE-SPECIFIC SAVE
// ========================================

function storyProfile() {
  return typeof getActiveDetective === "function"
    ? getActiveDetective()
    : null;
}

function storyLanguage() {
  const profile = storyProfile();

  const language =
    profile &&
    typeof getProfileLanguage === "function"
      ? getProfileLanguage(profile)
      : "en";

  return ["ms", "bm", "malay"].includes(
    String(language).toLowerCase()
  ) ? "ms" : "en";
}

function storySaveId() {
  const profile = storyProfile();

  return profile
    ? STORY_SAVE_KEY + "_" + profile.id
    : null;
}

function readStorySave() {
  const key = storySaveId();

  if (!key) {
    return { position: 0, completed: false };
  }

  try {
    const raw = localStorage.getItem(key);

    if (!raw) {
      return { position: 0, completed: false };
    }

    const saved = JSON.parse(raw);

    if (!saved || typeof saved !== "object") {
      throw new Error("Invalid story save");
    }

    const position = Number.isInteger(saved.position)
      ? Math.max(
          0,
          Math.min(
            STORY_DIALOGUES.length - 1,
            saved.position
          )
        )
      : 0;

    return {
      position,
      completed: saved.completed === true
    };

  } catch (error) {
    console.warn("Story save could not be read:", error);

    return { position: 0, completed: false };
  }
}

function saveStory() {
  const key = storySaveId();

  if (!key) return false;

  try {
    localStorage.setItem(
      key,
      JSON.stringify({
        position: storyPosition,
        completed: storyCompleted
      })
    );

    return true;

  } catch (error) {
    console.error("Story save failed:", error);
    return false;
  }
}

// ========================================
// STORY DISPLAY
// ========================================

function storySetText(id, text) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = text;
  }
}

function renderStory() {
  const dialogue = STORY_DIALOGUES[storyPosition];
  const lang = storyLanguage();
  const t = STORY_UI[lang];

  if (!dialogue) return;

  storySetText("story-chapter", t.chapter);
  storySetText("story-speaker", dialogue.speaker);
  storySetText("story-text", dialogue[lang]);

  storySetText(
    "story-counter",
    String(storyPosition + 1).padStart(2, "0") +
    " / " +
    STORY_DIALOGUES.length
  );

  storySetText("story-exit-btn", t.exit);
  storySetText("story-back-btn", t.back);
  storySetText("story-history-btn", t.history);

  storySetText(
    "story-next-btn",
    storyPosition === STORY_DIALOGUES.length - 1
      ? t.finish
      : t.next
  );

  storySetText("history-title", t.historyTitle);
  storySetText("story-close-history-btn", t.close);

  const backButton = document.getElementById(
    "story-back-btn"
  );

  if (backButton) {
    backButton.disabled = storyPosition === 0;
  }

  // Remove SKIP button completely.
  const skipButton = document.getElementById(
    "story-skip-btn"
  );

  if (skipButton) {
    skipButton.remove();
  }

  const character = document.getElementById(
    "story-character-image"
  );

  if (character) {
    if (dialogue.character) {
      character.style.display = "";
      character.src = "char-alya.png";
    } else {
      character.style.display = "none";
    }
  }
}

// ========================================
// START / RESUME / REPLAY
// ========================================

function openStory() {
  if (!storyProfile()) {
    showScreen("profile-screen");
    return;
  }

  const saved = readStorySave();

  storyPosition = saved.position;
  storyCompleted = saved.completed;

  // Replay without deleting completion status.
  if (storyCompleted) {
    storyPosition = 0;
  }

  closeStoryHistory();
  renderStory();

  showScreen("story-screen");
}

function renderStoryEntry() {
  const area = document.getElementById(
    "story-entry-area"
  );

  if (!area) return;

  area.replaceChildren();

  const t = STORY_UI[storyLanguage()];
  const saved = readStorySave();

  const button = document.createElement("button");

  button.type = "button";
  button.className = "primary-btn story-entry-btn";

  button.textContent = saved.completed
    ? t.replay
    : saved.position > 0
      ? t.resume
      : t.start;

  button.addEventListener("click", openStory);

  area.appendChild(button);
}

// ========================================
// NAVIGATION
// ========================================

function nextStory() {
  if (storyPosition < STORY_DIALOGUES.length - 1) {
    storyPosition++;

    saveStory();
    renderStory();
    return;
  }

  completeStory();
}

function previousStory() {
  if (storyPosition <= 0) return;

  storyPosition--;

  saveStory();
  renderStory();
}

function exitStory() {
  const t = STORY_UI[storyLanguage()];

  if (!window.confirm(t.exitConfirm)) {
    return;
  }

  saveStory();
  closeStoryHistory();
  renderStoryEntry();

  showScreen("far-overview-screen");
}

function completeStory() {
  storyCompleted = true;
  storyPosition = STORY_DIALOGUES.length - 1;

  if (!saveStory()) {
    alert(STORY_UI[storyLanguage()].saveWarning);
  }

  const t = STORY_UI[storyLanguage()];

  storySetText(
    "story-complete-title",
    t.completeTitle
  );

  storySetText(
    "story-complete-description",
    t.completeDescription
  );

  storySetText(
    "story-complete-back-btn",
    t.returnButton
  );

  closeStoryHistory();

  showScreen("story-complete-screen");
}

// ========================================
// DIALOGUE HISTORY
// ========================================

function openStoryHistory() {
  const list = document.getElementById(
    "story-history-list"
  );

  if (!list) return;

  list.replaceChildren();

  const lang = storyLanguage();

  STORY_DIALOGUES
    .slice(0, storyPosition + 1)
    .forEach(dialogue => {

      const item = document.createElement("div");
      item.className = "story-history-item";

      const speaker = document.createElement("strong");
      speaker.textContent = dialogue.speaker;

      const text = document.createElement("p");
      text.textContent = dialogue[lang];

      item.append(speaker, text);
      list.appendChild(item);
    });

  storyHistoryReturnFocus = document.activeElement;
  storyHistoryOpen = true;

  const panel = document.getElementById(
    "story-history-panel"
  );

  if (panel) {
    panel.classList.remove("hidden");
  }

  const closeButton = document.getElementById(
    "story-close-history-btn"
  );

  if (closeButton) {
    closeButton.focus();
  }
}

function closeStoryHistory() {
  const panel = document.getElementById(
    "story-history-panel"
  );

  if (panel) {
    panel.classList.add("hidden");
  }

  if (
    storyHistoryOpen &&
    storyHistoryReturnFocus &&
    typeof storyHistoryReturnFocus.focus === "function"
  ) {
    storyHistoryReturnFocus.focus();
  }

  storyHistoryOpen = false;
  storyHistoryReturnFocus = null;
}

// ========================================
// INITIALISE
// ========================================

function initialiseStory() {

  // Remove SKIP button permanently.
  const skipButton = document.getElementById(
    "story-skip-btn"
  );

  if (skipButton) {
    skipButton.remove();
  }

  document.getElementById(
    "story-next-btn"
  ).addEventListener("click", nextStory);

  document.getElementById(
    "story-back-btn"
  ).addEventListener("click", previousStory);

  document.getElementById(
    "story-exit-btn"
  ).addEventListener("click", exitStory);

  document.getElementById(
    "story-history-btn"
  ).addEventListener("click", openStoryHistory);

  document.getElementById(
    "story-close-history-btn"
  ).addEventListener("click", closeStoryHistory);

  document.getElementById(
    "story-complete-back-btn"
  ).addEventListener("click", () => {

    renderStoryEntry();

    showScreen("far-overview-screen");

    // Refresh navigation after completing Story Mode.
    if (typeof thfRefreshNavigation === "function") {
      thfRefreshNavigation();
    }
  });

  document.getElementById(
    "season-1-btn"
  ).addEventListener("click", renderStoryEntry);

  document.getElementById(
    "profile-language"
  ).addEventListener("change", () => {
    // Language is saved through SAVE CHANGES.
  });

  document.getElementById(
    "save-profile-btn"
  ).addEventListener("click", () => {
    queueMicrotask(renderStoryEntry);
  });

  document.addEventListener("keydown", event => {
    if (!storyHistoryOpen) return;

    if (event.key === "Escape") {
      closeStoryHistory();
    }

    if (event.key === "Tab") {
      event.preventDefault();

      const closeButton = document.getElementById(
        "story-close-history-btn"
      );

      if (closeButton) {
        closeButton.focus();
      }
    }
  });

  renderStoryEntry();
}

document.addEventListener(
  "DOMContentLoaded",
  initialiseStory
);

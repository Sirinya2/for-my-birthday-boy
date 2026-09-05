/* =========================================================
   MY SUPERHERO - INTERACTIVE MISSION & STORY SCRIPT ENGINE
   Full Engine for Himanshu's Cinematic Birthday Surprise
   ========================================================= */

// Global State
let soundEnabled = true;
let bgmPlaying = false;
let audioCtx = null;
let bgmInterval = null;
let currentPageId = 'page1';

// Mission & Quiz Tracking State
let mm1CurrentIndex = 0;
let mm1Answers = [];
let kittenHeartFillPercent = 0;
let currentCipherInput = "";
let quickFireAnswers = [];
let currentQfIndex = 0;
let rescuedTreasureKittens = new Set();
let classifiedCluesFound = new Set();
let finalTrialIndex = 0;
let isVoiceNotePlaying = false;
let voiceNoteInterval = null;
let voiceNoteSeconds = 0;
let candlesBlown = false;

// ---------------------------------------------------------
// 1. PROCEDURAL WEB AUDIO SOUND ENGINE
// ---------------------------------------------------------
function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

const SoundFX = {
  whoosh() {
    if (!soundEnabled) return;
    initAudio();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch(e){}
  },

  pop() {
    if (!soundEnabled) return;
    initAudio();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, audioCtx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch(e){}
  },

  catAngry() {
    if (!soundEnabled) return;
    initAudio();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(650, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(950, audioCtx.currentTime + 0.1);
      osc.frequency.linearRampToValueAtTime(450, audioCtx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch(e){}
  },

  catMeow() {
    if (!soundEnabled) return;
    initAudio();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, audioCtx.currentTime + 0.15);
      osc.frequency.exponentialRampToValueAtTime(520, audioCtx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch(e){}
  },

  laser() {
    if (!soundEnabled) return;
    initAudio();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch(e){}
  },

  chimeSuccess() {
    if (!soundEnabled) return;
    initAudio();
    if (!audioCtx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.01, audioCtx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + idx * 0.08);
        osc.stop(audioCtx.currentTime + idx * 0.08 + 0.4);
      } catch(e){}
    });
  },

  explosion() {
    if (!soundEnabled) return;
    initAudio();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + 0.6);
      gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.6);
    } catch(e){}
  }
};

// Ambient Procedural BGM Synthesizer
function playProceduralTheme() {
  if (!bgmPlaying || !audioCtx) return;
  const chords = [
    [220.00, 261.63, 329.63], // Am
    [174.61, 220.00, 261.63], // F
    [261.63, 329.63, 392.00], // C
    [196.00, 246.94, 293.66]  // G
  ];
  let chordIdx = 0;
  
  if (bgmInterval) clearInterval(bgmInterval);
  
  const playChord = () => {
    if (!bgmPlaying || !audioCtx) return;
    const currentChord = chords[chordIdx % chords.length];
    chordIdx++;
    currentChord.forEach(freq => {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.03, audioCtx.currentTime + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.8);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 3.9);
      } catch(e){}
    });
  };

  playChord();
  bgmInterval = setInterval(playChord, 4000);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  document.getElementById('soundIcon').textContent = soundEnabled ? '🔊' : '🔇';
  if (soundEnabled) SoundFX.pop();
}

function toggleBGM() {
  initAudio();
  bgmPlaying = !bgmPlaying;
  const icon = document.getElementById('bgmIcon');
  if (bgmPlaying) {
    icon.textContent = '🎵';
    icon.style.filter = 'drop-shadow(0 0 8px var(--gold-accent))';
    playProceduralTheme();
  } else {
    icon.textContent = '🎶';
    icon.style.filter = 'none';
    if (bgmInterval) clearInterval(bgmInterval);
  }
}

// ---------------------------------------------------------
// 2. CANVAS PARTICLES & ATMOSPHERE
// ---------------------------------------------------------
const canvas = document.getElementById('superheroCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2.2 + 0.8;
    this.speedY = -(Math.random() * 0.4 + 0.1);
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.6 + 0.2;
    this.color = Math.random() > 0.4 ? '#ff3366' : '#ffd152';
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    if (this.y < 0) this.reset();
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 8;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 40; i++) {
  particles.push(new Particle());
}

function animateAtmosphere() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateAtmosphere);
}
animateAtmosphere();

// ---------------------------------------------------------
// 3. NAVIGATION & PAGE TRANSITION SYSTEM
// ---------------------------------------------------------
function switchPage(pageId, badgeText, callback) {
  SoundFX.whoosh();
  
  const current = document.getElementById(currentPageId);
  const next = document.getElementById(pageId);
  
  if (current) current.classList.remove('active');
  if (next) {
    next.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  currentPageId = pageId;
  
  if (badgeText) {
    document.getElementById('badgeText').textContent = badgeText;
  }
  
  // Update Tracker Dots
  document.querySelectorAll('.chapter-dot').forEach(dot => {
    if (dot.getAttribute('data-page') === pageId) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  if (callback) callback();
}

function showCinematicSplash(title, sub, callback) {
  const splash = document.getElementById('cinematicSplash');
  document.getElementById('splashBannerText').textContent = title || "MISSION UNLOCKED";
  document.getElementById('splashSubText').textContent = sub || "INITIALIZING NEXT LEVEL...";
  
  SoundFX.explosion();
  splash.classList.add('active');
  
  setTimeout(() => {
    splash.classList.remove('active');
    if (callback) callback();
  }, 1600);
}

// ---------------------------------------------------------
// 4. PAGE 01 & PAGE 02 INTERACTIONS
// ---------------------------------------------------------
document.getElementById('btnStartHero').addEventListener('click', () => {
  SoundFX.pop();
  switchPage('page2', 'BRIEFING TRANSMISSION');
});

// Page 02 YES -> Blushy Compliment Modal first, then Splash!
document.getElementById('btnPage2Yes').addEventListener('click', () => {
  SoundFX.pop();
  openModal('blushyComplimentModal');
});

document.getElementById('btnContinueToMissionUnlock').addEventListener('click', () => {
  closeModal('blushyComplimentModal');
  SoundFX.laser();
  showCinematicSplash("MISSION UNLOCKED 💥", "INITIALIZING AGENT IDENTITY ARCHIVE...", () => {
    switchPage('page3', 'MEMORY CHECK', () => {
      setTimeout(() => {
        openModal('memoryIntroModal');
      }, 400);
    });
  });
});

document.getElementById('btnPage2No').addEventListener('click', () => {
  SoundFX.catAngry();
  openModal('catCruelModal');
});

document.getElementById('btnCloseCatCruel').addEventListener('click', () => {
  SoundFX.pop();
  closeModal('catCruelModal');
});

// ---------------------------------------------------------
// 5. PAGE 03: MEMORY CHECK & FIRST QUESTION
// ---------------------------------------------------------
document.getElementById('btnMemoryIntroYes').addEventListener('click', () => {
  closeModal('memoryIntroModal');
  SoundFX.pop();
  openModal('cuteMemoryComplimentModal');
});

document.getElementById('btnStartMemoryQuestion').addEventListener('click', () => {
  SoundFX.pop();
  closeModal('cuteMemoryComplimentModal');
});

document.getElementById('btnMemoryIntroNo').addEventListener('click', () => {
  SoundFX.catAngry();
  closeModal('memoryIntroModal');
  openModal('goBackModal');
});

document.getElementById('btnCloseGoBack').addEventListener('click', () => {
  SoundFX.pop();
  closeModal('goBackModal');
});

// Instagram vs WhatsApp Selection
document.getElementById('btnOptInstagram').addEventListener('click', () => {
  SoundFX.catAngry();
  openModal('catExcuseMeModal');
});

document.getElementById('btnCloseExcuseMe').addEventListener('click', () => {
  SoundFX.pop();
  closeModal('catExcuseMeModal');
});

document.getElementById('btnOptWhatsapp').addEventListener('click', () => {
  SoundFX.chimeSuccess();
  const feedback = document.getElementById('memoryQuestionFeedback');
  feedback.innerHTML = `<span style="color: #4ade80;">yeahhh you remember 😭🖤</span>`;
  
  if (window.confetti) {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  }

  setTimeout(() => {
    showCinematicSplash("CHAPTER 01 UNLOCKED 🔓", "THE ORIGIN STORY...", () => {
      switchPage('chapter1', 'CHAPTER 01: ORIGIN');
    });
  }, 1200);
});

// ---------------------------------------------------------
// 6. CHAPTER 01 & MINI MISSION 01 (3 QUESTIONS & KITTEN AGENT)
// ---------------------------------------------------------
function openMiniMission01Modal() {
  SoundFX.pop();
  mm1CurrentIndex = 0;
  mm1Answers = [];
  kittenHeartFillPercent = 0;
  renderMiniMission01Question();
  openModal('miniMission01Modal');
}

function renderMiniMission01Question() {
  const qList = BIRTHDAY_CONFIG.chapter01.miniMission01.questions;
  const currentQ = qList[mm1CurrentIndex];
  const progressText = `0${mm1CurrentIndex + 1} / 0${qList.length}`;
  document.getElementById('mm1ProgressModal').textContent = progressText;

  const deck = document.getElementById('mm1QuizDeck');
  deck.innerHTML = `
    <div class="mm-question-card">
      <div class="mm-marathi">${currentQ.qMarathi}</div>
      <div class="mm-english">${currentQ.qEnglish}</div>
      <div class="mm-options-list">
        ${currentQ.options.map((opt, idx) => `
          <button class="mm-opt-btn" onclick="handleMiniMission01Choice(${idx})">
            ${opt.text}
          </button>
        `).join('')}
      </div>
    </div>
  `;
  document.getElementById('mm1Feedback').innerHTML = "";
}

function handleMiniMission01Choice(optIndex) {
  const qList = BIRTHDAY_CONFIG.chapter01.miniMission01.questions;
  const currentQ = qList[mm1CurrentIndex];
  const choice = currentQ.options[optIndex];

  // Q1 Check
  if (currentQ.id === 1) {
    if (choice.correct) {
      SoundFX.chimeSuccess();
      mm1Answers.push(true);
      document.getElementById('mm1Feedback').innerHTML = `<div style="color: #38bdf8;">${choice.feedback}</div>`;
      setTimeout(() => {
        mm1CurrentIndex++;
        renderMiniMission01Question();
      }, 1100);
    } else {
      SoundFX.catAngry();
      document.getElementById('customTeaseTitle').textContent = "Hawwww..badam kha tu bala 😾";
      document.getElementById('customTeaseBody').textContent = "How could you forget my kurti colour?! Try again Pookie!";
      openModal('customTeaseModal');
    }
    return;
  }

  // Q2 Check
  if (currentQ.id === 2) {
    if (choice.correct) {
      SoundFX.chimeSuccess();
      mm1Answers.push(true);
      document.getElementById('mm1Feedback').innerHTML = `<div style="color: #38bdf8;">${choice.feedback}</div>`;
      setTimeout(() => {
        mm1CurrentIndex++;
        renderMiniMission01Question();
      }, 1100);
    } else {
      SoundFX.catAngry();
      document.getElementById('customTeaseTitle').textContent = "omgg babyyy..!! 😾";
      document.getElementById('customTeaseBody').textContent = "Cruel girl?! You bad boy! Try again! 😜";
      openModal('customTeaseModal');
    }
    return;
  }

  // Q3 Check (Who proposed first)
  if (currentQ.id === 3) {
    SoundFX.pop();
    document.getElementById('mm1Feedback').innerHTML = `<div style="color: #f472b6;">${choice.feedback}</div>`;
    
    // After 2.5 seconds, kitten agent appears to help!
    setTimeout(() => {
      closeModal('miniMission01Modal');
      openModal('kittenHelperModal');
      SoundFX.catMeow();
    }, 1800);
  }
}

document.getElementById('btnCloseCustomTease').addEventListener('click', () => {
  SoundFX.pop();
  closeModal('customTeaseModal');
});

// Q3 Kitten Heart Fill
function fillKittenHeart() {
  if (kittenHeartFillPercent >= 100) return;
  SoundFX.pop();
  kittenHeartFillPercent += 35;
  if (kittenHeartFillPercent > 100) kittenHeartFillPercent = 100;

  document.getElementById('heartFillMeter').style.height = `${kittenHeartFillPercent}%`;

  if (kittenHeartFillPercent >= 100) {
    SoundFX.chimeSuccess();
    document.getElementById('heartTapHint').textContent = "💖 100% PINK LOVE FULL!";
    document.getElementById('kittenRevealResult').style.display = 'block';
  }
}

function showScoreProgressionSequence() {
  closeModal('kittenHelperModal');
  openModal('miniMission01Modal');
  
  const deck = document.getElementById('mm1QuizDeck');
  deck.innerHTML = `
    <div style="text-align: center; padding: 10px 0;">
      <div style="font-size: 1.2rem; color: #f43f5e; font-weight: 700; margin-bottom: 6px;">
        (02/03) but birthday boy la sad nahi kru shakat aaj mahnun...
      </div>
      <div style="background: #1e293b; border: 2px solid var(--gold-accent); border-radius: 14px; padding: 16px; margin: 12px 0;">
        <div style="font-family: var(--font-comic); font-size: 2rem; color: #4ade80;">SCORE: (03/03) 🏆</div>
        <p style="color: #ffd152; font-weight: 700; font-size: 1.1rem; margin-top: 4px;">
          "Awww Cutieee..You're besttttt..!"
        </p>
      </div>
      <p style="color: #38bdf8; font-size: 0.85rem; font-weight: 700; margin-bottom: 16px;">
        🎮 AGENT ALERT: Before Chapter 02 can open, you must unlock the encrypted security code in Puzzle 02!
      </p>
      <button class="comic-action-btn btn-yes" onclick="openPuzzle02FromMission()" style="margin: 0 auto; max-width: 280px;">
        <span class="btn-text">UNLOCK PUZZLE 02 🔒</span>
      </button>
    </div>
  `;
}

function openPuzzle02FromMission() {
  closeModal('miniMission01Modal');
  openPuzzle02Modal();
}

// ---------------------------------------------------------
// 7. PUZZLE 02 CIPHER VAULT
// ---------------------------------------------------------
function openPuzzle02Modal() {
  SoundFX.pop();
  currentCipherInput = "";
  updateCipherSlots();
  document.getElementById('puzzleFeedback').innerHTML = "";
  openModal('puzzle02Modal');
}

function pressCipherKey(char) {
  SoundFX.pop();
  if (currentCipherInput.length < 9) {
    currentCipherInput += char;
    updateCipherSlots();
  }
}

function clearCipher() {
  SoundFX.pop();
  currentCipherInput = "";
  updateCipherSlots();
  document.getElementById('puzzleFeedback').innerHTML = "";
}

function updateCipherSlots() {
  for (let i = 0; i < 9; i++) {
    const slot = document.getElementById(`slot${i}`);
    if (slot) {
      slot.textContent = currentCipherInput[i] || "_";
    }
  }
}

function submitCipher() {
  const target = BIRTHDAY_CONFIG.puzzle02.passcode; // POOKIE261
  const feedback = document.getElementById('puzzleFeedback');
  
  if (currentCipherInput.toUpperCase() === target) {
    SoundFX.chimeSuccess();
    feedback.innerHTML = `<span style="color: #38bdf8;">DECODING COMPLETE...</span>`;
    
    setTimeout(() => {
      feedback.innerHTML = `
        <div style="margin-top: 10px; animation: popIn 0.4s ease;">
          <p style="font-size: 1.1rem; color: #ffd152; font-weight: 700; margin-bottom: 4px;">
            "You found the clue..."
          </p>
          <p style="font-size: 0.95rem; color: #ff3366; font-style: italic; margin-bottom: 14px;">
            "...but that's not the surprise."
          </p>
          <button class="comic-action-btn btn-yes" onclick="unlockChapter02FromModal()" style="margin: 0 auto; max-width: 280px;">
            <span class="btn-text">ENTER CHAPTER 02 🔓</span>
          </button>
        </div>
      `;
    }, 1200);
  } else {
    SoundFX.catAngry();
    feedback.innerHTML = `<span style="color: #ff3366;">Incorrect Passcode! Hint: POOKIE261 🔑</span>`;
  }
}

function unlockChapter02FromModal() {
  closeModal('puzzle02Modal');
  showCinematicSplash("CHAPTER 02 UNLOCKED 🔓", "THE UNEXPECTED ALLY...", () => {
    switchPage('chapter2', 'CHAPTER 02: ALLY');
  });
}

// ---------------------------------------------------------
// 8. CHAPTER 02: EXCITEMENT SLIDER & CAT TREASURE HUNT
// ---------------------------------------------------------
function openExcitementModal() {
  SoundFX.pop();
  const slider = document.getElementById('excitementSliderModal');
  if (slider) {
    slider.value = 20;
    const disp = document.getElementById('sliderPctDisplayModal');
    if (disp) disp.textContent = "20% HYPE";
    const feedback = document.getElementById('sliderFeedbackModal');
    if (feedback) feedback.innerHTML = `<span style="color: #94a3b8;">Slide to 100% to unlock Activity 03!</span>`;
  }
  openModal('excitementModal');
}

function handleExcitementSlide(val) {
  SoundFX.pop();
  const dispModal = document.getElementById('sliderPctDisplayModal');
  if (dispModal) dispModal.textContent = `${val}% HYPE`;
  const dispPage = document.getElementById('sliderPctDisplay');
  if (dispPage) dispPage.textContent = `${val}% HYPE`;

  const feedbackModal = document.getElementById('sliderFeedbackModal');
  const feedbackPage = document.getElementById('sliderFeedback');
  
  if (parseInt(val) >= 100) {
    SoundFX.chimeSuccess();
    const successMsg = `<span style="color: #4ade80;">100% MAXIMUM HYPE REACHED! ⚡ INITIALIZING ACTIVITY 03...</span>`;
    if (feedbackModal) feedbackModal.innerHTML = successMsg;
    if (feedbackPage) feedbackPage.innerHTML = successMsg;

    setTimeout(() => {
      closeModal('excitementModal');
      openTreasureHuntModal();
    }, 1100);
  } else {
    const hintMsg = `<span style="color: #94a3b8;">Keep sliding to 100% to unlock Activity 03!</span>`;
    if (feedbackModal) feedbackModal.innerHTML = hintMsg;
    if (feedbackPage) feedbackPage.innerHTML = hintMsg;
  }
}

function openTreasureHuntModal() {
  SoundFX.laser();
  openModal('treasureHuntModal');
}

function rescueTreasureKitten(kittenId) {
  if (rescuedTreasureKittens.has(kittenId)) return;
  
  SoundFX.catMeow();
  rescuedTreasureKittens.add(kittenId);
  
  const card = document.getElementById(`huntKitten${kittenId}`);
  if (card) card.classList.add('rescued');
  const statusEl = document.getElementById(`hkStatus${kittenId}`);
  if (statusEl) statusEl.textContent = "Safe & Happy! 💖";
  const btnEl = document.getElementById(`hkBtn${kittenId}`);
  if (btnEl) btnEl.textContent = "Rescued ✅";
  
  const count = rescuedTreasureKittens.size;
  const scoreEl = document.getElementById('huntScoreText');
  if (scoreEl) scoreEl.textContent = `${count} / 3 KITTENS SAFE`;
  
  if (count === 3) {
    SoundFX.chimeSuccess();
    if (window.confetti) {
      confetti({ particleCount: 70, spread: 75, origin: { y: 0.5 } });
    }
    const winBox = document.getElementById('treasureWinBox');
    if (winBox) winBox.style.display = 'block';
  }
}

function unlockChapter03FromRescue() {
  closeModal('treasureHuntModal');
  showCinematicSplash("CHAPTER 03 UNLOCKED 🔓", "A HERO'S DIARY...", () => {
    switchPage('chapter3', 'CHAPTER 03: DIARY');
  });
}

// ---------------------------------------------------------
// 9. CHAPTER 03: DIARY & LOVABLE ATTACK
// ---------------------------------------------------------
function openSecretMessageModal() {
  SoundFX.pop();
  openModal('secretMessageModal');
}

function openLovableAttackModalFromSecret() {
  closeModal('secretMessageModal');
  SoundFX.pop();
  openModal('lovableAttackModal');
}

function openLovableAttackModal() {
  SoundFX.pop();
  openModal('lovableAttackModal');
}

function startRapidFireFromAttack() {
  closeModal('lovableAttackModal');
  openRapidFireModal();
}

// ---------------------------------------------------------
// 10. RAPID FIRE — NO THINKING (jaldi jaldi bataiye)
// ---------------------------------------------------------
function openRapidFireModal() {
  SoundFX.pop();
  currentQfIndex = 0;
  quickFireAnswers = [];
  renderQuickFireQuestion();
  document.getElementById('quickFireRecap').style.display = 'none';
  openModal('rapidFireModal');
}

function renderQuickFireQuestion() {
  const qList = BIRTHDAY_CONFIG.quickFire.questions;
  const currentQ = qList[currentQfIndex];
  const stage = document.getElementById('quickFireStage');
  
  stage.style.display = 'block';
  stage.innerHTML = `
    <div class="quickfire-card">
      <div class="qf-counter">QUESTION 0${currentQfIndex + 1} / 0${qList.length}</div>
      <div class="qf-question">${currentQ.q}</div>
      <div class="qf-options-grid">
        ${currentQ.options.map((opt, idx) => `
          <button class="qf-btn" onclick="handleQuickFireChoice(${idx})">
            ${opt.text}
          </button>
        `).join('')}
      </div>
      <div class="qf-reaction-banner" id="qfReactionBanner"></div>
    </div>
  `;
}

function handleQuickFireChoice(optIdx) {
  const qList = BIRTHDAY_CONFIG.quickFire.questions;
  const currentQ = qList[currentQfIndex];
  const choice = currentQ.options[optIdx];
  
  SoundFX.pop();
  quickFireAnswers.push({ q: currentQ.q, ans: choice.text, reaction: choice.reaction });
  
  const reactionBanner = document.getElementById('qfReactionBanner');
  reactionBanner.textContent = choice.reaction;
  
  setTimeout(() => {
    currentQfIndex++;
    if (currentQfIndex < qList.length) {
      renderQuickFireQuestion();
    } else {
      finishQuickFire();
    }
  }, 1400);
}

function finishQuickFire() {
  document.getElementById('quickFireStage').style.display = 'none';
  const recap = document.getElementById('quickFireRecap');
  recap.style.display = 'block';
  
  recap.innerHTML = `
    <div style="text-align: center; padding: 10px 0;">
      <h4 style="font-family: var(--font-comic); font-size: 1.6rem; color: #38bdf8; margin-bottom: 8px;">
        SCORECARD: (05 / 05) ⚡
      </h4>
      <p style="color: #ffd152; font-weight: 700; font-size: 0.95rem; margin-bottom: 14px;">
        Speed test passed with flying colors, Pookie! Tap below to open your special gift:
      </p>
      <button class="comic-action-btn btn-yes" onclick="openGiftBoxFromRecap()" style="margin: 0 auto; max-width: 280px;">
        <span class="btn-text">VIEW CUTE GIFT BOX 🎁</span>
      </button>
    </div>
  `;
}

function openGiftBoxFromRecap() {
  closeModal('rapidFireModal');
  SoundFX.pop();
  openModal('giftBoxModal');
}

function unlockChapter04FromGift() {
  closeModal('giftBoxModal');
  showCinematicSplash("CHAPTER 04 UNLOCKED 🔓", "CLASSIFIED DOSSIER...", () => {
    switchPage('chapter4', 'CHAPTER 04: DOSSIER');
  });
}

// ---------------------------------------------------------
// 11. CHAPTER 04: CLASSIFIED FILE & HUG CARD
// ---------------------------------------------------------
function findSecretClue(clueNum, btnElement) {
  if (classifiedCluesFound.has(clueNum)) return;
  
  SoundFX.pop();
  classifiedCluesFound.add(clueNum);
  
  btnElement.classList.add('found');
  
  const count = classifiedCluesFound.size;
  document.getElementById('dossierClueCounter').textContent = `${count} / 4 FOUND`;
  
  if (count === 4) {
    SoundFX.chimeSuccess();
    if (window.confetti) {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.5 } });
    }
    
    setTimeout(() => {
      document.getElementById('dossierAccessGranted').style.display = 'block';
      document.getElementById('dossierAccessGranted').scrollIntoView({ behavior: 'smooth' });
    }, 400);
  }
}

function openHugCardModal() {
  SoundFX.pop();
  openModal('hugCardModal');
}

function unlockChapter05FromHug() {
  closeModal('hugCardModal');
  showCinematicSplash("CHAPTER 05 UNLOCKED 🔓", "THE FINAL MISSION...", () => {
    switchPage('chapter5', 'CHAPTER 05: FINAL MISSION');
  });
}

// ---------------------------------------------------------
// 12. CHAPTER 05: THE FINAL MISSION
// ---------------------------------------------------------
function renderFinalTrial() {
  const stages = BIRTHDAY_CONFIG.chapter05.stages;
  const currentStage = stages[finalTrialIndex];
  
  document.getElementById('finalTrialStageLabel').textContent = `STAGE ${finalTrialIndex + 1} / ${stages.length}: ${currentStage.missionTitle.split(':')[0]}`;
  const pct = Math.round(((finalTrialIndex + 1) / stages.length) * 100);
  document.getElementById('finalTrialProgressFill').style.width = `${pct}%`;
  
  document.getElementById('trialTitle').textContent = currentStage.missionTitle;
  document.getElementById('trialDesc').textContent = currentStage.desc;
  
  const optionsGrid = document.getElementById('trialOptionsGrid');
  optionsGrid.innerHTML = currentStage.options.map((opt, idx) => `
    <button class="trial-opt-btn" onclick="handleFinalTrialChoice(${idx})">
      ${opt.text}
    </button>
  `).join('');
  
  document.getElementById('trialFeedback').innerHTML = "";
}

function handleFinalTrialChoice(optIdx) {
  const stages = BIRTHDAY_CONFIG.chapter05.stages;
  const currentStage = stages[finalTrialIndex];
  const choice = currentStage.options[optIdx];
  const feedback = document.getElementById('trialFeedback');
  
  if (choice.correct) {
    SoundFX.chimeSuccess();
    feedback.innerHTML = `<span style="color: #4ade80;">${choice.feedback}</span>`;
    
    setTimeout(() => {
      finalTrialIndex++;
      if (finalTrialIndex < stages.length) {
        renderFinalTrial();
      } else {
        document.getElementById('trialCardBox').style.display = 'none';
        document.getElementById('missionSuccessSummary').style.display = 'block';
        SoundFX.explosion();
        if (window.confetti) {
          confetti({ particleCount: 80, spread: 80, origin: { y: 0.5 } });
        }
      }
    }, 1200);
  } else {
    SoundFX.catAngry();
    feedback.innerHTML = `<span style="color: #ff3366;">${choice.feedback}</span>`;
  }
}

renderFinalTrial();

function openMissionCompletePopup() {
  SoundFX.pop();
  openModal('missionCompleteModal');
}

// ---------------------------------------------------------
// 13. THE FAKE ENDING & DISTANCE ROSE CARD
// ---------------------------------------------------------
function triggerFakeEnding() {
  closeModal('missionCompleteModal');
  SoundFX.laser();
  
  const screen = document.getElementById('fakeEndingScreen');
  screen.style.display = 'flex';
  screen.style.opacity = '1';
  
  // Line 2 reveal
  setTimeout(() => {
    document.getElementById('fakeEndingLine2').style.opacity = '1';
  }, 1800);
  
  // Line 3 reveal
  setTimeout(() => {
    document.getElementById('fakeEndingLine3').style.opacity = '1';
  }, 3200);
  
  // Fade out blackout and open Rose Card!
  setTimeout(() => {
    screen.style.opacity = '0';
    setTimeout(() => {
      screen.style.display = 'none';
      openModal('roseGreetingModal');
      SoundFX.chimeSuccess();
    }, 1000);
  }, 4800);
}

function proceedToFinalSecretChapter() {
  closeModal('roseGreetingModal');
  switchPage('finalChapter', 'THE LAST CHAPTER', () => {
    SoundFX.chimeSuccess();
    if (window.confetti) {
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.4 } });
    }
  });
}

// ---------------------------------------------------------
// 14. BIRTHDAY CAKE, CANDLE & FIRECRACKERS
// ---------------------------------------------------------
function blowBirthdayCandles() {
  if (candlesBlown) return;
  SoundFX.whoosh();
  candlesBlown = true;
  
  document.getElementById('flame1').classList.add('blown');
  document.getElementById('flame2').classList.add('blown');
  document.getElementById('flame3').classList.add('blown');
  
  document.getElementById('wishStatusBanner').innerHTML = `
    ✨ <span style="color: #4ade80;">Wishes sent to the stars! Happy Birthday, Himanshu! 🎂💖</span>
  `;
  
  // Firecracker explosion across screen
  SoundFX.explosion();
  if (window.confetti) {
    const end = Date.now() + 3500;
    const colors = ['#ff3366', '#ffd152', '#38bdf8', '#ffffff', '#ec4899'];
    (function blast() {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors: colors
      });
      if (Date.now() < end) {
        requestAnimationFrame(blast);
      }
    }());
  }
}

// Media Reveal Modal
function openMediaRevealModal() {
  SoundFX.pop();
  openModal('mediaRevealModal');
}

function toggleVoiceNote() {
  SoundFX.pop();
  const audio = document.getElementById('realVoiceAudio');
  const icon = document.getElementById('voicePlayIcon');
  const waveform = document.getElementById('voiceWaveform');
  const timer = document.getElementById('voiceTimer');
  
  if (audio) {
    if (audio.paused) {
      audio.play().then(() => {
        isVoiceNotePlaying = true;
        if (icon) icon.textContent = '⏸️';
        if (waveform) waveform.classList.add('playing');
      }).catch(e => {
        // Fallback simulation timer if browser autoplay/codec policy prevents immediate playback
        isVoiceNotePlaying = true;
        if (icon) icon.textContent = '⏸️';
        if (waveform) waveform.classList.add('playing');
        if (voiceNoteInterval) clearInterval(voiceNoteInterval);
        voiceNoteInterval = setInterval(() => {
          voiceNoteSeconds++;
          const mins = Math.floor(voiceNoteSeconds / 60);
          const secs = voiceNoteSeconds % 60;
          if (timer) timer.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs} / 0:45`;
          if (voiceNoteSeconds >= 45) {
            toggleVoiceNote();
          }
        }, 1000);
      });
    } else {
      audio.pause();
      isVoiceNotePlaying = false;
      if (icon) icon.textContent = '▶️';
      if (waveform) waveform.classList.remove('playing');
      if (voiceNoteInterval) clearInterval(voiceNoteInterval);
    }
  }
}

// Attach Real Audio Listeners on Load
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('realVoiceAudio');
  if (audio) {
    audio.addEventListener('timeupdate', () => {
      const timer = document.getElementById('voiceTimer');
      if (timer && audio.duration) {
        const cur = Math.floor(audio.currentTime);
        const dur = Math.floor(audio.duration) || 45;
        const cMin = Math.floor(cur / 60);
        const cSec = cur % 60;
        const dMin = Math.floor(dur / 60);
        const dSec = dur % 60;
        timer.textContent = `${cMin}:${cSec < 10 ? '0' : ''}${cSec} / ${dMin}:${dSec < 10 ? '0' : ''}${dSec}`;
      }
    });

    audio.addEventListener('ended', () => {
      isVoiceNotePlaying = false;
      const icon = document.getElementById('voicePlayIcon');
      const waveform = document.getElementById('voiceWaveform');
      if (icon) icon.textContent = '▶️';
      if (waveform) waveform.classList.remove('playing');

      // Auto-suggest opening surprise video
      setTimeout(() => {
        openBirthdayVideoModal();
      }, 1000);
    });
  }
});

function openBirthdayVideoModal() {
  SoundFX.explosion();
  if (window.confetti) {
    confetti({ particleCount: 80, spread: 75, origin: { y: 0.5 } });
  }
  openModal('birthdayVideoModal');
  const vid = document.getElementById('realBirthdayVideoModal');
  if (vid) {
    vid.currentTime = 0;
  }
}

function closeBirthdayVideoModal() {
  SoundFX.pop();
  const vid = document.getElementById('realBirthdayVideoModal');
  if (vid) {
    vid.pause();
  }
  closeModal('birthdayVideoModal');
}

function playVideoSurprise() {
  openBirthdayVideoModal();
}

function triggerGrandCelebration() {
  SoundFX.explosion();
  if (window.confetti) {
    const end = Date.now() + 3000;
    const colors = ['#ff3366', '#ffd152', '#38bdf8', '#ffffff'];
    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}

function restartToBeginning() {
  SoundFX.whoosh();
  candlesBlown = false;
  classifiedCluesFound.clear();
  document.getElementById('dossierClueCounter').textContent = "0 / 4 FOUND";
  document.querySelectorAll('.hidden-symbol-btn').forEach(b => b.classList.remove('found'));
  document.getElementById('dossierAccessGranted').style.display = 'none';
  
  document.getElementById('flame1').classList.remove('blown');
  document.getElementById('flame2').classList.remove('blown');
  document.getElementById('flame3').classList.remove('blown');
  document.getElementById('wishStatusBanner').textContent = "👉 Tap cake to blow candles & make a wish! 🕯️✨";
  
  rescuedTreasureKittens.clear();
  document.getElementById('huntScoreText').textContent = "0 / 3 KITTENS SAFE";
  document.querySelectorAll('.hunt-kitten-card').forEach(c => c.classList.remove('rescued'));
  document.getElementById('treasureWinBox').style.display = 'none';
  
  finalTrialIndex = 0;
  document.getElementById('trialCardBox').style.display = 'block';
  document.getElementById('missionSuccessSummary').style.display = 'none';
  renderFinalTrial();
  
  switchPage('page1', 'HERO PROTOCOL');
}

// ---------------------------------------------------------
// 15. MODAL HELPERS & LISTENERS
// ---------------------------------------------------------
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

document.getElementById('soundToggleBtn').addEventListener('click', toggleSound);
document.getElementById('bgmToggleBtn').addEventListener('click', toggleBGM);

// Top nav chapter dot click handlers
document.querySelectorAll('.chapter-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    const pageTarget = dot.getAttribute('data-page');
    if (pageTarget) {
      switchPage(pageTarget, pageTarget.toUpperCase());
    }
  });
});

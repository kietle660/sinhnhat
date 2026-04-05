const pageData = {
  girlfriendName: "Em yêu",
  birthdayDate: "2026-04-05",
  introCopy:
    "Anh không muốn chỉ tặng em một tấm thiệp bình thường, nên anh làm một trang nhỏ để từng câu chúc hiện ra thật chậm, thật rõ, như thể cả hôm nay chỉ đang dành cho em.",
  lines: [
    "Chúc mừng sinh nhật vợ iu! Anh biết em già thêm một tuổi rồi, nhưng trong mắt anh em vẫn là cô gái xinh đẹp nhất, đáng yêu nhất và… tham ăn nhất! 😂 Anh yêu em, chúc em ăn ngon, ngủ kỹ, và yêu anh nhiều hơn nữa nha! ❤️",
  ],
  finalNote:
    "Mong ngày sinh nhật này sẽ là mở đầu cho một tuổi mới thật dịu dàng, thật rực rỡ, và nếu được, anh muốn là một phần trong rất nhiều niềm vui của em.",
  letterTitle: "Lời nhắn anh để dành cuối cùng",
  letterParagraphs: [
    "Nếu hôm nay em đã đọc đến đây, thì anh chỉ muốn em biết rằng trang này không phải để làm điều gì thật lớn lao, mà chỉ để nói với em một cách tử tế rằng em rất quan trọng.",
    "Có thể anh không phải lúc nào cũng nói hay, nhưng anh thật lòng mong em có một sinh nhật đáng nhớ, với nhiều tiếng cười, nhiều cái ôm, và thật nhiều cảm giác được yêu thương.",
    "Mong em bước sang tuổi mới với một trái tim thật nhẹ, một nụ cười thật xinh, và thật nhiều điều tốt đẹp đang chờ phía trước.",
    "Chúc mừng sinh nhật em. Cảm ơn em vì đã xuất hiện.",
  ],
  prankLines: [
    "I LOVE YOU",
    "nhưng mà có gì đâu mà xem...",
    "lêu lêu bị lừa rùi hẹ hẹ.",
  ],
  followupLine: "Chứ đùa đó, đợi xí tiếp theo là có quà thật nè.",
  nextPageTitle: "Album của tụi mình",
  nextPageCopy:
    "Chúc mừng sinh nhật vợ iu. Đây mới là phần quà thật nè: những khoảnh khắc anh muốn giữ lại thật lâu cùng em.",
  memorySlides: [
    {
      src: "../z7690498439399_83913036b8ad0f2009a23187a2828119.jpg",
      caption: "Một góc rất dịu của em, nhìn thôi là thấy ngày cũng mềm xuống.",
    },
    {
      src: "../z7690498414043_6d40c981de4c0d58cc30af5beaf01bab.jpg",
      caption: "Đêm xuống rồi mà em vẫn sáng hơn cả cảnh phía sau.",
    },
    {
      src: "../z7690498393465_80dd4887e010deb0dc8740311fb5142c.jpg",
      caption: "Em đứng đâu thì khung hình ở đó tự nhiên thành đẹp.",
    },
    {
      src: "../z7690498203736_9b5395b6fa8856a3a0997526d3958006.jpg",
      caption: "Biển, nắng, và một cô gái làm anh muốn nhìn mãi.",
    },
    {
      src: "../IMG_7545.JPG",
      caption: "Một tấm của tụi mình, đơn giản thôi mà anh thích lắm.",
    },
    {
      src: "../att.Lgb3RYB-rHXBA3zsHNp_pkn285_GfQxQeWcO8I6mX7o.JPG",
      caption: "Nhìn tụi mình như vậy là anh thấy đủ vui rồi.",
    },
    {
      src: "../att.Rj_j59ZF2NVxpFxqKGaO8fDXV1v_P9ZZ3Qzp4-CvNGo.JPG",
      caption: "Có những ánh nhìn nhỏ xíu thôi mà đáng nhớ rất lâu.",
    },
    {
      src: "../att.FHIS7dUxxAPSU8dtmc8TWEFalBxZWd3CkO_QKFRYgys.JPG",
      caption: "Nụ cười này thì anh xin được lưu vào mục yêu thích.",
    },
    {
      src: "../att.Nx29Qp9p_k5ZzD3SK4dfsnhbpVAE2U86m_x3GaDYn5g.JPG",
      caption: "Một buổi tối nhẹ nhàng, thêm em là thành kỷ niệm đẹp.",
    },
    {
      src: "../z7690498179288_53e7f065d12c428b095170b579495541.jpg",
      caption: "Ánh nắng rất đẹp, nhưng hôm đó em còn đẹp hơn.",
    },
    {
      src: "../att.kpYDkUxZm4aSq5i3FScchawjnkP_16b2U6frer6d_GE.JPG",
      caption: "Một chiếc selfie rất đời thường nhưng anh thấy thương ghê.",
    },
    {
      src: "../IMG_8407.jpeg",
      caption: "Khúc cuối album vẫn phải là em thật xinh và thật dịu dàng.",
    },
  ],
  signature: "Thương em rất nhiều, anh.",
};

const birthdayDateElement = document.getElementById("birthday-date");
const girlfriendNameElement = document.getElementById("girlfriend-name");
const introCopyElement = document.getElementById("intro-copy");
const progressDotsElement = document.getElementById("progress-dots");
const completedLinesElement = document.getElementById("completed-lines");
const activeLineElement = document.getElementById("active-line");
const cursorElement = document.getElementById("cursor");
const hintElement = document.getElementById("hint");
const finalPanelElement = document.getElementById("final-panel");
const finalNoteElement = document.getElementById("final-note");
const signatureElement = document.getElementById("signature-line");
const letterTitleElement = document.getElementById("letter-title");
const letterBodyElement = document.getElementById("letter-body");
const letterModalElement = document.getElementById("letter-modal");
const closeLetterButton = document.getElementById("close-letter");
const letterButton = document.getElementById("letter-button");
const giftButton = document.getElementById("gift-button");
const startButton = document.getElementById("start-button");
const replayButton = document.getElementById("replay-button");
const storyWindowElement = document.getElementById("story-window");
const musicToggleButton = document.getElementById("music-toggle");
const loveScreenModalElement = document.getElementById("love-screen-modal");
const closeLoveScreenButton = document.getElementById("close-love-screen");
const loveScreenBurstElement = document.getElementById("love-screen-burst");
const loveScreenInnerElement = document.querySelector(".love-screen-inner");
const loveLineElements = [
  document.getElementById("love-line-1"),
  document.getElementById("love-line-2"),
  document.getElementById("love-line-3"),
];
const loveScreenExtraElement = document.getElementById("love-screen-extra");
const catLoaderElement = document.getElementById("cat-loader");
const loveNextPageElement = document.getElementById("love-next-page");
const loveNextTitleElement = document.getElementById("love-next-title");
const loveNextCopyElement = document.getElementById("love-next-copy");
const memorySlideImageElement = document.getElementById("memory-slide-image");
const memorySlideCaptionElement = document.getElementById("memory-slide-caption");
const memorySlideCounterElement = document.getElementById("memory-slide-counter");
const memorySlideDotsElement = document.getElementById("memory-slide-dots");
const memorySliderBackdropElement = document.getElementById("memory-slider-backdrop");
const memoryPrevButton = document.getElementById("memory-prev");
const memoryNextButton = document.getElementById("memory-next");
const starsElement = document.getElementById("stars");
const heartsLayerElement = document.getElementById("hearts-layer");

const confettiCanvas = document.getElementById("confetti-canvas");
const confettiContext = confettiCanvas.getContext("2d");

const confettiPieces = [];
const musicState = {
  context: null,
  loopTimeout: null,
  activeOscillators: [],
};
const noteFrequencies = {
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.0,
  A4: 440.0,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  F5: 698.46,
  G5: 783.99,
};
const birthdaySong = [
  { note: "G4", beats: 0.75 },
  { note: "G4", beats: 0.25 },
  { note: "A4", beats: 1 },
  { note: "G4", beats: 1 },
  { note: "C5", beats: 1 },
  { note: "B4", beats: 2 },
  { note: "G4", beats: 0.75 },
  { note: "G4", beats: 0.25 },
  { note: "A4", beats: 1 },
  { note: "G4", beats: 1 },
  { note: "D5", beats: 1 },
  { note: "C5", beats: 2 },
  { note: "G4", beats: 0.75 },
  { note: "G4", beats: 0.25 },
  { note: "G5", beats: 1 },
  { note: "E5", beats: 1 },
  { note: "C5", beats: 1 },
  { note: "B4", beats: 1 },
  { note: "A4", beats: 2 },
  { note: "F5", beats: 0.75 },
  { note: "F5", beats: 0.25 },
  { note: "E5", beats: 1 },
  { note: "C5", beats: 1 },
  { note: "D5", beats: 1 },
  { note: "C5", beats: 2 },
];

const state = {
  lineIndex: 0,
  charIndex: 0,
  typingTimer: null,
  pauseTimer: null,
  started: false,
  playing: false,
  musicPlaying: false,
  loveScreenTypingInterval: null,
  loveScreenHeartInterval: null,
  loveScreenLoaderInterval: null,
  loveScreenTimeouts: [],
  memorySlideIndex: 0,
  memorySlideInterval: null,
};

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function capitalizeText(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatBirthdayDate() {
  const birthdayDate = new Date(`${pageData.birthdayDate}T00:00:00`);
  if (Number.isNaN(birthdayDate.getTime())) {
    return "Ngày đặc biệt của em";
  }

  return capitalizeText(
    new Intl.DateTimeFormat("vi-VN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(birthdayDate)
  );
}

function renderStaticContent() {
  document.title = `Chúc mừng sinh nhật ${pageData.girlfriendName}`;
  birthdayDateElement.textContent = formatBirthdayDate();
  girlfriendNameElement.textContent = pageData.girlfriendName;
  introCopyElement.textContent = pageData.introCopy;
  finalNoteElement.textContent = pageData.finalNote;
  signatureElement.textContent = pageData.signature;
  letterTitleElement.textContent = pageData.letterTitle;
  loveNextTitleElement.textContent = pageData.nextPageTitle;
  loveNextCopyElement.textContent = pageData.nextPageCopy;

  pageData.letterParagraphs.forEach((paragraph) => {
    const line = document.createElement("p");
    line.textContent = paragraph;
    letterBodyElement.appendChild(line);
  });
}

function renderProgressDots() {
  progressDotsElement.replaceChildren();

  pageData.lines.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "progress-dot";
    dot.dataset.index = String(index);
    progressDotsElement.appendChild(dot);
  });
}

function updateProgressDots() {
  const dots = progressDotsElement.querySelectorAll(".progress-dot");

  dots.forEach((dot, index) => {
    dot.classList.remove("is-active", "is-complete");

    if (index < state.lineIndex) {
      dot.classList.add("is-complete");
    } else if (index === state.lineIndex && state.playing) {
      dot.classList.add("is-active");
    }
  });
}

function createStars() {
  for (let index = 0; index < 40; index += 1) {
    const star = document.createElement("span");
    const size = randomNumber(2, 6);
    star.className = "star";
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${randomNumber(0, 100)}%`;
    star.style.top = `${randomNumber(0, 100)}%`;
    star.style.setProperty("--duration", `${randomNumber(2.8, 5.4)}s`);
    star.style.animationDelay = `${randomNumber(0, 4)}s`;
    starsElement.appendChild(star);
  }
}

function ensureAudioContext() {
  if (!musicState.context) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    musicState.context = new AudioContextClass();
  }

  if (musicState.context.state === "suspended") {
    musicState.context.resume();
  }
}

function stopScheduledSong() {
  window.clearTimeout(musicState.loopTimeout);
  musicState.loopTimeout = null;

  musicState.activeOscillators.forEach((oscillator) => {
    try {
      oscillator.stop();
    } catch (error) {
      // Oscillator may already be stopped; ignore to keep playback smooth.
    }
  });

  musicState.activeOscillators = [];
}

function scheduleNote(frequency, startTime, duration, volume = 0.05) {
  const context = musicState.context;
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  const endTime = startTime + duration;

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, endTime);

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start(startTime);
  oscillator.stop(endTime + 0.03);

  musicState.activeOscillators.push(oscillator);
  oscillator.onended = () => {
    musicState.activeOscillators = musicState.activeOscillators.filter(
      (activeOscillator) => activeOscillator !== oscillator
    );
  };
}

function playBirthdaySong() {
  ensureAudioContext();
  stopScheduledSong();

  const context = musicState.context;
  const beatDuration = 0.42;
  const noteGap = 0.035;
  let currentTime = context.currentTime + 0.05;

  birthdaySong.forEach(({ note, beats }) => {
    const duration = beats * beatDuration;
    const frequency = noteFrequencies[note];

    if (frequency) {
      scheduleNote(frequency, currentTime, duration, 0.055);
      scheduleNote(frequency / 2, currentTime, duration * 0.98, 0.018);
    }

    currentTime += duration + noteGap;
  });

  const totalDuration = (currentTime - context.currentTime) * 1000 + 250;
  musicState.loopTimeout = window.setTimeout(() => {
    if (state.musicPlaying) {
      playBirthdaySong();
    }
  }, totalDuration);
}

function updateMusicUi() {
  if (state.musicPlaying) {
    musicToggleButton.textContent = "Tắt nhạc";
    musicToggleButton.classList.add("is-on");
    return;
  }

  musicToggleButton.textContent = "Bật nhạc";
  musicToggleButton.classList.remove("is-on");
}

function startMusic(restart = false) {
  if (!state.musicPlaying) {
    state.musicPlaying = true;
  } else if (!restart) {
    return;
  }

  playBirthdaySong();
  updateMusicUi();
}

function stopMusic() {
  state.musicPlaying = false;
  stopScheduledSong();
  updateMusicUi();
}

function toggleMusic() {
  if (state.musicPlaying) {
    stopMusic();
    return;
  }

  startMusic(false);
}

function createFloatingHeart(left) {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.style.setProperty("--left", left || `${randomNumber(4, 96)}%`);
  heart.style.setProperty("--size", `${randomNumber(16, 32)}px`);
  heart.style.setProperty("--duration", `${randomNumber(6.5, 10.5)}s`);
  heartsLayerElement.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove(), { once: true });
}

function startAmbientHearts() {
  setInterval(() => createFloatingHeart(), 1200);
}

function clearTimers() {
  window.clearInterval(state.typingTimer);
  window.clearTimeout(state.pauseTimer);
  state.typingTimer = null;
  state.pauseTimer = null;
}

function resetSequence() {
  clearTimers();
  state.lineIndex = 0;
  state.charIndex = 0;
  state.playing = false;

  completedLinesElement.replaceChildren();
  activeLineElement.textContent = "";
  cursorElement.classList.remove("is-hidden");
  finalPanelElement.classList.remove("is-visible");
  storyWindowElement.classList.remove("is-glowing");
  hintElement.textContent = "Bấm bắt đầu để xem từng dòng xuất hiện như một đoạn phim nhỏ.";
  startButton.disabled = false;
  replayButton.disabled = !state.started;
  updateProgressDots();
}

function appendCompletedLine(text) {
  const line = document.createElement("p");
  line.className = "completed-line";
  line.textContent = text;
  completedLinesElement.appendChild(line);

  while (completedLinesElement.children.length > 5) {
    completedLinesElement.removeChild(completedLinesElement.firstElementChild);
  }
}

function finishSequence() {
  clearTimers();
  state.playing = false;
  activeLineElement.textContent = "";
  cursorElement.classList.add("is-hidden");
  finalPanelElement.classList.add("is-visible");
  storyWindowElement.classList.add("is-glowing");
  hintElement.textContent = "Xong rồi, giờ em có thể đọc lại hoặc mở lời nhắn cuối của anh.";
  startButton.disabled = false;
  replayButton.disabled = false;
  launchConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.28, 180);
  for (let index = 0; index < 12; index += 1) {
    setTimeout(() => createFloatingHeart(`${randomNumber(30, 70)}%`), index * 90);
  }
  updateProgressDots();
  window.setTimeout(() => {
    finalPanelElement.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 180);
}

function moveToNextLine() {
  const completedText = pageData.lines[state.lineIndex];
  appendCompletedLine(completedText);

  state.lineIndex += 1;
  state.charIndex = 0;
  activeLineElement.textContent = "";

  if (state.lineIndex >= pageData.lines.length) {
    finishSequence();
    return;
  }

  updateProgressDots();
  state.pauseTimer = window.setTimeout(typeCurrentLine, 420);
}

function typeCurrentLine() {
  clearTimers();
  state.playing = true;
  startButton.disabled = true;
  replayButton.disabled = true;
  cursorElement.classList.remove("is-hidden");
  updateProgressDots();

  const currentLine = pageData.lines[state.lineIndex];
  hintElement.textContent = `Đang chạy dòng ${state.lineIndex + 1} / ${pageData.lines.length}`;

  state.typingTimer = window.setInterval(() => {
    state.charIndex += 1;
    activeLineElement.textContent = currentLine.slice(0, state.charIndex);

    if (state.charIndex >= currentLine.length) {
      clearTimers();
      state.pauseTimer = window.setTimeout(moveToNextLine, 950);
    }
  }, 42);
}

function startSequence() {
  resetSequence();
  state.started = true;
  state.playing = true;
  startMusic(true);
  updateProgressDots();
  typeCurrentLine();
}

function replaySequence() {
  startSequence();
}

function openLetterModal() {
  letterModalElement.classList.add("is-open");
  letterModalElement.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLetterModal() {
  letterModalElement.classList.remove("is-open");
  letterModalElement.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function queueLoveScreenTimeout(callback, delay) {
  const timeoutId = window.setTimeout(callback, delay);
  state.loveScreenTimeouts.push(timeoutId);
  return timeoutId;
}

function clearLoveScreenSequence() {
  window.clearInterval(state.loveScreenTypingInterval);
  window.clearInterval(state.loveScreenHeartInterval);
  window.clearInterval(state.loveScreenLoaderInterval);
  window.clearInterval(state.memorySlideInterval);
  state.loveScreenTypingInterval = null;
  state.loveScreenHeartInterval = null;
  state.loveScreenLoaderInterval = null;
  state.memorySlideInterval = null;
  state.memorySlideIndex = 0;

  state.loveScreenTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
  state.loveScreenTimeouts = [];

  loveLineElements.forEach((lineElement) => {
    lineElement.textContent = "";
    lineElement.classList.remove("is-visible");
  });

  loveScreenExtraElement.textContent = "";
  loveScreenExtraElement.classList.remove("is-visible");
  catLoaderElement.classList.remove("is-visible");
  catLoaderElement.setAttribute("aria-hidden", "true");
  loveNextPageElement.classList.remove("is-visible");
  loveScreenInnerElement.classList.remove("is-hidden");
  loveScreenBurstElement.replaceChildren();
  memorySlideImageElement.classList.remove("is-visible");
  memorySlideImageElement.removeAttribute("src");
  memorySliderBackdropElement.style.backgroundImage = "";
  memorySlideCaptionElement.textContent = "";
  memorySlideCounterElement.textContent = "";
  memorySlideDotsElement
    .querySelectorAll(".memory-slide-dot")
    .forEach((dot) => dot.classList.remove("is-active"));
}

function renderMemoryDots() {
  memorySlideDotsElement.replaceChildren();

  pageData.memorySlides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "memory-slide-dot";
    dot.dataset.index = String(index);
    memorySlideDotsElement.appendChild(dot);
  });
}

function showMemorySlide(index) {
  if (!pageData.memorySlides.length) {
    memorySlideImageElement.removeAttribute("src");
    memorySlideCaptionElement.textContent = "";
    memorySlideCounterElement.textContent = "";
    memorySliderBackdropElement.style.backgroundImage = "";
    return;
  }

  const totalSlides = pageData.memorySlides.length;
  const nextIndex = (index + totalSlides) % totalSlides;
  const slide = pageData.memorySlides[nextIndex];
  const slideSource = encodeURI(slide.src);
  const revealSlide = () => {
    memorySlideImageElement.classList.add("is-visible");
  };

  state.memorySlideIndex = nextIndex;

  memorySlideImageElement.classList.remove("is-visible");
  memorySlideImageElement.onload = revealSlide;
  memorySlideImageElement.onerror = revealSlide;
  memorySlideImageElement.src = slideSource;
  memorySlideImageElement.alt = slide.caption;
  memorySlideCaptionElement.textContent = slide.caption;
  memorySlideCounterElement.textContent = `${String(nextIndex + 1).padStart(2, "0")} / ${String(
    totalSlides
  ).padStart(2, "0")}`;
  memorySliderBackdropElement.style.backgroundImage = `url("${slideSource}")`;

  memorySlideDotsElement
    .querySelectorAll(".memory-slide-dot")
    .forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === nextIndex));

  if (memorySlideImageElement.complete) {
    window.requestAnimationFrame(revealSlide);
  }
}

function stopMemorySlider() {
  window.clearInterval(state.memorySlideInterval);
  state.memorySlideInterval = null;
}

function startMemorySlider() {
  if (pageData.memorySlides.length <= 1) {
    return;
  }

  stopMemorySlider();
  state.memorySlideInterval = window.setInterval(() => {
    showMemorySlide(state.memorySlideIndex + 1);
  }, 2800);
}

function createLoveScreenHeart() {
  const heart = document.createElement("span");
  heart.className = "love-screen-heart";
  heart.style.setProperty("--left", `${randomNumber(8, 92)}%`);
  heart.style.setProperty("--size", `${randomNumber(18, 34)}px`);
  heart.style.setProperty("--duration", `${randomNumber(5.8, 8.8)}s`);
  loveScreenBurstElement.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove(), { once: true });
}

function celebrateLoveScreen() {
  launchConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.35, 110);
  queueLoveScreenTimeout(() => {
    launchConfettiBurst(window.innerWidth * 0.25, window.innerHeight * 0.36, 90);
  }, 220);
  queueLoveScreenTimeout(() => {
    launchConfettiBurst(window.innerWidth * 0.75, window.innerHeight * 0.32, 90);
  }, 420);

  for (let index = 0; index < 16; index += 1) {
    queueLoveScreenTimeout(() => createLoveScreenHeart(), index * 100);
    queueLoveScreenTimeout(() => createFloatingHeart(`${randomNumber(25, 75)}%`), index * 110);
  }

  state.loveScreenHeartInterval = window.setInterval(createLoveScreenHeart, 420);
  queueLoveScreenTimeout(() => {
    window.clearInterval(state.loveScreenHeartInterval);
    state.loveScreenHeartInterval = null;
  }, 5200);
  queueLoveScreenTimeout(startLoveScreenLoader, 5000);
}

function typeTextIntoElement(element, text, speed, onDone) {
  let charIndex = 0;
  element.classList.add("is-visible");
  state.loveScreenTypingInterval = window.setInterval(() => {
    charIndex += 1;
    element.textContent = text.slice(0, charIndex);

    if (charIndex >= text.length) {
      window.clearInterval(state.loveScreenTypingInterval);
      state.loveScreenTypingInterval = null;
      if (typeof onDone === "function") {
        onDone();
      }
    }
  }, speed);
}

function showLoveNextPage() {
  loveScreenInnerElement.classList.add("is-hidden");
  loveNextPageElement.classList.add("is-visible");
  showMemorySlide(0);
  startMemorySlider();
  launchConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.24, 150);
  for (let index = 0; index < 14; index += 1) {
    queueLoveScreenTimeout(() => createLoveScreenHeart(), index * 120);
  }
}

function startLoveScreenLoader() {
  typeTextIntoElement(loveScreenExtraElement, pageData.followupLine, 36, () => {
    queueLoveScreenTimeout(() => {
      catLoaderElement.classList.add("is-visible");
      catLoaderElement.setAttribute("aria-hidden", "false");
      state.loveScreenLoaderInterval = window.setInterval(createLoveScreenHeart, 520);
      queueLoveScreenTimeout(() => {
        window.clearInterval(state.loveScreenLoaderInterval);
        state.loveScreenLoaderInterval = null;
        showLoveNextPage();
      }, 3200);
    }, 420);
  });
}

function typeLoveScreenLine(index = 0) {
  if (index >= pageData.prankLines.length) {
    celebrateLoveScreen();
    return;
  }

  const lineElement = loveLineElements[index];
  const text = pageData.prankLines[index];
  typeTextIntoElement(lineElement, text, index === 0 ? 90 : 40, () => {
    queueLoveScreenTimeout(() => typeLoveScreenLine(index + 1), index === 0 ? 650 : 340);
  });
}

function openLoveScreenModal() {
  clearLoveScreenSequence();
  loveScreenModalElement.classList.add("is-open");
  loveScreenModalElement.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  queueLoveScreenTimeout(() => typeLoveScreenLine(0), 220);
}

function closeLoveScreenModal() {
  loveScreenModalElement.classList.remove("is-open");
  loveScreenModalElement.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  clearLoveScreenSequence();
}

function resizeConfettiCanvas() {
  const ratio = window.devicePixelRatio || 1;
  confettiCanvas.width = window.innerWidth * ratio;
  confettiCanvas.height = window.innerHeight * ratio;
  confettiCanvas.style.width = `${window.innerWidth}px`;
  confettiCanvas.style.height = `${window.innerHeight}px`;
  confettiContext.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function launchConfettiBurst(x, y, amount) {
  const colors = ["#ff7e9d", "#ffd681", "#8fc6ff", "#f8f2e8", "#ffb76b"];

  for (let index = 0; index < amount; index += 1) {
    confettiPieces.push({
      x,
      y,
      vx: randomNumber(-5.2, 5.2),
      vy: randomNumber(-12.8, -5.6),
      size: randomNumber(6, 11),
      color: pickRandom(colors),
      rotation: randomNumber(0, Math.PI * 2),
      spin: randomNumber(-0.22, 0.22),
      life: 0,
      maxLife: randomNumber(70, 130),
    });
  }
}

function animateConfetti() {
  confettiContext.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let index = confettiPieces.length - 1; index >= 0; index -= 1) {
    const piece = confettiPieces[index];
    piece.life += 1;
    piece.x += piece.vx;
    piece.y += piece.vy;
    piece.vy += 0.2;
    piece.vx *= 0.994;
    piece.rotation += piece.spin;

    const opacity = 1 - piece.life / piece.maxLife;
    if (opacity <= 0 || piece.y > window.innerHeight + 20) {
      confettiPieces.splice(index, 1);
      continue;
    }

    confettiContext.save();
    confettiContext.translate(piece.x, piece.y);
    confettiContext.rotate(piece.rotation);
    confettiContext.globalAlpha = opacity;
    confettiContext.fillStyle = piece.color;
    confettiContext.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.62);
    confettiContext.restore();
  }

  window.requestAnimationFrame(animateConfetti);
}

function setupInteractions() {
  startButton.addEventListener("click", startSequence);
  replayButton.addEventListener("click", replaySequence);
  letterButton.addEventListener("click", openLetterModal);
  closeLetterButton.addEventListener("click", closeLetterModal);
  giftButton.addEventListener("click", openLoveScreenModal);
  closeLoveScreenButton.addEventListener("click", closeLoveScreenModal);
  musicToggleButton.addEventListener("click", toggleMusic);
  memoryPrevButton.addEventListener("click", () => {
    stopMemorySlider();
    showMemorySlide(state.memorySlideIndex - 1);
    startMemorySlider();
  });
  memoryNextButton.addEventListener("click", () => {
    stopMemorySlider();
    showMemorySlide(state.memorySlideIndex + 1);
    startMemorySlider();
  });

  letterModalElement.addEventListener("click", (event) => {
    if (event.target === letterModalElement) {
      closeLetterModal();
    }
  });

  loveScreenModalElement.addEventListener("click", (event) => {
    if (event.target === loveScreenModalElement) {
      closeLoveScreenModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && loveScreenModalElement.classList.contains("is-open")) {
      closeLoveScreenModal();
    }

    if (event.key === "Escape" && letterModalElement.classList.contains("is-open")) {
      closeLetterModal();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      event.target.closest("button") ||
      event.target.closest(".letter-card") ||
      event.target.closest(".love-screen")
    ) {
      return;
    }

    createFloatingHeart(`${(event.clientX / window.innerWidth) * 100}%`);
  });
}

function init() {
  renderStaticContent();
  renderProgressDots();
  renderMemoryDots();
  createStars();
  startAmbientHearts();
  resizeConfettiCanvas();
  animateConfetti();
  setupInteractions();
  updateMusicUi();
  clearLoveScreenSequence();
  resetSequence();
}

window.addEventListener("resize", resizeConfettiCanvas);
init();

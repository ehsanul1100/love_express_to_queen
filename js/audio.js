/**
 * ROYAL AUDIO SUITE - "মহারাণীর রাজদরবার"
 * 100% Client-Side Procedural Romantic Harp/Piano Synthesizer (Web Audio API)
 * Zero external servers or data leakage.
 */

class RoyalAudioSuite {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.volume = 0.5;
    this.synthInterval = null;
    this.customAudio = null;
    this.mode = "synth"; // 'synth' or 'custom'
    this.discElement = document.getElementById("floating-audio-widget");
    this.initCustomAudio();
  }

  initCustomAudio() {
    this.customAudio = new Audio();
    // Default local fallback path if user places an MP3 file in assets folder
    this.customAudio.src = "./assets/romantic_song.mp3";
    this.customAudio.loop = true;
    this.customAudio.volume = this.volume;

    this.customAudio.addEventListener("error", () => {
      // If local custom file not found, fall back smoothly to Web Audio synthesizer
      this.mode = "synth";
    });
  }

  ensureAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  /**
   * Procedural Romantic Chord & Arpeggio Engine (Harmonic Harp/Piano in D-Maj / B-Min / G-Maj)
   */
  playRomanticNote(freq, time, duration = 2.5, type = "sine") {
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    // Warm Low-Pass Filter for dreamy harp/music box timbre
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1400, time);
    filter.frequency.exponentialRampToValueAtTime(350, time + duration);

    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    // Subtle detune for lush chorus warmth
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 1.002, time);

    // Smooth envelope attack and gentle decay
    gainNode.gain.setValueAtTime(0.0001, time);
    gainNode.gain.linearRampToValueAtTime(0.22 * this.volume, time + 0.08);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    osc.start(time);
    osc2.start(time);
    osc.stop(time + duration);
    osc2.stop(time + duration);
  }

  startProceduralSymphony() {
    this.ensureAudioContext();

    // Romantic Pentatonic/Diatonic Scales (Frequencies in Hz)
    // D4, E4, F#4, A4, B4, C#5, D5, E5, F#5, A5
    const chordProgressions = [
      // D Major (Majestic & Tender)
      [293.66, 369.99, 440.0, 587.33, 739.99],
      // B Minor (Deep & Emotional)
      [246.94, 293.66, 369.99, 493.88, 587.33],
      // G Major (Warm & Devotional)
      [196.0, 246.94, 293.66, 392.0, 493.88],
      // A Major 7 (Royal Grace)
      [220.0, 277.18, 329.63, 440.0, 554.37],
    ];

    let currentChordIndex = 0;
    let step = 0;

    const playCycle = () => {
      if (!this.isPlaying || this.mode !== "synth") return;

      const now = this.audioCtx.currentTime;
      const currentChord = chordProgressions[currentChordIndex];

      // Arpeggiate notes gracefully
      const noteFreq = currentChord[step % currentChord.length];
      this.playRomanticNote(
        noteFreq,
        now,
        3.2,
        step % 2 === 0 ? "sine" : "triangle",
      );

      // Add gentle bass root on chord change
      if (step === 0) {
        this.playRomanticNote(currentChord[0] / 2, now, 4.0, "sine");
      }

      step++;
      if (step >= 6) {
        step = 0;
        currentChordIndex = (currentChordIndex + 1) % chordProgressions.length;
      }
    };

    // Trigger notes every 550ms
    playCycle();
    this.synthInterval = setInterval(playCycle, 580);
  }

  stopProceduralSymphony() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  play() {
    this.isPlaying = true;
    if (this.discElement) {
      this.discElement.classList.add("playing");
    }

    if (this.mode === "custom" && this.customAudio.src) {
      this.customAudio.play().catch(() => {
        this.mode = "synth";
        this.startProceduralSymphony();
      });
    } else {
      this.startProceduralSymphony();
    }
    this.updateUIState();
  }

  pause() {
    this.isPlaying = false;
    if (this.discElement) {
      this.discElement.classList.remove("playing");
    }
    this.stopProceduralSymphony();
    if (this.customAudio) {
      this.customAudio.pause();
    }
    this.updateUIState();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  setVolume(val) {
    this.volume = parseFloat(val);
    if (this.customAudio) {
      this.customAudio.volume = this.volume;
    }
  }

  updateUIState() {
    const playIcon = document.getElementById("play-icon");
    const pauseIcon = document.getElementById("pause-icon");
    const statusText = document.getElementById("audio-status-text");

    if (playIcon && pauseIcon) {
      playIcon.style.display = this.isPlaying ? "none" : "block";
      pauseIcon.style.display = this.isPlaying ? "block" : "none";
    }

    if (statusText) {
      statusText.textContent = this.isPlaying
        ? "রাজকীয় সুর বাজছে ♫"
        : "সুর থামানো রয়েছে";
    }
  }
}

window.RoyalAudioSuite = RoyalAudioSuite;

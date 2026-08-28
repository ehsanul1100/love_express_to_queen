/**
 * ROYAL AUDIO SUITE - "মহারাণীর রাজদরবার"
 * 100% Client-Side Soft Procedural Romantic Music-Box / Harp Synthesizer (Web Audio API)
 * Optimized for smartphones: Zero clipping, warm velvet timbre, anti-click envelopes, master compressor.
 */

class RoyalAudioSuite {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.volume = 0.45;
    this.synthInterval = null;
    this.customAudio = null;
    this.mode = "synth"; // 'synth' or 'custom'
    this.masterGain = null;
    this.masterCompressor = null;
    this.masterFilter = null;
    this.highPassFilter = null;
    this.discElement =
      document.getElementById("floating-audio-btn") ||
      document.getElementById("floating-audio-widget");
    this.initCustomAudio();
  }

  initCustomAudio() {
    this.customAudio = new Audio();
    this.customAudio.src = "./assets/romantic_song.mp3";
    this.customAudio.loop = true;
    this.customAudio.volume = this.volume;

    this.customAudio.addEventListener("error", () => {
      this.mode = "synth";
    });
  }

  ensureAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();

      // Master Dynamics Compressor: Prevents clipping & harsh mobile speaker distortion
      this.masterCompressor = this.audioCtx.createDynamicsCompressor();
      this.masterCompressor.threshold.setValueAtTime(
        -18,
        this.audioCtx.currentTime,
      );
      this.masterCompressor.knee.setValueAtTime(24, this.audioCtx.currentTime);
      this.masterCompressor.ratio.setValueAtTime(8, this.audioCtx.currentTime);
      this.masterCompressor.attack.setValueAtTime(
        0.005,
        this.audioCtx.currentTime,
      );
      this.masterCompressor.release.setValueAtTime(
        0.25,
        this.audioCtx.currentTime,
      );

      // Warm Master Low-Pass Filter: Removes harsh high frequencies for soft velvet acoustic timbre
      this.masterFilter = this.audioCtx.createBiquadFilter();
      this.masterFilter.type = "lowpass";
      this.masterFilter.frequency.setValueAtTime(
        850,
        this.audioCtx.currentTime,
      );
      this.masterFilter.Q.setValueAtTime(0.6, this.audioCtx.currentTime);

      // Master High-Pass Filter: Prevents sub-bass distortion on smartphone speakers
      this.highPassFilter = this.audioCtx.createBiquadFilter();
      this.highPassFilter.type = "highpass";
      this.highPassFilter.frequency.setValueAtTime(
        110,
        this.audioCtx.currentTime,
      );

      // Master Gain Bus
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(
        this.volume,
        this.audioCtx.currentTime,
      );

      // Route: [Note Nodes] -> masterFilter -> highPassFilter -> masterGain -> masterCompressor -> destination
      this.masterFilter.connect(this.highPassFilter);
      this.highPassFilter.connect(this.masterGain);
      this.masterGain.connect(this.masterCompressor);
      this.masterCompressor.connect(this.audioCtx.destination);
    }

    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  /**
   * Ultra-Soft Romantic Music-Box / Harp Note Generator
   * Uses pure sine fundamental + gentle harmonic overtone with smooth anti-click envelopes.
   */
  playRomanticNote(freq, time, duration = 3.0, velocity = 0.12) {
    if (!this.audioCtx || !this.masterFilter) return;

    // Fundamental Sine Oscillator (Soft & Pure)
    const osc1 = this.audioCtx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, time);

    // Subtle 2nd Harmonic Sine (Gentle Acoustic Shimmer, NO harsh triangle/square)
    const osc2 = this.audioCtx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(freq * 2, time);

    const noteGain = this.audioCtx.createGain();
    const overtoneGain = this.audioCtx.createGain();
    overtoneGain.gain.setValueAtTime(0.15, time); // 15% overtone for delicate warmth

    // Per-note gentle dampening filter
    const noteFilter = this.audioCtx.createBiquadFilter();
    noteFilter.type = "lowpass";
    noteFilter.frequency.setValueAtTime(950, time);
    noteFilter.frequency.exponentialRampToValueAtTime(320, time + duration);

    // Anti-click soft envelope attack (35ms smooth fade-in)
    const noteVol = Math.max(0.0001, velocity * this.volume);
    noteGain.gain.setValueAtTime(0.0001, time);
    noteGain.gain.linearRampToValueAtTime(noteVol, time + 0.035);
    // Smooth natural exponential decay
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    // Connections
    osc1.connect(noteFilter);
    osc2.connect(overtoneGain);
    overtoneGain.connect(noteFilter);
    noteFilter.connect(noteGain);
    noteGain.connect(this.masterFilter);

    // Start & Stop with safe bounds
    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + duration);
    osc2.stop(time + duration);
  }

  /**
   * Dreamy Romantic Arpeggio Progression
   * Harmonic sequence designed for relaxation, intimacy, and peace.
   */
  startProceduralSymphony() {
    this.ensureAudioContext();

    // Soothing Pentatonic/Diatonic Scales (Frequencies in Hz)
    // D Major / B Minor / G Major / A Major
    const chordProgressions = [
      // D Major (Celestial & Pure)
      [293.66, 369.99, 440.0, 587.33, 739.99, 587.33],
      // B Minor (Emotional & Deep)
      [246.94, 293.66, 369.99, 493.88, 587.33, 493.88],
      // G Major (Warm & Devoted)
      [196.0, 246.94, 293.66, 392.0, 493.88, 392.0],
      // A Major 7 (Royal Tender Grace)
      [220.0, 277.18, 329.63, 440.0, 554.37, 440.0],
    ];

    let chordIndex = 0;
    let step = 0;

    const playCycle = () => {
      if (!this.isPlaying || this.mode !== "synth") return;

      const now = this.audioCtx.currentTime;
      const currentChord = chordProgressions[chordIndex];

      // Arpeggiate notes with delicate soft velocity
      const noteFreq = currentChord[step % currentChord.length];
      const isLead = step === 0 || step === 3;
      const velocity = isLead ? 0.13 : 0.09;

      this.playRomanticNote(noteFreq, now, 3.2, velocity);

      // Very soft warm bass foundation on chord change (in comfortable phone speaker octave)
      if (step === 0) {
        this.playRomanticNote(currentChord[0] * 0.75, now, 3.8, 0.08);
      }

      step++;
      if (step >= currentChord.length) {
        step = 0;
        chordIndex = (chordIndex + 1) % chordProgressions.length;
      }
    };

    playCycle();
    // Calming, unhurried tempo (760ms per note)
    this.synthInterval = setInterval(playCycle, 760);
  }

  stopProceduralSymphony() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  play() {
    this.isPlaying = true;
    if (!this.discElement) {
      this.discElement =
        document.getElementById("floating-audio-btn") ||
        document.getElementById("floating-audio-widget");
    }
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
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setValueAtTime(
        this.volume,
        this.audioCtx.currentTime,
      );
    }
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

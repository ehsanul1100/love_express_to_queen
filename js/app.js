/**
 * MAIN APP CONTROLLER - "মালিকা-ই-জাহান"
 * Orchestrates cinematic chapter transitions, scroll mode synchronization, audio suite, wax seal decree, and private photo vault.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Particle Engine
  const particles = new RoyalParticleEngine("particle-canvas");

  // 2. Initialize Audio Suite
  const audioSuite = new RoyalAudioSuite();

  // 3. Cinematic Royal Chapters Configuration
  const chapters = [
    { title: "১. শাহী তোরণ ও আগমন", id: "chamber-gate" },
    { title: "২. সুলতানের প্রেমপত্র", id: "chamber-proclamation" },
    { title: "৩. রুহানী কাব্যসুধা", id: "chamber-poetry" },
    { title: "৪. মালিকার রূপ ও গুণ", id: "chamber-virtues" },
    { title: "৫. প্রেমের শাহী অলিন্দ", id: "chamber-vault" },
    { title: "৬. সুলতানের চিরন্তন ওয়াদা", id: "chamber-decree" },
  ];

  let currentChapterIndex = 0;
  let isCinematicMode = true;

  const chamberElements = document.querySelectorAll(".royal-chamber");
  const sceneryLayers = document.querySelectorAll(".scenery-layer");
  const stepDots = document.querySelectorAll(".step-dot");
  const prevBtn = document.getElementById("hud-prev-btn");
  const nextBtn = document.getElementById("hud-next-btn");
  const chapterBadgeText = document.getElementById("chapter-badge-text");
  const floatingModeBtn = document.getElementById("floating-mode-btn");
  const modeScrollIcon = document.getElementById("mode-scroll-icon");
  const modeSlideIcon = document.getElementById("mode-slide-icon");

  /**
   * Main Navigation Dispatcher (Supports both Cinematic Slide and Continuous Scroll modes)
   */
  function goToChapter(index, triggerParticles = true) {
    if (index < 0) index = 0;
    if (index >= chapters.length) index = chapters.length - 1;
    currentChapterIndex = index;

    // Update Architectural Scenery Layer
    if (window.RoyalSceneries) {
      window.RoyalSceneries.setChapter(currentChapterIndex);
    } else {
      const layers = document.querySelectorAll(".scenery-layer");
      layers.forEach((layer, idx) => {
        layer.classList.toggle("scenery-active", idx === currentChapterIndex);
      });
    }

    // Update HUD Dots
    stepDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentChapterIndex);
    });

    // Update Top Chapter Badge
    if (chapterBadgeText) {
      chapterBadgeText.textContent = chapters[currentChapterIndex].title;
    }

    // Update Prev / Next Buttons State
    if (prevBtn) prevBtn.disabled = currentChapterIndex === 0;
    if (nextBtn) nextBtn.disabled = currentChapterIndex === chapters.length - 1;

    if (isCinematicMode) {
      // Cinematic Mode: Show ONLY the active chamber
      chamberElements.forEach((ch, i) => {
        if (i === currentChapterIndex) {
          ch.classList.add("chamber-active");
          ch.style.display = "block";
        } else {
          ch.classList.remove("chamber-active");
          ch.style.display = "none";
        }
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Continuous Scroll Mode: Ensure all chambers visible and scroll to target
      chamberElements.forEach((ch) => {
        ch.style.display = "block";
        ch.classList.add("chamber-active");
      });
      if (chamberElements[currentChapterIndex]) {
        chamberElements[currentChapterIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    // Particle Celebration
    if (triggerParticles && particles) {
      particles.showerLove(35);
    }
  }

  // Next and Previous Handlers
  function nextChapter() {
    if (currentChapterIndex < chapters.length - 1) {
      goToChapter(currentChapterIndex + 1);
    }
  }

  function prevChapter() {
    if (currentChapterIndex > 0) {
      goToChapter(currentChapterIndex - 1);
    }
  }

  // Setup Stepper Dot Clicks
  stepDots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      goToChapter(idx);
    });
  });

  if (prevBtn) prevBtn.addEventListener("click", prevChapter);
  if (nextBtn) nextBtn.addEventListener("click", nextChapter);

  // In-Stage "পরবর্তী শাহী অধ্যায়" Action Buttons
  document.querySelectorAll(".chamber-next-trigger").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!audioSuite.isPlaying) {
        audioSuite.play();
      }
      nextChapter();
    });
  });

  // "প্রথম অধ্যায়ে ফিরে যান" Button
  const restartBtn = document.getElementById("restart-journey-btn");
  if (restartBtn) {
    restartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      goToChapter(0);
    });
  }

  // Gate Entrance Trigger Button
  const enterBtn = document.getElementById("enter-palace-btn");
  if (enterBtn) {
    enterBtn.addEventListener("click", (e) => {
      e.preventDefault();
      audioSuite.play();
      goToChapter(1);
    });
  }

  // Mode Switcher: Floating Circular Button Toggle (Cinematic vs Scroll View)
  if (floatingModeBtn) {
    floatingModeBtn.addEventListener("click", () => {
      isCinematicMode = !isCinematicMode;

      if (isCinematicMode) {
        document.body.classList.add("cinematic-mode");
        document.body.classList.remove("scroll-mode");
        floatingModeBtn.classList.remove("scroll-active");
        floatingModeBtn.title = "স্ক্রল ভিউতে পরিবর্তন করুন";
        if (modeScrollIcon) modeScrollIcon.style.display = "block";
        if (modeSlideIcon) modeSlideIcon.style.display = "none";
        goToChapter(currentChapterIndex, false);
      } else {
        document.body.classList.remove("cinematic-mode");
        document.body.classList.add("scroll-mode");
        floatingModeBtn.classList.add("scroll-active");
        floatingModeBtn.title = "সিনেম্যাটিক স্লাইড মোডে পরিবর্তন করুন";
        if (modeScrollIcon) modeScrollIcon.style.display = "none";
        if (modeSlideIcon) modeSlideIcon.style.display = "block";
        // Reveal all chambers in scroll mode
        chamberElements.forEach((ch) => {
          ch.style.display = "block";
          ch.classList.add("chamber-active");
        });
        if (chamberElements[currentChapterIndex]) {
          chamberElements[currentChapterIndex].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  }

  // Scroll Spy for Scroll Mode: Updates HUD as user scrolls naturally
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -50% 0px",
    threshold: 0.1,
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    if (isCinematicMode) return; // Only active in scroll mode
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const index = chapters.findIndex((ch) => ch.id === id);
        if (index !== -1 && index !== currentChapterIndex) {
          currentChapterIndex = index;
          if (window.RoyalSceneries) {
            window.RoyalSceneries.setChapter(currentChapterIndex);
          } else {
            const layers = document.querySelectorAll(".scenery-layer");
            layers.forEach((layer, idx) => {
              layer.classList.toggle(
                "scenery-active",
                idx === currentChapterIndex,
              );
            });
          }
          stepDots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentChapterIndex);
          });
          if (chapterBadgeText) {
            chapterBadgeText.textContent = chapters[currentChapterIndex].title;
          }
          if (prevBtn) prevBtn.disabled = currentChapterIndex === 0;
          if (nextBtn)
            nextBtn.disabled = currentChapterIndex === chapters.length - 1;
        }
      }
    });
  }, observerOptions);

  chamberElements.forEach((ch) => scrollObserver.observe(ch));

  // Keyboard Navigation (Arrow Keys)
  window.addEventListener("keydown", (e) => {
    if (
      e.key === "ArrowRight" ||
      e.key === "ArrowDown" ||
      e.key === "PageDown"
    ) {
      nextChapter();
    } else if (
      e.key === "ArrowLeft" ||
      e.key === "ArrowUp" ||
      e.key === "PageUp"
    ) {
      prevChapter();
    }
  });

  // Touch Swipe Gesture Detection for Mobile
  let touchStartX = 0;
  let touchStartY = 0;
  window.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    },
    { passive: true },
  );

  window.addEventListener(
    "touchend",
    (e) => {
      if (!isCinematicMode) return;
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          nextChapter();
        } else {
          prevChapter();
        }
      }
    },
    { passive: true },
  );

  // Initial State Setup in Cinematic Mode
  document.body.classList.add("cinematic-mode");
  document.body.classList.remove("scroll-mode");
  goToChapter(0, false);

  // 4. Floating Audio Single Button Control (Spinning when playing / Static when paused)
  const audioBtn =
    document.getElementById("floating-audio-btn") ||
    document.getElementById("floating-audio-widget");
  const localAudioInput = document.getElementById("local-audio-input");

  if (audioBtn) {
    audioBtn.addEventListener("click", (e) => {
      e.preventDefault();
      audioSuite.toggle();
      if (audioSuite.isPlaying) {
        particles.showerLove(25);
      }
    });
  }

  // 100% Local Custom Audio Loader
  if (localAudioInput) {
    localAudioInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const fileUrl = URL.createObjectURL(file);
        audioSuite.customAudio.src = fileUrl;
        audioSuite.mode = "custom";
        audioSuite.play();
      }
    });
  }

  // 5. Interactive Wax Seal & Royal Decree
  const waxSeal = document.getElementById("royal-wax-seal");
  const letterContent = document.getElementById("letter-content");
  const sealHint = document.getElementById("seal-hint");

  if (waxSeal && letterContent) {
    waxSeal.addEventListener("click", () => {
      waxSeal.style.transform = "scale(0.85) rotate(15deg)";
      waxSeal.style.opacity = "0.4";

      setTimeout(() => {
        waxSeal.style.display = "none";
        if (sealHint) sealHint.style.display = "none";
        letterContent.classList.add("opened");
        particles.showerLove(75);
      }, 400);
    });
  }

  // 6. Shower Love / Petal Shower Button
  const showerLoveBtn = document.getElementById("shower-love-btn");
  if (showerLoveBtn) {
    showerLoveBtn.addEventListener("click", () => {
      particles.showerLove(60);
    });
  }

  // 7. 100% Client-Side Private Photo Vault
  const photoPlaceholder = document.getElementById("photo-placeholder");
  const localPhotoInput = document.getElementById("local-photo-input");
  const queenPhoto = document.getElementById("queen-photo");

  const savedPhoto = localStorage.getItem("her_highness_photo");
  if (savedPhoto && queenPhoto && photoPlaceholder) {
    queenPhoto.src = savedPhoto;
    queenPhoto.style.display = "block";
    photoPlaceholder.style.display = "none";
  }

  if (photoPlaceholder && localPhotoInput) {
    photoPlaceholder.addEventListener("click", () => {
      localPhotoInput.click();
    });
  }

  if (localPhotoInput) {
    localPhotoInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const base64Data = event.target.result;
          queenPhoto.src = base64Data;
          queenPhoto.style.display = "block";
          if (photoPlaceholder) photoPlaceholder.style.display = "none";
          try {
            localStorage.setItem("her_highness_photo", base64Data);
          } catch (err) {
            console.log("LocalStorage limit reached for large image.");
          }
          particles.showerLove(45);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 8. Mobile Card Touch Glow Ripple
  document.querySelectorAll(".royal-card, .quote-card").forEach((card) => {
    card.addEventListener("touchstart", () => {
      card.style.borderColor = "rgba(255, 215, 0, 0.8)";
    });
    card.addEventListener("touchend", () => {
      card.style.borderColor = "rgba(212, 175, 55, 0.3)";
    });
  });
});

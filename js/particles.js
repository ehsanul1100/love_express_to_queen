/**
 * PARTICLE ENGINE - "মহারাণীর রাজদরবার"
 * Generates floating golden stardust, ambient embers, and interactive rose petal showers.
 */

class RoyalParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.burstParticles = [];
    this.width = 0;
    this.height = 0;
    this.maxAmbientParticles = 55;

    this.resize();
    this.initAmbientParticles();
    this.bindEvents();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  bindEvents() {
    window.addEventListener("resize", () => this.resize());
  }

  initAmbientParticles() {
    this.particles = [];
    for (let i = 0; i < this.maxAmbientParticles; i++) {
      this.particles.push(this.createAmbientParticle());
    }
  }

  createAmbientParticle() {
    const isGold = Math.random() > 0.3;
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      radius: Math.random() * 2.2 + 0.6,
      color: isGold
        ? `rgba(255, 215, 0, ${Math.random() * 0.6 + 0.2})`
        : `rgba(254, 240, 205, ${Math.random() * 0.5 + 0.2})`,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.5 + 0.2), // gentle upwards drift
      alpha: Math.random() * 0.8 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
      pulseVal: Math.random() * Math.PI,
    };
  }

  /**
   * Shower of Rose Petals & Golden Hearts
   */
  showerLove(count = 60) {
    const colors = [
      "#e11d48",
      "#be123c",
      "#9f1239",
      "#f43f5e",
      "#fb7185", // Rose reds/pinks
      "#ffd700",
      "#f59e0b",
      "#fef08a", // Gold accents
    ];

    for (let i = 0; i < count; i++) {
      const type =
        Math.random() > 0.4
          ? "petal"
          : Math.random() > 0.5
            ? "heart"
            : "sparkle";
      this.burstParticles.push({
        x: Math.random() * this.width,
        y: -20 - Math.random() * 50,
        size: Math.random() * 14 + 10,
        type: type,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 2.5,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4,
        swaySpeed: Math.random() * 0.04 + 0.02,
        swayVal: Math.random() * Math.PI,
        opacity: 1,
        life: 1,
      });
    }
  }

  drawHeart(ctx, x, y, size, color, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    // top left curve
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    // bottom left curve
    ctx.bezierCurveTo(
      -size / 2,
      (size + topCurveHeight) / 2,
      0,
      (size + topCurveHeight) / 2,
      0,
      size,
    );
    // bottom right curve
    ctx.bezierCurveTo(
      0,
      (size + topCurveHeight) / 2,
      size / 2,
      (size + topCurveHeight) / 2,
      size / 2,
      topCurveHeight,
    );
    // top right curve
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.fillStyle = color;
    ctx.globalAlpha = opacity;
    ctx.shadowColor = "rgba(255, 215, 0, 0.4)";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();
  }

  drawPetal(ctx, x, y, size, rotation, color, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.8, size * 0.4, 0, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = opacity;
    ctx.shadowColor = "rgba(159, 18, 57, 0.3)";
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw Ambient Gold Particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.pulseVal += p.pulseSpeed;
      const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulseVal));

      if (p.y < -10 || p.x < -10 || p.x > this.width + 10) {
        this.particles[i] = this.createAmbientParticle();
        this.particles[i].y = this.height + 10;
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color.replace(/[\d\.]+\)$/, `${currentAlpha})`);
      this.ctx.shadowColor = "rgba(255, 215, 0, 0.6)";
      this.ctx.shadowBlur = 6;
      this.ctx.fill();
    }

    // 2. Draw Falling Petals & Hearts (Burst Particles)
    for (let i = this.burstParticles.length - 1; i >= 0; i--) {
      const bp = this.burstParticles[i];
      bp.swayVal += bp.swaySpeed;
      bp.x += bp.vx + Math.sin(bp.swayVal) * 1.5;
      bp.y += bp.vy;
      bp.rotation += bp.rotationSpeed;

      if (bp.y > this.height - 40) {
        bp.opacity -= 0.025;
      }

      if (bp.opacity <= 0 || bp.y > this.height + 20) {
        this.burstParticles.splice(i, 1);
        continue;
      }

      if (bp.type === "heart") {
        this.drawHeart(this.ctx, bp.x, bp.y, bp.size, bp.color, bp.opacity);
      } else if (bp.type === "petal") {
        this.drawPetal(
          this.ctx,
          bp.x,
          bp.y,
          bp.size,
          bp.rotation,
          bp.color,
          bp.opacity,
        );
      } else {
        // Sparkle
        this.ctx.beginPath();
        this.ctx.arc(bp.x, bp.y, bp.size * 0.3, 0, Math.PI * 2);
        this.ctx.fillStyle = bp.color;
        this.ctx.globalAlpha = bp.opacity;
        this.ctx.shadowColor = "rgba(255, 215, 0, 0.8)";
        this.ctx.shadowBlur = 10;
        this.ctx.fill();
      }
    }

    requestAnimationFrame(this.animate);
  }
}

// Global exposure
window.RoyalParticleEngine = RoyalParticleEngine;

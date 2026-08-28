/**
 * ============================================================================
 * ROYAL ARCHITECTURAL SCENERIES MODULE (শাহী স্থাপত্য দৃশ্যপট ইঞ্জিন)
 * Procedural Sultanate Vector Backdrops & Layer Cross-Fader
 * 100% Offline & Standalone
 * ============================================================================
 */

(function () {
  "use strict";

  const sceneriesMarkup = `
<!-- ==========================================================================
       ROYAL ARCHITECTURAL SCENERY STAGE (Fixed Dynamic Backdrops)
       ========================================================================== -->
    <div
      id="royal-scenery-stage"
      class="royal-scenery-stage"
      aria-hidden="true"
    >
      <!-- 1. Royal Gate Scenery (শাহী তোরণ ও দুর্গদ্বার) -->
      <div class="scenery-layer scenery-active" id="scenery-gate">
        <svg
          class="scenery-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="skyGrad1" cx="50%" cy="30%" r="75%">
              <stop offset="0%" stop-color="#3d0a27" />
              <stop offset="45%" stop-color="#1c0412" />
              <stop offset="100%" stop-color="#080106" />
            </radialGradient>
            <radialGradient id="lanternGlowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffe899" stop-opacity="1" />
              <stop offset="40%" stop-color="#ffb833" stop-opacity="0.8" />
              <stop offset="80%" stop-color="#d4af37" stop-opacity="0.2" />
              <stop offset="100%" stop-color="#d4af37" stop-opacity="0" />
            </radialGradient>
            <linearGradient
              id="gateStoneGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#240719" />
              <stop offset="50%" stop-color="#14020e" />
              <stop offset="100%" stop-color="#0a0107" />
            </linearGradient>
            <linearGradient id="gateGoldTrim" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fceda6" />
              <stop offset="50%" stop-color="#d4af37" />
              <stop offset="100%" stop-color="#805d0c" />
            </linearGradient>
          </defs>
          <!-- Celestial Starlit Sky -->
          <rect width="1440" height="900" fill="url(#skyGrad1)" />
          <!-- Starry Constellation Embers -->
          <g fill="#fceda6" opacity="0.65">
            <circle cx="200" cy="120" r="1.5" />
            <circle cx="340" cy="80" r="2" />
            <circle cx="520" cy="140" r="1" />
            <circle cx="720" cy="60" r="2.5" />
            <circle cx="890" cy="110" r="1.8" />
            <circle cx="1120" cy="90" r="2" />
            <circle cx="1280" cy="150" r="1.5" />
            <circle cx="150" cy="220" r="1.2" />
            <circle cx="1320" cy="240" r="1.6" />
          </g>
          <!-- Crescent Moon -->
          <g class="scenery-moon" transform="translate(1080, 110)">
            <circle
              cx="0"
              cy="0"
              r="42"
              fill="rgba(255, 235, 170, 0.12)"
            />
            <path
              d="M-15,-30 A 35,35 0 0,0 20,25 A 28,28 0 1,1 -15,-30 Z"
              fill="url(#gateGoldTrim)"
            />
          </g>
          <!-- Distant Fortress Ramparts -->
          <path
            d="M0,520 L0,420 L80,420 L80,440 L160,440 L160,420 L240,420 L240,440 L320,440 L320,420 L400,420 L400,520 Z"
            fill="#12030d"
            opacity="0.8"
          />
          <path
            d="M1040,520 L1040,420 L1120,420 L1120,440 L1200,440 L1200,420 L1280,420 L1280,440 L1360,440 L1360,420 L1440,420 L1440,520 Z"
            fill="#12030d"
            opacity="0.8"
          />
          <!-- Monumental Sultanate Pointed Arch Gatehouse -->
          <g
            fill="url(#gateStoneGrad)"
            stroke="url(#gateGoldTrim)"
            stroke-width="2"
          >
            <!-- Left Tower Bastion -->
            <path
              d="M0,900 L0,280 L60,260 L120,280 L180,260 L240,280 L300,260 L360,280 L380,310 L380,900 Z"
            />
            <!-- Right Tower Bastion -->
            <path
              d="M1060,900 L1060,310 L1080,280 L1140,260 L1200,280 L1260,260 L1320,280 L1380,260 L1440,280 L1440,900 Z"
            />
            <!-- Central Arch Portal Header & Spandrels -->
            <path d="M380,900 L380,310 L720,130 L1060,310 L1060,900 Z" />
            <!-- Moorish Pointed Portal Arch Opening -->
            <path
              d="M480,900 L480,480 C480,320 580,210 720,180 C860,210 960,320 960,480 L960,900 Z"
              fill="#080106"
              stroke="url(#gateGoldTrim)"
              stroke-width="3"
            />
            <!-- Multi-Cusped Scalloped Inner Arch Trim -->
            <path
              d="M510,900 L510,500 C510,440 540,410 560,380 C590,350 630,310 670,270 C700,240 720,215 720,215 C720,215 740,240 770,270 C810,310 850,350 880,380 C900,410 930,440 930,500 L930,900"
              fill="none"
              stroke="url(#gateGoldTrim)"
              stroke-width="2"
              stroke-dasharray="8,6"
              opacity="0.85"
            />
          </g>
                    <!-- Subtle Islamic Floral Calligraphy Wall Inlay (Spandrels & Bastions) -->
          <g stroke="url(#gateGoldTrim)" stroke-width="1.2" fill="none" opacity="0.26">
            <!-- Left Arch Spandrel Floral Tendril -->
            <path d="M400,300 C450,260 520,240 580,210 C630,185 670,165 700,150" />
            <path d="M460,265 C480,250 510,260 500,240 C490,225 470,240 460,265 Z" fill="url(#gateGoldTrim)" opacity="0.35" />
            <path d="M570,215 C590,200 620,210 610,190 C600,175 580,190 570,215 Z" fill="url(#gateGoldTrim)" opacity="0.35" />
            <circle cx="500" cy="240" r="2" fill="url(#gateGoldTrim)" />
            <circle cx="610" cy="190" r="2" fill="url(#gateGoldTrim)" />
            <!-- Right Arch Spandrel Floral Tendril -->
            <path d="M1040,300 C990,260 920,240 860,210 C810,185 770,165 740,150" />
            <path d="M980,265 C960,250 930,260 940,240 C950,225 970,240 980,265 Z" fill="url(#gateGoldTrim)" opacity="0.35" />
            <path d="M870,215 C850,200 820,210 830,190 C840,175 860,190 870,215 Z" fill="url(#gateGoldTrim)" opacity="0.35" />
            <circle cx="940" cy="240" r="2" fill="url(#gateGoldTrim)" />
            <circle cx="830" cy="190" r="2" fill="url(#gateGoldTrim)" />
            <!-- Left Tower Wall Calligraphic Flower Rosette -->
            <g transform="translate(170, 720)">
              <circle cx="0" cy="0" r="42" stroke-dasharray="4,4" />
              <circle cx="0" cy="0" r="28" />
              <path d="M0,-24 C-6,-12 6,-12 0,0 C-6,12 6,12 0,24" />
              <path d="M-24,0 C-12,-6 -12,6 0,0 C12,-6 12,6 24,0" />
              <circle cx="0" cy="0" r="4" fill="url(#gateGoldTrim)" opacity="0.5" />
            </g>
            <!-- Right Tower Wall Calligraphic Flower Rosette -->
            <g transform="translate(1270, 720)">
              <circle cx="0" cy="0" r="42" stroke-dasharray="4,4" />
              <circle cx="0" cy="0" r="28" />
              <path d="M0,-24 C-6,-12 6,-12 0,0 C-6,12 6,12 0,24" />
              <path d="M-24,0 C-12,-6 -12,6 0,0 C12,-6 12,6 24,0" />
              <circle cx="0" cy="0" r="4" fill="url(#gateGoldTrim)" opacity="0.5" />
            </g>
          </g>
          <!-- Ornate Mashrabiya Geometry on Towers -->
          <g
            stroke="url(#gateGoldTrim)"
            stroke-width="1.2"
            fill="none"
            opacity="0.35"
          >
            <rect x="80" y="360" width="180" height="280" rx="8" />
            <path
              d="M80,360 L260,640 M260,360 L80,640 M170,360 L170,640 M80,500 L260,500"
            />
            <rect x="1180" y="360" width="180" height="280" rx="8" />
            <path
              d="M1180,360 L1360,640 M1360,360 L1180,640 M1270,360 L1270,640 M1180,500 L1360,500"
            />
          </g>
          <!-- Hanging Sultanate Brass Lanterns & Light Beams -->
          <g class="scenery-lantern">
            <!-- Left Lantern -->
            <line
              x1="430"
              y1="310"
              x2="430"
              y2="440"
              stroke="url(#gateGoldTrim)"
              stroke-width="2.5"
            />
            <circle cx="430" cy="460" r="75" fill="url(#lanternGlowGrad)" />
            <path
              d="M415,440 L445,440 L450,470 L430,490 L410,470 Z"
              fill="#ffd700"
              stroke="#997920"
              stroke-width="1.5"
            />
            <polygon
              points="410,460 300,900 560,900 450,460"
              fill="url(#lanternGlowGrad)"
              opacity="0.18"
            />
            <!-- Right Lantern -->
            <line
              x1="1010"
              y1="310"
              x2="1010"
              y2="440"
              stroke="url(#gateGoldTrim)"
              stroke-width="2.5"
            />
            <circle cx="1010" cy="460" r="75" fill="url(#lanternGlowGrad)" />
            <path
              d="M995,440 L1025,440 L1030,470 L1010,490 L990,470 Z"
              fill="#ffd700"
              stroke="#997920"
              stroke-width="1.5"
            />
            <polygon
              points="990,460 880,900 1140,900 1030,460"
              fill="url(#lanternGlowGrad)"
              opacity="0.18"
            />
          </g>
        </svg>
      </div>

      <!-- 2. Palace Courtyard Scenery (শাহী মহল প্রাঙ্গণ ও গম্বুজ) -->
      <div class="scenery-layer" id="scenery-proclamation">
        <svg
          class="scenery-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="palaceSky" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#460c2e" />
              <stop offset="50%" stop-color="#1f0415" />
              <stop offset="100%" stop-color="#0b0108" />
            </radialGradient>
            <linearGradient id="palaceGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fceda6" />
              <stop offset="50%" stop-color="#d4af37" />
              <stop offset="100%" stop-color="#7a5506" />
            </linearGradient>
            <linearGradient id="marbleColumn" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#2a091e" />
              <stop offset="50%" stop-color="#4a1235" />
              <stop offset="100%" stop-color="#180411" />
            </linearGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#palaceSky)" />
          <!-- Distant Illuminated Palace Domes & Minarets -->
          <g
            fill="#160310"
            stroke="url(#palaceGold)"
            stroke-width="1.5"
            opacity="0.85"
          >
            <!-- Central Onion Dome -->
            <path
              d="M640,360 C640,240 680,180 720,120 C760,180 800,240 800,360 Z"
              fill="#29071c"
            />
            <path
              d="M718,120 L722,120 L720,70"
              stroke="url(#palaceGold)"
              stroke-width="2.5"
            />
            <circle cx="720" cy="65" r="5" fill="url(#palaceGold)" />
            <!-- Flanking Cupolas -->
            <path
              d="M460,380 C460,290 490,240 520,200 C550,240 580,290 580,380 Z"
              fill="#200516"
            />
            <path
              d="M860,380 C860,290 890,240 920,200 C950,240 980,290 980,380 Z"
              fill="#200516"
            />
            <!-- Minarets -->
            <rect x="360" y="160" width="24" height="240" fill="#1f0516" />
            <path
              d="M356,160 C356,120 372,90 372,90 C372,90 388,120 388,160 Z"
              fill="url(#palaceGold)"
            />
            <rect x="1056" y="160" width="24" height="240" fill="#1f0516" />
            <path
              d="M1052,160 C1052,120 1068,90 1068,90 C1068,90 1084,120 1084,160 Z"
              fill="url(#palaceGold)"
            />
          </g>
          <!-- Grand Colonnade Portico (Side Archways) -->
          <g fill="none" stroke="url(#palaceGold)" stroke-width="2.5">
            <!-- Left Colonnade Arches -->
            <path
              d="M0,520 L0,380 C0,380 70,300 140,380 L140,900"
              fill="url(#marbleColumn)"
            />
            <path
              d="M140,520 L140,380 C140,380 210,300 280,380 L280,900"
              fill="url(#marbleColumn)"
            />
            <path
              d="M280,520 L280,380 C280,380 350,300 420,380 L420,900"
              fill="url(#marbleColumn)"
            />
            <!-- Right Colonnade Arches -->
            <path
              d="M1440,520 L1440,380 C1440,380 1370,300 1300,380 L1300,900"
              fill="url(#marbleColumn)"
            />
            <path
              d="M1300,520 L1300,380 C1300,380 1230,300 1160,380 L1160,900"
              fill="url(#marbleColumn)"
            />
            <path
              d="M1160,520 L1160,380 C1160,380 1090,300 1020,380 L1020,900"
              fill="url(#marbleColumn)"
            />
          </g>
                    <!-- Subtle Floral Calligraphy Wall Inlay on Colonnade Spandrels -->
          <g stroke="url(#palaceGold)" stroke-width="1.2" fill="none" opacity="0.25">
            <path d="M70,320 C90,300 120,300 140,320" />
            <circle cx="105" cy="305" r="3" fill="url(#palaceGold)" opacity="0.4" />
            <path d="M210,320 C230,300 260,300 280,320" />
            <circle cx="245" cy="305" r="3" fill="url(#palaceGold)" opacity="0.4" />
            <path d="M1230,320 C1250,300 1280,300 1300,320" />
            <circle cx="1265" cy="305" r="3" fill="url(#palaceGold)" opacity="0.4" />
            <path d="M1090,320 C1110,300 1140,300 1160,320" />
            <circle cx="1125" cy="305" r="3" fill="url(#palaceGold)" opacity="0.4" />
          </g>
          <!-- Central Marble Reflective Pool with Ripple Waves -->
          <g class="scenery-water">
            <ellipse
              cx="720"
              cy="740"
              rx="340"
              ry="110"
              fill="#12020d"
              stroke="url(#palaceGold)"
              stroke-width="2"
            />
            <ellipse
              cx="720"
              cy="740"
              rx="310"
              ry="95"
              fill="rgba(212, 175, 55, 0.12)"
            />
            <path
              d="M520,740 Q720,710 920,740 Q720,770 520,740 Z"
              fill="rgba(255, 235, 170, 0.18)"
            />
            <path
              d="M600,750 Q720,735 840,750"
              stroke="url(#palaceGold)"
              stroke-width="1.5"
              fill="none"
              opacity="0.6"
            />
          </g>
        </svg>
      </div>

      <!-- 3. Courtroom & Diwan-e-Khas Scenery (দরবার-ই-আম ও দিওয়ান-ই-খাস) -->
      <div class="scenery-layer" id="scenery-poetry">
        <svg
          class="scenery-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="courtSky" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#4f0c33" />
              <stop offset="50%" stop-color="#240518" />
              <stop offset="100%" stop-color="#0c0108" />
            </radialGradient>
            <radialGradient id="chandelierRadial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fff6cc" stop-opacity="1" />
              <stop offset="35%" stop-color="#ffd700" stop-opacity="0.85" />
              <stop offset="70%" stop-color="#d4af37" stop-opacity="0.3" />
              <stop offset="100%" stop-color="#d4af37" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="curtainWine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#540836" />
              <stop offset="35%" stop-color="#2c041c" />
              <stop offset="70%" stop-color="#690e44" />
              <stop offset="100%" stop-color="#18020f" />
            </linearGradient>
            <linearGradient id="goldTracer" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fff1b8" />
              <stop offset="50%" stop-color="#d4af37" />
              <stop offset="100%" stop-color="#805d0c" />
            </linearGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#courtSky)" />
          <!-- Mashrabiya Geometric Star Lattice Panels on Side Wings -->
          <g
            stroke="url(#goldTracer)"
            stroke-width="1.2"
            fill="none"
            opacity="0.35"
          >
            <pattern
              id="girihStarPattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30,0 L40,20 L60,30 L40,40 L30,60 L20,40 L0,30 L20,20 Z"
                fill="rgba(212, 175, 55, 0.08)"
                stroke="url(#goldTracer)"
                stroke-width="0.8"
              />
            </pattern>
            <rect
              x="60"
              y="180"
              width="260"
              height="580"
              rx="12"
              fill="url(#girihStarPattern)"
              stroke="url(#goldTracer)"
              stroke-width="2"
            />
            <rect
              x="1120"
              y="180"
              width="260"
              height="580"
              rx="12"
              fill="url(#girihStarPattern)"
              stroke="url(#goldTracer)"
              stroke-width="2"
            />
          </g>
                    <!-- Subtle Floral Calligraphy Wall Inlay around Upper Wall & Lattice -->
          <g stroke="url(#goldTracer)" stroke-width="1" fill="none" opacity="0.25">
            <path d="M100,160 C140,120 180,140 220,100" />
            <circle cx="160" cy="130" r="3.5" fill="url(#goldTracer)" opacity="0.4" />
            <path d="M1340,160 C1300,120 1260,140 1220,100" />
            <circle cx="1280" cy="130" r="3.5" fill="url(#goldTracer)" opacity="0.4" />
          </g>
          <!-- Majestic Ottoman Multi-Tiered Crystal Chandelier -->
          <g class="scenery-chandelier">
            <line
              x1="720"
              y1="0"
              x2="720"
              y2="150"
              stroke="url(#goldTracer)"
              stroke-width="3.5"
            />
            <circle
              cx="720"
              cy="200"
              r="140"
              fill="url(#chandelierRadial)"
              opacity="0.75"
            />
            <!-- Tier 1 Crown -->
            <ellipse
              cx="720"
              cy="150"
              rx="60"
              ry="14"
              fill="url(#goldTracer)"
            />
            <!-- Tier 2 Ring -->
            <ellipse
              cx="720"
              cy="190"
              rx="110"
              ry="24"
              fill="none"
              stroke="url(#goldTracer)"
              stroke-width="3"
            />
            <!-- Tier 3 Ring -->
            <ellipse
              cx="720"
              cy="230"
              rx="70"
              ry="16"
              fill="none"
              stroke="url(#goldTracer)"
              stroke-width="2.5"
            />
            <!-- Hanging Crystal Prisms -->
            <g stroke="url(#goldTracer)" stroke-width="1.5" fill="#fff9d6">
              <polygon points="720,230 716,270 720,285 724,270" />
              <polygon points="680,225 677,255 680,268 683,255" />
              <polygon points="760,225 757,255 760,268 763,255" />
              <polygon points="640,195 637,235 640,248 643,235" />
              <polygon points="800,195 797,235 800,248 803,235" />
            </g>
          </g>
          <!-- Imperial Draped Velvet Curtains with Gold Tiebacks -->
          <g
            fill="url(#curtainWine)"
            stroke="url(#goldTracer)"
            stroke-width="2"
          >
            <!-- Left Curtain Drape -->
            <path
              d="M0,0 L320,0 C300,160 260,340 180,480 C120,580 40,720 0,900 Z"
            />
            <circle cx="160" cy="490" r="14" fill="url(#goldTracer)" />
            <!-- Right Curtain Drape -->
            <path
              d="M1440,0 L1120,0 C1140,160 1180,340 1260,480 C1320,580 1400,720 1440,900 Z"
            />
            <circle cx="1280" cy="490" r="14" fill="url(#goldTracer)" />
          </g>
        </svg>
      </div>

      <!-- 4. Queen's Rose Garden Scenery (মালিকার গোলাপ মহল ও মার্বেল বারান্দা) -->
      <div class="scenery-layer" id="scenery-virtues">
        <svg
          class="scenery-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="gardenSky" cx="50%" cy="30%" r="75%">
              <stop offset="0%" stop-color="#3b092a" />
              <stop offset="50%" stop-color="#190313" />
              <stop offset="100%" stop-color="#080107" />
            </radialGradient>
            <linearGradient id="marbleJali" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#300720" />
              <stop offset="50%" stop-color="#57113b" />
              <stop offset="100%" stop-color="#240417" />
            </linearGradient>
            <linearGradient id="goldRailing" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fceda6" />
              <stop offset="50%" stop-color="#d4af37" />
              <stop offset="100%" stop-color="#805d0c" />
            </linearGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#gardenSky)" />
          <!-- Distant Starlit Garden Chhatri Pavilion -->
          <g
            fill="#180413"
            stroke="url(#goldRailing)"
            stroke-width="1.2"
            opacity="0.8"
          >
            <path
              d="M660,340 C660,260 690,210 720,170 C750,210 780,260 780,340 Z"
              fill="#2b0720"
            />
            <line
              x1="680"
              y1="340"
              x2="680"
              y2="440"
              stroke="url(#goldRailing)"
              stroke-width="2"
            />
            <line
              x1="720"
              y1="340"
              x2="720"
              y2="440"
              stroke="url(#goldRailing)"
              stroke-width="2"
            />
            <line
              x1="760"
              y1="340"
              x2="760"
              y2="440"
              stroke="url(#goldRailing)"
              stroke-width="2"
            />
          </g>
          <!-- Tall Cypress Tree Silhouettes -->
          <g fill="#0e020b" opacity="0.9">
            <path
              d="M120,600 C120,400 150,260 160,180 C170,260 200,400 200,600 Z"
            />
            <path
              d="M220,600 C220,430 240,310 250,240 C260,310 280,430 280,600 Z"
            />
            <path
              d="M1240,600 C1240,400 1270,260 1280,180 C1290,260 1320,400 1320,600 Z"
            />
            <path
              d="M1160,600 C1160,430 1180,310 1190,240 C1200,310 1220,430 1220,600 Z"
            />
          </g>
          <!-- Blooming Damascus Rose Vines with Glowing Embers -->
          <g fill="#7a1040" stroke="#ffd700" stroke-width="1">
            <!-- Left Rose Foliage -->
            <circle cx="80" cy="520" r="14" opacity="0.85" />
            <circle cx="130" cy="480" r="16" opacity="0.9" />
            <circle cx="170" cy="540" r="12" opacity="0.8" />
            <circle cx="110" cy="570" r="15" opacity="0.85" />
            <!-- Right Rose Foliage -->
            <circle cx="1360" cy="520" r="14" opacity="0.85" />
            <circle cx="1310" cy="480" r="16" opacity="0.9" />
            <circle cx="1270" cy="540" r="12" opacity="0.8" />
            <circle cx="1330" cy="570" r="15" opacity="0.85" />
          </g>
                    <!-- Subtle Floral Wall & Balustrade Carving -->
          <g stroke="url(#goldRailing)" stroke-width="1" fill="none" opacity="0.25">
            <path d="M160,780 C200,760 240,780 280,760" />
            <circle cx="220" cy="768" r="4" fill="url(#goldRailing)" opacity="0.4" />
            <path d="M1160,780 C1200,760 1240,780 1280,760" />
            <circle cx="1220" cy="768" r="4" fill="url(#goldRailing)" opacity="0.4" />
          </g>
          <!-- Carved Jali Marble Terrace Balustrade -->
          <g
            fill="url(#marbleJali)"
            stroke="url(#goldRailing)"
            stroke-width="2"
          >
            <rect x="0" y="660" width="1440" height="240" />
            <!-- Top Railing Rail -->
            <rect
              x="0"
              y="640"
              width="1440"
              height="25"
              fill="url(#goldRailing)"
            />
            <!-- Jali Openwork Screen Cutouts -->
            <g
              fill="none"
              stroke="url(#goldRailing)"
              stroke-width="1.5"
              opacity="0.6"
            >
              <pattern
                id="jaliFloralPattern"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="25" cy="25" r="12" />
                <path
                  d="M25,5 L25,45 M5,25 L45,25 M11,11 L39,39 M11,39 L39,11"
                />
              </pattern>
              <rect
                x="40"
                y="675"
                width="1360"
                height="150"
                fill="url(#jaliFloralPattern)"
              />
            </g>
          </g>
        </svg>
      </div>

      <!-- 5. Royal Keepsake Vault Scenery (শাহী খাস কামরা ও রত্নভাণ্ডার) -->
      <div class="scenery-layer" id="scenery-vault">
        <svg
          class="scenery-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="vaultSky" cx="50%" cy="30%" r="75%">
              <stop offset="0%" stop-color="#4a0d2f" />
              <stop offset="50%" stop-color="#1d0413" />
              <stop offset="100%" stop-color="#090107" />
            </radialGradient>
            <linearGradient id="vaultStone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#380925" />
              <stop offset="50%" stop-color="#1a0412" />
              <stop offset="100%" stop-color="#0b0108" />
            </linearGradient>
            <linearGradient id="goldFiligree" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fceda6" />
              <stop offset="50%" stop-color="#d4af37" />
              <stop offset="100%" stop-color="#805d0c" />
            </linearGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#vaultSky)" />
          <!-- Triple Vaulted Panoramic Arches to Starlit Horizon -->
          <g fill="none" stroke="url(#goldFiligree)" stroke-width="2.5">
            <!-- Left Arch -->
            <path
              d="M40,900 L40,420 C40,280 140,200 260,200 C380,200 480,280 480,420 L480,900"
              fill="url(#vaultStone)"
            />
            <!-- Center Grand Arch -->
            <path
              d="M440,900 L440,360 C440,200 560,110 720,110 C880,110 1000,200 1000,360 L1000,900"
              fill="#12020d"
            />
            <!-- Right Arch -->
            <path
              d="M960,900 L960,420 C960,280 1060,200 1180,200 C1300,200 1400,280 1400,420 L1400,900"
              fill="url(#vaultStone)"
            />
          </g>
                    <!-- Subtle Floral Calligraphy Wall Inlays in Vault Ceilings -->
          <g stroke="url(#goldFiligree)" stroke-width="1.2" fill="none" opacity="0.25">
            <path d="M220,180 C240,160 280,160 300,180" />
            <circle cx="260" cy="168" r="3" fill="url(#goldFiligree)" opacity="0.4" />
            <path d="M1140,180 C1160,160 1200,160 1220,180" />
            <circle cx="1180" cy="168" r="3" fill="url(#goldFiligree)" opacity="0.4" />
          </g>
          <!-- Ornate Muqarnas Stalactite Corbel Details in Vault Ceilings -->
          <g fill="url(#goldFiligree)" opacity="0.75">
            <polygon points="720,110 710,135 730,135" />
            <polygon points="680,125 672,145 688,145" />
            <polygon points="760,125 752,145 768,145" />
          </g>
          <!-- Hanging Ambient Amber Lanterns -->
          <g class="scenery-lantern">
            <line
              x1="260"
              y1="200"
              x2="260"
              y2="340"
              stroke="url(#goldFiligree)"
              stroke-width="2"
            />
            <circle cx="260" cy="355" r="50" fill="url(#lanternGlowGrad)" />
            <path
              d="M248,340 L272,340 L276,365 L260,380 L244,365 Z"
              fill="#ffd700"
            />
            <line
              x1="1180"
              y1="200"
              x2="1180"
              y2="340"
              stroke="url(#goldFiligree)"
              stroke-width="2"
            />
            <circle cx="1180" cy="355" r="50" fill="url(#lanternGlowGrad)" />
            <path
              d="M1168,340 L1192,340 L1196,365 L1180,380 L1164,365 Z"
              fill="#ffd700"
            />
          </g>
        </svg>
      </div>

      <!-- 6. Sultan's Inner Sanctuary Scenery (নিভৃত খাস ইবাদতখানা ও সীলমোহর কক্ষ) -->
      <div class="scenery-layer" id="scenery-decree">
        <svg
          class="scenery-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="sanctuarySky" cx="50%" cy="30%" r="75%">
              <stop offset="0%" stop-color="#540c39" />
              <stop offset="50%" stop-color="#240419" />
              <stop offset="100%" stop-color="#0a0107" />
            </radialGradient>
            <linearGradient id="mihrabGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fff1b8" />
              <stop offset="45%" stop-color="#d4af37" />
              <stop offset="100%" stop-color="#7a5506" />
            </linearGradient>
            <radialGradient id="candleHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fff4b8" stop-opacity="1" />
              <stop offset="40%" stop-color="#ffb833" stop-opacity="0.8" />
              <stop offset="75%" stop-color="#d4af37" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#d4af37" stop-opacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#sanctuarySky)" />
          <!-- Sacred Multi-Tiered Pointed Horseshoe Mihrab Arch -->
          <g fill="#180312" stroke="url(#mihrabGold)" stroke-width="2.5">
            <!-- Outer Mihrab Arch -->
            <path
              d="M380,900 L380,440 C380,240 500,120 720,90 C940,120 1060,240 1060,440 L1060,900 Z"
            />
            <!-- Middle Niche Arch -->
            <path
              d="M450,900 L450,470 C450,300 540,190 720,160 C900,190 990,300 990,470 L990,900 Z"
              fill="#24051b"
            />
            <!-- Inner Sanctum Arch with Radiant Sacred Geometry -->
            <path
              d="M520,900 L520,500 C520,360 590,260 720,230 C850,260 920,360 920,500 L920,900 Z"
              fill="#12020d"
              stroke-width="3"
            />
          </g>
                    <!-- Subtle Floral Arabesque Calligraphy Wall Inlay on Mihrab Spandrels -->
          <g stroke="url(#mihrabGold)" stroke-width="1.2" fill="none" opacity="0.28">
            <!-- Left Spandrel Vine -->
            <path d="M400,420 C420,340 480,240 560,180 C620,140 680,120 710,105" />
            <path d="M460,300 C480,285 505,295 495,275 C485,260 465,275 460,300 Z" fill="url(#mihrabGold)" opacity="0.35" />
            <path d="M570,200 C590,185 615,195 605,175 C595,160 575,175 570,200 Z" fill="url(#mihrabGold)" opacity="0.35" />
            <!-- Right Spandrel Vine -->
            <path d="M1040,420 C1020,340 960,240 880,180 C820,140 760,120 730,105" />
            <path d="M980,300 C960,285 935,295 945,275 C955,260 975,275 980,300 Z" fill="url(#mihrabGold)" opacity="0.35" />
            <path d="M870,200 C850,185 825,195 835,175 C845,160 865,175 870,200 Z" fill="url(#mihrabGold)" opacity="0.35" />
          </g>
          <!-- Sacred Girih Arabesque 8-Pointed Star Rosette -->
          <g
            stroke="url(#mihrabGold)"
            stroke-width="1.8"
            fill="none"
            opacity="0.75"
            transform="translate(720, 360)"
          >
            <circle cx="0" cy="0" r="65" />
            <polygon
              points="0,-60 42,-42 60,0 42,42 0,60 -42,42 -60,0 -42,-42"
              stroke-width="2"
            />
            <polygon
              points="-42,-42 0,-60 42,-42 60,0 42,42 0,60 -42,42 -60,0"
              transform="rotate(45)"
              stroke-width="2"
            />
            <circle cx="0" cy="0" r="18" fill="url(#mihrabGold)" />
          </g>
          <!-- Tall Royal Candelabras & Flickering Flame Halos -->
          <g class="scenery-lantern">
            <!-- Left Candelabra Tier -->
            <line
              x1="280"
              y1="460"
              x2="280"
              y2="760"
              stroke="url(#mihrabGold)"
              stroke-width="3.5"
            />
            <circle cx="280" cy="445" r="45" fill="url(#candleHalo)" />
            <ellipse cx="280" cy="445" rx="5" ry="12" fill="#fffbe6" />
            <line
              x1="230"
              y1="510"
              x2="230"
              y2="760"
              stroke="url(#mihrabGold)"
              stroke-width="2.5"
            />
            <circle cx="230" cy="495" r="35" fill="url(#candleHalo)" />
            <ellipse cx="230" cy="495" rx="4" ry="10" fill="#fffbe6" />
            <!-- Right Candelabra Tier -->
            <line
              x1="1160"
              y1="460"
              x2="1160"
              y2="760"
              stroke="url(#mihrabGold)"
              stroke-width="3.5"
            />
            <circle cx="1160" cy="445" r="45" fill="url(#candleHalo)" />
            <ellipse cx="1160" cy="445" rx="5" ry="12" fill="#fffbe6" />
            <line
              x1="1210"
              y1="510"
              x2="1210"
              y2="760"
              stroke="url(#mihrabGold)"
              stroke-width="2.5"
            />
            <circle cx="1210" cy="495" r="35" fill="url(#candleHalo)" />
            <ellipse cx="1210" cy="495" rx="4" ry="10" fill="#fffbe6" />
          </g>
        </svg>
      </div>
    </div>
`;

  let sceneryLayers = [];

  function initSceneries() {
    if (document.getElementById("royal-scenery-stage")) {
      sceneryLayers = document.querySelectorAll(".scenery-layer");
      return;
    }

    const stageWrapper = document.createElement("div");
    stageWrapper.innerHTML = sceneriesMarkup.trim();
    const stageEl = stageWrapper.firstElementChild;

    const particleCanvas = document.getElementById("particle-canvas");
    if (particleCanvas && particleCanvas.parentNode) {
      particleCanvas.parentNode.insertBefore(
        stageEl,
        particleCanvas.nextSibling,
      );
    } else {
      document.body.prepend(stageEl);
    }

    sceneryLayers = document.querySelectorAll(".scenery-layer");
  }

  function setChapter(index) {
    if (!sceneryLayers || !sceneryLayers.length) {
      sceneryLayers = document.querySelectorAll(".scenery-layer");
    }
    sceneryLayers.forEach((layer, idx) => {
      layer.classList.toggle("scenery-active", idx === index);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSceneries);
  } else {
    initSceneries();
  }

  window.RoyalSceneries = {
    init: initSceneries,
    setChapter: setChapter,
  };
})();

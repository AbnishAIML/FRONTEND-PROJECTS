<div align="center">

# 🎵 DRUM — Indian Music Studio

**A neon-lit virtual swara synthesizer for the eight notes of Indian classical music**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Web Audio API](https://img.shields.io/badge/Web%20Audio-149ECA?style=for-the-badge&logo=web&logoColor=white)
![No Dependencies](https://img.shields.io/badge/Zero%20Dependencies-00C98B?style=for-the-badge)

</div>

---

**DRUM** is a lightweight, browser-based music instrument that puts the timeless **Saptak** — the eight swaras of Indian classical music — at your fingertips. Strike the pads with your mouse or play the physical keyboard to summon pure sine waves through the **Web Audio API**, all wrapped in a sleek, futuristic cyberpunk interface.

> 🪕 *Sa Re Ga Ma Pa Dha Ni Sa* — the building blocks of melody, reimagined for the digital age.

---

## ✨ Features

- 🎹 **Complete Saptak** — all eight swaras mapped to a vibrant, color-coded pad
- ⌨️ **Keyboard playable** — press `1`–`8` to trigger notes, just like a real instrument
- 🖱️ **Mouse & touch friendly** — click any pad to play
- 📡 **Pure Web Audio synthesis** — no samples, no files, no external audio assets; every tone is generated live with oscillators and exponential gain envelopes
- 🌌 **Neon cyberpunk aesthetic** — dark ambience, glowing pads, and the futuristic *Orbitron* typeface
- 📱 **Fully responsive** — a fluid grid that adapts gracefully from desktop to mobile
- ⚡ **Zero dependencies, zero build step** — works straight out of the box
- 🔒 **Playback integrity** — active-key highlighting, keyboard key-repeat suppression, and automatic audio-context resume

---

## 🗂️ Tech Stack

| Layer | Technology |
|------|------------|
| **Markup** | Semantic HTML5 |
| **Styling** | CSS3 with custom properties (CSS variables) |
| **Logic** | Vanilla JavaScript (ES6) |
| **Audio** | Web Audio API — `AudioContext`, `OscillatorNode`, `GainNode` |

No frameworks. No build tools. No package managers. Just the web platform at its purest.

---

## 🚀 Getting Started

### Prerequisites

A modern web browser (Chrome, Edge, Firefox, or Safari). That's it.

### Running the project

Since DRUM is a static site, you have two options:

**Option A — Just open it (quickest):**

Double-click `index.html` and the studio loads instantly.

**Option B — Serve it locally (recommended):**

```bash
# Using Python
python -m http.server 8000

# Using Node.js (with npx)
npx serve .
```

Then visit **http://localhost:8000** in your browser.

---

## 🎮 Usage

| Action | How |
|--------|-----|
| **Play a note** | Click any pad on the board |
| **Play with the keyboard** | Press `1` to `8` |
| **Aesthetic feedback** | The active pad lights up as it sounds |

### Note map

| Key | Swara | Frequency (Hz) |
|-----|-------|----------------|
| `1` | **Sa** | 261.63 |
| `2` | **Re** | 293.66 |
| `3` | **Ga** | 329.63 |
| `4` | **Ma** | 349.23 |
| `5` | **Pa** | 392.00 |
| `6` | **Dha** | 440.00 |
| `7` | **Ni** | 493.88 |
| `8` | **Sa·** (upper octave) | 523.25 |

> ℹ️ The frequencies above are tuned to a natural major scale rooted at **C4 (middle C)**, centered on the *Sa* of the lower octave.

---

## 📁 Project Structure

```
DRUM/
├── index.html      # Main document — the studio markup
├── style.css       # Neon theme, layout, and responsive design
├── script.js       # Audio synthesis, keyboard/mouse handling
└── README.md       # You are here
```

---

## 🧩 How It Works

**`script.js`** defines a frequency map for the eight swaras and wires two input paths to a single `playNote()` function:

1. **Click / touch** — each `.music-key` pad listens for a click and triggers its `data-note`.
2. **Keyboard** — a global `keydown` listener translates keys `1`–`8` via a `keyboardMap`.

`playNote()` then builds a live note:

- Creates an **`OscillatorNode`** (sine wave) at the note's frequency.
- Routes it through a **`GainNode`** whose gain decays exponentially from `0.3` to silence over `0.5s`, producing a natural, plucked-style decay.
- Plays the note through the audio destination and flashes the visual pad via a `.playing` class.

> 🎧 Audio begins only after the user interacts (fulfilling browser autoplay policies), and a suspended `AudioContext` is automatically resumed on first interaction.

---

## 🎨 Customization

- **Change the scale or tuning** — edit the `notes` object frequencies at the top of `script.js`.
- **Swap the waveform** — change `oscillator.type` from `"sine"` to `"triangle"`, `"sawtooth"`, or `"square"` for a different timbre.
- **Tweak the sound envelope** — adjust the initial gain or decay duration in `playNote()`.
- **Restyle the theme** — all colors are exposed as CSS variables (e.g. `--bg`, `--cyan`, `--pink`) in `:root` inside `style.css`.

---

## 🧭 Roadmap

- [ ] Add octave shifting up/down
- [ ] Include multiple waveforms (flute, tabla-style percussion)
- [ ] Record and export your compositions (WAV)
- [ ] Add a metronome and raag presets
- [ ] Reduce hold-to-sustain (loop) mode

---

## 🤝 Contributing

Contributions are warmly welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feat/my-feature`
5. Open a pull request.

---

## 📄 License

This project is released for **personal and educational use**. If you plan to distribute or commercialize it, please add your preferred license (e.g. MIT, Apache-2.0) and reference it here.

---

<div align="center">

Made with ❤️ and a little *shruti* — **Jai ho!** 🎼

</div>

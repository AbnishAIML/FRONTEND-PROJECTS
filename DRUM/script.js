
const notes = {
    Sa: 261.63,
    Re: 293.66,
    Ga: 329.63,
    Ma: 349.23,
    Pa: 392.00,
    Dha: 440.00,
    Ni: 493.88,
    Sa2: 523.25
};

const keyboardMap = {
    "1": "Sa",
    "2": "Re",
    "3": "Ga",
    "4": "Ma",
    "5": "Pa",
    "6": "Dha",
    "7": "Ni",
    "8": "Sa2"
};

const audio = new AudioContext();
const keys = document.querySelectorAll(".music-key");

function playNote(note) {
    if (!notes[note]) return;

    if (audio.state === "suspended") {
        audio.resume();
    }

    const now = audio.currentTime;
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = notes[note];

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    oscillator.connect(gain);
    gain.connect(audio.destination);

    oscillator.start(now);
    oscillator.stop(now + 0.5);
}

function activateKey(note) {
    const key = document.querySelector(
        `.music-key[data-note="${note}"]`
    );

    if (!key) return;

    playNote(note);
    key.classList.add("playing");

    setTimeout(() => {
        key.classList.remove("playing");
    }, 200);
}

keys.forEach(key => {
    key.addEventListener("click", () => {
        activateKey(key.dataset.note);
    });
});

document.addEventListener("keydown", event => {
    const note = keyboardMap[event.key];

    if (!note || event.repeat) return;

    activateKey(note);
});

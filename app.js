// ==========================================================================
// 1. ANIMASI KETIK DI DALAM JENDELA TERMINAL
// ==========================================================================
const terminalElement = document.querySelector('.terminal-effect');
const terminalWords = ['creative builder', 'tech explorer'];
let termIndex = 0;
let termCurrentTxt = '';
let termIsDeleting = false;

function typeTerminal() {
    const currentWord = terminalWords[termIndex % terminalWords.length];

    if (termIsDeleting) {
        termCurrentTxt = currentWord.substring(0, termCurrentTxt.length - 1);
    } else {
        termCurrentTxt = currentWord.substring(0, termCurrentTxt.length + 1);
    }

    // Menggunakan garis pembatas "_" sebagai kursor terminal asli
    terminalElement.textContent = termCurrentTxt + '_';

    let typeSpeed = 150;
    if (termIsDeleting) {
        typeSpeed /= 2;
    }

    if (!termIsDeleting && termCurrentTxt === currentWord) {
        typeSpeed = 1500;
        termIsDeleting = true;
    } else if (termIsDeleting && termCurrentTxt === '') {
        termIsDeleting = false;
        termIndex++;
        typeSpeed = 300;
    }

    setTimeout(typeTerminal, typeSpeed);
}

// ==========================================================================
// 2. ANIMASI KETIK SUBTITLE UTAMA (I build ...)
// ==========================================================================
const heroTxtElement = document.querySelector('.hero-typing');
const heroWords = ['digital solutions.', 'clean interfaces.', 'creative code.'];
let heroTxtIndex = 0;
let heroCurrentTxt = '';
let heroIsDeleting = false;

function typeHero() {
    const currentWord = heroWords[heroTxtIndex % heroWords.length];

    if (heroIsDeleting) {
        heroCurrentTxt = currentWord.substring(0, heroCurrentTxt.length - 1);
    } else {
        heroCurrentTxt = currentWord.substring(0, heroCurrentTxt.length + 1);
    }

    heroTxtElement.textContent = heroCurrentTxt;

    let typeSpeed = 100;
    if (heroIsDeleting) {
        typeSpeed /= 2;
    }

    if (!heroIsDeleting && heroCurrentTxt === currentWord) {
        typeSpeed = 2000; // Berhenti sebentar selama 2 detik saat kalimat utuh
        heroIsDeleting = true;
    } else if (heroIsDeleting && heroCurrentTxt === '') {
        heroIsDeleting = false;
        heroTxtIndex++;
        typeSpeed = 500;
    }

    setTimeout(typeHero, typeSpeed);
}

// ==========================================================================
// 3. MENJALANKAN KEDUA EKSEKUSI SETELAH DOM SIAP
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeTerminal, 400);
    setTimeout(typeHero, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
    // === 1. FITUR TYPING EFFECT ===
    const targetElement = document.getElementById("typing-text");
    const textToType = "creative builder / tech explorer";
    let index = 0;

    // Kosongkan teks awal agar efek mengetik mulai dari nol
    if (targetElement) {
        targetElement.textContent = "";
        targetElement.classList.add("typing-cursor");

        function type() {
            if (index < textToType.length) {
                targetElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 100); // Kecepatan mengetik (100ms per karakter)
            }
        }
        
        // Mulai efek mengetik setelah jeda 500ms
        setTimeout(type, 500);
    }

    // === 2. FITUR TOMBOL INTERAKTIF WINDOW ===
    const closeBtn = document.getElementById("btn-close");
    const terminal = document.getElementById("terminal-box");

    if (closeBtn && terminal) {
        closeBtn.addEventListener("click", () => {
            // Menambahkan class CSS untuk menyembunyikan terminal dengan animasi
            terminal.classList.add("terminal-hidden");
            
            // Opsional: Memunculkan kembali terminal setelah 5 detik secara otomatis
            setTimeout(() => {
                terminal.classList.remove("terminal-hidden");
                // Reset ulang efek mengetik saat terminal muncul kembali
                if (targetElement) {
                    index = 0;
                    targetElement.textContent = "";
                    type();
                }
            }, 5000);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle "Daftar Sekarang" button clicks
    function handleDaftarClick() {
        alert("Terima kasih telah mendaftar! Kami akan menghubungi Anda segera.");
        // Anda bisa menambahkan logika lain di sini, seperti mengirim data ke server
    }

    const btnDaftarHero = document.getElementById("btnDaftarHero");
    const btnDaftarCTA = document.getElementById("btnDaftarCTA");

    if (btnDaftarHero) {
        btnDaftarHero.addEventListener("click", handleDaftarClick);
    }
    if (btnDaftarCTA) {
        btnDaftarCTA.addEventListener("click", handleDaftarClick);
    }

    // Scroll-triggered animations
    const sections = document.querySelectorAll('.section-scroll');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section must be visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop observing once it's in view
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
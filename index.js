document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const images = track.children;
    const totalWidth = Array.from(images).reduce(
        (width, img) => width + img.offsetWidth,
        0,
    );
    track.style.width = totalWidth + "px";
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Detectar el evento de desplazamiento (scroll)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            // Si el desplazamiento vertical es mayor a 0
            scrollToTopBtn.style.display = "block"; // Muestra el botón
        } else {
            scrollToTopBtn.style.display = "none"; // Oculta el botón
        }
    });

    // Función para desplazarse al tope de la página
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Desplazamiento suave
        });
    });
});

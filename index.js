document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const images = track.children;
    const totalWidth = Array.from(images).reduce(
        (width, img) => width + img.offsetWidth,
        0,
    );
    track.style.width = totalWidth + "px";
});

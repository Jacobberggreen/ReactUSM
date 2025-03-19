export function LoadingScreen() {
    const video = document.getElementById("background-video");
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
    const navbar = document.getElementById("navbar-placeholder");

    function removePreloader() {
        if (preloader) {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
                if (content) content.classList.remove("hidden");
                if (navbar) navbar.style.opacity = "1";
            }, 500);
        }
    }

    if (video) {
        video.addEventListener("canplaythrough", function () {
            setTimeout(removePreloader, 200);
        });

        setTimeout(removePreloader, 2000);
    } else {
        removePreloader();
    }
}
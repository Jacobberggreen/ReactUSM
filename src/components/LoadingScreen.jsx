// -------------- Loading screen ----------------
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
                if (content) content.classList.remove("hidden"); // Gör huvudinnehåll synligt
                if (navbar) navbar.style.opacity = "1"; // Se till att navbaren är synlig
            }, 500); // Väntar på fade-out-animation
        }
    }

    if (video) {
        // Om video finns, vänta tills den kan spela upp innan vi visar sidan
        video.addEventListener("canplaythrough", function () {
            setTimeout(removePreloader, 200); // Kort delay för effekt
        });

        // Failsafe: Om videon inte laddas inom 2 sekunder
        setTimeout(removePreloader, 2000);
    } else {
        // Om ingen video, ta bort direkt
        removePreloader();
    }
}
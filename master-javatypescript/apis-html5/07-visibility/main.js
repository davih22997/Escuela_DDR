let mivideo = document.querySelector("#mivideo");

window.addEventListener("visibilitychange", () => 
    document.visibilityState === "visible" ? mivideo.play() : mivideo.pause());
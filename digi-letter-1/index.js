function showLetter(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    music.pause();
    music.currentTime = 0;
    playButton.innerHTML = `<span class="playIcon">▶</span>`;
}

function musicPlayer(){
    const music = document.getElementById('music');
    const playButton = document.getElementById('playButton');

    if(music.paused){
        music.play();
        playButton.innerHTML = `<span class="playIcon">⏸</span>`;
    } else {
        music.pause();
        playButton.innerHTML = `<span class="playIcon">▶</span>`;
    }

    music.addEventListener("ended", () => {
        playButton.innerHTML = `<span class="playIcon">▶</span>`;
    });
}
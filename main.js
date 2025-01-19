function playAudioClick() {
    const audiox = document.getElementById('playAudio');
    if (audiox) {
        audiox.play();
        audiox.volume = 0.2;
    }
}

export default function playAudio(audiHashFromDB: string) {
  const audio = new Audio(URL + audiHashFromDB);

  function togglePause() {
    if (audio.paused && audio.currentTime > 0 && !audio.ended) {
      audio.pause();
      console.log("playing");
    } else {
      console.log("paused");
      audio.play();
    }
  }
  togglePause();
}

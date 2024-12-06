// Toggle Menu untuk Mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuList = document.querySelector(".menu-list ul");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      console.log('Tombol diklik');
      menuList.classList.toggle("active"); // Toggle kelas untuk menampilkan menu
    });
  }
});


// Kontrol Pemutar Musik
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  }
});

stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  playPauseBtn.textContent = 'Play';
});

const toggleButton = document.getElementById('toggle-btn');
const meineBox = document.querySelector('.meine-box');
// Wir speichern den Zustand, ob die Box sichtbar ist
let isVisible = true;

toggleButton.addEventListener('click', () => {
  if (isVisible) {
    // Blende die Box aus
    meineBox.classList.remove('scale-in-ver-bottom-normal');
    meineBox.classList.add('scale-out-ver-bottom-normal');
    isVisible = false;
  } else {
    // Blende die Box wieder ein
    meineBox.classList.remove('scale-out-ver-bottom-normal');
    meineBox.classList.add('scale-in-ver-bottom-normal');
    isVisible = true;
  }
});
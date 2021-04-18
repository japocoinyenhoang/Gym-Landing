const video = document.getElementById('video');
const boton = document.getElementById('boton');

function playVideo() {
  video.onplay();
  boton.style.display = 'none';
}

video.addEventListener('ended', function () {
  boton.style.display = 'block';
});


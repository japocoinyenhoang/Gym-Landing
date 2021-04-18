const video = document.getElementById('video');
const boton = document.getElementById('boton');

function playVideo() {
  video.play();
  boton.style.display = 'none';
}

video.addEventListener('ended', function () {
  boton.style.display = 'block';
});

$(document).ready(function(){
  $('.menu-icon').on('click', function(){
    $('nav').slideToggle();
  })
})
  
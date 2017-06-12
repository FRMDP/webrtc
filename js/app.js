'use strict';

// Referencia a los elementos del DOM
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const qvga = document.getElementById('qvga');
const vga = document.getElementById('vga');
const hd = document.getElementById('hd');
const fullHd = document.getElementById('fullhd');
const pic = document.getElementById('pic');
const descargar = document.getElementById('descargar');

// Reproducir el video
function play(constraints) {
    if (video.srcObject)
        video.srcObject.getTracks().forEach(track => track.stop());

    navigator.mediaDevices.getUserMedia(constraints)
        .then(mediaStream => video.srcObject = mediaStream)
        .catch(e => console.log(e));
}

// Capturar la imagen
function takePic() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').
    drawImage(video, 0, 0, canvas.width, canvas.height);
}

// Descargar imagen del canvas
function descargarImagen() {
    descargar.href = canvas.toDataURL("image/png");
    descargar.download = 'pic.png';
}

// Agregamos listeners a los eventos
qvga.addEventListener('click', function() {
    play({video: {width: 320, height: 240}});
});

vga.addEventListener('click', function() {
    play({video: {width: 640, height: 480}});
});

hd.addEventListener('click', function() {
    play({video: {width: 1280, height: 720}});
});

fullHd.addEventListener('click', function() {
    play({width: 1920, height: 1080});
});

pic.addEventListener('click', takePic);
descargar.addEventListener('click', descargarImagen);
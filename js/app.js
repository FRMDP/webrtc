'use strict';

// Referencia a los botones
const video = document.getElementById('video');
const qvga = document.getElementById('qvga');
const vga = document.getElementById('vga');
const hd = document.getElementById('hd');
const fullHd = document.getElementById('fullhd');

// Agregamos listeners al evento click
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

// Empezamos a reproducir el video
function play(constraints) {
    if (video.srcObject)
        //video.srcObject.getTracks().forEach(track => track.stop());
        video.srcObject = null;

    navigator.mediaDevices.getUserMedia(constraints)
        .then(mediaStream => video.srcObject = mediaStream)
        .catch(e => console.log(e));
}

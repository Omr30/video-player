
const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress')

$pause.hidden = true;

$play.addEventListener('click', () => {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('PLAY!');
});

$pause.addEventListener('click', () => {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
    console.log('PAUSE!!');
});

$backward.addEventListener('click', () => {
    $video.currentTime -= 10
    console.log('para atras 10 seg', $video.currentTime)
});

$forward.addEventListener('click', () => {
    $video.currentTime += 10
    console.log('para adelante 10 seg', $video.currentTime)
});


$video.addEventListener('loadedmetadata', () => {
    $progress.max = $video.duration
    console.log('Ha cargado mi video', $video.duration);
});

$video.addEventListener('timeupdate', () => {
    $progress.value = $video.currentTime
    // console.log('tiempo actual', $video.currentTime)
});

$progress.addEventListener('input', () => {
    $video.currentTime = $progress.value
    console.log($progress.value)
});
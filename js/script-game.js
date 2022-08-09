
const mario = document.querySelector('.mario-runing');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    mario.src = 'img/mario-jump.gif';
    setTimeout(() => {
        mario.classList.remove('jump');
        mario.src = 'img/mario-runing.gif';
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marionPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition < 120 && pipePosition > 0 && marionPosition < 140){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation   = 'none';
        mario.style.bottom  = `${marionPosition}px`; 

        mario.src = 'img/game-over.png';
        mario.style.width = '150px';
        mario.style.padding = '25px 0px';

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump);
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

// setTimeout(funcao, 600) usando a funcao anônima fica:
    setTimeout(() => {

        mario.classList.remove('jump');
        
    }, 600);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    //não existe uma propriedade offsetBottom, então para pegar a altura do mario usaremos o getComputedStyle()
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if (pipePosition <= 112 && pipePosition > 0 && marioPosition < 95) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/img/mario-game-over.png';
        mario.style.width = '92px';
        mario.style.marginLeft = '36px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
const agnes = document.querySelector('.agnes');
const pulica = document.querySelector('.pulica');

const jump = () =>{
    agnes.classList.add('jump')

    setTimeout(() =>{

        agnes.classList.remove('jump');

    }, 600)
}

const loop = setInterval(() =>{

    const pulicaPosition = pulica.offsetLeft;
    const agnesPosition = +window.getComputedStyle(agnes).bottom.replace('px', '');
    
    if(pulicaPosition <= 65 && pulicaPosition > 0 && agnesPosition < 95){

        pulica.style.animation  = 'none';
        pulica.style.left = `${pulicaPosition}px`

        agnes.style.animation  = 'none';
        agnes.style.bottom = `${agnesPosition}px`

        agnes.src = './images/morreu.png';


    }

},10) 

document.addEventListener('keydown', jump)
import "./assets/style/main.scss";

console.log('Bienvenue sur le starter-kit');

let button = document.querySelector('button');

button.addEventListener('click', () => {
    let carrousel = document.querySelectorAll('.carrousel');

    for(var i = 0; i < carrousel.length; i++) {
        carrousel[i].classList.add('test');
    }

    console.log(carrousel);
});

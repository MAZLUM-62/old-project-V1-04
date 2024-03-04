

const menuBtn = document.querySelector('.menu-btn')
const navBar = document.querySelector('.navbar-main')

menuBtn.addEventListener('click', () =>{
    navBar.classList.toggle('show');
});

let menuOpen = false;
    menuBtn.addEventListener('click', ()=>{
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    }
);


const headerin = document.querySelector('header-inhalt')


const Kontakttext = "Hallo du Held,"; "Hab keine Angst,"; "Das böse erwartet dich," ; "auf der Suche nach dem Teufel,";

document.querySelector('.kontakt-animation-text').innerHTML = Kontakttext;

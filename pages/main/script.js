const node = document.querySelector(".logo");
const duplicateLogo = node.cloneNode(true);

const logo2 = document.querySelector(".logo").appendChild(duplicateLogo);
logo2.classList = 'logo2';


document.getElementById('burger').addEventListener('click', toggleBurger);
document.getElementById('nav-bar').addEventListener('click', toggleBurger);
document.getElementById('dim').addEventListener('click', toggleBurger);

function toggleBurger() {
    document.getElementById('nav-bar').classList.toggle('open');
    document.getElementById('burger').classList.add('burger');
    document.getElementById('burger').classList.toggle('burger-transform');
    document.querySelector(".logo2").classList.toggle('logo-display');
    document.querySelector('#dim').classList.toggle('dimmer');
    document.querySelector('body').classList.toggle('scroll');
}

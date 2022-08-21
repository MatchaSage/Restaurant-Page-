import homePage from "./home";
import pageHeader from "./headbuttons";
import contactPage from "./contact";
import menuPage from "./menu";
pageHeader();
homePage();

let content = document.querySelector('#content');
let homeButton = document.querySelector('.home');
let menuButton = document.querySelector('.menu');
let contactButton = document.querySelector('.contact');

homeButton.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    homePage();
})

menuButton.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    menuPage();
})

contactButton.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    contactPage();
})
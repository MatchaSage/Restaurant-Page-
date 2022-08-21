export default function pageHeader() {
    let content = document.querySelector('#content');
    let container = document.createElement('div');
    let homeButton = document.createElement('button');
    let contactButton = document.createElement('button');
    let menuButton = document.createElement('button');
    homeButton.className = 'home btn';
    contactButton.className = 'contact btn';
    menuButton.className = 'menu btn';
    container.className = 'header buttons';

    homeButton.textContent = 'Home';
    contactButton.textContent = 'Contact';
    menuButton.textContent = 'Menu';


    container.append(homeButton, menuButton, contactButton);
    content.append(container);

}
export default function menuPage() {
    let content = document.querySelector('#content');
    
    let container = document.createElement('div');
    container.className = 'menu';

    let menuText = document.createElement('p');
    menuText.textContent = 'We have godlike rocks to eat.';

    container.append(menuText);
    content.append(container);
}
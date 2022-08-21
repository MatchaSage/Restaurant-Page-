export default function contactPage() {
    let container = document.createElement('div');
    container.className = 'contact';

    let content = document.querySelector('#content');

    let contactText = document.createElement('p');
    contactText.textContent = 'You can reach us at 999-999-9999';
    container.append(contactText);
    content.appendChild(container);
}
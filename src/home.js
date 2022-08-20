export default function pageLoad() {
    let content = document.querySelector('#content');

    let header = document.createElement('h1');
    header.textContent = 'Rock Munchers Cafe';
    
    let testimonial = document.createElement('p');
    testimonial.textContent = 'Rock Munchers is my restaurant of choice. They always have the finest selections of Earths most exquisite bits. My family has been going here every morning for generations and will be for many more!';

    let image = document.createElement('img');
    image.src = '/images/rockpile.jpg';
    image.height = '500';
    image.width = '500';

    content.append(header, testimonial, image);
}
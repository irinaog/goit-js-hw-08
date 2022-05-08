export default function galleryItemMarkup(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
        </a>
        </li>
        `
        })
        .join('')
};


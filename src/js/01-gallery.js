import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML("beforeend", galleryItemMarkup(galleryItems));

import galleryItemMarkup from "./lightbox";

let lightbox = new SimpleLightbox('.gallery__link', {captionDelay: 250});
console.log(galleryItems);



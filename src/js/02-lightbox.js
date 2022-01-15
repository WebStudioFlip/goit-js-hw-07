import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const galleryItemsHtml = galleryItems
  .map(
    (el) => `<li >
    <div class="gallery__item">
<a class="gallery__link" href=${el.original}>
  <img
    class="gallery__image"
    src=${el.preview}
    data-source=${el.original}
    alt=${el.description}   
  />
</a>
</div>
</li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryItemsHtml);

let gallery = new SimpleLightbox(".gallery a", {captionsData:"alt", captionDelay:250});
console.dir(gallery)

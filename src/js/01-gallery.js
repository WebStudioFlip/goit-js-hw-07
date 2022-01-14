import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryItemsHtml = galleryItems
  .map(
    (el) => `<div class="gallery__item">
<a class="gallery__link" href=${el.original}>
  <img
    class="gallery__image"
    src=${el.preview}
    data-source=${el.original}
    alt=${el.description}
  />
</a>
</div>`
  )
  .join("");
console.log(galleryItemsHtml)
galleryEl.insertAdjacentHTML("beforeend", galleryItemsHtml);

const onGalleryItemClick = function (event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<div class="modal"><img src=${event.target.dataset.source} width="800" height="600"></div>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", function modalCloseEscape(event) {              
          if (event.code === "Escape") {
            instance.close();
            window.removeEventListener("keydown", modalCloseEscape);
          }
        });
        instance.element().addEventListener("click", function modalCloseClick (event) {          
          instance.close();
          instance.element().removeEventListener("keydown", modalCloseClick);
        } );
      },
    }
  );
  instance.show();  
};

galleryEl.addEventListener("click", onGalleryItemClick);

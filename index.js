import galleryItems from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".lightbox"),
  lightboxFon: document.querySelector(".lightbox__overlay"),
  lightboxImg: document.querySelector(".lightbox__image"),

  listImages: galleryItems
    .map(
      (image) => `
    <li class="gallery__item">
      <a
      class="gallery__link"
      href="${image.original}"
      >
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
          </li >
          `
    )
    .join(""),
};

const closeModal = () => {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImg.src = "";
  refs.lightboxImg.alt = "";
};

const openModal = () => {
  refs.lightbox.classList.add("is-open");
  refs.lightboxImg.src = event.target.dataset.source;
  refs.lightboxImg.alt = event.target.alt;
};



refs.gallery.insertAdjacentHTML("beforeend", refs.listImages);

refs.gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") return;
    openModal();
});

refs.lightbox.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    closeModal();
  }
  return;
});

refs.lightboxFon.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV") {
    closeModal();
  }
  return;
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeModal();
  }
  return;
});

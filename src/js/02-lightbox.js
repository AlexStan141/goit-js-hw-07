import { galleryItems } from "./gallery-items.js";
// Change code below this line

var ul = document.getElementsByClassName("gallery")[0];

galleryItems.forEach(function (image) {
    var img = document.createElement("img");
    img.classList.add("gallery__image");
    img.setAttribute("src", image.preview);
    img.setAttribute("alt", image.description);
    var a = document.createElement("a");
    a.classList.add("gallery__link");
    a.setAttribute("href", image.original);
    a.append(img);
    var li = document.createElement("li");
    li.classList.add("gallery__item");
    li.append(a);
    ul.append(li);
});

let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {});

console.log(galleryItems);

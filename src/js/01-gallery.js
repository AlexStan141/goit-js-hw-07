import { galleryItems } from "./gallery-items.js";
// Change code below this line

var ul = document.getElementsByClassName("gallery")[0];

galleryItems.forEach(function (image) {
    var img = document.createElement("img");
    img.classList.add("gallery__image");
    img.setAttribute("src", image.preview);
    img.setAttribute("source", image.original);
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

var modalIsOpened = false;
var modal;

document
    .getElementsByClassName("gallery")[0]
    .addEventListener("click", function (event) {
        event.preventDefault();
        var bigImageUrl = event.target.getAttribute("source");
        console.log(bigImageUrl);
        modal = basicLightbox.create(
            `<img src=${bigImageUrl} width="800" height="600">"`
        );
        modal.show();
        modalIsOpened = true;
    });

document.addEventListener("keydown", (event) => {
    if (event.code == "Escape" && modalIsOpened == true) {
        modal.close();
    }
});

console.log(galleryItems);

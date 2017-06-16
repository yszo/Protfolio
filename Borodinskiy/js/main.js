// Всплывающая форма входа

var link = document.querySelector(".login");
var overlay = document.querySelector(".modal-overlay");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-content-show");
    popup.classList.add("modal-content-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener ("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    };
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        };
        if (popup.classList.contains("modal-error")) {
            popup.classList.remove("modal-error");
        };
        if (overlay.classList.contains("modal-content-show")) {
            overlay.classList.remove("modal-content-show");
        };
    }
});


// Всплывающая карта

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-content-show");
    mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.remove("modal-content-show");
    mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
        };
        if (overlay.classList.contains("modal-content-show")) {
            overlay.classList.remove("modal-content-show");
        };
    }
});

overlay.addEventListener("click", function(event) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        };
        if (popup.classList.contains("modal-error")) {
            popup.classList.remove("modal-error");
        };
        if (overlay.classList.contains("modal-content-show")) {
            overlay.classList.remove("modal-content-show");
        };
        if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
        };
});
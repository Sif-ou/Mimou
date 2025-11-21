const list_scroll = document.querySelector(".list-view-container");
const left_arrow = document.getElementById("list-view-scroll-left");
const right_arrow = document.getElementById("list-view-scroll-right");

left_arrow.addEventListener("click", () => {
    list_scroll.scrollBy({ left: -470, behavior: "smooth" });
});

right_arrow.addEventListener("click", () => {
    list_scroll.scrollBy({ left: 470, behavior: "smooth" });
});



/*
    container.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
*/
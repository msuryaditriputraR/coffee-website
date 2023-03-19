/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    document
        .getElementById("header")
        .classList[this.scrollY >= 50 ? "add" : "remove"]("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const showScrollUp = () => {
    document
        .getElementById("scroll-up")
        .classList[this.scrollY >= 350 ? "add" : "remove"]("show-scroll");
};

window.addEventListener("scroll", showScrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

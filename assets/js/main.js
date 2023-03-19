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
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 58,
            sectionId = section.getAttribute("id"),
            sectionClass = document.querySelector(
                ".nav__menu a[href*=" + sectionId
            );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link");
        } else {
            sectionClass.classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

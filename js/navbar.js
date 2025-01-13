
const navMobile = document.querySelector('.nav-mobile')
const hamburger = document.querySelector('.mobile-buttons .hamburger-btn');

hamburger.addEventListener('click', () => {
    navMobile.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

    const currentState = hamburger.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
        hamburger.setAttribute("data-state", "opened");
        hamburger.setAttribute("aria-expanded", "true");
    } else {
        hamburger.setAttribute("data-state", "closed");
        hamburger.setAttribute("aria-expanded", "false");
    }
})
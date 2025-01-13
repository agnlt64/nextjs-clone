
const navItems = document.querySelectorAll('.summary a')
const navSections = Array.from(navItems).map(section => section.getAttribute('href'))

window.addEventListener('scroll', () => {
    for (let id of navSections) {
        id = id.replace('#', '')
        if (id) {
            const section = document.getElementById(id)
            if (section.offsetTop - window.scrollY <= 150) {
                navSections.forEach(section => {
                    document.querySelector(`.summary a[href="${section}"]`).classList.remove('active')
                })
                document.querySelector(`.summary a[href="#${id}"]`).classList.add('active')
            }
        }
    }
})

const mobileNav = document.getElementById('toggle-mobile-nav')
mobileNav.addEventListener('click', () => {
    const menu = document.querySelector('.side-nav')
    const btn = mobileNav.children[0]

    btn.children[0].classList.toggle('rotate')
    menu.classList.toggle('mobile-active')
    document.body.classList.toggle('no-scroll')
})
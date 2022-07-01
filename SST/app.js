let listItems = [...document.querySelectorAll('.info')];

let options = {
    rootMargin: "-10%",
    threshold: 0.4
}

let observer = new IntersectionObserver(showItem, options);

function showItem(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.children[0].classList.add("active");
        }
    });
}

listItems.forEach(item => {
    observer.observe(item);
});

// change background colour
const [red, green, blue] = [27, 37, 50]
const section1 = document.querySelector('body')

window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 2500
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red * y, green * y, blue * y].map(Math.round)
    section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
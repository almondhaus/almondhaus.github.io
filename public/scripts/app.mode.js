function toNight() {
    document.querySelector(".fa-moon").style.display = 'none';
    document.querySelector(".fa-sun").style.display = 'block';
    document.querySelector(".ah-header").style.backgroundColor = 'rgb(26, 21, 21)'
    document.querySelector(".ah-main").style.backgroundColor = 'rgb(26, 21, 21)';
    document.querySelectorAll(".theme-white").forEach(element => {
        element.classList.remove("theme-white");
        element.classList.add("theme-white-dark");
    })
};

function toDay() {
    document.querySelector(".fa-sun").style.display = 'none';
    document.querySelector(".fa-moon").style.display = 'block';
    document.querySelector(".ah-header").style.backgroundColor = 'wheat'
    document.querySelector(".ah-main").style.backgroundColor = 'wheat';
    document.querySelectorAll(".theme-white-dark").forEach(element => {
        element.classList.remove("theme-white-dark");
        element.classList.add("theme-white");
    })
}


document.querySelector(".ah-mode").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(document.body.className.includes("dark")) {
        toDay();
    } else {
        toNight();
    }
});
const btns = document.querySelectorAll(".menuBtn");
btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        location.href = `/menu/${event.target.value}`;
    });
});
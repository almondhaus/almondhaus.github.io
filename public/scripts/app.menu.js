const currentMenu = location.href.split("#")[1];
const title = $(".ah-menu-main-title").text(`${currentMenu}`);
fetchData('./menu.json');
function fetchData(which) {
    let content;

    $.getJSON(which)
    .then(function(response) {
        content = response[currentMenu];
        console.log(content);
        const ul = document.createElement("ul");
        ul.setAttribute("class", "ah-menu-main-div");

        for(let key in content) {
           const li = document.createElement("li");
           li.setAttribute("class", "item theme-main");
           const img = document.createElement("img");
           img.setAttribute("class", "item-image");
           img.setAttribute("src", "../public/images/coffee.png");
           img.setAttribute("alt", key);
           const h4 = document.createElement("h4");
           h4.setAttribute("class", "item-title");
           h4.innerHTML = key;
           const p = document.createElement("p");
           p.setAttribute("class", "item-description")
           p.innerHTML = content[key].description;

           li.append(img);
           li.append(h4);
           li.append(p);
           ul.append(li);
        }
        $(".ah-menu-main").append(ul);

    });
}


const div = document.querySelector(".item-wrap");
const currentTarget = document.querySelector("title");
console.log(currentTarget.textContent);

fetch("../menu.json")
.then(function(response) {
    console.log(response)
    return response.json();
})
.then(function(data) {
    let currentData = data[currentTarget.textContent];
    create(currentData);
})

function create(obj) {
    const ul = document.createElement("ul");
    for(let key in obj) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = obj[key].url;
        img.alt = key;
        let h3 = document.createElement("h3");
        h3.textContent = key;
        let p = document.createElement("p");
        p.textContent = obj[key].price;

        li.append(img);
        li.append(h3);
        li.append(p);

        ul.append(li);
    }
    div.append(ul);
}
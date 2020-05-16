let title = document.getElementById("site-title");
let dynamic_host = document.getElementById("dynamic-host");

updateTitle();
setInterval(updateTitle, 2500);

function updateTitle() {
    let result = fetch("/api/animals/1");
    result
        .then((response) => response.json())
        .then((data) => {
            let animal = data[0];
            title.innerText = animal.name + " is a " + animal.type;
            dynamic_host.innerText = "Dynamic host: " + animal.hostname;
        })
        .catch(function () {
            title.innerText = "No animal";
        });
}

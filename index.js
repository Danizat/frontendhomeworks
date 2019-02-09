window.addEventListener("load", function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://rickandmortyapi.com/api/character/?page=6", true);
    xhr.send();
    ///
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            const cardTitle = document.querySelectorAll(".card-title");
            const cardImg = document.querySelectorAll(".card-img-top");
            const createdData = document.querySelectorAll(".text-muted");
            const status = document.querySelectorAll(".status");
            const gender = document.querySelectorAll(".gender");
            const species = document.querySelectorAll(".species");
            const type = document.querySelectorAll(".type");
            ///

            console.log(xhr.responseURL);
            ///
            for (var i = 0; i < 10; i++) {
                console.log(data.results[i]);
                console.log(data.results[i].image);
                ///
                cardImg[i].setAttribute("src", `${data.results[i].image}`);
                createdData[i].innerText = "Created: " + data.results[i].created;
                cardTitle[i].innerText = data.results[i].name;
                status[i].innerText = "Status: " + data.results[i].status;
                gender[i].innerText = "Gender: " + data.results[i].gender;
                species[i].innerText = "Species: " + data.results[i].species;
                if (data.results[i].type === "") {
                    type[i].innerText = "Type: Doesn't have a type;)";
                } else {
                    type[i].innerText = "Type: " + data.results[i].type;
                }
            }
        }
    }
});
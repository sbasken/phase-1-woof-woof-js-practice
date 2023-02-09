const dogBar = document.querySelector('#dog-bar')
const dogsAPI = "http://localhost:3000/pups"

fetch(dogsAPI)
.then(res => res.json())
.then(dogs => dogs.forEach(renderDogs))

const renderDogs = (dog) => {
    const span = document.createElement('span')
    span.innerText = dog.name
    dogBar.append(span)

    span.addEventListener('click', (e) => {
        const dogInfo = document.querySelector("#dog-info");
        dogInfo.innerHTML = "";

        const img = document.createElement('img')
        img.src = dog.image;
        img.alt = `${dog.name} image`

        const h2 = document.createElement('h2');
        h2.innerText = dog.name;

        const button = document.createElement('button')
        if (dog.isGoodDog) {
            button.innerText = "Good Dog!"
        } else {
            button.innerText = "Bad Dog!"
        }

        dogInfo.append(img, h2, button)

        button.addEventListener('click', () => {
            if (button.innerText === "Good Dog!") {
                dog.isGoodDog = false;
            } else if (button.innerText === "Bad Dog!") {
                dog.isGoodDog = true
            }
            fetch(`http://localhost:3000/pups/${dog.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dog)
                })
                if (dog.isGoodDog) {
                    button.innerText = "Good Dog!"
                } else {
                    button.innerText = "Bad Dog!"
                }
        })
    })

       



}
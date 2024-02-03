const people = [
  {
    name: "john de john",
    age: 30,
    gender: "male",
    location: "cerigaabo",
    imgaeURL: "images/m 4.JPG",
    looking: "male looking for female",
  },
  {
    name: "aba de john",
    age: 31,
    gender: "male",
    location: "gedo",
    imgaeURL: "images/m 5.JPG",
    looking: "male looking for female",
  },
  {
    name: "aba de ",
    age: 35,
    gender: "male",
    location: "aabo",
    imgaeURL: "images/m 3.JPG",
    looking: "male looking for female",
  },
  {
    name: " de ",
    age: 5,
    gender: "male",
    location: "gaa",
    imgaeURL: "images/mustaf 1.jpg",
    looking: "male looking for female",
  },
  {
    name: " de  istifaqano",
    age: 5,
    gender: "male",
    location: "gbo",
    imgaeURL: "images/mustaf 2.jpeg",
    looking: "male looking for feale",
  },
  //   {
  //     name: "   istifaqano",
  //     age: 5,
  //     gender: "male",
  //     location: "gaabo",
  //     imgaeURL: "images/amina.png",
  //     looking: "male looking for female",
  //   },
]

const container = document.querySelector(".container")
const img = document.querySelector("img")
const profileInfo = document.querySelector(".profile-info")
const nextbtn = document.querySelector("#next")

function* createPeopleIterator() {
  let index = 0
  while (true) {
    yield people[index++ % people.length]
  }
}

const iterator = createPeopleIterator()

nextbtn.addEventListener("click", () => {
  const person = iterator.next().value
  img.src = person.imgaeURL
  profileInfo.querySelector("h3").textContent = person.name
  profileInfo.querySelectorAll("p")[0].textContent = `${person.age} Years Old`
  profileInfo.querySelectorAll("p")[1].textContent = `${person.location} `
  profileInfo.querySelectorAll("p")[2].textContent = `${person.looking} `
  //   profileInfo.querySelector("h3").textContent = person.name
  //   profileInfo.querySelector("h3").textContent = person.name
})

nextbtn.click()

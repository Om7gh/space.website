// toggle btn variables
const link = document.querySelectorAll("ul .list");
const toogleBtn = document.querySelector(".toogle-btn");
const nav = document.querySelector(".lists");

// distination Variables
const moonImg = document.querySelector(".moon .pic");
const moonTitle = document.querySelector(".moon-name span");
const moonPara = document.querySelector(".moon-info p");
const moonDist = document.querySelector(".dis-info h2");
const moonTime = document.querySelector(".time-info h2");
const moonList = document.querySelectorAll(".moon-list li");

// crew variable

const crewTitle = document.querySelector(".c-info h1");
const crewImg = document.querySelector(".crew-img img");
const crewPara = document.querySelector(".c-info .description");
const crewDomaine = document.querySelector(".c-info .domaine");
const spans = document.querySelectorAll(".spans span");

// technology Variables

const technoImg = document.querySelector("#techno-img");
const technoTitle = document.querySelector(".show-info h1");
const technoParagraph = document.querySelector(".show-info p");
const technoList = document.querySelectorAll("#techno-list li");
console.log(technoList);

link.forEach((li) => {
  li.addEventListener("click", function () {
    link.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  });
});

toogleBtn.addEventListener("click", function () {
  nav.classList.toggle("show");
});

// distination Logique

// fetch API

fetch("data.json")
  .then((data) => {
    return data.json();
  })
  .then((result) => {
    // GET DATA FROM DESTINATION
    moonList.forEach((data) => {
      data.addEventListener("click", function () {
        let myDistination = result.destinations;

        if (data.dataset.moon === "moon") {
          moonImg.src = myDistination[0].images.png;
          moonPara.innerText = myDistination[0].description;
          moonTitle.innerText = myDistination[0].name;
          moonDist.innerText = myDistination[0].distance;
          moonTime.innerText = myDistination[0].travel;
        }

        if (data.dataset.moon === "mars") {
          moonImg.src = myDistination[1].images.png;
          moonPara.innerText = myDistination[1].description;
          moonTitle.innerText = myDistination[1].name;
          moonDist.innerText = myDistination[1].distance;
          moonTime.innerText = myDistination[1].travel;
        }

        if (data.dataset.moon === "eupora") {
          moonImg.src = myDistination[2].images.png;
          moonPara.innerText = myDistination[2].description;
          moonTitle.innerText = myDistination[2].name;
          moonDist.innerText = myDistination[2].distance;
          moonTime.innerText = myDistination[2].travel;
        }

        if (data.dataset.moon === "titan") {
          moonImg.src = myDistination[3].images.png;
          moonPara.innerText = myDistination[3].description;
          moonTitle.innerText = myDistination[3].name;
          moonDist.innerText = myDistination[3].distance;
          moonTime.innerText = myDistination[3].travel;
        }
      });
    });

    // get Data From Crew
    spans.forEach((span) => {
      span.addEventListener("click", function () {
        const myCrew = result.crew;
        if (span.dataset.show === "first") {
          crewImg.src = myCrew[0].images.png;
          crewDomaine.innerText = myCrew[0].role;
          crewPara.innerText = myCrew[0].bio;
          crewTitle.innerText = myCrew[0].name;
        }
        if (span.dataset.show === "second") {
          crewImg.style.scale = "0.8";
          crewImg.src = myCrew[1].images.png;
          crewDomaine.innerText = myCrew[1].role;
          crewPara.innerText = myCrew[1].bio;
          crewTitle.innerText = myCrew[1].name;
        }
        if (span.dataset.show === "three") {
          crewImg.src = myCrew[2].images.png;
          crewDomaine.innerText = myCrew[2].role;
          crewPara.innerText = myCrew[2].bio;
          crewTitle.innerText = myCrew[2].name;
        }
        if (span.dataset.show === "last") {
          crewImg.src = myCrew[3].images.png;
          crewDomaine.innerText = myCrew[3].role;
          crewPara.innerText = myCrew[3].bio;
          crewTitle.innerText = myCrew[3].name;
        }
      });
    });

    // get Data From Technology
    technoList.forEach((list) => {
      list.addEventListener("click", function () {
        let myTechno = result.technology;

        if (list.dataset.technology === "1") {
          technoTitle.innerText = myTechno[0].name;
          technoParagraph.innerText = myTechno[0].description;
          technoImg.src = myTechno[0].images.portrait;
        }
        if (list.dataset.technology === "2") {
          technoTitle.innerText = myTechno[1].name;
          technoParagraph.innerText = myTechno[1].description;
          technoImg.src = myTechno[1].images.portrait;
        }
        if (list.dataset.technology === "3") {
          technoTitle.innerText = myTechno[2].name;
          technoParagraph.innerText = myTechno[2].description;
          technoImg.src = myTechno[2].images.portrait;
        }
      });
    });
  });

// add classe active page destinatio,
moonList.forEach((li) => {
  li.addEventListener("click", function () {
    moonList.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  });
});

// add classe active page technology
spans.forEach((span) => {
  span.addEventListener("click", function () {
    spans.forEach((span) => {
      span.classList.remove("active");
      this.classList.add("active");
    });
  });
});

technoList.forEach((li) => {
  li.addEventListener("click", function (e) {
    technoList.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active")
    });
  });
});

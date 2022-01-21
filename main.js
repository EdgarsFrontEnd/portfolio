// multilingual content
var languages = {
  english: {
    homeLink: "Home",
    skillsLink: "Skills",
    projectsLink: "Projects",
    homeTitle: "I am Edgars Pujāts",
    homeSubtitle:
      "I’m Edgar, student and a web developer with huge passion for creating things.",
    homeButton: "My projects",
    skillsSection: "My skills",
    skillsTitle: "Working with magic",
    skillsSubtitle:
      "These for me are essential development tools. In near future I plan on expanding my skillset with jQuery, ReactJS, TypeScript. ",
    projectsSection: "Latest projects",
    projectsTitle: "Building from scratch",
    projectsSubtitle:
      "In my projects, i like using vanilla JavaScript, there are no libraries and dependencies. ",
    hangmanSiteTitle: "Hangman game",
    hangmanSiteDescription: "Can you guess the word ?",
    blogSiteTitle: "Blog site",
    blogSiteDescription:
      "This site was created for school project. It uses database: you can add, update queries or pull induvidual records. Not responsive.",
    tattooSiteTitle: "Tattoo site",
    tattooSiteDescription: "This is not a real tattoo site.",
  },
  latvian: {
    homeLink: "Mājas",
    skillsLink: "Prasmes",
    projectsLink: "Projekti",
    homeTitle: "Esmu Edgars Pujāts",
    homeSubtitle:
      "Mani sauc Edgars, esmu programmēšanas students un web izstrādes entuziasts.",
    homeButton: "Mani projekti",
    skillsSection: "Prasmes",
    skillsTitle: "Maģisko rīku izlase",
    skillsSubtitle:
      "Bez šīm tehnoloģijām, es nevarētu iztēloties savu ikdienu. Tuvākajā nākotnē vēlos apgūt jQuery, ReactJS, Typescript.",
    projectsSection: "Nesen veidotie projekti",
    projectsTitle: "Veidoti no nulles",
    projectsSubtitle:
      "Savos projektos nepatīk izmantot gatavas bibliotēkas, vai koda gabalus, 99% kods ir manis rakstīts.",
    hangmanSiteTitle: "Karātavas",
    hangmanSiteDescription: "Vai uzminēsi vārdu ?",
    blogSiteTitle: "Bloga tipa lapa",
    blogSiteDescription:
      "Šī lapa tika veidota skolas projekta ietvaros, tās mērķis bija veikt dažādas darbības ar datubāzi, tāpēc tā nav responsīva.",
    tattooSiteTitle: "Tetuvēšanas lapa",
    tattooSiteDescription: "Šī nav īsta lapa.",
  },
};

const languageButtonContainer = document.querySelector(".languages");
const languageLinks = languageButtonContainer.querySelectorAll("a");
const languageContent = document.querySelectorAll(".multilingual");

languageLinks.forEach((el) => {
  el.addEventListener("click", () => {
    languageButtonContainer.querySelector(".active").classList.remove("active"); // removes current active and adds to clicked link
    el.querySelector("img").classList.add("active");

    const attr = el.getAttribute("language");

    [...languageContent].forEach((el) => {
      el.textContent = languages[attr][el.id];
    });

    updateProjectInfo(currentSlider);
  });
});

// my projects button
const button = document.querySelector(".button");
button.addEventListener("click", () => {
  let projectsSection = document.querySelector(".projects-section");
  projectsSection.scrollIntoView();
});

// menu toggle
const menuButton = document.querySelector(".menu");
const menu = document.querySelector(".menu-nav");

menuButton.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    menu.classList.add("close");
  } else {
    menu.classList.remove("close");
    menu.classList.add("open");
  }
});

// for now decided not to have this cool nav scroll toggle, so this is amazing zombie code

// // hides nav on scroll down
// let prevScrollPosisiton = window.pageYOffset;
// window.addEventListener("scroll", () => {
//   let currentScrollPosition = window.pageYOffset;
//   if (prevScrollPosisiton > currentScrollPosition) {
//     document.querySelector("nav").style.top = "0";
//   } else {
//     let navHeight = document
//       .querySelector("nav")
//       .getBoundingClientRect().height;
//     // opened menu navigation is 180px tall
//     document.querySelector("nav").style.top = `-${navHeight + 180}px`;
//   }
//   prevScrollPosisiton = currentScrollPosition;
// });

// desktop slider
// it's important to name properties imagePath1, 2, 3 etc., url values don't matter, as long as they match the actual url
const projectData = {
  imagePath1: "./pictures/works/works1.jpg",
  imagePath2: "./pictures/works/works2.jpg",
  imagePath3: "./pictures/works/works3.jpg",

  linkToSite1: "https://edgarsfrontend.github.io/Hangman-game/",
  linkToSite2: "http://ieluvingrotaji.id.lv/blogs.php",
  linkToSite3: "https://edgarsfrontend.github.io/tattoo/",

  project1: "hangman",
  project2: "blog",
  project3: "tattoo",
};

const sliderImage = document
  .querySelector(".image-window")
  .querySelector("img");
const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
let currentSlider = 1;
const sliderCount = Object.keys(projectData).length / 3;
const dotsWrapper = document.querySelector(".indication-dots");

// add link to first image
const imageOverlay = document.querySelector(".project-info");
imageOverlay.addEventListener("click", () => {
  window.location.href = projectData["linkToSite" + currentSlider];
});

// creating indication dots based on projects count
for (let i = 0; i < sliderCount; i++) {
  let newDot = document.createElement("div");
  dotsWrapper.appendChild(newDot);
  newDot.classList.add("dot");
  if (i == 0) {
    newDot.classList.add("active-dot");
  }
  newDot.addEventListener("click", () => {
    currentSlider = i + 1;
    updateImageWindow(currentSlider);
  });
}

// counting system for slider arrows
arrowLeft.addEventListener("click", () => {
  if (currentSlider == 1) {
    currentSlider = sliderCount;
  } else {
    currentSlider--;
  }
  updateImageWindow(currentSlider);
});

arrowRight.addEventListener("click", () => {
  if (currentSlider == sliderCount) {
    currentSlider = 1;
  } else {
    currentSlider++;
  }
  updateImageWindow(currentSlider);
});

// this function does too much like it's not even fair
function updateImageWindow(currentSlider) {
  // changes image path
  sliderImage.src = projectData["imagePath" + currentSlider];

  // adds link to img
  imageOverlay.addEventListener("click", () => {
    window.location.href = projectData["linkToSite" + currentSlider];
  });

  // add fade animation
  sliderImage.classList.add("fade");
  setTimeout(() => {
    sliderImage.classList.remove("fade");
  }, 500);

  // adds active state class for indication dots
  document.querySelector(".active-dot").classList.remove("active-dot");
  document
    .getElementsByClassName("dot")
    [currentSlider - 1].classList.add("active-dot");

  updateProjectInfo(currentSlider);
}

// adding scale tilt effect to dev icons
const devIcons = document.querySelector(".dev-tools").querySelectorAll("img");
devIcons.forEach((icon) => {
  icon.setAttribute("data-tilt", "");
  icon.setAttribute("data-tilt-scale", "1.2");
});

// dynamic project info
const projectTitle = imageOverlay.querySelector("h4");
const projectDescription = imageOverlay.querySelector("p");

function updateProjectInfo(currentSlider) {
  let attr = document
    .querySelector(".active")
    .parentElement.getAttribute("language");
  projectTitle.textContent =
    languages[attr][projectData["project" + currentSlider] + "SiteTitle"];
  projectDescription.textContent =
    languages[attr][projectData["project" + currentSlider] + "SiteDescription"];
}
updateProjectInfo(1);
languageLinks[0].click(); // so that i don't have to type content in html lol

// text appears on scroll
function appearOnScroll() {
  const appearObjects = document.getElementsByClassName("animate-appear");
  let screenPosition = window.innerHeight;
  [...appearObjects].forEach((el) => {
    let elPosition = el.getBoundingClientRect().top;
    if (elPosition < screenPosition) {
      el.classList.add("appear");
    } else {
      el.classList.remove("appear"); // optional
    }
  });
}
window.addEventListener("scroll", appearOnScroll);

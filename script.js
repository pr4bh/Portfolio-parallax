const saluteTextContainer = document.querySelector(".saluteTextContainer");
const saluteImgContainer = document.querySelector(".saluteImgContainer");
const authorName = document.querySelector(".name");
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer");
const jobTitles = document.querySelectorAll(".jobTitle");
const projectsTitle = document.querySelector(".projectsTitle");
const phones = document.querySelectorAll(".skyshelf");
const laptop = document.querySelector(".review");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let windowHeight = window.innerHeight;

  // SALUTE Section
  saluteTextContainer.style.transform = `translateY(${scrollY * 0.1}px)`;
  saluteImgContainer.style.transform = `translate(${scrollY * 0.4}px, ${scrollY * 0.7}px)`;

  // NAME Section
  authorName.style.transform = `translateX(${scrollY * 0.1}px)`;

  // DESIGNER + DEVELOPER titles
  jobTitleContainers.forEach((container, index) => {
    const rect = container.getBoundingClientRect();
    const offset = rect.top - windowHeight / 2;
    const maxTranslate = 100; // tweak this to adjust max movement
    let x = Math.max(-maxTranslate, Math.min(maxTranslate, -offset * 0.2));
    jobTitles[index].style.transform = `translateX(${x}px)`;
  });

  // PROJECTS
  const projectsOffset = document.querySelector(".projects").offsetTop;
  const scrollIntoProjects = scrollY - projectsOffset + windowHeight;

  if (scrollIntoProjects > 0) {
    projectsTitle.style.transform = `translateY(${Math.max(0, 100 - scrollIntoProjects * 0.1)}px)`;
    phones[0].style.transform = `translateX(${Math.max(0, 200 - scrollIntoProjects * 0.2)}px)`;
    laptop.style.transform = `translateX(${Math.max(0, 300 - scrollIntoProjects * 0.2)}px)`;
    phones[1].style.transform = `translateX(${Math.max(0, 400 - scrollIntoProjects * 0.2)}px)`;
  }
});

const aboutbut = document.getElementById("about-but")
const educationbut = document.getElementById("education-but")
const achivementsbut = document.getElementById("achivements-but")
const contactbut = document.getElementById("contact-but")
const about = document.getElementById("about")
const education = document.getElementById("education")
const achivements = document.getElementById("achivements")
const contact = document.getElementById("contact")
const form = document.getElementById("form")
const aimages = Array.from(document.getElementsByClassName("img"))

document.addEventListener("DOMContentLoaded", function() {

    aboutbut.addEventListener("click", function(event) {
      event.preventDefault();
      about.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the projects div
      aboutbut.style.backgroundColor="black";
      educationbut.style.backgroundColor="grey";
      achivementsbut.style.backgroundColor="grey";
      contactbut.style.backgroundColor="grey";
    });

    educationbut.addEventListener("click", function(event) {
      event.preventDefault();
      education.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the projects div
      aboutbut.style.backgroundColor="grey";
      educationbut.style.backgroundColor="black";
      achivementsbut.style.backgroundColor="grey";
      contactbut.style.backgroundColor="grey";
    });

    achivementsbut.addEventListener("click", function(event) {
      event.preventDefault();
      achivements.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the projects div
      aboutbut.style.backgroundColor="grey";
      educationbut.style.backgroundColor="grey";
      achivementsbut.style.backgroundColor="black";
      contactbut.style.backgroundColor="grey";
    });

    contactbut.addEventListener("click", function(event) {
      event.preventDefault();
      contact.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the projects div
      aboutbut.style.backgroundColor="grey";
      educationbut.style.backgroundColor="grey";
      achivementsbut.style.backgroundColor="grey";
      contactbut.style.backgroundColor="black";
    });

});

form.addEventListener("submit",()=>{
    const name = form.elements.name.value;
    const message = form.elements.message.value
    alert("Message Sent Successfully")
    form.reset();
})

setInterval(() => {
  for (let index = 0; index < aimages.length; index++) {
    setTimeout(() => {
      const element1 = aimages[index];
      const element2 = aimages[index+1];
      const element3 = aimages[index-2];
      const element4 = aimages[index-3];
      element1.classList.add("rotate");
      element2.classList.remove("rotate");
      element3.classList.remove("rotate");
      element4.classList.remove("rotate");
    }, 3000 * (index + 1));
  }
}, 12000);

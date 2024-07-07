const link = document.location.href
const cvProject = document.querySelector("#cv-project")
const petsProject = document.querySelector("#pets-project")
const newsProject = document.querySelector("#news-project")

if (link.endsWith("?cv-project")) {
    cvProject.classList.remove("hide")
} else if (link.endsWith("?pets-project")) {
    petsProject.classList.remove("hide")
} else if (link.endsWith("?news-project")) {
    newsProject.classList.remove("hide")
}
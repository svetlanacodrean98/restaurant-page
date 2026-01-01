export function loadAbout() {
    let content = document.getElementById("content")

    let div = document.createElement("div")
    div.setAttribute("id", "about")
    div.classList.add("tabcontent")

    let title = document.createElement("h1")
    title.innerHTML = "About"
    div.appendChild(title)

    let description = document.createElement("h2")
    description.innerHTML = "about"
    div.appendChild(description)

    content.appendChild(div)
}
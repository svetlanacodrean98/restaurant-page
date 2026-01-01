export function loadMenu() {
    let content = document.getElementById("content")

    let div = document.createElement("div")
    div.setAttribute("id", "menu")
    div.classList.add("tabcontent")

    let title = document.createElement("h1")
    title.innerHTML = "Menu"
    div.appendChild(title)

    let description = document.createElement("h2")
    description.innerHTML = "menu"
    div.appendChild(description)

    content.appendChild(div)
}
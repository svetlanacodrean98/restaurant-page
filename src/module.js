import { loadHome } from "./home.js"
import { loadAbout } from "./about.js"
import { loadMenu } from "./menu.js"

export function initialLoad() {
    loadHome()
    loadAbout()
    loadMenu()
    document.getElementById("home").style.display = "block"
    document.getElementById("homebtn").classList.add("active")
}

export function openPage(btnId, tabId) {
    const button = document.getElementById(btnId)
    button.addEventListener("click", (event) => {
        let tabcontents = document.getElementsByClassName("tabcontent")
        for (let i=0; i<tabcontents.length; i++) {
            tabcontents[i].style.display = "none"
        }
        let tablinks = document.getElementsByClassName("tablink")
        for (let i=0; i<tablinks.length; i++) {
            tablinks[i].classList.remove("active")
        }
        document.getElementById(tabId).style.display = "block"
        event.currentTarget.classList.add("active")
    })
}
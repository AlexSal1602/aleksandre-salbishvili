"use strict"

const startPage = (() => {
  const html = document.documentElement,
    s = "start-map"
  html.classList.add(s)
  window.addEventListener("load", function () {
    setTimeout(() => {
      html.classList.remove(s)
    }, 2000) // the time must be at least equal to the duration of the CSS animation (personally I put a little more).
  })
})()

//for remove loadder in 2 secs.

const onLoadPage = document.querySelector(".onload-page")

window.addEventListener("load", function () {
  setTimeout(function () {
    onLoadPage.style.display = "none"
  }, 2000)
})

document.querySelector(".my-photo").setAttribute("draggable", false)

const myAgePlace = document.querySelector(".myAgePlace")
const dt = new Date()
const year = dt.getFullYear()
const myAge = year - 1995
myAgePlace.innerHTML = myAge

//smoothed jump to id

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    })
  })
})

$(document).ready(function () {
  $(window).scrollTop(0)
})

//element slides on mousemove, could be it on scroll.
function reveal() {
  var reveals = document.querySelectorAll(".reveal")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active")
    } else {
      reveals[i].classList.remove("active")
    }
  }
}

setTimeout(() => {
  window.addEventListener("mousemove", reveal)
}, "2000")

// Add active class to the current button (highlight it)
var header = document.getElementById("mynav")
var btns = header.getElementsByClassName("nav-item")
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "")
    this.className += " active"
  })
}

//horizontal scroll
/* let variation = 0;
    document.addEventListener("wheel", function (e) {
    variation += parseInt(e.deltaY);
    console.log(variation);
      //document.getElementById("body");
      document.documentElement.scrollLeft = document.body.scrollLeft = (variation);
    return false;
    
}, true); */

// scroll to top
window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}

const mailClipboard = document.getElementById("mail")
mailClipboard.addEventListener("click", () => {
  navigator.clipboard.writeText("asalbishvili@hotmail.com").then(() => {
    alert("Email copied to clipboard")
  })
})

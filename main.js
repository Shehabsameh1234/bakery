let navBar = document.getElementById("nav-bar")
let spanAbout = document.getElementById("span-about")
let spanOffer = document.getElementById("span-offer")
let spanGallery = document.getElementById("span-gallery")
let spanBlog = document.getElementById("span-blog")
let spanContact = document.getElementById("span-contanct")
let iconSliede = document.getElementById("icon-slide")
let slideRight = document.getElementById("right-slide")
let slideRed = document.getElementById("slide-red")
let slideTeal = document.getElementById("slide-teal")
let slideTomato = document.getElementById("slide-tomato")
let slideBlack = document.getElementById("slide-black")
var rootCss = document.querySelector(':root')
var slidepos = document.querySelector('.right-slide-color')
let imglogo = document.getElementById("img-logo")





function myFunction_red() {
  rootCss.style.setProperty('--brown', 'red');
}
function myFunction_teal() {
  rootCss.style.setProperty('--brown', 'teal');
}
function myFunction_tomato() {
  rootCss.style.setProperty('--brown', 'tomato');
}
function myFunction_black() {
  rootCss.style.setProperty('--brown', 'black');
}





window.onscroll = function () {

  if (scrollY >= 300) {
    navBar.style.background = "white"
    navBar.classList.remove("navbar-dark")
    navBar.classList.add("navbar-light")
    document.getElementById("nav-bar").style.transition = "all .4s";
    spanAbout.classList.add("underline-nav")
    spanOffer.classList.add("underline-nav")
    spanGallery.classList.add("underline-nav")
    spanBlog.classList.add("underline-nav")
    spanContact.classList.add("underline-nav")
    imglogo.setAttribute("src", "img/chef-hat (1).png")


  } else {

    navBar.style.background = "transparent"
    navBar.classList.add("navbar-dark")
    spanAbout.classList.remove("underline-nav")
    spanOffer.classList.remove("underline-nav")
    spanGallery.classList.remove("underline-nav")
    spanBlog.classList.remove("underline-nav")
    spanContact.classList.remove("underline-nav")
    imglogo.setAttribute("src", "img/chef-hat (2).png")

  }
}





function slider() {



  if (slideRight.offsetWidth == "200") {
    iconSliede.classList.remove("animation")
    slideRight.style.width = "40px"
    iconSliede.style.bottom = "0%"
    iconSliede.style.top = "6%"
    iconSliede.style.right = "15%"
    slideRed.style.display = "none"
    slideTeal.style.display = "none"
    slideTomato.style.display = "none"
    slideBlack.style.display = "none"
    document.getElementById("right-slide").style.transition = "all 1s";
  }


  else  {
    document.getElementById("right-slide").style.transition = "all 0s";
    iconSliede.classList.add("animation")
    iconSliede.style.position = "relative"
    iconSliede.style.left = "0%"
    iconSliede.style.top = "-5PX"
    slideRight.style.width = "200px"
    slideRed.style.display = "inline-block"
    slideTeal.style.display = "inline-block"
    slideTomato.style.display = "inline-block"
    slideBlack.style.display = "inline-block"
  }

}



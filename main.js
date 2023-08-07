let navBar = document.getElementById("nav-bar")
let spanAbout = document.getElementById("span-about")
let spanOffer = document.getElementById("span-offer")
let spanGallery = document.getElementById("span-gallery")
let spanBlog = document.getElementById("span-blog")
let spanContact = document.getElementById("span-contanct")
var rootCss = document.querySelector(':root')
let imglogo = document.getElementById("img-logo")
let innerModal = document.getElementById("inner-modal")
let galleryModal = document.querySelector("#gallery-modal")
let iconZoomGalery = Array.from(document.querySelectorAll("#gallery i"))
let currrentindex = 0
let arrowUp = document.getElementById("arrowup")
let rightSlide = document.getElementById("right-slide")
let gearIcon = document.getElementById("gearicon")
let btnSlide = document.getElementById("btn-slide")
let colorsSlide = document.getElementById("colors-slide")
let randomImg = Array.from(document.querySelectorAll("#gallery img"))
let bgHome = document.querySelector(".background-head")
let settingIcon = document.getElementById("fa-gear")
let form = document.getElementById("form-message")
let btnMessage = document.getElementById("btn-message")
let messageSent = document.getElementById("messagesent")
let spanHere = document.getElementById("pressHere")
let inputName = document.getElementById("inputname")
let inputMail = document.getElementById("inputmail")
let inputMessage = document.getElementById("inputmessage")
let inputSubject = document.getElementById("inputsubject")
var validname = /^[a-zA-Z ]{3,20}$/;
var validemail = /^[\w-\.]+@([a-z]+\.)+[a-z]{2,4}$/;
var validmessage = /\w+/;




function shehab(value){
  


let nametest = validname.test(value)
console.log(nametest)
  if( nametest == true){
btnMessage.removeAttribute("data-bs-toggle")
  }else{
    btnMessage.setAttribute("data-bs-toggle","modal")
  }
}




function messagesent(){

  let messagetest = validmessage.test(inputMessage.value.toLowerCase())
  let emailtest = validemail.test(inputMail.value.toLowerCase())
  let nametest = validname.test(inputName.value.toLowerCase())

  if (messagetest == true && emailtest == true && nametest == true) {
    form.style.display = "none"
    messageSent.style.display = "block"
    clearinputs()
  }
 } 

function clearinputs() {
  inputMessage.value = ""
  inputName.value = ""
  inputMail.value = ""
  inputSubject.value = ""
}

spanHere.addEventListener("click", function () {
  form.style.display = "block"
  messageSent.style.display = "none"
})



















function randombg() {
  randomnumber = Math.floor(Math.random() * randomImg.length)
  let bghomesrc = randomImg[randomnumber].getAttribute("src")
  bgHome.style.backgroundImage = `url(${bghomesrc})`

}



gearIcon.addEventListener("click", function () {
  if (rightSlide.offsetWidth == "200") {
    rightSlide.style.width = "0px";
    settingIcon.classList.remove("animation-gear");
    btnSlide.style.display = 'none';
    btnSlide.style.opacity = '0';
    colorsSlide.style.display = "none";
    colorsSlide.style.opacity = "0";

  } else if (rightSlide.offsetWidth == "0") {
    rightSlide.style.width = "200px"
    settingIcon.classList.add("animation-gear")
    btnSlide.style.opacity = '1';
    colorsSlide.style.opacity = "1";
    setTimeout(() => {
      btnSlide.style.display = 'block';
      colorsSlide.style.display = "flex";
    }, 250)
  }
})


arrowUp.onclick = function () {
  scroll({
    top: 0,
    behavior: "smooth"
  })
}



for (var i = 0; i < iconZoomGalery.length; i++) {
  iconZoomGalery[i].addEventListener("click", function (e) {
    currrentindex = iconZoomGalery.indexOf(e.target)
    srcimg = (e.target.getAttribute("src"))
    galleryModal.style.display = "block"
    innerModal.style.backgroundImage = `url(${srcimg})`
  })
}
function closemoadl() {
  galleryModal.style.display = "none"
}



function prevpic() {
  currrentindex--
  if (currrentindex === 14) {
    currrentindex = 17
  } if (currrentindex === 11) {
    currrentindex = 14
  } if (currrentindex === 8) {
    currrentindex = 11
  } if (currrentindex === -1) {
    currrentindex = 8

  }


  console.log(currrentindex)


  let prevsrc = iconZoomGalery[currrentindex].getAttribute("src")
  innerModal.style.backgroundImage = `url(${prevsrc})`
}


function nextpic() {
  currrentindex++
  if (currrentindex === 9) {
    currrentindex = 0
  } if (currrentindex === 12) {
    currrentindex = 9
  } if (currrentindex === 15) {
    currrentindex = 12
  } if (currrentindex === 18) {
    currrentindex = 15
  }
  console.log(currrentindex)
  let prevsrc = iconZoomGalery[currrentindex].getAttribute("src")
  innerModal.style.backgroundImage = `url(${prevsrc})`
}




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
    arrowUp.style.opacity = "1"
  } else {
    navBar.style.background = "transparent"
    navBar.classList.add("navbar-dark")
    spanAbout.classList.remove("underline-nav")
    spanOffer.classList.remove("underline-nav")
    spanGallery.classList.remove("underline-nav")
    spanBlog.classList.remove("underline-nav")
    spanContact.classList.remove("underline-nav")
    imglogo.setAttribute("src", "img/chef-hat (2).png")
    arrowUp.style.opacity = "0"

  }
}





// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//     document.querySelector("body").style.visibility = "hidden";
//     document.getElementById("loading_indicator").style.visibility = "visible";

//   } else {
//     setTimeout(() => {
//       document.getElementById("loading_indicator").style.display = "none";
//       document.querySelector("body").style.visibility = "visible";
//     }, 2000)
//   }
// };



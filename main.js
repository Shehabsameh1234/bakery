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
let imgGallery=document.querySelectorAll("#gallery img")
let inner1=document.getElementById("inner")
let galleryModal=document.querySelector("#gallery-modal")
let iconZoomGalery=Array.from(document.querySelectorAll("#gallery i"))
let currrentindex=0
let nexticonmodal=document.getElementById("next")
let previconmodal=document.getElementById("prev")
let arrowUp=document.getElementById("arrowup")


let shehab1=document.getElementById("shehab")
let shehab2=document.getElementById("a7a")

shehab2.addEventListener("click",function(){
if(shehab1.offsetWidth == "200"){
shehab1.style.width="0px"
shehab2.style.left="100%"
}else if(shehab1.offsetWidth == "0"){
  shehab1.style.width="200px"
  shehab2.style.left="78%"
}
})



var rootElement = document.documentElement;
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
arrowUp.addEventListener("click",scrollToTop );






for(var i=0;i<iconZoomGalery.length;i++){
iconZoomGalery[i].addEventListener("click",function (e){ 
   currrentindex = iconZoomGalery.indexOf(e.target)
 srcimg=(e.target.getAttribute("src"))
galleryModal.style.display="block"
inner1.style.backgroundImage=`url(${srcimg})`
})
}
function closemoadl(){
  galleryModal.style.display="none"
}



function prevpic(){
  currrentindex--
  if(currrentindex===14){
    currrentindex=17
  }if(currrentindex===11){
    currrentindex=14
  }if(currrentindex===8){
currrentindex=11
  }if(currrentindex===-1){
    currrentindex=8

  }


console.log(currrentindex)


let prevsrc=iconZoomGalery[currrentindex].getAttribute("src")
inner1.style.backgroundImage=`url(${prevsrc})`
}


function nextpic(){
  currrentindex++
  if(currrentindex===9){
    currrentindex=0
  }if(currrentindex===12){
    currrentindex=9
  }if(currrentindex===15){
currrentindex=12
  }if(currrentindex===18){
currrentindex=15
  }
  console.log(currrentindex)
let prevsrc=iconZoomGalery[currrentindex].getAttribute("src")
inner1.style.backgroundImage=`url(${prevsrc})`
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
    arrowUp.style.opacity="1"



  } else {

    navBar.style.background = "transparent"
    navBar.classList.add("navbar-dark")
    spanAbout.classList.remove("underline-nav")
    spanOffer.classList.remove("underline-nav")
    spanGallery.classList.remove("underline-nav")
    spanBlog.classList.remove("underline-nav")
    spanContact.classList.remove("underline-nav")
    imglogo.setAttribute("src", "img/chef-hat (2).png")
    arrowUp.style.opacity="0"

  }
}





// function slider() {

//    if (slideRight.offsetWidth == "200") {
//     slideRed.style.display = "none"
//     slideTeal.style.display = "none"
//     slideTomato.style.display = "none"
//     slideBlack.style.display = "none"
//     iconSliede.classList.remove("animation")
//     slideRight.style.width = "40px"
//     iconSliede.style.top = "3px"
    
//   }

//   else if (slideRight.offsetWidth == "40") {
//     slideRed.style.display = "inline-block"
//     slideTeal.style.display = "inline-block"
//     slideTomato.style.display = "inline-block"
//     slideBlack.style.display = "inline-block"
//     iconSliede.classList.add("animation")
//     iconSliede.style.position = "relative"
//     iconSliede.style.top = "-4PX"
//     slideRight.style.width = "200px"
  
//   }

// }


// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//      document.querySelector("body").style.visibility = "hidden";
//      document.getElementById("loading_indicator").style.visibility = "visible";
    
//   } else {
//      setTimeout(() => {
//         document.getElementById("loading_indicator").style.display ="none";
//         document.querySelector("body").style.visibility = "visible";
//      }, 2000)
//   }
// };



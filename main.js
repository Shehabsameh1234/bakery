let navBar=document.getElementById("nav-bar")




window.onscroll = function () {
    if (scrollY >= 300) {
        navBar.style.background="white"
        navBar.classList.remove("navbar-dark")
        navBar.classList.add("navbar-light")

    }else{
        navBar.style.background="transparent"
        navBar.classList.add("navbar-dark")
    }
}







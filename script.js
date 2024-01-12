const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// page-3 element code

let ElemContainer = document.querySelector(".element-container")
let fixedBox = document.querySelector("#fixedimage")
let elements = document.querySelectorAll(".element")

ElemContainer.addEventListener("mouseenter",()=>{
    fixedBox.style.display = "block"
})
ElemContainer.addEventListener("mouseleave",()=>{
    fixedBox.style.display = "none"
})

elements.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        let image = e.getAttribute("data-image")
        fixedBox.style.backgroundImage =`url(${image})`
    })
})

// swiper code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    grabCursor: true,
  });


// hamburger code

let Menu = document.querySelector("nav h3")
let MenuBody = document.querySelector(".menu-body")
let navImg = document.querySelector("nav img")
let MenuIcon = document.querySelector("input")
let flag = 0
Menu.addEventListener("click",()=>{
    if(flag==0){
        MenuBody.style.top = 0
        navImg.style.opacity = 0
        flag = 1
        MenuIcon.checked = true
    }
    else{
        MenuBody.style.top = "-100%"
        navImg.style.opacity = 1
        flag = 0
        MenuIcon.checked = false
    }
})

//loader code
let loader = document.querySelector("#loader")
setTimeout(function() {
    loader.style.top = "-100%"
}, 4200);

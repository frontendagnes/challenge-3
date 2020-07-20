const navHead = document.querySelector(".div-head")

function sticky(){
    if (window.scrollY > 72){
        navHead.classList.add("sticky")
    }else{
        navHead.classList.remove("sticky")
    }
}

window.addEventListener("scroll", sticky)

const clickOpen = document.querySelector(".click-open")
const clickClose = document.querySelector(".click-close")
const menuCnt = document.querySelector(".menu-cnt")

clickOpen.addEventListener("click", function(){
    menuCnt.classList.add("menu-cnt-active")
    clickOpen.classList.remove("click-active")
    clickClose.classList.add("click-active")
})

clickClose.addEventListener("click", function(){
    menuCnt.classList.remove("menu-cnt-active")
    clickOpen.classList.add("click-active")
    clickClose.classList.remove("click-active")
})
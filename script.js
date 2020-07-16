const navHead = document.querySelector(".div-head")
const menuCnt = document.querySelector(".menu-cnt")


function sticky(){
    if (window.scrollY > 72){
        navHead.classList.add("sticky")
        menuCnt.classList.add("menu-sticky")
    }else{
        navHead.classList.remove("sticky")
        menuCnt.classList.remove("menu-sticky")
    }
}

window.addEventListener('scroll', sticky)


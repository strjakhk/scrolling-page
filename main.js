const mainContent = document.getElementById("main-content")
const pageNodes = document.querySelectorAll("#main-content > div")
const upArrow = document.querySelector("#scroll > i:nth-child(1) > svg")
const downArrow = document.querySelector("#scroll > i:nth-child(3) > svg")

const menuList = [
    { name: "main", node : document.querySelectorAll("#menu > ul > li")[0] },
    { name: "about", node : document.querySelectorAll("#menu > ul > li")[1] },
    { name: "contact", node : document.querySelectorAll("#menu > ul > li")[2] }
]
const pages = [
    { name: "main", node : pageNodes[0] },
    { name: "about", node : pageNodes[1] },
    { name: "contact", node : pageNodes[2] },
]

let throttle = true // REGULADOR
let pageIndex = 0
let currentPage = pages[pageIndex]

// Menu desplegable en la parte derecha de la pantalla, con flechas

const newPageTransition = (nextPage, animDir) =>{

    animateNode(currentPage.node, 1, 500, animDir)
    .onfinish = () =>{
        currentPage.node.style.zIndex = 999
        nextPage.node.style.zIndex = 1000

        currentPage = nextPage
        throttle = true
    }
}

const setPageStyles = () =>{
    pages.forEach(page => {
        if(page.name != currentPage.name){
            page.node.style.zIndex = -1
        }else{
            currentPage.node.style.zIndex = 1000
        }
    })
}

const updateCurrentPage = (nextPage, animDir) =>{
    setPageStyles()

    nextPage.node.style.zIndex = 999
    newPageTransition(nextPage, animDir)

    menuList.forEach(page => {
        if(page.name == nextPage.name){
            const svg = page.node.querySelector("svg")
            svg.classList.add("active-page")
        }else{
            const svg = page.node.querySelector("svg")
            svg.classList.remove("active-page")
        }
    })
}

const next = () =>{
    let nextPage
    pageIndex++
    if(pages[pageIndex]){
        nextPage = pages[pageIndex]
    }else{
        pageIndex = 0
        nextPage = pages[pageIndex]
    }
    updateCurrentPage(nextPage, translateYup)
    animateNode(downArrow, 1, 500, arrowBlinkAnimation)
}

const prev = () =>{
    let nextPage
    pageIndex--
    if(pages[pageIndex]){
        nextPage = pages[pageIndex]
    }else{
        pageIndex = 2
        nextPage = pages[pageIndex]
    }
    updateCurrentPage(nextPage, translateYdown)
    animateNode(upArrow, 1, 500, arrowBlinkAnimation)
}

mainContent.addEventListener("wheel", (e) =>{
    changePage(e.deltaY)
})

const changePage = (direction) =>{
    if(throttle){
        throttle = false
        direction > 0 ? next() : prev() // cambio de página actual
    }
}

const setWindowHeight = () =>{
    const windowHeight = window.innerHeight
    mainContent.style.height = `${windowHeight}px`
}

window.onresize = () =>{
    setWindowHeight()
}

setPageStyles()
setWindowHeight()

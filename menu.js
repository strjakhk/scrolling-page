const menu = document.querySelector("#menu")

let timeout = null

let menuActive = false

const showMenu = () =>{
    menu.classList.replace("menu-hidden", "menu-shown")
    menuActive = true
}

const hideMenu = () =>{
    menu.classList.replace("menu-shown", "menu-hidden")
    menuActive = false
}

menu.onmouseenter = () =>{
    showMenu()
    clearTimeout(timeout)
    timeout = null
}

menu.onmouseleave = () =>{
    hideMenu()
}

mainContent.addEventListener("wheel", () =>{
    if(menuActive){
        if(timeout){
            clearTimeout(timeout)
            timeout = setTimeout(() =>{
                hideMenu()
                timeout = null
            }, 2000)
        }
    }else{
        showMenu()
        timeout = setTimeout(() => {
            hideMenu()
            timeout = null
        }, 2000)
    }
})


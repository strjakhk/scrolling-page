const greaterThan = document.querySelector("#greater-than")
const news = document.querySelector("#news > span")
const title = document.querySelector("#title")
const scrollIcon = document.querySelector("#scroll > i:nth-child(2)")
const contact = document.querySelector("#contact > span")

const blink = (node) =>{
    let blkswitch = true
    const blinkInterval = setInterval(() => {
        if(blkswitch){
            node.style.opacity = "1"
            blkswitch = !blkswitch
        }else{
            node.style.opacity = "0"
            blkswitch = !blkswitch
        }
    }, 500)
}

const colorBlink = (node) =>{
    animateNode(node, Infinity, 2500, colorBlinkAnimation)
}

const textWritten = (text, node, timer) => {
    text += "               "
    let index = 0
    let direction = 1

    const textwrittenInterval = setInterval(() =>{

        if(index == text.length){
            direction = -1
        }else if(index == 0){
            direction = 1
        }
    
        if(direction == -1 && text[index - 1] == " "){
            node.textContent = text.slice(0, index + 1)
            index -= 2
        }else if(direction == 1 && text[index + 1] == " "){
            node.textContent = text.slice(0, index + 1)
            index += 2
        }else{
            node.textContent = text.slice(0, index + 1)
            index += direction
        }
    
    }, timer)
}


blink(contact)
blink(greaterThan)
blink(news)
colorBlink(scrollIcon)
textWritten("Juan Pablo Strack", title, 80)
const scale = [
    {transform : "scale(1)"},
    {transform : "scale(0)"}
]

const translateX = [
    {transform : "translateX(-1920px)"}
]

const translateYup = [
    {transform : "translateY(-1080px)"}
]

const translateYdown = [
    {transform : "translateY(1080px)"}
]

const showMenuAnimate = [
    { transform : "translateX(0px)" },
    { opacity : 1 }
]

const hideMenuAnimate = [
    { transform : "translateX(58px)" },
    { opacity : 0 }
]

const colorBlinkAnimation = [
    { opacity : 1 },
    { opacity : 0.4 },
    { opacity : 1 }
]

const arrowBlinkAnimation = [
    { opacity : 1, fill : "#ddd"},
    { opacity : 0, fill : "#E6A77D"},
    { opacity : 1, fill : "#ddd"}
]

/**
 * 
 * @param {Node} node HTML Node to animate
 * @param {Number} i Animation iterations
 * @param {Number} s Animation duration (in ms)
 * @param {string} animationName Animatmion name object
 */

const animateNode = (node, i, s, animationName) =>{
    
    const animation = node.animate(animationName, { duration : s, iterations : i })
    return animation
}



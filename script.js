const grid = document.querySelector('.grid-container')
const slider = document.querySelector('#myRange')
const clear = document.querySelector('#clearButton')
const rainbow = document.querySelector('#rainbowButton')
const color = document.querySelector('#colorButton')
let gridSize = 256; // default grid size
let sliderOutput = document.querySelector('.showRange') // number shown from slider
let selectedButton = 'color' // default color
let selectedColor = 'color'
let colorPicker = document.querySelector('#colorPicker')


startup()


/* Functions */
function startup() {
    document.addEventListener('onload', makeGrid(16))
}


function makeGrid(size) {
    let squares = grid.querySelectorAll("div")
    squares.forEach((div) => div.remove())
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let gridSize = size * size

    for(let i=0; i< gridSize; i++) {
        let box = document.createElement('div')
        box.classList.add('grid-box')
        grid.insertAdjacentElement('beforeend', box)
    }
}

function clearGrid() {
    let clearSquares = grid.querySelectorAll("div")
    clearSquares.forEach((div) => div.style.backgroundColor = 'white')
}


function changeColor (selectedSquare, selectedButton) {
    if (selectedSquare.parentNode === grid) {
        if (selectedButton === 'color') {
            let selectedColor = colorPicker.value
            selectedSquare.style.backgroundColor = selectedColor
        }
        if (selectedButton === 'rainbow') {
            let randomColor = randomHexColor()
            selectedSquare.style.backgroundColor = randomColor
        }
    }
}

/* Random Color Functions */
function randomRgbColor() {
    let r = randomInteger(255)
    let g = randomInteger(255)
    let b = randomInteger(255)
    return [r, g, b]
}

function randomHexColor() {
    let [r,g,b] = randomRgbColor()
    let hr = r.toString(16).padStart(2,'0')
    let hg = g.toString(16).padStart(2,'0')
    let hb = b.toString(16).padStart(2,'0')

    return "#" + hr + hg + hb
}

const randomInteger = (max) => Math.floor(Math.random() * (max + 1))



/* Event Listeners */

color.addEventListener('click', e => {
    let selectedButton = e.target
    color.style.color = '#E9ECEF'
    color.style.backgroundColor = '#212121'
    rainbow.style.color = '#212121'
    rainbow.style.backgroundColor = '#E9ECEF'
    selectedColor = 'color'
})

rainbow.addEventListener('click', e => {
    let selectedButton = e.target
    color.style.color = '#212121'
    color.style.backgroundColor = '#E9ECEF'
    rainbow.style.color = '#E9ECEF'
    rainbow.style.backgroundColor = '#212121'
    selectedColor = 'rainbow'
})

clear.addEventListener("click", e => {
    clearGrid()
})

slider.addEventListener("input", e => {
    let gridSizeOutput = e.target.value
    sliderOutput.textContent = `${gridSizeOutput} x ${gridSizeOutput}`
    makeGrid(gridSizeOutput)
})

document.addEventListener("mouseover", e => {
    let square = e.target
    
    changeColor (square, selectedColor)
})


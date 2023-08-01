const grid = document.querySelector('.grid-container')
const slider = document.querySelector('#myRange')
let gridSize = 256; // default grid size
let sliderOutput = document.querySelector('.showRange') // number shown from slider

document.addEventListener('onload', makeGrid(16))


/* Functions */
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

function blackColor (selectedSquare) {
    if (selectedSquare.parentNode === grid) {
        selectedSquare.style.backgroundColor = 'black'
    }
}



slider.addEventListener("input", (e) => {
    let gridSizeOutput = e.target.value
    sliderOutput.textContent = `${gridSizeOutput} x ${gridSizeOutput}`
    makeGrid(gridSizeOutput)

})

document.addEventListener("mouseover", e => {

    let square = e.target
    blackColor(square)
})


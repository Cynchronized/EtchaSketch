const grid = document.querySelector('.grid-container')
grid.style.gridTemplateColumns = "repeat(16, 1fr)"
grid.style.gridTemplateRows = "repeat(16, 1fr)"

document.addEventListener('onload', makeGrid())


/* Functions */
function makeGrid() {
    for(let i=0; i<256; i++) {
        let box = document.createElement('div')
        box.classList.add('grid-box')
        grid.insertAdjacentElement('beforeend', box)
    }
}

document.addEventListener("mouseover", e => {

    let square = e.target

    if (square.parentNode === grid) {
        square.style.backgroundColor = 'black'
    }
    

})
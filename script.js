const grid = document.querySelector('.grid-container')
grid.style.gridTemplateColumns = "repeat(16, 1fr)"
grid.style.gridTemplateRows = "repeat(16, 1fr)"

makeGrid()


/* Functions */
function makeGrid() {

    for(let i=0; i<256; i++) {
        let box = document.createElement('div')
        box.style.backgroundColor = 'white'
        box.style.border = 'thin solid black'
        grid.insertAdjacentElement('beforeend', box)
    }

}

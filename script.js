const canvas = documnet.getElemnetById('drawing-board');
const toolbar = document.getElementById('toolbar');

//creating canvas context
const ctx = canvas.getContext('2d');

// getting the horizontal and vertical offsets of the canvas
// which tells the distance the canvas has from the viewport
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

// specifying exact width and height of the canvas
canvas.width = window.innerWidth - canvasOffsetX
canvas.height = window.innerHeight - canvasOffsetY

// Global variables
let isPainting = false;
let lineWidth = 5;      // default line or stroke width

// These will hold the X and Y coordiates
// from where we started to draw
let StartX;
let StartY;

// logic to clear the canvas
toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
})
const canvas = document.getElementById('drawing-board');
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
});

// logic to handle stroke color and width
toolbar.addEventListener('change', e => {

    // for stroke color
    if (e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    // for stroke width 
    if (e.target.id == 'lineWidth') {
        lineWidth = e.target.value;
    }
});

// funtion to handle realtime drawing
const draw = (e) => {
    if (!isPainting) {
        return;
    }

    // setting context line Width to original lineWidth
    ctx.lineWidth = lineWidth;

    // for creating a pen line effect 
    ctx.lineCap = 'round';

    // to remove the default toolbar width between
    // cursor and the drawing
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);

    // to draw at real time
    ctx.stroke();
}

// logic for drawing
// this event occurs when we start the drawing
canvas.addEventListener('mousedown', (e) => {
    isPainting = true;

    // saving the X & Y coordinates from where
    // we started the drawing
    StartX = e.clientX;
    StartY = e.clientY;
    console.log("hello")
})

// this event occurs when we finish the drawing
canvas.addEventListener('mouseup', (e) => {
    isPainting = false;

    // to color our line need to call stroke() method
    ctx.stroke();

    // to discontinue the previous drawn line to the
    // new line drawn beginPath() method is called
    ctx.beginPath();
    console.log("world")
})

canvas.addEventListener('mousemove', draw);

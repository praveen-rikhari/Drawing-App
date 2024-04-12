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

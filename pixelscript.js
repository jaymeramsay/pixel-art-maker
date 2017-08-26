let body = document.body;
let currentColor = '#030303';

//set and style a canvas
//create a canvas ID
//create function pixels/squares divs
let canvas = document.getElementById('canvas');
//create for loop to loop through squares and attach event listeners
for (let i = 0; i < 3150; i++) {
  let square = document.createElement('div');
  square.className = 'square';
  square.addEventListener('click', function (ev) {
    ev.target.style.backgroundColor = currentColor;
    ev.target.style.borderColor = currentColor;
  })
  canvas.appendChild(square);
}

//set and style a palette

//create color buttons in an array;
let colors = [
  '#ad2105',
  '#ff0000',
  '#ff5900',
  '#ff8c00',
  '#ffbb00',
  '#ffea00',
  '#a5f53c',
  '#34cc02',
  '#289101',
  '#066601',
  '#03ad99',
  '#04ffee',
  '#08c1ff',
  '#0891bf',
  '#045cff',
  '#1f02e0',
  '#c78fff',
  '#8902ff',
  '#622d9e',
  '#a11163',
  '#ff99ee',
  '#CD853F',
  '#A0522D',
  '#8B4513',
  '#D2B48C',
  '#fafffa',
  '#90918f',
  '#61615f',
  '#424241',
  '#030303',
];


//create for loop to iterate over buttons
//creating loops because I'll only need to use them once therefore a function isn't really necessary
let palette = document.getElementById('palette');
for (let i = 0; i < colors.length; i++) {
  //attach colors
  // let pen = colors[i];
  let pen = document.createElement('div');
  pen.className = 'pen';
  pen.style.backgroundColor = colors[i];
  pen.addEventListener('click', function (ev) {
    currentColor = ev.target.style.backgroundColor;
  })
  palette.appendChild(pen);
  console.log(pen + '<<<<WE DID IT');
  //attach event listeners
}

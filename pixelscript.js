window.onload = function () {
  //Creates click event for colors onto pixels
  let body = document.body;
  let currentColor = null;
  //create an array with the colors in it to generate the pen divs
  function createPalette() {
    let palettes = ["hotpink", "red", "darkorange", "gold", "yellow", "yellowgreen", "green",
      "royalblue", "blue", "darkblue", "indigo", "purple", "peru", "brown",
      "saddlebrown", "black", "gray", "white"
    ];

    //loop through the color palette
    palettes.forEach(palette => {
      let myDiv = document.createElement('div');
      myDiv.setAttribute('class', palette);
      console.log(myDiv);
      // create click event
      myDiv.addEventListener("click", function (event) {
        let element = event.target;
        console.log(this.style.backgroundColor);
        currentColor = element.classList[0];
        console.log('I CLICK IT!');
        // console.log("current THIS!", this);
      })
      body.append(myDiv);
    })
  }
  createPalette();

  let container = document.createElement('div');
  container.setAttribute('class', "container");
  body.append(container);

  for (let x = 0; x < 19; x++) {
    let row = document.createElement('div');
    row.setAttribute('class', "row");
    container.append(row);
    for (let y = 0; y < 92; y++) {
      let square = document.createElement('div');
      square.setAttribute('class', 'square');
      row.append(square);
      square.addEventListener('click', function (event) {
        let element = event.target;
        console.log(currentColor);
        element.style.backgroundColor = currentColor;
        element.style.borderColor = currentColor;
        console.log("CLICKED!");
      })
    }
  }

  // }

  // let penColor = "black";
  // function setPenColor(pen) {
  //   penColor = pen;
  // }
  //
  // function setPixelColor(pixel) {
  //   pixel.style.backgroundColor = penColor;
  // }
  //create all classes to match color

}

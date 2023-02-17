/*Programacion de JavaScript*/
var imagenes = document.querySelectorAll('.pieces');
const target = document.querySelector('#target');
const pieza1 = document.querySelector('#piece1');

// var y = target.offsetTop;
// var x = target.offsetLeft;

// console.log("Top: " + y + "px");
// console.log("Left: " + x + "px");


// Recorre cada imagen
imagenes.forEach(imagen => {
    var pieceTop = target.offsetTop + (target.offsetHeight - imagen.offsetHeight) / 2;
    var pieceLeft = target.offsetLeft + (target.offsetWidth - imagen.offsetWidth) / 2;
    imagen.style.top = pieceTop + "px";
    imagen.style.left = pieceLeft + "px";
    console.log("Top: img " + pieceTop + "px");
    console.log("Left: img " + pieceLeft + "px");

    pieza1.style.left =  "518px";
    pieza1.style.top =   "128.5px";

    // Genera posiciones aleatorias
    const left = Math.floor(Math.random() * window.innerWidth);
    const top = Math.floor(Math.random() * window.innerHeight);
  
    // Asigna las posiciones aleatorias a las propiedades left y top de la imagen
    imagen.style.left = `${left}px`;
    imagen.style.top = `${top}px`;
    // imagen.style.zIndex = 1;

    let highestZ = 0;
    let isDragging = false;
    let currentX = left;
    let currentY = top;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    imagen.addEventListener("click", posicionarImagen)
    imagen.addEventListener("mousedown", dragStart);
    imagen.addEventListener("mouseup", dragEnd);
    imagen.addEventListener("mouseout", dragEnd);
    imagen.addEventListener("mousemove", drag);

    function posicionarImagen(){
      if (this === imagen) {
        imagen.style.zIndex = ++highestZ;
      }   
    }
    
    function dragStart(e) {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    
      isDragging = true;
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;
    
      isDragging = false;
    }
    
    function drag(e) {
      if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
    
        xOffset = currentX;
        yOffset = currentY;
    
        setTranslate(currentX, currentY, imagen);
      }
    }
    
    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
  

  });

// function imprimir(){
//   alert("loca hpta")
// }

  
  
  




    // const pieces = document.querySelectorAll('.pieces');
  //   pieces.forEach(piece => {
  //     piece.addEventListener("mousedown", dragStart => {
  //       dragStart
  //           .dataTransfer
  //           .setData('text/plain', piece.id);
  //   });
  // });

  // target.addEventListener("mouseup", dragEnd => {
  //   dragEnd
  //     .preventDefault();
  // });

  // target.addEventListener("mouseout", dragEnd => {
  //   const id = dragEnd.dataTransfer.getData('text/plain');
  //   const piece = document.querySelector(`#${id}`);
  //   dragEnd.target.appendChild(piece);
  // });

//   const arrastrables = document.querySelectorAll("#img");
//   arrastrables.addEventListener('dragstart', (e) => {
//     console.log("Drag Start");
//   })

//   function onDragStart(event) {
//     event
//         .dataTransfer
//         .setData('text/plain', event.target.id);

//     event
//         .currentTarget
//         // .style
//         // .backgroundColor = 'yellow';
//   }

//   function onDrop(event) {
//     const id = event
//         .dataTransfer
//         .getData('text');
//     const draggableElement = document.getElementById(id);
//     const dropzone = event.target;
//     dropzone.appendChild(draggableElement);
//     event
//         .dataTransfer
//         .clearData();
//   }

//   function onDragOver(event) {
//     event.preventDefault();
//   }

 /* let imagen = imagenes.addEventListener("mousedown", presionarMouse);
  document.addEventListener("mouseup", soltarMouse);

var x = 0;
var y = 0;

function presionarMouse(event) {
    x = event.clientX - imagen.offsetLeft;
    y = event.clientY - imagen.offsetTop;
    document.addEventListener("mousemove", moverImagen);
}

function moverImagen(event) {
    imagen.style.left = (event.clientX - x) + "px";
    imagen.style.top = (event.clientY - y) + "px";
}

function soltarMouse() {
    document.removeEventListener("mousemove", moverImagen);
} */

//   elementoSeleccionado = imagenes.addEventListener("mousedown", seleccionarElemento(event))
//   document.addEventListener("mouseup", soltarMouse());
  
//   let elementoSeleccionado = 0;
//   let actualX = 0;
//   let actualY = 0;
//   let actualPosX = 0;
//   let actualPosY = 0;

//   function seleccionarElemento(event){
//     elementoSeleccionado = event.target;
//     actualX = event.clientX;
//     actualY = event.clientY;
//     actualPosX = parseFloat(elementoSeleccionado.getAttribute("left"));
//     actualPosY = parseFloat(elementoSeleccionado.getAttribute("top"));
//     elementoSeleccionado.addEventListener("mousemove", moverElemento(event))
//   }

// function seleccionarElemento(event) {
//     actualX = event.clientX; 
//     actualY = event.clientY; 
//     actualPosX =  elementoSeleccionado.offsetLeft;
//     actualPosY = elementoSeleccionado.offsetTop;
//     elementoSeleccionado.addEventListener("mousemove", moverImagen());
// }

// function moverImagen(event) {
//     let dx = event.clientX - actualX;
//     let dy = event.clientY - actualY;
//     actualPosX = actualPosX * dx;
//     actualPosY = actualPosY * dy;
//     elementoSeleccionado.style.left = actualPosX;
//     elementoSeleccionado.style.top = actualPosY;
//     actualX = event.clientX; 
//     actualY = event.clientY; 
// }

// function soltarMouse() {
//     document.removeEventListener("mousemove", moverImagen());
// }
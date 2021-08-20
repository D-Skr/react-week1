let myName = "Dmitrii";
console.log(myName);
//console.log("Dmitrii2");

const canvas: HTML CanvasElement = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(15,15,150,100);

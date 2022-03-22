let squaresNumber=16;
let squareDimensions=0;
const totalPixels = 102400;
let color ="black";
const container = document.querySelector('.container');
const rows = document.querySelectorAll(".row");


//create a 16x16 canvas of divs.
//=======================================================================================

for(let i = 1;i<=16*16; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    
    
    }


    draw(color);

//a function to create a new canvas with the maximum number of squares of 100.
//=======================================================================================
function createCanvas(squaresNumber){

squaresNumber= prompt("type in the dimensions you want to draw in the max number is 100",)
if(squaresNumber<=100&&squaresNumber>0)
{squaresNumber=squaresNumber*squaresNumber;
    squareDimensions=Math.pow(totalPixels/squaresNumber,0.5);
console.log(squareDimensions);
console.log(squaresNumber);
}else{
    squaresNumber=10000;
    squareDimensions=Math.pow(totalPixels/squaresNumber,0.5);
console.log(squareDimensions);
console.log(squaresNumber);
}


for(let i = 1;i<=squaresNumber; i++){
const row = document.createElement("div");
row.classList.add("row");
row.style.width=squareDimensions+"px";
row.style.height=squareDimensions+"px";
container.appendChild(row);
}
}



//the main drawing function.
//=======================================================================================
function draw(color){
    //adding an event listener to recognize if the mouse is down or not.
//=======================================================================================
const red =document.querySelector(".red")
red.addEventListener("click",()=>color="red");

const green =document.querySelector(".green")
green.addEventListener("click",()=>color="green");

const black =document.querySelector(".black")
black.addEventListener("click",()=>color="black");

const erace =document.querySelector(".erace")
erace.addEventListener("click",()=>color="white");

const purple =document.querySelector(".purple")
purple.addEventListener("click",()=>color="purple");

const pink =document.querySelector(".pink")
pink.addEventListener("click",()=>color="pink");

const brown =document.querySelector(".brown")
brown.addEventListener("click",()=>color="brown");

const blue =document.querySelector(".blue")
blue.addEventListener("click",()=>color="blue");

const yellow =document.querySelector(".yellow")
yellow.addEventListener("click",()=>color="yellow");

const skyblue =document.querySelector(".skyblue")
skyblue.addEventListener("click",()=>color="skyblue");

const rows = document.querySelectorAll(".row");
let mouseIsDown = false;
for(let i = 0;i<=rows.length-1;i++){
    rows[i].addEventListener("mousedown",()=>{
    mouseIsDown=true;
    console.log(mouseIsDown)
    
});
rows[i].addEventListener("mouseup",()=>{
    mouseIsDown=false;
    console.log(mouseIsDown)
    
});}


//making the logic that allows us to draw when the mouse is clicked and is on the div.
//=======================================================================================
for(let i = 0;i<=rows.length-1;i++)
{

rows[i].addEventListener("mouseover",()=>{
if(mouseIsDown===true){
    rows[i].style.backgroundColor=color;
}
});}

}

//a button to erase everything on the canvas when clicked and creates a new canvas 
//with the measurements entered by the user prompt.
//=========================================================================================
const clear = document.querySelector(".clear")
clear.addEventListener("click",()=>{
for(let i = 0;i<=rows.length-1;i++){
    rows[i].style.backgroundColor="white";
}

const squares=document.querySelectorAll(".row")
squares.forEach(square => {
    square.remove();    
});

createCanvas(squaresNumber);
draw(color); 
});




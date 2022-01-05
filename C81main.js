var mouseEvent="empty";
var lastx,lasty;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="blue";
var width_line=5;

canvas.addEventListener("mousedown",md);
function md(e)
{
    color=document.getElementById("text1").value;
width_line=document.getElementById("text2").value;
mouseEvent="mousedown";
}


canvas.addEventListener("mouseup",mu);
function mu(e)
{
mouseEvent="mouseup";
}


canvas.addEventListener("mouseleave",ml);
function ml(e)
{
mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",mm);
function mm(e)
{
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown")
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= width_line;
    ctx.arc(currentX,currentY,40,0,2*Math.PI);
    ctx.stroke();
}
lastx=currentX;
lasty=currentY;
}

function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

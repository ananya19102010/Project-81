canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(225,350,100,0, 2*Math.PI) ;
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.arc(450,350,100,0, 2*Math.PI) ;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(675,350,100,0, 2*Math.PI) ;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=2;
ctx.arc(325,450,100,0, 2*Math.PI) ;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.arc(575,450,100,0, 2*Math.PI) ;
ctx.stroke();


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_x=e.clientX - canvas.offsetLeft;
    mouse_y=e.clientY - canvas.offsetTop;

    console.log("x="+mouse_x +",y= "+mouse_y);
    circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0, 2*Math.PI) ;
ctx.stroke();
}
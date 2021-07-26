
var last_position_ofx, last_position_ofy;

var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
var width = screen.width;
var new_width = screen.width - 9;
var new_height = screen.width - 23;
if(width < 992)
{
    document.getElementById("mycanvas").width = new_width;
    document.getElementById("mycanvas").height = new_height;
}
canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e)
{
color = document.getElementById("color").value;
width_of_line = document.getElementById("width").value;

last_position_ofx = e.touches[0].clientX - canvas.offsetLeft;
last_position_ofy = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
 current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
 current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    

      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;
      ctx.moveTo(last_position_ofx, last_position_ofy);
      ctx.lineTo(current_position_of_x, current_position_of_y);
      ctx.stroke();
    
    last_position_ofx = current_position_of_x;
    last_position_ofy = current_position_of_y;
}

function cleararea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
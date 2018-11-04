var canvas = document.getElementById('canvas'); 
var context= canvas.getContext('2d');

var radius=10; 
var dragging=false;

var putPoint=function(e){
    if(dragging){
        context.beginPath();
        context.arc(e.clientX, e.clientY,radius,0,Math.PI*2);
        context.fill();  
    }
}

var engage=function(e){
    dragging=true;
    putPoint(e);
}

var disengage=function(){
    dragging=false;
}

canvas.addEventListener('mousedown',engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup',disengage);
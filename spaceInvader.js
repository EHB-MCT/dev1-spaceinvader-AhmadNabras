"use strict"



let canvas = document.querySelector("canvas");
canvas.width = 300;
canvas.height = 300;
let context = canvas.getContext("2d");




window.onresize = drawspaceInvader;

function drawspaceInvader() {
    context.beginPath();
    context.rect(75, 10, 150, 50);
    context.rect(75, 150, 200, 50);
    context.rect(75, 20, 50, 170);
    context.rect(175, 20, 50, 170);
    context.rect(25, 60, 50, 50);
    context.rect(225, 60, 50, 50);
    context.rect(125, 200, 50, 50);
    context.rect(25, 150, 100, 50)
    context.fillStyle = "#00ff00";
    context.fill();
}

drawspaceInvader();
//variables for background
var canvas = document.getElementById("gamearea");
var context = canvas.getContext("2d");
const totalImages = 9;
var loadImages = 0;
var floor = new Image();
floor.src = "images/wood_floor.png";
floor.onload = imageLoader;
var dresser = new Image();
dresser.src = "images/dresser.png";
dresser.onload = imageLoader;
var s_table = new Image();
s_table.src = "images/small_table.png";
s_table.onload = imageLoader;
var b_table = new Image();
b_table.src = "images/b_table.png";
b_table.onload = imageLoader;
var s_window = new Image();
s_window.src = "images/window.png";
s_window.onload = imageLoader;
var cuboard = new Image();
cuboard.src = "images/cuboard.png";
cuboard.onload = imageLoader;
var s_shelf = new Image();
s_shelf.src = "images/shelf.png";
s_shelf.onload = imageLoader;
var s_bed = new Image();
s_bed.src = "images/bed.png";
s_bed.onload = imageLoader;
var l_rug = new Image();
l_rug.src = "images/rug.png";
l_rug.onload = imageLoader;

//function to monitor when all the images have been loaded and then draws the background
function imageLoader(){
    console.log("I'm here");
    loadImages++;
    if(loadImages === totalImages){
        var ground =
            [[floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor]];

        var objects =
            [[floor, floor, floor, dresser, floor, floor, s_window, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, s_bed],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, s_table, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, l_rug, b_table, floor, floor, floor],
                [cuboard, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, s_shelf, floor, floor, floor, floor]];


        //world map loop
        for(var column = 0; column <= 9; column++){
            for(var row = 0; row <= 9; row++){
                context.drawImage(ground[row][column], column * 64, row * 64);
                context.drawImage(objects[row][column], column * 64, row * 64);
            }
        }
    }
}
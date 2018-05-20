const SIZE = 64;
var inventory = [];
var key = "key"; 
var counter = 0;
var box = {};
box.img = new Image();
box.img.src = "images/boxClose.png";
box.column = 2;
box.row = 3;
box.img.onload = function () {
	context.drawImage(box.img, box.column * SIZE, box.row * SIZE);
};
box.checkObject = "key";
box.close = true; 
inventory.push(key); //invoked when player picks the key
checkInventory(); //invoked by a specified player's action; check if player can open the box
function checkInventory (){ 
	for (var i=0; i<inventory.length; i++) {
		if (inventory[i] === box.checkObject)
			box.close = false;		
	}
}
window.addEventListener("keydown", keyDownHandler, false); //open the box by pressing the space bar
function keyDownHandler (e){
	if (!box.close){
		if (e.keyCode === 32){
			counter++;
			drawBox();
		}
	} 
}
function drawBox (){
	box.img.src = counter%2 ? "images/boxOpen.png" : "images/boxClose.png";
	context.drawImage(floor, box.column * SIZE, box.row * SIZE);
	context.drawImage(box.img, box.column * SIZE, box.row * SIZE);
}
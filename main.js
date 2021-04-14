canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext ("2d");
rover_width = 100 ;
rover_height = 90 ;
rover_x = 10 ;
rover_y = 10 ;
nasa_images_mars = ["mars_1.jpg" , "mars_2.jpg" , "mars_3.jpg" , "mars_4.jpg"];
random_number = Math.floor(Math.random() *4 );
console.log (random_number);
background_image = nasa_images_mars [random_number];
console.log ("background image = " + background_image);
rover_image = "rover.png" ;
function add() {
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = background_image ;
    rover_img = new Image();
    rover_img.onload = uploadRover;
    rover_img.src = rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_img , 0 , 0 , canvas.width , canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_img , rover_x , rover_y , rover_width , rover_height);
}
window.addEventListener("keydown" , My_Key_Down);
function My_Key_Down(e) {
    keyPressed = e.keyCode;
    console.log (keyPressed);
    if (keyPressed == '38') {
        up();
        console.log ("up");
    }
    if (keyPressed == '39') {
        right();
        console.log ("right");
    }
    if (keyPressed == '40') {
        down();
        console.log ("down");
    }
    if (keyPressed == '37') {
        left();
        console.log ("left");
    }
}
 function up() {
     if (rover_y >= 0) {
         rover_y = rover_y - 10;
         console.log ("When up arrow is pressed , X = " + rover_x + "Y = " + rover_y);
         uploadBackground();
         uploadRover();
     }
 }
 function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log ("When down arrow is pressed , X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log ("When right arrow is pressed , X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log ("When left arrow is pressed , X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
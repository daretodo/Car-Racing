canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width = 100;
car_height = 90;
background_image = "download.png"
car_image = "Car.png";
carX = 10;
carY = 10;
car1_image = "Car1.png";
car1X = 10;
car1Y = 50;
function add(){
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;
    car_imgtag = new Image();
    car_imgtag.onload = uploadCar;
    car_imgtag.src = car_image;
    car1_imgtag = new Image();
    car1_imgtag.onload = uploadCar1;
    car1_imgtag.src = car1_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadCar(){
    ctx.drawImage(car_imgtag,carX,carY,car_width,car_height);
}
function uploadCar1(){
    ctx.drawImage(car1_imgtag,car1X,car1Y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypress = e.keyCode;
console.log(keypress);
if (keypress=="38"){
    up();
    console.log("Up Key Was Pressed");
}
if (keypress=="40"){
    down();
    console.log("Down Key Was Pressed");
}
if (keypress=="37"){
    left();
    console.log("Left Key Was Pressed");
}
if (keypress=="39"){
    right();
    console.log("Right Key Was Pressed");
}
if (keypress=="87"){
    up1();
    console.log("Up Key Was Pressed");
}
if (keypress=="83"){
    down1();
    console.log("Down Key Was Pressed");
}
if (keypress=="65"){
    left1();
    console.log("Left Key Was Pressed");
}
if (keypress=="68"){
    right1();
    console.log("Right Key Was Pressed");
}
}
function up(){
if (carY >= 0){
    carY=carY-10;
    console.log ("When up arrow is pressed,X = "+carX+",Y = "+carY);
    uploadBackground();
    uploadCar();
    uploadCar1();
    
}
}
function down(){
    if (carY <=500){
        carY=carY+10;
        console.log ("When down arrow is pressed,X = "+carX+",Y = "+carY);
    uploadBackground();
    uploadCar();
    uploadCar1();
    }
}
function left(){
    if (carX >=0){
        carX=carX-10;
        console.log ("When left arrow is pressed,X = "+carX+",Y = "+carY);
    uploadBackground();
    uploadCar();
    uploadCar1();
    }
}
function right(){
    if (carX <=700 ){
        carX=carX+10;
        console.log("When right arrow is pressed,X = "+carX+",Y = "+carY);
     uploadBackground();
     uploadCar();
     uploadCar1();
    }
}
function up1(){
    if (car1Y >= 0){
        car1Y=car1Y-10;
        console.log ("When up arrow is pressed,X = "+car1X+",Y = "+car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar();
    }
    }
    function down1(){
        if (car1Y <=500){
            car1Y=car1Y+10;
            console.log ("When down arrow is pressed,X = "+car1X+",Y = "+car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar();
        }
    }
    function lef1t(){
        if (car1X >=0){
            car1X=car1X-10;
            console.log ("When left arrow is pressed,X = "+car1X+",Y = "+car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar();
        }
    }
    function right1(){
        if (car1X <=700 ){
            car1X=car1X+10;
            console.log("When right arrow is pressed,X = "+car1X+",Y = "+car1Y);
         uploadBackground();
         uploadCar1();
         uploadCar();
        }
    }
    


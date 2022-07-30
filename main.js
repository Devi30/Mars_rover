canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
roverx=10;
rovery=10;
mars_array=["marsrover1.jpg","marsrover2.jpg","marsrover3.jpg","marsrover4.jpg"]
random_number=Math.floor(Math.random()*4)
background_image=mars_array[random_number];
rover_image="rover.png";
function add(){
    background_tag=new Image()
    background_tag.onload=uploadbackground
    background_tag.src=background_image
    rover_tag=new Image()
    rover_tag.onload=uploadrover
    rover_tag.src=rover_image
}
function uploadbackground(){
    ctx.drawImage(background_tag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_tag,roverx,rovery,rover_width,rover_height)
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keypressed=e.keyCode
    if(keypressed=='38'){
        up()
        console.log("up")
    }
    if(keypressed=='40'){
        down()
        console.log("down")
    }
    if(keypressed=='37'){
        left()
        console.log("left")
    }
    if(keypressed=='39'){
        right()
        console.log("right")
    }
}
function up(){
    if(rovery>=0){
        rovery=rovery-10
        uploadbackground()
        uploadrover()
    }
}
function down(){
    if(rovery<=500){
        rovery=rovery+10
        uploadbackground()
        uploadrover()
    }
}
function left(){
    if(roverx>=0){
        roverx=roverx-10
        uploadbackground()
        uploadrover()
    }
}
function right(){
    if(roverx<=700){
        roverx=roverx+10
        uploadbackground()
        uploadrover()
    }
}
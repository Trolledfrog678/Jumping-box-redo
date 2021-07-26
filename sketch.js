var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     pong1=createSprite(100,550,150,20)
     pong2=createSprite(300,550,150,20)
     pong3=createSprite(500,550,150,20)
     pong4=createSprite(700,550,150,20)
     

    //create box sprite and give velocity
    box=createSprite(400,300,20,20)
    box.velocityY=-14;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();  
    box.bounceOff(edges)


    //add condition to check if box touching surface and make it box

    drawSprites();
}

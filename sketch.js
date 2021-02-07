var car,wall;
var speed,weight;

function setup() {
  createCanvas(2000,400);
  car= createSprite(50, 200, 50, 80);
 wall= createSprite(1200, 200, 60, 100);


 speed=random(55,90);
 weight=(400,1500);
 car.velocityX=speed;

}

function draw() {
  background(255,255,255);  

  
if(wall.x-car.x<wall.width/2+car.width/2 )
  {car.velocityX=0;
    car.x=car.x-1
    var deformation=0.5*weight*speed*speed/22500

if(deformation>180){

  car.shapeColor="red"
}
if(deformation<100){

  car.shapeColor="green"
}
if(deformation<180  && deformation>100){

  car.shapeColor="yellow"
}

  

}


  drawSprites();
}

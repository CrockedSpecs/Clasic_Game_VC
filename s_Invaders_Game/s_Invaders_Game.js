let scl = 20, cols, rows;
function preload(){
  alienIMG =loadImage("alien.png")
}
function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  //cols = floor(width / scl);
  //rows = floor(height / scl);
  aliens= [];
  aliensLine= [];
  bullets=[];
  for(var i=0;i<9;i++){
    aliens[i]= new Alien(i*50+60,40);
  }

}

function draw() {
  background(51);
  ship.show();
  
  var edge=false;
  for(var i=0;i<aliens.length;i++){
    aliens[i].show()
    aliens[i].move()
    if(aliens[i].x<15 || aliens[i].x>width-15){
      edge=true;
    }
    if(edge){
      for(var i=0;i<aliens.length;i++){
        aliens[i].shiftDown()
      }
    }
  }
  for(var i=0;i<bullets.length;i++){
    bullets[i].show();
    bullets[i].move();
    for(var j=0;j<aliens.length;j++){  
      if (bullets[i].hits(aliens[j])){
        console.log("impacto")
        aliens[j].die();
        bullets[i].evaporate();
      }
    }
  }
  for(var i=0;i<bullets.length;i++){  
    if(bullets[i].toDelete){
      bullets.splice(i,1);
    }
  }
  for(var i=0;i<aliens.length;i++){    
    if(aliens[i].alive==false){
      aliens.splice(i,1);
    }
  }
}

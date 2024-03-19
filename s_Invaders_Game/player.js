class Ship{
  constructor(){
    this.x= width/2;
  }
  show(){
    fill(255);
    rect(this.x, height-20,20,30);
  }
  dir(dir){
    this.x+=dir;
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.dir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.dir(-1);
  } else if(key===' '){
    var bullet= new Bullet(ship.x, height)
    bullets.push(bullet);
  }
}

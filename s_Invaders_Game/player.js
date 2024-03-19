class Ship{
  constructor(){
    this.x= width/2;
  }
  show(){
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-35,20,40);
  }
  move(dir){
    this.x += dir*5;
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  } else if(key===' '){
    var bullet= new Bullet(ship.x, height)
    bullets.push(bullet);
  }
}

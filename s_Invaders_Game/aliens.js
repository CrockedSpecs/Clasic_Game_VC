class Alien{
  constructor(x,y){
    this.x= x;
    this.y= y;
    this.r=10;
    this.alive=true;
    this.xdir=1;
  }
  show(){
    if(this.alive=true){
      push();
      fill(255,0,255);
      ellipse(this.x, this.y,this.r*2,this.r*2) 
      pop();
    } else{
      fill(255,0,0);
      ellipse(this.x, this.y,this.r*2,this.r*2)
    }
  }
  die(){
    this.alive=false;
  }
  shiftDown(){
    this.xdir*=-1;
    this.y+=this.r;
  }
  move(){
    this.x+=this.xdir;
  } 
}

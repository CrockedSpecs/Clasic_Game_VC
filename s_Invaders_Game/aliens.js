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
      image(alienIMG,this.x,this.y, 25, 18.2)
    } 
    //else{
    //  fill(255,0,0);
    //  ellipse(this.x, this.y,this.r*2,this.r*2)
    //}
  }
  die(){
    this.alive=false;
  }
  shiftDown(){
    this.xdir*=-1;
    this.y+=this.r*2;
  }
  move(){
    this.x+=this.xdir;
  } 
}

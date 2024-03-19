class Bullet{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.r=3;
    this.toDelete=false;
  }
  show(){
    fill(20,0,255);
    ellipse(this.x, this.y,this.r*2,this.r*2) 
  }
  move(){
    this.y-=1;
  }
  hits(alien){
    var d=dist(this.x,this.y, alien.x, alien.y)
    if(d<this.r+alien.r){
      return true;
    }else{
      return false;
    }
  }
  evaporate(){
    this.toDelete=true;
  }
}

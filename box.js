class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      super.density = 0; 
      this.visiblity = 255;  
    }
    display() {
      console.log(this.body.speed); 
      if(this.body.speed < 3) {
        super.display(); 
      }
      else { 
        World.remove(world, this.body); 
        push(); 
        this.visiblity = this.visiblity -5; 
        pop(); 
      }
    }
    score() {
      if(this.visiblity < 0 && this.visiblity>- 105) {
        score++; 
      }
    }
  }
  
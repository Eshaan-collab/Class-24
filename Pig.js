class Pig{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,50,50,{restitution:0.8,friction:0.3,density:1});
        World.add(world,this.body);   
     this.height=50;
     this.width=50;     
          
    
    }
    display(){
        var opt=this.body.position;
        var angle=this.body.angle;
        push() 
        translate(opt.x,opt.y);
         rotate(angle);
          rectMode(CENTER);
           fill("green");
            rect(0,0, this.width, this.height); 
            pop();   
    }
    
    
    
    
    }
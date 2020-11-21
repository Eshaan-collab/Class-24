class Log{
    constructor(x,y,width,height,angle){
        var option={restitution:0.3,friction:2.5,density:1};
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);   
     this.height=height;
     this.width=width;     
      Matter.Body.setAngle(this.body,angle); 
    
    }
    display(){
        var opt=this.body.position;
        var angle=this.body.angle;
        push() 
        translate(opt.x,opt.y);
         rotate(angle);
          rectMode(CENTER);
           fill(0);
            rect(0,0, this.width, this.height); 
            pop();   
    }
    
    
    
    
    }
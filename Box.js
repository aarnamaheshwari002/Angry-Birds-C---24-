class box{

    constructor(x, y, width, height){
    
        var options = {
    
            'restitution':0.6, 
            'friction':1
           
             }
            this.object = Bodies.rectangle(x, y, width, height,options);
           this.width = width;
           this.height = height;
             World.add(world, this.object); 
        
    }
    
    display(){
    
    var pos = this.object.position;
    var angle = this.object.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("green");
        rectMode(CENTER);
        rect(0, 0,this.width, this.height); 
    pop();
    }
    }
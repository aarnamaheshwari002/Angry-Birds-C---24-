class Bird{

    constructor(x, y){
    
        var options = {
    
            'restitution':0.6, 
            'friction':1
           
             }
            this.object = Bodies.rectangle(x, y, 20, 20,options);
           this.width = 20;
           this.height = 20;
             World.add(world, this.object); 
    
    }
    
    display(){
    
    var pos = this.object.position;
    //pos.x = mouseX;
    //pos.y = mouseY;
    var angle = this.object.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("blue");
        rectMode(CENTER);
        rect(0, 0,this.width, this.height); 
    pop();
    }
    }
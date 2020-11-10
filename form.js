class form {

    constructor() {
      this.body= Bodies.rectangle(displayWidth,displayHeight,displayWidth,displayHeight);
      World.add(world,this.body)
      this.body = loadImage('bg0.png');
      this.input = createInput("Name");
      this.button = createButton('Play');      
      this.title = createElement('h2');
     
    }
    hide(){      
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      imageMode(CENTER)
      image(this.body,displayWidth/2,displayHeight/2,displayWidth,displayHeight);
      this.title.html("Maze Runner");
      this.title.position(displayWidth/2 - 50, 0);
      
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      });
  
      
        
      };
  
    }
  
  
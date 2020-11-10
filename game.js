class Game {
    constructor(){
   this.map=loadImage("map.png")

    }
    
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
     player10 = createSprite(100,200);
     player10.addAnimation("player1",player10a);

     player20 = createSprite(100,200);
     player20.addAnimation("player2",player20a);
     
     player30 = createSprite(100,200);
     player30.addAnimation("player3",player30a);
     
     player40 = createSprite(100,200);
     player40.addAnimation("player4",player40a);

     players = [player10,player20,player30,player40]
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(this.map, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
       
        var index = 0;        
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
         
          index = index + 1 ;
  
         
          x = x + 200;
          
          y = displayHeight - allPlayers[plr].distance;
          //cars[index-1].x = x;
          //cars[index-1].y = y;
        
  
         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            //cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = [index-1].y;
          }
         
         
        
  
      }
  
    }
  }
}
  
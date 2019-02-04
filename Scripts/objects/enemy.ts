module objects{
  export class Enemy extends objects.GameObject{

    // Variables

    // Constructor
    constructor(assetManager:createjs.LoadQueue){
      super(assetManager, "enemy");
      this.Start();
    }

    // Methods / FUnctions
    public Start():void {
      this.x = Math.floor(Math.random() * 500) + 0;
      this.y = Math.floor(Math.random() * -200) + -50;
    }

    public Update():void{
      this.Move();
      this.CheckBounds();
    }

    public Reset():void{

    }

    public Move():void{
      this.y += 2;
    }

    public CheckBounds():void{
      if (this.y >= 800 + this.height){
        this.y = -50;
      }
    }
  }
}

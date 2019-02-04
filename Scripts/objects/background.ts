module objects{
  export class Background extends createjs.Bitmap{
    // Variables
    private speedY : number;

    // Constructor
    constructor(assetManager: createjs.LoadQueue){
      super(assetManager.getResult("background"));

      this.Start();
    }

    // Methods / Functions
    public Start():void{
      this.speedY = 5;
      this.Reset();
    }

    public Update():void{
      // Scroll Background
      this.Move();
      // Check bounds
      this.CheckBounds();
    }

    private Reset():void{
      this.y = -1120;
    }

    private  Move():void{
      this.y += this.speedY;
    }

    private CheckBounds():void{
      if (this.y >= 0){
        this.Reset();
      }
    }
  }
}

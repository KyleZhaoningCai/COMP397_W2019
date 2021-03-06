module objects{
  export class GameObject extends createjs.Bitmap{
    // Variables
    protected speedX: number;
    protected speedY: number;

    public width: number;
    public height: number;

    public halfW: number;
    public halfH: number;

    // Constructor
    constructor(assetManager: createjs.LoadQueue, imageString: string){
      super(assetManager.getResult(imageString));

      this.name = imageString;
      this.Init();
    }

    // Methods / Functions
    private Init():void{
      this.width = this.getBounds().width;
      this.height = this.getBounds().height;
      this.halfW = this.width * 0.5;
      this.halfH = this.height * 0.5;

      this.regX = this.halfW;
      this.regY = this.halfH;
    }

    public Start(): void{

    }

    public Update(): void{

    }

    public Reset(): void{

    }

    public CheckBounds(): void{

    }

    public Move(): void{

    }
  }
}

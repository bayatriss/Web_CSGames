import { Camera } from "./Camera";
import highPalm from "../assets/scenery/trees/high-palm.png";
import largeTree from "../assets/scenery/trees/large-tree.png";
import mediumPalm from "../assets/scenery/trees/medium-palm.png";
import type { Coordinates, GameAsset } from "./GameAsset";

export class Trees implements GameAsset {
  sprite: HTMLImageElement;
  pos: Coordinates;
  width: number = 40;
  height: number = 50;
  type: string;
  useCamera: boolean = true;

  constructor(width: number, height: number, type: string) {
    this.sprite = new Image();
    this.type = type;
    this.width = width;
    this.height = height;

    this.sprite = new Image();
    this.handleType(type)

    this.sprite.onload = () => {
    this.width = this.sprite!.naturalWidth;
    this.height = this.sprite!.naturalHeight;
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleUserInput(keys: React.RefObject<Record<string, boolean>>): void {
    return;
  }

  handleType(type: string) {
    switch (type) {
      case "highPalm":
        this.sprite.src = highPalm;
        this.pos = { x: 400, y: 100 };
        break;
      case "largeTree":
        this.sprite.src = largeTree;
        this.pos = { x: 500, y: 170 };
        break;
      case "mediumPalm":
        this.sprite.src = mediumPalm;
        this.pos = { x: 200, y: 155 };
        break;
      default:
        this.sprite.src = highPalm;
        this.pos = { x: 300, y: 170 };
        break;
    }
  }
  render(ctx: CanvasRenderingContext2D): void {
    const camera = Camera.getInstance();

    ctx.drawImage(
      this.sprite,
      this.useCamera ? camera.worldToScreenX(this.pos.x) : this.pos.x,
      this.pos.y,
      this.width,
      this.height,
    );
  }
}

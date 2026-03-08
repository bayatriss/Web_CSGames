import { Camera } from "./Camera";
import { GROUND_Y, MAP_HEIGHT } from './Constants';

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
    isPalm: boolean;
    gravity: number;
    vy: number = 0;
    onGround: boolean = false;

    constructor(width: number, height: number, type: string) {
        this.sprite = new Image();
        this.type = type;
        this.pos = { x: 300, y: 0 }
        this.sprite = new Image();
        this.gravity = 0.8;
        this.handleType(type);

        this.sprite.onload = () => {
            this.width = this.sprite!.naturalWidth;
            this.height = this.sprite!.naturalHeight;
            this.pos.y = GROUND_Y - this.height;
            this.onGround = true;
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
                //this.pos.x = 100;
                this.isPalm = true;
                break;
            case "largeTree":
                this.sprite.src = largeTree;
                this.pos.x = 300;
                this.isPalm = false;
                break;
            case "mediumPalm":
                this.sprite.src = mediumPalm;
                this.pos.x = 155;
                this.isPalm = true;
                break;
            default:
                this.sprite.src = highPalm;
                this.pos.x = 155;
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
    
    onAttack(){

    }
}

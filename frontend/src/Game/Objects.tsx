import { Camera } from "./Camera";
import { GROUND_Y, MAP_HEIGHT } from './Constants';

import flower from "../assets/scenery/ground_props/flowery_bush.png";
import bush from "../assets/scenery/ground_props/bush.png";
import bottle from "../assets/scenery/ground_props/bottle.png";
import type { Coordinates, GameAsset } from "./GameAsset";

export class Objects implements GameAsset {
    sprite: HTMLImageElement;
    pos: Coordinates;
    width: number = 40;
    height: number = 50;
    type: string;
    useCamera: boolean = true;
    vy: number = 0;
    onGround: boolean = false;

    constructor(width: number, height: number, type: string) {
        this.sprite = new Image();
        this.type = type;
        this.pos = { x: 300, y: 0 }
        this.sprite = new Image();
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
            case "flower":
                this.sprite.src = flower;
                this.pos.x = 600;
                break;
            case "bush":
                this.sprite.src = bush;
                this.pos.x = 100;
                break;
            case "bottle":
                this.sprite.src = bottle;
                this.pos.x = 370;
                break;
            default:
                this.sprite.src = flower;
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

    onAttack() {

    }
}

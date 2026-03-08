import { Camera } from './Camera';
import mysteryBlock from '../assets/scenery/special/mystery-block.png';
import type { Coordinates, GameAsset } from './GameAsset';
import { GROUND_Y } from './Constants';

export class MysteryBlock implements GameAsset {
    sprite: HTMLImageElement;

    width: number;
    height: number;
    vy: number = 0;
    onGround: boolean = false;
    pos: Coordinates;

    useCamera: boolean = true;

    constructor(width: number, height: number) {
        this.sprite = new Image();

        this.width = width;
        this.height = height;

        this.pos = { x: 500, y: 0 }

        this.sprite = new Image();
        this.sprite.src = mysteryBlock;

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

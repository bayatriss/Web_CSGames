import React, { useEffect, useRef } from 'react';
import { CANVAS_HEIGHT, CANVAS_WIDTH, GRAVITY } from './Constants';
import { Player } from './Player';
import { Ground } from './Ground';
import { Camera } from './Camera';
import { DarkSky } from './DarkSky';
import { LightSky } from './LightSky';
import { CloudySky } from './CloudySky';
import { Trees } from "./Trees";

const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const keys: React.RefObject<Record<string, boolean>> = useRef<Record<string, boolean>>({});

  /*
   * All game assets are declared here
   */
  const player = useRef(Player.getInstance(GRAVITY));

  const camera = useRef(Camera.getInstance());

  const darkSky = useRef(new DarkSky(CANVAS_WIDTH, CANVAS_HEIGHT));
  const lightSky = useRef(new LightSky(CANVAS_WIDTH, CANVAS_HEIGHT));
  const cloudySky = useRef(new CloudySky(CANVAS_WIDTH, CANVAS_HEIGHT));
  const ground = useRef(new Ground(CANVAS_WIDTH, CANVAS_HEIGHT));

  const highPalm = useRef(new Trees(100, 50, "highPalm"));
  const largeTree = useRef(new Trees(100, 50, "largeTree"));
  const mediumPalm = useRef(new Trees(50, 50, "mediumPalm"));

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const gameLoop = () => {
      player.current.handleUserInput(keys);

      camera.current.follow(player.current);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      darkSky.current.render(ctx);
      lightSky.current.render(ctx);
      cloudySky.current.render(ctx);
      ground.current.render(ctx);
      cloudySky.current.render(ctx);
      player.current.render(ctx);
      highPalm.current.render(ctx)
      largeTree.current.render(ctx)
      mediumPalm.current.render(ctx)


      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      style={{ border: '1px solid black' }}
    />
  );
};

export default Game;

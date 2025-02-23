import type { Options } from 'html2canvas';
import type { Fn } from 'xenopomp-essentials';

declare module 'use-react-screenshot' {
  export interface IUseScreenshots {
    type?: Parameters<HTMLCanvasElement['toDataURL']>[0];
    quality?: Parameters<HTMLCanvasElement['toDataURL']>[1];
  }

  export type IUseScreenshotsReturn = [
    image: string,
    takeScreenShot: Fn<[node: HTMLElement, options: Options], string>,
    {
      error?: any;
    },
  ];

  export function useScreenshot(
    options: IUseScreenshots,
  ): IUseScreenshotsReturn;
}

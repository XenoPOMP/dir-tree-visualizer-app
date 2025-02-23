import type { NextConfigWrapper } from '@/types';

const isProd = process.env.NODE_ENV === 'production';

const internalHost = process.env.TAURI_DEV_HOST || 'localhost';

/**
 * Applies Tauri`s specific options to next.config.
 * @param cfg
 */
export const tauriWrapper: NextConfigWrapper = cfg => {
  return {
    ...cfg,

    // Ensure Next.js uses SSG instead of SSR
    // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
    output: 'export',

    // Note: This feature is required to use the Next.js Image component in SSG mode.
    // See https://nextjs.org/docs/messages/export-image-api for different workarounds.
    images: {
      unoptimized: true,
    },

    // Configure assetPrefix or else the server won't properly resolve your assets.
    assetPrefix: isProd ? undefined : `http://${internalHost}:3000`,
  };
};

import mdxWrapper from '@next/mdx';
import { pipe } from 'xenopomp-essentials';

import type { NextConfigWrapper } from '@/types';

import { tauriWrapper } from './wrappers';

/**
 * Applies wrappers for Next.js config.
 *
 * @example
 * export default withWrappers(nextConfig);
 */
export const withWrappers: NextConfigWrapper =
  pipe(mdxWrapper()).pipe(tauriWrapper);

import type { Fn, SetState } from 'xenopomp-essentials';
import { create } from 'zustand';

export interface IPathsStore {
  paths: string[];
  set: SetState<string[]>;
  clear: Fn<[], void>;
}

export const usePathsStore = create<IPathsStore>((set, get) => ({
  paths: [
    // './src/a/',
    // './src/c/sigma.txt',
    // './src/b/',
    // './src/b/alpha/',
    // './src/b/beta/',
    // './src/c/content.md',
    // './src/next.config.ts',
    // './src/main/page.tsx',
    // './src/main/app/page.tsx',
    // './src/components/ui/Header.tsx',
    // './src/package.json',
    // './src/tests/',
  ],
  clear: () =>
    set({
      paths: [],
    }),
  set: pathAction =>
    set({
      paths:
        typeof pathAction === 'function' ? pathAction(get().paths) : pathAction,
    }),
}));

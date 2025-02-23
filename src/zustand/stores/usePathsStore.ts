import type { Fn, SetState } from 'xenopomp-essentials';
import { create } from 'zustand';

export interface IPathsStore {
  rootFolder?: string;
  setRootFolder: (folder: string) => void;
  paths: string[];
  set: SetState<string[]>;
  clear: Fn<[], void>;
}

export const usePathsStore = create<IPathsStore>((set, get) => ({
  paths: [],
  setRootFolder: f =>
    set({
      rootFolder: f,
    }),
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

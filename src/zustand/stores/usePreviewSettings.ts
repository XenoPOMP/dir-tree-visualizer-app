import { create } from 'zustand';

export interface IDataSettings {
  folderIconSize: number;
  padding: number;
  showFolderGuides: boolean;
  hideGitIgnored: boolean;
}

type OrPartial<T> = T | Partial<T>;
type Payload =
  | OrPartial<IDataSettings>
  | ((partial: IDataSettings) => OrPartial<IDataSettings>);

interface IMethods {
  set: (partial: Payload) => void;
  reset: () => void;
}

export type PreviewSettings = IDataSettings & IMethods;

const defaults: IDataSettings = {
  folderIconSize: 16,
  padding: 24,
  showFolderGuides: true,
  hideGitIgnored: true,
};

/** Setup preview image settings through all app. */
export const usePreviewSettings = create<PreviewSettings>(set => ({
  ...structuredClone(defaults),
  set,
  reset: () => set({ ...structuredClone(defaults) }),
}));

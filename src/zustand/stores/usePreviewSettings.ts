import { create } from 'zustand';

export interface IDataSettings {
  folderIconSize: number;
  padding: number;
  showFolderGuides: boolean;
}

type OrPartial<T> = T | Partial<T>;
type Payload =
  | OrPartial<IDataSettings>
  | ((partial: IDataSettings) => OrPartial<IDataSettings>);

interface IMethods {
  set: (partial: Payload) => void;
}

export type PreviewSettings = IDataSettings & IMethods;

/** Setup preview image settings through all app. */
export const usePreviewSettings = create<PreviewSettings>(set => ({
  folderIconSize: 16,
  padding: 24,
  showFolderGuides: true,
  set,
}));

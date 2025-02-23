import { create } from 'zustand';

export interface IPreviewSettings {
  folderIconSize: number;
  padding: number;
  showFolderGuides: boolean;
}

/** Setup preview image settings through all app. */
export const usePreviewSettings = create<IPreviewSettings>(() => ({
  folderIconSize: 16,
  padding: 24,
  showFolderGuides: true,
}));

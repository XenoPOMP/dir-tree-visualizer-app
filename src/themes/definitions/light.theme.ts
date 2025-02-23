import type { Config } from 'tailwindcss';
import type { Defined } from 'xenopomp-essentials';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const lightTheme = {
  colors: {
    accent: '#29A5DB',
    primary: {
      bg: '#070C0F',
      font: '#EDF2F5',
      border:
        'rgba(237.0000010728836 242.00000077486038 245.00000059604645 / 0.25)',
    },
    block: {
      primary: '#98C7DC',
      secondary: '#206380',
      hover: '#263943',
    },
    preview: {
      dark: {
        icon: '#98C7DC',
        font: '#EDF2F5',
      },
    },
    check: {
      bg: '#263942',
      mark: '#FFFFFF',
    },
  },
} satisfies Theme;

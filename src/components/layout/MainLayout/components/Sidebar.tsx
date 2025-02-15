import cn from 'classnames';
import type { FC } from 'react';

import parentStyles from '../MainLayout.module.scss';

export const MN_Sidebar: FC<unknown> = () => {
  return (
    <aside
      className={cn(
        parentStyles.main,
        'border-r-[1px] border-r-primary-border',
      )}
    >
      Sidebar
    </aside>
  );
};

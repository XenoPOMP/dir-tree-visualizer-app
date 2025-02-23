import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import parentStyles from '../MainLayout.module.scss';

export const MN_Sidebar: VariableFC<'aside', unknown> = ({
  className,
  children,
  ...props
}) => {
  return (
    <aside
      className={cn(
        parentStyles.main,
        'border-r-[1px] border-r-primary-border',
        className,
      )}
      {...props}
    >
      {children}
    </aside>
  );
};

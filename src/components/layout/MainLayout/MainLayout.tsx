import cn from 'classnames';
import { type VariableFC, jsxDotNotation } from 'xenopomp-essentials';

import styles from './MainLayout.module.scss';
import { MN_Body, MN_Header, MN_Sidebar } from './components';

const InternalMainLayout: VariableFC<'div', unknown> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'fixed left-0 top-0',
        'h-dvh w-dvw',
        styles.wrapper,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const MainLayout = jsxDotNotation(InternalMainLayout, {
  Header: MN_Header,
  Body: MN_Body,
  Sidebar: MN_Sidebar,
});

import cn from 'classnames';
import { type VariableFC, jsxDotNotation } from 'xenopomp-essentials';

import { MN_Header } from './components';

const InternalMainLayout: VariableFC<'div', unknown> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('fixed left-0 top-0', 'h-dvh w-dvw', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const MainLayout = jsxDotNotation(InternalMainLayout, {
  Header: MN_Header,
});

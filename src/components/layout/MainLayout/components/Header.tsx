import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

export const MN_Header: VariableFC<'header', unknown> = ({
  className,
  children,
  ...props
}) => {
  return (
    <header
      className={cn('border-b-[1px] border-b-primary-border', className)}
      {...props}
    >
      {children}
    </header>
  );
};

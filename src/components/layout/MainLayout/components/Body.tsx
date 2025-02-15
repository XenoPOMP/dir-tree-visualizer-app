import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

export const MN_Body: VariableFC<'main', unknown> = ({
  className,
  children,
  ...props
}) => {
  return (
    <main
      className={cn(className)}
      {...props}
    >
      {children}
    </main>
  );
};

import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import { Button } from '@/components/ui/kit';

export const AppIcon: VariableFC<
  typeof Button,
  unknown,
  'variant' | 'square'
> = ({ className, children, ...props }) => {
  return (
    <Button
      variant='control'
      square
      className={cn('[&>svg]:size-[24px]', className)}
      {...props}
    >
      {children}
    </Button>
  );
};

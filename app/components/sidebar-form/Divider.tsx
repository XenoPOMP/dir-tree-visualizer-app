import cn from 'classnames';
import type { FC } from 'react';

export const Divider: FC<unknown> = () => {
  return (
    <div
      aria-hidden
      className={cn('h-[1px] w-full bg-primary-border')}
    >
      <></>
    </div>
  );
};

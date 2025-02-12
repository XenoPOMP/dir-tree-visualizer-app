import cn from 'classnames';

import { slotable } from '@/components/hoc';
import { Button } from '@/components/ui/kit';

import styles from './ControlButton.module.scss';
import type { ControlButtonProps } from './ControlButton.props';
import { controlButtonVariants } from './ControlButton.variants.ts';

export const ControlButton = slotable<typeof Button, ControlButtonProps>(
  Button,
  ({ Comp, className, active, ...props }) => (
    <Comp
      className={cn(
        'text-primary-font rounded-[.2rem] p-[.2rem] [&>svg]:size-[1.2rem]',
        controlButtonVariants(),
        styles.ctrl,
        className,
      )}
      data-is-active={active}
      {...props}
    />
  ),
);

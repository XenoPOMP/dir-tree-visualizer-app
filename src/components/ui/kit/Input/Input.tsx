import { Input as HU_Input } from '@headlessui/react';
import cn from 'classnames';
import type { ComponentProps } from 'react';
import type { VariableFC } from 'xenopomp-essentials';

export const Input: VariableFC<
  typeof HU_Input,
  Pick<ComponentProps<'input'>, 'placeholder' | 'type' | 'value' | 'onChange'>,
  'children'
> = ({ className, ...props }) => {
  return (
    <HU_Input
      className={cn(
        'rounded-[.25em] px-5',
        {
          'bg-block-hover': props.type !== 'range',
        },
        className,
      )}
      {...props}
    />
  );
};

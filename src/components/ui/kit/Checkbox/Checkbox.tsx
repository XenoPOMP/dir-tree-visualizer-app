import { Field, Checkbox as HUI_Checkbox, Label } from '@headlessui/react';
import cn from 'classnames';
import { Check } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import type { VariableFC } from 'xenopomp-essentials';

export const Checkbox: VariableFC<
  typeof HUI_Checkbox,
  PropsWithChildren,
  'children'
> = ({ className, children, ...props }) => {
  return (
    <Field
      className={cn(
        'select-none',
        'flex cursor-pointer items-center gap-[.8em] leading-[1em]',
      )}
    >
      <HUI_Checkbox
        className={cn(
          'bg-check-bg group block size-[1em] rounded-[.2em] data-[checked]:bg-accent',
          'transition-colors',
          'flex-center',
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            'text-check-mark flex-center size-full opacity-0 transition-opacity',
            'group-data-[checked]:opacity-100',
          )}
        >
          <Check
            size='.75em'
            color='currentColor'
          />
        </div>
      </HUI_Checkbox>

      <Label className={cn('cursor-pointer')}>{children}</Label>
    </Field>
  );
};

import cn from 'classnames';
import { ChevronDown } from 'lucide-react';
import type { VariableFC } from 'xenopomp-essentials';

export const AccordionCollapse: VariableFC<
  'summary',
  { noChevron?: boolean }
> = ({ className, children, noChevron = false, ...props }) => {
  return (
    <summary
      className={cn(
        'relative flex cursor-pointer select-none items-center gap-[.2em]',
        className,
      )}
      {...props}
    >
      {!noChevron && (
        <ChevronDown
          size='1em'
          className={cn('transition-transform', 'absolute right-full top-0')}
        />
      )}
      {children}
    </summary>
  );
};

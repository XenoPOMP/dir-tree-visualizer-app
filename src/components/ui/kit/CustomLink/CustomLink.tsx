import cn from 'classnames';
import Link from 'next/link';
import type { VariableFC } from 'xenopomp-essentials';

import {
  type CustomLinkVariantsType,
  customLinkVariants,
} from './CustomLink.variants.ts';

export const CustomLink: VariableFC<typeof Link, CustomLinkVariantsType> = ({
  className,
  children,
  variant,
  ...props
}) => {
  return (
    <Link
      className={cn(customLinkVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Link>
  );
};

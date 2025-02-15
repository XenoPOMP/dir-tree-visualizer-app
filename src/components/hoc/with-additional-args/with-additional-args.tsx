import type { ElementType } from 'react';
import type { AnyObject, VariableFC } from 'xenopomp-essentials';

export function withAdditionalArgs<
  TComp extends ElementType,
  TArgs extends AnyObject,
>(
  comp: TComp,
  fn: VariableFC<TComp, TArgs & { Comp: TComp }>,
): VariableFC<TComp, TArgs> {
  return props => fn({ ...props, Comp: comp });
}

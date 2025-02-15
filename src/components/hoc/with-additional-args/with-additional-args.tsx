import type { ElementType } from 'react';
import type { AnyObject, VariableFC } from 'xenopomp-essentials';

/**
 * Adds additional args to pre-made component.
 *
 * @param comp
 * @param fn
 *
 * @example
 * const Comp = withAdditionalArgs<'button', { active?: boolean }>(
 *   'button',
 *   ({ Comp, active, className, ...props }) => (
 *     <Comp
 *       className={cn(
 *         {
 *           'bg-red-500': active,
 *         },
 *         className,
 *       )}
 *       {...props}
 *     />
 *   ),
 * );
 */
export function withAdditionalArgs<
  TComp extends ElementType,
  TArgs extends AnyObject,
>(
  comp: TComp,
  fn: VariableFC<TComp, TArgs & { Comp: TComp }>,
): VariableFC<TComp, TArgs> {
  return props => fn({ ...props, Comp: comp });
}

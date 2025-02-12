import type { FcProps, VariableFC } from 'xenopomp-essentials';

import type { Button } from '@/components/ui/kit';

import type { ControlButtonVariantsType } from './ControlButton.variants.ts';

export type ControlButtonProps = FcProps<VariableFC<typeof Button, unknown>> &
  ControlButtonVariantsType & {
    // Makes button .active permanently
    active?: boolean;
  };

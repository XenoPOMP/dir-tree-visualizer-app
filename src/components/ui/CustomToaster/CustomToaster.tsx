import type { FC } from 'react';
import { Toaster } from 'sonner';

export const CustomToaster: FC<unknown> = () => {
  return (
    <Toaster
      theme='system'
      toastOptions={{
        // className: 'bg-secondary-bg text-primary-font border-secondary-border',
        style: {
          fontFamily: 'inherit',
        },
      }}
    />
  );
};

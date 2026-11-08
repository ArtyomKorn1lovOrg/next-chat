'use client';

import { FormatHelper } from '@app/shared';
import type * as React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  const onClick = () => {
    console.log(FormatHelper.normalizePhone('+ 7 999 999 99 99'));
  };

  return (
    <button
      style={{ display: 'inline-flex', backgroundColor: 'red' }}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;

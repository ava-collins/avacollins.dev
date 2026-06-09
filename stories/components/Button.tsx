import './button.css';

import React from 'react';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** Button contents */
  label: string;
  /** Optional click handler (renders as <button>) */
  onClick?: () => void;
  /** URL for link variant (renders as <a>) */
  href?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  label,
  href,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const className = ['button', mode].join(' ');

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      {...props}
    >
      {label}
    </button>
  );
};

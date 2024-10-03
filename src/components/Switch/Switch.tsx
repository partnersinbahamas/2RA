import React, { useState } from 'react';
import styles from './Switch.module.scss';

type TProps = {
  label?: string;
  required?: boolean;
  defaultToggle?: boolean;
  onClick?: () => void;
};

export const Switch: React.FC<TProps> = ({
  label,
  required = false,
  defaultToggle = false,
  onClick,
}) => {
  const [toggle, setToggle] = useState<boolean>(defaultToggle);

  const handleClick = () => {
    if (onClick) onClick();
    setToggle(current => !current);
  };

  return (
    <label className={styles.label}>
      {label}
      <br />
      <input
        type="checkbox"
        required={required}
        className={styles.input}
        onClick={handleClick}
        checked={toggle}
      />
    </label>
  );
};

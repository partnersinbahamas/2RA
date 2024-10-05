import React, { useId, useState } from 'react';
import classNames from 'classnames';

import { useModuleExtention } from '../../lib';
import { useRA } from '../../providers/RAProvider';

import { IHorizontal, IVertical, TStile } from '../utils/types/types';
import defaultProps from '../utils/variables/defaultProps';

import styles from './Switch.module.scss';

type TProps = {
  label: string;
  required?: boolean;
  defaultToggle?: boolean;
  stile?: TStile;
  className?: any;
  labelPosition?: IHorizontal | IVertical;
  onClick?: () => void;
};

export const Switch: React.FC<TProps> = ({
  label,
  required = false,
  defaultToggle = false,
  stile = defaultProps.stile,
  className,
  labelPosition = 'top',
  onClick,
}) => {
  const id = `switch-${useId()}`;

  const [toggle, setToggle] = useState<boolean>(defaultToggle);
  const { stylesExtention, componentsStile } = useRA();
  const moduleExtention = useModuleExtention(
    stylesExtention as TStylesExtension,
  ).moduleExtentionState;

  const visibleStile = stile || componentsStile;

  const classes = {
    wrapper:
      className && (moduleExtention ? className['wrapper'] : `${className}`),
    label:
      className &&
      (moduleExtention ? className['label'] : `${className}-label`),
    input:
      className &&
      (moduleExtention ? className['input'] : `${className}-input`),
  };

  const stiles = {
    wrapper: styles[`switch-wrapper`],
    label: styles[`switch-label`],
    input: styles[`switch-input-${visibleStile}`],
  };

  const handleClick = () => {
    if (onClick) onClick();
    setToggle(current => !current);
  };

  return (
    <div
      className={classNames(
        classes.wrapper,
        stiles.wrapper,
        styles[`label-${labelPosition}`],
      )}
    >
      {label && (
        <label htmlFor={id} className={classNames(classes.label, stiles.label)}>
          {label}
          {required && '*'}
        </label>
      )}

      <input
        id={id}
        type="checkbox"
        required={required}
        className={classNames(classes.input, stiles.input)}
        onClick={handleClick}
        checked={toggle}
      />
    </div>
  );
};

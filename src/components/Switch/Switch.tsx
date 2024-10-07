import React, { useId, useState } from 'react';
import classNames from 'classnames';

import { useModuleExtention } from '../../lib';
import { useRA } from '../../providers/RAProvider';

import { IHorizontal, IVertical, TStile } from '../utils/types/types';
import defaultProps from '../utils/variables/defaultProps';

import { Wrapper, Label } from './Switch.styles';

import styles from './Switch.module.scss';

export type TProps = {
  label?: string;
  required?: boolean;
  defaultToggle?: boolean;
  stile?: TStile;
  className?: any;
  labelPosition?: IHorizontal | IVertical;
  disabled?: boolean;
  onClick?: () => void;
};

export const Switch: React.FC<TProps> = ({
  label,
  required = false,
  defaultToggle = false,
  stile = defaultProps.stile,
  className,
  labelPosition = 'top',
  disabled = false,
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
    <Wrapper
      data-stile={visibleStile}
      className={classNames(
        classes.wrapper,
        stiles.wrapper,
        styles[`label-${labelPosition}`],
      )}
      disabled={disabled}
      labelPosition={labelPosition}
    >
      {label && (
        <Label
          htmlFor={id}
          className={classNames(classes.label, stiles.label)}
          data-position={labelPosition}
          disabled={disabled}
        >
          {label}
          {required && '*'}
        </Label>
      )}

      <input
        id={id}
        type="checkbox"
        required={required}
        className={classNames(classes.input, stiles.input)}
        onClick={handleClick}
        checked={toggle}
        disabled={disabled}
      />
    </Wrapper>
  );
};

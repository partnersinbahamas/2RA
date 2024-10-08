import {
  Children,
  FC,
  ReactElement,
  cloneElement,
  useId,
  useMemo,
  useState,
} from 'react';
import classNames from 'classnames';

import { useRA } from '../../../providers/RAProvider';
import useModuleExtention from '../../../hooks/useModuleExtention';
import TPropsButton from '../../utils/types/props/button';
import defaultProps from '../../utils/variables/defaultProps';
import { IHorizontal, IVertical, TSize, TStile } from '../../utils/types/types';
import { wait } from '../../utils/functions';
import { Button } from '../Button/Button';
import { Label, Ripple, Wrapper } from './IconButton.styles';
import styles from './IconButton.module.scss';

export type TProps = TPropsButton & {
  className?: any;
  children?: ReactElement;
  size?: TSize;
  stile?: TStile;
  label?: string;
  onClick?: () => void;
  backgroundColor?: string;
  showLabel?: boolean;
  labelPosition?: IHorizontal | IVertical;
  disabled?: boolean;
  disablePadding?: boolean;
  /**
   * TError
   * @type string | boolean
   */
  error?: TError;
};

const IconButton: FC<TProps> = ({
  children,
  className,
  size = defaultProps.size,
  stile,
  disablePadding = defaultProps.disablePadding,
  label,
  onClick,
  backgroundColor,
  showLabel,
  labelPosition,
  disabled,
  error,
  ...props
}) => {
  const isError = error ? 'true' : undefined;
  const uniqId = `ibutton-${useId()}`;
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const { stylesExtention, componentsStile } = useRA();
  const moduleExtention = useModuleExtention(
    stylesExtention as TStylesExtension,
  ).moduleExtentionState;

  const visibleStile = stile || componentsStile;

  const modifiedChildren = Children.map(
    children ? children : [],
    (child: any) => cloneElement(child, { size: size.toLocaleUpperCase() }),
  );

  const classes = useMemo(
    () => ({
      wrapper: className && moduleExtention ? className['wrapper'] : className,
      label:
        className && moduleExtention
          ? className['label']
          : `${className}-label`,
      button:
        className && moduleExtention
          ? className['button']
          : `${className}-button`,
      ripple:
        className && moduleExtention
          ? className['ripple']
          : `${className}-ripple`,
    }),
    [className, moduleExtention],
  );

  const buttonBody = (
    <>
      {modifiedChildren}
      <Ripple
        data-testid="touch-ripple"
        error={isError}
        className={classNames(classes.ripple, styles[`touch-${visibleStile}`], {
          [styles['touch-active']]: isPressed,
        })}
      />
    </>
  );

  const handleClick = async () => {
    if (onClick) onClick();

    await wait(500);
    setIsPressed(false);
  };

  return (
    <Wrapper
      labelPosition={labelPosition}
      className={classes.wrapper}
      error={isError}
      disabled={disabled}
    >
      {showLabel && label && (
        <Label
          error={isError}
          disabled={disabled}
          htmlFor={uniqId}
          style={{ backgroundColor }}
          className={classNames(styles[`label-${visibleStile}`], classes.label)}
        >
          {label}
        </Label>
      )}
      <Button
        id={uniqId}
        {...props}
        stile="mute"
        size={size}
        className={classNames(
          classes.button,
          styles.ibutton,
          styles[`ibutton-${visibleStile}`],
          styles[size],
        )}
        error={disabled ? false : error}
        disabled={disabled}
        body={buttonBody}
        aria-label={label}
        onClick={handleClick}
        onMouseDown={() => setIsPressed(true)}
        style={{ backgroundColor }}
        disablePadding={disablePadding}
        nonTitled
      />
    </Wrapper>
  );
};

export default IconButton;

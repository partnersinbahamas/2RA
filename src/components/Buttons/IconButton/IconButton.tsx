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

import { useHD } from '../../../providers/HDProvider';
import useModuleExtention from '../../../hooks/useModuleExtention';
import defaultProps from '../../utils/variables/defaultProps';
import { TSize, TStile } from '../../utils/types/types';
import { wait } from '../../utils/functions';
import { Button } from '../Button/Button';
import { Label, Ripple, Wrapper } from './IconButton.styles';
import styles from './IconButton.module.scss';

export type TProps = Omit<React.ComponentProps<'button'>, 'className'> & {
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
  stile = defaultProps.stile,
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
  const { stylesExtention } = useHD();
  const moduleExtention = useModuleExtention(
    stylesExtention as TStylesExtension,
  ).moduleExtentionState;

  const modifiedChildren = Children.map(
    children ? children : [],
    (child: any) => cloneElement(child, { size: size.toLocaleUpperCase() }),
  );

  const buttonBody = (
    <>
      {modifiedChildren}
      <Ripple
        data-testid="touch-ripple"
        error={isError}
        className={classNames(styles.touch, styles[`touch-${stile}`], {
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
    }),
    [className, moduleExtention],
  );

  return (
    <Wrapper
      labelPosition={labelPosition}
      className={classes.wrapper}
      error={isError}
    >
      {showLabel && label && (
        <Label
          error={isError}
          htmlFor={uniqId}
          style={{ backgroundColor }}
          className={classes.label}
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
          styles[`ibutton-${stile}`],
          styles[size],
        )}
        error={disabled ? false : error}
        disabled={disabled}
        body={buttonBody}
        aria-label={label}
        onClick={handleClick}
        onMouseDown={() => setIsPressed(true)}
        style={{ backgroundColor }}
        disablePadding
        nonTitled
      />
    </Wrapper>
  );
};

export default IconButton;

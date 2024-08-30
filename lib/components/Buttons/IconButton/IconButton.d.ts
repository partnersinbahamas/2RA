import { FC, ReactElement } from 'react';
import { default as TPropsButton } from '../../utils/types/props/button';
import { IHorizontal, IVertical, TSize, TStile } from '../../utils/types/types';

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
declare const IconButton: FC<TProps>;
export default IconButton;

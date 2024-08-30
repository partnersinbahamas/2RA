import { default as React } from 'react';
import { default as TPropsButton } from '../../utils/types/props/button';
import { TSize, TStile } from '../../utils/types/types';

export type TProps = TPropsButton & {
    size?: TSize;
    type?: TButtonType;
    stile?: TStile;
    style?: React.CSSProperties;
    disabled?: boolean;
    /**
     * TError
     * @type string | boolean
     */
    error?: TError;
    onClick?: () => void;
    className?: any;
    title?: string;
    body?: any;
    disablePadding?: boolean;
    nonTitled?: boolean;
};
export declare const Button: React.FC<TProps>;

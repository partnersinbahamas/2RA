/// <reference types="react" />

import { default as default_2 } from 'react';
import { InputHTMLAttributes } from 'react';

export declare const Button: default_2.FC<TProps>;

export declare const Input: default_2.FC<TProps_2>;

declare type TProps = TPropsButton & {
    size?: TSize;
    type?: TButtonType;
    stile?: TStile;
    style?: default_2.CSSProperties;
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

declare interface TProps_2 extends InputHTMLAttributes<HTMLInputElement> {
    title?: string;
    onChange?: (event: default_2.ChangeEvent<HTMLInputElement>) => void;
    onChangeValue?: (value: string) => void;
    /**
     * TError
     * @type string | boolean
     */
    error?: TError;
    stile?: TStile;
    disabled?: boolean;
    className?: any;
}

declare type TPropsButton = Omit<React.ComponentProps<'button'>, 'className'>;

declare type TSize = 'small' | 'medium' | 'large';

declare type TStile = 'primary' | 'default' | 'mute';

export { }

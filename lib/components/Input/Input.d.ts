import { default as React, InputHTMLAttributes } from 'react';
import { TStile } from '../utils/types/types';

export interface TProps extends InputHTMLAttributes<HTMLInputElement> {
    title?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
export declare const Input: React.FC<TProps>;

import { ControlType } from '@storybook/blocks';
import { Conditional, SBScalarType, SBType } from 'storybook/internal/types';

export type TSize = 'small' | 'medium' | 'large';
export type IHorizontal = 'left' | 'right';
export type IVertical = 'bottom' | 'top';
export interface IAnchorOrigin {
    horizontal: IHorizontal;
    vertical: IVertical;
}
export type TStile = 'primary' | 'default' | 'mute';
export declare enum EStile {
    PRIMARY = "primary",
    DEFAULT = "default",
    MUTE = "mute"
}
export declare enum EStylesExtention {
    SCSS = ".scss",
    MODULES = ".module.scss"
}
export type TStringOrStatus = TStatus | string;
export type TStatus = 'online' | 'default' | 'busy' | 'not-here' | 'sleep' | 'primary';
export interface IStoryControl {
    [key: string]: {
        control?: 'child' | ControlType | {
            type: ControlType;
        } | false;
        description?: string;
        if?: Conditional;
        mapping?: {
            [key: string]: {
                [option: string]: any;
            };
        };
        name?: string;
        options?: string[];
        action?: string;
        table?: {
            category?: string;
            defaultValue?: {
                summary: string;
                detail?: string;
            };
            disable?: boolean;
            subcategory?: string;
            type?: {
                summary?: string;
                detail?: string;
            };
        };
        type?: SBType | SBScalarType['name'];
    };
}

import { default as React } from 'react';
import { AvatarSlots } from '@mui/material';
import { PropsAvatar } from '../utils/types/props/avatar';
import { TStringOrStatus } from '../utils/types/types';

interface IProps extends PropsAvatar {
    /**
     * Instead of setting first and last name, you can also set an abbreviation prop.
     */
    abbreviation: string;
    /**
     * Path to image.
     */
    src?: string;
    /**
     * Details on MaterialUI.
     */
    slots?: AvatarSlots;
    /**
     * You definitely can attach your own statuses and style them.
     */
    status?: TStringOrStatus;
    /**
     * TError
     * @type string | boolean
     */
    error?: TError;
}
export declare const Avatar: React.FC<IProps>;
export {};

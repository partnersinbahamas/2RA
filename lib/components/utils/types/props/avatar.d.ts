import { AvatarProps } from '@mui/material';
import { IAnchorOrigin, TSize, TStile, TStringOrStatus } from '../types';

export type PropsAvatar = Omit<AvatarProps, 'slotProps' | 'component'> & {
    firstName?: string;
    lastName?: string;
    abbreviation: string;
    size?: TSize;
    stile?: TStile;
    badged?: boolean;
    disabled?: boolean;
    error?: TError;
    badgeContent?: any;
    status?: TStringOrStatus;
    anchorOrigin?: IAnchorOrigin;
    className?: any;
    src?: string;
    onClick?: () => void;
};

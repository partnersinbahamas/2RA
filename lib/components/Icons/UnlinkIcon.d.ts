import { default as React } from 'react';

type TProps = {
    className?: string;
    color?: string;
    style?: {
        [cssAttribute: string]: string;
    };
    withBox?: boolean;
};
declare const UnlinkIcon: React.FC<TProps>;
export default UnlinkIcon;

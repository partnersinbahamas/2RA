import { default as React } from 'react';

type TProps = {
    className?: string;
    color?: string;
    style?: {
        [cssAttribute: string]: string;
    };
    withBox?: boolean;
};
declare const LockIcon: React.FC<TProps>;
export default LockIcon;

import { default as React } from 'react';

type TProps = {
    className?: string;
    color?: string;
    style?: {
        [cssAttribute: string]: string;
    };
    withBox?: boolean;
};
declare const PercentIcon: React.FC<TProps>;
export default PercentIcon;

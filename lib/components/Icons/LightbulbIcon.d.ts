import { default as React } from 'react';

type TProps = {
    className?: string;
    color?: string;
    fillColor?: string;
    style?: {
        [cssAttribute: string]: string;
    };
    withBox?: boolean;
};
declare const LightbulbIcon: React.FC<TProps>;
export default LightbulbIcon;

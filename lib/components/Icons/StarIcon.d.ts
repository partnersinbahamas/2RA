import { default as React } from 'react';

type TProps = {
    backgroundColor?: string;
    borderColor?: string;
    className?: string;
    color?: string;
    isHalfFilled?: boolean;
    style?: {
        [cssAttribute: string]: string;
    };
    withBox?: boolean;
};
declare const StarIcon: React.FC<TProps>;
export default StarIcon;

import { default as PropTypes } from 'prop-types';

type TProps = {
    className?: string;
    color?: string;
    style?: {
        [cssAttribute: string]: string;
    };
    withBox?: boolean;
};
declare const EuroIcon: {
    ({ className, color, style, withBox }: TProps): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<any>;
        withBox: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        className: string;
        color: string;
        style: {};
        withBox: boolean;
    };
};
export default EuroIcon;

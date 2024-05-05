import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const ExternalLinkIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-4 -4 18 18' : '0.5 0 9.5 9.5'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.00798 0H9.00498C9.51898 0 9.99998 0.385 9.99998 0.899V7.992C9.99998 8.505 9.54998 8.986 9.00498 8.986C8.87384 8.98802 8.74363 8.9637 8.62206 8.91447C8.50049 8.86525 8.39005 8.79212 8.29726 8.69943C8.20447 8.60674 8.13123 8.49636 8.08189 8.37484C8.03254 8.25333 8.00809 8.12314 8.00998 7.992V3.402L2.16998 9.243C2.00998 9.436 1.78498 9.5 1.55998 9.5C1.27967 9.49765 1.01152 9.38518 0.813401 9.18687C0.615279 8.98856 0.503066 8.72031 0.500977 8.44C0.500977 8.248 0.564976 8.024 0.693976 7.895L6.59898 1.99H2.00898C1.88028 1.99278 1.75231 1.97001 1.63248 1.92298C1.51266 1.87596 1.40335 1.80562 1.3109 1.71605C1.21844 1.62648 1.14468 1.51946 1.09389 1.40118C1.04309 1.2829 1.01627 1.15572 1.01498 1.027C1.01498 0.481 1.43198 0 2.00898 0H2.00798Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-5 -5 22 22' : '0 0 12 12'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.031 12C1.27816 11.9951 1.51373 11.8943 1.688 11.719L10 3.406V9C10 9.594 10.469 10.031 11 10.031C11.531 10.031 12 9.563 12 9V0.906C12 0.375 11.531 0 11 0H3C2.406 0 2 0.469 2 1C2 1.5 2.469 2 3 2H8.594L0.219 10.375C0.0619999 10.531 0 10.781 0 10.969C0 11.562 0.438 12 1.031 12Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-6 -7 28 28' : '0 0 15 15'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.000107372 13.97C-0.00211515 13.7544 0.0796548 13.5464 0.228107 13.39L11.5841 1.964H2.99411C2.53811 1.964 1.98411 1.674 1.98411 1.03C1.98411 0.483 2.40811 0 2.99411 0H13.9901C14.5101 0 14.9991 0.386 14.9991 0.837V11.845C14.9991 12.393 14.5431 12.843 13.9901 12.843C13.4701 12.843 12.9821 12.457 12.9821 11.974V3.348L1.72511 14.71C1.58142 14.8507 1.39918 14.9455 1.20151 14.9825C1.00384 15.0194 0.799653 14.9968 0.614846 14.9176C0.430039 14.8383 0.272947 14.7059 0.163499 14.5372C0.0540522 14.3685 -0.00281697 14.1711 0.000107372 13.97Z"
          />
        </LargeSvg>
      );
  }
};

ExternalLinkIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

ExternalLinkIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default ExternalLinkIcon;

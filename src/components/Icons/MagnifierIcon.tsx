import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const MagnifierIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 20 20' : '0 0 16 16'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 0C10.87 0 14 3.13 14 7C14 8.593 13.463 10.016 12.618 11.187L15.708 14.277C15.902 14.472 16 14.732 16 14.992C16 15.543 15.562 16 15.028 16C14.78 16 14.52 15.902 14.276 15.707L11.187 12.617C9.97828 13.5199 8.50873 14.0053 7 14C3.13 14 0 10.87 0 7C0 3.13 3.13 0 7 0ZM6.992 2.016C6.33776 2.01322 5.68946 2.14003 5.08448 2.38912C4.47951 2.6382 3.92986 3.00462 3.46724 3.46724C3.00462 3.92986 2.6382 4.47951 2.38912 5.08448C2.14003 5.68946 2.01322 6.33776 2.016 6.992C2.016 9.756 4.228 12 6.992 12C8.32004 11.9995 9.59354 11.4717 10.5326 10.5326C11.4717 9.59354 11.9995 8.32004 12 6.992C12 4.228 9.756 2.016 6.992 2.016Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 24 24' : '0 0 20 20'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 0C11.656 0 15.031 3.374 15.031 7.497C15.0361 9.15383 14.4984 10.7667 13.5 12.089L19.719 18.305C20.094 18.68 20.094 19.305 19.719 19.711C19.344 20.085 18.781 20.085 18.375 19.773L12.094 13.494C10.7709 14.4922 9.15742 15.03 7.5 15.025C3.375 15.025 0 11.651 0 7.497C0 3.374 3.375 0 7.5 0ZM7.5 2C6.04257 2.00185 4.6453 2.58136 3.61437 3.61154C2.58343 4.64173 2.00291 6.03857 2 7.496C2 10.557 4.469 13.025 7.5 13.025C8.22666 13.0264 8.94646 12.8844 9.6181 12.607C10.2897 12.3296 10.9 11.9224 11.4139 11.4086C11.9278 10.8948 12.3351 10.2846 12.6126 9.61303C12.8901 8.94144 13.0323 8.22166 13.031 7.495C13.031 4.467 10.562 2 7.5 2Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 32 32' : '0 0 28 28'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5.01048e-06C11.3136 -0.00131055 12.6145 0.256449 13.8284 0.75853C15.0422 1.26061 16.1452 1.99716 17.074 2.926C18.0029 3.85485 18.7394 4.95777 19.2415 6.17162C19.7436 7.38546 20.0013 8.68642 20 10C20.0058 12.3018 19.2103 14.5337 17.75 16.313L27.719 26.281C27.906 26.469 28 26.75 28 27C28 27.594 27.562 28 27 28C26.75 28 26.5 27.937 26.281 27.719L16.313 17.75C14.5337 19.2103 12.3018 20.0058 10 20C8.68642 20.0013 7.38546 19.7436 6.17162 19.2415C4.95777 18.7394 3.85485 18.0029 2.926 17.074C1.99716 16.1452 1.26061 15.0422 0.75853 13.8284C0.256449 12.6145 -0.00131055 11.3136 5.01048e-06 10C-0.00131055 8.68642 0.256449 7.38546 0.75853 6.17162C1.26061 4.95777 1.99716 3.85485 2.926 2.926C3.85485 1.99716 4.95777 1.26061 6.17162 0.75853C7.38546 0.256449 8.68642 -0.00131055 10 5.01048e-06ZM10 2.00001C5.594 2.00001 2.00001 5.594 2.00001 10C2.00001 14.406 5.594 18 10 18C14.406 18 18 14.406 18 10C18 5.594 14.406 2.00001 10 2.00001Z"
          />
        </LargeSvg>
      );
  }
};

MagnifierIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

MagnifierIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default MagnifierIcon;

import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const HelpCircleIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 20 20 ' : '0 0 16 16'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0C12.399 0 16 3.581 16 7.995C16 12.393 12.42 16 8 16C3.58 16 0 12.392 0 7.995C0 3.592 3.59 0 8 0ZM8 2C7.21296 2 6.43364 2.1551 5.70657 2.45644C4.9795 2.75778 4.31895 3.19945 3.76266 3.7562C3.20637 4.31295 2.76526 4.97387 2.46453 5.70119C2.16379 6.42851 2.00934 7.20796 2.01 7.995C2.01 11.295 4.673 14 8 14C11.328 14 13.99 11.293 13.99 7.995C13.9907 7.20796 13.8362 6.42851 13.5355 5.70119C13.2347 4.97387 12.7936 4.31295 12.2373 3.7562C11.681 3.19945 11.0205 2.75778 10.2934 2.45644C9.56636 2.1551 8.78704 2 8 2ZM7.63 12.498C7.76096 12.4989 7.8908 12.4738 8.01195 12.424C8.1331 12.3743 8.24314 12.3009 8.33566 12.2082C8.42817 12.1155 8.50131 12.0054 8.55082 11.8841C8.60032 11.7629 8.6252 11.633 8.624 11.502C8.624 10.956 8.195 10.527 7.629 10.527C7.063 10.527 6.634 10.957 6.634 11.502C6.634 12.049 7.064 12.498 7.629 12.498H7.63ZM6.634 9.629H8.624V8.615C8.624 7.935 10.385 7.59 10.385 5.649C10.385 4.263 9.288 3.502 7.872 3.502C6.974 3.502 5.989 3.809 5.565 4.152L6.245 5.917C6.675 5.679 7.228 5.493 7.706 5.493C8.264 5.493 8.41 5.746 8.41 6.028C8.41 7.011 6.634 6.921 6.634 8.615V9.629Z"
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
            d="M10 5.01048e-06C11.3136 -0.00131055 12.6145 0.256449 13.8284 0.75853C15.0422 1.26061 16.1452 1.99716 17.074 2.926C18.0029 3.85485 18.7394 4.95777 19.2415 6.17162C19.7436 7.38546 20.0013 8.68642 20 10C20.0013 11.3136 19.7436 12.6145 19.2415 13.8284C18.7394 15.0422 18.0029 16.1452 17.074 17.074C16.1452 18.0029 15.0422 18.7394 13.8284 19.2415C12.6145 19.7436 11.3136 20.0013 10 20C8.68642 20.0013 7.38546 19.7436 6.17162 19.2415C4.95777 18.7394 3.85485 18.0029 2.926 17.074C1.99716 16.1452 1.26061 15.0422 0.75853 13.8284C0.256449 12.6145 -0.00131055 11.3136 5.01048e-06 10C-0.00131055 8.68642 0.256449 7.38546 0.75853 6.17162C1.26061 4.95777 1.99716 3.85485 2.926 2.926C3.85485 1.99716 4.95777 1.26061 6.17162 0.75853C7.38546 0.256449 8.68642 -0.00131055 10 5.01048e-06ZM10 2.00001C5.594 2.00001 2.00001 5.594 2.00001 10C2.00001 14.406 5.594 18 10 18C14.438 18 18 14.406 18 10C18 5.594 14.406 2.00001 10 2.00001ZM7.50201 5.53101C7.50201 4.53101 8.97001 4.21901 10.22 4.21901C12.033 4.21901 13.345 5.31201 13.345 7.00001C13.345 9.906 10.72 9.719 10.72 11.063C10.72 11.531 10.377 12.031 9.752 12.031C9.49533 12.03 9.24948 11.9275 9.06798 11.746C8.88649 11.5645 8.78406 11.3187 8.783 11.062C8.783 8.406 11.408 8.75001 11.408 7.00001C11.408 6.37501 10.845 6.15601 10.283 6.15601C9.502 6.15601 8.877 6.53101 8.377 6.50001C7.877 6.46901 7.47001 6.06201 7.50201 5.53101ZM8.55 14.781C8.55 15.5 9.144 16.063 9.83101 16.063C10.519 16.063 11.113 15.5 11.113 14.781C11.113 14.094 10.519 13.531 9.83101 13.531C9.144 13.531 8.55 14.094 8.55 14.781Z"
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
            d="M14 0C21.72 0 28 6.28 28 14C28 21.72 21.72 28 14 28C6.28 28 0 21.72 0 14C0 6.28 6.28 0 14 0ZM14 2C7.383 2 2 7.383 2 14C2 20.617 7.383 26 14 26C20.617 26 26 20.617 26 14C26 7.383 20.617 2 14 2ZM12.493 15.567C12.493 12.164 16.125 12.811 16.125 9.996C16.125 8.96 15.244 8.496 14.372 8.496C12.895 8.496 12.679 8.986 11.748 8.986C11.198 8.986 10.75 8.532 10.75 7.989C10.75 6.807 12.847 6.5 14.372 6.5C16.509 6.5 18.12 8.002 18.12 9.996C18.12 13.941 14.489 13.571 14.489 15.567C14.489 15.6981 14.4632 15.8278 14.413 15.9489C14.3629 16.07 14.2894 16.18 14.1967 16.2727C14.104 16.3654 13.994 16.4389 13.8729 16.489C13.7518 16.5392 13.6221 16.565 13.491 16.565C13.3599 16.565 13.2302 16.5392 13.1091 16.489C12.988 16.4389 12.878 16.3654 12.7853 16.2727C12.6926 16.18 12.6191 16.07 12.569 15.9489C12.5188 15.8278 12.493 15.6981 12.493 15.567ZM14.899 19.875C14.899 19.5103 14.7541 19.1606 14.4963 18.9027C14.2384 18.6449 13.8887 18.5 13.524 18.5C13.1593 18.5 12.8096 18.6449 12.5517 18.9027C12.2939 19.1606 12.149 19.5103 12.149 19.875C12.149 20.2397 12.2939 20.5894 12.5517 20.8473C12.8096 21.1051 13.1593 21.25 13.524 21.25C13.8887 21.25 14.2384 21.1051 14.4963 20.8473C14.7541 20.5894 14.899 20.2397 14.899 19.875Z"
          />
        </LargeSvg>
      );
  }
};

HelpCircleIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

HelpCircleIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default HelpCircleIcon;
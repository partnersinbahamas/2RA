import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const NoTrainIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 20 20' : '0.25 0 15 16'}
          style={style}
          fill={color}
          className={className}
        >
          <g clipPath="url(#clip0_2323_39450)">
            <rect
              x="14.4141"
              y="0.414062"
              width="2"
              height="20"
              rx="1"
              transform="rotate(45 14.4141 0.414062)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.631 0.368973C11.0553 0.117617 10.4347 0.0144395 9.418 0H6.578L6.579 0.000999928C5.381 0.0179999 4.733 0.158 4.061 0.518C3.40384 0.866664 2.86609 1.40406 2.517 2.061C2.157 2.733 2.017 3.381 2 4.579V10L4.003 7.997V4.426C4.021 3.667 4.101 3.339 4.281 3.004C4.449 2.69 4.69 2.449 5.005 2.28C5.367 2.086 5.721 2.01 6.625 2V1.998L9.57 2.003C9.7223 2.00661 9.85724 2.01272 9.97837 2.02163L11.631 0.368973ZM8.52784 11.9574L9.48728 10.998H10.248C10.4469 10.998 10.6377 11.077 10.7783 11.2177C10.919 11.3583 10.998 11.5491 10.998 11.748C10.998 11.9469 10.919 12.1377 10.7783 12.2783C10.6377 12.419 10.4469 12.498 10.248 12.498H9.248C9.04909 12.498 8.85832 12.419 8.71767 12.2783C8.62759 12.1882 8.56279 12.0776 8.52784 11.9574ZM6.49216 13.9931C7.5181 13.995 8.54405 13.995 9.57 13.993C10.33 13.974 10.657 13.895 10.992 13.715C11.306 13.547 11.547 13.306 11.715 12.992C11.878 12.687 11.993 12.314 11.993 11.57C11.9943 10.5435 11.995 9.51679 11.9952 8.49007L13.9966 6.4887L13.998 11.152C13.998 12.522 13.864 13.215 13.479 13.935C13.1301 14.5923 12.5923 15.1301 11.935 15.479C11.263 15.839 10.615 15.979 9.417 15.996L6.844 15.998C5.88666 15.998 5.2599 15.9326 4.7235 15.7618L6.49216 13.9931ZM8.752 3.248H6.261C5.623 3.248 5.229 3.833 5.277 4.343C5.34519 5.06778 5.41377 5.79257 5.48273 6.51727L6.85956 5.14044L6.822 4.746L7.25382 4.74618L8.752 3.248Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_2323_39450">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 24 24' : '1 0 18 20'}
          style={style}
          fill={color}
          className={className}
        >
          <g clipPath="url(#clip0_2323_34090)">
            <rect
              x="17.4141"
              y="0.414062"
              width="2"
              height="24"
              rx="1"
              transform="rotate(45 17.4141 0.414062)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.3746 0.625361C13.4986 0.167519 12.6186 0 10.982 0L8.715 0.00200009C7.24 0.0230001 6.413 0.204 5.575 0.652C4.7561 1.08625 4.08625 1.7561 3.652 2.575C3.174 3.468 3 4.35 3 6.018L3.00145 11.9986L5.00295 9.99705L5.001 5.772C5.015 4.582 5.131 4.051 5.416 3.518C5.66382 3.04796 6.04796 2.66382 6.518 2.416C7.015 2.15 7.512 2.031 8.542 2.005L11.228 2.001C11.966 2.00968 12.4505 2.05759 12.8393 2.16072L14.3746 0.625361ZM11.9992 3.00085C11.9801 3.00028 11.9611 3 11.942 3H8.03C6.846 3 6.001 4.06 6.06 5.112L6.26627 8.73373L8.12559 6.87441L8 5H10L11.9992 3.00085ZM10.4872 12.9981L13.6751 9.81023C13.6333 10.5345 13.6059 10.9957 13.604 11.018C13.567 11.45 13.487 11.732 13.317 12.024C13.13 12.344 12.861 12.598 12.531 12.767C12.233 12.919 11.948 12.983 11.521 12.997L10.4872 12.9981ZM7.48528 16L9.0649 14.4204C9.18451 14.5886 9.25 14.7909 9.25 15C9.25 15.513 8.8 16 8.25 16H7.48528ZM6.1422 17.3431C6.25885 17.4323 6.38415 17.5126 6.518 17.584C6.687 17.674 6.855 17.747 7.045 17.806C7.202 17.269 7.765 17.064 8.239 17.129C8.715 17.194 9.219 17.25 10 17.25C10.6251 17.25 11.0254 17.2029 11.4904 17.1483C11.5417 17.1423 11.5938 17.1362 11.647 17.13C12.182 17.068 12.817 17.282 12.954 17.806C13.144 17.748 13.314 17.674 13.482 17.584C13.952 17.3362 14.3362 16.952 14.584 16.482C14.829 16.023 15 15.287 15 14.458C15.0027 12.4662 15.0036 10.4744 15.0027 8.48263L16.9982 6.4871L17 13.982C17 15.65 16.826 16.532 16.348 17.425C15.9137 18.2439 15.2439 18.9137 14.425 19.348C13.587 19.796 12.76 19.977 11.285 19.998L9.018 20C7.35 20 6.468 19.826 5.575 19.348C5.2678 19.1851 4.98157 18.989 4.72089 18.7644L6.1422 17.3431ZM13.4571 14.2929C13.2696 14.1054 13.0152 14 12.75 14H11.75C11.2 13.993 10.75 14.487 10.75 15C10.75 15.2652 10.8554 15.5196 11.0429 15.7071C11.2304 15.8946 11.4848 16 11.75 16H12.75C13.3 16 13.75 15.513 13.75 15C13.75 14.7348 13.6446 14.4804 13.4571 14.2929Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_2323_34090">
              <rect width="19" height="20" fill="white" />
            </clipPath>
          </defs>
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-5 -2 32 32' : '0 0 22 28'}
          style={style}
          fill={color}
          className={className}
        >
          <g clipPath="url(#clip0_2323_39440)">
            <rect
              x="22.4141"
              y="2.41406"
              width="2"
              height="32"
              rx="1"
              transform="rotate(45 22.4141 2.41406)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.3423 2.65774C17.9725 1.01935 15.8886 0 13.61 0H8.39C4.251 0 1 3.316 1 7.24V21L3 19V7.24L3.004 7.024C3.12 4.236 5.483 2 8.39 2H13.61C15.3799 2 16.9287 2.83476 17.9064 4.09362L19.3423 2.65774ZM21 9.48528L19.0012 11.4841C19.0018 14.9894 19.0014 18.4947 19 22C19 24.335 17.142 26 14.998 26C14.998 25.385 14.404 24.967 13.858 25.045C12.882 25.124 11.956 25.152 11 25.152C10.051 25.152 9.112 25.116 8.141 25.045C7.595 24.967 7 25.375 7 26C6.26368 26 5.58747 25.8081 5.0088 25.4765L3.56635 26.9189C4.52357 27.594 5.69778 28 7 28H15C18.376 28 21 25.239 21 22V9.48528ZM11.4838 19.0014C12.1379 19.0013 12.792 19.0008 13.446 19C15.225 19 16.443 17.604 16.448 16.011C16.4939 15.3075 16.5395 14.604 16.5848 13.9004L14.4455 16.0397L14.444 16.064C14.3884 16.5971 13.9824 16.9801 13.486 16.9992L11.4838 19.0014ZM14.9735 7.02647C14.8544 6.47019 14.3453 6 13.684 6C11.895 5.998 10.106 5.998 8.317 6C7.632 6 6.998 6.532 6.998 7.214C7.13851 9.66707 7.28174 12.1195 7.42828 14.5717L5.55704 16.443C5.53207 16.3024 5.51553 16.1579 5.508 16.01L5 7.273C4.99983 6.83942 5.08583 6.41012 5.25301 6.01007C5.42019 5.61001 5.66522 5.24718 5.97385 4.94264C6.28247 4.63811 6.64855 4.39795 7.0508 4.23612C7.45306 4.0743 7.88346 3.99404 8.317 4C10.106 3.998 11.895 3.998 13.684 4C14.1215 4.0021 14.5542 4.09037 14.9576 4.25978C15.3609 4.4292 15.7269 4.67643 16.0347 4.98734C16.1987 5.15301 16.3444 5.33502 16.4698 5.53021L14.9735 7.02647ZM16.7071 21.2929C16.5196 21.1054 16.2652 21 16 21H14C13.45 21 13 21.487 13 22C13 22.2652 13.1054 22.5196 13.2929 22.7071C13.4804 22.8946 13.7348 23 14 23H16C16.55 23 17 22.513 17 22C17 21.7348 16.8946 21.4804 16.7071 21.2929Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_2323_39440">
              <rect width="24" height="28" fill="white" />
            </clipPath>
          </defs>
        </LargeSvg>
      );
  }
};

NoTrainIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

NoTrainIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

/** @component */
export default NoTrainIcon;

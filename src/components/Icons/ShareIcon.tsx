import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const ShareIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
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
            d="M12.506 5.56452e-06C12.9657 -0.00158422 13.4212 0.0878716 13.8461 0.263212C14.2711 0.438552 14.6571 0.696305 14.9819 1.0216C15.3068 1.3469 15.564 1.73329 15.7387 2.1585C15.9134 2.58371 16.0022 3.0393 16 3.49901C16.0004 3.95814 15.9103 4.41286 15.7349 4.83717C15.5595 5.26149 15.3022 5.64708 14.9778 5.97193C14.6533 6.29678 14.268 6.5545 13.8439 6.73039C13.4198 6.90628 12.9651 6.99687 12.506 6.99701C12.0087 6.99623 11.5175 6.88797 11.066 6.67964C10.6145 6.47131 10.2133 6.16784 9.89 5.79001L6.907 7.22301C6.968 7.46801 6.988 7.73401 6.988 8.00001C6.988 8.26601 6.968 8.53201 6.907 8.77701L9.87 10.189C10.2028 9.81895 10.6091 9.52235 11.063 9.31814C11.5169 9.11393 12.0083 9.0066 12.506 9.00301C13.4321 9.0067 14.3191 9.37641 14.9736 10.0315C15.6282 10.6866 15.9971 11.574 16 12.5C16.0007 12.9593 15.9108 13.4142 15.7355 13.8388C15.5602 14.2633 15.303 14.6492 14.9785 14.9742C14.654 15.2993 14.2686 15.5572 13.8443 15.7332C13.4201 15.9092 12.9653 15.9999 12.506 16C12.0463 16.0016 11.5908 15.9121 11.1659 15.7368C10.7409 15.5615 10.3549 15.3037 10.0301 14.9784C9.70522 14.6531 9.44802 14.2667 9.27329 13.8415C9.09856 13.4163 9.00975 12.9607 9.012 12.501C9.012 12.338 9.032 12.153 9.052 12.011L5.906 10.537C5.25704 11.1581 4.39229 11.503 3.494 11.499C2.56761 11.4953 1.68028 11.1253 1.02569 10.4698C0.371091 9.81426 0.00237167 8.9264 2.28936e-06 8.00001C-0.000523306 7.54078 0.0894565 7.08596 0.264799 6.66153C0.440141 6.2371 0.697408 5.85139 1.0219 5.52643C1.34638 5.20148 1.73173 4.94367 2.15591 4.76772C2.58008 4.59177 3.03478 4.50114 3.494 4.50101C4.434 4.50101 5.292 4.87001 5.926 5.46301L9.052 3.96901C9.02769 3.81347 9.01433 3.65641 9.012 3.49901C9.01148 3.03978 9.10146 2.58496 9.2768 2.16053C9.45214 1.7361 9.70941 1.35039 10.0339 1.02543C10.3584 0.700483 10.7437 0.442665 11.1679 0.266716C11.5921 0.0907668 12.0468 0.000136658 12.506 5.56452e-06ZM12.506 11.008C12.1108 11.0101 11.7323 11.1681 11.453 11.4477C11.1736 11.7272 11.0158 12.1058 11.014 12.501C11.0156 12.8964 11.1732 13.2752 11.4526 13.555C11.732 13.8348 12.1106 13.9929 12.506 13.995C12.9012 13.9926 13.2795 13.8344 13.5587 13.5546C13.8379 13.2749 13.9954 12.8962 13.997 12.501C13.9952 12.1059 13.8376 11.7276 13.5584 11.448C13.2792 11.1685 12.9011 11.0104 12.506 11.008V11.008ZM3.494 6.50601C2.677 6.50601 2.003 7.16101 2.003 8.00001C2.003 8.39823 2.1612 8.78014 2.44278 9.06173C2.72437 9.34331 3.10628 9.50151 3.5045 9.50151C3.90272 9.50151 4.28464 9.34331 4.56622 9.06173C4.84781 8.78014 5.006 8.39823 5.006 8.00001C5.006 7.16101 4.332 6.50601 3.494 6.50601ZM12.506 1.98501C11.688 1.98501 11.014 2.66001 11.014 3.49901C11.014 3.89736 11.1722 4.2794 11.4539 4.56108C11.7356 4.84276 12.1176 5.00101 12.516 5.00101C12.9144 5.00101 13.2964 4.84276 13.5781 4.56108C13.8598 4.2794 14.018 3.89736 14.018 3.49901C14.0185 3.3002 13.9798 3.10326 13.904 2.91946C13.8282 2.73567 13.7169 2.56865 13.5764 2.42798C13.436 2.28731 13.2691 2.17577 13.0854 2.09975C12.9017 2.02374 12.7048 1.98474 12.506 1.98501V1.98501Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -3 24 24' : '0 0 18 18'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.508 0C15.4335 0.00211299 16.3205 0.370697 16.9749 1.02512C17.6293 1.67954 17.9979 2.56651 18 3.492C18 5.437 16.43 7.008 14.508 7.008C13.406 7.008 12.468 6.492 11.813 5.718L6.89001 8.157C6.96001 8.438 7.00701 8.72 7.00701 9.001C7.00701 9.282 6.96001 9.564 6.89001 9.821L11.835 12.259C12.1583 11.8626 12.5658 11.5433 13.028 11.3243C13.4903 11.1053 13.9955 10.9921 14.507 10.993C16.429 10.993 17.999 12.563 17.999 14.509C17.9966 15.4341 17.6281 16.3207 16.9739 16.9749C16.3197 17.6291 15.4331 17.9976 14.508 18C12.563 18 10.992 16.43 10.992 14.508C10.992 14.368 11.02 14.174 11.039 14.086L5.88301 11.555C5.23547 12.1615 4.38018 12.4968 3.49301 12.492C3.03412 12.4929 2.57957 12.4032 2.15543 12.2281C1.73129 12.0529 1.3459 11.7958 1.02138 11.4713C0.696853 11.1469 0.439575 10.7616 0.264303 10.3375C0.0890312 9.91341 -0.000785566 9.45888 5.1761e-06 9C0.00238107 8.07459 0.37105 7.18777 1.02541 6.53341C1.67978 5.87904 2.5666 5.51038 3.49201 5.508C4.37238 5.50307 5.22054 5.83882 5.85901 6.445L11.039 3.891C11.007 3.76043 10.9912 3.62643 10.992 3.492C10.992 1.57 12.562 0 14.508 0ZM14.496 12.984C14.2974 12.9837 14.1006 13.0227 13.9171 13.0986C13.7335 13.1745 13.5667 13.2858 13.4263 13.4263C13.2858 13.5667 13.1745 13.7335 13.0986 13.9171C13.0227 14.1006 12.9837 14.2974 12.984 14.496C12.984 15.31 13.659 15.984 14.496 15.984C15.31 15.984 15.984 15.31 15.984 14.496C15.984 13.659 15.31 12.984 14.496 12.984V12.984ZM3.49201 7.5C2.67201 7.5 1.99201 8.18 1.99201 9C1.99201 9.82 2.67201 10.5 3.49201 10.5C4.33601 10.5 5.01601 9.82 5.01601 9C5.01601 8.18 4.33601 7.5 3.49201 7.5ZM14.512 2C13.674 2 13 2.674 13 3.488C13 4.326 13.674 5 14.512 5C15.326 5 16 4.326 16 3.488C16 2.674 15.326 2 14.512 2Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-3 -4 32 32' : '0 0 24 24'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 -2.12215e-07C22.219 -2.12215e-07 24 1.781 24 4C24 6.219 22.219 8 20 8C19.4259 8.00066 18.8583 7.87828 18.3354 7.64109C17.8126 7.40391 17.3467 7.05743 16.969 6.625L7.906 11.156C8.03007 11.7118 8.03007 12.2882 7.906 12.844L16.969 17.375C17.3467 16.9426 17.8126 16.5961 18.3354 16.3589C18.8583 16.1217 19.4259 15.9993 20 16C22.219 16 24 17.781 24 20C24 22.219 22.219 24 20 24C19.4027 24.0016 18.8126 23.8691 18.2734 23.6121C17.7342 23.3551 17.2595 22.9803 16.8846 22.5153C16.5096 22.0503 16.2439 21.507 16.1071 20.9256C15.9703 20.3442 15.9658 19.7394 16.094 19.156L7 14.625C6.62858 15.0568 6.16819 15.4033 5.65039 15.6406C5.13259 15.878 4.5696 16.0005 4 16C1.781 16 0 14.219 0 12C0 9.781 1.781 8 4 8C5.219 8 6.281 8.531 7.031 9.375L16.094 4.844C15.9658 4.26059 15.9703 3.65584 16.1071 3.07439C16.2439 2.49295 16.5096 1.94967 16.8846 1.48468C17.2595 1.01969 17.7342 0.644871 18.2734 0.387896C18.8126 0.130921 19.4027 -0.00164094 20 -2.12215e-07V-2.12215e-07ZM20 18C18.906 18 18 18.906 18 20C18 21.094 18.906 22 20 22C21.094 22 22 21.094 22 20C22 18.906 21.094 18 20 18ZM4 10C2.906 10 2 10.906 2 12C2 13.094 2.906 14 4 14C5.094 14 6 13.094 6 12C6 10.906 5.094 10 4 10ZM20 2C18.906 2 18 2.906 18 4C18 5.094 18.906 6 20 6C21.094 6 22 5.094 22 4C22 2.906 21.094 2 20 2Z"
          />
        </LargeSvg>
      );
  }
};

ShareIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

ShareIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

/** @component */
export default ShareIcon;

import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const SettingsIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 20 20' : '0 0 16 16'}
          className={className}
          fill={color}
          style={style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.43803 0.0471191C10.344 0.0471191 11.062 0.766119 11.094 1.67212V2.67212L11.344 2.82812L12.25 2.29712C12.5 2.14112 12.781 2.07812 13.063 2.07812C13.625 2.07812 14.187 2.35912 14.469 2.89112L15.781 5.07812C15.9262 5.33563 16.0016 5.62653 16 5.92212C16 6.42212 15.75 7.04712 15.156 7.35912L14.25 7.85912V8.20312L15.125 8.73412C15.75 9.10912 15.875 9.54712 15.938 10.1411C15.938 10.4531 15.875 10.7341 15.718 10.9841L14.468 13.0781C14.3245 13.3239 14.1195 13.5281 13.8732 13.6706C13.6268 13.8132 13.3476 13.8892 13.063 13.8911C12.75 13.8911 12.469 13.8281 12.219 13.6711L11.313 13.1091L11 13.2971V14.2971C11 15.2031 10.25 15.9531 9.34403 15.9531H6.62503C5.71903 15.9531 5.00003 15.2031 5.00003 14.2971V13.2971L4.68703 13.1091L3.78103 13.6721C3.51964 13.8065 3.23175 13.8813 2.93803 13.8911C2.65378 13.8861 2.37548 13.8089 2.12933 13.6667C1.88318 13.5244 1.67728 13.3219 1.53103 13.0781L0.281025 10.9841C0.132534 10.7283 0.0568035 10.4368 0.0620255 10.1411C0.0620255 9.54712 0.344025 9.04712 0.875025 8.73412L1.75003 8.20412V7.85912L0.844026 7.35912C0.590635 7.21355 0.379542 7.00448 0.231545 6.75249C0.0835478 6.50051 0.00375413 6.21432 2.54767e-05 5.92212C-0.0015926 5.62653 0.0738904 5.33563 0.219026 5.07812L1.53003 2.89112C1.67146 2.64329 1.87614 2.43745 2.12316 2.29461C2.37018 2.15178 2.65068 2.07707 2.93603 2.07812C3.21803 2.07812 3.49903 2.14112 3.74903 2.29712L4.65503 2.82812L4.90503 2.67212V1.67212C4.90503 0.766119 5.65503 0.0471191 6.56203 0.0471191H9.43603H9.43803ZM9.09403 2.01612H6.90603V3.79612L4.65603 5.14112L3.06303 4.20312L2.12503 5.79712L3.71903 6.67212L3.75003 9.35912L2.18703 10.2661L3.06203 11.7661L4.62503 10.8281L7.00003 12.1101V13.9541H9.00003V12.1101L11.344 10.8301L12.938 11.7671L13.812 10.2671L12.219 9.36012L12.281 6.67312L13.875 5.79812L12.937 4.20412L11.313 5.14212L9.09303 3.79812V2.01612H9.09403ZM8.01603 6.00012C9.11803 6.00012 10 6.88212 10 7.98412C10 9.11812 9.11803 10.0001 8.01603 10.0001C7.75031 10.0036 7.48659 9.95386 7.24042 9.85378C6.99425 9.7537 6.77061 9.60534 6.58271 9.41743C6.39481 9.22953 6.24644 9.0059 6.14636 8.75972C6.04629 8.51355 5.99653 8.24983 6.00003 7.98412C6.00003 6.88212 6.88203 6.00012 8.01603 6.00012Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 24 24' : '0 0 20 20'}
          className={className}
          fill={color}
          style={style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.411 1.403L13.315 2.742L14.686 3.539L15.834 2.773C16.0042 2.66191 16.2048 2.60636 16.408 2.614C17.587 2.614 19.787 6.446 19.787 7.747C19.787 8.097 19.604 8.464 19.245 8.639L18.002 9.245V10.775L19.245 11.381C19.4096 11.4642 19.5477 11.5918 19.6435 11.7495C19.7393 11.9072 19.789 12.0885 19.787 12.273C19.787 13.491 17.638 17.406 16.407 17.406C16.204 17.4131 16.0038 17.3572 15.834 17.246L14.686 16.481L13.316 17.247L13.411 18.617C13.491 19.754 11.769 20.02 9.99995 20.02C8.40695 20.02 6.50595 19.813 6.58895 18.617L6.68495 17.247L5.31395 16.481L4.16595 17.247C3.99567 17.3581 3.79512 17.4136 3.59195 17.406C2.41295 17.406 0.212952 13.574 0.212952 12.273C0.212952 11.923 0.395952 11.556 0.754952 11.381L1.99795 10.775V9.245L0.754952 8.639C0.590271 8.55583 0.452197 8.42817 0.356395 8.27051C0.260593 8.11284 0.2109 7.93148 0.212952 7.747C0.212952 6.409 2.42495 2.614 3.62395 2.614C3.78395 2.614 3.97395 2.646 4.16595 2.774L5.31395 3.539L6.68395 2.742L6.58895 1.402C6.50895 0.287 8.16495 0.0189999 9.81695 0.000999928L9.99995 0C11.594 0 13.496 0.208 13.411 1.403ZM9.99995 2.008C9.55395 2.008 9.10695 2.04 8.62995 2.136L8.72495 3.252C8.75695 3.632 8.53695 3.99 8.21495 4.176L5.79195 5.58C5.63195 5.644 5.47295 5.707 5.28195 5.707C5.09095 5.707 4.89595 5.649 4.73995 5.547L3.75195 4.91C3.17795 5.58 2.73195 6.377 2.41195 7.206L3.43195 7.716C3.78995 7.894 4.00695 8.258 4.00695 8.608V11.382C4.00695 11.764 3.77695 12.102 3.43295 12.274L2.41295 12.784C2.73195 13.645 3.17795 14.442 3.75195 15.112L4.73995 14.474C4.89595 14.374 5.08995 14.314 5.28195 14.314C5.47295 14.314 5.63195 14.349 5.79195 14.442L8.21495 15.845C8.53695 16.031 8.75695 16.388 8.72495 16.769L8.62895 17.885C9.10695 17.981 9.55395 18.013 9.99995 18.013C10.446 18.013 10.893 17.981 11.37 17.885L11.275 16.769C11.243 16.389 11.463 16.031 11.785 15.845L14.208 14.442C14.3628 14.3531 14.5395 14.3091 14.718 14.315C14.909 14.315 15.104 14.373 15.26 14.475L16.248 15.112C16.8283 14.4214 17.282 13.6336 17.588 12.785L16.568 12.306C16.3947 12.222 16.2487 12.0906 16.1469 11.9271C16.0452 11.7636 15.9918 11.5746 15.993 11.382V8.64C15.993 8.258 16.21 7.894 16.567 7.716L17.587 7.206C17.268 6.376 16.822 5.58 16.248 4.91L15.26 5.548C15.104 5.648 14.91 5.708 14.718 5.708C14.527 5.708 14.368 5.644 14.208 5.58L11.785 4.177C11.463 3.991 11.243 3.634 11.275 3.253L11.371 2.137C10.9194 2.04816 10.4601 2.00494 9.99995 2.008ZM9.98495 6C11.0501 6.00079 12.0714 6.42427 12.8245 7.17743C13.5777 7.93059 14.0012 8.95187 14.002 10.017C14.002 12.217 12.216 14.002 9.98495 14.002C8.92814 14.0017 7.9147 13.5818 7.16742 12.8345C6.42015 12.0873 6.00022 11.0738 5.99995 10.017C5.99995 7.817 7.78495 6 9.98495 6ZM9.99995 8.002C9.46837 8.00515 8.95945 8.21772 8.58356 8.59361C8.20767 8.9695 7.9951 9.47842 7.99195 10.01C7.99195 11.094 8.91595 12.018 9.99995 12.018C10.5315 12.0149 11.0405 11.8023 11.4163 11.4264C11.7922 11.0505 12.0048 10.5416 12.008 10.01C12.009 9.74601 11.9578 9.48442 11.8573 9.24032C11.7567 8.99622 11.6089 8.77444 11.4222 8.58777C11.2355 8.4011 11.0137 8.25323 10.7696 8.15269C10.5255 8.05216 10.2639 8.00094 9.99995 8.002Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 32 32' : '0 0 28 28'}
          className={className}
          fill={color}
          style={style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.4572 1.507L18.3002 3.767L20.7172 5.147L22.6002 3.923C22.7682 3.813 22.9452 3.735 23.1332 3.735C24.6572 3.735 27.5902 9.215 27.5902 10.703C27.5902 11.079 27.3772 11.437 27.0252 11.613L25.0162 12.617V15.379L27.0262 16.383C27.3762 16.559 27.5902 16.917 27.5902 17.293C27.5902 18.821 24.4762 24.261 23.1332 24.261C22.9452 24.261 22.7682 24.182 22.6002 24.073L20.7172 22.849L18.3002 24.229L18.4572 26.459C18.5492 27.764 16.0512 27.996 14.0002 27.996C12.0632 27.996 9.44916 27.796 9.54316 26.458L9.70016 24.23L7.28316 22.849L5.40016 24.073C5.23216 24.183 5.05516 24.261 4.86716 24.261C3.45216 24.261 0.410156 18.801 0.410156 17.262C0.410156 16.917 0.636156 16.553 0.975156 16.383L2.98416 15.379V12.617L0.974156 11.613C0.80505 11.5285 0.66276 11.3986 0.563167 11.2379C0.463575 11.0773 0.4106 10.892 0.410156 10.703C0.410156 9.218 3.42616 3.735 4.86716 3.735C5.05516 3.735 5.23216 3.814 5.40016 3.923L7.28316 5.147L9.70016 3.767L9.57516 1.507C9.50516 0.262 11.7482 0.0149999 13.7962 0.000999928L14.0002 0C15.9402 0 18.5472 0.212 18.4572 1.507ZM14.0002 1.977C13.2152 1.977 12.4002 2.071 11.6152 2.228L11.7402 4.268C11.7486 4.45123 11.7062 4.63322 11.6176 4.79383C11.529 4.95444 11.3976 5.0874 11.2382 5.178L7.75416 7.188C7.60163 7.27535 7.42784 7.31863 7.25216 7.313C7.06234 7.31615 6.87606 7.26139 6.71816 7.156L5.02416 6.026C3.95636 7.24282 3.14486 8.66244 2.63816 10.2L4.42816 11.11C4.76516 11.283 4.99216 11.613 4.99216 11.99V16.007C4.98932 16.1916 4.93491 16.3718 4.83507 16.5271C4.73523 16.6824 4.59394 16.8068 4.42716 16.886L2.60716 17.796C3.13066 19.3234 3.95221 20.7316 5.02416 21.939L6.71816 20.84C6.88816 20.73 7.06416 20.652 7.25216 20.652C7.44016 20.652 7.59516 20.718 7.75416 20.809L11.2382 22.786C11.5562 22.966 11.7632 23.352 11.7402 23.728L11.6152 25.768C12.3992 25.925 13.2152 26.018 14.0002 26.018C14.7852 26.018 15.6002 25.925 16.3852 25.768L16.2602 23.728C16.2509 23.5403 16.2927 23.3536 16.3811 23.1877C16.4695 23.0218 16.6012 22.883 16.7622 22.786L20.2462 20.809C20.4052 20.719 20.5602 20.652 20.7482 20.652C20.9362 20.652 21.1122 20.732 21.2822 20.84L23.0082 21.939C24.0592 20.7221 24.8686 19.316 25.3932 17.796L23.5732 16.886C23.4062 16.8067 23.2648 16.6822 23.165 16.5267C23.0651 16.3712 23.0108 16.1908 23.0082 16.006V11.99C23.0112 11.8055 23.0657 11.6256 23.1655 11.4705C23.2653 11.3153 23.4065 11.1912 23.5732 11.112L25.3932 10.202C24.8629 8.66812 24.0423 7.25066 22.9762 6.027L21.2822 7.157C21.1242 7.26239 20.938 7.31715 20.7482 7.314C20.5724 7.31932 20.3986 7.2757 20.2462 7.188L16.7622 5.18C16.6027 5.0894 16.4714 4.95644 16.3828 4.79583C16.2942 4.63522 16.2517 4.45323 16.2602 4.27L16.3852 2.23C15.6003 2.06796 14.8015 1.98289 14.0002 1.976V1.977ZM14.0002 9C16.7672 9 19.0002 11.233 19.0002 14C19.0002 16.767 16.7672 19 14.0002 19C11.2332 19 9.00016 16.767 9.00016 14C9.00016 11.233 11.2332 9 14.0002 9ZM14.0002 11C13.2042 11.0003 12.441 11.3167 11.8784 11.8797C11.3158 12.4427 10.9999 13.2061 11.0002 14.002C11.0004 14.7979 11.3169 15.5611 11.8798 16.1237C12.4428 16.6863 13.2062 17.0023 14.0022 17.002C14.3963 17.0019 14.7865 16.9241 15.1505 16.7732C15.5146 16.6222 15.8453 16.4011 16.1239 16.1223C16.4025 15.8436 16.6234 15.5127 16.7741 15.1485C16.9248 14.7844 17.0023 14.3941 17.0022 14C17.002 13.6059 16.9243 13.2157 16.7733 12.8516C16.6224 12.4876 16.4012 12.1568 16.1225 11.8783C15.8437 11.5997 15.5128 11.3787 15.1487 11.2281C14.7845 11.0774 14.3943 10.9999 14.0002 11Z"
          />
        </LargeSvg>
      );
  }
};

SettingsIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

SettingsIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default SettingsIcon;

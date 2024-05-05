import React from 'react';
import { COOL_GRAY_700 } from '../Colors/colors';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
};

/**
 * @deprecated Use RefreshIcon size=LARGE instead
 */
const ReloadIcon: React.FC<TProps> = ({ className, color, style }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={style} className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 16.032C5 10.871 8.613 6.419 13.645 5.387L11.161 3.903C11.0164 3.81353 10.8964 3.6894 10.8119 3.54185C10.7274 3.3943 10.681 3.22799 10.677 3.058C10.677 2.744 10.847 2 11.649 2C11.839 2 12.058 2.071 12.352 2.251L16.808 4.968C17.073 5.129 17.323 5.419 17.323 5.766C17.323 5.936 17.278 6.126 17.161 6.323L14.419 10.935C14.3306 11.0841 14.2045 11.2074 14.0533 11.2923C13.9022 11.3773 13.7314 11.421 13.558 11.419C12.991 11.419 12.548 10.968 12.548 10.412C12.548 10.258 12.583 10.06 12.678 9.903L14.258 7.29C10.161 8.065 7 11.645 7 16.032C6.99654 17.4265 7.31885 18.8026 7.94126 20.0506C8.56367 21.2985 9.46896 22.3838 10.585 23.22C10.878 23.44 11 23.742 11 24.045C11 24.606 10.58 25.032 10 25.032C9.78032 25.0356 9.5657 24.9659 9.39 24.834C8.03032 23.8036 6.92681 22.4732 6.16538 20.9465C5.40394 19.4198 5.00513 17.738 5 16.032ZM14.677 26.3C14.677 26.13 14.722 25.94 14.839 25.743L17.581 21.13C17.6694 20.9809 17.7955 20.8576 17.9467 20.7727C18.0978 20.6877 18.2686 20.644 18.442 20.646C19.009 20.646 19.452 21.098 19.452 21.653C19.452 21.807 19.417 22.005 19.322 22.163L17.742 24.775C21.839 24 25 20.42 25 16.032C25.0035 14.6375 24.6811 13.2614 24.0587 12.0134C23.4363 10.7655 22.531 9.68019 21.415 8.844C21.2849 8.74989 21.1793 8.62594 21.1071 8.48255C21.0349 8.33916 20.9982 8.18054 21 8.02C21 7.458 21.42 7.032 22 7.032C22.226 7.032 22.433 7.097 22.61 7.23C25.355 9.312 27 12.58 27 16.032C27 21.194 23.387 25.645 18.355 26.677L20.839 28.161C21.129 28.335 21.323 28.677 21.323 29.007C21.323 29.32 21.153 30.065 20.351 30.065C20.258 30.065 20.007 30.033 19.741 29.871L15.192 27.097C14.927 26.936 14.677 26.645 14.677 26.298V26.3Z"
      fill={color}
    />
  </Svg>
);

ReloadIcon.defaultProps = {
  className: '',
  color: COOL_GRAY_700,
  style: {},
};

export default ReloadIcon;
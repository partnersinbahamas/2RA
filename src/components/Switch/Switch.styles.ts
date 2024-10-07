import styled from 'styled-components';

import { IHorizontal, IVertical } from '../utils/types/types';

export const Wrapper = styled.div<{
  labelPosition: IVertical | IHorizontal;
  disabled: boolean;
}>`
  width: min-content;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  ${({ labelPosition }) => {
    switch (labelPosition) {
      case 'top':
        return `flex-direction: column`;
      case 'bottom':
        return `flex-direction: column-reverse`;
      case 'left':
        return `flex-direction: row`;
      case 'right':
        return `flex-direction: row-reverse`;
    }
  }}
`;

export const Label = styled.label<{ disabled: boolean }>``;

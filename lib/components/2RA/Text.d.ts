import { default as React } from 'react';
import { default as TExtendedComponentProps } from '../utils/types/props/extendedProps';

type TText = React.ComponentProps<'span'> & TExtendedComponentProps & {
    children: React.ReactNode;
};
declare const Text: React.FC<TText>;
export default Text;

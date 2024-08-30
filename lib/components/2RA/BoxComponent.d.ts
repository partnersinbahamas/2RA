import { BoxProps } from '@mui/material';
import { default as TExtendedComponentProps } from '../utils/types/props/extendedProps';

type TBoxComponent = BoxProps & TExtendedComponentProps;
declare const BoxComponent: React.FC<TBoxComponent>;
export default BoxComponent;

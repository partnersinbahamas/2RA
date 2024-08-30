import { AvatarProps } from '@mui/material';
import { default as TExtendedComponentProps } from '../utils/types/props/extendedProps';

type TAvatarComponent = AvatarProps & TExtendedComponentProps;
declare const AvatarComponent: React.FC<TAvatarComponent>;
export default AvatarComponent;

import { default as TArticleProps } from '../utils/types/props/article';
import { TStile } from '../utils/types/types';

type TProps = TArticleProps & {
    text: string;
    x: number | string;
    y: number | string;
    fixTo?: string;
    stile?: TStile;
    className?: any;
};
declare const DisplayCount: React.FC<TProps>;
export default DisplayCount;

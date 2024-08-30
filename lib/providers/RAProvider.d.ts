import { default as React } from 'react';
import { TStile } from '../components/utils/types/types';

export declare const useRA: () => {
    stylesExtention: TStylesExtension;
    componentsStile: TStile;
};
type TProps = {
    children: React.ReactNode;
    extension: TStylesExtension;
    componentsStile: TStile;
};
export declare const RAProvider: React.FC<TProps>;
export {};

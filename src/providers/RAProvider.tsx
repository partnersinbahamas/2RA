import React, { useMemo, useState } from 'react';
import {
  TStile,
  EStile,
  EStylesExtention,
} from '../components/utils/types/types';

interface IProviderDefaultValues {
  stylesExtention: TStylesExtension;
  componentsStile: TStile;
}

const defaultProviderValues: IProviderDefaultValues = {
  stylesExtention: EStylesExtention.SCSS,
  componentsStile: EStile.DEFAULT,
};

const RAContext = React.createContext({
  stylesExtention: defaultProviderValues.stylesExtention,
  componentsStile: defaultProviderValues.componentsStile,
});

export const useRA = () => React.useContext(RAContext);

type TProps = {
  children: React.ReactNode;
  extension: TStylesExtension;
  componentsStile: TStile;
};

export const RAProvider: React.FC<TProps> = ({
  children,
  extension = defaultProviderValues.stylesExtention,
  componentsStile = defaultProviderValues.componentsStile,
}) => {
  const [stylesExtention] = useState<TStylesExtension>(extension);
  const [componentsDefaultStile] = useState<TStile>(componentsStile);

  const providerValues = useMemo(
    () => ({ stylesExtention, componentsStile: componentsDefaultStile }),
    [stylesExtention],
  );

  return (
    <RAContext.Provider value={providerValues}>{children}</RAContext.Provider>
  );
};

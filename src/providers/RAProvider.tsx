import React, { useMemo, useState } from 'react';

const RAContext = React.createContext({
  stylesExtention: '.scss',
});

export const useRA = () => React.useContext(RAContext);

type TProps = {
  children: React.ReactNode;
  extension: TStylesExtension;
};

export const RAProvider: React.FC<TProps> = ({
  children,
  extension = '.scss',
}) => {
  const [stylesExtention] = useState<TStylesExtension>(extension);
  const providerValues = useMemo(
    () => ({ stylesExtention }),
    [stylesExtention],
  );

  return (
    <RAContext.Provider value={providerValues}>{children}</RAContext.Provider>
  );
};

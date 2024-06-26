import { useEffect, useState } from 'react';
import { TStile } from '../components/utils/types/types';

function useMute(stile: TStile) {
  const [muteState, setMuteState] = useState<boolean>(false);

  useEffect(() => {
    setMuteState(stile === 'mute');
    return () => setMuteState(false);
  });

  return { muteState, setMuteState };
}

export default useMute;

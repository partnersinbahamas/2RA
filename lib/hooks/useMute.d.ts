import { TStile } from '../components/utils/types/types';

declare function useMute(stile: TStile): {
    muteState: boolean;
    setMuteState: import('react').Dispatch<import('react').SetStateAction<boolean>>;
};
export default useMute;

import { TStile } from '../components/utils/types/types';

declare function usePrime(stile: TStile): {
    primeState: boolean;
    setPrimeState: import('react').Dispatch<import('react').SetStateAction<boolean>>;
};
export default usePrime;

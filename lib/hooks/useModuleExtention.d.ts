declare function useModuleExtention(extention: TStylesExtension): {
    moduleExtentionState: boolean;
    setModuleExtentionState: import('react').Dispatch<import('react').SetStateAction<boolean>>;
};
export default useModuleExtention;

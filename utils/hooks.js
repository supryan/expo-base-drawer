import React, { useRef } from 'react'
import { storesContext } from '../stores/StoreContext';

export const useStores = () => React.useContext(storesContext);

export const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};

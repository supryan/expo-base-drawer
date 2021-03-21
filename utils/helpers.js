export const flatten = (array) => {
    return Object.keys(array).reduce((r, k) => {
        return r.concat(array[k]);
    }, []);
};

export const generateId = () => {
    return Math.random().toString(36).substr(2, 10) + Math.random().toString(36).substr(2, 10);
};

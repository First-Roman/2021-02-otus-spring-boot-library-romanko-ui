export const deepClone = (obj) => {
    if (Array.isArray(obj)) {
        let arr = [];
        obj.forEach(i => {
            arr.push(deepClone(i));
        });
        return arr;
    } else if (typeof obj === 'object') {
        let o = {};
        for (let k in obj) {
            o[k] = deepClone(obj[k]);
        }
        return o;
    } else {
        return obj;
    }
};
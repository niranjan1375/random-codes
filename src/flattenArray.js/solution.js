const flat = (arr, n) => {
    return arr.reduce((acc, curr) => {
        if (!Array.isArray(curr)) {
            acc.push(curr);
        } else if (n > 0) {
            acc.push(...flat(curr, n - 1));
        } else {
            acc.push(curr);
        }
        return acc;
    }, []);
};

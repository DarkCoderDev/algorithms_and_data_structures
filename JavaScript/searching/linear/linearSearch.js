const linearSearch = (array, desired) => {
    let i;
    for(i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === desired) return i;
    }
    return null;
};

module.exports = linearSearch; // O(n) - линейное время.

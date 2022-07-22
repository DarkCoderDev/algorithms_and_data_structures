const binarySearch = (array, desired) => {
    let start = 0;
    let end = array.length;
    let middle;
    let isFound = false;
    let index = -1;

    while (start <= end && !isFound) {
        middle = Math.ceil((start + end) / 2);

        if (array[middle] === desired) {
            isFound = true;
            index = middle;
            return index;
        }

        array[middle] > desired
            ? end = (middle - 1)
            : start = (middle + 1);
    }

    return index;
};

module.exports = binarySearch; // O(log n2) - логарифмическое время.

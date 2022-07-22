const selectionSort = array => {
    const { length } = array;
    let i, current;
    let j, next;
    let indexMin;

    for (i = 0; i < length; i++) {
        indexMin = i;
        current = array[i]

        for (j = i + 1; j < length; j++) {
            next = array[j]

            if (next < array[indexMin]) indexMin = j;
        }

        array[i] = array[indexMin];
        array[indexMin] = current
    }

    return array;
}

module.exports = selectionSort; // O(n^2) - квадратичное время. >> 105 iterations.

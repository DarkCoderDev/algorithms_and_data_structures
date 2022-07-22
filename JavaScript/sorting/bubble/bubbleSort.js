const bubbleSort = array => {
    let i;
    let j;
    const { length } = array;

    for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
            const next = j + 1;

            if (array[j] > array[next]) {
                let currentValue = array[j]
                array[j] = array[next];
                array[next] = currentValue;
            }
        }
    }

    return array;
}

module.exports = bubbleSort; // O(n^2) - квадратичное время. >> 105 iterations.

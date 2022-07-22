const quickSort = array => {
    const { length } = array;

    if (length <= 1) return array;

    let i;
    let pivotIndex = Math.ceil(length / 2);
    let pivot = array[pivotIndex];
    const less = [];
    const greater = [];

    for (i = 0; i < length; i++) {
        const current = array[i];
        if (i === pivotIndex) continue;

        current < pivot
            ? less.push(current)
            : greater.push(current);
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

/*
 Quick sort - быстрая сортировка | сортировка Хоара.
 Алгоритм сортировки, разработанный английским информатиком Тони Хоаром во время своей работы в МГУ в 1960 году.
*/

module.exports = quickSort; // O(log2n * n) - логарифмическое время.

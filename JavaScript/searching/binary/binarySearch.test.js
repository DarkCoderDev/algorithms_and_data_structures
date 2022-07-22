const binarySearch = require('./binarySearch');
const mockSortedArray = require('../../__mockStructures__/sortedArrayRandomValues');

describe('Testing binary search algorithm', () => {
    it('Found correct index of desired value', () => {
        expect(
            binarySearch(mockSortedArray, 6)
        ).toBe(
            0
        );
    });

    it('Found correct index of desired value', () => {
        expect(
            binarySearch(mockSortedArray, 11)
        ).toBe(
            2
        );
    });

    it('Found correct index of desired value', () => {
        expect(
            binarySearch(mockSortedArray, 19)
        ).toBe(
            3
        );
    });

    it('if have not found the index of desired value, return a negative index', () => {
        expect(
            binarySearch(mockSortedArray, 30102000)
        ).toBe(
            -1
        );
    });
});

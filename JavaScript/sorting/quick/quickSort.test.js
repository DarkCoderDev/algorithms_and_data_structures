const quickSort = require('./quickSort');
const mockArray = require('../../__mockStructures__/arrayRandomValues');
const mockSortedArray = require('../../__mockStructures__/sortedArrayRandomValues');

describe('Testing quick sort algorithm', () => {
    it('Correct sorting array', () => {
        expect(
            quickSort(mockArray)
        ).toEqual(
            mockSortedArray
        );
    });
});

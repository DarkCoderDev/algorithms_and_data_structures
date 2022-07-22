const bubbleSort = require('./bubbleSort');
const mockArray = require('../../__mockStructures__/arrayRandomValues');
const mockSortedArray = require('../../__mockStructures__/sortedArrayRandomValues');

describe('Testing bubble sort algorithm', () => {
    it('Correct sorting array', () => {
        expect(
            bubbleSort(mockArray)
        ).toEqual(
            mockSortedArray
        );
    });
});

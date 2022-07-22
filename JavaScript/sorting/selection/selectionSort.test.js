const selectionSort = require('./selectionSort');
const mockArray = require('../../__mockStructures__/arrayRandomValues');
const mockSortedArray = require('../../__mockStructures__/sortedArrayRandomValues');

describe('Testing selection sort algorithm', () => {
    it('Correct sorting array', () => {
        expect(
            selectionSort(mockArray)
        ).toEqual(
            mockSortedArray
        );
    });
});

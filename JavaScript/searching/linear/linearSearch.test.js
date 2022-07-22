const linearSearch = require('./linearSearch');
const mockArray = require('../../__mockStructures__/arrayRandomValues');

describe('Testing linear search algorithm', () => {
    it('Found correct value', () => {
        expect(
            linearSearch(mockArray, 90)
        ).toBe(
            2
        );
    });

    it('if have not found the desired value, return null', () => {
        expect(
            linearSearch(mockArray, 30102000)
        ).toBe(
            null
        );
    });
});

const breadthFirstSearch = require('./breadthFirstSearch');
const mockGraph = require('../../__mockStructures__/graph');

describe('Testing linear search algorithm', () => {
    it('Have found endpoint and return true', () => {
        expect(
            breadthFirstSearch(mockGraph, 'a', 'f')
        ).toBe(
            true
        );

    });

    it('Cannot find endpoint and returns false', () => {
        expect(
            breadthFirstSearch(mockGraph, 'a', 'l')
        ).toBe(
            false
        );
    });
});

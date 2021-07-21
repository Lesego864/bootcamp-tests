describe('The fromWhere function', function () {
    it('should return "Somewhere!" if the car registration number start with "CC".', function () {
        assert.equal(fromWhere('CC'), 'Somewhere!');
    });
    it('should return "Cape Town" if the car registration number start with "CA".', function () {
        assert.equal('Cape Town', fromWhere('CA'));
    });
    it('should return "Bellville" if the car registration number start with "CY".', function () {
        assert.equal('Bellville', fromWhere('CY'));
    });
    it('should return "Paarl" if the car registration number start with "CJ".', function () {
        assert.equal('Paarl', fromWhere('CJ'));
    });
});







describe('The transportFee function', function () {
    it('should return "R10" for the "afternoon" shift.', function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should return "free for the night shift".', function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
    it('should return "R20" for the "morning" shift.', function () {
        assert.equal(transportFee('morning'), 'R20');
    });
});







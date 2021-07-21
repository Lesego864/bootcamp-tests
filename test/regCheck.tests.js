describe('The regCheck function' , function(){
    it('should return true when a car registration plate is from GP, L, MP and EC.' , function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
        assert.equal(true, regCheck('5566 L', 'L'));
        assert.equal(true, regCheck('ERT 123 EC', 'EC'));
        assert.equal(true, regCheck('FGT 123 MP', 'MP'));

    });
    it('should return false when a car registration plate is not from GP, L, MP and EC.' , function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
        assert.equal(false, regCheck('5566 L', 'M'));
        assert.equal(false, regCheck('ERT 123 EC', 'GP'));
        assert.equal(false, regCheck('FGT 123 MM', 'MP'));

    });

});
















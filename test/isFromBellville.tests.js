describe('The isFromBellville function' , function(){
    it('should return true when a car registration is from Bellville.' , function(){
        assert.equal(true, isFromBellville('CY 123'));

    });
    it('should return false when a car registration is not from Bellville.' , function(){
        assert.equal(false, isFromBellville('CJ 123'));

    });

});






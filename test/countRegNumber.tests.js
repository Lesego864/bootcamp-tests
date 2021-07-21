describe('The countRegNumber function' , function(){
    it('should return the number of registration numbers in a string.' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328, CJ 682458, CY 852746')
        assert.equal(regCount, 5);
        var regCount = countRegNumber('CA 182736, CJ 682458, CY 852746')
        assert.equal(regCount, 3);

    });

});





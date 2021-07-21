describe('The isWeekday function' , function(){
    it('should return true for a string parameter passed that is a day of the week' , function(){
        assert.equal(true, isWeekday('Monday'));
        assert.equal(true, isWeekday('Tuesday'));

    });
    it('should return false for a string parameter passed that is not a day of the week, but a weekend' , function(){
        assert.equal(false, isWeekday('Sunday'));
        assert.equal(false, isWeekday('Saturday'));

    });

});




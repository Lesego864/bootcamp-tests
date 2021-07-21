describe('The greet function' , function(){
    it('should return "Hello, Lesego" when I greet Lesego.' , function(){
        assert.equal('Hello, Lesego', greet('Lesego'));

        //assert.deepEqual([2,2],[2,2]);
    });
    it('should return "Hello, Lindani" when I greet Lindani.' , function(){
        assert.equal('Hello, Lindani', greet('Lindani'));

    });
    it('should return "Hello," when there is no name given.' , function(){
        assert.equal('Hello', greet());

    });

});
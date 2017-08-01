describe( 'FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('returns "fizz" for * of 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
    it('returns "fizz" for 6', function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
    it('returns number if 1 is not a multiple of 3', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
  });

  describe('multiples of 5', function() {
    it('returns "buzz" for * of 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
    it('returns "Buzz" for 10', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
    it('returns number is 11 is not a multiple of 5', function() {
      expect(fizzBuzz.play(11)).toEqual(11)
    });
  });

  describe('multiples of 3 & 5', function() {
    it('returns "fizzbuzz" for * of 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz')
    });
    it('returns "fizzbuzz" for 30', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz')
    });
  });
});

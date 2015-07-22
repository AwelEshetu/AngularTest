//writting jasmin test using jasmin functions (describe(),beforeEach(),it(),expect(x)and toEqual(val)and its scenarios according to arrange /act/assert (AAA)
describe("First Test", function() {
  // link our test to our variable to be tested(arrange)
  var counter;
  // what our variable is expected to be at the start of the run
  beforeEach(function() {
    counter = 0;
  });
  //what is expected to our variable behaviour
  it("increments value", function() {
    //attempt the operation (act) or set operation
    counter++;
    //expected result (Assert or verify the result)
    expect(counter).toEqual(1);
  });
  it("decrements value", function() {
    //attempt operation(act)
    counter--;
    //expected result(assert)
    expect(counter).toEqual(-1);
  });
});

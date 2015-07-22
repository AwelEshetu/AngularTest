//testing our controller using jasmin ( AAA-arrange,act and assess(assert)) to use angular mocks.
describe("Controller Test", function() {
  //arrange
  var mockScope = {};
  var controller;
  //get the module to be tested and create a mock module.
  beforeEach(angular.mock.module('karmatestApp'));
  //resolving dependencies to provide access to the services required for the test.
  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    //creating a mock scope which is an instance of the rootScope
    mockScope = $rootScope.$new();
    //creating a mock controller and passing the new mock scope to our controller
    controller = $controller('defaultCtrl', {
      $scope: mockScope
    });
  }));
  // act and assess
  it("Creates variable", function() {
    expect(mockScope.counter).toEqual(0);
  });
  it("Increments counter", function() {
    mockScope.incrementCounter();
    expect(mockScope.counter).toEqual(1);
  });
});

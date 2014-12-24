describe('app controllers', function() {

  describe('recipeController', function () {
    var scope, ctrl, $httpBackend;
    var food = 'rice';

    beforeEach(module('recipeApp'));

    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
      http = _$httpBackend_;
      scope = $rootScope.$new();
      ctrl = $controller('recipeController', {$scope: scope});

      http.expectGET('http://api.bigoven.com/recipes?title_kw=' + food + '&pg=1&rpp=20&api_key=dvx0hom7nq400HGdFUJ164n6U7H9eA2V').respond({
        ResultCount: 50,
        Results: 20,
        SpellSuggest: null
      });
    }));

    it('should return an object with three properties', function () {
      expect(scope.Results).toBeUndefined();
      scope.searchRecipe();
      http.flush();

      expect(scope.Results).toEqual({
        ResultCount: 50,
        Results: 20,
        SpellSuggest: null
      });

    })
  });
  // beforeEach(module('recipeApp')); 
  // describe('recipeControllerTitle', function() {
  //   it('should check if Title exists', inject(function($controller) {


  //     var scope = {},
  //       controller = $controller('recipeController', {$scope:scope});
  //     expect(scope.Title).toBeDefined();
  //   }));

  //   it('should check if Title is a string', inject(function($controller) {

  //     var scope = {},
  //       controller = $controller('recipeController', {$scope:scope});
  //     expect(typeof scope.Title).toEqual('string');
  //   }));

  });

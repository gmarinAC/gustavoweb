(function(){
  'use strict';

  angular
      .module('app')
      .controller('skillController', controller)

  controller.$inject = ['$location','$scope'];

  function controller($location,wbContactame,$scope) {
      /* jshint validthis:true */
      var vm = this;

      activate();

      function activate() { }
  }
})();
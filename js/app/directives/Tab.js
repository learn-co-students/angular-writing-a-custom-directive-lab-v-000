function tab() {
  return {
    restrict: 'E', // retrict to element, which means this directive 'tab' will be bound to <tab></tab> in index.html
    scope: {
      label: '@' //scope is bound to string value of DOM attribute label (label = "Tab 1")
    },
    require: '^tabs', //use require to inherit methods from the parent Directive, tabs, $ctrl in the link is
                      //the parent tabs controller
    transclude: true, //to insert trascluded DOM element to line 12 <div ng-trasclude></div>
    template: `
      <div class="tabs__content" ng-if="tab.selected">
        <div ng-transclude></div>
      </div>
    `, // ng-transclude calls Tab # contents! DOM text and insert that into the div

    // Directives that want to modify the DOM typically use the link option to register DOM listeners as well as update the DOM
    link: function ($scope, $element, $attrs, $ctrl) {
      $scope.tab = {
        label: $scope.label,
        selected: false
      };
      // $scope.tab = {label: "Tab 1", selected: false}
      $ctrl.addTab($scope.tab);
    }
  };
}

angular
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);

// function Tab() {
//   return {
//     restrict: 'E', //restrict to use as element
//     scope: {
//       label: '@' //in each tab directive, look for 'label' attr and one-way bind to string literal
//     },
//     require: '^tabs', //require tabs directive, gain access to its controller
//     transclude: true, //indicate will have insertion at ng-transclude
//     template:
//     `
//       <div class="tabs__content" ng-if="tab.selected">
//         <div ng-transclude></div>
//       </div>
//     `,
//     link: function($scope, $element, $attrs, $ctrl) {
//       $scope.tab = { //in scope of each tab, set properties
//         label: $scope.label, //set label equal to value of bound label attr
//         selected: false //set initial value of selected to false
//       };
//       $ctrl.addTab($scope.tab); //for each tab directive, call addTab method from tabs controller
//     }
//   };
// }

function Tab() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    require: '^tabs',
    transclude: true,
    template: [
           '<div class="tabs__content" ng-if="tab.selected">',
                 '<div ng-transclude></div>',
             '</div>'
     ].join(''),
    link: function($scope, $element, $attrs, $ctrl) {
      $scope.tab = {
        label: $scope.label,
        selected: false
      };
      $ctrl.addTab($scope.tab)
    }
  }
}

angular
  .module('app')
  .directive('tab', Tab);
function Tab(){
  return {
    scope: { label: '@' },
    restrict: 'E',
    transclude: true,
    require: '^tabs',
    link: function(scope, elem, attrs, ctrl){
      scope.tab = {
        label: scope.label,
        selected: false
      }
      ctrl.addTab(scope.tab);
    },
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join('')
  }
}

angular
  .module('app')
  .directive('tab', Tab);

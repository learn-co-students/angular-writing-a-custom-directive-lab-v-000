function Tab(){
  return {
    transclude: true,
    restrict: 'E',
    require: '^tabs',
    scope: {
      label: '@'
    },
    template: ['<div class="tabs__content" ng-if="tab.selected">',
      '<div ng-transclude></div>',
      '</div>'].join(''),
    link: function(scope, elem, attr, ctrl){
      scope.tab = {
        label: scope.label,
        selected: false
      };
      ctrl.addTab(scope.tab);
    }
  }
}

angular
  .module('app', [])
  .directive('tab', Tab)
  .component('tabs', Tabs);
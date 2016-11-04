function tab(){
  return {
    require: '^tabs',
    template: [
      '<div ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    transclude: true,
    scope: {
      label: '@'
    },
    link: function(scope, elem, attrs, ctrl){
      scope.tab = {
        label: scope.label,
        selected: false
      };
      ctrl.addTab(scope.tab);
    }
  }
}

angular
  .module('app')
  .directive('tab', tab)
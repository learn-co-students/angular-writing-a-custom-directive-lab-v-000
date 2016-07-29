function Tab() {
  return {
    require: '^tabs',
    scope: {label: '@'},
    transclude: true,
    templateUrl: 'js/app/views/tab.html',

    controller: function(){

    },
    link: function(scope, element, attrs, ctrl){
      scope.tab ={
        label: scope.label,
        selected: false
      }
      ctrl.addTab(scope.tab)
    }
  }
}
angular
  .module('app')
  .directive('tab', Tab)

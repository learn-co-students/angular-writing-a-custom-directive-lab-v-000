function Tab() {
  return {
    templateUrl: "js/app/templates/tabTemplate.html",
    require: "^tabs",
    scope: {
        label: '@'
      },
    link: function(scope, ele, attrs, ctrl){
      scope.tab = {label: scope.label, selected: false}
      ctrl.addTab(scope.tab)
    },
    transclude: true
  }
}

angular
  .module("app")
  .directive("tab", Tab)

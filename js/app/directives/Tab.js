var Tab = {
  transclude: true,
  require: '^tabs',
  bindings: { label: '@'},
  template: [
    '<div class="tabs__content ng-if="tab.selected">',
      '<div ng-transclude></div>',
    '</div>'
  ].join(''),
  controller: function($scope){
    debugger;
    $scope.tab = {
      label: $scope.label,
      selected: false
    }
    this.addTab($scope.tab)
    // this.label = label
  },
  controllerAs: 'tab'
}

angular
  .module('app')
  .component('tab', Tab);
var Tab = {
  // return {
    // restrict: 'E',
    transclude: true, 
    require: {tabsCtrl: '^tabs'},
    bindings: {
      label: '@'
    },
    controller: function(){
      debugger;
        this.tab={
          label: this.label, 
          selected: false
        }
      debugger;
        this.tabsCtrl.addTab(this.tab)

    },
    template: `
        <div class="tabs__content" ng-if="tab.selected">
          <div ng-transclude></div>
        </div>`,
    // link: function($scope, $element, $attrs, $ctrl){
    //   $scope.tab={
    //     label: $scope.label,
    //     selected: false
    //   }
    //   $ctrl.addTab($scope.tab)
    // }

  // }

}


angular 
    .module('app')
    .component('tab', Tab)
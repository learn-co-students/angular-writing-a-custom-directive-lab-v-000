var tab = {
    bindings: {
      label: '@'
    },
    transclude: true,
    require: {
      tabs: '^^'
    },
    template:
    `
      <div>
        <div class="tabs__content" ng-transclude ng-if="$ctrl.tab.selected">
        </div>
      </div>
    `,
    controller: function() {
      this.$onInit = function() {
        this.tab = {
          label: this.label,
          selected: false
        };
        this.tabs.addTab(this.tab)
      };
    }
    // link: function($scope, $element, $attrs, $ctrl) {
    //   $scope.tab = {
    //     label: $scope.label,
    //     selected: false
    //   };
    //   $ctrl.addTab($scope.tab)
    // }
}

angular
  .module('app')
  .component('tab', tab);
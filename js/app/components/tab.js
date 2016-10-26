var tab = {
  bindings: {
    label: '@'
  },
  require: {
    tabs: '^^tabs'
  },
  transclude: true,
  template: `
    <div class="tabs__content" ng-if="$ctrl.tab.selected">
      <div ng-transclude></div>
    </div>
  `,
  controller: function () {
    this.$onInit = function () {
      this.tab = {
        label: this.label,
        selected: false
      };
      this.tabs.addTab(this.tab);
    };
  }
}

angular
  .module('app')
  .component('tab', tab);
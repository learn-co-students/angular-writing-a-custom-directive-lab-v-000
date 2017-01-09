var tab = {
    bindings: {
    label: '@'
  },
  require: {
  	parent: '^^tabs'
  },
  transclude: true,
  template: `
    <div class="tabs__content" ng-if="$ctrl.tab.selected">
      <div ng-transclude></div>
    </div>
  `,
  controller: function () {
    // this.$onInit = function () {
    	this.tab = {
        label: this.label,
        selected: false
      };
      console.log(this.tabs);
      this.parent.addTab(this.tab);
    // };
  }
};

angular
  .module('app', [])
  .component('tab', tab)
  .directive('tabs', tabs);

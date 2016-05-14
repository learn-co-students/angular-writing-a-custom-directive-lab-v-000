var Tab = { 
    transclude: true,
    require: {
      tabsCtrl: '^tabs'
    },    
    bindings: {
      label: '@'
    },
    controller: function() {
      this.$onInit = function () {
        this.tabsCtrl.addTab(this);
      };
    },
    template: [
      '<div class="tabs__contents" ng-show="$ctrl.selected" ng-transclude>',
      '</div>'
    ].join('')    
};

angular
  .module('app', [])
  .component('tabs', Tabs)
  .component('tab', Tab);
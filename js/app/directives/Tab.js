var tab = {
  bindings: {
   label: '@'
  },
  require: {
    tabsCtrl: '^tabs'
  },
  transclude: true,
  templateUrl:'js/app/directives/my-tab.html',
  controller: function() {
    this.$onInit = function () {
      this.tabsCtrl.addTab(this);
    };

  }
}

angular
  .module('app')
  .component('tab', tab);

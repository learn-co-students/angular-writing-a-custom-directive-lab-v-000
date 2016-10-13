var Tab = {
  require: {tabsCtrl: '^tabs'},
  transclude: true,
  controller: function(){

    this.$onInit = function(){
      this.tabsCtrl.addTab(this);
    }



  },
  controllerAs: 'tab',
  bindings: {
    label: '@'
  },
  template:
    '<div ng-transclude ng-show="tab.active"></div>'
}

angular
  .module('app')
  .component('tab', Tab);

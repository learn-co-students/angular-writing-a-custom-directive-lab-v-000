var Tab = {
  require: {tabsCtrl: '^tabs'},
  transclude: true,
  controller: function(){
    // this.$onInit = function () {
        // this.tabsCtrl.addTab(this);
      // };
    console.log(this);

    this.parent = function() {
      console.log(this.tabsCtrl);
    }

  },
  controllerAs: 'tab',
  bindings: {
    label: '@'
  },
  template:
        '<li class="tabs__list">'+
        '<a href="#">'           +
          '{{ tab.label }}'      +
        '</a>'                   +
        '</li>'
}

angular
  .module('app')
  .component('tab', Tab);

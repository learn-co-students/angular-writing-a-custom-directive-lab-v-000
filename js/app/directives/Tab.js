angular 
  .module('app')
  .component('tab', {
    
    require: {
      tabsCtrl: '^tabs' 
    },
    transclude: true,
    bindings: {
      title: '@'
    },
    controller: function(){
      this.$onInit = function() {
        this.tabsCtrl.addTab(this);
      };
    },
    template: [
      '<div class="tab" ng-show="$ctrl.selected" ng-transclude>',
      '</div>'
    ].join('')
  });
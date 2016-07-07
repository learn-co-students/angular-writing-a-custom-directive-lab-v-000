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
        console.log(this);   
      };
    },
    template: [
      '<div class="tab" ng-transclude>',
      '</div>'
    ].join('')
  });
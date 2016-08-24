var Tab = {

    require: {
      tabsCtrl: '^tabs'
    },
    transclude: true,
    bindings: {
      label: '@'
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
  };

  angular
    .module('app')
    .component('tab', Tab)
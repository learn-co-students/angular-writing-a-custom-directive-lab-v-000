var Tab =  {
    template: [
            '<div class="tabs__content" ng-if="tab.selected">',
              '<div ng-transclude></div>',
            '</div>'
    ].join(''),
    transclude: true,
    require: {
      tabsCtrl: '^tabs'
    },
    bindings: {
      title: '@'
    },
    controller: function () {
        this.$onInit = function() {
          this.tabsCtrl.addTab(this);
        };
    },
};

angular
    .module('app')
    .component('tab', Tab);

function Tabs() {
  return {
    restrict: 'E',
    scope: {},
    controllerAs: 'tabsCtrl',
    transclude: true,
    controller: function() {
      this.tabs = [];

      this.addTab = function(tab) {
        this.tabs.push(tab);
      };

      this.activeTab = function(tab) {
        for (var i = 0; i < this.tabs.length; i++) {
					this.tabs[i].selected = false;
				}
				this.tabs[tab].selected = true;
      };
    },
    link: function(scope, elem, attrs, ctrl) {
      ctrl.activeTab(0); //sets the initial active tab
    },
    template: [
      '<div class="tabs">',
        '<div class="tabs__list">',
          '<li ng-repeat="tab in tabsCtrl.tabs">',
            '<a href="#" ng-bind="tab.label" ng-click="tabsCtrl.activeTab($index)">', '</a>', //could use {{tab.label}} vs. ng-bind
          '</li>',
        '</div>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app')
  .directive('tabs', Tabs)

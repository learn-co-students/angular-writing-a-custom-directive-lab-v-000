function Tabs () {
  return {
    restrict: 'E',
    scope: {},
    controller: function () {
      this.tabs = [];
      this.addTab = function addTab (tab) {
        this.tabs.push(tab);
      };
      this.selectTab = function selectTab (tabIndex) {
        angular.forEach(this.tabs, function(tab, index){
          tab.active = false;
        });
        this.tabs[tabIndex].active = true;
      };
    },
    controllerAs: 'tabs',
    transclude: true,
    template: [
      '<div class="tabs_container">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs">',
            '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index)"></a>',
          '</li>',
        '</ul>',
        '<div class="tabs-content" ng-transclude>',
        '</div>',
      '</div>'
    ].join(''),
    link: function (scope, element, attrs, ctrl) {
      ctrl.selectTab(attrs.active || 0);
    }
  }
}


angular
  .module('app')
  .directive('tabs', Tabs);
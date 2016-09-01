function Tabs() {
  return {
    restrict: 'E',
    transclude:true,
    scope: {},
    controller: function () {
      this.tabs = [],
      this.addTabs = function (tab) {
        this.tabs.push(tab);
      };
      this.selectTab = function (index) {
        this.tabs.forEach(function (tab) {
          tab.selected = false;
        });
        this.tabs[index].selected = true;
      };
    },
    link: function ($scope, $element, $attrs, $ctrl) {
			$ctrl.selectTab($attrs.active || 0);
		},
    controllerAs: 'tabs',
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs">',
          '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>',
          '</li>',
        '</ul>',
      '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}
angular
  .module('app')
  .directive('tabs', Tabs)

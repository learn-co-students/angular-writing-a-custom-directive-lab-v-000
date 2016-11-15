function tabs() {
	return {
		restrict: 'E',
		scope: {},
		transclude: true,
		controller: function() {
			this.tabs = [];

			this.addTab = function addTab(tab) {
				this.tabs.push(tab);
			};

			this.selectTab = function selectTab(index) {
				this.tabs.forEach(function (tab, i) {
					if (index === i) {
						tab.selected = true;
					} else {
						tab.selected = false;
					};
				});
			};
		},
		controllerAs: 'tabs',
		template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs">',
            '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>',
          '</li>',
        '</ul>',
        '<div class="tabs__content" ng-click="selectTab($index)" ng-transclude></div>',
      '</div>'
    ].join(''),
    link: function($scope, $element, $attrs, $ctrl) {
      $ctrl.selectTab($attrs.active || 0);
    }
	}
}

angular
	.module('app', [])
	.directive('tabs', tabs);
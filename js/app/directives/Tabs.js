function Tabs() {
	return {
		scope: {},
		restrict: 'E',
		transclude: true,
		controller: function () {
			var self = this;
			self.tabs = [],

			self.addTab = function addTab(tab) {
				self.tabs.push(tab);

				if (self.tabs.length === 1) {
					tab.selected = true
				}
			}

			self.selectTab = function selectTab(tab) {
				self.tabs.forEach(function(tab) {
					tab.selected = false;
				});
				tab.selected = true;
			}
		},
		controllerAs: 'tabs',
		template: [
			"<div class='tabs'>",
				"<ul class='tabs__list'>",
					"<li ng-repeat='tab in tabs.tabs'>",
						"<a ng-click='tabs.selectTab(tab)'>{{tab.label}}</a>",
					"</li>",
				"</ul>",
				"<div class='tabs__content' ng-transclude></div>",
			"</div>",
		].join(''),
	};

}

angular
	.module('app')
	.directive('tabs', Tabs)
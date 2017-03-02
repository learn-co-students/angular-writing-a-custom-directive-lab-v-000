function Tabs() {
	return {
		restrict: 'E',
		transclude: true,
		template: [
			'<div class="tabs">',
				'<ul class="tabs__list">',
					'<li ng-repeat="tab in tabs.tabsList">',
						'<a href="">{{ tab.tab_label }}</a>',
					'</li>',	
				'</ul>',
				'<div class="tabs__content" ng-transclude></div>', // it will wrap what's inside of <tabs>
			'</div>'
		].join(''),
		controller: function(){
			this.tabsList = [];
			this.active = '';

			this.addTab = function(tab){
				this.tabsList.push(tab);
			}
		},
		controllerAs: 'tabs',
		link: function(scope, element, attr){

		}
	}
}

angular
	.module('app')
	.directive('tabs', Tabs);
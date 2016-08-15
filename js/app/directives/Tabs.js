function Tabs(){
	return {
		restrict: 'E',
		transclude: true,
		scope: {},
		template: [
			'<div class="tabs">',
				'<ul class="tabs__list">',
					'<li ng-repeat="tab in tabby.tabs">',
						'<a href="" ng-bind="tab.label" ng-click="tabby.selectTab($index);"></a>',
					'</li>',
				'</ul>',
				'<div class="tabs__content" ng-transclude></div>',
			'</div>'
		].join(''),
		controller: function(){
			var tabs = this.tabs = [];

			this.selectTab = function selectTab(index){
				tabs.forEach(function(t){
					t.selected = false;
				});
				tabs[index].selected = true;
			}

			this.addTab = function addTab(tab){
				tabs.push(tab);
			};
		},
		controllerAs: 'tabby',
		link: function(scope, elem, attrs, ctrl){
			ctrl.selectTab(attrs.active || 0);
		}
	};
}

angular
			.module('app')
			.directive('tabs', Tabs);
var Tabs = {
	template: [
		'<div class="tabs">',
			'<ul class="tabs__list">',
				'<li ng-repeat="tab in $ctrl.tabs">',
					'<a href="" ng-bind="tab.label" ng-click="$ctrl.selectTab(tab);"></a>',
				'</li>',
			'</ul>',
			'<div class="tabs__content" ng-transclude></div>',
		'</div>'
	].join(''),
	transclude: true,
	controller: function(){

		var tabs = this.tabs = [];

		this.selectTab = function(tab){
			tabs.forEach(function(t){
				t.selected = false;
			});

			tab.selected = true;
		};

		this.addTab = function(tab){
			if(tabs.length === 0){
				this.selectTab(tab);
			}
			tabs.push(tab);
		};	
	}
};

angular
			.module('app')
			.component('tabs', Tabs);
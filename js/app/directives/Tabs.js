function Tabs() {
	return {
		restrict: 'E',
		transclude: true,
		template: [
			'<div class="tabs">',
				'<ul class="tabs__list">',
					'<li ng-repeat="tab in tabs.tabsList">',
						'<a href="" ng-click="tabs.setActive($index)">{{ tab.tab_label }}</a>',
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
			};

			this.setActive = function(index) {
				for (var i = 0; i < this.tabsList.length; i++) {
					this.tabsList[i].selected = false;
				};
				// console.log(this.tabsList[index]);
				this.tabsList[index].selected = true; // sets the ng-clicked tab to selected
			}
		},
		controllerAs: 'tabs',
		link: function(scope, element, attr, ctrl){ // we don't use require but already have defined a controller ???
			ctrl.setActive(ctrl.active || 0); // by default when DOM is loaded we put the first tab as active
		}
	}
}

angular
	.module('app')
	.directive('tabs', Tabs);
angular
	.module('app')
	.directive('tabs', function () {
  	return {
  		scope: {},
  		transclude: true,
  		controller: function () {
  			this.tabs = [];
  			this.addTab = function addTab(tab) {
  				this.tabs.push(tab);
  			};
  			this.selectTab = function selectTab(index) {
          for (let value of this.tabs){
            value.selected = false
          }
          this.tabs[index].selected = true;
  			};
  		},
  		controllerAs: 'tabs',
  		link: function ($scope, $element, $attrs, $ctrl) {
  			$ctrl.selectTab($attrs.active || 0);
  		},
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
);

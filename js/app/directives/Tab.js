function Tab() {
	return {
		restrict: 'E',
		scope: {
			label: '@'
		},
		require: '^tabs',
		transclude: true,
		template: [
    	    '<div class="tabs__content" ng-if="tab.selected">',
      	        '<div ng-transclude></div>',
            '</div>'
		].join(''),
		link: function ($scope, $element, $attrs, $ctrl) {
			$scope.tab = {
				label: $scope.label,
				selected: false
			};
			$ctrl.addTab($scope.tab);
      $ctrl.selectTab(0);
		}
	}
}

angular
	.module('app')
	.directive('tab', Tab);

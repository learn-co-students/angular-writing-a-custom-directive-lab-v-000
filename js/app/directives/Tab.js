//var Tab = {
//  require: {tabs: '^tabsCtrl'},
//  transclude: true,
//  bindings: {
//    label: '='
//  },
//  controller: function(scope, elem, attrs, ctrl) {
//    //this.tab = {}
//  },
//  template: [
//    '<div class="tabs__content" ng-if="tab.selected">',
//        '<div ng-transclude></div>',
//    '</div>'
//  ].join('')
//}
//
//angular
//  .module('app')
//  .component('tab', Tab)



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
      // $ctrl = { tabs: [], addTab: func(){} }
			$scope.tab = {
				label: $scope.label,
				selected: false
			};
			$ctrl.addTab($scope.tab);
		}
	}
}

angular
	.module('app')
	.directive('tab', Tab);

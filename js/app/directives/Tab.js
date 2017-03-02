function Tab() {
	return {
		scope: {
			label: '@'
		},
		transclude: true,
		template: [
			'<div class="tabs__content">',
				'<div ng-transclude></div>', // it will take whats inside of <tab></tab>
			'<div>'
		].join(''),
		require: '^tabs', // give us access to the controller of the required (^parent) directive
		link: function(scope, element, attrs, ctrl){
			scope.tab = {
				tab_label: scope.label,
				selected: false
			}
			ctrl.addTab(scope.tab);
		}
	}
}

angular
	.module('app')
	.directive('tab', Tab);
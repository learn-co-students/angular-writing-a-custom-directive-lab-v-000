function Tab() {
	return {
		scope: {
			label: '@' // takes the info from the <tab> element and pushes it to the directive scope
		},
		transclude: true,
		template: [
			'<div class="tabs__content" ng-if="tab.selected">',
				'<div ng-transclude></div>', // it will take whats inside of <tab></tab>
			'<div>'
		].join(''),
		require: '^tabs', // give us access to the controller of the required (^parent) directive
		link: function(scope, element, attrs, ctrl){ // ctrl is given because we have 'require' that gets us the controller from the parent
			scope.tab = {		// we create a new object/variable in our scope
				tab_label: scope.label,   // we take the scope defined by our <tab> element
				selected: false
			}
			ctrl.addTab(scope.tab);  // we push the object to the parent's directive controller method
		}
	}
}

angular
	.module('app')
	.directive('tab', Tab);
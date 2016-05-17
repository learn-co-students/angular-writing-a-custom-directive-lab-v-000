function Tab() {
	return {
		scope: {
			label: "@"
		},
		restrict: 'E',
		transclude: true,
		template: [
			"<div class='tabs' ng-if='selected' >",
				"<div class='tabs__content' ng-transclude></div>",
			"</div>"
		].join(''),
		require: '^tabs',
		link: function (scope, elem, attrs, ctrl) {
			ctrl.addTab(scope);
		}
	};

}

angular
	.module('app')
	.directive('tab', Tab)
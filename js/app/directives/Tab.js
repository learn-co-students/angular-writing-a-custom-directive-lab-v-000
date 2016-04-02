function Tab() {

    return {
      require: '^tabs',
      transclude: true,
      scope: {label: '@'},
      template: [
          '<div class="tabs__content" ng-if="tab.selected">',
            '<div ng-transclude></div>',
          '</div>'
        ].join(''),
      link: function(scope, element, attrs, ctrl){
        //debugger;
        scope.tab = {
          label: scope.label,
          selected: false
        }

        ctrl.addTab(scope.tab);
      },
      restrict: 'E'

    };
}

angular
	.module('app')
	.directive('tab', Tab);

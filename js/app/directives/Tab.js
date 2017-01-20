var Tab = {
  bindings: {
    label: '@'
  },
  transclude: true,
  require: { parent: '^tabs'},
  template: [
    '<div class="tabs__content" ng-if="tab.selected">',
      '<div ng-transclude></div>',
    '</div>'
  ].join('')
}

angular
  .module('app')
  .component('tab', Tab)
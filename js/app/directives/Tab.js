var Tab =  {
  bindings: {
    label: '='
  },
  require: { parent: '^tabs'},
  transclude: true,
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),


  };

angular
  .module('app')
  .component('tab', Tab);
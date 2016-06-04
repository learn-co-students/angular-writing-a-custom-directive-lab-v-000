function Tabs() {
  return {
    //assigns this component as a DOM element.
    restrict: 'E',

    //binds data in the DOM to the directive.
    scope: {},

    //allows data in the DOM to be injected into the directive controller.
    transclude: true,

    //the directive logic. is fired when the directive is called.
    controller: function() {
      this.tabs = [];
      this.addTab = function(tab) {
        this.tabs.push(tab);
      };
      this.selectTab = function(index) {
        for (var i = 0; i < this.tabs.length; i++) {
          this.tabs[i].selected = false;
        }
        this.tabs[index].selected = true;
      }
    },

    //assigns a name to the directive controller
    controllerAs: 'tabs',

    //
    link: function(scope, element, attrs, ctrl) {
      ctrl.selectTab(attrs.active || 0);
    },
    //what is injected into the DOM on behalf of the directive. Requires a string.
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

//tells angular that this is a directive and the associated module.
angular
  .module('app')
  .directive('tabs', Tabs);

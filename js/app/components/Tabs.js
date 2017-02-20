var Tabs = {
  bindings: {},
  controller: function() {
    this.tabs = [];
    this.addTab = function(tab) {
      this.tabs.push(tab);
    };
    this.selectTab = function selectTab(index) {
      var t = this.tabs.length;
      for (var i = 0; i < t; i++) {
        this.tabs[i].selected = false;
      }
      this.tabs[index].selected = true;
    };
  },
  controllerAs: 'tabs',
  transclude: true,
  template: [
    '<div class="tabs">',
      '<ul class="tabs__list">',
        '<li ng-repeat="tab in tabs.tabs">',
          '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index)"></a>',
        '</li>',
      '</ul>',
      '<div class="tabs__content" ng-transclude></div>',
    '</div>'
  ].join('')
}

angular
  .module('app')
  .component('tabs', Tabs)

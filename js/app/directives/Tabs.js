var Tabs = {
  restrict: 'E',
  transclude: true,
  controllerAs: 'tabs',
  controller: function () {
    this.tabs = [];

    this.addTab = function (tab) {
      this.tabs.push(tab);

      if (this.tabs.length === 1) {
        this.tabs[0].selected = true;
      }
    };

    this.selectTab = function (index) {
      for (var i = 0; i < this.tabs.length; i++) {
        this.tabs[i].selected = false;

      this.tabs[index].selected = true;
      }
    };
  },
  template: [
    '<div class="tabs">',
      '<ul class="tabs__list">',
        '<li ng-repeat="tab in tabs.tabs">',
          '<a href="#" ng-bind="tab.label" ng-click="tabs.selectTab($index)"></a>',
        '</li>',
      '</ul>',
      '<div class="tabs__content" ng-transclude></div>',
    '</div>'
  ].join('')
};

angular
  .module('app', [])
  .component('tabs', Tabs);

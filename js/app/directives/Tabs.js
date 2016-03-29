var Tabs = {
  binding: {},
  transclude: true,
  controller: function() {
    this.tabs = [];
    this.addTab = function(tab) {
      this.tabs.push(tab)
      this.tabs[0].selected = true
    };
    this.selectTab = function(index) {
      this.tabs.forEach(function(elem){
        elem.selected = false;
      });
      this.tabs[index].selected = true;
    }
  },
  controllerAs: 'tabs',
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

angular
  .module('app')
  .component('tabs', Tabs);
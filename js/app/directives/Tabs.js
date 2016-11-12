function tabs() {
  return {
    transclude: true,
    controllerAs: 'tabs',
    controller: function() {
      this.tabs = [];

      this.addTab = function (tab) {
        if (this.tabs.length === 0) {
          this.select(tab);
        }
        this.tabs.push(tab);
      };
      this.select = function(tab) {
        for(var i = 0; i < this.tabs.length; i++) {
          this.tabs[i].selected = false;
        }
        tab.selected = true;
      };
    },
    template: [
      '<div class="tabs">',
      '<ul class="tabs__list">',
      '<li ng-repeat="tab in tabs.tabs"><a href="" ng-click="tabs.select(tab)">{{ tab.label }}</a></li>',
      '</ul>',
      '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
.module('app')
.directive('tabs', tabs);

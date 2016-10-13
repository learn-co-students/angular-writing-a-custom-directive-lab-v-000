var Tabs = {
  transclude: true,
  controller: function(){
    this.tabs = [];

    this.addTab = function(tab){
      this.tabs.push(tab);
      this.tabs[0].active = true;
    }

    this.select = function(tab){
      this.tabs.forEach(function(tab){
        tab.active = false;
      });
      tab.active = true;
    }
  },
  controllerAs: 'tabs',
  template:
    '<div class="tabs" >' +
      '<div class="tabs__list">' +
        '<ul>'       +
          '<li class="tabs__list" ng-repeat="tab in tabs.tabs">' +
            '<a href="#" ng-click="tabs.select(tab)">'           +
              '{{ tab.label }}'      +
            '</a>'                   +
          '</li>' +
        '</ul>' +
      '</div>' +
    '<div class="tabs__content" ng-transclude></div>'
}

angular
  .module('app')
  .component('tabs', Tabs);

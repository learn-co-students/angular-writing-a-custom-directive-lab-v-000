var Tabs = {
  transclude: true,
  controller: function() {
    var tabs = this.tabs = [];

    this.selectTab = function (tab) {
      angular.forEach(tabs, function(tab){
        tab.selected = false;
      });

      tab.selected = true;
    };

    this.addTab = function (tab) {
      if (tabs.length === 0) {
        this.selectTab(tab)
      };

      tabs.push(tab);
    };    
  },
  template: [
   '<div class="tabs">',
     '<ul class="tabs__list">',
       '<li ng-repeat="tab in $ctrl.tabs" ng-class="{active:tab.selected}">',
         '<a href="" ng-click="$ctrl.selectTab(tab)">{{tab.label}}</a>',
       '</li>',
     '</ul>',
     '<div class="tabs__content" ng-transclude>',
   '</div>'
  ].join('')
};

angular
  .module('app')
  .component('tabs', Tabs);
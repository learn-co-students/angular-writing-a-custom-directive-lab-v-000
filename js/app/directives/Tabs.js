'use strict';
angular
  .module('app')
  .component('tabs', {
    transclude: true,
    controller: function() {
      var tabs = this.tabs = [];
      this.select = function(tab) {
        angular.forEach(tabs, function(tab){
          tab.selected = false;
        });
        tab.selected = true;
      };
      this.addTab = function(tab) {
        if (tabs.length === 0) {
          this.select(tab);
        }
        tabs.push(tab);
      };
    },
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in $ctrl.tabs" ng-class="{active:tab.selected}">', 
            '<a href="#" ng-click="$ctrl.select(tab)">{{tab.title}}</a>',
          '</li>',
        '</ul>',
        '<div class="tabs__content"></div>',
      '</div>'
    ].join('')
  });
  
document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document, ['app']);
});
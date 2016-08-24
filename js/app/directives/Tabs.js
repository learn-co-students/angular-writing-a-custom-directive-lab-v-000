var Tabs = {
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
    templateUrl: 'js/app/directives/tabs.html'
  };

  angular
    .module('app')
    .component('tabs', Tabs)
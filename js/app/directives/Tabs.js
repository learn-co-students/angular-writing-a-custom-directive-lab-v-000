var Tabs = {
    transclude: true,
    template: [`
      <div class="tabs">
      <ul class="tabs_list">
      <li ng-repeat="tab in ctrl.tabs">{{ ctrl.label }}</li>
      </ul>
      <div ng-transclude></div>
      </div>
      `].join(''),
    controller: function() {
        this.tabs = [];

        this.addTab = function(tab) {
            this.tabs.push(tab);
        };

        this.select = function(tab) {
          angular.forEach(this.tabs, function(tab){
            tab.selected = false;
          });
          tab.selected = true;
        };

    },controllerAs: 'ctrl'
};

angular
    .module('app')
    .component('tabs', Tabs);

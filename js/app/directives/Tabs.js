var tabs = {
    transclude: true,
    controller: function() {
      this.$onInit = function() {
        this.tabs = [];
      };
      this.addTab = function(tab) {
        this.tabs.push(tab);
      };
      this.selectTab = function(index) {
        for (var i = 0; i < this.tabs.length; i++) {
           this.tabs[i].selected = false; 
        }
        this.tabs[index].selected = true;
      };
      this.$postLink = function() {
        this.selectTab(this.selected || 0)
      }
    },
    controllerAs: 'tabs',
    template:
      `
      <div class="tabs">
        <ul class="tabs__list">
          <li ng-repeat="tab in tabs.tabs">
          <a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>
          </li>
        </ul>
        <div class="tabs__content" ng-transclude></div>
      </div>
      ` 
}
 
angular
  .module('app')
  .component('tabs', tabs);
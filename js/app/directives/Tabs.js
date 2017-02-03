var a;
function Tabs() {
  return {
    transclude: true,
    scope: {},
    template: [
      '<ul class="tabs__list">',
            '<li ng-repeat="tab in tabs.tabs">',
              '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>',
            '</li>',
        '</ul>',
      '<div class="tabs__content" ng-transclude></div>',
    ].join(''),
    controller: function(){
      this.tabs = [];
      this.addTab = function addTab(tab){
        this.tabs.push(tab);
      };
      this.selectTab = function selectTab(tab){
        for(var i=0; i<this.tabs.length; i++){
          this.tabs[i].selected = false;
        }
        this.tabs[tab].selected = true;
      };
    },
    controllerAs: 'tabs',
    link: function(scope, elem, attr, ctrl){
      ctrl.selectTab(attr.active || 0);
    }
  }
}

angular
  .module('app')
  .directive('tabs', Tabs)

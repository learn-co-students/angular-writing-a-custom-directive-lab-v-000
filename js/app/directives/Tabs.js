function Tabs(){
  return {
    scope: {},
    transclude: true,
    template:[
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs">',
            '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index)"></a>',
          '</li>',
        '</ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join(''),
    controllerAs: 'tabs',
    link: function(scope, elem, attrs, $ctrl){
      $ctrl.selectTab(attrs.active || 0);
    },
    controller: function(){
      this.tabs = [];
      this.addTab = function(tab){
        this.tabs.push(tab);
      };
      this.selectTab = function(index){
        // debugger;
        for(i=0; i < this.tabs.length; i++){
          this.tabs[i].selected = false;
        }
        this.tabs[index].selected = true;
      };
    }
  }
}

angular
  .module('app')
  .directive('tabs', Tabs)

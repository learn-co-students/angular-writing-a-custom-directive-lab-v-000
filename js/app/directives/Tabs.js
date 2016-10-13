function Tabs(){
  return {
    scope:{},
    transclude: true,
    restrict: 'E',
    template: [
        '<div class="tabs">',
          '<ul class="tabs__list">',
                '<li ng-repeat="tab in tabs.tabs">',
                  '<a href="#" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>',
                '</li>',
            '</ul>',
          '<div class="tabs__content" ng-transclude></div>',
        '</div>'
    ].join(''),
    controller: function (){
      this.tabs = [];
      this.addTab = function (tab){
        this.tabs.push(tab);
      };
      this.selectTab = function (index){
        for (var i = 0; i < this.tabs.length; i++){
          this.tabs[i].selected = false;
        }
        this.tabs[index].selected = true;
      };
    },
    controllerAs: 'tabs',
       link: function ($scope, $element, $attrs, $ctrl){
      $ctrl.selectTab($attrs.active || 0);
    }
  }

}

angular
  .module('app',[])
  .directive('tabs', Tabs)
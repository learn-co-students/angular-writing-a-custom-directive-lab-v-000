function tabs(){
  return {
    transclude: true,
    controller: function(){
      this.tabs = [];
      this.addTab = function(new_tab){
        this.tabs.push(new_tab);
      };

      this.selectTab = function(index){
        for (var i = 0; i < this.tabs.length; i++){
          this.tabs[i].selected = false;
        }
        this.tabs[index].selected = true;
      };
    },
    controllerAs: 'ctrl', 
    template: [
      '<ul class="tabs__list">',
        '<li ng-repeat="tab in ctrl.tabs">',
          '<a href="" ng-click="ctrl.selectTab($index)" ng-bind="tab.label"></a>',
        '</li>',
      '</ul>',
      '<div ng-transclude></div>'
    ].join(''),
    scope: {},
    link: function(scope, elem, attrs, ctrl){
      ctrl.selectTab(attrs.active || 0);
    }
  }
}

angular
  .module('app')
  .directive('tabs', tabs)
var Tabs = {
  transclude: true,
  template: [
    '<div class="tabs">',
      '<ul class="tabs__list">',
        '<li ng-repeat="tab in tabs.tabs">',
          '<a href="" ng-model="tab.label" ng-click="tab.selectTab($index)"></a>',
        '</li>',
      '</ul>',
      '<div class="tabs_content" ng-trasclude></div>',
    '</div>'
  ].join(''),
  controller: function(){
    this.tabs = [];
    this.addTab = function(tab){
      this.tabs.push(tab);
    }
    this.selectTab = function(index){
      for(var i = 0; i < this.tabs.length; i++){
        this.tabs[i].selected = false;
      };
      this.tabs[index].selected = true;
    };
    // debugger;
  },
  controllerAs: 'tabs'
};

angular
  .module('app')
  .component('tabs', Tabs);
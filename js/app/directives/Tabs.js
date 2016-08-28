function Tabs() {
  return {
    scope: {},
    transclude: true,
    controller: function(){
      this.tabs = [];
      this.addTab = function(tab){
        this.tabs.push(tab);
      };
      this.selectTab = function(index){
        for(i = 0; i < this.tabs.length; i++){
          this.tabs[i].selected = false;
        }
        this.tabs[index].selected = true;
      };
    },
    controllerAs: 'ctrl',
    template: [
      "<div class='tabs'>",
        "<ul class='tabs__list'>",
          "<li ng-repeat='tab in ctrl.tabs'><a href='#' ng-click='ctrl.selectTab($index)'> {{ tab.label }} </a>",
          "</li>",
        "</ul>",
        "<div class='tabs__content' ng-transclude></div>",
      "</div>"
    ].join(''),
    link: function(scope, element, attrs, ctrl){
      ctrl.selectTab(attrs.active || 0);
    }
  }
}

angular
  .module('app')
  .directive('tabs', Tabs)

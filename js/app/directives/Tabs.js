function Tabs() {
  return{
    restrict: 'E',
    templateUrl: 'js/app/views/tabs.html',
    controller: function(){
      this.tabs = []

      this.addTab = function addTab(tab){
        this.tabs.push(tab)
     }
      this.selectTab = function selectTab(tab){
        this.tabs.forEach(function(i) {
          i.selected = false
        })
        debugger
        this.tabs[tab].selected = true
      }
    },
    scope: {},
    transclude: true,
    controllerAs: 'tabs',
    link: function(scope, element, attrs, ctrl) {
      ctrl.selectTab(attrs.active || 0)
    }
  }
}

angular
  .module('app')
  .directive('tabs', Tabs)

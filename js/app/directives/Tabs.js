function Tabs() {
  return {
    templateUrl: "js/app/templates/tabsTemplate.html",
    controller: function($scope) {
      this.tabs = [];
      this.addTab = function(tab) {
        if (this.tabs.length === 0) {
          tab.selected = true
        }
        this.tabs.push(tab);
      }
      this.selectTab = function(index) {

        for (var tab in this.tabs) {
          parseInt(tab) === index ? this.tabs[tab].selected = true : this.tabs[tab].selected = false
        }

      }
    },
    controllerAs: "tabsController",
    transclude: true,
    link: function(scope, ele, attrs, ctrl) {

    }
  }

}

angular
  .module("app")
  .directive("tabs", Tabs)

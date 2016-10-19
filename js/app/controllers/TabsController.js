function TabsController() {
  this.tabs = [
    {
      label: "Tab 1",
      contents: "Tab 1 Contents!"
    },
    {
      label: "Tab 2",
      contents: "Tab 2 Contents!"
    },
    {
      label: "Tab 3",
      contents: "Tab 3 Contents!"
    }
  ]
}

angular
  .module('app')
  .controller('tabsController', TabsController)

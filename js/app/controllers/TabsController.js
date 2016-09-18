function TabsController(){
  this.tabs = [{ 
    label: "Tab 1",
    contents: "Tab 1 contents!"
  },{
    label: "Tab 2",
    contents: "Tab 2 contents!"
  },{
    label: "Tab 3",
    contents: "Tab 3 contents!" 
  }];
}

angular
  .module('app')
  .controller('TabsController', TabsController);
var tabs = {
   transclude: true,
   controller: function() {
     var tabs = this.tabs = [];
     this.selectTab = function(tab) {
       tabs.forEach(function(tab) {
         tab.selected = false;
       });
       tab.selected = true;
     };
     this.addTab = function(tab) {
       if (tabs.length === 0) {
         this.selectTab(tab);
       }
       tabs.push(tab);
     };
   },
   templateUrl: 'js/app/directives/my-tabs.html'

}

angular
  .module('app')
  .component('tabs', tabs);

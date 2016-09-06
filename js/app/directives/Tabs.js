var Tabs = {
  //restrict: 'E' << no 'restrict', component default is element
  //scope: {} << no 'scope', component default is isolated scope
  transclude: true,
  controller: function() {
      this.tabs = []; //array to hold tabs
      this.selectTab = function(tab) {
        angular.forEach(this.tabs, function(tab) {
          tab.selected = false; //set default value of selected to 'false'
        });
        tab.selected=true; //then set actual selected tab value to 'true'
      };
      this.addTab = function(tab) {
        if(this.tabs.length === 0) {
          this.selectTab(tab);
        }
        this.tabs.push(tab); //add tab into array
      }
    },
    controllerAs: 'tabs',
    template: [
         '<div class="tabs">',
           '<ul class="tabs__list">',
                 '<li ng-repeat="tab in tabs.tabs" ng-class"{active: tab.selected}">',
                   '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab(tab);"></a>',
                '</li>',
             '</ul>',
          '<div class="tabs__content" ng-transclude></div>',
         '</div>'
     ].join('')
}

// function Tabs() {
//   return {
//     restrict: 'E',
//     scope: {},
//     transclude: true,
//     controller: function() {
//       this.tabs = []; //array to hold tabs
//       this.addTab = function (tab) {
//         this.tabs.push(tab);
//       };
//       this.selectTab = function (index) {
//         for(var i=0; i < this.tabs.length; i++) {
//           this.tabs[i].selected = false; //set default to 'false'
//         }
//         this.tabs[index].selected=true; //then set selected tab to 'true'
//       }
//     },
//     controllerAs: 'tabs',
//     link: function($scope, $elem, $attrs, $ctrl) {
//       $ctrl.selectTab($attrs.active || 0);
//     },
//     template: [
//              '<div class="tabs">',
//                '<ul class="tabs__list">',
//                      '<li ng-repeat="tab in tabs.tabs">',
//                        '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>',
//                     '</li>',
//                  '</ul>',
//               '<div class="tabs__content" ng-transclude></div>',
//              '</div>'
//      ].join('')
//   };
// }

angular
  .module('app')
  .component('tabs', Tabs);
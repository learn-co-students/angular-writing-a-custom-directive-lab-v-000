var Tabs = {
  transclude: true,
  controller: function(){
    this.tabs = [];

    this.addTab = function(tab){
      this.tabs.push(tab);
    }
  },
  controllerAs: 'tabs',
  template:
    '<div class="tabs" >' +
      '<div class="tabs__list">'   +
        '<ul ng-transclude>'       +
        '</ul>' +
      '</div>' +
    '<div class="tabs__content"></div>'
}

angular
  .module('app')
  .component('tabs', Tabs);

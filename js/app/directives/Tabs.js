var Tabs = {
  transclusion: true,
  controller: function(){
    this.tabs = [];

    this.addTab = function(){
      this.tabs.push(tab);
      debugger;
    }

  },
  controllerAs: 'tabs',
  template:
    '<div class="tabs">I am Here</div>' +
    '<div class="tabs__content">I am also here.</div>'
}

angular
  .module('app')
  .component('tabs', Tabs);

var Tabs =  {
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list"></ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join(''),
    transclude: true,
    controller: function () {
        var tabs = this.tabs = [];
        this.select.forEach(tabs, fucntion(tab) {
          tab.select = false;
        });
        this.addTab = funciton(tab) {
          if (tabs.length === 0) {
            this.select(tab);
          }
          tabs.push(tab);
        };

        this.increment = function () {
            this.count++;
        };
    },

};

angular
    .module('app')
    .component('tabs', Tabs);

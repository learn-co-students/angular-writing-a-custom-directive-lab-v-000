var Tabs = {
	transclude: true,
	templateUrl: 'js/app/views/tabs.html',
	controller: function() {
		this.tabs = [];

		this.selectTab = function(tab) {
      angular.forEach(this.tabs, function(tab) {
        tab.selected = false;
      });
      tab.selected = true;      
    }

		this.addTab = function addTab(tab) {
			if (this.tabs.length === 0) {
      	this.selectTab(tab);
      }
			this.tabs.push(tab);
		}

	},
	controllerAs: 'ctrl1'
}

angular
	.module('app')
	.component('tabs', Tabs);
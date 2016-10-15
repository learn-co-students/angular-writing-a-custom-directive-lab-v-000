var Tab = {
	bindings: {
		label: '@'
	},
	transclude: true,
	templateUrl: 'js/app/views/tab.html',
	require: {
		tabsCtrl: '^tabs'
	},
	controller: function() {
		this.$onInit = function() {
			this.tabsCtrl.addTab(this);			
		}
	},
	controllerAs: 'ctrl2'
};

angular
	.module('app')
	.component('tab', Tab);
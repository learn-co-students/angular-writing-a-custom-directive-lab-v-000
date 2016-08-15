var Tab = {
	bindings: {
		label: '@'
	},
	require: {parent: '^tabs'},
	template: [
		'<div class="tabs__content" >',
			'<div ng-transclude ng-show="tab.selected"></div>',
		'</div>'
	].join(''),
	transclude: true,
	controller: function(){
		var vm = this;

		this.$onInit = function(){
			console.log(this);
			this.parent.addTab(this);
		};
		
	}
};

angular
			.module('app')
			.component('tab', Tab);
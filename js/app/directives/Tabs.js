var Tabs = {
	bindings: {

	},
	controller: function() {

    this.tabs = [];

		this.addTab = function(tab){
			if(this.tabs.length===0){ tab.selected=true }
			this.tabs.push(tab) 
		};

    this.setTab = function(index){
			this.tabs.forEach(function(tab){
				tab.selected = false;
			});
      this.tabs[index].selected = true;
			//debugger;
    };

    this.isActive = function(index) {
      return this.tabs[index].selected;
    };
  },
	controllerAs: 'tabs',
	transclude: true,
	template: [
		'<div class="tabs">',
			'<ul class="tabs__list">',
				'<li ng-repeat="tab in tabs.tabs">',
			  	'<a label="{{tab.label}}" ng-click="tabs.setTab($index);">',
					'{{tab.label}}</a>',
      	'</li>',
			'</ul>',
    	'<div ng-transclude></div>',
		'</div>'
	].join(''),
	restrict: 'E'
}

angular
	.module('app')
	.component('tabs', Tabs);

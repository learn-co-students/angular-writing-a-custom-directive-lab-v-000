var Tabs = {
	bindings: {

	},
	controller: function() {

    this.tabs = [];
    this.currentTab = 0;

    this.currentContent = function(){
      return this.tabs[this.currentTab].content;
    };

    this.setTab = function(index){
      this.currentTab = index;
    };

    this.isActive = function(index) {
      return index===this.currentTab;
    };
  },
	controllerAs: 'tabs',
	template: [
		'<div>',
			'<div ng-repeat="tab in tabs.tabs">',
			   '<tab label="{{tab.label}}" ng-click-"tabs.setTab($index);">',
            '<label>{{tab.label}}</label>',
         '</tab>',
			'</div>',
      '{{tabs.currentContent()}}',
		'</div>'
	].join(''),
	restrict: 'E'
}

angular
	.module('app')
	.component('tabs', Tabs);

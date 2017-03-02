function MainController() {
	this.info1 = "Tab 1 contents!";
	this.info2 = "Tab 2 contents!";
}

angular
	.module('app')
	.controller('MainController', MainController);
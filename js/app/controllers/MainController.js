function MainController() {
	this.info1 = "Content 1";
	this.info2 = "Content 2";
}

angular
	.module('app')
	.controller('MainController', MainController);
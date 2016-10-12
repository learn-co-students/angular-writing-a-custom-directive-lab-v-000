var Tab = {
  require: {parent: '^tabs'},
  controller: function(){
  },
  controllerAs: 'tab',
  bindings: {
    label: '='
  },
  template:
    '<div class="tabs__list">'   +
      '<ul>'                     +
        '<li class="tabs__list">'+
        '<a>{{ tab.label }}</a>' +
        '</li>'                  +
      '</ul>'                    +
    '</div>'
}

angular
  .module('app')
  .component('tab', Tab);

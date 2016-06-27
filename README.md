# Writing a custom Directive

## Objectives

- Create a tabs Directive
- Create a tab Directive
- Inherit Directive Controller methods into child Directives
- Make tabs clickable
- Show clicked tabs content when clicked
- Ensure an initial tab's content can be displayed on initialisation

## Instructions

Let's create some awesome tabs that will look something like [this](http://jsfiddle.net/toddmotto/4comjcdm/embedded/result/).

First of all we need a parent `tabs` component. We can make this either a directive or component - it's up to you (if you want to be even more awesome, use component!).

This tabs component (or directive) should have an array of tabs in its controller, and a variable with the ID of the tab that's visible.

Let's now make a `tab` component, with a `label` property. In this component, we want to require the parent `tabs` controller and push the tab inside. We should also check to see if our tab is the one that is visible, and if it is, display it on the page.

Back in our `tabs` component, loop through the list of tabs and show the labels at the top, so we can click on them. When clicking on them, we should change the active tab that displays on the page.

Make sure to call the tabs component in `index.html`!

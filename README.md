# functions
helpful JavaScript functions

ToggledAtLeastOnce();

creates a switch that can only be toggled once.
  - pass a truthy value to activate the toggle
  - pass a falsy value to identify whether or not the switch has been toggled
 ````
foo = new ToggledAtLeastOnce();
console.log(foo()); // false
console.log(foo(1)); // false
console.log(foo()); // true
console.log(foo(1)); // true
 ````
  - pass a truthy value when creating the instance to immediately set it as toggled
````
bar = new ToggledAtLeastOnce(1);
console.log(bar()); // true
console.log(bar(1)); // true
````

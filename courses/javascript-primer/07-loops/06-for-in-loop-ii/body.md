<!--{ ids:[195], language:'JavaScript', type:'workshop', order: 5, name:'For...In Loops II', description:'Practice iterating through properties of an object' }-->

### Objectives

After this exercise, you should be able to:

- Demonstrate how to write a `for...in` loop

### Exercise

Write a function called `objectToArray`. This function should:

  - convert the object passed in to an array of strings
  - each string should be in the format of "[key] is [value]" for each key/value pair in the object
  - if an empty object is passed in, an empty array should be returned

For example:

```js
objectToArray({name: "Marcia", age: 101}) // returns ["name is Marcia", "age is 101"]
```

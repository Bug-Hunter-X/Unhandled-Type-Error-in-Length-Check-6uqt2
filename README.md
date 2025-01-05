# Unhandled Type Error in JavaScript Length Check

This repository demonstrates a common JavaScript error: attempting to access the `length` property of a value that is not an object with that property.  The code also showcases a way to improve the handling of null and other invalid inputs.

## Bug
The `foo` function in `bug.js` is designed to return the length of an object. However, it only explicitly checks for `null`. If you provide other falsy values such as `undefined`, `0`, or an empty string, the code will throw a `TypeError`. 

## Solution
The `bugSolution.js` file offers a more robust solution. It uses `typeof` to check the type of the input before accessing the `length` property, preventing TypeErrors and providing more informative error messages.
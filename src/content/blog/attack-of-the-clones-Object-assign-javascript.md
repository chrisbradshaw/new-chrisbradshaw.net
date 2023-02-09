---
title: Attack of the Clones - When to use JavaScript Object.assign()
description: limitations and alternatives
tags:
  - Javascript
ogImage: ./clone-cover.jpg
pubDatetime: 2018-08-04T15:57:52.737Z
---

[View this post on Medium](https://medium.com/@_ChrisBradshaw/attack-of-the-clones-when-to-use-javascript-object-assign-vs-spread-operator-8f821a74b2fd)

<iframe src="https://giphy.com/embed/3ohzdQhmr2YrxHT45y" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/alroker-al-roker-3ohzdQhmr2YrxHT45y">via GIPHY</a></p>

<h2>Attack of the Clones: When to use JavaScript Object.assign()</h2>

Traditionally making a clone of an object in JavaScript has not been simple, nor straightforward. You will run into the problem of erroneously picking up attributes from the object's prototype that should be left in the prototype and not copied to the new instance.

However, the ES6 updates added a new JavaScript feature Object.assign(), which simplifies the process.

<h4>In this post, I will outline the following information about Object.assign()</h4>

<ul>
  <li>When to use</li>
  <li>How to use</li>
  <li>Limitations</li>
  <li>Alternatives</li>
  <li>Object.assign() in Redux</li>
</ul>

<h4>When to use Object.assign()</h4>

<p>We have the following Object, and want to clone it:</p>

![Our Object](https://res.cloudinary.com/dgxvjwyhm/image/upload/v1533392906/object-in-javascript.png)

<h4> How to use </h4>

To clone, simply type:

```javascript
const shallowClone = Object.assign({}, obj);
```

However, PROCEED WITH CAUTION.

<iframe src="https://giphy.com/embed/3ohrylo2puV7phiwso" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nascar-kasey-kahne-hendrick-3ohrylo2puV7phiwso">via GIPHY</a></p>

This is only a "Shallow" clone. Let me demonstrate what I mean.

<h4>Limitations</h4>

<p>Let's reassign the value of "c" to the integer 3004, on our new shallowClone object. Should be simple enough:</p>

```javascript
shallowClone.a.b.c = 3004;
```

Now, lets console.log the new value of c on shallowObject, and the value of c on our original object, obj.

```javascript
console.log("shallowClone", shallowClone.a.b.c);
console.log("Original Object", obj.a.b.c);

// shallowClone 3004
// Original Object 3004
```

<p>Wait..</p>

<iframe src="https://giphy.com/embed/l2JhEYWETxE0h4uxq" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pitchonfox-fox-l2JhEYWETxE0h4uxq">via GIPHY</a></p>

<p>Changing the value of c on shallowObject, also modified the value of c on our original object! This is what is meant by a shallow copy. Rather than making a complete clone, this "shallow" clone merely provides reference to values beyond one level deep - it is *NOT* a true clone.</p>

<h4>Alternatives</h4>

<p>So by now you are probably wondering, "Chris, what are some possible alternatives to Object.assign()? The syntax is absolutely phenomenal, but sometimes I need a deeper clone than simply one level deep."<p>

<p>Don't worry. I got you.</p>

<iframe src="https://giphy.com/embed/l3fQgjVoyZ1I4EyOs" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/studiosoriginals-friendship-domitille-collardey-i-got-you-l3fQgjVoyZ1I4EyOs">via GIPHY</a></p>

<h5>There are a few possible solutions to creating a deep clone in JavaScript:</h5>
  <ol>
    <li><b>JSON.stringify</b></li>
    <li><b>Complicated solution with recursion</b> - more performant, especially relevant for large objects</li>
    <li><b>jQuery extend</b> - not recommended for performance issues</li>
  </ol>

In this post, I will be demonstrating how using JSON.stringify solves our problem. Two other options are outlined [in this excellent Stack Overflow post](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript/5344074).

<p>To quickly summarize, the other possibilities are a more complicated solution involving recursion, which I would recommend for larger objects, and to use JQuery which I would not recommend because it is less performant then the solution I am about to propose:</p>

![Our New Object](https://res.cloudinary.com/dgxvjwyhm/image/upload/v1533395837/new-obj.png)

<p>Above you can see our new object (same as our old object, with a new name). We then create a deep clone by converting the object to a string, and then parsing it back to JSON. Let's test if it works by assigning a new value to c on the jasonClone:</p>

```javascript
jasonClone.a.b.c = 40000;
```

<p>Now we can check impact using console.log. Drumroll please..</p>

<iframe src="https://giphy.com/embed/ogGmxeqA8L3sA" width="480" height="258" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/please-drumroll-ogGmxeqA8L3sA">via GIPHY</a></p>

```javascript
console.log("jasonClone", jasonClone.a.b.c);
console.log("Original Object", newObj.a.b.c);

// jasonClone 40000
// Original Object 1
```

<p>Voila! As you can see we have sucessfully deep cloned newObj. The c value on jasonClone updates while the c value on newObj remains the same</p>

<h4>Object.assign() in Redux</h4>

<p>In this wrap up, I wanted to touch on my most common use case of Object.assign(). One of the core tenets of Redux is to never mutate state, you'll often find yourself using Object.assign() to create copies of objects with new or updated values. Especially as you are writing your reducer functions.</p>

While this is an effective approach, note that utilizing the [new object spread syntax](https://github.com/tc39/proposal-object-rest-spread) to copy enumerable properties from one object to another is more succinct and will result in more readable code, but still requires a babel plugin (babel-plugin-transform-object-rest-spread) as of the writing of this blog post (interestingly, this plugin is a polyfill for Object.assign()).

<h3>Sources:</h3>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign>

<https://redux.js.org/recipes/usingobjectspreadoperator>

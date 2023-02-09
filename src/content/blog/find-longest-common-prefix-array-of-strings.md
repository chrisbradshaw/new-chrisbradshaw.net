---
title: Find Longest Common Prefix in Array of Strings - Javascript
description: Faster than 94.37% of Leetcode Submissions
tags:
  - Javascript
ogImage: https://res.cloudinary.com/dgxvjwyhm/image/upload/v1675958430 longest-common-prefix-cover.jpg
pubDatetime: 2020-12-24T15:57:52.737Z
---

<h2>Find Longest Common Prefix in Array of Strings - Javascript - faster than 94.37% of Leetcode Submissions</h2>

<p>I ran into this interesting Leetcode problem today - given an array of strings, find the longest common prefix among them. For example, given the following arrays we would expect these return values:</p>

![Sample Data](https://res.cloudinary.com/dgxvjwyhm/image/upload/v1608831272/code-screenshots/prefix-sample-data.png)

<p>Here is the solution I came up with:</p>

![Solution](https://res.cloudinary.com/dgxvjwyhm/image/upload/v1608829671/code-screenshots/longest_common_prefix.png)

The first thing to consider when tackling a problem like this is, "What data do we have available?" We have the lengths of all of the strings, and the LONGEST possible prefix that could be shared among them is the entire shortest string.

So the first step, after checking for valid input, would be to sort the given array in order of shortest string to longest string.

The next step would be to take the shortest string, and check each string to see if it begins with that string. If they do not all begin with that string, remove the last letter of the shortest string and check again. For example, we would initially check **"monocle"**, and if all strings do not begin with **"monocle"**, next check **"monocl"**, and so on and so forth.

I chose to achieve this with a [while loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) and [Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every). So while every string in the original array does not match the shortest string, remove the last letter and check again. I was sure to add a condition to exit the loop (if the shortest string has no remaining letters), and this will double as our output if no solution is found.

I was happy to see that this solution performed well vs all other Leetcode Javascript submissions - ran in 76ms (faster than 94.37%), and utilized 38.9MB memory (less than 81.36%).

**EDIT:** I was thinking about this later in the day, and probably an even more efficient solution would be to not sort the array, and simply start with the first letter in the first string and increase the characters in string on each iteration when checking if each string in the original prefix starts with the phrase. In many circumstances, this would be preferable. It depends on the length of the shortest string and the length of the prefix.

Feel free to propose suggestions to this solution or comment to discuss, and follow me [@\_chrisbradshaw](https://twitter.com/_chrisbradshaw) on Twitter for more great Javascript content.

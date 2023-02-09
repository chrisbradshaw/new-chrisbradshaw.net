---
title: It's 2018, Update Your Footer
description: Yes, this is the first blog post on my new portfolio site
tags:
  - Javascript
ogImage: ./old-portfolio.jpg
pubDatetime: 2018-06-15T15:57:52.737Z
---

> "Your second app will certaintly be better than your first app. So you might as well get your first app over with." -Instructor, my first programming class

A lot has changed since the last time I wrote a blog post. React.js took over the world, jQuery died a horrible death and I finally switched to VSCode despite having at one time spent $79 for a Sublime Text 2 license.

This is probably the 3rd version of an update portfolio site that I've built. I feel the strong desire to improve upon previous work. So even though my last site was ~3 years old (85 in portfolio years), I've been putting off changing it. Some reasons I should have changed it sooner:

- It was plain HTML, CSS, and Javascript
- I used ID selectors in the CSS
- The last job listed on my resume was 2015
- It didn't incorporate a blog

I just didn't feel like any new designs I produced captured the simplicity of the original (until this current site). I built this new site today

## FULL DISCLOSURE:

- I'm kind of tired from setting it up
- It's after work on a Friday
- I just couldn't bear to have 0 blog posts

I'm going to explain what's great about this new portfolio site, briefly discuss my philosphy for the new blog and then include some code before wrapping up.

## New portfolio site is great:

1.  It's entirely built with the latest in Javascript.
    - I used the static site generator Gatsby to fire it up.
    - Every thing you see is a React component.
    - It uses Redux to manage the store.
    - All the posts are queried using GraphQL
    - The Webpack on my local machine is configured to use Hot Module Reload - I'm typing this in VSCode, and it's refreshing in real time.
    - Prettier is configured to handle the formatting. I love [Prettier](https://github.com/prettier/prettier).

## Philosophy for new blog

My goal for this new blog is to ease back on my perfectionist tendencies and to consistently put out content. I think a reasonable goal is 10 blog posts in the next month, and if you write something down, it always comes true. My inspiration for this "quantity is better than quality" approach comes from a ten year old blog post by Jeff Atwood, founder of Stack Overlow. You can read that post [here](https://blog.codinghorror.com/quantity-always-trumps-quality/).

## Finally, some code

I realize that actual code has been conspicuously absent from this post. I am always shocked when I see website that have a © in their footer with a year that is NOT THE CURRENT year. I'm even more shocked when it has been several years. It is so simple to "set it and forget it" using Javascript. To include in your React project:

```javascript
return <div>© Chris Bradshaw {new Date().getFullYear()}</div>;
```

Will give you the footer you see below. There is an entire site dedicated to solving this issue, in a variety of different programming languages: [updateyourfooter.com](http://updateyourfooter.com/). It was the inspiration for the title of this post.

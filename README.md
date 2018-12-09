# UnitJS v1.0.0 [![CircleCI](https://circleci.com/gh/vmcruz/UNIT/tree/master.svg?style=shield)](https://circleci.com/gh/vmcruz/UNIT/tree/master)

# About
UnitJS is a personal project I've been developing over the years. It follows the `Revealing Module Pattern` along with the [`IIFE Pattern`](http://benalman.com/news/2010/11/immediately-invoked-function-expression/). Started as a simple script for one website, but I realized that as I developed new websites, the same functionality was required. Instead of copy&pasting the code, I decided to start building this library for personal use.

The aim of this library is not the support of all web browsers, but to have a lightweight library with JQuery like syntax for specific projects such as: Extensions, plugins, and/or applications. And yes, **the browser needs to support ES6 specification**.

## Installation
Simple download the `src/` and import the library right into your development environment. Once imported, you need to run the install method of UnitJS right after the import. By allowing you to install this library, you get to chose which alias you want to give it, so there's no conflicts between another libraries you may have.

```javascript
<script src="/path/to/unit.js"></script>
<script>
  UnitJS.install('$'); // This allows you to use $(selector)
</script>
```

## What about JQuery
Since JQuery cares about giving support to the vast of web browsers, it tends to be heavy. Most of its functions are not event used, like animations. I've seen projects that require JQuery just to use AJAX functionality, or just the animations. This is the reason I began developing UnitJS

## What about UnitJS
I believe a library should have a purpose and one purpose only. In this case, I build UnitJS to have just the one thing I use the most in JQuery: DOM manipulation. I could easily add AJAX functionality, or even animations, but then I'll be creating a JQuery copy. UnitJS is just there to manipulate the DOM, to make your life easier, not to learn a whole new framework just to start coding.

## You should use UnitJS
No, you don't!. UnitJS was built for personal use, but you're free to use it if you need it. Be aware though, this library doesn't support all browsers and will not (until all browsers support ES6 I guess).

If you just started learning JavaScript, perhaps you shouldn't use this at all. You need to understand what's happening behind scenes before using this library (or any library or framework for that matter).

## That being said
Feel free to fork and redo as much as you need. Let me know what you did or change to build a better UnitJS.
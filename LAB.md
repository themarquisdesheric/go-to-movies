<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Let's Go to the Movies
===

## Description

Create an app that shows movie data from http://www.omdbapi.com/. (For example, Star Wars movies:

```js
fetch('http://www.omdbapi.com/?s=Star%20Wars&plot=short&r=json')
 .then(res => res.json())
 .then(movies => {
     ...
 });
```
 
You are free to query the data for a genre, actor, whatever that you want.

* Use `create-react-app` to create your react app project

* Your main component takes props for
  * `loading` - indicates app should display "loading" info
  * `movies` - the list of movies to display
 
* Decompose into meaningful components (logical parts)

* Use `key` to track list items

* Add at least a moderately acceptable level of css style. You can either use:
  * Import `main.css` in index.js
  * Use inline styles directly on your elements

## Rubric *10pts*

* Renders movies *1pts*
* Correct/idiomatic jsx and React *3pts*
* Component (de)composition *2pts*
* HTML/CSS *1pts*
* Project structure/org *1pts*
* Curiosity/creativity *1pts*

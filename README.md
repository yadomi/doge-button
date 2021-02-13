DogeButton ! wow
==========

DogeButton is a simple HTML dogecoin donation button which can be easily integrated to any website. wow.

![image](https://i.imgur.com/eKRBFA1.gif)

I've made this button on my spare time on my [CodePen](http://codepen.io/yadomi/pen/EGiKD) and find it cool, so I made a No-jQuery version and decided to share it on GitHub.

You can see it working [here](http://yadomi.github.io/doge-button/) or checkout the [demo.html](https://github.com/yadomi/doge-button/blob/master/demo.html) in this repo.

## Update 2021

This repository has been visited quite often recently because of doge going to the moon. I did this thing back in 2014 and realized now it didn't have a real doge theme. Say no more, I've updated it with very doge theme, much removed zeroclipoard dep and ditched grunt for rollup. To the moon :rocket: !

# Features

 - Show address balance on hover (only with Donate button)
 - Copy address to clipboard when clicking on it, wow
 - Such beautiful
 - Very Locale support (en-US, fr-FR)

# How to add on your website

1. Include `dogebutton.min.css` in your **head** :

	```html
	<link rel="stylesheet" type="text/css" href="dogebutton/dogebutton.min.css">
	```

2. Include `dogebutton.min.js` at the very end of the page, just before the **body** tag

	```html
	<script type="text/javascript" src="dogebutton/dogebutton.min.js"></script>
	```

3. Add button everywhere you want !

	```html
	<div data-xdgbtn-address="DKVtwbh8YWrXtn5qz8DTB9ZamoYXneKn9F"></div>
	```

Note: This is my real dogecoin address, so you can donate to **DKVtwbh8YWrXtn5qz8DTB9ZamoYXneKn9F** if you want :)

# Options

All options are class based, to use them, add the class you want on the button itself

### Button Apparence

DogeButton has two theme, by default it's a serious theme with a serious font, it's called the corpo theme.
But dogecoin is all about fun, so there is also a Comic Sans MS version with doge instead of D.

#### Themes

- `xdgbtn-theme-corpo` **(default)**:  A good looking but boring theme
- `xdgbtn-theme-doge`: This is the real theme, Comic Sans MS font and very doge much theme

#### Colors variation

- **(default)**:  a yellow background with a dark font color
- `xdgbtn-black` **(default)**: a dark background with a yellow font color

### Button Type

There are two type of button:

- **(default)**: The default one is the *pay with* button which only display the Dogecoin address.
- `xdgbtn-donate`: The donation button, which display the balance of the address on hover.

### Locale

To add a locale, add the corresponding stylesheet

```html
<script type="text/javascript" src="dogebutton/dogebutton_fr-FR.min.js"></script>
```

Then add the `xdgbtn-lang-xx-XX` class to your button

```html
<div data-xdgbtn-address="DKVtwbh8YWrXtn5qz8DTB9ZamoYXneKn9F" class="xdgbtn-lang-fr-FR"></div>
```

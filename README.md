DogeButton ! wow
==========

DogeButton is a simple HTML dogecoin donation button which can be easily integrate to any website.

![image](https://dl.dropboxusercontent.com/u/6888621/htdocs/dogecoin-demo-short.gif)

I've made this button on my spare time on my [CodePen](http://codepen.io/yadomi/pen/EGiKD) and find it cool, so I made a No-jQuery version and decided to share it on GitHub.

You can see it working [here](http://yadomi.github.io/doge-button/) or checkout the demo.html in this repo.

#Features

 - Show address balance on hover (only with Donate button)
 - Copy address to clipboard when clicking on it
 - Such beautiful
 - Only 5.4kb (JS+CSS)

#How to add on your website

1. Include `dogebutton.min.css` in your **head** :

	```
	<link rel="stylesheet" type="text/css" href="dogebutton/dogebutton.min.css">
	```

2. Include `dogebutton.min.js` at the very end of the page, just before the **body** tag

	```
	<script type="text/javascript" src="dogebutton/dogecoin.min.js"></script>
	```

3. Add button everywhere you want !

	```
	<div data-address="DKVtwbh8YWrXtn5qz8DTB9ZamoYXneKn9F" class="btn-dogecoin"></div>
	```
**/!\ Don't forget to change the data-address attribute to match your wallet address !**

This is my real dogecoin address, so you can donate to **DKVtwbh8YWrXtn5qz8DTB9ZamoYXneKn9F** if you want ;)

#Options

###Button Apparence
DogeButton has two theme, by default it's yellow background with dark characters. If you want a darker theme, just add the **black** class to the DogeButton.

###Button Type

There are two type of button:

- The default one is the *pay with* button which only display the Dogecoin address.
- The donation button, which display the balance of the address on hover.

To use the donate button, just add the **donate** class to the DogeButton

	<div data-address="DKVtwbh8YWrXtn5qz8DTB9ZamoYXneKn9F" class="btn-dogecoin donate black"></div>

#Improvements

1. Add option to show a QR Code somewhere on the button
2. ~~Add option to show the dogecoin balance (e.g: using Dogechain API)~~
3. ~~Remove jQuery dependency~~
4. ~~Add Copy-to-Clipboard option~~
5. Use `dogecoin:` URI

DogeButton ! wow
==========

DogeButton is a simple HTML dogecoin donation button which can be easily integrate to any website.

![image](https://dl.dropboxusercontent.com/u/6888621/htdocs/dogecoin-demo-short.gif)

I've made this button on my spare time on my [CodePen](http://codepen.io/yadomi/pen/EGiKD) and find it cool, so I made a No-jQuery version and decided to share it on GitHub. 

You can see it working [here](http://cakelabs.fr/doge)

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

This is my real dogecoin address, so you can donate if you want ;) 

#Options

You can change the button style just with css class. By default it's a yellow "pay with" button. If you want it black, just add the **black** class. You want a donate button ? Just add the **donate** class ! 

	```
	<div data-address="DKVtwbh8YWrXtn5qz8DTB9ZamoYXneKn9F" class="btn-dogecoin donate black"></div>
	```

#Improvements

1. Add option to show a QR Code somewhere on the button
2. Add option to show the dogecoin balance (e.g: using Dogechain API)

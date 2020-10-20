# Javascript Workshop

For the last workshop, we explored HTML and CSS. These technologies allowed us to both define the structure and styling of ou web page. This is
great for static web sites which don't have anything but readable content on them, but when was the last time you visited a website just to read the information on it?
This is where JavaScript comes in. JavaScript is a scripting language that can be embedded into your HTML page and allows you to dynamically change data, manipulate your html document
and listen for events. 

JavaScript was famously created in ten days, and has had quite an interesting history. If you'd like to learn more about the history of Javascript, check out
[this video](https://www.youtube.com/watch?v=Sh6lK57Cuk4). 

Contrary to the name, JavaScript and Java are not related, nor are they similar languages. Java is a strictly typed, Object Oriented and compiled language, while Javascript
is dynamically typed, multi-paradigm and is interpreted. There is a steep learning curve to JavaScript. As you will see, it will often produce weird results and can definitely
take some time to get used to coming from a language like Java.

##  Using with HTML

In order to use a JavaScript file in your webpage, you need to use a special tag. One of the HTML tags we had not discussed last workshop was the script tag. The script tag is an HTML tag that lets you 
embed JavaScript into your HTML page. Much like we had discussed with CSS, there can be several ways that you can do this.

### Inline
That's right! It's possible to write JavaScript directly inline. Take a look at the example of a button, specifically, the onclick button. This button when clicked will show
an alert that says hello world. The text contained in the quotes is JavaScript. Although this approach works here, it is not the best way to write JavaScript.

```
<button class="btn delete" onclick="alert('hello world');">Click me</button>
```

### Directly in the script tag
Another way to write javascript, is putting your code directly in the script tag. This works great for small pieces of code, but can often become less than ideal when writing long
scripts. In general, it is best to use the next method.

```
<script>
  console.log('Hello world'):
</script>
```

### In a separate file
By giving the script tag some specific attributes, you can actually write your javascript in a .js file. This is the preferred way to write JavaScript.

```
<script type="text/javascript scr="script.js"></script>
```

Now that we understand how to actaully use our JavaScript within our webpage, let's start taking a look at the fundamentals of the language!
##  Data Types
##  Basic Syntax
##  Useful array methods
##  The DOM API

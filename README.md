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
### Primitive types
Javscript has 6 primitive datatypes
### Objects
### Arrays
##  Basic Syntax
### Variables
Currently, JavaScript supports three different keywords for declaring variables. We will observe how variables are scoped within code and discuss the tradeoffs to using each keyword. The syntax for instantiating a variable generally looks like the following:

```keyword name = value```

The keyword is either (var, let or const), the name can be any valid variable name, and value can be any of the data types discussed earlier
####  Var
Before the EcmaScript 6 standard was introduced, this was the only way to declare variables in JavaScript. An example of var can be seen below:

```var x = 1;```

The reason var is avoided now, is because of the way it is scoped. In js, variables declared with the var keyword are scoped at the function level. Meaning code like this

```
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
```

Will actually not give any problems. Even though the variable appears to be out of scope, an variable declared with the var keyword exists for the entire scope of the function.

### let and const
This is the new way to declare variables in JavaScript and is also the reccomended way. 
### Conditionals

Conditionals work mostly the way they do in Java. The syntax is almost indistinguishable from Java as can be seen in the example below

```
if (condition) {
  //do something
} else if (condition) {
  //do something else
} else {
  //do the default thing
}
```
### Loops

### functions
##  Useful array methods
In many languages, there are simple abstractions built over array iteration, that allow you to easily manipulate, find or iterate through an array. Java allows this through [Streams])(https://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/). Although these concepts can be confusing at first, it is important to learn
them as they appear in many languages, and often let you write code more concisely. Often you can chain these operations to turn a for loop into a single one liner.

Although there are some exceptions, the syntax for these methods looks like the following:

```
const array = [1,2,3,4]

array.method(function to be executed for each element in the list);
```

### forEach
The most simple of these functions is forEach. As you would expect, it simply iterates over each element and applies the function you pass in to the element. A simple example is printing out every 
### map
This method is used to transform data in an array to an array of a different set of data. The example below shows how to transform an array of objects to just an array of the id property of an object:

```

```
### filter
Like the name implies, filter lets you pass a function in 
### reduce
### find
Find can be used to find 


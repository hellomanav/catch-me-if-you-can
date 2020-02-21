
// ---------TIMER------------
let noon=12;

let showCurrentTime = function()
{    
    let clock = document.querySelector('.clock');
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";
 
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }
	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    clock.innerHTML = clockTime;
    let t = setTimeout(showCurrentTime, 500);
};
showCurrentTime();

// ---------GAME RELATED STUFF!!!!!!!!!------------

const canvas=document.querySelector('canvas');
canvas.height=350
canvas.width=400
console.log(canvas)

let score=0

const ctx=canvas.getContext("2d")

console.log(ctx)

psize_x=10
psize_y=10
player_x=50
player_y=50
bsize_x=50
bsize_y=50
const width=canvas.width
const height=canvas.height
base_x=Math.floor(Math.random()*(width-bsize_x))
base_y=Math.floor(Math.random()*(height-bsize_y))

ctx.fillStyle="red"
ctx.fillRect(player_x,player_y,psize_x,psize_y)

ctx.strokeRect(base_x,base_y,bsize_x,bsize_y)

function step(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="red"
    ctx.fillRect(player_x,player_y,psize_x,psize_y)
    ctx.strokeRect(base_x,base_y,bsize_x,bsize_y)
    if((player_x>=base_x && player_x<=base_x+bsize_x) && (player_y>=base_y && player_y<=base_y+bsize_y)){

        let status=document.querySelector('.status');
        let htmlscore=document.querySelector('.score');
       
        score+=10;
        htmlscore.innerHTML=score;

        if(score>=50){
            status.innerHTML="Level Cleared!!";
        }
        if(score%10===0){
            random_fact();
        }

        base_x=Math.floor(Math.random()*(width-bsize_x))
        base_y=Math.floor(Math.random()*(height-bsize_y))

    }
    requestAnimationFrame(step)

   
}
requestAnimationFrame(step)

function handleInput(event){
    const key=event.key.toLowerCase()
    switch(key){
        case "a":
            if(player_x >=5){
                player_x-=7
                break;
            }
        case "w":
            if(player_y >=5){
                player_y-=7
                break;
            }          
        case "d":
            if(player_x <=(width-15)){
                player_x+=7
                break;
            }
        case "s":
            if(player_y <=(height-15)){
                player_y+=7
                //console.log(player_y)
                break;
            }
            
    }
    
}

document.addEventListener("keypress",handleInput)

function random_fact(){
    let rand_num=Math.floor(Math.random()*rand_facts.length);

    let quote=document.querySelector('.quote');

    quote.innerHTML=rand_facts[rand_num];


}
function playSound(name){
    name = "hammer.wav";
    let audio = new Audio(name)
    audio.play();
}
playSound();


let rand_facts=[
    "Along with HTML an CSS, JavaScript is one of the three main things of the www (World Wide Web). It enables interactive web pages and thus is an essential part of web applications. A majority of websites use it and all major web browsers have a devoted JavaScript engine to execute it.",
    "JavaScript is single threaded. This is the reason lots of people who use multi-threaded programming thinks its working is slow as it would not be able to make use of all the cores of the CPU properly.",
    "Despite the fact that there are similarities between JavaScript and Java, including language name, respective standard libraries and syntax, these two languages are distinct and differ significantly in design.",
    "Like all other scripting languages, arrays and objects can be created with a brief shortcut syntax. These literals structure the basis of JSON data format.",
    "JavaScript supports regular expressions in a manner similar to Perl, which provides a concise and powerful syntax for text manipulation that is more sophisticated than the built-in string functions.",
    "There is a CSRF attack known as “JavaScript hijacking” in which a tag on an attacker’s site damages a page on the victim’s site that returns private information such as JavaScript or JSON (Reference: Wikipedia)",
    "JavaScript is supported by all modern Web browsers with the built-in interpreters.",
    "JavaScript’s default behavior that allows moving declarations to the top is called Hoisting. The 2 ways of creating functions in JavaScript are Function Declaration and Function Expression. Let’s find out more about these:",
    "In Javascript close() method is used to close the current window. You must write window.close() to ensure that this command is associated with a window object and not some other JavaScript object.",
    "Both var and let are used for variable/ method declaration in javascript but the main difference between let and var is that var is function scoped whereas let is block scoped.",
    "Closures are the combination of lexical environment and function within which the function was declared. This allows JavaScript programmers to write better, more creative, concise and expressive codes. The closure will consist of all the local variables that were in-scope when the closure was created.",
    "JavaScript’s default behavior that allows moving declarations to the top is called Hoisting. The 2 ways of creating functions in JavaScript are Function Declaration and Function Expression.",
    "In Javascript instanceof operator checks whether the object is an instance of a class or not:",
    "BOM stands for “Browser Object Modal” that allows Javascript to ‘talk’ to the browser, no standards, modern browsers implement similar BOMS – window, screen, location, history, navigator, timing, cookies.",
    "There are two types of Inherientence in OOPS Classic and Prototypical Inheritance. Javascript follows Prototypical Inheritance.",
    "You can add a property to an object using object.property_name =value, delete object.property_name is used to delete a property.",
    "toISOString() method is used to convert javascript date to ISO standard. It converts JavaScript Date object into a string, using the ISO standard.",
    "Object.assign() method is used for cloning an object in Javascript.Here is sample usage",
    "document.getElementsByClassName() method is used in Javascript to get an element with a class name.",
    "You can change the title of a webpage using setting the title property of the document object.",
    "JavaScript entirely runs on the client machine. 301 is response code that is sent by the server as a response. So it is not possible to do 301 Redirects In JavaScript.",
    "Functional programming is one of the key paradigms that makes JavaScript stand out from other languages. Look for examples of functional purity, first-class functions, higher-order functions, or using functions as arguments and values. It’s also a good sign if they have past experience working with functional languages like Lisp, Haskell, Erlang, or Clojure.",
    "Prototypal OO is the other major programming paradigm that really lets JavaScript shine—objects linked to other objects (OLOO). You’re looking for knowledge of when and where to use prototypes, liberal use of “Object.assign()” or mixins, and a solid grasp of concepts like delegation and concatenative inheritance.",
    "REST stands for Representational State Transfer, an architectural style that has largely been adopted as a best practice for building web and mobile applications. RESTful services are designed to be lightweight, easy to maintain, and scaleable. They are typically based on the HTTP protocol, make explicit use of HTTP methods (GET, POST, PUT, DELETE), are stateless, use intuitive URIs, and transfer XML/JSON data between the server and the client.",
    "You can tell a lot about a programmer from the frameworks they’re familiar with—AngularJS, React, jQuery, Backbone, Aurelia, and Meteor are just some of the more popular ones available. The key here is to make sure the developer you’re engaging has experience with the framework you’ve chosen for your project.",
    "isNan function returns true if the argument is not a number otherwise it is false.",
    "Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.",
    "Netscape is the software company who developed JavaScript.",
    "A prompt box is a box which allows the user to enter input by providing a text box. Label and box will be provided to enter the text or number.",
    "'This' keyword refers to the object from where it was called.",
    "Timers are used to execute a piece of code at a set time or also to repeat the code in a given interval of time. This is done by using the functions setTimeout, setInterval and clearInterval.",
    "'ViewState' is specific to a page in a session.'SessionState' is specific to user specific data that can be accessed across all pages in the web application.",
    "=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion.",
    "JavaScript does support automatic type conversion, it is the common way of type conversion used by JavaScript developers",
    "Escape characters (Backslash) is used when working with special characters like single quotes, double quotes, apostrophes and ampersands. Place backslash before the characters to make it display.",
    "An alert box displays only one button which is the OK button. But a Confirmation box displays two buttons namely OK and cancel.",
    "Cookies are the small test files stored in a computer and it gets created when the user visits the websites to store information that they need. Example could be User Name details and shopping cart information from the previous visits.",
    "JavaScript does not have concept level scope. The variable declared inside the function has scope inside the function.",
    "Break statement exits from the current loop.    Continue statement continues with next statement of the loop.",
    "document.write('Welcome') is used to print the text – Welcome in the screen.",
    "Blur function is used to remove the focus from the specified object.",
    "The push method is used to add or append one or more elements to the end of an Array. Using this method, we can append multiple elements by passing multiple arguments",
    "Unshift method is like push method which works at the beginning of the array. This method is used to prepend one or more elements to the beginning of the array.",
    "The navigator.appVersion string can be used to detect the operating system on the client machine.",
    "A value can be appended to an array in the given manner -arr[arr.length] = value;",
    "The 'And' Operator (&&), 'Or' Operator (||) and the 'Not' Operator (!) can be used in JavaScript.",
    "ECMA Script are like rules and guideline while Javascript is a scripting language used for web development."
    
]


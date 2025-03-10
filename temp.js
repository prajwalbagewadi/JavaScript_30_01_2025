<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BOM</title>
  </head>
  <body>
    <pre>
        /* The Browser Object Model (BOM) allows JavaScript to interact with the browser
beyond just the HTML document (DOM). It provides access to browser-related
functions, such as controlling the window, handling navigation, and managing
user interactions. */
    </pre>
    <h1>Browser object model</h1>
    <p id="msg"></p>
  </body>
  <script>
    //window: represents browser window
    console.log("window height:", window.innerHeight);
    console.log("window height:", window.innerWidth);

    window.alert("helloworld");
    window.confirm("confirm action.");
    var d1 = prompt("enter msg");
    document.getElementById("msg").innerText = d1;

    window.open("https://react.dev/", "_blank");
    /*targets:_self	Default. Opens the link in the same tab/window.
    _blank	Opens the link in a new tab/window.
    _parent	Opens the link in the parent frame (used in framesets).
    _top	Opens the link in the full browser window, breaking out of frames.
    */
    window.close(); //close current window

    //The setTimeout() method in JavaScript is used to execute a function or a piece of code once, after a specified delay.
    //It's a core part of asynchronous programming in JavaScript.
    window.setTimeout(() => {
      alert("this msg will remain 5sec on the window.");
    }, 5000);
    /*
    callback: The function or code you want to execute. This can be a function expression, an arrow function, or a reference to a named function.
    delay: The time (in milliseconds) to wait before executing the callback. 1000 milliseconds is equal to 1 second.
    ...args (Optional): Any additional arguments you want to pass to the callback function when it's executed.
    */

    //The setInterval() method in JavaScript is used to repeatedly execute a function or a piece of code at specified intervals (time delays).
    //It's a core part of asynchronous programming, often used for animations, updating data, or other tasks that need to happen regularly.
    // has same arguments as the setTimeout() function.
    window.setInterval(() => {
      alert("msg after every 5sec.");
    }, 5000);

    console.log("browser.info:", navigator.userAgent);
    console.log("user.lang:", navigator.language);
    console.log("os.platform:", navigator.platform);
    console.log("check if online", navigator.onLine);
  </script>
</html>

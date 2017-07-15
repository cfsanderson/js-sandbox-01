console.log("Lesson #25: AJAX")
// https://youtu.be/tHRNuBf_8xg?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// Look at example #1 at the bottom of the web page to see the change.

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://gist.githubusercontent.com/cfsanderson/0a1b6dcac4cc1322f9b32a71d7efb1c2/raw/c7427bdc914ff3a8f04d51728de4420e511367e1/hello-world.txt", true);
  xhttp.send();
}

/*

AJAX = Asynchronous Javascript And XML

=== 7 steps in AJAX request ===
#1 - event occurs on page (e.g. onclick)
#2 - an XMLHttpRequest object is created by JS
#3 - the object sends a request to the web server
#4 - the server processes the request
#5 - the server sends a response back
#6 - response is read by JS
#7 - JS performs the action (e.g. updates the page)

Adding "https://crossorigin.me" prevents the following error:
"XMLHttpRequest cannot load http://carnes.cc/code/ajax_example.txt. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://s.codepen.io' is therefore not allowed access."
This is a temporary fix for CodePen but shoud not be necessary in a correct AJAX request.

`onclick()` the HTML calls the `loadDoc()` function which
- makes the XMLHttpRequest
- set the `.onreadystatechange` property which defines a function to be called when the readState property changes to one of 4 things...
  - 0 = request not initialized
  - 1 = server connection established
  - 2 = request received
  - 3 = processing request
  - 4 = request finished and response ready
- AND if HTML status is a `200` (which stands for found and OK)
- get the element with the `id="demo"` and change the innerHTML (text) to the value of `this.responseText` is (could use `this.responseXML` if want XML returned).
- the 3 values of `xhttp.open` are
  - "GET" - which literally gets the response and pulls it down from..
  - "url" - which is the server address you are pulling from.
  - "true" - which means that it is an Asynchronous request (will almost always be true)
- xhttp.send() sends to the server.

*/

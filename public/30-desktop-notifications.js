console.log("Lesson #30: Desktop Notifications")
// https://youtu.be/OMXtJ0USM8s?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// UNCOMMENT each Notification below and refresh to see how it runs in the browser.

// Notification.requestPermission();

// Notification.requestPermission().then(function(result) {
//   alert(result)
// });

function notifyMe() {
  // check to see if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  } else if (Notification.permission === "granted") {
    // check to see if you've already granted access
    notify(); /* send out notification */
  } else if (Notification.permission !== "denied") {
    // check if you haven't denied but haven't granted either then send notification
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        notify();
      }
    });
  }

  function notify() {
    var notification = new Notification('TITLE OF NOTIFICATION HERE', {
      icon: 'http://imgur.com/yvLVP5v',
      body: "Hey! You are on notice! Click this notifcation to visit calebsanderson.com"
    });

    notification.onclick = function () {
      window.open("http://calebsanderson.com");
    };
    setTimeout(notification.close.bind(notification), 9000);
  }
}
notifyMe();

chrome.commands.onCommand.addListener(function(command) {
  // this retrieves the text, which will be null if the user presses cancel
  text = prompt("Enter your calendar event");
});

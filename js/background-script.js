function processRequest(e) {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
    }
}

function post(path, params) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', path, true);
    xhr.send(params);
    
    fields = document.createElement("input");
    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            fields.appendChild(hiddenField);
        }
    }
    xhr.addEventListener("readystatechange", processRequest, false);
}

chrome.commands.onCommand.addListener(function(command) {
    // this retrieves the text, which will be null if the user presses cancel
    text = prompt("Enter your calendar event");
    var addEventEndpoint = 'http://localhost:5000/add_event';
    post(addEventEndpoint, text);
});

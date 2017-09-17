$(document).ready(nextXEvents);

$(document).keypress(function(e) {
  if (e.keyCode == 107) {
    nextXEvents();
  }
  else if (e.keyCode == 108) {
    nextWeekEvents();
  }
});

function nextXEvents() {
  //$.post("https://flask-extension-server.herokuapp.com/add_event", {}, function(raw_data) {
    raw_data = '{"0": {"date": "09-16", "location": "", "name": "HackMIT 2017", "time": "11:00:00-04:00"}, "1": {"date": "09-23", "location": "", "name": "Palantir", "time": "12:00:00-04:00"}, "2": {"date": "09-23", "location": "", "name": "Hanna\'s birthday", "time": "22:00:00-04:00"}, "3": {"date": "10-05", "location": "", "name": "14.02 Exam 1", "time": "07:30:00-04:00"}, "4": {"date": "10-05", "location": "", "name": "Tony\'s Birthday!", "time": "18:00:00-04:00"}, "5": {"date": "10-12", "location": "", "name": "Arangetram Trip", "time": "21:30:00-04:00"}, "6": {"date": "11-02", "location": "", "name": "14.02 Exam 2", "time": "19:30:00-04:00"}, "7": {"date": "11-18", "location": "", "name": "Splash", "time": ""}, "8": {"date": "12-02", "location": "", "name": "Putnam", "time": ""}, "9": {"date": "12-07", "location": "", "name": "14.02 Exam 3", "time": "19:30:00-05:00"}}';
    data = JSON.parse(raw_data);
    var $e = $('#events')
    $e.html("<p class='title'>Event List</p>");
    $.each(data, function(idx, item) {
      $e.append("<div class='event'>" +
                "<p class='e-name'>" + item["name"] + "</p>" + 
                "<p class='e-time'>" + item["date"] + ", " + item["time"] + "</p>" + 
                "<p class='e-loc'>" + item["location"] + "</p>")
    });
  //})
}


function nextWeekEvents() {
//  $.post("https://flask-extension-server.herokuapp.com/add_event", {}, function(data) {
    data = []
    for (c = 0; c < 168; c++) {
      if (c % 13 === 0) {
        data.push({"status": "busy"});
      }
      else {
        data.push({"status": "empty"});
      }
    }
    var $e = $('#events')
    $e.html("<p class='title'>Your Week</p>");
    $e.append("<table style='width:350px'>")

    $e.append("<tr>")
    days = ['S', 'M', 'T', 'W', 'Th', 'F', 'S']
    for (a = 0; a < 7; a++) {
      $e.append("<th>" + days[a] + "</th>")
    }
    $e.append("</tr>")

    // tell abhijit to send bool list with 'busy' 'empty' instead
    // tell abhijit to make list go by day, then by time

    for (i = 0; i < 24; i++) {
      $e.append("<tr>")
      for (j = 0; j < 7; j++) {
        idx = i*7 + j 
        $e.append("<td class='" + data[idx]["status"] + "'></td>")
      }
      $e.append("</tr>")
    }
    $e.append("</table>")

//  })
}

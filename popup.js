$(document).ready(nextXEvents);

$(document).keypress(function(e) {
  if (e.keyCode == 106) {
    nextXEvents();
  }
  else if (e.keyCode == 107) {
    nextWeekEvents();
  }
});

function nextXEvents() {
  $.post("https://flask-extension-server.herokuapp.com/add_event", {}, function(data) {
    var $ul = $('#ct')
    $ul.html("");
    $.each(JSON.parse(data), function(idx, item) {
      $ul.append(
        $('<li>').append(
          $('<p>').append(idx, ' test')
      ));       
    });
  })
}


function nextWeekEvents() {
  $.post("https://flask-extension-server.herokuapp.com/add_event", {}, function(data) {
    var $ul = $('#ct')
    $ul.html("");
    $.each(JSON.parse(data), function(idx, item) {
      $ul.append(
        $('<li>').append(
          $('<p>').append(idx)
      ));       
    });
  })
}

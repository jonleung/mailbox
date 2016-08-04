$(function() {
  var DWEET_CHANNEL = "mailbox-instimacy";

  $submit = $("#submit");
  $theirName = $("#their-name");
  $friendName = $("#friend-name");

  $submit.on("click", function(e) {
    var data = {
      theirName: $theirName.val(),
      friendName: $theirName.val()
    }

    dweetio.dweet_for(DWEET_CHANNEL, data, function(err, dweet){
      if(err !== undefined) {
        alert("Error " + err);
      }
    });

  })
});

$(function() {
  var DWEET_CHANNEL = "mailbox-instimacy";

  $date = $("#date");
  $theirName = $("#their-name");
  $friendName = $("#friend-name");

  var dateString = moment().subtract(3, "days").format('MMMM Do YYYY');
  $date.html(dateString);

  dweetio.listen_for(DWEET_CHANNEL, function(dweet){
    var params = dweet.content;
    $theirName.html(params.theirName);
    $friendName.html(params.friendName);

    // http://localhost:3000/#print=no
    if(window.location.hash.indexOf("no") > -1 && window.location.hash.indexOf("print") > -1) {
      console.log('suppressed print')
    }
    else {
      window.print();
    }

  });

});



$(document).ready(function() {
  $("#formOne").submit(function(event) {


    

    var personName = $("input#name").val();
    var personDescription = $("input#description").val();
    var personDate= $("input#date").val();
    var personStart = $("input#start").val();
    var personEnd = $("input#end").val();

    
    //$("#myModal").modal();

  

    event.preventDefault(); 
  });

  $("#myBtn").click(function(){
    $("#myModal").modal();
    event.preventDefault(); 

  });
  

});
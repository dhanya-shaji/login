$(document).ready(function() {
  var userid = localStorage.getItem("username");
  $.get(
    "http://localhost/login/user.php?type=getuserById&username=" + userid,
    function(response) {
      var obj = JSON.parse(response);
      $("#userid").text(obj[0].id);
      $("#uSername").text(obj[0].username);
      $("#eMail").text(obj[0].email);
      $("#aDdress").text(obj[0].address);
      $("#pHonenumber").text(obj[0].phonenumber);
    }
  );
   //update button code
  $("#updatebutton").click(function() {
    var id = $("#id").text();
    var username = $("#textusername").val();
    var email = $("#textemail").val();
    var address = $("#textaddress").val();
    var phonenumber = $("#txtPhoneNo").val();
   
    $.get("http://localhost/login/updateapi.php?type=getuserById&id="+id+"&username="+username+"&email="+email+"&address="+address+"&phonenumber="+phonenumber,
    function(response) {
      var res = JSON.parse(response);
      if (res.resultCode ==1) {
          alert(" succesfull");
      }
      else {
          alert("updation unsuccessfull");
      
      }


  });
  });
  $("#closeButton").click(function() {
    var userid = localStorage.getItem("username");
  $.get(
    "http://localhost/login/user.php?type=getuserById&username=" + userid,
    function(response) {
      var obj = JSON.parse(response);
      $("#userid").text(obj[0].id);
      $("#uSername").text(obj[0].username);
      $("#eMail").text(obj[0].email);
      $("#aDdress").text(obj[0].address);
      $("#pHonenumber").text(obj[0].phonenumber);
    
  });
});

  //view model button code
  $("#modelbutton").click(function() {
    var userid = localStorage.getItem("username");
    $.get(
      "http://localhost/login/user.php?type=getuserById&username=" + userid,
      function(response) {
        var obj = JSON.parse(response);
        $("#id").text(obj[0].id);
        $("#textusername").val(obj[0].username);
        $("#textemail").val(obj[0].email);
        $("#textaddress").val(obj[0].address);
        $("#txtPhoneNo").val(obj[0].phonenumber);
      }
    )
  });
  //code for close button
  
});
$(document).ready(function() {
    $("#mybutton").click(function() {
        var userid = $("#username").val();
        var userpassword = $("#Password").val();
        $.get("http://localhost/login/functions.php?type=getuserById&username="+userid+"&password="+userpassword,
            function(response) {
                var res = JSON.parse(response);
                if (res.resultCode ==1) {
                    alert("login succesfull");
                    localStorage.setItem("username",userid);
                    window.location = "homepage.html"
                }
                else {
                    alert("username and password are incorect");
                
                }


            });
        
        });
    });

$(document).ready(function() {
        var userid = localStorage.getItem('username');
        
        $.get("http://localhost/login/user.php?type=getuserById&username="+userid,
            function(response){
                var obj = JSON.parse(response);
                $("#r0").text(obj[0].id);
                $("#r1").text(obj[0].username);
                $("#r2").text(obj[0].email);
                $("#r3").text(obj[0].address);
                $("#r4").text(obj[0].phonenumber);
            })
            $('#maindiv').html(html);
        
       
    });

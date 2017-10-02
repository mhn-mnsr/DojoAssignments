$(document).ready(function () {
    $(".btn").click(function () {
        var First_Name = $("#First_Name").val();
        var Last_Name = $("#Last_Name").val();
        var Email_Address = $("#Email_Address").val();
        var Contact_No = $("#Contact_No").val();
        // var new_row = "<tr><td>" + First_Name + "</td><td>" + Last_Name + "</td><td>" + Email_Address + "</td><td>" + Contact_No + "</td></tr>";
        $("table").append("<tr><td>" + First_Name + "</td><td>" + Last_Name + "</td><td>" + Email_Address + "</td><td>" + Contact_No + "</td></tr>");
        // console.log("Click")
        return false;
    })
});
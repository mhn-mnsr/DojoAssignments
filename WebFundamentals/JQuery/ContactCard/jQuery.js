$(document).ready(function(){
    $('.btn').click(function(){
        var first_name = $('.firstname').val();
        var last_name = $('.lastname').val();
        var description = $('.description').val();
        // var sidecontent = ("<tr><td>" + first_name + "</td><td>" + last_name + "</td><td>" + description + "</td></tr>");
        $('.Right_side').append("<div class='Contacts'>"+"<p>" + first_name + "</p><p>" + last_name + "</p><p class='description_h'>" + description + "</p></div>");

        return false;
    });
    $(".Right_side").on("click", ".description_h", function() {
        console.log("Hello")
        $(this).siblings().hide()
        // $(".description_h").toggle()
    })
});
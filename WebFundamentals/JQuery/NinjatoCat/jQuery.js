$(document).ready(function(){
    $(function() {
        $("img").click(function(){
          $(this).attr("src" , $(this).attr("alt"));
          return false;
        });
       });

});
$(document).ready(function(){
    // alert('hello');
    $(".red_b").click(function(){
        $(".red_p").css("color","red");
    });
    $(".slide_b").click(function() {
        $(".slide_img").slideToggle( "slow", function(){
        });
    });
    $(".append_b").click(function(){
        var $this = $(this);
        $this.toggleClass('append_b');
        if($this.hasClass('append_b')){
            $this.text('clickme!');}
            else {
                $this.text('YO! Stop');
            }
        });
    $(".ucme").click(function(){
        $(".ucme_p").show();
    });
    $(".lame").click(function(){
        $(".ucme_p").hide();
    });
    $(".fadetoggle").click(function(){
        $(".box1").fadeToggle();
        $(".box2").fadeToggle("slow");
        $(".box3").fadeToggle("3000");
    });
    $(".red").hover(function() {
        $(this).addClass("red_hover");
    }, function() {
        $(this).removeClass("red_hover");
    });
});
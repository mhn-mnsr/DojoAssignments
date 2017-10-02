$(document).ready(function(){
    for(var i = 1; i < 151; i++){
        $(".Pokemon_box").append("<img id='" + i + "' src=http://pokeapi.co/media/img/"+i+".png>")
        // console.log("http://pokeapi.co/media/img/"+i+".png");
    }
    $(document).on("click", "img", function(){
        $(this).click(function(){
            var proxyurl = "https://cors-anywhere.herokuapp.com/";
            var url = "http://pokeapi.co/api/v2/pokemon/" + $(this).attr("id");
            console.log($(this).attr("id"))

            $.get(proxyurl+url, function(res) {
                console.log(res);
                $(".Pokedex").append(res.abilities[0].ability.name)
                $(".Pokedex").append(res.abilities[1].ability.name)
                $(".Pokedex").append(res.height)
                $(".Pokedex").append(res.weight)
                var html_str = "";
                html_str += "<h4>Types</h4>"
                html_str += "<ul>";
                    html_str += "<li>" + res.abilities[0].ability.name + "</li>";
                    html_str+= "<li>" + res.abilities[1].ability.name + "</li>"
                html_str += "</ul>";
                html_str += "<h4>Height</h4>"
                html_str += "<ul>";
                    html_str += "<li>" + res.height + "</li>";
                html_str += "</ul>";
                html_str += "<h4>Weight</h4>"
                html_str += "<ul>";
                    html_str += "<li>" + res.weight + "</li>";
                html_str += "</ul>";

                $(".Pokedex").html(html_str);
            }, "json");
        });     
    });
});    
$(document).ready(function () {
    $("form").submit(function () {
        var searchCity = $("#search_city").val();           
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&&appid=18d7925e359a72c6c56e4108191b7eb6";
                    
        $.get(url, function(res) {
            var temperature = res.main.temp
            var cityName = res.name

            $(".search_result").append(temperature)
            $(".search_result").append(cityName)
            var html_str = "";
            html_str += "<h3>" + cityName + "</h3>"
            html_str += "<p>Temperature: " + temperature + "</p>"
            
            $(".search_result").html(html_str)
        }, 'json');

        return false;
    });
});
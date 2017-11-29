var http = require('http');

var fs = require('fs');
var server = http.createServer(function (request, response){
    // 
    console.log('client request URL: ', request.url);
    
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/car_image') {
        fs.readFile('./images/pictures_of_cars.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('./views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});

server.listen(7077);

console.log("Running in localhost at port 7077");

var http = require('http');
var fs = require('fs');
var path = require('path');
 
http.createServer(function (request, response) {
   
    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';
         
    var extantion = path.extname(filePath);
    var contentType = 'text/html';
    switch (extantion) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
		case '.jpeg':
            contentType = 'text/css';
            break;
		case '.png':
            contentType = 'text/css';
            break;
		case '.gif':
            contentType = 'text/css';
            break;
    }
     
    path.exists(filePath, function(exists) {
     
        if (exists) {
            fs.readFile(filePath, function(error, content) {
                if (error) {
                    response.writeHead(500);
                    response.end();
                }
                else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });
        }
        else {
            //fs.readFile('./error.html', function(error, content) );
			//response.writeHead(404);
			response.statusCode = 404;
            response.end();
        }
    });
     
}).listen(9999, '127.0.0.1');
 
console.log('Server running at http://127.0.0.1:9999/');



//C:\Users\�����\Desktop\���(node)
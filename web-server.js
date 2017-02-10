/*var http = require('http');
var fs = require('fs');
var url = require('url');
var contentTypes = {
    '.html': 'text/html',
    '.css': "text/css",
    '.js': 'application/javascript'
};
// Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   //filename = path.join(__dirname, uri);
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   //var contentType = contentTypes[path.extname(filename)];
   ;(function(pathname, contentTypes){
       fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': contentTypes});	
         
         // Write the content of the file to response body
         response.write(data.toString());		
      }
      // Send the response body 
      response.end();
   });
}(pathname, contentTypes));
   // Read the requested file content from file system
      
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');*/
//var $ = require('jQuery')
//var jsdom = require("jsdom");
//var window = jsdom.jsdom().parentWindow;
//var $ = require('jquery')(require("jsdom").jsdom().parentWindow);


// var jsdom = require("jsdom"); 
// var $ = require('jquery')(jsdom.jsdom().defaultView);

// //var $ = require("jquery/dist/jquery")(jsdom.jsdom().parentWindow);
// var window = jsdom.jsdom().parentWindow;
// var promise = new $.Deferred();
// promise.done(function(){
//     console.log('Starting game ..');
//      $('ul#foldertree').append('<li class="file">Test</li>');
// });
// promise.resolve();


//var fs = require('fs');

// var http = require('http');
// var path = require('path');
// var reload = require('reload');
// var bodyParser = require('body-parser');
// var logger  = require('morgan');

// fs.readdir('/', function (err, files) { // '/' denotes the root folder
//     if (err) throw err;

//     files.forEach( function (file) {
//         fs.lstat('/'+file, function(err, stats) {
//         if (!err && stats.isDirectory()) { //conditing for identifying folders
//             //$('ul#foldertree').append('<li class="folder">'+file+'</li>');
//             console.log(file);
//         }
//         else{
//             //$('ul#foldertree').append('<li class="file">'+file+'</li>');
//             console.log(file);
//         }
//         });
//     });

// });
// const testFolder = '/';
// const fs = require('fs');
// fs.readdir(testFolder, (err, files) => {
// files.forEach(file => {
//     console.log(file);
// });
// }) 

//var fs = require('fs');
// var compDirname = '/public/components';
// fs.realpath(__dirname + compDirname, function(err, path) {
//     if (err) {
//         console.log(err);
//      return;
//     }
//     console.log('Path is : ' + path);
// });
// fs.readdir(__dirname + compDirname, function(err, files) {
//     if (err) return;
//     files.forEach(f => { // files.forEach(function(f){
        //$('ul#foldertree').append('<li class="file">'+f+'</li>');
        // var para = document.createElement("li");
        // var node = document.createTextNode("This is new.");
        // para.appendChild(node);

        // var element = document.getElementById("ul#foldertree");
        // element.appendChild(para);
        // console.log('Files: ' + f);
        // fs.writeFile(__dirname +"/test.txt", f, function(err) {
        //     if(err) {
        //         return console.log(err);
        //     }

        //     console.log("The file was saved!" + f);
        // });  
        /*******************working*******************
        
        var stream = fs.createWriteStream("my_file.txt");
            stream.once('open', function(fd) {
            stream.write(f+"\n");
            //stream.write("My second row\n");
            stream.end();
            });
/********************working***************** */


//     });
// });

/*
//var fs = require('fs');
var path = require('path');

var diretoryTreeToObj = function(dir, done) {
    var results = [];

    fs.readdir(dir, function(err, list) {
        if (err)
            return done(err);

        var pending = list.length;

        if (!pending)
            return done(null, {name: path.basename(dir), type: 'folder', children: results});

        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    diretoryTreeToObj(file, function(err, res) {
                        results.push({
                            name: path.basename(file),
                            type: 'folder',
                            children: res
                        });
                        if (!--pending)
                            done(null, results);
                    });
                }
                else {
                    results.push({
                        type: 'file',
                        name: path.basename(file)
                    });
                    if (!--pending)
                        done(null, results);
                }
            });
        });
    });
};

var dirTree = ('/test');

diretoryTreeToObj(dirTree, function(err, res){
    if(err)
        console.error(err);

    console.log(JSON.stringify(res));
});
*/



/**
 * Importing Express Web server
 */
var express = require('express');
var app = express();

/**
 * Routing pages
 */
app.use(express.static('public'));
app.get('/public', function (req, res) {
   res.sendFile(__dirname + "/" + "index.html");
});




/** 
 * Creating file directory structure
 * */
var dirTree = require('directory-tree');
var tree = dirTree('./public/Data-Components', ['.html', '.css', '.js', '.less'], function(item, PATH) {
  return item;
});

/**
 * Reading from directory-tree and writing to json file
 */
var fs_ex = require('fs-extra');
fs_ex.outputJson('./public/com-data.json', tree, function (err) {
        //console.log(err)
});


/**
 * Trigering server
 */
var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port
   
console.log("Example app listening at http://%s:%s", host, port)
});



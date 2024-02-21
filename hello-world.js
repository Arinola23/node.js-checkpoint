//TASK 1
let http = require('http')
let fs = require('fs')

http.createServer(function(req,res) {
        //server status is 200, the content-type is text/plain
    res.writeHead(200, {'Content-type': 'text/plain'})
    
    //to print 'hello world'
    res.end('Hello World\n')
    //listen for the sever port 
}).listen(8081)

console.log('server running at http://127.0.0.1:8081')

//TASK 2
http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Hello Node!!!\n')
}).listen(3000)

console.log('server running at http://localhost:3000')

//TASK 3
fs.readFile('welcome.txt', function(err, data) {
    if(err) {
        return console.error(err)
    }
    console.log( data.toString())
})

//TASK 4
 
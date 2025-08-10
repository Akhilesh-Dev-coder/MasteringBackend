const fs = require("fs")
const http = require("http")
const path = require("path")

const server = http.createServer((req,res) => {
    let filePath = ""


    if (req.url === '/') {
        filePath = path.join(__dirname, "index.html");

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Server Error");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }else if(req.url === '/about'){
        filePath = path.join(__dirname,"about.html")

        fs.readFile(filePath,(err,data) => {
            if(err){
                res.writeHead(500,{"Content-Type": "text/plain"})
                return res.end("Server Error")
            }
            res.writeHead(200,{"Content-Type": "text/html"})
            res.end(data)
        })
    }else if(req.url === '/contact'){
        filePath = path.join(__dirname,"contact.html")
        fs.readFile(filePath,(err,data) => {
            if(err){
                res.writeHead(500,{"Content-Type": "text/plain"})
                return res.end("Server Error")
            }
            res.writeHead(200,{"Content-Type": "text/html"})
            res.end(data)
        })
        
    }else{
        res.writeHead(500,{"Content-Type":"text/plain"})
        return res.end("this is wrong address for the website page dude try again")
    }

})

server.listen(3000,() => {
    console.log("Server is running on http://localhost:3000")
})
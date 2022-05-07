const express = require('express');
const fs = require("fs");

const app = express();
const port = 8000;

app.get('/' , function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.get('/video' , function(req,res){
    const range = req.headers.range;
    if(!range){
        res.status(400).send("Requires Range header");
    }
    const videoPath = "ISM_B-Roll.mp4";
    const videoSize = fs.statSync("ISM_B-Roll.mp4").size;

    // Parse Range
    // Example : "bytes=32324-" // it means gives the video content after the 32324
    const CHUNK_SIZE = 10 ** 4; // 1 MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start+CHUNK_SIZE , videoSize-1);
    
    const contentLength = end - start + 1;
    const headers={
        "Content-Range" : `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges":"bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };

    // now response 
    res.writeHead(206 , headers);
    const videoStream = fs.createReadStream(videoPath , { start,end });
    videoStream.pipe(res);

});

app.listen(port, ()=>{
    console.log("http://localhost:8000/");
});
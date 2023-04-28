const http=require("http");  

const dotenv=require("dotenv");
dotenv.config();

const jsonData = {
    "Nodejs Information" : "Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine and uses an event-driven, non-blocking I/O architecture which makes it efficient and suitable for real-time applications that run across distributed devices."
}

const app=http.createServer((request,response)=>{
    if(request.url==="/html"){
        response.write("<p>Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine and uses an event-driven, non-blocking I/O architecture which makes it efficient and suitable for real-time applications that run across distributed devices.</p>");
        response.end();
    }
    else if(request.url==="/json"){
        const responseData = JSON.stringify(jsonData);
        response.write(responseData);
        response.end();
    }
})

const port=process.env.PORT;

app.listen(port,()=>{console.log(`Server is running in the port ${port}`)})
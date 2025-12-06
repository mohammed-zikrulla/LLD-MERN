// const http = require("http");

// const myServer = http.createServer((req, res)=>{
//     const url = req.url;
//     switch(url){
//         case '/': res.end("this is the home page")
//         break
//         case '/about': res.end("about page")
//         break
//         case '/contact': res.end("Contact page")
//         break
//         default : res.end("404 not Found")
//         break
//     }
// });

// myServer.listen(8000, ()=>{
//     console.log('server started');
// })

const http = require('http');
const fs = require('fs');
const urlPack = require('url');

const myServer = http.createServer((req, res) => {
    const url = req.url;
    const htmlFile = fs.readFileSync('index.html')

    const parsedUrl = urlPack.parse(url, true);

    switch (parsedUrl.pathname) {
        case '/': res.end("this is the home page")
            break;
        case '/about': res.end(htmlFile)
            break;
        case '/contact':
            {
                let contactName = parsedUrl.query.name;
                res.end(parsedUrl.query.name ? `Contact page for ${contactName}` : 'contact page')
                break;
            }
        default: res.end("404 not Found")
            break;
    }
    //basic custom logger using fs module

    const resData = `${Date.now()} ${req.url}\n`
    fs.appendFile('logs.txt', resData, (err, data) => {
    })
}
)

// listener port
myServer.listen(8000, () => {
    console.log('server started')
})
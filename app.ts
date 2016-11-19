import * as Express from 'express';


var App = Express();
App.use(Express.static(__dirname))  //static server 静态文件服务器  访问的是当前文件夹

App.use('/', (req, res, next) => {
    res.json(req.query);
    next();
});

App.listen(3000, () => {
    console.log(`server is runner on port 3000`)
});




// console.log('hello,i\'m app.js');
// var express = require('express');
// var app = express();
// app.use(express.static(__dirname + '/public'));



// app.listen(4000, () => {
//     console.log('server is runner on 4000');
// });

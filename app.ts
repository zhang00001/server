import * as Express from 'express';



import './model/index';  //引入数据库
import { KaiFanRouter } from './route/index';


var App = Express();
App.use('/kaifan', KaiFanRouter);   //开饭路由
App.use(Express.static(__dirname))  //static server 静态文件服务器  访问的是当前文件夹





App.listen(3000, () => {
    console.log(`server is runner on port 3000`)
});




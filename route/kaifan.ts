import { Router } from 'express';
import { KaiFanProxy } from '../service/index'

/**
 * [response 方法](http://expressjs.com/zh-cn/4x/api.html#res)
 */



var KaiFanRouter = Router();

KaiFanRouter.all('/getAllUser', async (req, res, next) => {
    var allUaer = await KaiFanProxy.getAllUser();
    res.json(allUaer);

});
KaiFanRouter.all('/getAllUserByUsername', async (req, res, next) => {
    var user = await KaiFanProxy.getAllUserByUsername(req.query.username);
    res.json(user);
})

KaiFanRouter.all('/login', async (req, res, next) => {
    //解析结构体
    //等价于 var username=req.query.username;
    //       var password=req.query.password;
    var {username, password} = req.query;
    if (username && password) {
        res.json({ issucess: true, date: req.query });
    }
});

export { KaiFanRouter };
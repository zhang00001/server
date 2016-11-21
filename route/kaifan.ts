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
    // if (username && password) {
    //     res.json({ issucess: true, date: req.query });
    // }
    //如果传入用户名和密码,则进行身份验证
    if (username && password) {
        //根据用户名查找用户，若用户密码正确，则登陆成功，  返回用户的信息，失败返回错误
        var user = await KaiFanProxy.getAllUserByUsername(username);
        if (user.get('password') == password) {
            res.json({ issucess: true, date: user })
        } else {
            res.json({ issucess: false, errMsg: "用户密码不正确" });
        }
        //如果没有传入用户名和密码，则返回错误的消息 参数不合法
    } else {
        res.json({ issucess: false, errMsg: '参数不合法' })
    }


});

export { KaiFanRouter };
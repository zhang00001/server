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
export { KaiFanRouter };
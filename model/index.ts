import * as Mongoose from 'mongoose';
import { config } from '../config';

//1 链接数据库
Mongoose.connect(config.db, (err) => {
    if (err) {
        console.error(err);
        process.exit();
    }

});

// 2.注册开饭用户的数据表

import './kaifan';

// 3.获取报表的实体
export var KaiFanUserModel = Mongoose.model('kaiFanUser');
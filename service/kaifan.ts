
import { KaiFanUserModel } from '../model/index';

/**
 * [es6 阮一峰 Promise 对象讲解](http://)
 */

export var getAllUser = () => {
    return KaiFanUserModel.find();
}

/**
 * 通过用户名来查找用户
 * {username}等价于{username:username}
 */

// export var getAllUserByUsername = (username: String) => {
//     return KaiFanUserModel.find({ username });

// }
export var getAllUserByUsername = (username: String) => {
    return KaiFanUserModel.findOne({ username });

}






import * as Mongoose from 'mongoose';
import { config } from '../config';
Mongoose.connect(config.db, (err) => {
    if (err) {
        console.error(err);
        process.exit();
    }

});
export { KaiFanModel } from './kaifan';
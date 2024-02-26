import app from './app.js';
import {connectDB} from './db.js';
import { BackendPORT } from './config.js';

connectDB();
app.listen(BackendPORT)
console.log('server on port', BackendPORT)

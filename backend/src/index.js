import app from './app.js';
import {connectDB} from './db.js';
import { BACKEND_PORT } from './config.js';

connectDB();
app.listen(BACKEND_PORT)
console.log('server on port', BACKEND_PORT)

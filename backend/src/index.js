import express from 'express';
const app = express();
import User from './db.js';

app.use(express.json());

app.listen(5000);
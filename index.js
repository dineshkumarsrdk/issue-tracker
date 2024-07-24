import express from 'express';
import ejslayouts from 'express-ejs-layouts';
import path from 'path';
import dotenv from 'dotenv';

import homeRouter from './src/routes/homeRoute.js';
import projectRouter from './src/routes/projectRoute.js';

dotenv.config();
// initializing express app
const app = express();

// setting-up ejs view engine and ejs-layout
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(),'src','views'));
app.use(ejslayouts);

app.use(express.static(path.join(path.resolve(),'public')));

// body-parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/project', projectRouter);
app.use('/', homeRouter);
// wild card route
app.use('*', (req, res)=>{
    res.status(404).render('404error.ejs', { title: 'Issue tracker | 404 error'});
});

app.listen(process.env.PORT, ()=>{
    console.log('Server listening on port: '+process.env.PORT);
});
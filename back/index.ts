import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as passport from 'passport';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as hpp from 'hpp';
import * as expressSession from 'express-session'

import { sequelize } from './models';

import { Request,Response, NextFunction } from 'express';

const app = express();
const prod: boolean = process.env.NODE_ENV === 'production'

app.set('port', prod ? process.env.PORT : 3065)
sequelize.sync({force: false})
    .then(() => {
        console.log('데이터베이스 연결 성공')
    })
    .catch((err: Error) => {
        console.log(err)
    })
if(prod) {
    app.use(hpp());
    app.use(helmet());
    app.use(morgan('combined'));
    app.use(cors({
        origin: /nodebird\.com$/,
        credentials: true,
    }));
} else {
    app.use(morgan('dev'));
    app.use(cors({
        origin:true,
        credentials:true,
    }))
}
app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
        httpOnly: true,
        secure: false,
        domain: prod ? '.nodebird.com' : undefined
    },
    name: 'rnbck'
}))
app.use(passport.initialize());
app.use(passport.session());
app.get('/', (req, res, next) => {
    res.send('react nodebird 백엔드 정상동작!');
});

app.listen(app.get('port'), () => {
    console.log(`server is running on ${app.get('port')}`)
})
    
const Koa = require('koa')
const router = require('./init/router')
const logger = require('koa-logger')
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const app = new Koa()
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    ctx.set('Access-Control-Allow-Credentials', true);
    await next();
 });
app.use(cors());
app.use(bodyParser());
app.use(logger())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('start')
})
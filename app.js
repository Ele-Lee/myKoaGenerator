    
const Koa = require('koa')
const router = require('./init/router')
const logger = require('koa-logger')
const app = new Koa()

app.use(logger())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('start')
})
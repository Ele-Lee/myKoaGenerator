const routerConfig = require('../routersConfig/index.js')
const Router = require('koa-router')
const router = Router()


Object.entries(routerConfig).map(([key, value]) => {
    let routerItem = new Router()
    setRoute(routerItem, value)
    router.use(`/${key}`, routerItem.routes(), routerItem.allowedMethods())
})
module.exports = router

function setRoute(routerItem, {type = 'get', path, cb, children}, parentPath) {
    path = (parentPath ? parentPath + path : path).replace('//', '/')
    routerItem[type](path, async (ctx) => cb(ctx))
    if(children instanceof Array) {
        children.map((child) => setRoute(routerItem, child, path))
    }
}
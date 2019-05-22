const Router = require('koa-router')
const fs = require('fs')
const path = require('path')

const router = Router()

Object.entries(getRoutes()).map(([key, value]) => {
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

function getRoutes() {
    const PATH = path.join(__dirname, '../routes')
    const fileList = fs.readdirSync(PATH)
    const configObj = {}
    fileList.map(file => {
        if(filterFile(file)) return
        configObj[getName(file)] = require(`${PATH}/${file}`)
    })
    return configObj


    function filterFile (filename) {
        const pattern = /i|Index.js$/
        return pattern.test(filename)
    }

    function getName (name) {
        return name.substring(0, name.lastIndexOf('.'))
    }
}
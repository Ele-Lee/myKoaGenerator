module.exports = {
    path: '/a',
    type: 'get',
    cb: (ctx) => {
        let html = `
            hello world
        `
        ctx.body = html
    },
    children:[{
        path: '/json',
        type: 'get',
        cb: (ctx) => {
            ctx.body = {
                a: 1,
                b: 2
            }
        }
    }]
}
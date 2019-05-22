module.exports = {
    path: '/direct_selling_manage',
    type: 'get',
    cb: (ctx) => {
        let html = `
            hello world
        `
        ctx.body = html
    },
    children:[
    {
        path: '/get_brand',
        type: 'get',
        cb: (ctx) => {
            ctx.body = {brand: 'ff'}
        }
    },
    {
        path: '/save_brand',
        type: 'post',
        cb: (ctx) => {
            ctx.body = {status: 'ok'}
        }
    },
    {
        path: '/get_business_card',
        type: 'get',
        cb: (ctx) => {
            ctx.body = {
                name: 'John',
                phone: '13542651211',
                weixin_account:  '1231add',
                job: 'singer',
                club_name: 'hahah',
                tag1: 'tag1',
                tag2: 'tag2',
                tag3: 'tag3',
            }
        }
    },
]
}
const koa = require("koa")
const mount = require("koa-mount")
const static = require("koa-static")
const fs = require('fs')

const app = new koa()


app.use(
    static(__dirname + '/source')
)

app.use(
    mount('/',async (ctx) => {
        ctx.body = fs.readFileSync(__dirname + '/source/index.htm',"utf-8")
    })
)

app.listen(4000)

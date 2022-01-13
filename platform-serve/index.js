const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router')();

// import { readFiles } from './GetYaml'

Router.post('/yml/fileJson', async (ctx, next) => {
  console.log(ctx)

  // ctx.type = 'text/html;charset=utf-8';
  // ctx.body = `我的名字是tom, 今年18岁了`;
})

app.use(Router.routes());


app.listen(8000)
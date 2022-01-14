const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router')();

const Yamls = require('./utils/getYaml');

const cors = require('koa2-cors');
app.use(cors({
  origin: (ctx) => {
    return 'http://localhost:3000';
  }
}))

const bodyParser = require('koa-bodyparser');
app.use(bodyParser())

Router.post('/yml/fileJson', async (ctx, next) => {
  try {
    const { readFiles} = Yamls
    const { files = null } = ctx.request.body
    if (Array.isArray(files)) {
      
      const _files = files.map(file => {
        return readFiles(file)
      })

      ctx.body = {
        success: true,
        data: {
          files: _files
        }
      }
    }
  } catch (err) {
    console.log(err)
  }
})

app.use(Router.routes());


app.listen(8000)
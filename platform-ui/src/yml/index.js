const files = require.context('./', true, /\.yml$/);


const components = files.keys().forEach((componentUrl) => {
  const path = componentUrl.replace(/^\.\/(.*)\.\w+$/, "$1");
  console.log(path)
})
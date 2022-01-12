const files = require.context('./', true, /\.yml$/);
const fs = require('fs')
// const path = require('path')
console.log(fs.readFileSync)


const components = files.keys().forEach((componentUrl) => {
  // const content = fs.readFileSync(componentUrl, 'utf-8')
  setTimeout(() => {
    
  }, 3000)
}, {})
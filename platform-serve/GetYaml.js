const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const readFiles = (fileName) => {
  const PATH = '../platform-ui/src/yml';
  const file = fs.readFileSync(`${PATH}/${fileName}.yml`, { encoding: 'utf8' })
  const json = yaml.load(file)

  console.log(json)
}

// const getPath = (fileName) => {
//   const PATH = '../platform-ui/src/yml';
//   return path.dirname(`${PATH}/${fileName}`);
// }


export {
  readFiles
}
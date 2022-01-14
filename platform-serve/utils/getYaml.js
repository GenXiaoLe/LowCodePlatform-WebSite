const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const readFiles = (fileName) => {
  const PATH = '../platform-ui/src/yml';
  const file = fs.readFileSync(`${PATH}/${fileName}`, { encoding: 'utf8' })
  const json = yaml.load(file)

  return json
}

const getPath = (fileName) => {
  const PATH = '../platform-ui/src/yml';
  return path.dirname(`${PATH}/${fileName}`);
}

module.exports = {
  readFiles,
  getPath
};
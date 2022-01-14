import { GetYaml } from '../common/api/yaml'
import { SetLocalStorage } from '../common/js/utils'

const files = require.context('./', true, /\.yml$/);

const components = files.keys().map((componentUrl) => {
  return componentUrl.replace('./', '') || componentUrl;
})

const componentsJson = []
GetYaml({ files: components }).then(res => {
  if (res.success) {
    const { files = [] } = res.data
    componentsJson.push(...files)    
    SetLocalStorage('PlatformComponents', componentsJson)
  }
}) 

export default components;

import Fetch from '../js/fetch'

const GetYaml = (data) => {
  return Fetch({
    method:"POST",
    url: '/yml/fileJson',
    data
  })
}

export {
  GetYaml
}
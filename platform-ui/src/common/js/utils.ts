const SetLocalStorage = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data))
}

const GetLocalStorage = (name: string) => {
  const data: any = localStorage.getItem(name)

  try {
    return JSON.parse(data);
  } catch (err) {
    console.error('解析错误')
  }
}

export {
  SetLocalStorage,
  GetLocalStorage
}
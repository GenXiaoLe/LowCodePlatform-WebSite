### 组件的yml相关文件夹 - meta

### yml的写法
- ""：不会转义字符串里面的特殊字符；特殊字符会作为本身想表示的意思
- 对象的表示：
  - 标准
  ```
    obj:
      name: 'a'
      age: 'b'
  ```
  - 行内
  ```
    obj: { name: 'a', age: 'b' }
  ```
  
- 数组的表示：
  - 标准
  ```
    list:
      - 'a'
      - 'b'
      - obj: { name: 'a', age: 'b' }
  ```
  - 行内
  ```
    list: ['a', 'b', obj: { name: 'a', age: 'b' }]
  ```
- 日期的表示： 2017/12/15
- 文档快的表示：用 --- 分隔开
  ```
    obj:
      name: 'a'
      age: 'b'

    ---

    list:
      - 'a'
      - 'b'
      - obj: { name: 'a', age: 'b' }
  ```

  ### 组件yml代码块包含的最小node

  ```
  name: "xxx" // 组件英文名
  title: "轮播图" // 组件中文名 
  props: // 组件的配置项options
    width: 100
    height: 100
  type: "1" // 组件的类型
  url: "" // 三方组件的url地址
  version: "1.0.0" // 组件的版本号
  author: "" // 组件作者
  ```
  
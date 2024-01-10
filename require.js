/***
 * CommonJS模块系统 
 * 使用module.exports和require关键字来导出和导入模块
 * 
 * require 导入模块
 * 
 * 1.对于自己创建的模块 导入路径写相对路径 
 * 2.js 和 json 文件导入时可以不用写后缀
 * 
 */
let text = require('./module')
console.log(text);
text.text1()
// text.text2()

let { myFunction } = require('./module')
myFunction()
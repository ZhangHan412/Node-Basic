/***
 * CommonJS模块系统 
 * 使用module.exports和require关键字来导出和导入模块
 * 
 * 导出方式
 * module.exports={}
 * 通过给module.exports赋值来导出一个对象、函数或其他值
 * 
 * module.export=xxx
 * 通过给module.exports赋值为一个单独的值来直接导出该值
 * 
 * exports.xxx=xxx
 * 直接给exports对象添加属性来导出一个对象、函数或其他值
 * 
 * 导入方式
 * 使用require关键字导入模块，并将导出的内容赋值给一个变量
 * 
 * 导入导出优先级
 * 在CommonJS模块系统中，module.exports的优先级高于exports对象
 * 当使用 module.exports 赋值时，会覆盖 exports 对象的任何属性
 * 如果同时使用了 module.exports 和 exports，则以 module.exports 的赋值为准
 * 
 */
// module.exports
module.exports = {
    name: 'zh'
}
module.exports = 'zh'
// require默认导入
const name = require('./CommonJS模块系统')
// 导入某个模块的特定属性或方法
const { name } = require('./CommonJS模块系统').obj

let user = 'zh'
exports.user = user

exports.obj = {
    name: 'zh',
    age: 25
}

exports.fun = function getUser() {
    console.log('导出一个方法');
}
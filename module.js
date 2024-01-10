/***
 * module.exports 可以暴露任意数据 
 * expores.xxx=xxx只能暴露一种
 * 
 * module 与 exports 之间的关系
 * exports=modoule.exports={}
 * 两者导出的内容都是在一个对象内
 * 
 */
function text1() {
    console.log('text1');
}
function text2() {
    console.log('text2');
}
// 暴露一个
// module.exports = text1
// 暴露多个
// module.exports = {
//     text1,
//     text2
// }
// 第二种导出方法是
exports.text1 = text1
exports.myFunction = function () {
    console.log('myFunction');
}
console.log(module.exports === exports);
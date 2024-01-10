/***
 * ES6的模块系统使用的是 export 和 import 来导入导出模块
 * 
 * 导出方式
 * 通过 export 关键字导出一个对象、函数或其他值
 * 
 * 具名导出 和 默认导出
 * 导入时必须先导入默认模块，然后再导入具名模块
 * 通常定义方法的时候会习惯带上方法名字 这样的叫做具名导出
 * 不定义方法名字的导出叫做 默认导出
 * 
 * 也可以在导出的时候起别名
 * export { xxx as xxx1 }
 * 
 * 导入方式
 * 使用 import 关键字导入模块，并将导出的内容赋值给一个变量
 * 
 * 导入的时候同样可以起别名
 * import { xxx as xxx } from '...'
 * 
 * 针对同一文件的多个类型的导出内容 可以按需导入某些模块
 * import {xxx,xxx} from '...'
 * 
 * 导入所有内容
 * 如果需要导入一个模块的所有内容，可以使用 * 来代替具名模块名称，这被称为命名空间导入
 * import * as 命名空间 from '...'
 * 意思是将地址内的所有导出内容存储到命名空间内 我们可以通过命名空间来访问导入文件内的所有导出数据
 * 
 */

// 默认导出一个变量
const name = 'zh'
//export default name
// 导入
import names from './ES6模块导入导出'


export const age = 25
// 具名导出
export function myFunction() {
    console.log('ES6的导入导出方式');
}
// export default function () {
//     console.log('默认导出的方法');
// }
// 默认导出
export default {
    message: '默认导出的变量类型',
    myCalss: class {
        constructor() {
            console.log('默认导出的类');
        }
    },
    myObject: {
        message: '默认导出的对象'
    }
}
// 同时导入默认导出和具名导出
import myModule, { myFunction } from './ES6模块导入导出'


const obj = {
    name: 'zh'
}
export { obj as obj1 }

import name from './ES6模块导入导出'

import { obj as obj1 } from './ES6模块导入导出'

import { obj, myFunction } from './ES6模块导入导出'

// 一次性导入上面所有内容
import * as myModules from './ES6模块导入导出'
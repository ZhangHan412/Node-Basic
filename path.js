/***
 * path 路径操作
 * 
 * path.resolve(绝对路径,相对路径) 绝对路径拼接
 * 
 * 
 */
const fs = require('fs')
const path = require('path')

fs.appendFile(__dirname + '/同步写入.txt', '利用dirname拼接路径写入\r\n', err => {
    if (err) {
        console.log(err);
        return
    }
    console.log('追加成功');
})
path.resolve(__dirname, 'fs.js')
console.log(path.resolve(__dirname, 'fs.js'));

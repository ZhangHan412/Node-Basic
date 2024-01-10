/****
 * fs 文件操作
 * 
 * 文件写入
 * 
 * fs.writeFile('文件路径','写入内容',错误回调函数) 异步文件写入
 * 
 * fs.writeFileSync('文件路径','写入内容') 同步文件写入
 * writeFile 和 writeFileSync 方法会将新写入的内容覆盖之前文件内的内容
 * 
 * appendFile('文件路径','写入内容',错误回调函数) 异步追加写入
 * 
 * appendFileSync('文件路径','写入内容') 同步追加写入
 * 
 * createWriteStream('文件路径') 文件流式写入
 * 什么叫做流式写入：
 * 流式写入就类似于创建了一个会话通道 我们可以通过创建这个写入流对象
 * 然后在这段时间内对某个文件持续性写入 等不需要的时候关闭即可
 * 而writeFile是我们写入一次就需要打开一次文件 对计算机的资源会产生一定的消耗
 * 
 * 场景：
 * 频繁对文件进行写入 采用流式写入
 * 不频繁对文件进行写入 采用writfile即可
 * 
 * 
 * 文件读取
 * 
 * redFile('文件路径','配置项',读取数据以及错误回调函数) 异步读取
 * 
 * redFileSync('文件路径','配置项') 同步读取
 * 
 * createReadStream('文件路径') 流式读取
 * 
 * unlink('路径',错误回调) 异步文件删除
 * 
 * unlinkSync('路径',错误回调) 同步删除
 * 
 * rm('路径',错误回调) 异步文件删除
 * 
 * rmSync('路径',错误回调) 同步删除
 * 
 * __dirname 是一个全局变量 它指的是当前模块文件所在目录的完整路径，不包括文件名和文件扩展名
 * __filename 指的是当前模块文件的完整路径 包括文件名和文件扩展名 他指的是一个绝对路径
 * 
 */
const fs = require('fs')
// 异步写入文件
// fs.writeFile('./user.txt', '你干嘛', err => {
//     // err 写入失败：错误对象 写入成功：null
//     if (err) {
//         console.log('写入失败', err);
//         return
//     }
//     console.log('写入成功');
// })
// console.log('写完了么?');
// fs.writeFileSync('./同步写入.txt', '哈哈哈哈');
// console.log('写完了');

// 追加写入
// fs.appendFile('./user.txt', '\r\n我是追加写入的', err => {
//     if (err) {
//         console.log('写入错误', err);
//         return
//     }
//     console.log('写入成功');
// })

//fs.appendFileSync('./同步写入.txt', '\r\n我是同步追加写入的方法')

// 流式写入 创建写入流对象
// const ws = fs.createWriteStream('./流式写入.txt');
// // 写入
// ws.write('唱\r\n');
// ws.write('跳\r\n');
// ws.write('Rap\r\n');
// // 关闭通道 （可写可不写） 因为当脚本执行结束后 脚本资源就会被计算机回收 通道就自然关闭了
// ws.close()

// 文件读取
// 异步
// fs.readFile('./user.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('读取失败', err);
//         return
//     }
//     console.log(data);
// })
// 同步
// let data = fs.readFileSync('./同步写入.txt', 'utf-8');
// console.log(data);
// 流式读取
// const rs = fs.createReadStream('./流式写入.txt')
// rs.on('data', chunk => {
//     console.log(chunk.toString());
// })
// rs.on('end', () => {
//     console.log('读取完毕');
// })

const redData = fs.readFileSync('./同步写入.txt');
fs.writeFileSync('./普通同步写入文件.txt', redData)

const streamData = fs.createReadStream('./流式写入.txt')
const writeData = fs.createWriteStream('./流式写入1.txt')
streamData.on('data', chunk => {
    writeData.write(chunk)
})

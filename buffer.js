/****
 * Buffer 缓冲区
 * buffer 是一个类似数组的对象 用于表示固定长度的字节序列
 * 也可以理解为buffer就是一段固定长度的内存空间 用于处理二进制数据
 *
 * buffer大小固定 不能调整 这点与数组不同
 * buffer性能较好 可以直接对计算机内存进行操作
 * 每个元素大小为一个字节 byte 8个bit == 1个byte
 *
 * 创建buffer
 * 1.alloc
 * 2.allocUnsafe
 * 3.from
 */
// alloc创建buffer
const buffer = Buffer.alloc(10)
//console.log(buffer);

// allocUnsafe创建Buffer 
const buffer2 = Buffer.allocUnsafe(100)
console.log(buffer2);

// from创建Buffer
const buffer3 = Buffer.from('hello');
console.log(buffer3);
console.log(buffer3[1]);
console.log(buffer3[1].toString(2));
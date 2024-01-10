/***
 * 
 * mongodb 数据库
 * 
 * 集合：类似于mysql中的表 一个数据库可以有多张表
 * 文档：每个表里面的行数据 一个集合里面可以有很多条行数据 每行对应一条
 * 
 * 基本命令
 * 
 * show dbs 展示当前服务器下的所有数据库
 * 
 * use 数据库名 使用某个数据库 如果没有这个数据名则自动创建并进入
 * 
 * db 显示当前所在哪个数据库
 * 
 * use 数据库名
 * db.dropDatabase() 删除数据库 需要先切换到你要删除的数据库
 * 
 * 集合命令
 * db.createCollection('集合名字') 
 * 
 * show collections 显示当前数据库下的所有集合
 * 
 * db.集合名.drop() 删除某个集合
 * 
 * db.集合名.renameCollection('name') 集合重命名 
 * 
 * 文档命令
 * db.集合名.insert({name:'zh'}) 插入数据
 * 
 * db.集合名.find() 查看当前集合下的所有文档
 * db.集合名.find({age:'25'}) 查看某条
 * 
 * db.集合名.updata({查询条件},{$set:{更新操作}})
 * db.集合名.updata({name:'Zh'},{$set:{age:'26'}}) 更新数据 
 * 
 * db.集合名.remove({name:'zh'})
 * 
 * 有关查询条件的 条件控制
 * 1.小于 $lt 大于$gt >= $gte <= $lte !== $ne
 * find({字段名:{$lt:值})
 * 
 * 2.逻辑运算
 * $or 或 $and 与
 * find({$or:[{age:18},{age:20}]}) 
 * 
 */
// 连接数据库
const mongoose = require('mongoose')

// 设置 strictQuery  为 true
mongoose.set('strictQuery', true)

// 连接mongodb数据库 mongodb://127.0.0.1:27017/数据库名字
mongoose.connect('mongodb://127.0.0.1:27017/blog')
// .then(() => {
//     console.log('连接成功');
// }).catch(err => {
//     console.log('连接错误');
// })


// 数据库连接后的回调
mongoose.connection.on('open', () => {
    console.log('连接成功');
    // 创建文档结构对象
    let userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true, // 必填
            unique: true // 设置独一无二的值 需要重建集合才行
        },
        age: {
            type: Number,
            default: 25 // 默认值
        },
        gender: {
            type: String,
            enum: ['男', '女'] // 枚举值 设置的值必须是数组中的
        },
    })
    // 创建模型 参数 1.数据库集合名字 2.文档结构对象
    let UserModel = mongoose.model('text', userSchema)

    // 插入数据
    // UserModel.insertMany([{
    //     name: 'zzzhhh',
    //     age: 24
    // }]).then((data) => {
    //     console.log(data);
    // }).catch((err) => {
    //     console.log(err);
    // })

    // 删除数据
    // UserModel.deleteOne({
    //     name: 'zzzhhh'
    // }).then(data => {
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // })

    // 更新数据 updateOne 更新莫一条 updateMany 根据查询条件批量更新
    // UserModel.updateOne({ name: 'zzzhhh' }, { age: 25 })
    //     .then(data => {
    //         console.log(data);
    //     }).catch(err => {
    //         console.log(err);
    //     })

    // 读取文档 findOne
    // UserModel.findOne({ name: 'zzzhhh' }).then(data => {
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // })

    // 也可以根据 id 来读取文档
    UserModel.findById('659aa91680bbbe0004a5d615').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })

    // 批量获取 find 指定查询条件则获取所有该条件的数据 没有指定的话 则查询出来所有数据
    UserModel.find({ name: 'zzzhhh' }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })

})
mongoose.connection.on('error', () => {
    console.log('连接错误');
})
mongoose.connection.on('close', () => {
    console.log('连接关闭');
})
// 关闭连接
// mongoose.disconnect()

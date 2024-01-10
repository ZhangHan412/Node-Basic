/***
 * 
 * express 路由
 * 什么是路由
 * 官方定义：路由确定了应用程序如何响应客户端对特定服务端点的请求
 * 说白了就是 客户端和某些特定服务端的桥梁 通过路由来建立关系
 * 
 * 获取路由参数
 * 路由参数指的是 URL 路径中的参数
 * req.params
 * 
 * express 的响应设置
 * express的响应设置兼容http模式的方式
 * 
 * res.redirect() 重定向
 * 
 * express 中间件
 * 什么是中间件
 * 中间件本质就是一个回调函数 它可以在请求到达路由处理程序之前或之后执行一些操作
 * 中间件函数接收三个参数(req,res,next)
 * next 指的是下一个中间件函数
 * 中间件函数可以执行一些操作，然后调用 next 函数，将控制权传递给下一个中间件函数
 * 如果中间件函数不调用 next 函数，请求处理过程将被终止，并且不会继续执行后续的中间件函数或路由处理程序
 * 
 * 中间件的作用
 * 使用函数封装公共操作 
 * 中间件可以对请求和响应对象进行修改，也可以终止请求/响应周期
 * 
 * 中间件类型
 * 全局中间件
 * 路由中间件
 * 
 * 注册中间件
 * app.use((req,res,next)=>{}) 可以注册全局中间件
 * 当使用 app.use 注册中间件时，该中间件将被应用程序的所有请求处理
 * 也就是说当我们访问任意一个路由地址前 都会访问以下这个中间件
 * 
 * app.use('路由地址',(req,res,next)=>{})注册路由级别中间件
 * 
 * 当我们在任意中间件的结尾加上了 next() 后 我们当前的地址请求完毕后就会传递给下一个中间件函数
 * 如果当前路由或者中间件函数不调用 next 函数，请求处理过程将被终止，后续的中间件函数或路由处理程序将不会执行
 * 
 * 总结来说，app.use() 方法是 Express 中用于注册中间件的方法
 * 它可以用于注册 全局中间件 和 路由级中间件  
 * 并且允许在请求到达路由处理程序 之前 或 之后 执行一些操作
 * 中间件函数可以修改请求和响应对象 并通过调用 next() 函数将控制权传递给下一个中间件函数。
 * 
 */
const express = require('express')
const app = express()

// 导入路由模块
const homeRouter = require('./router/home')

// 使用路由模块
app.use(homeRouter)

// 全局中间件
app.use((req, res, next) => {
    console.log('全局中间件');
    next()
})
// 静态资源中间件
app.use(express.static(__dirname + './pubilc'))
// 路由中间件
app.use('/user', (req, res, next) => {
    console.log('我是user路由');
    res.send('user路由')
})
app.get('/', (req, res) => {
    // 1.获取请求报文内容
    console.log(req.method, '请求方法');
    console.log(req.url, '请求地址');
    console.log(req.httpVersion, 'HTTP版本');
    console.log(req.headers, '请求头');
    console.log(req.get('host'), '获取主机地址');
    // 获取请求报文的查询参数
    console.log(req.query);

    // 在express中我们的响应内容使用 send方法 它可以帮我们会自动设置适当的响应头
    // res.setHeader('content-type', 'text/html;charset=utf-8')
    // res.end('你访问的是 / 路由地址')

    // 设置响应内容
    res.statusCode = 404
    res.statusMessage = '两年半'
    // 设置响应头
    res.set('唱', '跳')
    // 设置响应体
    res.send('你访问的是 / 路由地址')
    // 链式操作
    res.statusCode(404).statusMessage('蔡徐坤').set('唱', '跳').send('再看一眼就会爆炸')
})
app.get('/:home', (req, res) => {
    // 获取路由参数
    let params = req.params.home
    if (params == 'baidu') {
        res.redirect('http://www.baidu.com')
        res.send()
        return
    }
    res.send(`你访问的是  ${req.params.home}  路由地址`)
})
// 表示的是当你访问的路径在路由列表内没有任何一个能匹配上的话 就会走这个
app.all('*', (req, res) => {
    console.log('404 Not Found');
})
app.listen(3000, () => {
    console.log('express框架3000端口已启动');
})
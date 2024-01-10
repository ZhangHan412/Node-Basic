/****
 * 
 * session 
 * session 是保存在 服务器的一块数据 保存当前访问用户的相关信息
 * 
 * session 的作用
 * 实现会话控制 识别当前访问的用户身份 快速获取当前用户的相关信息
 * 
 * session 的工作流程
 * 客户端向服务端发送请求 服务端校验数据 数据无误后 服务器会给当前用户创建一个对象 也就是 session
 * 这个session会保存当前用户的信息 并且会生成一个独一无二的 session_id 会话id
 * 然后服务端会把这个 session_id 以响应报文的形式 在响应头中返回给客户端 
 * 浏览器将这个 session_id 存储在本地 后续在有访问服务器的时候 就会在请求头上携带这个session_id
 * 然后服务端会去存储 session 的大容器内 查询每个session对象 寻找能够匹配这个session_id的对象 然后确认用户身份返回相应内容
 * 
 */
const express = require('express')
const session = require('express-session')
const app = express()
// 设置session中间件
app.use(session({
    name: 'sid',// 设置 session 的 name
    secret: '',// 签名 密钥
    saveUninitialized: false,// 是否每次请求都设置一个session
    resave: true,// 是否每次请求时重新保存session
    cookie: {
        maxAge: 6000,// 设置 session 过期时间
    }
}))

app.get('/', (req, res) => {
    res.send('/')
})
app.get('/login', (req, res) => {
    if (req.query.name === 'zh' && req.query.psw === '123456') {
        // 设置 session
        req.session.username = 'zh'
    }
})
app.listen(3000)
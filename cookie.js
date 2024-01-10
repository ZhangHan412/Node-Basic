/****
 * 
 * cookie 
 * cookie 是 HTTP 服务器发送给用户浏览器并存储在本地的一小块数据
 * cookie 是按照域名划分保存的
 * 
 * cookie 特点 
 * 浏览器向服务器发送数据的时候 会自动将当前域名下的cookie设置到请求头中 然后传递给服务器
 * 
 * cookie 的运行流程
 * 浏览器向服务器发送请求后 服务器验证数据内容确认无误 然后将cookie以响应报文的形式返还给浏览器
 * 在该响应报文中 有一个叫做 set-cookie 的响应头 该属性就存储了服务端返回给我们的 cookie
 * 然后浏览器解析该响应报文后将这个 cookie 存储到本地
 * 有了cookie后 后续向服务器发送请求的时候 就会自动携带这个域名下的 cookie
 * 然后服务器去解析这个cookie得知是哪一个客户端发起的 然后返回对应客户端的内容
 * 
 */

const express = require('express')
const cookie = require('cookie-parser')
const cookieParser = require('cookie-parser')
const app = express()

// 使用cookie-parser中间件 获取cookie 内容
app.use(cookieParser())

app.get('/set-cookie', (req, res) => {
    // 设置cookie
    res.cookie('name', 'zhanghan', {
        // 设置cookie的生命周期
        maxAge: 60000,// cookie 时效
    })
    res.send('set-cookie路由')

})
app.get('/lougout', (req, res) => {
    // 删除cookie
    res.clearCookie('name')
})
app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies, '当前域名下的cookie')
})
app.listen(3000)
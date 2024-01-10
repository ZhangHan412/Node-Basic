/***
 * 
 * token 
 * token 是服务端生成并返回给 HTTP 客户端的一串加密字符串 里面包含着用户的信息
 * 
 * token 作用
 * 实现会话控制 可以识别当前访问者的用户信息 
 * 
 * token的工作流程
 * 客户端给服务端发送请求 服务端校验数据确认无误后 创建一个token 
 * 然后将这个token返回给客户端 当下次客户端访问服务端的时候需要 手动 在请求报文中携带这个token
 * 然后服务端接收token 解析token 从中获取到用户的信息 进行数据查询 确认是哪一个用户后将该用户所请求的内容返回给该客户
 * 
 * token 特点
 * 1.服务端压力小 数据存储在客户端
 * 2.相对安全 数据是经过服务端加密后的 
 * 3.拓展性强 服务间可以共享
 * 
 * jsonwebtoken
 * 用于生成 JWT 字符串
 * 
 * jwt
 * 用于将JWT字符串还原成json对象
 * 
 * 使用jwt创建token
 * let token=jwt.sign({用户数据,加密字符串,配置对象})
 * 
 */
const fs = require('fs')
const express = require('express')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const app = express()
let token = ''
let publicKey = fs.readFileSync('./auth/publicKeyPem.pem', 'utf-8')
let privateKey = fs.readFileSync('./auth/privateKeyPem.pem', 'utf-8')
app.get('/login', (req, res) => {
    token = jwt.sign({
        username: 'zh'
    }, privateKey, {
        algorithm: 'RS256', // RSA 非对称加密
        expiresIn: 60, // 时效 单位秒
    })
    res.send(token)
    console.log(token);
})
app.get('/getUser', expressJwt({
    secret: publicKey,
    algorithms: ['RS256'],
    getToken: req => {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
    }
}), (req, res) => {
    // // 校验token
    // jsonwebtoken.verify(token, publicKey, (err, data) => {
    //     console.log(data);
    //     console.log(token);
    //     res.send(data)
    // })
})
app.listen(3000)

/****
 * 
 * HTTP 请求报文的基本组成部分（客户端 到 服务端）
 * 1.请求行
 * GET https://www.baidu.com/ HTTP/1.1
 * 分别对应的是 请求方法 请求地址URL HTTP版本号
 * 请求方法：
 * GET 主要用于获取数据
 * POST 主要用于新增数据
 * PUT/PATCH 主要用于更新数据
 * DELETE 主要用于删除数据
 * 
 * https://node.js.com:300/search?keyword=xxx
 * 
 * https 协议名
 * node.js.com 主机名
 * 300 端口号
 * /search 请求路径 指的是该主机下某一条资源路径
 * ?keyword=xxx 查询字符串
 * 
 * 2.请求头
 * HTTP的请求头是由一系列的 键值对 组成的 用来记录浏览器的相关信息
 * 
 * 3.请求体
 * 
 * HTTP 响应报文结构（服务端 到 客户端）
 * 1.响应行
 * HTTP/1.1 200 ok
 * 分别对应的是：
 * HTTP版本号 响应状态码 响应状态描述
 * 
 * 常见响应状态码：
 * 200 请求成功
 * 403 请求禁止
 * 404 找不到资源
 * 500 服务器错误
 * 
 * 具体 5 大类响应状态码：
 * 1xx 信息响应
 * 2xx 成功响应
 * 3xx 重定向信息
 * 4xx 客户端错误响应
 * 5xx 服务端错误响应
 * 
 * 常见响应状态描述
 * 200 OK
 * 403 Forbidden
 * 404 Not Found
 * 500 internal Server Error
 * 
 * 2.响应头
 * Content-Type:text/html;charset=utf-8 声明响应体的内容的格式以及字符集
 * Content-Length 响应体长度 单位字节
 * 响应头内容可以任意设置 但是要切合实际以及项目需要
 * 
 * 3.响应体
 * 常见的响应体格式：
 * HTML
 * CSS 
 * JS
 * 图片 视频
 * json
 * 
 * 
 * 
 */

const http = require('http')
const url = require('url')

// 创建服务对象
const app = http.createServer((req, res) => {
    // req.method 获取请求方法 为什么会打印两次GET 是因为还有网页的图标请求
    console.log(req.method);
    // req.url 获取请求地址 只包含 url 中的路径和查询字符串
    console.log(req.url);
    // 获取请求路径以及查询参数
    let reqUrl = url.parse(req.url, true)
    console.log(reqUrl);
    console.log(reqUrl.pathname, '请求路径');
    // 参数
    let query = reqUrl.query
    // query: [Object: null prototype] {'参数在这里'},
    console.log(query);

    // req.httpVersion 获取http版本
    console.log(req.httpVersion);
    // req.headers 获取请求头
    //console.log(req.headers);

    // 设置响应内容
    // 设置响应状态码
    res.statusCode = 404
    // 设置响应状态描述
    res.statusMessage = 'ERROR'
    // 设置允许跨域的域名 * 代表所有
    res.setHeader('Access-Control-Allow-Origin', '*')
    // 允许的 header 类型
    res.setHeader('Access-Control-Allow-Headers', 'x-requested-with,Authorization,token,content-type')
    // 跨域允许的请求方式
    res.header('Access-Control-Allow-Methods', 'POST,GET')
    // 设置响应头 防止中文乱码 text/html;charset=utf-8 表示返回的文本内容是 html 字符集为 utf-8
    res.setHeader('content-type', 'text/html;charset=utf-8')
    // 设置响应体 write
    res.write('write响应体')
    // end 设置响应体 并结束响应 end()必须要有 且只能有一个
    res.end()
})
// 指定服务的端口号
app.listen(3000, () => {
    console.log('3000端口服务已启动');
})
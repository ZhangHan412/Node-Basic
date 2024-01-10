const express = require('express')

const router = express.Router()

router.get('/home', (req, res, next) => {
    res.send('Home 模块中的 home 路由')
})

module.exports = router
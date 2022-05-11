/*
 * @Author: 顾清曦
 * @Date: 2022-05-11 10:42:40
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-11 11:12:30
 * @FilePath: \gshop-client\src\server\server.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.get('/cartlist', (request, response) => {

    response.send('ok')
})
app.listen(8000, () => {
    console.log('8000端口')
})
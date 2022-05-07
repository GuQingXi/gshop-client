/*
 * @Author: 顾清曦
 * @Date: 2022-05-06 22:10:31
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-07 13:29:25
 * @FilePath: \gshop-client\src\mock\mockServer\index.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
// 利用mockjs提供mock接口
import Mock from 'mockjs';
import floor from '../floors.json'
import recomments from "../recomments.json";
import ranks from "../ranks.json";
import likes from "../likes.json";

//提供今日推荐接口  第一个参数是路径 
Mock.mock('/mock/recomments', { code: 200, data: recomments })
// 提供楼层接口
Mock.mock('/mock/floors', { code: 200, data: floor })

// 提供热卖排行接口
Mock.mock('/mock/ranks', { code: 200, data: ranks })
// 获取猜你喜欢接口
Mock.mock('/mock/likes', { code: 200, data: likes })
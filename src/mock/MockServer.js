
import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/sort/brand',{code:0,data:data.brand})
Mock.mock('/sort/category',{code:0,data:[data.categorys,data.cate_list]})

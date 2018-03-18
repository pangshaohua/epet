/*
当前项目接口ajax请求模块
 */
import ajax from './ajax'

/*
获取品牌
 */
export const reqBrand = () => ajax('/sort/brand')
/*
获取品牌和列表
 */
export const reqCategorysAndList = () => ajax('/sort/category')
/*
获取首页信息
 */
export const reqHomeMessage = () => ajax('/home')

/*
获取所有品牌
 */
export const reqTotalBrand = () => ajax('/totalBrand')






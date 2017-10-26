/**
 * Created by yinshipeng on 2017/10/26.
 */
import http from '../http'

/**
 * 获取公司名称
 * @param company_name
 * @returns {*}
 */
export const queryByCompanyName = function(company_name){
    const url = '/company/queryByCompanyName?company_name='+company_name
    return http.get(url)
}

/**
 * 登陆接口
 * @param param
 * @returns {*}
 */
export const loginServ = function(param){
    const url = '/franchiseeCompanyLogin'
    return http.post(url,param)
}

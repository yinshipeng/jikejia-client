/**
 * Created by yinshipeng on 2016/10/28.
 * 如果要定义一个函数是用作工具类，命名方式为 methodNameUtil，然后注册到commonUtils对象中
 */
import _ from 'lodash'

/**
 * 判断是否为空
 * @param param
 * @returns {boolean}
 */
function isNotEmpty(param) {
    if (_.isUndefined(param)) return false
    if (_.isNaN(param)) return false
    if (_.isNumber(param)) return true
    if (_.isEmpty(param)) return false
    return true
}


/**
 * 根据字段过滤
 * @param queryString
 * @param prop
 * @returns {function(*)}
 */
function createStateFilterProp(queryString, prop) {
    return (state) => {
        return (state[prop].indexOf(queryString.toLowerCase()) === 0);
    };
}

export default {
    isNotEmpty,
    createStateFilterProp
}


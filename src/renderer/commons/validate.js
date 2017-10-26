/**
 * Created by yinshipeng on 2017/4/25.
 */

import utils from './utils'
/**
 * 验证长度,如果没有最小值和最大值，默认长度128
 * @param rule
 * @param value
 * @param callback
 */
export function validatorByLength(rule, value, callback) {
  let message;
  if (utils.isNotEmpty(value)) {
      if(utils.isNotEmpty(rule.min) && utils.isNotEmpty(rule.max)){
         if(value.length <= rule.max && value.length >= rule.min){
             callback()
         } else{
             message = `长度必须在${rule.min}到${rule.max}个字符以内`
         }
      }else if(utils.isNotEmpty(rule.max) && !utils.isNotEmpty(rule.min)){
          if(value.length <= rule.max){
              callback()
          }else{
              message = `长度必须在${rule.max}个字符以内`
          }
      }else if(utils.isNotEmpty(rule.min) && !utils.isNotEmpty(rule.max)){
          if(value.length >= rule.min ){
              callback()
          }else{
              message = `长度必须至少为${rule.min}个字符`
          }
      }else{
          message = `长度必须在128个字符以内`
      }
      callback(new Error(message))
    }else{
      callback()
  }

}


/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-27 09:54:40
 * @LastEditTime: 2021-12-27 11:02:12
 * @LastEditors: zaq
 * @Reference: 
 */
/**
 * 
 * @returns 判断是否为移动端
 */
export const browserRedirect = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
}
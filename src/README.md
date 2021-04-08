<!--
 * @Author: your name
 * @Date: 2021-04-08 21:35:48
 * @LastEditTime: 2021-04-08 22:17:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \newToDo\src\README.md
-->
# 面向对象、类的继承、横向切割程序 - 设计方案
 1. 程序进行分类
    外层：浏览器的时间 → 调用方法 → 事件处理函数的绑定
    操作数据：addTodo、removeTodo、toggleComplete 子类
    操作DOM：addItem、removeItem、changeCompleted 基类 基类暴露给子类
    管理模板：todoView → 接收参数
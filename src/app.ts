/*
 * @Author: your name
 * @Date: 2021-04-08 21:40:58
 * @LastEditTime: 2021-04-08 21:51:12
 * @LastEditors: Please set LastEditors
 * @Description: 模块 立即执行函数
 * @FilePath: \newToDo\src\app.ts
 */
import { ITodoData } from './js/typings'
    ; ((doc) => {
        const oInput: HTMLInputElement = document.querySelector('input')

        const oAddBtn: HTMLButtonElement = document.querySelector('button')

        const oTodoList: HTMLElement = document.querySelector('.todo-list')

        const todoData: ITodoData[] = []

        const init = (): void => {
            bindEvent()
        }
        function bindEvent(): void {

        }
        init()
    })(document)

/*
 * @Author: your name
 * @Date: 2021-04-08 22:13:22
 * @LastEditTime: 2021-04-08 22:30:13
 * @LastEditors: Please set LastEditors
 * @Description: 操作DOM
 * @FilePath: \newToDo\src\js\TodoDom.ts
 */
import { TodoTemplate } from './templates'
import { ITodoData } from './typings'
export class TodoDom extends TodoTemplate {
    private todoWrap: HTMLElement
    constructor(todoWrap: HTMLElement) {
        super()
        this.todoWrap = todoWrap
    }
    protected addItem(todo: ITodoData) {
        const oItem: HTMLElement = document.createElement('div')
        oItem.className = 'todo-item'
        oItem.innerHTML = this.todoTemplate(todo)
        this.todoWrap.appendChild(oItem)
    }
}
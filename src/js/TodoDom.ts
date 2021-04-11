/*
 * @Author: your name
 * @Date: 2021-04-08 22:13:22
 * @LastEditTime: 2021-04-11 13:39:18
 * @LastEditors: Please set LastEditors
 * @Description: 操作DOM
 * @FilePath: \newToDo\src\js\TodoDom.ts
 */
import { TodoTemplate } from './templates'
import { ITodoData } from './typings'
import { findParentNode } from './utils'
export class TodoDom extends TodoTemplate {
    private todoWrap: HTMLElement
    constructor(todoWrap: HTMLElement) {
        super()
        this.todoWrap = todoWrap
    }
    protected initList(todoData: ITodoData[]) {
        if (todoData.length) {
            const oFrag: DocumentFragment = document.createDocumentFragment()
            todoData.map((todo: ITodoData) => {
                const oItem: HTMLElement = document.createElement('div')
                oItem.className = "todo-item"
                oItem.innerHTML = this.todoTemplate(todo)
                oFrag.appendChild(oItem)
            })
            this.todoWrap.appendChild(oFrag)
        }
    }
    protected addItem(todo: ITodoData) {
        const oItem: HTMLElement = document.createElement('div')
        oItem.className = 'todo-item'
        oItem.innerHTML = this.todoTemplate(todo)
        this.todoWrap.appendChild(oItem)
    }
    protected removeItem(target: HTMLElement) {
        const oParentNode: HTMLElement = findParentNode(target, 'todo-item')
        oParentNode.remove()
    }
    protected changeCompleted(target: HTMLElement, completed: boolean) {
        const oParentNode: HTMLElement = findParentNode(target, 'todo-item')
        const oContent: HTMLElement = oParentNode.getElementsByTagName('span')[0]
        oContent.style.textDecoration = completed ? 'line-through' : 'none'
    }
}
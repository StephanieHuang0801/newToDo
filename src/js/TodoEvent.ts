/*
 * @Author: your name
 * @Date: 2021-04-08 21:54:39
 * @LastEditTime: 2021-04-08 22:42:19
 * @LastEditors: Please set LastEditors
 * @Description: 处理数据
 * @FilePath: \newToDo\src\js\TodoEvent.ts
 */
import { ITodoData } from './typings'
import { TodoDom } from './TodoDom'
export default class TodoEvent extends TodoDom {

    private todoData: ITodoData[]

    constructor(todoData: ITodoData[], todoDom: HTMLElement) {
        super(todoDom)
        this.todoData = todoData
    }

    public addTodo(todo: ITodoData): undefined | number {
        const _todo = this.todoData.find((item: ITodoData) => {
            return item.content === todo.content
        })
        if (_todo) {
            this.todoData.push(todo)
            this.addItem(todo)
            return
        }
        return 1001
    }

    public removeTodo(target: HTMLElement, id: number): void {
        this.todoData = this.todoData.filter((item: ITodoData) => {
            return item.id !== id
        })
        this.removeItem(target)
    }

    public toggleTodo(target: HTMLElement, id: number): void {
        this.todoData = this.todoData.map((item: ITodoData) => {
            if (item.id === id) {
                item.completed = !item.completed
                this.changeCompleted(target, item.completed)
            }
            return item
        })
    }
}

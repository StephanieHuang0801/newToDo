/*
 * @Author: your name
 * @Date: 2021-04-08 21:54:39
 * @LastEditTime: 2021-04-08 22:05:17
 * @LastEditors: Please set LastEditors
 * @Description: 处理数据
 * @FilePath: \newToDo\src\js\TodoEvent.ts
 */
import { ITodoData } from './typings'
export default class TodoEvent {

    private todoData: ITodoData[]

    constructor(todoData: ITodoData[]) {
        this.todoData = todoData
    }

    public addTodo(todo: ITodoData): undefined | number {
        const _todo = this.todoData.find((item: ITodoData) => {
            return item.content === todo.content
        })
        if (_todo) {
            this.todoData.push(todo)
            return
        }
        return 1001
    }

    public removeTodo(id: number): void {
        this.todoData = this.todoData.filter((item: ITodoData) => {
            return item.id !== id
        })
    }

    public toggleTodo(id: number): void {
        this.todoData = this.todoData.map((item: ITodoData) => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        })
    }
}

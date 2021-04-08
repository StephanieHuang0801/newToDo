/*
 * @Author: your name
 * @Date: 2021-04-08 22:19:58
 * @LastEditTime: 2021-04-08 23:00:30
 * @LastEditors: Please set LastEditors
 * @Description: dom模板
 * @FilePath: \newToDo\src\js\templates.ts
 */

import { ITodoData } from "./typings";

export class TodoTemplate {
    // 只暴露给todoDom，用protected，外部不能访问
    protected todoTemplate({ id, content, completed }: ITodoData) {
        return `
            <input type="checkbox" ${completed ? 'checked' : ''} data-id=${id} />
            <span style="text-decoration:${completed ? 'line-through' : 'none'}">${content}</span>
            <button data-id=${id}>删除</button>
        `
    }
}

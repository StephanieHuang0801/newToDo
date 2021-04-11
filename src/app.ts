/*
 * @Author: your name
 * @Date: 2021-04-08 21:40:58
 * @LastEditTime: 2021-04-11 13:47:21
 * @LastEditors: Please set LastEditors
 * @Description: 模块 立即执行函数
 * @FilePath: \newToDo\src\app.ts
 */
import { ITodoData } from './js/typings'
import TodoEvent from './js/TodoEvent'
    ; ((doc) => {
        const oInput: HTMLInputElement = document.querySelector('input')

        const oAddBtn: HTMLButtonElement = document.querySelector('button')

        const oTodoList: HTMLElement = document.querySelector('.todo-list')

        const todoData: ITodoData[] = [
            {
                id: 1,
                content: '学习',
                completed: false
            },
            {
                id: 2,
                content: '改bug',
                completed: false
            },
            {
                id: 3,
                content: '吃饭睡觉',
                completed: true
            },
        ]

        const todoEvent: TodoEvent = new TodoEvent(todoData, oTodoList) // 实例和类不要重名

        const init = (): void => {
            bindEvent()
        }
        function bindEvent(): void {
            oAddBtn.addEventListener('click', handleAddBtnClick, false)
            oTodoList.addEventListener('click', handleListClick, false)
        }
        const handleAddBtnClick = (): void => {
            const val: string = oInput.value.trim()
            if (val.length) {
                const res = todoEvent.addTodo(<ITodoData>{
                    id: Date.now(),
                    content: val,
                    completed: false
                })
                if (res && res === 1001) {
                    alert('列表项已存在')
                    return
                }
                oInput.value = ''
            }
        }
        const handleListClick = (e: MouseEvent): void => {
            const tar = e.target as HTMLElement
            const tagName = tar.tagName.toLocaleLowerCase()
            if (tagName === 'input' || tagName === 'button') {
                const id = parseInt(tar.dataset.id)
                switch (tagName) {
                    case 'input':
                        todoEvent.toggleTodo(tar, id)
                        break;
                    case 'button':
                        todoEvent.removeTodo(tar, id)
                        break;
                    default:
                        break;
                }
            }
        }
        init()
    })(document)

/*
 * @Author: your name
 * @Date: 2021-04-08 22:32:15
 * @LastEditTime: 2021-04-11 22:31:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \newToDo\src\js\utils.ts
 */
export const findParentNode = (target: HTMLElement, className: string) => {
    console.log('target', target)
    // target是button
    while (target = target.parentNode as HTMLElement) {
        if (target.className === className) {
            return target
        }
    }
}
export const createItem = (tagName: string, className: string, todoItem: string) => {
    const oItem: HTMLElement = document.createElement(tagName)
    oItem.className = className
    oItem.innerHTML = todoItem
    return oItem
}
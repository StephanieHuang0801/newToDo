/*
 * @Author: your name
 * @Date: 2021-04-08 22:32:15
 * @LastEditTime: 2021-04-08 22:33:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \newToDo\src\js\utils.ts
 */
export const findParentNode = (target: HTMLElement, className: string) => {
    while(target = target.parentNode as HTMLElement){
        if(target.className === className){
            return target
        }
    }
}
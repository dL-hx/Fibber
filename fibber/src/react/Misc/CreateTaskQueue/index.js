const createTaskQueue=()=>{
    const taskQueue = []
    return {
        // 1. 向任务队列中, 添加任务
        push: item => taskQueue.push(item),
    
        // 2. 向任务队列中, 获取任务
        pop: () => taskQueue.shift(),// 先进先出,返回从前到后的 任务

        // 判断任务队列中是否还有任务
        isEmpty:() => taskQueue.length === 0
    }
}

export default createTaskQueue
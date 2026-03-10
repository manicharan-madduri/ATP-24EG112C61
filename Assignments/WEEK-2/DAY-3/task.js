import { validateTitle,validatePriority,validateDueDate } from "./validator.js"
const tasks = []
let com=false

function addTask(title, priority, dueDate) {
    if(!validateTitle &&!validatePriority &&!validateDueDate){
            return false
    }

    tasks.push(title,priority,dueDate)
    return 'tasks added successfully'
}
 function getAllTasks(){
    return tasks
}

function completeTask(taskId)
{
    com=true
    return com
}
export {completeTask,addTask,getAllTasks}
import { ADD, DELETE, FINISH } from "./actionTypes"

export const handleDelete=(id)=>{
    return{
        type:DELETE,
        payload:{id}
    }
}
export const handleFinish=(id)=>{
    return{
        type:FINISH,
        payload:{id}
    }
}
export const handleAdd=(newTask)=>{
    return{
        type:ADD,
        payload:newTask
    }
}

import { defineStore } from "pinia"
//@ts-ignore
export const textcontent=defineStore('content',{
    state : ()=>{
        return {
        list:[],
        num:''
        }
    },
    actions:{
        store(data:any){
        this.list=data
        }
    },
    persist:process.client&&{
        storage:localStorage,
        paths:['list']
    }
})
import dbconfig from '../util/index'
export default defineEventHandler(async(event)=>{
    const body=await readBody(event)
    const {name,contact,message,list,editTime}=body
     var sql=`insert into guestbook (name,contact,message,list,editTime) values ('${name}','${contact}','${message}','${list}','${editTime}') `
 await dbconfig.sqlConnet(sql)
 return {
    success:'ok'
 }
})
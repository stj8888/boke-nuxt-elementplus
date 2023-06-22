<template>
  <div class="message">
    <h3 style="text-align: center;">留言板</h3>
    <span>感谢浏览本博客网站，如果你有宝贵的意见，欢迎留言</span>
    <div class="content">
    姓名：<el-input v-model="name" placeholder="请填写你的姓名" clearable />
     <br/>
     联系方式：<el-input class="phone" v-model="contact" placeholder="请选择您的联系方式" clearable >
      <template #prepend>
        <el-select v-model="select" placeholder="Select" style="width: 88px">
          <el-option label="电话" value="电话" />
          <el-option label="邮箱" value="邮箱" />
          <el-option label="微信" value="微信" />
        </el-select>
      </template>
    </el-input>
     <br/>
    <span style="margin-top: 10px;display: block;">留言</span> <el-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    :autosize="{ minRows: 2 }"
    placeholder="请填写宝贵的建议或心得，善语结善缘，恶语伤人心"
  />
  <el-button style="margin-top: 10px;" type="primary" @click="upload">
      上传留言<el-icon class="el-icon--right"><Upload /></el-icon>
    </el-button>
    </div>
    <div style="right: 0;bottom: 0; width: 50px;height: 30px;border: 1px solid;position: absolute;background-color: green;" @click="show">收起</div>
  </div>
</template>
<script setup>
import {Upload } from '@element-plus/icons-vue'
const name = ref('')
const contact = ref('')
const textarea = ref('')
const select=ref('微信')
const emit=defineEmits(['change'])

const show=()=>{
  emit('change')
}
const upload=()=>{
  const editTime=new Date()
  if(name.value&&contact.value&&textarea.value){
    $fetch('/api/uploadmessage',{
    method:'POST',
    body:{
      name:name.value,
      contact:contact.value,
      message:textarea.value,
      list:select.value,
      editTime:editTime
    }
  }).then(res=>{
    if(res.success==='ok'){
      ElMessage({message:'留言成功',type:'success'})
    }
  })
  }else{
    alert('请填完信息')
  }

}

</script>
<style lang="scss" scoped>
.message{
  font-size: 18px;
}
.content{
    margin-top: 20px;
    text-align: center;
}
.el-input{
    width: 300px;
    margin-top: 10px;

}
.phone{
    margin-right: 30px;
    }
</style>

<template>
  <div class="search">
    <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    :trigger-on-focus="false"
    placeholder="搜索你想搜的东西"
    value-key="title"
    :clearable="true"
     @select="handleSelect"
  >
  <template #suffix>
      <el-icon class="el-input__icon" @click="search(data,state)">
       <el-icon :size="30"><Search /></el-icon>
      </el-icon>
    </template>
</el-autocomplete>
  </div>

</template>
  <script  setup>
  import { Search } from '@element-plus/icons-vue'
  //搜索
  const search=(data,item)=>{
   for(var i=0 ; i<data.length;i++){
    if(data[i].title===item){
     router.push(`/node/${data[i].id}`)
    }
   }
  }
const state = ref('')

const links = ref([])
const data=ref([])
const loadAll = async() => {
   await $fetch('/api/getpage').then(res=>{
    data.value=res
  })
  return data.value
}
const timeout=1
const querySearchAsync = (queryString, callback ) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value=[]
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    if(results.length!==0){
     callback(results)
    }else{
     const empty=[{title:'空空如也,换个关键词搜索吧'}]
     callback(empty)
    }
  }, 1000 * Math.random())
}
const createFilter = (queryString) => {
  return (restaurant) => {
    return (
      restaurant.title?.toLowerCase().indexOf(queryString?.toLowerCase()) >=0
    )
    // return true
  }
}
const router=useRouter()
const handleSelect = (item) => {

  if(item.title=='空空如也,换个关键词搜索吧'){
    return
  }else{
    router.push(`/node/${item.id}`)
  }
  
}

onMounted(async() => {
  links.value =await loadAll()
})
</script>
<style lang="scss" scoped >
:deep(.el-input__inner){
  width: 250px;
  height: 50px;
}
.search{
  @media screen and (max-width: 1199px){
    margin: -10px 0 0 480px;
    
  }
   width: 200px;
   height: 100px;
   margin: -10px 0 0 900px;
}

</style>
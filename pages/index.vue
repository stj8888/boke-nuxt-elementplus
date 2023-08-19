<template>
  <div class="center">
    <div>
      <div v-for="i in 3" v-if="list.length === 0">
        <el-skeleton style="width: 540px;" animated>
          <template #template>
            <div style="padding: 14px">
              <el-skeleton-item variant="p" style="width: 100%" />
            </div>
            <el-skeleton-item variant="image" style="width: 540px; height: 340px" />
          </template>
        </el-skeleton>
      </div>
      <el-card v-else class="box-card" v-for="i in list" :key="i.id">
        <template #header>
          <div class="card-header" @click="detail(i)">
            <h3>{{ i.title }}</h3>
          </div>
        </template>
        <div class="text item">
          <img :src="`${http}/file${i.avatar}`" alt="" @click="detail(i)" />
        </div>
      </el-card>
      <div style="height: 100px;margin-left: 80px;">
        <el-pagination :current-page="num" background layout="prev, pager, next" :total="count" :page-size="3"
          @current-change="chage" />
      </div>
    </div>
    <div class="right">
      <Button :show="list"></Button>
    </div>
  </div>
</template>
<script setup>
import Button from '@/components/animal/button'
import { textcontent } from '~~/store/content'
const http = import.meta.env.VITE_APP_CALLBACK
const store = textcontent()
const router = useRouter()
const state = useFoo
const count = ref(1)
const num = ref(2)
const list = ref([])
const chage = (val) => {
  num.value = val
  localStorage.setItem('num', val)
  $fetch(`/api/getpage?id=${val}`, {
    method: 'GET'
  }).then((res) => {
    list.value = res.list
    store.store(res.list)
    count.value = res.count
  })
}
definePageMeta({
  layout: 'default'
})
onMounted(() => {
  num.value = localStorage.getItem('num') ? Number(localStorage.getItem('num')) : 1
  $fetch(`/api/getpage?id=${localStorage.getItem('num') ? localStorage.getItem('num') : 1}`, {
    method: 'GET'
  }).then((res) => {
    list.value = res.list
    store.store(res.list)
    count.value = res.count
  })
})
const detail = (i) => {
  router.push(`/node/${i.id}`)
}
</script>
<style lang="scss" scoped>
.center {
  display: flex;
  // background-image: url(../assets/pohotos/01.jfif);
  background: linear-gradient(217deg, rgba(255, 0, 0, .8), rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgba(0, 255, 0, .8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, .8), rgba(0, 0, 255, 0) 70.71%);
}

.card-header {

  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    cursor: pointer;
  }
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;

  img {
    width: 100%;
    height: 300px;
    cursor: pointer;
  }
}

.box-card {
  width: 580px;
  margin-top: 10px;

  @media screen and (max-width:1200px) {
    width: 800px;
  }
}

.right {
  margin-left: auto;
}</style>
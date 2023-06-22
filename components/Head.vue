<template>
  <div class="left">
      <div class="avatar" @click="personalCenter">
        <el-avatar :src="url" />
        <span>(点击头像进入博主个人中心)</span>
      </div>
       <h2>石廷俊的博客</h2>
       <h3>欢迎来到这里</h3>
      <client-only>
        <SearchSerch class="search"></SearchSerch>
      </client-only>
        <div id="svgAttributes"> <svg width="50" height="50" viewBox="0 0 128 128">
<polygon points="64 68.73495257774529 8.574 99.99360157831904 63.35822645138074 67.62292607860594 64 3.993601578319051 64.64177354861926 67.62292607860594 119.426 99.99360157831904 " fill="	#FF0000"></polygon>
</svg> </div>
</div>
</template>
<script setup>
import anime from 'animejs'
const url='image/touxiang.png'
const router=useRouter()
onMounted(()=>{
  anime({
  targets: '#svgAttributes polygon',
  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  easing: 'easeInOutExpo',
});
}) 
const personalCenter=()=>{
  router.push('/personal/center1')
}
</script>
<style lang="scss" scoped>

.left{
  position: relative;
    // display:flex;
    // flex-wrap: nowrap;
    .avatar {
    margin-top: 10px;
    margin-right: 10px;
    height: 5px;
    >span{
  font-size: 16px;
    }
  }
  h2 {
    @media screen  and (max-width:1200px){
font-size: 15px;
}
    font-size: 25px;
    position: fixed;
    margin-left: 250px;
  }
  h3{
    @media screen and (max-width: 1200px) {
      margin-left: 350px;
      font-size: 16px;
    }
   position: fixed;
    margin-left: 620px;
    line-height: 20px;
    font-size: 24px;
  }
  .Search{
  position: fixed;
  margin-top:  10px;
  }
  }
  #svgAttributes{
    @media screen and (max-width:1280px) {
      display: none;
    }
    position: fixed;
   margin-top: -99px;
   right: 20px;
   width: 50px;
}
</style>
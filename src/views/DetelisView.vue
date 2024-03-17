<template>
  <div>
    商品详情
  </div>
</template>
<script>
import { getGoodsData } from '../request/api'
export default {
  async created () {
    console.log(this.$route.query.id)
    const res = await getGoodsData(this.$route.query.id)
    console.log(res)
  }
}
</script>
<style lang="less" scoped>

</style>

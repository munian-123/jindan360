<template>
  <div>首页</div>
</template>

<script>
import { getJON } from '../request/api.js'
export default {
  components: {

  },
  async created () {
    const res = await getJON()
    console.log(res)
  }

}
</script>
<style scoped>
div{
  background-color: aqua;
}
</style>

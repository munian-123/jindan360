<template>
  <div>
    <CurmbsType :curmbs="curmbs"/>
  </div>
</template>
<script>
import CurmbsType from '../components/CurmbsType.vue'
export default {
  components: {
    CurmbsType
  },
  data () {
    return {
      curmbs: this.$route.query.curmbs
    }
  },
  created () {

  }
}
</script>
<style lang="">

</style>

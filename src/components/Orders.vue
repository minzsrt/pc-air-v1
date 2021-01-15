<template>
  <div class="hello">
    <div class="row justify-content-between mx-0 mb-3">
      <div class="col-auto px-0 align-self-center">
        <h2 class="mb-0">{{ msg }}</h2>
      </div>
      <div class="col-auto px-0 align-self-center">
        <a-button type="primary">สร้างใบวางบิล</a-button>
        <a-button type="primary" class="ml-2">สร้างใบเสร็จรับเงิน</a-button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Orders',
  data () {
    return {
      msg: 'Order',
    }
  }
}
</script>

<style>

</style>
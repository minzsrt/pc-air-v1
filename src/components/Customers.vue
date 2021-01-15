<template>
  <div class="hello">
    <div class="row justify-content-between mx-0 mb-3">
      <div class="col-auto px-0 align-self-center">
        <h2 class="mb-0">{{ msg }}</h2>
      </div>
      <div class="col-auto px-0 align-self-center">
        <a-button type="primary">
          เพิ่มรายชื่อลูกค้า
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Customers',
  data () {
    return {
      msg: 'ลูกค้า',
    }
  }
}
</script>

<style>

</style>
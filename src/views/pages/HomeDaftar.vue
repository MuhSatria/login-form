<template>
  <div class="box-content">
    <div class="content row justify-content-center align-items-center">
      <div class="img col-xl-4 col-lg-4">
      </div>
      <div class="col-xl-4 col-lg-4">
        <form-daftar />
      </div>
    </div>
  </div>
</template>

<script>
import FormDaftar from '../../components/FormDaftar'
export default {
  components: {
    FormDaftar
  }
}
</script>

<style lang="stylus" scoped>
.box-content
  max-height 100vh
  height 100vh

  .content
    height 100%
    width 100%
    margin 0

    .img
      background url(../../assets/bg-login.png)
      height 100%
      background-size cover
      background-position center
</style>

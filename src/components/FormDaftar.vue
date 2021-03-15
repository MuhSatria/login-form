<template>
  <div class="box-login">
    <div class="card p-4">
      <h2>Daftar</h2>
      <form @submit.prevent="pressed" action="#" class="form">
        <div class="box-input">
          <div class="label">Email</div>
          <input type="text" class="form-data" v-model="email">
        </div>
        <div class="box-input">
          <div class="label">Password</div>
          <input type="password" class="form-data" v-model="password">
        </div>
        <button class="btn-cta fill">Sign Up</button>
        <button class="btn-cta outline mt-3" @click="goBack">Already have account</button>
      </form>
      <div class="error" v-if="error">{{error.message}}</div>
    </div>
  </div>
</template>

<script>
// import * as firebase from 'firebase/app'
// import 'firebase/auth'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    }
  },
  methods: {
    pressed () {
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(this.email, this.password)
      //   .then(() => {
      //     console.log('here')
      //     this.$router.replace({ name: 'Dasboard' })
      //   })
      //   .catch(error => {
      //     this.error = error
      //   })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.box-login
  .card
    border none

    .form
      padding 20px 0
      .box-input
        margin 20px 0
        .label
          margin-bottom 8px
          font-weight 550
        .form-data
          width 100%
          height 48px
          font-size 14px
          line-height 22px
          padding 8px 12px
          border 1px solid #E7D4AA
          border-radius 5px

          &:focus
            outline 0

      .btn-cta
        width 100%
        padding 8px 10px
        font-size 16px
        line-height 28px
        border-radius 5px
        font-weight 400

      .fill
        background-color #E7D4AA
        color white
        border none

      .outline
        background-color white
        color #e7d4aa
        border 1px solid #e7d4aa

      .line-or
        margin 24px 0
        align-items center
        .line
          display inline-block
          border 0.5px solid #f3f3f3
          width 50%
        .text
          font-size 0.857143rem
          text-align center
          color grey
          padding 0 8px
          white-space nowrap
</style>

<template lang="pug">
v-card.d-flex.flex-column(
  outlined
  width="700"
  )
  .flex-column.pa-3
    v-text-field(
      v-model="form.email"
      label="Email"
      width="100"
    )
    v-text-field(
      v-model="form.password"
      label="Password"
      @keyup.enter="login"
    )
  .d-flex.justify-center
    v-btn.ma-3(@click="login") Log in
    v-btn.ma-3(@click="goToCreateAccount") create account
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: undefined,
        password: undefined
      }
    }
  },
  methods: {
    goToCreateAccount() {
      this.$router.push('SignUp')
    },
    login() {
      axios.post("http://localhost:3000/api/v1/tokens", { user: {
        email: this.form.email,
        password: this.form.password
      }}).then(response => {
        if(response.status === 200) {
          let user = {
            email: response.data.email,
            token: response.data.token,
            id: response.data.id
          }
          this.$store.commit('saveUserAfterLogIn', user)
          this.$router.push({name: 'Home'})
        }
      })
    }
  }
}
</script>
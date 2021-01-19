<template lang="pug">
  v-card(outlined)
    v-form
      v-col
        v-text-field(
          v-model="form.email"
          label="Email"
        )
      v-col
        v-text-field(
          v-model="form.password"
          label="Password"
          @keyup.enter="login"
        )
      v-btn(@click="login") Entrar
      v-btn(@click="goToCreateAccount") Criar Conta
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
            token: response.data.token
          }
          this.$store.commit('saveUserAfterLogIn', user)
          this.$router.push({name: 'Home'})
        }
      })
    }
  }
}
</script>
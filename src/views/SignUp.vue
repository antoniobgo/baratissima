<template lang="pug">
  v-card
    v-col
      v-text-field(
        v-model="form.email"
        label="Email"
      )
    v-col
      v-text-field(
        v-model="form.password"
        label="Password"
      )
    v-col
      v-text-field(
        v-model="form.password_confirm"
        label="Confirm Password"
      )
    v-col
      v-btn(
        @click="createAccount"
      ) Criar conta
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: undefined,
        password: undefined,
        password_confirm: undefined
      }
    }
  },
  methods: {
    createAccount() {
      axios.post("http://localhost:3000/api/v1/users", { user: {
        email: this.form.email,
        password: this.form.password
      }}).then(response => {
        if(response.status === 201)
          this.$router.push('Login')
      })
    }
  }
}
</script>
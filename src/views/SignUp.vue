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
        :type="showPassword ? 'text' : 'password'"
        label="Password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      )
    v-col
      v-text-field(
        v-model="form.password_confirm"
        :type="showPassword ? 'text' : 'password'"
        label="Confirm Password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
        :rules="[rules.password_match]"
      )
    v-col
      v-btn(
        @click="createAccount"
        :disabled="!matchingPasswords() || emptyPassword() || form.email.length === 0"
      ) Criar conta
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: undefined,
        password: "",
        password_confirm: "",
      },
      showPassword: false,
      rules: {
        password_match: password_confirm => password_confirm === this.form.password || "Both passwords should match"
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
    },
    matchingPasswords() {
      return this.form.password === this.form.password_confirm
    },
    emptyPassword() {
      return this.form.password.length === 0 || this.form.password_confirm.length === 0
    }
  }
}
</script>
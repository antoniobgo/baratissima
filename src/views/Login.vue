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
        )
      v-btn Entrar
      v-btn Criar Conta
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: undefined,
        password: undefined
      }
    }
  }
}
</script>
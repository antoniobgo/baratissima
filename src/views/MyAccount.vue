<template lang="pug">
  v-card(
    max-width=1000,
    outlined
    )
    v-row.ml-1
      v-col(cols="3")
        v-text-field(
          v-model="currentUser.email"
          label="Email"
          disabled=true
        )
        v-text-field(
          v-model="fakePassword"
          type="password"
          label="Password"
          disabled=true
        )
      v-col(cols="9")
        v-btn() Changed Password
        v-btn() Delete Account
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      fakePassword: '12345678'
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
<template lang="pug">
v-card.d-flex.justify-space-between(
  outlined
  max-width="700"
  )
  .flex-column.pa-3
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
  .d-flex.flex-column.justify-space-around.pa-3
    v-btn() Changed Password
    v-btn() Delete account

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
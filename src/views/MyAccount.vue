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
    v-btn() Change Password
    v-btn(@click="deleteAccount") Delete account
    v-btn(@click="logout") Logout
    

</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      fakePassword: '12345678'
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    deleteAccount() {
      let uri = "http://localhost:3000/api/v1/users/"+this.currentUser.id
      axios.defaults.headers.common["Authorization"] = this.currentUser.token;
      axios.delete(uri).then(response => {
        if(response.status === 204) {
          this.$router.push({name: 'Home'})}
      });
    },
    logout() {
      this.$store.commit("logout");
    }
  }
}
</script>
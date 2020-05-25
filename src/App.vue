<template lang="pug">
  v-app
    my-app-bar
    my-nav-drawer
    v-content
      v-container(fluid)
        router-view
</template>

<script>
import MyAppBar from "@/components/MyAppBar";
import MyNavDrawer from "@/components/MyNavDrawer";
export default {
  name: "App",

  components: {
    MyAppBar,
    MyNavDrawer,
  },

  data: () => ({
    //
  }),
};
</script>

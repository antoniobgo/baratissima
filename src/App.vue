<template lang="pug">
  v-app
    my-app-bar
    v-navigation-drawer(app)
    v-content
      v-container(fluid)
        router-view
</template>

<script>
import MyAppBar from "@/components/MyAppBar";
export default {
  name: "App",

  components: { MyAppBar },

  data: () => ({
    //
  })
};
</script>

<template lang="pug">
  div
    v-row
      v-btn.ma-2(
        v-for="page in totalPages"
        @click="$emit('changePage', page)"
        :class="{'disable-events': isDisabled(page)}"
        :color="getColor(page)"
        outlined
        )
        | {{ page }}
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number
    }
  },
  data() {
    return {};
  },
  methods: {
    getColor(page) {
      if (this.currentPage == page) return "blue";
    },
    isDisabled(page) {
      return this.currentPage == page;
    }
  }
};
</script>

<style scoped>
.disable-events {
  pointer-events: none;
}
</style>
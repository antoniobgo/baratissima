<template lang="pug">
  div
    v-row
      v-btn.ma-2(
        v-for="page in totalPages"
        @click="$emit('changePage', page)"
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
    }
  }
};
</script>
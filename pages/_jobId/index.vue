<template>
  <div>
    <div
      class=""
      v-for="item in jobItems"
      :key="item.company"
    >
      <h1>{{ item.company }}</h1>

    </div>

  </div>

</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      newTodoTitle: "",
      newDescription: ""
    };
  },

  computed: mapGetters({
    jobItems: "jobs/getJobItems"
  })
};
</script>

<style>
</style>

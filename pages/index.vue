<template>
  <section class="clearfix">
    <div class="clearfix ">
      <TopHeader />
    </div>
    <div class="clearfix container">
      <JobPreview />
      <JobFromGit />
    </div>

  </section>
</template>

<script>
// import store from "@/store";
import { mapState } from "vuex";
import TopHeader from "~/components/ui/TopHeader.vue";
// import JobList from "~/components/JobList.vue";
import JobPreview from "~/components/Jobs/JobPreview.vue";
import JobFromGit from "~/components/Jobs/JobFromGit.vue";

export default {
  components: {
    TopHeader,
    // JobList,
    JobPreview,
    JobFromGit
  },
  data() {
    return {};
  },
  //computed: {
  //titre() {
  // return store.state.titre;
  //}
  //},
  computed: mapState([
    // map this.count to store.state.count
    "titre"
  ])
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.jobs {
  width: 100%;
  max-width: 1080px;

  a {
    text-decoration: none;
  }
}
</style>

<template>
  <section class="clearfix">
    <div class="clearfix ">
      <TopHeader />
    </div>
    <div class="clearfix container">
      <div class="jobs">
        <JobPreview
          v-for="item in jobitems"
          :key="item.jobid"
          :icon="item.icon"
          :title="item.title"
          :company="item.company"
          :location="item.location"
          :tagname="item.tags"
          :id="item.jobid"
        />
      </div>
    </div>

  </section>
</template>

<script>
import TopHeader from "~/components/ui/TopHeader.vue";
// import JobList from "~/components/JobList.vue";
import JobPreview from "~/components/Jobs/JobPreview.vue";

export default {
  components: {
    TopHeader,
    // JobList,
    JobPreview
  },
  data() {
    return {

     

          
      jobitems: [
        {
          // icon: true,
          jobid: "001",
          title: "React Native Developer",
          company: "Auchan",
          location: "London",
          salary: "70 000 - 120 000 ",
          tags: [
            { name: "Javascript" },
            { name: "Vuejs" },
            { name: "React js" }
          ],
          // icon: "assets/img/auchan.png"
          icon: "https://www.cap-nor.com/wp-content/uploads/AUCHAN-logo-300.png"
        },
        {
          // icon: true,
          jobid: "002",
          title: "React Native Developer",
          company: "Dropbox",
          location: "London",
          salary: "70 000 - 120 000 ",
          tags: [{ name: "Javascript" }, { name: "Vuejs" }],
          icon:
            "https://aegisbiztech.com/wp-content/uploads/2016/02/dropbox-logo-235x300.png"
        },
        {
          // icon: true,
          jobid: "003",
          title: "React Native Developer",
          company: "Carrefour",
          location: "London",
          salary: "70 000 - 120 000 ",
          tags: [{ name: "Javascript" }, { name: "Vuejs" }],
          icon:
            "https://www.docaposte.com/uploads/customers/logos/carrefour-2019.png"
        },
        {
          // icon: true,
          jobid: "004",
          title: "React Native Developer",
          company: "Gagemini",
          location: "London",
          salary: "70 000 - 120 000 ",
          tags: [{ name: "Javascript" }, { name: "Vuejs" }],
          icon: "https://www.idvroom.com/image/55075_178_120.png"
        },
        {
          // icon: true,
          jobid: "005",
          title: "React Native Developer",
          company: "Edf",
          location: "London",
          salary: "70 000 - 120 000 ",
          tags: [{ name: "Javascript" }, { name: "Vuejs" }],
          icon: "https://dirigeants-entreprise.com/images/t1205-800-800-80.jpg"
        },
        {
          // icon: true,
          jobid: "006",
          title: "React Native Developer",
          company: "Renault",
          location: "London",
          salary: "70 000 - 120 000 ",
          tags: [
            { name: "Javascript" },
            { name: "Javascript" },
            { name: "Javascript" },
            { name: "Javascript" },
            { name: "Vuejs" }
          ],
          icon:
            "https://cdn.freebiesupply.com/logos/large/2x/renault-logo-png-transparent.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

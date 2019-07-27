<template>
  <div class="jobFromGi">

  </div>
  <!-- div div class="jobs">
    <nuxt-link
      v-for="item in jobItems"
      :key="item.company"
      :to="item.company"
    >
      <div class="jobs__item">
        <div class="jobs__item__img">
          <img
            :src="item.imageUrl"
            alt=""
          >
        </div>
        <div class="jobs__item_title">
          <div class="label">{{item.title}}</div>
          <div class="Company_name">
            <el-tag type="info">{{item.company}}</el-tag>
          </div>

        </div>
        <div class="jobs__item_tags">
          <div
            class="taglists"
            v-for="skillItem in item.skills"
            :key="skillItem.label"
          >
            <el-tag>{{skillItem.label}}</el-tag>
          </div>

        </div>
        <div class="jobs__item_location">
          <div class="loca"><i class="el-icon-location-outline"></i> {{item.location}}</div>
        </div>
      </div>

    </nuxt-link>

  </div -->

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null
    };
  },

  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        this.info = response;
        console.log(this.info);
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
</style>

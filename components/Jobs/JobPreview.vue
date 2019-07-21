<template>
  <div class="jobs">
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
            :key="skillItem"
          >
            <el-tag>{{skillItem}}</el-tag>
          </div>

        </div>
        <div class="jobs__item_location">
          <div class="loca"><i class="el-icon-location-outline"></i> {{item.location}}</div>
        </div>
      </div>

    </nuxt-link>

  </div>

</template>

<script>
// Use Axios : https://jobs.github.com/positions.json?description=python&location=new+york
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

<style lang="scss">
.jobs__item {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  margin-bottom: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  text-align: left;
  text-decoration: none;
  .jobs__item__img {
    width: 120px;
    img {
      height: 80px;
      border-radius: 4px;
    }
  }
  .jobs__item_title {
    min-width: 300px;
    width: calc(100% - 600px);
    .label {
      font-size: 22px;
      font-weight: 500;
      margin-top: 5px;
      color: #6d7bcc;
    }
    .Company_name {
      text-transform: uppercase;
      font-size: 14px;
      color: grey;
      font-weight: 700;
      margin-top: 10px;
    }
  }
  .jobs__item_tags {
    max-width: 300px;
    min-width: 200px;
    margin: 10px;
    .taglists {
      display: inline;
      margin-right: 5px;
      span {
        margin-bottom: 4px;
      }
    }
  }
  .jobs__item_location {
    min-width: 190px;
    text-align: right;
    .loca {
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>

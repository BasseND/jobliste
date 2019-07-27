<template>

  <nuxt-link :to="id">
    <div class="jobs__item">
      <div class="jobs__item__img">
        <img
          :src="icon"
          alt=""
        >
      </div>
      <div class="jobs__item_title">
        <div class="label">{{title}}</div>
        <div class="Company_name">
          <el-tag type="info">{{company}}</el-tag>
        </div>

      </div>
      <div class="jobs__item_tags">
        <div class="taglists">
          <el-tag>{{tagname}}</el-tag>
        </div>

      </div>
      <div class="jobs__item_location">
        <div class="loca"><i class="el-icon-location-outline"></i> {{location}}</div>
      </div>
    </div>

  </nuxt-link>

</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    tagname: {
      type: Array,
      required: true
    }
  }
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
  justify-content: space-between;
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
      margin-top: 20px;
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>

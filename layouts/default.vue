<template>
  <div>

    <el-container>

      <el-container>
        <el-header>
          <div class="header_wrapper">
            <div class="logo">
              <router-link
                tag="li"
                to="/"
              >
                <img
                  src="../assets/img/logocolor.png"
                  alt=""
                >
              </router-link>

            </div>
            <div class="navigation">
              <LangSwicher />
              <router-link
                tag="li"
                to="/addjob"
              >
                <el-button
                  type="primary"
                  round
                >Post a job</el-button>

              </router-link>

            </div>

            <!--el-dropdown>
            <i
              class="el-icon-setting"
              style="margin-right: 15px"
            ></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown-->

          </div>

        </el-header>

        <el-main>
          <nuxt />
        </el-main>
      </el-container>
    </el-container>

  </div>

</template>

<script>
import LangSwicher from "~/components/LangSwicher.vue";
export default {
  components: {
    LangSwicher
  }
};
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
li {
  list-style: none;
}
.el-header {
  padding: 0 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  background: #ffffff;
  box-shadow: 2px 2px 5px rgba(201, 207, 255, 0.61);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 90;
}
.header_wrapper {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
}
.el-main {
  padding: 0;
  margin-top: 50px;
}

.logo {
  float: left;
}
.logo img {
  height: 45px;
  margin-top: 10px;
}
.navigation {
  margin-top: 10px;
  float: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>

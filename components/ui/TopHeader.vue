<template>
  <div class="topheaser">
    <h1> {{$t('layout.topHeader.title')}}</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.topheaser {
  min-height: 260px;
  background: url("../../assets/img/topheader.png");
  background-size: cover;
  text-align: center;
  padding-top: 65px;
  h1 {
    color: #fff;
    margin: 30px;
    font-size: 40px;
  }
}
</style>

<template>
  <div class="content-wrapper">
    <Header />
    <Body />
  </div>
</template>
<script>
import Header from "./includes/header/index";
import Body from "./includes/body/index";
export default {
  components: { Header, Body },
};
</script>

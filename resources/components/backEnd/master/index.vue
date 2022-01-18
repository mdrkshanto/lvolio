<template>
  <div class="wrapper">
    <Navbar />
    <MainMenu />
    <MainContent />
  </div>
</template>
<script scoped>
import("../../../../public/backEnd/assets/dist/js/adminlte.min");
import("../../../../public/backEnd/assets/dist/js/demo");

import Navbar from "./includes/navbar/index";
import MainMenu from "./includes/mainMenu/index";
import MainContent from "./includes/mainContent/index";
export default {
  components: { Navbar, MainMenu, MainContent },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");
@import "../../../../public/backEnd/assets/dist/css/adminlte.min.css";
</style>

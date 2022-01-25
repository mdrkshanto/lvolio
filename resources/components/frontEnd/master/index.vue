<template>
  <div class="container-fluid m-0 p-0">
    <Header /><Navbar /><router-view /><Footer />
  </div>
</template>
<script>
import Header from "./includes/header/index";
import Navbar from "./includes/navbar/index";
import Footer from "./includes/footer/index";
export default {
  components: { Header, Navbar, Footer },
};
</script>
<style scoped>
.text-justify {
  text-align: justify;
}

::placeholder {
  text-transform: capitalize;
}
</style>

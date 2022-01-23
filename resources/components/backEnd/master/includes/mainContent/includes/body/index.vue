<template>
  <section class="content">
    <div class="card m-0">
      <Header />
      <router-view />
    </div>
  </section>
</template>
<script>
import Header from "./includes/header"
export default {
  components: { Header },
};
</script>

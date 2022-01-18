<template>
  <section class="content">
    <div class="card">
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

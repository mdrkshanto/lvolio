<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-black sticky-top py-0">
    <router-link :to="{ name: 'home' }" class="navbar-brand">{{
      name ? name : "Md Rezaul Karim Shanto"
    }}</router-link>
    <button
      class="navbar-toggler shadow-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target=".mainMenu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse mainMenu justify-content-end">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item">
          <router-link
            :to="{ name: 'home' }"
            :class="`nav-link ${$route.name === 'home' ? 'active' : ''}`"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <a href="about.html" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="resume.html" class="nav-link">Resume</a>
        </li>
        <li class="nav-item">
          <a href="skills.html" class="nav-link">Skills</a>
        </li>
        <li class="nav-item">
          <a href="contact.html" class="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    name() {
      return this.$store.getters.latestHomeData.name;
    },
  },
  mounted() {
    this.$store.dispatch("latestHomeData");
  },
};
</script>

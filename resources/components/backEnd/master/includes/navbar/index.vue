<template>
  <nav
    class="
      main-header
      navbar navbar-expand navbar-white navbar-light
      justify-content-between
    "
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <button class="btn nav-link" data-widget="pushmenu">
          <i class="fas fa-bars"></i>
        </button>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: adminHome }"
          class="nav-link"
          :class="$route.name === 'adminHome' ? 'active' : ''"
          >Home</router-link
        >
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#"> Logout </a>
      </li>
    </ul>
  </nav>
</template>

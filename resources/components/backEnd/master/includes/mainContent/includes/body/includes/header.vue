<template>
  <div class="card-header">
    <div class="row align-items-center">
      <span class="card-title col fw-bolder">{{ $route.meta.cardTitle }}</span>
      <router-link
        :to="{ name: `${$route.meta.button.link}` }"
        class="col-1 btn btn-primary btn-sm shadow-none"
        v-html="$route.meta.button.title"
      />
    </div>
  </div>
</template>

<template>
  <section class="content">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <h3 class="card-title col">{{ $route.meta.cardTitle }}</h3>
          <router-link
            :to="{ name: `${$route.meta.button.link}` }"
            class="col-1 btn btn-primary btn-sm shadow-none"
            v-html="$route.meta.button.title"
          />
        </div>
      </div>
      <router-view />
    </div>
  </section>
</template>

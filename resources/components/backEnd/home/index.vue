<template>
  <div class="card-wrap">
    <div class="card-body">
      <table
        class="
          table table-dark table-sm table-striped table-hover table-borderless
          text-center
        "
      >
        <thead>
          <tr>
            <th class="align-middle">#</th>
            <th class="align-middle">Background</th>
            <th class="align-middle">Name</th>
            <th class="align-middle">Focus Title</th>
            <th class="align-middle">Short Description</th>
            <th class="align-middle">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(d, i) in allData" :key="i">
            <th class="align-middle">{{ ++i }}</th>
            <td class="align-middle text-center">
              <main :class="`bg-${d.bgColor} position-relative rounded`">
                <img
                  :src="d.bgImg"
                  :class="`card-img img-fluid opacity-${d.bgOpacity} h-100`"
                  alt=""
                />
                <section
                  class="
                    card-img-overlay
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                    h-100
                  "
                ></section>
              </main>
            </td>
            <td class="align-middle">{{ d.name }}</td>
            <td class="align-middle">{{ d.focusTitle }}</td>
            <td class="align-middle">{{ d.shortDescription }}</td>
            <td class="align-middle">
              <router-link
                :to="{ name: 'editHome', params: { id: d.id } }"
                class="btn btn-sm btn-primary"
              >
                <i class="fas fa-edit"></i>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    allData() {
      return this.$store.getters.allHomeData;
    },
  },
  mounted() {
    this.$store.dispatch("allHomeData");
  },
};
</script>
<style scoped>
main {
  height: 4rem;
  width: 10rem;
}
</style>

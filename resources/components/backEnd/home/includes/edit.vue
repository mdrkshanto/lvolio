<template>
  <div class="card-wrap">
    <div class="card-body">
      <div class="container col-8">
        <div class="my-4">
          <label class="form-label">Background Image</label>
          <div class="input-group input-group-sm">
            <div class="position-relative">
              <input
                class="form-control shadow-none"
                type="file"
                accept="image/webp"
                @change="form.bgImg = $event.target.files[0]"
                ref="bgImg"
              />
              <button
                class="
                  btn btn-sm btn-close
                  shadow-none
                  position-absolute
                  translate-middle
                  top-50
                  bg-transparent
                "
                v-if="
                  form.bgImg != null &&
                  form.bgImg != '' &&
                  form.bgImg != 0 &&
                  form.bgImg != '0'
                "
                @click.prevent="form.bgImg = null"
              ></button>
            </div>
            <select class="form-select text-center shadow-none">
              <option value="1">Welcome</option>
            </select>
            <select class="form-select text-center shadow-none">
              <option value="1">Welcome</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="row align-items-center justify-content-between">
        <button
          class="btn btn-sm shadow-none btn-primary col-2"
          @click.prevent="submit"
        >
          Create
        </button>
        <button
          class="btn btn-sm shadow-none btn-secondary col-2"
          @click.prevent="reset"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: new Form({
        bgImg: null,
        _method: "put",
      }),
    };
  },
  methods: {
    submit() {
      this.form.post("api/updateHome" + this.$route.params.id).then((r) => {
        this.$router.push({ name: "adminHome" });
      });
    },
    reset() {
      this.form.bgImg = null;
      this.$refs.bgImg.value = null;
    },
  },
  computed: {
    edit() {
      this.$set(
        this.form,
        "bgImg",
        (this.$store.getters.editableHomeData.bgImg = null)
      );
    },
  },
  mounted() {
    // axios.get("api/editHomeData" + this.$route.params.id).then((r) => {
    //     this.$set(this, "form", r.data.editData);
    //     this.form.bgImg = null;
    // });
    this.$store.dispatch("editableHomeData", this.$route.params.id);
    // this.$set(this, "form", this.$store.getters.editableHomeData);
  },
};
</script>
<style scoped>
.btn-close {
  right: -1.4rem;
}
</style>


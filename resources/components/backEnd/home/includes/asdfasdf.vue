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
                @click.prevent="close"
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
      bgColors: [
        { value: null, text: "Background Color" },
        { value: "primary", text: "Blue" },
        { value: "secondary", text: "Gray" },
        { value: "success", text: "Green" },
        { value: "danger", text: "Red" },
        { value: "warning", text: "Yellow" },
        { value: "info", text: "Sky" },
        { value: "light", text: "White" },
        { value: "dark", text: "Dark" },
        { value: "black", text: "Black" },
      ],
      bgOpacities: [
        { value: null, text: "Opacity" },
        { value: "0", text: "0%" },
        { value: "25", text: "25%" },
        { value: "50", text: "50%" },
        { value: "75", text: "75%" },
        { value: "100", text: "100%" },
      ],
      form: new Form({
        bgImg: null,
        bgColor: null,
        bgOpacity: null,
        bgOpacity: null,
        name: null,
        focusTitle: null,
        shortDescription: null,
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
    close() {
      this.form.bgImg = null;
      this.$refs.bgImg.value = null;
    },
  },
  // computed: {
  //   edit() {
  //     this.$set(
  //       this.form,
  //       "bgImg",
  //       (this.$store.getters.editableHomeData.bgImg = null)
  //     );
  //   },
  // },
  mounted() {
    // axios.get("api/editHomeData" + this.$route.params.id).then((r) => {
    //     this.$set(this, "form", r.data.editData);
    //     this.form.bgImg = null;
    // });
    this.$store.dispatch("editableHomeData", this.$route.params.id);
    this.$set(this.form, "bgImg", this.$store.getters.editableHomeData.bgImg = null);
    this.$set(this.form, "bgImg", this.$store.getters.editableHomeData.bgImg = null);
  },
};
</script>
<style scoped>
.btn-close {
  right: -1.4rem;
}
</style>


<template>
  <div class="card-wrap">
    <div class="card-body">
      <div class="container col-8">
        <div class="my-3">
          <label class="form-label">Background Image</label>
          <div class="input-group input-group-sm">
            <div class="position-relative">
              <input
                class="form-control form-control-sm shadow-none"
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
            <select
              class="form-select form-select-sm text-center shadow-none"
              v-model="form.bgColor"
            >
              <option
                v-for="bgColor in bgColors"
                :value="bgColor.value"
                :key="bgColor.value"
              >
                {{ bgColor.text }}
              </option>
            </select>
            <select
              class="form-select form-select-sm text-center shadow-none"
              v-model="form.bgOpacity"
            >
              <option
                v-for="bgOpacity in bgOpacities"
                :key="bgOpacity.value"
                :value="bgOpacity.value"
              >
                {{ bgOpacity.text }}
              </option>
            </select>
          </div>
        </div>
        <div class="my-3">
          <label class="form-label">Name</label>
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Full Name"
            v-model="form.name"
          />
        </div>

        <div class="my-3">
          <label class="form-label">Focus Title</label>
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Focus Title"
            v-model="form.focusTitle"
          />
        </div>

        <div class="my-3">
          <label class="form-label">Short Description</label>
          <textarea
            class="form-control form-control-sm"
            placeholder="Short Description"
            v-model="form.shortDescription"
          />
        </div>
        <div class="col-6 mx-auto">
          <div class="row justify-content-center align-items-center">
            <div class="my-3 col">
              <label class="form-label">Status</label>
              <select
                class="form-select form-select-sm text-center shadow-none"
                v-model="form.status"
              >
                <option
                  v-for="status in statuses"
                  :key="status.value"
                  :value="status.value"
                >
                  {{ status.text }}
                </option>
              </select>
            </div>
            <div class="my-3 col">
              <label class="form-label">Edit Count</label>
              <div class="input-group input-group-sm">
                <span class="px-4">{{
                  null || 0 >= form.editCount ? 0 : form.editCount
                }}</span>
                <button
                  class="btn btn-sm btn-success shadow-none"
                  @click.once="form.editCount++"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
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
          Update
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
      statuses: [
        { value: null, text: "Status" },
        { value: "active", text: "Active" },
        { value: "inactive", text: "Inactive" },
      ],
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
        _method: "put",
        bgImg: null,
        bgColor: null,
        bgOpacity: null,
        name: null,
        focusTitle: null,
        shortDescription: null,
        status: null,
        editCount: null,
      }),
    };
  },
  methods: {
    reset() {
      this.form.bgImg = null;
      this.form.bgColor = null;
      this.form.bgOpacity = null;
      this.form.name = null;
      this.form.focusTitle = null;
      this.form.shortDescription = null;
      this.$refs.bgImg.value = null;
    },
    close() {
      this.form.bgImg = null;
      this.$refs.bgImg.value = null;
    },
    submit() {
      this.form.post("/updateHome" + this.$route.params.id).then(() => {
        this.$router.push({ name: "adminHome" });
      });
    },
  },
  mounted() {
    axios.post("api/editHomeData" + this.$route.params.id).then((r) => {
      let formData = r.data.editData;
      this.$set(this.form, "bgImg", (formData.bgImg = null));
      this.$set(this.form, "bgColor", formData.bgColor);
      this.$set(this.form, "bgOpacity", formData.bgOpacity);
      this.$set(this.form, "name", formData.name);
      this.$set(this.form, "focusTitle", formData.focusTitle);
      this.$set(this.form, "shortDescription", formData.shortDescription);
      this.$set(this.form, "status", formData.status);
      this.$set(this.form, "editCount", formData.editCount);
    });
  },
};
</script>
<style scoped>
.btn-close {
  right: -1.4rem;
}
textarea {
  resize: none;
  height: 10rem !important;
}
</style>


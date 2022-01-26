<template>
  <div class="card-wrap">
    <div class="card-body">
      <div class="container col-8">
        <div class="my-3">
          <label class="form-label">Objective</label>
          <textarea
            class="form-control form-control-sm"
            placeholder="Objective"
            v-model="form.shortDescription"
          />
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
        <div class="col-3 mx-auto">
          <div class="row justify-content-center">
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
      statuses: [
        { value: "active", text: "Active" },
        { value: "inactive", text: "Inactive" },
      ],
      form: new Form({
        bgImg: null,
        bgColor: null,
        bgOpacity: null,
        name: null,
        focusTitle: null,
        shortDescription: null,
        status: 'inactive',
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
      this.form.post("/addHome").then(() => {
        this.form.bgImg = null;
        this.form.bgColor = null;
        this.form.bgOpacity = null;
        this.form.name = null;
        this.form.focusTitle = null;
        this.form.shortDescription = null;
        this.$refs.bgImg.value = null;
      });
    },
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


<template>
  <div class="card-wrap">
    <div class="card-body">
      <div class="container col-8">
        <div class="my-4">
          <label class="form-label">Background Image</label>
          <div class="input-group input-group-sm">
            <input
              class="form-control shadow-none"
              :value="bgImg"
              type="file"
              @input="bgImg = $event.target.value"
              ref="bgImg"
            />
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgImg: null,
    };
  },
};
</script>


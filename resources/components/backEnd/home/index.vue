<template>
  <div class="card-wrap">
    <div class="card-body">
        <table class="table table-dark table-sm table-striped table-hover table-borderless text-center">
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
                <tr>
                    <th class="align-middle">1</th>
                    <td class="align-middle">Background</td>
                    <td class="align-middle">Background</td>
                    <td class="align-middle">Background</td>
                    <td class="align-middle">Background</td>
                    <td class="align-middle">Background</td>
                </tr>
            </tbody>
        </table>
      <!-- <table
        class="
          table table-sm table-dark table-striped table-hover table-borderless
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
          <tr v-for="(data, i) in datas" :key="i">
            <td class="align-middle">
              <main :class="`bg-${data.bgColor} position-relative rounded`">
                <img
                  :src="data.bgImg"
                  :class="`card-img img-fluid opacity-${data.bgOpacity} h-100`"
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
            <td class="align-middle">{{ data.name }}</td>
            <td class="align-middle">{{ data.focusTitle }}</td>
            <td class="align-middle">{{ data.shortDescription }}</td>
            <td class="align-middle">
              <router-link :to="{name:'editHome', params:{id:data.id}}" class="btn btn-sm btn-primary">
                <i class="fas fa-edit"></i>
              </router-link>
            </td>
          </tr>
          <th class="align-middle">#</th>
          <td class="align-middle">Background</td>
          <td class="align-middle">Name</td>
          <td class="align-middle">Focus Title</td>
          <td class="align-middle">Short Description</td>
          <td class="align-middle">Action</td>
        </tbody>
      </table> -->
    </div>
  </div>
</template>

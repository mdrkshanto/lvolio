<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <h3 class="card-title col">{{ $route.meta.card }}</h3>
        <a href="#" class="col-1 btn btn-primary btn-sm shadow-none">Button</a>
      </div>
    </div>
    <div class="card-body">
      <table
        class="
          table table-dark
          bg-black
          table-sm table-striped table-borderless
          rounded
        "
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jamal</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer">Footer</div>
  </div>
</template>

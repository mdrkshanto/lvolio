<template>
  <div class="container-fluid m-0 p-0">
    <header
      class="
        navbar navbar-expand
        justify-content-between
        navbar-dark
        bg-dark bg-gradient
        sticky-top
        py-0
        small
        d-none d-lg-flex
      "
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            href="mailto:bdshanto@outlook.com"
            class="nav-link py-0"
            data-bs-toggle="tooltip"
            title="Email: bdshanto@outlook.com"
            ><i class="bi bi-mailbox2"></i
          ></a>
        </li>
        <li class="nav-item">
          <a
            href="tel:+8801978167206"
            class="nav-link py-0"
            data-bs-toggle="tooltip"
            title="Phone: 01978167206"
            ><i class="fas fa-phone-alt"></i
          ></a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            href="http://facebook.com/mdrkshantobd"
            target="_blank"
            class="nav-link py-0"
            data-bs-toggle="tooltip"
            title="fb ID: mdrkshantobd"
            ><i class="fab fa-facebook-f"></i
          ></a>
        </li>
        <li class="nav-item">
          <a
            href="http://github.com/mdrkshanto"
            target="_blank"
            class="nav-link py-0"
            data-bs-toggle="tooltip"
            title="Github ID: mdrkshanto"
            ><i class="fab fa-github"></i
          ></a>
        </li>
      </ul>
    </header>

    <nav class="navbar navbar-expand-md navbar-dark bg-black sticky-top py-0">
      <a href="index.html" class="navbar-brand">Md Rezaul Karim Shanto</a>
      <button
        class="navbar-toggler shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target=".mainMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse mainMenu justify-content-end">
        <ul class="navbar-nav align-items-center">
          <li class="nav-item">
            <a href="index.html" class="nav-link active">Home</a>
          </li>
          <li class="nav-item">
            <a href="about.html" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="resume.html" class="nav-link">Resume</a>
          </li>
          <li class="nav-item">
            <a href="skills.html" class="nav-link">Skills</a>
          </li>
          <li class="nav-item">
            <a href="contact.html" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="bg-black text-light homeVh">
      <img
        src="frontEnd/assets/img/home/bg/16429480821117893020.webp"
        class="card-img img-fluid opacity-25 h-100"
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
      >
        <h3 class="card-title fw-bolder">
          <span class="me-1">I am</span
          ><span class="text-capitalize ms-1">Md Rezaul Karim Shanto</span>
        </h3>
        <span class="display-4 fw-bolder text-capitalize"
          >full stack web developer</span
        >
        <p class="lead w-50 text-center">
          I am a fully professional full stack web developer Involving with
          latest web designing and technologies is a great feel free to contact
          creative.
        </p>
      </section>
    </main>

    <footer class="navbar navbar-dark bg-black justify-content-center py-0">
      <div class="fw-bolder text-light">
        <i class="fas fa-copyright"></i> Copyright - {{ new Date().getFullYear() }}
      </div>
    </footer>
  </div>
</template>
<script>
export default {
};
</script>
<style scoped>
.text-justify {
  text-align: justify;
}

::placeholder {
  text-transform: capitalize;
}
</style>

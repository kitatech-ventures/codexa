<template>
  <footer class="py-5 mb-5 mt-auto border-top">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">
      <div class="col mb-3">
        <router-link to="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
          <h5 class="mb-0 fw-semibold text-primary">Codexa</h5>
        </router-link>
        <p class="text-muted">&copy; {{ new Date().getFullYear() }} Aisy Iskandar 👨🏻‍💻</p>
        <p class="text-muted">MMC3113 - User Experience Design</p>

        <div class="d-flex fs-5 text-primary">
          <a href="https://discord.com" class="nav-link p-0" target="_blank"><i class="bi bi-discord me-3"></i></a>
          <a href="https://stackoverflow.com" class="nav-link p-0" target="_blank"><i
              class="bi bi-stack-overflow me-3"></i></a>
          <a href="https://github.com" class="nav-link p-0" target="_blank"><i class="bi bi-github me-3"></i></a>
        </div>
      </div>

      <div class="col mb-3"></div>

      <div class="col mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><router-link to="/" class="nav-link p-0 text-muted">Home</router-link></li>
          <li class="nav-item mb-2"><router-link to="/features" class="nav-link p-0 text-muted">Features</router-link>
          </li>
          <li class="nav-item mb-2"><router-link to="/pricing" class="nav-link p-0 text-muted">Pricing</router-link>
          </li>
          <li class="nav-item mb-2"><router-link to="/faqs" class="nav-link p-0 text-muted">FAQs</router-link></li>
        </ul>
      </div>

      <div class="col mb-3">
        <h5>Prototype</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="https://drive.google.com/drive/folders/1UtUtqgHbjRH9aIUxwaXWIfsWl7EFmHXe"
              class="nav-link p-0 text-muted" target="_blank">Low-Fidelity</a></li>
          <li class="nav-item mb-2"><a
              href="https://www.figma.com/design/5MJ1xdfqH50UemGLGQNuoY/Codexa---Prototype?node-id=0-1&t=swyhukt2q6r7Bdul-1"
              target="_blank" class="nav-link p-0 text-muted">High-Fidelity</a></li>
          <li class="nav-item mb-2"><a href="https://drive.google.com/drive/folders/1Ee7lZYkui8bZ3P92FesKN5fTCtdp5Dr5"
              class="nav-link p-0 text-muted" target="_blank">Sitemap</a></li>
        </ul>
      </div>

      <div class="col mb-3">
        <h5>Assignments</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="https://drive.google.com/drive/folders/1jdX1kqA-0ciUjinrLbtCyzw2YHzRzl22"
              class="nav-link p-0 text-muted" target="_blank">Report</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
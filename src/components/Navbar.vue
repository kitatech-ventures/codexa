<template>
  <header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom sticky-top bg-white">
    <div class="col-md-3 mb-2 mb-md-0">
      <router-link to="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <h5 class="mb-0 fw-semibold text-primary">Codexa</h5>
      </router-link>
    </div>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <router-link to="/" class="nav-link px-3 text-dark" active-class="link-primary fw-semibold">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/features" class="nav-link px-3 text-dark" active-class="link-primary fw-semibold">
          Features
        </router-link>
      </li>
      <li>
        <router-link to="/pricing" class="nav-link px-3 text-dark" active-class="link-primary fw-semibold">
          Pricing
        </router-link>
      </li>
      <li>
        <router-link to="/faqs" class="nav-link px-3 text-dark" active-class="link-primary fw-semibold">
          FAQs
        </router-link>
      </li>
    </ul>

    <div class="col-md-3 text-end">
      <router-link to="/login" class="btn btn-primary rounded-5">Log In <i class="bi bi-person"></i></router-link>
    </div>
  </header>
</template>

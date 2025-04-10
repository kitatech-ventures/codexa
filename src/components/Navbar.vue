<template>
  <header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom sticky-top bg-white">
    <div class="col-md-3 mb-2 mb-md-0">
      <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <h5 class="mb-0 fw-semibold text-primary">Codexa</h5>
      </a>
    </div>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a :href="'/'" :class="getLinkClass('/')">Home</a></li>
      <li><a :href="'/features'" :class="getLinkClass('/features')">Features</a></li>
      <li><a :href="'/pricing'" :class="getLinkClass('/pricing')">Pricing</a></li>
      <li><a :href="'/faqs'" :class="getLinkClass('/faqs')">FAQs</a></li>
    </ul>

    <div class="col-md-3 text-end">
      <a href="/login" class="btn btn-primary rounded-5">Log In <i class="bi bi-person"></i></a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentPath = ref('/')

onMounted(() => {
  currentPath.value = window.location.pathname
})

const getLinkClass = (path) => {
  return currentPath.value === path
    ? 'nav-link px-3 text-primary fw-semibold' // active style
    : 'nav-link px-3 link-dark' // default
}
</script>

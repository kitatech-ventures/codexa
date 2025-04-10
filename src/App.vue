<template>
  <main class="d-flex flex-column min-vh-70">
    <div class="flex-grow-1">
      <div class="container">
        <Navbar />
        <router-view />
      </div>
    </div>
  </main>
  <div class="container">
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scopped>
.min-vh-70 {
  min-height: 70vh;
}
</style>

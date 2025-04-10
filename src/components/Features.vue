<template>
  <div class="my-5">
    <div class="text-center mb-5">
      <h1>Features</h1>
      <p class="text-muted">Codexa is more than just an AI chat—it's your full-stack coding companion. Explore a
        powerful suite of tools built for developers: from instant code generation and smart debugging to team
        collaboration and multi-model support with GPT-4o, Claude, DeepSeek, and more. Whatever you build, Codexa helps
        you build it better.</p>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
      <div class="col" v-for="(feature, index) in features" :key="index">
        <div class="card h-100">
          <div class="card-body m-3">
            <p><span class="alert alert-primary shadow p-2 mb-1 fs-5">{{ feature.icon }}</span></p>
            <h5 class="card-title">{{ feature.title }}</h5>
            <p class="card-text">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/images/features.webp" alt="Features" class="rounded">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import featuresData from '@/data/features-data.json'

const features = ref([])

onMounted(() => {
  features.value = featuresData
})
</script>

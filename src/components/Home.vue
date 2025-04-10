<template>
  <div class="my-5 py-5 text-center">
    <p>{{ malaysiaDate }} <span class="ms-3 text-muted">Product</span></p>
    <h1 class="mb-4">Introducing <span class="text-primary text-decoration-underline">Codexa</span></h1>
    <p class="text-muted mb-5">Malaysia's first AI-powered platform designed specifically for developers. From
      code generation to debugging and learning, Codexa brings the power of cutting-edge AI models like GPT-4o, Claude,
      and DeepSeek into one seamless experience. Whether you're a solo coder, a student, or a full-stack team, Codexa
      helps you build smarter, faster, and better — all from right here in Malaysia 🚀</p>
    <router-link to="/login" class="btn btn-primary rounded-5">Start Now <i
        class="bi bi-arrow-up-right"></i></router-link>
  </div>
  <div class="my-5 py-5">
    <div class="text-center">
      <h3 class="mb-4">AI Models That Power Code</h3>
      <p class="text-muted mb-5">Codexa brings you the best of AI by combining industry-leading models like OpenAI,
        Claude, and DeepSeek. Each model is optimized for different development tasks — so you
        always have the right brain for the job 👨🏻‍💻
      </p>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
      <div class="col" v-for="(model, index) in aiModels" :key="index">
        <div class="card h-100">
          <div class="card-body m-3">
            <h5 class="card-title">{{ model.name }}</h5>
            <p class="card-text">{{ model.description }}</p>
            <ul>
              <li v-for="model in model.models" :key="model">{{ model }}</li>
            </ul>
          </div>
          <div class="card-footer bg-white border-0 m-3">
            <a :href="model.link" target="_blank" class="btn btn-primary rounded-5">Learn More <i
                class="bi bi-arrow-up-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="alert alert-primary p-5">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h3 class="mb-4">Code smarter. Build faster. Together.</h3>
        <p class="mb-5">Codexa is your all-in-one AI coding assistant, combining the power of top models like GPT-4o,
          Claude, and
          DeepSeek to supercharge your development workflow. Whether you're debugging, learning, or shipping production
          code — <strong>Codexa</strong> helps you do it faster, cleaner, and with confidence.
        </p>
        <router-link to="/login" class="btn btn-primary rounded-5">Start Now <i class="bi bi-arrow-up-right"></i></router-link>
      </div>
      <div class="text-end d-none d-md-block">
        <img src="@/assets/images/robot.png" class="img-fluid w-70" alt="Robot">
      </div>
    </div>
  </div>
  <div class="my-5 py-5 text-center">
    <h3 class="mb-4">Trusted by dev teams at</h3>
    <p class="text-muted mb-5">Well known companies and SME in Malaysia 🇲🇾</p>
    <div class="row row-cols-3 row-cols-lg-6 text-center g-4 align-items-center">
      <div class="col">
        <img src="@/assets/images/g2g.png" class="img-fluid w-50" alt="G2G">
      </div>
      <div class="col">
        <img src="@/assets/images/paynet.png" class="img-fluid w-50" alt="PayNet">
      </div>
      <div class="col">
        <img src="@/assets/images/setel.png" class="img-fluid w-50" alt="Setel">
      </div>
      <div class="col">
        <img src="@/assets/images/proton.png" class="img-fluid w-50" alt="Proton">
      </div>
      <div class="col">
        <img src="@/assets/images/sd-guthrie.png" class="img-fluid w-75" alt="SD Guthrie">
      </div>
      <div class="col">
        <img src="@/assets/images/petronas.png" class="img-fluid w-50" alt="Petronas">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import aiModelsData from '@/data/ai-models-data.json'

const malaysiaDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  timeZone: 'Asia/Kuala_Lumpur',
});
const aiModels = ref([])

onMounted(() => {
  aiModels.value = aiModelsData
})
</script>

<style scoped>
.w-70 {
  width: 70%;
}
</style>

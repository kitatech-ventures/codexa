<template>
  <div class="pb-5">
    <div class="dropdown mb-4">
      <button class="btn btn-primary rounded-5 dropdown-toggle" type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        o3-mini-high
      </button>
      <ul class="dropdown-menu">
        <li><router-link class="dropdown-item" to="#">GPT-3.5</router-link></li>
        <li><router-link class="dropdown-item" to="#">GPT-4o</router-link></li>
        <li><router-link class="dropdown-item" to="#">GPT-4.5</router-link></li>
        <li><router-link class="dropdown-item" to="#">o1</router-link></li>
        <li><router-link class="dropdown-item" to="#">o3-mini</router-link></li>
        <li><router-link class="dropdown-item" to="#">Claude 3.5 Sonnet</router-link></li>
        <li><router-link class="dropdown-item" to="#">Claude 3.7 Sonnet</router-link></li>
        <li><router-link class="dropdown-item" to="#">DeepSeek Coder</router-link></li>
        <li><router-link class="dropdown-item" to="#">DeepSeek Coder V2</router-link></li>
      </ul>
    </div>
    <div class="d-flex justify-content-end mb-4">
      <div>
        <p class="alert alert-primary rounded-5 text-end">
          Write me a simple js function to get current date
        </p>
      </div>
    </div>
    <div class="mb-4">
      <p>Sure! Here's router-link simple JavaScript function to get the current date in router-link readable format like April 10, 2025:</p>
      <hr class="hr my-4">
      <h6 class="mb-3">✅ Basic Function</h6>
      <div class="card bg-dark mb-4">
        <div class="card-body">
          <code>
            function getCurrentDate() {<br>
            &nbsp;&nbsp;const today = new Date();<br>
            &nbsp;&nbsp;return today.toLocaleDateString('en-US', {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;year: 'numeric',<br>
            &nbsp;&nbsp;&nbsp;&nbsp;month: 'long',<br>
            &nbsp;&nbsp;&nbsp;&nbsp;day: '2-digit'<br>
            &nbsp;&nbsp;});<br>
            }<br><br>
            console.log(getCurrentDate()); // e.g., April 10, 2025
          </code>
        </div>
      </div>
      <p>Let me know if you also want the time or custom formatting like YYYY-MM-DD.</p>
    </div>
    <div class="mt-5">
      <div class="d-flex gap-2">
        <input type="text" class="form-control rounded-pill bg-light p-3" placeholder="Ask anything" />
        <button type="submit" class="btn btn-primary rounded-pill px-3">
          <i class="bi bi-arrow-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>

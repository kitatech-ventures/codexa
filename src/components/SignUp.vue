<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="card p-3 p-md-5 my-5 bg-white">
        <form method="POST" action="#">
          <h3>Sign Up</h3>
          <p class="mb-4"> Let's get started with Codexa 💫</p>
          <div class="form-floating mb-2">
            <input type="text" class="form-control bg-light" id="floatingInput" placeholder="John Doa" required
              autofocus>
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating mb-2">
            <input type="email" class="form-control bg-light" id="floatingInput" placeholder="name@example.com" required
            autocomplete="email" autofocus>
            <label for="floatingInput">Email Address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control bg-light" id="floatingPassword" placeholder="Password"
              name="password" required autocomplete="current-password">
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-4">
            <input class="form-check-input me-2" type="checkbox" name="remember" id="remember">
            <label class="form-check-label" for="remember">
              By signing up for Codexa, I agree to the Terms & Conditions.
            </label>
          </div>
          <!-- <button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button> -->
          <a href="/chat" class="w-100 btn btn-lg btn-primary">Sign Up</a>
        </form>
        <p class="my-4">Already have an account? <a href="/login" class="text-decoration-none">Log in</a></p>
        <div class="row row-cols-3 g-3">
          <div class="col">
            <a href="#">
              <div class="card text-center d-flex align-items-center">
                <div class="p-3">
                  <img src="@/assets/images/google.webp" class="img-fluid w-20" alt="Google">
                </div>
              </div>
            </a>
          </div>
          <div class="col">
            <a href="#">
              <div class="card h-100 text-center">
                <div class="p-3">
                  <img src="@/assets/images/apple.png" class="img-fluid w-20" alt="Apple">
                </div>
              </div>
            </a>
          </div>
          <div class="col">
            <a href="#">
              <div class="card h-100 text-center">
                <div class="p-3">
                  <img src="@/assets/images/microsoft.png" class="img-fluid w-20" alt="Microsoft">
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scopped>
.w-20 {
  width: 20%;
}
</style>

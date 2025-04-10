<template>
  <div class="my-5">
    <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
      <div class="col">
        <div>
          <h1>FAQs</h1>
          <p class="text-muted">
            Got questions 🤔 We've got answers. Codexa's FAQ page covers everything you need to know about our AI coding
            assistant—from pricing and supported models to features, security, and how to get started. Whether you're a
            solo dev or managing a whole team, find the info you need right here.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                <span class="fw-semibold">What is Codexa?</span>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>Codexa</strong> is an AI-powered coding assistant platform that brings together multiple
                top-tier AI models—like GPT-4o, DeepSeek, and Claude—to help developers write, debug, and understand
                code faster and smarter.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <span class="fw-semibold">What can I do with Codexa?</span>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                With <strong>Codexa</strong>, you can:
                <ul>
                  <li>Generate and refactor code</li>
                  <li>Get instant explanations of code snippets</li>
                  <li>Debug complex logic</li>
                  <li>Auto-generate unit tests</li>
                  <li>Explore different languages and frameworks</li>
                  <li>Collaborate with teammates via shared AI sessions</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                aria-expanded="true" aria-controls="collapseThree">
                <span class="fw-semibold">Which AI models do you support?</span>
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                We integrate a wide range of AI coding models, including:
                <ul>
                  <li>OpenAI - GPT-3.5, GPT-4.o, o1, 03-mini, & o3-mini-high</li>
                  <li>DeepSeeker - DeepSeeker Coder & DeepSeeker Coder V2</li>
                  <li>Claude - Claude 3.5/3.7 Sonnet & Claude Instant</li>
                  <li>More models are being added in the future!</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                aria-expanded="true" aria-controls="collapseFour">
                <span class="fw-semibold">Is there a free plan?</span>
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Yes! Our <strong>Free Plan</strong> gives you access to basic AI capabilities like syntax help, simple
                code generation, and limited usage of o1 and DeepSeek models.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive"
                aria-expanded="true" aria-controls="collapseFive">
                <span class="fw-semibold">Can I switch between AI models?</span>
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Absolutely. On <strong>Pro plans and above</strong>, you can choose the model you want per session—ideal
                for comparing results or using models specialized for different tasks.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix"
                aria-expanded="true" aria-controls="collapseSix">
                <span class="fw-semibold">Do you support team collaboration?</span>
              </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Yes! Our <strong>Team and Enterprise plans</strong> offer shared workspaces, collaborative chat
                histories, and team-based usage analytics to help your dev squad move faster.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                aria-expanded="true" aria-controls="collapseSeven">
                <span class="fw-semibold">How secure is Codexa?</span>
              </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                We prioritize your data security. For <strong>Enterprise</strong> customers, we offer private
                deployments, encrypted sessions, and compliance with standards like <strong>SOC 2, GDPR, and
                  more</strong>.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingEight">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight"
                aria-expanded="true" aria-controls="collapseEight">
                <span class="fw-semibold">Do you have an API?</span>
              </button>
            </h2>
            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Yes! Our <strong>Plus plans and above</strong> include API access. You can integrate Codexa's AI
                features directly into your apps or dev environment.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingNine">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine"
                aria-expanded="true" aria-controls="collapseNine">
                <span class="fw-semibold">What's your refund or cancellation policy?</span>
              </button>
            </h2>
            <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                You can cancel any time—no strings attached. If you're not satisfied, just contact us within 14 days of
                payment and we'll issue a full refund for that period.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTen">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen"
                aria-expanded="true" aria-controls="collapseTen">
                <span class="fw-semibold">How do I get started?</span>
              </button>
            </h2>
            <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Sign up for free, choose a plan, and start chatting with your AI coding assistant in seconds. No credit
                card needed for the Free plan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

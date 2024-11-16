<template>
  <q-page class="row items-center justify-evenly bg-gradient q-py-xl">
    <q-page-container>
      <!-- Storytelling Carousel Section -->
      <!-- <section class="q-py-xl bg-white">
        <q-carousel animated v-model="slide" arrows navigation infinite autoplay transition-prev="slide-right"
          transition-next="slide-left"> -->

      <!-- Slide 1 -->
      <!-- <q-carousel-slide name="slide-1" class="bg-gradient q-px-lg">
            <div class="row items-center">
              <div class="col-12 col-md-6">
                <h2 class="text-h4 text-weight-bold text-white q-mb-md">Empowering Communities</h2>
                <p class="text-body1 text-white">
                  We create innovative software solutions to solve real-world problems and help businesses thrive.
                </p>
              </div>
              <div class="col-12 col-md-6">
                <img src="/assets/digital_image_2.png" alt="Empowering Communities"
                  class="full-width rounded-borders" />
              </div>
            </div>
          </q-carousel-slide> -->

      <!-- Slide 2 -->
      <!-- <q-carousel-slide name="slide-2" class="bg-gradient q-px-lg">
            <div class="row items-center">
              <div class="col-12 col-md-6 order-last order-md-first">
                <h2 class="text-h4 text-weight-bold text-white q-mb-md">Our First Product: WastePro</h2>
                <p class="text-body1 text-white">
                  WastePro simplifies waste management by streamlining payments, billing, and debt tracking.
                </p>
              </div>
              <div class="col-12 col-md-6 fit-height">
                <img src="/assets/wastepro-product.jpg" alt="WastePro" class="full-width rounded-borders" />
              </div>
            </div>
          </q-carousel-slide> -->

      <!-- Slide 3 -->
      <!-- <q-carousel-slide name="slide-3" class="bg-gradient q-px-lg">
            <div class="row items-center">
              <div class="col-12 col-md-6">
                <h2 class="text-h4 text-weight-bold text-white q-mb-md">Streamline Waste Operations</h2>
                <p class="text-body1 text-white">
                  Address critical challenges with tools that improve efficiency and reduce operational costs.
                </p>
              </div>
              <div class="col-12 col-md-6">
                <img src="/assets/operations.jpg" alt="Operations Efficiency" class="full-width rounded-borders" />
              </div>
            </div>
          </q-carousel-slide> -->

      <!-- Slide 4 -->
      <!-- <q-carousel-slide name="slide-4" class="bg-gradient q-px-lg">
            <div class="row items-center">
              <div class="col-12 col-md-6 order-last order-md-first">
                <h2 class="text-h4 text-weight-bold text-white q-mb-md">Driving Sustainability</h2>
                <p class="text-body1 text-white">
                  Contributing to environmental sustainability through smarter waste management solutions.
                </p>
              </div>
              <div class="col-12 col-md-6">
                <img src="/assets/sustainability.jpg" alt="Sustainability" class="full-width rounded-borders" />
              </div>
            </div>
          </q-carousel-slide> -->

      <!-- Slide 5 -->
      <!-- <q-carousel-slide name="slide-5" class="bg-gradient q-px-lg">
            <div class="row items-center">
              <div class="col-12 col-md-6">
                <h2 class="text-h4 text-weight-bold text-white q-mb-md">Boundless Edge Vision</h2>
                <p class="text-body1 text-white">
                  We're just getting started, and we're excited to keep building solutions that make a difference.
                </p>
              </div>
              <div class="col-12 col-md-6">
                <img src="/assets/vision.jpg" alt="Boundless Edge Vision" class="full-width rounded-borders" />
              </div>
            </div>
          </q-carousel-slide> -->
      <!-- </q-carousel>
      </section> -->
      <!-- Hero Section -->
      <section class="q-pa-md q-py-xl">
        <div class="row items-center q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <h1 class="text-h2 text-weight-bold text-white q-mb-md">Revolutionize Waste Management Operations</h1>
            <p class="text-h5 text-white-opacity q-mb-lg">Streamline payments, manage billing, and track debts – all
              with WastePro.</p>
            <div class="row q-col-gutter-md">
              <div class="col-auto">
                <q-btn to="/auth/signin" unelevated style="background-color: #1976D2;" size="lg" label="Get Started Now" />
              </div>
              <div class="col-auto">
                <q-btn outline color="white" size="lg" label="Learn More" />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img src="/assets/nathan-cima-TQuq2OtLBNU-unsplash.jpg" alt="Dashboard Mockup" class="full-width" />
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="q-py-xl bg-white q-px-lg">
        <div class="text-center q-mb-xl">
          <h2 class="text-h3 text-weight-bold text-purple">Why WastePro?</h2>
        </div>

        <div class="row items-center q-col-gutter-xl q-py-lg">
          <div class="col-12 col-md-6 q-px-xl">
            <h3 class="text-h4 q-mb-md text-blue">Streamline Payments and Invoicing</h3>
            <p class="text-body1">Simplify your billing process with automated invoicing and payment tracking. Save time
              and reduce errors with our intuitive system.</p>
          </div>
          <div class="col-12 col-md-6">
            <img src="/assets/WastePro_Payment_Ui_2.png" alt="Payment Tracking UI" class="rounded-borders shadow-md" />
          </div>
        </div>

        <div class="row items-center q-col-gutter-xl q-py-lg">
          <div class="col-12 col-md-6 order-last order-md-first">
            <img src="/assets/Wastepro_Defaulters_Ui.png" alt="Debt Management Process"
              class="rounded-borders shadow-md" />
          </div>
          <div class="col-12 col-md-6 q-px-xl">
            <h3 class="text-h4 q-mb-md text-blue">Track and Manage Debts Effortlessly</h3>
            <p class="text-body1">Keep track of outstanding payments and manage client relationships with our
              comprehensive debt management tools.</p>
          </div>
        </div>

        <div class="text-center q-mt-lg">
          <q-btn unelevated color="primary" label="See How It Works" size="lg" to="/auth/signin" />
        </div>
      </section>

      <!-- Testimonials Section -->
      <!-- <section class="q-py-xl bg-gradient">
        <div class="row items-center q-col-gutter-xl">
          <div class="col-12 col-md-6">
            <q-carousel animated v-model="slide" arrows navigation infinite autoplay>
              <q-carousel-slide name="1" class="column items-center justify-center text-white q-pa-xl">
                <p class="text-h6 text-italic text-center">"WastePro has made our billing 10x easier!"</p>
                <p class="text-subtitle1">– PSP Operator</p>
              </q-carousel-slide>
              <q-carousel-slide name="2" class="column items-center justify-center text-white q-pa-xl">
                <p class="text-h6 text-italic text-center">"The best investment we've made for our operations."</p>
                <p class="text-subtitle1">– Waste Management Company</p>
              </q-carousel-slide>
            </q-carousel>
          </div>
          <div class="col-12 col-md-6 full-width">
            <img src="/api/placeholder/400/200" alt="Happy Clients" class="rounded-borders shadow-lg" />
          </div>
        </div>
      </section> -->
    </q-page-container>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const slide = ref(0);
</script>

<style scoped lang="scss">
.fit-height {
  height: 300px;
  object-fit: cover;
}

.rounded-borders {
  border-radius: 8px;
  max-width: 100%;
  height: auto;
}

.bg-gradient {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
}

.text-purple {
  color: #6a11cb;
}

.text-blue {
  color: #2575fc;
}

.rounded-borders {
  border-radius: 8px;
}

.shadow-lg {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}
</style>

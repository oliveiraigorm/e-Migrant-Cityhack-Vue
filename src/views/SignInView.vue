<script setup>
import { reactive } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import helloImg from '@/assets/img/hello.jpeg'

const form = reactive({
  email: '',
  password: '',
})

function handleLogin() {
  // Placeholder — integrate real auth here
  alert('Login functionality coming soon!')
}
</script>

<template>
  <div>
    <PageHeader :background-image="helloImg" title="Welcome Back!" />

  <section class="container mb-5">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card info-card my-4">
          <div class="card-body p-4">
            <h5 class="card-title text-center mb-4">Login</h5>
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                />
              </div>
              <div class="mb-4">
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <button class="btn btn-primary w-100" type="submit">Enter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

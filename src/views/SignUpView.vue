<script setup>
import { reactive, ref } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import joinImg from '@/assets/img/join.jpeg'

const activePanel = ref('')

function toggle(panel) {
  activePanel.value = activePanel.value === panel ? '' : panel
}

const immigrant = reactive({
  fullName: '',
  status: '',
  birthDate: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const partner = reactive({
  name: '',
  type: '',
  email: '',
  password: '',
  confirmPassword: '',
})

function submitImmigrant() {
  alert('Immigrant sign-up coming soon!')
}

function submitPartner() {
  alert('Partner sign-up coming soon!')
}
</script>

<template>
  <PageHeader :background-image="joinImg" title="Join Us!" />

  <section class="container mb-5">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-6 mx-auto">
        <!-- Immigrant Panel -->
        <div class="mb-4">
          <h2
            class="post-title mb-3"
            role="button"
            @click="toggle('immigrant')"
            style="cursor: pointer"
          >
            <i
              class="fas me-2"
              :class="activePanel === 'immigrant' ? 'fa-chevron-down' : 'fa-chevron-right'"
            ></i>
            Immigrant
          </h2>

          <Transition name="fade">
            <div v-if="activePanel === 'immigrant'" class="card info-card">
              <div class="card-body p-4">
                <h5 class="card-title text-center mb-4">Sign Up</h5>
                <form @submit.prevent="submitImmigrant">
                  <div class="mb-3">
                    <input
                      v-model="immigrant.fullName"
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <select v-model="immigrant.status" class="form-select" required>
                      <option value="" disabled>Status</option>
                      <option value="student">Student</option>
                      <option value="worker">Worker</option>
                      <option value="refugee">Refugee</option>
                      <option value="volunteer">Volunteer</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label small text-muted">Birth Date</label>
                    <input
                      v-model="immigrant.birthDate"
                      type="date"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      v-model="immigrant.email"
                      type="email"
                      class="form-control"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      v-model="immigrant.password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      v-model="immigrant.confirmPassword"
                      type="password"
                      class="form-control"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                  <button class="btn btn-primary w-100" type="submit">Sign up</button>
                </form>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Local Partner Panel -->
        <div>
          <h2
            class="post-title mb-3"
            role="button"
            @click="toggle('partner')"
            style="cursor: pointer"
          >
            <i
              class="fas me-2"
              :class="activePanel === 'partner' ? 'fa-chevron-down' : 'fa-chevron-right'"
            ></i>
            Local Partner
          </h2>

          <Transition name="fade">
            <div v-if="activePanel === 'partner'" class="card info-card">
              <div class="card-body p-4">
                <h5 class="card-title text-center mb-4">Sign Up</h5>
                <form @submit.prevent="submitPartner">
                  <div class="mb-3">
                    <input
                      v-model="partner.name"
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <select v-model="partner.type" class="form-select" required>
                      <option value="" disabled>Type</option>
                      <option value="public">Public Institution / Company</option>
                      <option value="private">Private Institution / Company</option>
                      <option value="citizen">Local Citizen</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <input
                      v-model="partner.email"
                      type="email"
                      class="form-control"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      v-model="partner.password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      v-model="partner.confirmPassword"
                      type="password"
                      class="form-control"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                  <button class="btn btn-primary w-100" type="submit">Sign up</button>
                </form>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

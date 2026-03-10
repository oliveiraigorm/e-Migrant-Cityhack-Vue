<script setup>
import { reactive, ref } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import contactImg from '@/assets/img/contact-bg.jpg'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  // In a real app this would call an API
  submitted.value = true
  setTimeout(() => (submitted.value = false), 4000)
  form.name = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}
</script>

<template>
  <PageHeader
    :background-image="contactImg"
    title="Contact Us"
    subtitle="Have questions?"
  />

  <section class="container mb-5">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <p>
          Want to get in touch? Fill out the form below to send us a message and
          we will get back to you as soon as possible!
        </p>

        <div v-if="submitted" class="alert alert-success" role="alert">
          Your message has been sent. We&rsquo;ll be in touch!
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-control"
              placeholder="Your name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-control"
              placeholder="you@example.com"
              required
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone Number</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              class="form-control"
              placeholder="+351 000 000 000"
              required
            />
          </div>
          <div class="mb-4">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              class="form-control"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>

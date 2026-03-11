<script setup>
import PageHeader from '@/components/PageHeader.vue'
import healthImg from '@/assets/img/health.jpeg'
</script>

<template>
  <div>
    <PageHeader :background-image="healthImg" we-are="Health" />

  <section class="container mb-5">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <article>
          <h2>How can I use the public hospital?</h2>
          <p>
            Anyone can use the public hospital here in Portugal, but you pay more
            if you are not registered at a health center. For the registration,
            you only need a <strong>NIF</strong> and you will pay the same amount
            that a Portuguese citizen would pay.
          </p>
          <p>
            Don&rsquo;t have a NIF?
            <RouterLink to="/legal">Click here to learn more</RouterLink>
          </p>
        </article>
      </div>
    </div>
  </section>
  </div>
</template>

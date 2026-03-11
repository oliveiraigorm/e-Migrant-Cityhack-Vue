<script setup>
import PageHeader from '@/components/PageHeader.vue'
import studentsImg from '@/assets/img/students.jpg'
</script>

<template>
  <div>
    <PageHeader :background-image="studentsImg" we-are="Education" />

  <section class="container mb-5">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <article class="post-preview">
          <h2 class="post-title">CityHack 2020 Will Begin Soon</h2>
          <h3 class="post-subtitle">
            The first 100% online edition of CityHack
          </h3>
          <p class="post-meta">
            Check the link below:
            <a href="https://www.cityhack.pt" target="_blank" rel="noopener">
              CityHack 2020 website
            </a>
          </p>
        </article>
      </div>
    </div>
  </section>
  </div>
</template>

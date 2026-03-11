<script setup>
import PageHeader from '@/components/PageHeader.vue'
import studentsImg from '@/assets/img/students.jpg'
import campusImg from '@/assets/img/campus.png'
import guideeImg from '@/assets/img/guidee.png'
import newsImg from '@/assets/img/news.png'

const categories = [
  { to: '/education/institutions', image: campusImg, label: 'Institutions & Universities' },
  { to: '/education/guidance', image: guideeImg, label: 'Guidance' },
  { to: '/education/news', image: newsImg, label: 'News' },
]
</script>

<template>
  <div>
    <PageHeader :background-image="studentsImg" we-are="Education" />

  <section class="container mb-5">
    <div class="row g-4 justify-content-center">
      <div
        v-for="cat in categories"
        :key="cat.label"
        class="col-lg-3 col-md-4 col-6 text-center"
      >
        <RouterLink :to="cat.to" class="text-decoration-none">
          <div class="info-card card h-100 p-4">
            <img :src="cat.image" class="box-image mx-auto" :alt="cat.label" />
            <h5 class="mt-2 mb-0">{{ cat.label }}</h5>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
  </div>
</template>

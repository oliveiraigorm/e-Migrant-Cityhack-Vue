<script setup>
import PageHeader from '@/components/PageHeader.vue'
import PostCard from '@/components/PostCard.vue'
import communityImg from '@/assets/img/community.jpg'

const categories = [
  { title: 'Events', subtitle: 'Find events near you' },
  { title: 'Sports', subtitle: 'Watch or join sports and games' },
  { title: 'Places', subtitle: 'Get to know amazing places' },
]
</script>

<template>
  <PageHeader :background-image="communityImg" we-are="Community" />

  <section class="container mb-5">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <template v-for="(cat, i) in categories" :key="cat.title">
          <PostCard to="/post" :title="cat.title" :subtitle="cat.subtitle" />
          <hr v-if="i < categories.length - 1" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import workImg from '@/assets/img/work.jpeg'

const searchQuery = ref('')

const jobs = [
  { title: 'Web Developer', subtitle: 'Work in IT customer support' },
  { title: 'Contractor', subtitle: 'Work on construction of a building or other facilities' },
]
</script>

<template>
  <div>
    <PageHeader :background-image="workImg" we-are="Work" />

  <section class="container mb-5">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <!-- Search bar -->
        <div class="input-group mb-4">
          <input
            v-model="searchQuery"
            type="text"
            class="form-control"
            placeholder="Find Jobs"
            aria-label="Search jobs"
          />
          <span class="input-group-text">
            <i class="fas fa-search text-muted"></i>
          </span>
        </div>

        <div
          v-for="(job, i) in jobs"
          :key="i"
          class="post-preview"
        >
          <a href="#">
            <h2 class="post-title">{{ job.title }}</h2>
            <h3 class="post-subtitle">{{ job.subtitle }}</h3>
          </a>
          <hr v-if="i < jobs.length - 1" />
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import PostCard from '@/components/PostCard.vue'
import workImg from '@/assets/img/work.jpeg'

const searchQuery = ref('')

const courses = [
  { title: 'Web Development Course', subtitle: 'Learn CSS and HTML online' },
  { title: 'Electrical Repair Course', subtitle: 'Join our workshop and learn how to do electrical repair' },
  { title: 'Bakery Class', subtitle: 'Learn the basics of baking' },
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
            placeholder="Find Courses"
            aria-label="Search courses"
          />
          <span class="input-group-text">
            <i class="fas fa-search text-muted"></i>
          </span>
        </div>

        <template v-for="(course, i) in courses" :key="i">
          <PostCard to="/post" :title="course.title" :subtitle="course.subtitle" />
          <hr v-if="i < courses.length - 1" />
        </template>
      </div>
    </div>
  </section>
  </div>
</template>

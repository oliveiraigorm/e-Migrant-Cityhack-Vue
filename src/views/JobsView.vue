<script setup>
import PageHeader from '@/components/PageHeader.vue'
import PostCard from '@/components/PostCard.vue'
import workImg from '@/assets/img/work.jpeg'
</script>

<template>
  <PageHeader :background-image="workImg" we-are="Work" />

  <section class="container mb-5">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <PostCard
          to="/jobs/opportunities"
          title="Job Opportunities"
          subtitle="Search our database of available job opportunities"
        />
        <hr />
        <PostCard
          to="/jobs/courses"
          title="Professional Courses"
          subtitle="Find online and in-person courses in your area"
        />
        <hr />
        <PostCard
          to="/jobs/opportunities"
          title="Tax & Workers' Rights"
          subtitle="Find information about taxation and your rights as a worker"
        />
      </div>
    </div>
  </section>
</template>

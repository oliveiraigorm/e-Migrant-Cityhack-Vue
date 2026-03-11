<script setup>
import PageHeader from '@/components/PageHeader.vue'
import homeImg from '@/assets/img/home.jpg'
</script>

<template>
  <div>
    <PageHeader
    :background-image="homeImg"
    title="e-Migrant"
    subtitle="By linking immigrants directly with the host society, we decrease unequal opportunities"
  />

  <section class="container mb-5">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <!-- The Problem -->
        <article class="mb-5">
          <h2 class="mb-3">The Problem</h2>
          <p>
            Whether to pursue a career, obtain a better education, volunteer or
            seek asylum, adapting and fitting into a new environment is one of
            the most life-changing experiences and carries many advantages
            &mdash; yet it is quite difficult without guidance.
          </p>
          <p>
            As technology develops exponentially, more resources become available
            to help and guide immigrants to become part of the host society.
            However, it&rsquo;s not always easy and simple. Most websites and
            platforms provide basic information that is usually insufficient and
            lacks detail, alongside the fact that most of the information is
            provided only in Portuguese.
          </p>
          <p>
            All these immigrants have to spend a lot of time finding information
            and documents, navigating the web between sites in a confusing
            manner.
          </p>
        </article>

        <!-- Our Mission -->
        <article>
          <h2 class="mb-3">Our Mission</h2>
          <p>
            We promote the use of technology as a way to solve social problems.
            In a post-pandemic world, we will use the web to
            simplify the lives of immigrants.
          </p>
          <p>
            We will train and take on new leadership in the social sector and
            community development with a platform built to provide the easiest
            way for immigrants who need guidance, information, job opportunities,
            education, and community in order to integrate with the host society.
          </p>
          <p>
            Promote the use of new social-sector financial instruments and allow
            public organizations to use these tools.
          </p>
        </article>
      </div>
    </div>
  </section>
  </div>
</template>

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
        <!-- Q1 -->
        <article class="post-preview">
          <h2>How to get into a university in Portugal</h2>
          <p>
            You will need to fill out and send the
            <strong>application form</strong> and the
            <strong>learning agreement for studies or traineeships</strong>. Each
            institution has its own form, but don&rsquo;t worry &mdash; we have
            them right here! You just need to find your institution.
          </p>
          <p>
            <RouterLink to="/education/institutions" class="btn btn-sm btn-outline-primary">
              Find your institution
            </RouterLink>
          </p>
        </article>

        <hr />

        <!-- Q2 -->
        <article class="post-preview">
          <h2>How to find a place to live during my internship</h2>
          <p>
            Usually the host institution has its own residence. If it
            doesn&rsquo;t have one or it&rsquo;s full, you can ask for help from
            the <strong>ESN</strong> of that institution.
          </p>
          <p>
            Don&rsquo;t know what ESN is?
            <a href="http://www.esnportugal.org/our-work/what-we-do" target="_blank" rel="noopener">
              Learn more here
            </a>
          </p>
        </article>

        <hr />

        <!-- Q3 -->
        <article class="post-preview">
          <h2>Can I communicate only in English?</h2>
          <p>
            The <strong>ESN</strong> and the
            <strong>International Relations Office</strong> are accustomed to
            dealing with foreigners and most of them understand English.
            Don&rsquo;t forget that there will be other students on internships
            like you, so you can find others who don&rsquo;t know Portuguese but
            understand English.
          </p>
        </article>
      </div>
    </div>
  </section>
  </div>
</template>

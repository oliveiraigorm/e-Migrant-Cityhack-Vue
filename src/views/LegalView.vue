<script setup>
import PageHeader from '@/components/PageHeader.vue'
import legalImg from '@/assets/img/legal.jpg'
</script>

<template>
  <div>
    <PageHeader :background-image="legalImg" we-are="Legal" />

  <section class="container mb-5">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <article>
          <h2>Which documents are important to have?</h2>
          <p>
            First, it&rsquo;s better to have a <strong>NIF</strong>. The NIF is
            a document that identifies all the tax information of its owner.
            Without this you cannot sign any rent contract, open a bank account,
            or register at a health center.
          </p>
          <p>
            To get your NIF, you need to go to the
            <strong>finance office</strong> (Finanças) of your city and show your
            <strong>visa</strong> and <strong>proof of address</strong>.
          </p>
        </article>
      </div>
    </div>
  </section>
  </div>
</template>

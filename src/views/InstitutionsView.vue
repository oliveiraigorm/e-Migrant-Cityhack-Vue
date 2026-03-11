<script setup>
import PageHeader from '@/components/PageHeader.vue'
import studentsImg from '@/assets/img/students.jpg'
import iptIcon from '@/assets/img/ipt-icon.jpg'
import ipcbIcon from '@/assets/img/ipcb-icon.png'
import ippIcon from '@/assets/img/ipp-icon.png'
import ipgIcon from '@/assets/img/ipg-icon.jpg'

const institutions = [
  { to: '/education/institutions/ipt', image: iptIcon, label: 'IPT' },
  { to: '#', image: ipcbIcon, label: 'IPCB' },
  { to: '#', image: ippIcon, label: 'IPP' },
  { to: '#', image: ipgIcon, label: 'IPG' },
]
</script>

<template>
  <div>
    <PageHeader :background-image="studentsImg" we-are="Education" />

  <section class="container mb-5">
    <div class="row g-4 justify-content-center">
      <div
        v-for="inst in institutions"
        :key="inst.label"
        class="col-lg-3 col-md-3 col-6 text-center"
      >
        <RouterLink :to="inst.to" class="text-decoration-none">
          <div class="info-card card h-100 p-4">
            <img :src="inst.image" class="box-image mx-auto" :alt="inst.label" />
            <h5 class="mt-2 mb-0">{{ inst.label }}</h5>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
  </div>
</template>

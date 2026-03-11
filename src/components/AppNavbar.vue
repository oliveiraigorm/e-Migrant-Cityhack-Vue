<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Collapse } from 'bootstrap'
import logoImg from '@/assets/img/logo.png'

const route = useRoute()
const atTop = ref(true)
const navbarCollapse = ref(null)

function handleScroll() {
  atTop.value = window.scrollY < 50
}

// Close the mobile menu whenever the route changes
watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    const el = navbarCollapse.value
    if (el && el.classList.contains('show')) {
      Collapse.getOrCreateInstance(el).hide()
    }
  },
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    id="mainNav"
    class="navbar navbar-expand-lg fixed-top"
    :class="{ 'at-top': atTop, scrolled: !atTop }"
  >
    <div class="container">
      <RouterLink class="navbar-brand d-flex align-items-center gap-2" to="/">
        <img :src="logoImg" width="30" height="30" alt="e-Migrant logo" />
        <span>e-Migrant</span>
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu <i class="fas fa-bars ms-1"></i>
      </button>

      <div id="navbarNav" ref="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/jobs" active-class="active">Jobs</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/education" active-class="active">Education</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/legal" active-class="active">Legal</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/health" active-class="active">Health</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact" active-class="active">Contact</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/community" active-class="active">Community</RouterLink>
          </li>
          <li class="nav-item ms-lg-2">
            <RouterLink to="/signin" class="btn btn-sm btn-outline-secondary my-2 my-lg-0">
              Login
            </RouterLink>
          </li>
          <li class="nav-item ms-lg-2">
            <RouterLink to="/signup" class="btn btn-sm btn-primary my-2 my-lg-0">
              Sign Up
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link.active {
  color: #0085a1 !important;
}
</style>

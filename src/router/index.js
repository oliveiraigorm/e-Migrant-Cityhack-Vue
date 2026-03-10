import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('@/views/JobsView.vue'),
  },
  {
    path: '/jobs/opportunities',
    name: 'JobOpportunities',
    component: () => import('@/views/JobOpportunitiesView.vue'),
  },
  {
    path: '/jobs/courses',
    name: 'JobCourses',
    component: () => import('@/views/JobCoursesView.vue'),
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('@/views/EducationView.vue'),
  },
  {
    path: '/education/institutions',
    name: 'Institutions',
    component: () => import('@/views/InstitutionsView.vue'),
  },
  {
    path: '/education/institutions/ipt',
    name: 'IPT',
    component: () => import('@/views/IPTView.vue'),
  },
  {
    path: '/education/guidance',
    name: 'Guidance',
    component: () => import('@/views/GuidanceView.vue'),
  },
  {
    path: '/education/news',
    name: 'News',
    component: () => import('@/views/NewsView.vue'),
  },
  {
    path: '/legal',
    name: 'Legal',
    component: () => import('@/views/LegalView.vue'),
  },
  {
    path: '/health',
    name: 'Health',
    component: () => import('@/views/HealthView.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'),
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('@/views/CommunityView.vue'),
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/views/SignInView.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/SignUpView.vue'),
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('@/views/PostView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

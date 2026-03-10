<script setup>
defineProps({
  /** Route object or path string */
  to: { type: [String, Object], default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  meta: { type: String, default: '' },
  external: { type: Boolean, default: false },
})
</script>

<template>
  <div class="post-preview">
    <component
      :is="external ? 'a' : 'RouterLink'"
      :to="external ? undefined : to"
      :href="external ? to : undefined"
      :target="external ? '_blank' : undefined"
      :rel="external ? 'noopener' : undefined"
    >
      <h2 class="post-title">{{ title }}</h2>
      <h3 v-if="subtitle" class="post-subtitle">{{ subtitle }}</h3>
    </component>
    <p v-if="meta" class="post-meta" v-html="meta"></p>
    <slot />
  </div>
</template>

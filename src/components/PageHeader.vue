<script setup>
const props = defineProps({
  /** URL or imported image for the background */
  backgroundImage: { type: String, required: true },
  /** Main heading (optional: pass slot instead) */
  title: { type: String, default: '' },
  /** Subtitle line */
  subtitle: { type: String, default: '' },
  /** "We are ___" pattern — if provided, renders the light/bold combo */
  weAre: { type: String, default: '' },
})
</script>

<template>
  <header class="masthead" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="masthead-content">
            <slot>
              <h1 v-if="weAre">
                <span class="fw-light">We are </span>
                <span class="fw-bold">{{ weAre }}</span>
              </h1>
              <h1 v-else>{{ title }}</h1>
              <span v-if="subtitle" class="subheading">{{ subtitle }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

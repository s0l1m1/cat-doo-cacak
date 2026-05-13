<template>
  <q-card flat class="service-card" :class="{ 'service-card--featured': featured }">
    <q-card-section class="service-card__body">
      <div class="service-card__top">
        <span>{{ code }}</span>
        <span>↗</span>
      </div>

      <div class="service-card__image">
        <div class="service-card__image-label">{{ label }}</div>
      </div>

      <div class="service-card__content">
        <h3 class="service-title">
          {{ title }}
        </h3>

        <p class="service-description">
          {{ description }}
        </p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  code: {
    type: String,
    default: 'CAT-00',
  },
  label: {
    type: String,
    default: 'CAT DOO ČAČAK',
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  featured: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
.service-card {
  min-height: 280px;
  height: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--line-on-dark);
  background: #ffffff;
  color: var(--ink);
  box-shadow: none;
  transition:
    border-color 200ms ease,
    background-color 200ms ease;
}

.service-card:hover {
  border-color: var(--signal);
}

.service-card--featured {
  background: var(--signal);
  color: var(--ink);
  border-color: var(--signal);
}

.service-card__body {
  min-height: 280px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.service-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--ff-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.72;
}

.service-card__image {
  min-height: 116px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(14, 27, 44, 0.12);
  background:
    repeating-linear-gradient(
      135deg,
      rgba(14, 27, 44, 0.12) 0,
      rgba(14, 27, 44, 0.12) 1px,
      transparent 1px,
      transparent 13px
    ),
    var(--paper);
  position: relative;
  overflow: hidden;
}

.service-card--featured .service-card__image {
  border-color: rgba(14, 27, 44, 0.22);
  background:
    repeating-linear-gradient(
      135deg,
      rgba(14, 27, 44, 0.18) 0,
      rgba(14, 27, 44, 0.18) 1px,
      transparent 1px,
      transparent 13px
    ),
    rgba(245, 242, 236, 0.45);
}

.service-card__image::before {
  content: '';
  position: absolute;
  inset: 16px;
  border: 1px solid rgba(14, 27, 44, 0.18);
}

.service-card__image-label {
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: var(--ff-mono);
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(14, 27, 44, 0.52);
}

.service-card__content {
  margin-top: auto;
}

.service-title {
  font-family: var(--ff-display);
  font-size: 22px;
  line-height: 1.1;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
  color: currentColor;
}

.service-description {
  margin: 0;
  font-family: var(--ff-body);
  font-size: 14px;
  line-height: 1.55;
  color: currentColor;
  opacity: 0.72;
}
</style>

<template>
  <q-card
    flat
    class="product-card"
    role="button"
    tabindex="0"
    @click="$emit('open', product)"
    @keydown.enter="$emit('open', product)"
  >
    <q-card-section class="product-card__body">
      <div class="product-card__top">
        <span>{{ categoryLabel }}</span>
        <span>↗</span>
      </div>

      <div class="product-card__image-wrap">
        <q-img
          :src="currentImageSrc"
          fit="contain"
          loading="lazy"
          spinner-color="accent"
          class="product-card__image"
          :alt="product.naziv"
          @error="useFallback = true"
        >
          <template #loading>
            <div class="product-card__loading">Učitavanje</div>
          </template>

          <template #error>
            <div class="product-card__loading">Slika nije dostupna</div>
          </template>
        </q-img>
      </div>

      <div class="product-card__footer">
        <div class="product-card__name">
          {{ product.naziv }}
        </div>

        <div class="product-card__hint">Klik za uvećanje</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

defineEmits(['open'])

const useFallback = ref(false)

const categoryLabel = computed(() => {
  const labels = {
    hemija: 'Hemija',
    hrana: 'Hrana',
    kozmetika: 'Kozmetika',
    zeleznica: 'Železnica',
  }

  return labels[props.product.kategorija] || props.product.kategorija
})

const currentImageSrc = computed(() => {
  return useFallback.value ? props.product.slikaThumbJpg : props.product.slikaThumbWebp
})

watch(
  () => props.product.id,
  () => {
    useFallback.value = false
  },
)
</script>

<style scoped lang="scss">
.product-card {
  height: 100%;
  min-height: 410px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(245, 242, 236, 0.14);
  background: var(--paper);
  color: var(--ink);
  box-shadow: none;
  cursor: pointer;
  overflow: hidden;
  transition:
    border-color 200ms ease,
    transform 200ms ease,
    background-color 200ms ease;
}

.product-card:hover {
  border-color: var(--signal);
  transform: translateY(-3px);
}

.product-card:focus-visible {
  outline: 2px solid var(--signal);
  outline-offset: 4px;
}

.product-card__body {
  min-height: 410px;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-rows: auto 230px 1fr;
  gap: 18px;
}

.product-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--ff-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(14, 27, 44, 0.58);
}

.product-card__image-wrap {
  height: 230px;
  padding: 20px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(14, 27, 44, 0.12);
  background:
    repeating-linear-gradient(
      135deg,
      rgba(14, 27, 44, 0.075) 0,
      rgba(14, 27, 44, 0.075) 1px,
      transparent 1px,
      transparent 14px
    ),
    #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card__image {
  width: 100%;
  height: 100%;
}

.product-card__loading {
  font-family: var(--ff-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

.product-card__footer {
  min-height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
}

.product-card__name {
  text-align: center;
  font-family: var(--ff-display);
  font-size: 18px;
  line-height: 1.15;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--ink);
  overflow-wrap: anywhere;
}

.product-card__hint {
  text-align: center;
  font-family: var(--ff-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(14, 27, 44, 0.48);
}

@media (max-width: 600px) {
  .product-card {
    min-height: 370px;
  }

  .product-card__body {
    min-height: 370px;
    padding: 16px;
    grid-template-rows: auto 205px 1fr;
    gap: 16px;
  }

  .product-card__image-wrap {
    height: 205px;
    padding: 16px;
  }

  .product-card__footer {
    min-height: 80px;
  }

  .product-card__name {
    font-size: 16px;
  }
}
</style>

<template>
  <q-dialog v-model="dialogModel" maximized transition-show="fade" transition-hide="fade">
    <q-card class="product-lightbox">
      <div class="product-lightbox__bar">
        <div>
          <div class="product-lightbox__meta">CAT DOO ČAČAK / PROIZVOD</div>

          <h3 class="product-lightbox__title">
            {{ product?.naziv }}
          </h3>
        </div>

        <q-btn
          flat
          dense
          class="product-lightbox__close"
          icon="close"
          aria-label="Zatvori prikaz slike"
          @click="dialogModel = false"
        />
      </div>

      <div class="product-lightbox__content">
        <q-img
          v-if="product"
          :src="currentImageSrc"
          fit="contain"
          loading="lazy"
          spinner-color="accent"
          class="product-lightbox__image"
          :alt="product.naziv"
          @error="useFallback = true"
        />
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  product: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue'])

const useFallback = ref(false)

const dialogModel = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const currentImageSrc = computed(() => {
  if (!props.product) return ''

  return useFallback.value ? props.product.slikaFullJpg : props.product.slikaFullWebp
})

watch(
  () => props.product?.id,
  () => {
    useFallback.value = false
  },
)
</script>

<style scoped lang="scss">
.product-lightbox {
  min-height: 100vh;
  background: var(--ink);
  color: var(--paper);
  box-shadow: none;
}

.product-lightbox__bar {
  min-height: 86px;
  padding: 18px 28px;
  border-bottom: 1px solid var(--line-on-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.product-lightbox__meta {
  font-family: var(--ff-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--signal);
}

.product-lightbox__title {
  margin: 8px 0 0;
  font-family: var(--ff-display);
  font-size: clamp(24px, 4vw, 42px);
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.product-lightbox__close {
  color: var(--paper);
}

.product-lightbox__content {
  min-height: calc(100vh - 86px);
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    repeating-linear-gradient(
      135deg,
      rgba(245, 242, 236, 0.045) 0,
      rgba(245, 242, 236, 0.045) 1px,
      transparent 1px,
      transparent 18px
    ),
    var(--ink);
}

.product-lightbox__image {
  width: min(100%, 980px);
  max-height: calc(100vh - 160px);
}

@media (max-width: 768px) {
  .product-lightbox__bar {
    padding: 16px 18px;
  }

  .product-lightbox__content {
    padding: 18px;
  }
}
</style>

<template>
  <section id="products" class="products-gallery section-padding-lg">
    <div class="cat-container">
      <div class="products-gallery__head reveal">
        <div>
          <div class="industrial-eyebrow">03 / Naši proizvodi</div>

          <h2 class="section-title">Sve što proizvodimo.</h2>
        </div>

        <p class="products-gallery__lead">
          Pregled našeg asortimana kroz četiri ključne industrije koje opslužujemo.
        </p>
      </div>

      <div class="products-gallery__tabs-wrap q-mt-xl">
        <q-tabs
          v-model="activeCategory"
          dense
          no-caps
          align="left"
          active-color="accent"
          indicator-color="accent"
          class="products-gallery__tabs"
        >
          <q-tab
            v-for="category in categories"
            :key="category.id"
            :name="category.id"
            :label="category.label"
            class="products-gallery__tab"
          />
        </q-tabs>
      </div>

      <q-tab-panels v-model="activeCategory" keep-alive class="products-gallery__panels">
        <q-tab-panel
          v-for="category in categories"
          :key="category.id"
          :name="category.id"
          class="products-gallery__panel"
        >
          <swiper
            :key="`${category.id}-${activeCategory}`"
            :modules="swiperModules"
            :slides-per-view="1.15"
            :space-between="16"
            :navigation="true"
            :pagination="{ clickable: true }"
            :a11y="{
              enabled: true,
              prevSlideMessage: 'Prethodni proizvod',
              nextSlideMessage: 'Sledeći proizvod',
              firstSlideMessage: 'Ovo je prvi proizvod',
              lastSlideMessage: 'Ovo je poslednji proizvod',
            }"
            :breakpoints="swiperBreakpoints"
            class="products-swiper"
          >
            <swiper-slide v-for="product in productsByCategory[category.id]" :key="product.id">
              <KarticaProizvoda :product="product" @open="openLightbox" />
            </swiper-slide>
          </swiper>
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <LightboxSlike v-model="isLightboxOpen" :product="selectedProduct" />
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import KarticaProizvoda from 'src/components/KarticaProizvoda.vue'
import LightboxSlike from 'src/components/LightboxSlike.vue'
import { categories, products } from 'src/data/proizvodi'

const activeCategory = ref('hemija')
const selectedProduct = ref(null)
const isLightboxOpen = ref(false)

const swiperModules = [Navigation, Pagination, A11y]

const swiperBreakpoints = {
  600: {
    slidesPerView: 2.15,
    spaceBetween: 18,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 22,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
}

const productsByCategory = computed(() => {
  return categories.reduce((acc, category) => {
    acc[category.id] = products.filter((product) => product.kategorija === category.id)
    return acc
  }, {})
})

const openLightbox = (product) => {
  selectedProduct.value = product
  isLightboxOpen.value = true
}
</script>

<style scoped lang="scss">
.products-gallery {
  position: relative;
  background: var(--ink);
  color: var(--paper);
  border-top: 1px solid var(--line-on-dark);
  border-bottom: 1px solid var(--line-on-dark);
  overflow: hidden;
}

.products-gallery::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(245, 242, 236, 0.035) 0%, transparent 180px, transparent 100%),
    repeating-linear-gradient(
      135deg,
      rgba(245, 242, 236, 0.025) 0,
      rgba(245, 242, 236, 0.025) 1px,
      transparent 1px,
      transparent 22px
    );
  pointer-events: none;
}

.products-gallery .cat-container {
  position: relative;
  z-index: 1;
}

.products-gallery__head {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 56px;
  align-items: end;
}

.products-gallery .section-title {
  color: var(--paper);
}

.products-gallery__lead {
  max-width: 430px;
  margin: 0;
  color: var(--muted-on-dark);
  font-size: 17px;
  line-height: 1.6;
}

.products-gallery__tabs-wrap {
  border-bottom: 1px solid var(--line-on-dark);
  overflow-x: auto;
  scrollbar-width: thin;
}

.products-gallery__tabs {
  width: max-content;
  min-width: 100%;
  color: rgba(245, 242, 236, 0.58);
  font-family: var(--ff-mono);
}

.products-gallery__tabs :deep(.q-tabs__content) {
  gap: 8px;
}

.products-gallery__tabs :deep(.q-tab) {
  min-height: 52px;
  padding: 0 20px;
  font-family: var(--ff-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(245, 242, 236, 0.62);
  opacity: 1;
}

.products-gallery__tabs :deep(.q-tab--active) {
  color: var(--signal) !important;
  background: rgba(228, 87, 46, 0.1);
}

.products-gallery__tabs :deep(.q-tab__label) {
  font-weight: 500;
}

.products-gallery__tabs :deep(.q-tab__indicator) {
  height: 2px;
  background: var(--signal);
}

.products-gallery__panels {
  background: transparent;
  color: inherit;
  overflow: hidden;
}

.products-gallery__panel {
  padding: 32px 0 74px;
  background: transparent;
  overflow: hidden;
}

.products-swiper {
  padding: 0 2px 64px;
  overflow: hidden;
}

.products-swiper :deep(.swiper-wrapper) {
  align-items: stretch;
}

.products-swiper :deep(.swiper-slide) {
  height: auto;
  display: flex;
}

.products-swiper :deep(.swiper-slide > *) {
  width: 100%;
}

.products-swiper :deep(.swiper-button-prev),
.products-swiper :deep(.swiper-button-next) {
  width: 46px;
  height: 46px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line-on-dark);
  background: rgba(14, 27, 44, 0.94);
  color: var(--signal);
}

.products-swiper :deep(.swiper-button-prev) {
  left: 4px;
}

.products-swiper :deep(.swiper-button-next) {
  right: 4px;
}

.products-swiper :deep(.swiper-button-prev::after),
.products-swiper :deep(.swiper-button-next::after) {
  font-size: 17px;
  font-weight: 700;
}

.products-swiper :deep(.swiper-button-prev:hover),
.products-swiper :deep(.swiper-button-next:hover) {
  background: var(--signal);
  color: var(--ink);
}

.products-swiper :deep(.swiper-pagination) {
  bottom: 16px;
}

.products-swiper :deep(.swiper-pagination-bullet) {
  width: 7px;
  height: 7px;
  background: rgba(245, 242, 236, 0.44);
  opacity: 1;
}

.products-swiper :deep(.swiper-pagination-bullet-active) {
  background: var(--signal);
}

@media (max-width: 1023px) {
  .products-gallery__head {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .products-swiper :deep(.swiper-button-prev),
  .products-swiper :deep(.swiper-button-next) {
    display: none;
  }
}

@media (max-width: 768px) {
  .products-gallery__lead {
    margin-top: 0;
  }

  .products-gallery__tabs {
    min-width: max-content;
  }

  .products-gallery__tabs :deep(.q-tab) {
    padding: 0 16px;
  }

  .products-gallery__panel {
    padding-top: 24px;
    padding-bottom: 64px;
  }

  .products-swiper {
    padding-bottom: 58px;
  }
}
</style>

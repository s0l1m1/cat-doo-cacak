<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      height-hint="92"
      class="cat-header"
      :class="{ 'cat-header--scrolled': isHeaderScrolled }"
      :data-utility-left="t('utility.left')"
      :data-utility-right="t('utility.right')"
    >
      <q-toolbar class="cat-container q-py-md">
        <div
          class="cat-logo cursor-pointer"
          role="button"
          tabindex="0"
          @click="scrollToSection('hero')"
          @keydown.enter="scrollToSection('hero')"
        >
          <span class="cat-logo-mark">CAT</span>
          <span>DOO ČAČAK</span>
        </div>

        <q-space />

        <div class="gt-sm row items-center q-gutter-x-lg">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="cat-nav-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollToSection(item.id)"
          >
            {{ t(item.labelKey) }}
          </a>
        </div>

        <LanguageSwitcher class="gt-sm q-ml-lg" />

        <q-btn
          class="gt-sm q-ml-lg cat-header-cta"
          unelevated
          :label="t('nav.inquiry')"
          @click="scrollToSection('contact')"
        />

        <q-btn
          class="lt-md"
          flat
          dense
          icon="menu"
          aria-label="Otvori navigaciju"
          @click="drawerOpen = true"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerOpen"
      side="right"
      overlay
      behavior="mobile"
      :width="300"
      class="cat-drawer"
    >
      <div class="q-pa-md">
        <div class="row items-center justify-between q-mb-lg">
          <div class="cat-logo cat-logo--drawer">
            <span class="cat-logo-mark">CAT</span>
            <span>DOO ČAČAK</span>
          </div>

          <q-btn
            flat
            dense
            icon="close"
            aria-label="Zatvori navigaciju"
            @click="drawerOpen = false"
          />
        </div>

        <LanguageSwitcher class="q-mb-md" />

        <q-list>
          <q-item
            v-for="item in navItems"
            :key="item.id"
            clickable
            class="cat-drawer-link"
            :class="{ active: activeSection === item.id }"
            @click="handleDrawerNavigation(item.id)"
          >
            <q-item-section>
              <q-item-label>{{ t(item.labelKey) }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <span>→</span>
            </q-item-section>
          </q-item>
        </q-list>

        <q-btn
          class="full-width q-mt-lg cat-btn"
          unelevated
          :label="t('nav.inquiry')"
          @click="handleDrawerNavigation('contact')"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <section class="pre-footer-cta">
      <div class="cat-container pre-footer-cta__inner">
        <div>
          <div class="industrial-eyebrow">
            {{ t('footer.ctaEyebrow') }}
          </div>

          <h2>
            {{ t('footer.ctaTitle') }}
          </h2>
        </div>

        <q-btn
          unelevated
          class="pre-footer-cta__btn"
          :label="t('footer.ctaButton')"
          @click="scrollToSection('contact')"
        />
      </div>
    </section>

    <footer class="cat-footer">
      <div class="cat-container footer-grid">
        <div>
          <div class="footer-brand">CAT DOO ČAČAK</div>

          <p class="footer-text q-mt-md q-mb-none">
            {{ t('footer.description') }}
          </p>
        </div>

        <div>
          <div class="footer-title">
            {{ t('footer.navigation') }}
          </div>

          <div class="column q-gutter-sm q-mt-md">
            <span
              v-for="item in navItems"
              :key="`footer-${item.id}`"
              class="footer-link"
              role="button"
              tabindex="0"
              @click="scrollToSection(item.id)"
              @keydown.enter="scrollToSection(item.id)"
            >
              {{ t(item.labelKey) }}
            </span>
          </div>
        </div>

        <div>
          <div class="footer-title">
            {{ t('footer.contact') }}
          </div>

          <div class="footer-text q-mt-md">
            <div class="q-mb-sm">{{ t('contact.addressValue') }}</div>
            <div class="q-mb-sm">
              <a href="mailto:gugovic@mts.rs">gugovic@mts.rs</a>
            </div>
            <div>
              <a href="tel:+381638959941">+381 63 8959941</a>
            </div>
            <div>
              <a href="tel:+381646162273">+381 64 6162273</a>
            </div>
          </div>
        </div>

        <div>
          <div class="footer-title">
            {{ t('footer.register') }}
          </div>

          <div class="footer-register q-mt-md">
            <div>MB: 06076718</div>
            <div>PIB: 101115931</div>
            <div>ŠIFRA: 1721</div>
            <div>BONITET: A+</div>
          </div>
        </div>
      </div>

      <div class="cat-container footer-bottom">
        {{ t('footer.copyright') }}
      </div>
    </footer>

    <FloatingCallBtn />
    <FloatingContactBtn />
  </q-layout>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FloatingCallBtn from 'src/components/FloatingCallBtn.vue'
import FloatingContactBtn from 'src/components/FloatingContactBtn.vue'
import LanguageSwitcher from 'src/components/LanguageSwitcher.vue'

const { t } = useI18n()

const drawerOpen = ref(false)
const isHeaderScrolled = ref(false)
const activeSection = ref('hero')

let observer = null

const navItems = [
  {
    id: 'about',
    labelKey: 'nav.about',
  },
  {
    id: 'services',
    labelKey: 'nav.services',
  },
  {
    id: 'products',
    labelKey: 'nav.products',
  },
  {
    id: 'legal',
    labelKey: 'nav.legal',
  },
  {
    id: 'contact',
    labelKey: 'nav.contact',
  },
]

const updateHeaderState = () => {
  isHeaderScrolled.value = window.scrollY > 80
}

const scrollToSection = (id) => {
  const target = document.getElementById(id)

  if (!target) return

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const handleDrawerNavigation = (id) => {
  drawerOpen.value = false
  window.setTimeout(() => scrollToSection(id), 120)
}

const initActiveSectionObserver = () => {
  const sectionIds = ['hero', ...navItems.map((item) => item.id)]
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

  observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visibleEntries.length > 0) {
        activeSection.value = visibleEntries[0].target.id
      }
    },
    {
      root: null,
      threshold: [0.2, 0.4, 0.6],
      rootMargin: '-110px 0px -45% 0px',
    },
  )

  sections.forEach((section) => observer.observe(section))
}

onMounted(() => {
  updateHeaderState()
  window.addEventListener('scroll', updateHeaderState, { passive: true })

  window.setTimeout(() => {
    initActiveSectionObserver()
  }, 200)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeaderState)

  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      height-hint="92"
      class="cat-header"
      :class="{ 'cat-header--scrolled': isHeaderScrolled }"
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
            {{ item.label }}
          </a>
        </div>

        <q-btn
          class="gt-sm q-ml-lg cat-header-cta"
          unelevated
          label="Pošaljite upit"
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
              <q-item-label>{{ item.label }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <span>→</span>
            </q-item-section>
          </q-item>
        </q-list>

        <q-btn
          class="full-width q-mt-lg cat-btn"
          unelevated
          label="Pošaljite upit"
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
          <div class="industrial-eyebrow">── Direktan kontakt</div>
          <h2>Potrebna vam je pouzdana ambalaža za proizvodnju ili distribuciju?</h2>
        </div>

        <q-btn
          unelevated
          class="pre-footer-cta__btn"
          label="Kontaktirajte nas"
          @click="scrollToSection('contact')"
        />
      </div>
    </section>

    <footer class="cat-footer">
      <div class="cat-container footer-grid">
        <div>
          <div class="footer-brand">CAT DOO ČAČAK</div>
          <p class="footer-text q-mt-md q-mb-none">
            Preduzeće za proizvodnju, promet i usluge. Fokus na ambalažna rešenja za industrijske,
            trgovinske i distributivne sisteme.
          </p>
        </div>

        <div>
          <div class="footer-title">Navigacija</div>

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
              {{ item.label }}
            </span>
          </div>
        </div>

        <div>
          <div class="footer-title">Kontakt</div>

          <div class="footer-text q-mt-md">
            <div class="q-mb-sm">Stevana Prvovenčanog 71</div>
            <div class="q-mb-sm">Čačak, Srbija</div>
            <div class="q-mb-sm">[UNESI EMAIL OVDE]</div>
            <div>[UNESI BROJ TELEFONA OVDE]</div>
          </div>
        </div>

        <div>
          <div class="footer-title">Registar</div>

          <div class="footer-register q-mt-md">
            <div>MB: 06076718</div>
            <div>PIB: 101115931</div>
            <div>ŠIFRA: 1721</div>
            <div>BONITET: A+</div>
          </div>
        </div>
      </div>

      <div class="cat-container footer-bottom">© 2024 CAT DOO Čačak. Sva prava zadržana.</div>
    </footer>

    <FloatingCallBtn />
  </q-layout>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import FloatingCallBtn from 'src/components/FloatingCallBtn.vue'

const drawerOpen = ref(false)
const isHeaderScrolled = ref(false)
const activeSection = ref('hero')
let observer = null

const navItems = [
  {
    id: 'about',
    label: 'O nama',
  },
  {
    id: 'services',
    label: 'Proizvodi',
  },
  {
    id: 'legal',
    label: 'Podaci',
  },
  {
    id: 'contact',
    label: 'Kontakt',
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

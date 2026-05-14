<template>
  <q-page>
    <section id="hero" class="hero-section">
      <div class="cat-container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-kicker reveal">
              {{ t('hero.eyebrow') }}
            </div>

            <h1 class="hero-title reveal">
              {{ t('hero.titleA') }}
              <span>{{ t('hero.titleB') }}</span>
            </h1>

            <p class="hero-description reveal">
              {{ t('hero.description') }}
            </p>

            <div class="hero-actions reveal">
              <q-btn
                unelevated
                class="cat-btn"
                icon-right="arrow_forward"
                :label="t('hero.primary')"
                @click="scrollToSection('contact')"
              />

              <q-btn
                outline
                class="cat-btn"
                icon-right="arrow_downward"
                :label="t('hero.secondary')"
                @click="scrollToSection('about')"
              />
            </div>
          </div>

          <div class="hero-visual reveal">
            <div class="hero-visual__frame">
              <div class="hero-visual__pattern"></div>

              <div class="hero-visual__content">
                <div class="hero-visual__code">
                  {{ t('hero.visualCode') }}
                </div>

                <div class="hero-visual__box">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div class="hero-visual__caption">
                  {{ t('hero.visualCaption') }}
                </div>
              </div>

              <div class="hero-badge">
                <span>1992</span>
                <span>→</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-strip">
      <div class="cat-container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.value" class="stats-item reveal">
            <div class="stats-value">{{ stat.value }}</div>
            <div class="stats-label">{{ stat.label }}</div>
            <div class="stats-sub">{{ stat.sub }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section-padding-lg">
      <div class="cat-container">
        <div class="row q-col-gutter-xl items-end">
          <div class="col-12 col-md-7">
            <div class="reveal">
              <div class="industrial-eyebrow">
                {{ t('about.eyebrow') }}
              </div>

              <h2 class="section-title">
                {{ t('about.title') }}
              </h2>
            </div>
          </div>

          <div class="col-12 col-md-5">
            <p class="section-lead reveal">
              {{ t('about.lead') }}
            </p>
          </div>
        </div>

        <div class="row q-col-gutter-xl q-mt-xl">
          <div class="col-12 col-md-6">
            <div class="about-highlight reveal">
              <p class="about-text q-mb-md">
                {{ t('about.p1') }}
              </p>

              <p class="about-text q-mb-md">
                {{ t('about.p2') }}
              </p>

              <p class="about-text q-mb-none">
                {{ t('about.p3') }}
              </p>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6">
                <q-card flat class="stat-card reveal">
                  <div class="stat-value">1992</div>
                  <div class="stat-label">
                    {{ t('about.founded') }}
                  </div>
                  <p class="q-mt-md q-mb-none">
                    {{ t('about.foundedSub') }}
                  </p>
                </q-card>
              </div>

              <div class="col-12 col-sm-6">
                <q-card flat class="stat-card reveal">
                  <div class="stat-value">30+</div>
                  <div class="stat-label">
                    {{ t('about.experience') }}
                  </div>
                  <p class="q-mt-md q-mb-none">
                    {{ t('about.experienceSub') }}
                  </p>
                </q-card>
              </div>

              <div class="col-12">
                <q-card flat class="stat-card stat-card--wide reveal">
                  <div>
                    <div class="stat-value">A+</div>
                    <div class="stat-label">
                      {{ t('about.rating') }}
                    </div>
                    <p class="q-mt-md q-mb-none">
                      {{ t('about.ratingSub') }}
                    </p>
                  </div>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="services-section section-padding-lg">
      <div class="cat-container">
        <div class="section-head reveal">
          <div>
            <div class="industrial-eyebrow">
              {{ t('production.eyebrow') }}
            </div>

            <h2 class="section-title">
              {{ t('production.title') }}
            </h2>
          </div>
        </div>

        <p class="section-lead reveal q-mt-lg production-lead">
          {{ t('production.lead') }}
        </p>

        <div class="row q-col-gutter-lg q-mt-xl">
          <div v-for="service in services" :key="service.code" class="col-12 col-md-4">
            <ServiceCard
              class="reveal"
              :code="service.code"
              :title="service.title"
              :description="service.description"
              :featured="service.featured"
              :label="t('services.cardLabel')"
            />
          </div>
        </div>

        <div class="materials-panel reveal q-mt-xl">
          <div class="section-head">
            <div>
              <div class="industrial-eyebrow">
                {{ t('production.materialsTitle') }}
              </div>
              <h3 class="materials-title">
                {{ t('production.rangeTitle') }}
              </h3>
            </div>

            <p class="materials-text">
              {{ t('production.rangeText') }}
            </p>
          </div>

          <div class="materials-grid q-mt-lg">
            <div v-for="material in materials" :key="material.name" class="material-item">
              <div class="material-name">
                {{ material.name }}
              </div>
              <div class="material-desc">
                {{ material.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <GalerijaProizvoda />

    <section id="industries" class="section-padding-lg">
      <div class="cat-container">
        <div class="section-head reveal">
          <div>
            <div class="industrial-eyebrow">
              {{ t('industries.eyebrow') }}
            </div>

            <h2 class="section-title">
              {{ t('industries.title') }}
            </h2>
          </div>
        </div>

        <div class="row q-col-gutter-lg q-mt-xl">
          <div class="col-12 col-md-4">
            <q-card flat class="industry-card reveal">
              <div class="industry-card__code">CAT / CHEM</div>
              <h3>{{ t('industries.chemicalTitle') }}</h3>
              <div class="industry-card__subtitle">
                {{ t('industries.chemicalSubtitle') }}
              </div>
              <p>{{ t('industries.chemicalDesc') }}</p>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card flat class="industry-card industry-card--dark reveal">
              <div class="industry-card__code">CAT / FOOD</div>
              <h3>{{ t('industries.foodTitle') }}</h3>
              <div class="industry-card__subtitle">
                {{ t('industries.foodSubtitle') }}
              </div>
              <p>{{ t('industries.foodDesc') }}</p>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card flat class="industry-card reveal">
              <div class="industry-card__code">CAT / RAIL</div>
              <h3>{{ t('industries.railwayTitle') }}</h3>
              <div class="industry-card__subtitle">
                {{ t('industries.railwaySubtitle') }}
              </div>
              <p>{{ t('industries.railwayDesc') }}</p>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section id="reasons" class="reasons-section section-padding-lg">
      <div class="cat-container">
        <div class="section-head reveal">
          <div>
            <div class="industrial-eyebrow">
              {{ t('reasons.eyebrow') }}
            </div>

            <h2 class="section-title">
              {{ t('reasons.title') }}
            </h2>
          </div>
        </div>

        <div class="reasons-grid q-mt-xl">
          <div v-for="(reason, index) in reasons" :key="reason" class="reason-item">
            <div class="reason-number">
              {{ String(index + 1).padStart(2, '0') }}
            </div>
            <div class="reason-text">
              {{ reason }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="legal" class="legal-section section-padding-lg">
      <div class="cat-container">
        <div class="section-head reveal">
          <div>
            <div class="industrial-eyebrow">
              {{ t('legal.eyebrow') }}
            </div>

            <h2 class="section-title">
              {{ t('legal.title') }}
            </h2>
          </div>
        </div>

        <div class="legal-table-card reveal q-mt-xl">
          <table class="legal-table">
            <tbody>
              <tr v-for="item in legalData" :key="item.label">
                <th>{{ item.label }}</th>
                <td>{{ item.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section section-padding-lg">
      <div class="cat-container">
        <div class="section-head reveal">
          <div>
            <div class="industrial-eyebrow">
              {{ t('contact.eyebrow') }}
            </div>

            <h2 class="section-title">
              {{ t('contact.title') }}
            </h2>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=43.88532309250508%2C20.332913996911323"
            target="_blank"
            rel="noopener noreferrer"
            class="section-link"
          >
            {{ t('contact.mapLink') }}
          </a>
        </div>

        <div class="row q-col-gutter-xl q-mt-xl">
          <div class="col-12 col-md-6">
            <ContactForm class="reveal" />
          </div>

          <div class="col-12 col-md-6">
            <div class="contact-info-card reveal">
              <h3 class="cat-heading text-h4 q-mt-none q-mb-md">
                {{ t('contact.company') }}
              </h3>

              <p class="contact-intro">
                {{ t('contact.intro') }}
              </p>

              <div class="contact-info-item">
                <div class="contact-info-icon">01</div>
                <div>
                  <div class="contact-info-label">
                    {{ t('contact.address') }}
                  </div>
                  <div class="contact-info-value">
                    {{ t('contact.addressValue') }}
                  </div>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">02</div>
                <div>
                  <div class="contact-info-label">
                    {{ t('contact.person') }}
                  </div>
                  <div class="contact-info-value">Dejan Gugović</div>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">03</div>
                <div>
                  <div class="contact-info-label">
                    {{ t('contact.phone') }}
                  </div>
                  <div class="contact-info-value">
                    <a href="tel:+381638959941">+381 63 8959941</a>
                    <br />
                    <a href="tel:+381646162273">+381 64 6162273</a>
                  </div>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">04</div>
                <div>
                  <div class="contact-info-label">
                    {{ t('contact.email') }}
                  </div>
                  <div class="contact-info-value">
                    <a href="mailto:gugovic@mts.rs">gugovic@mts.rs</a>
                  </div>
                </div>
              </div>

              <div class="q-mt-lg">
                <iframe
                  class="map-frame"
                  loading="lazy"
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?ll=43.88532309250508,20.332913996911323&z=17&output=embed"
                  title="CAT DOO ČAČAK lokacija na mapi"
                />

                <q-btn
                  class="cat-btn full-width q-mt-md"
                  unelevated
                  :label="t('contact.openMaps')"
                  type="a"
                  target="_blank"
                  href="https://www.google.com/maps/dir/?api=1&destination=43.88532309250508%2C20.332913996911323"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue'
import { useMeta } from 'quasar'
import { useI18n } from 'vue-i18n'
import ServiceCard from 'src/components/ServiceCard.vue'
import ContactForm from 'src/components/ContactForm.vue'
import GalerijaProizvoda from 'src/components/GalerijaProizvoda.vue'

const { t, locale } = useI18n()

useMeta(() => ({
  title: t('seo.title'),
  meta: {
    description: {
      name: 'description',
      content: t('seo.description'),
    },
    keywords: {
      name: 'keywords',
      content:
        'CAT DOO Čačak, plastična ambalaža, hemijska ambalaža, prehrambena ambalaža, HDPE, LDPE, PP, Čačak',
    },
    robots: {
      name: 'robots',
      content: 'index, follow',
    },
    ogTitle: {
      property: 'og:title',
      content: t('seo.title'),
    },
    ogDescription: {
      property: 'og:description',
      content: t('seo.description'),
    },
    ogType: {
      property: 'og:type',
      content: 'website',
    },
    ogLocale: {
      property: 'og:locale',
      content: locale.value === 'sr' ? 'sr_RS' : locale.value === 'ru' ? 'ru_RU' : 'en_US',
    },
    ogImage: {
      property: 'og:image',
      content: '/images/cat-logo.png',
    },
    twitterCard: {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  },
  link: {
    canonical: {
      rel: 'canonical',
      href: 'https://cat-doo-cacak.rs/',
    },
  },
}))

let revealObserver = null

const stats = computed(() => [
  {
    value: '1992',
    label: t('stats.established'),
    sub: t('stats.establishedSub'),
  },
  {
    value: '30+',
    label: t('stats.tradition'),
    sub: t('stats.traditionSub'),
  },
  {
    value: 'A+',
    label: t('stats.rating'),
    sub: t('stats.ratingSub'),
  },
  {
    value: '100+',
    label: t('stats.products'),
    sub: t('stats.productsSub'),
  },
])

const services = computed(() => [
  {
    code: 'CAT-01',
    title: t('services.plasticTitle'),
    description: t('services.plasticDesc'),
    featured: true,
  },
  {
    code: 'CAT-02',
    title: t('services.chemicalTitle'),
    description: t('services.chemicalDesc'),
    featured: false,
  },
  {
    code: 'CAT-03',
    title: t('services.foodTitle'),
    description: t('services.foodDesc'),
    featured: false,
  },
])

const materials = computed(() => [
  {
    name: t('production.materials.hdpe.name'),
    desc: t('production.materials.hdpe.desc'),
  },
  {
    name: t('production.materials.ldpe.name'),
    desc: t('production.materials.ldpe.desc'),
  },
  {
    name: t('production.materials.pp.name'),
    desc: t('production.materials.pp.desc'),
  },
  {
    name: t('production.materials.ppCopo.name'),
    desc: t('production.materials.ppCopo.desc'),
  },
  {
    name: t('production.materials.polyethylene.name'),
    desc: t('production.materials.polyethylene.desc'),
  },
])

const reasons = computed(() => [
  t('reasons.items.experience'),
  t('reasons.items.rating'),
  t('reasons.items.products'),
  t('reasons.items.materials'),
  t('reasons.items.industries'),
  t('reasons.items.railway'),
  t('reasons.items.local'),
])

const legalData = computed(() => [
  {
    label: t('legal.fullName'),
    value: t('legal.fullNameValue'),
  },
  {
    label: t('legal.address'),
    value: t('legal.addressValue'),
  },
  {
    label: t('legal.mb'),
    value: '06076718',
  },
  {
    label: t('legal.pib'),
    value: '101115931',
  },
  {
    label: t('legal.activity'),
    value: t('legal.activityValue'),
  },
  {
    label: t('legal.accounts'),
    value: '220-8266-29 | 225-4952-46',
  },
  {
    label: t('legal.founded'),
    value: '14.07.1992.',
  },
  {
    label: t('legal.representative'),
    value: 'Dejan Gugović',
  },
  {
    label: t('legal.status'),
    value: t('legal.statusValue'),
  },
])

const setDocumentLanguage = () => {
  document.documentElement.setAttribute('lang', locale.value === 'sr' ? 'sr' : locale.value)
}

const scrollToSection = (id) => {
  const target = document.getElementById(id)

  if (!target) return

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const initRevealObserver = () => {
  const elements = document.querySelectorAll('.reveal')

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px 120px 0px',
    },
  )

  elements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 18, 100)}ms`
    revealObserver.observe(element)
  })
}

watch(locale, () => {
  setDocumentLanguage()
})

onMounted(() => {
  setDocumentLanguage()
  initRevealObserver()
})

onUnmounted(() => {
  if (revealObserver) {
    revealObserver.disconnect()
  }
})
</script>

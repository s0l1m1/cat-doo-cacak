<template>
  <q-page>
    <section id="hero" class="hero-section">
      <div class="cat-container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-kicker reveal">Est. 1992 / Čačak, Srbija</div>

            <h1 class="hero-title reveal">Trideset godina <span>precizne ambalaže.</span></h1>

            <p class="hero-description reveal">
              CAT DOO Čačak je industrijski proizvođač ambalaže sa dugom tradicijom, stabilnim
              poslovanjem i fokusom na B2B potrebe proizvodnje, trgovine i distribucije.
            </p>

            <div class="hero-actions reveal">
              <q-btn
                unelevated
                class="cat-btn"
                icon-right="arrow_forward"
                label="Kontaktirajte nas"
                @click="scrollToSection('contact')"
              />

              <q-btn
                outline
                class="cat-btn"
                icon-right="arrow_downward"
                label="Saznajte više"
                @click="scrollToSection('about')"
              />
            </div>
          </div>

          <div class="hero-visual reveal">
            <div class="hero-visual__frame">
              <div class="hero-visual__pattern"></div>

              <div class="hero-visual__content">
                <div class="hero-visual__code">CAT / INDUSTRIAL PACKAGING</div>
                <div class="hero-visual__box">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="hero-visual__caption">
                  Proizvodnja ambalaže<br />
                  za stabilne poslovne sisteme
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
              <div class="industrial-eyebrow">01 / O kompaniji</div>

              <h2 class="section-title">
                Proizvodnja, promet i usluge sa industrijskom disciplinom.
              </h2>
            </div>
          </div>

          <div class="col-12 col-md-5">
            <p class="section-lead reveal">
              CAT DOO ČAČAK posluje od 14.07.1992. godine kao aktivno privredno društvo sa sedištem
              u Čačku. Kompanija je usmerena na proizvodnju ambalažnih rešenja za potrebe industrije
              i tržišta.
            </p>
          </div>
        </div>

        <div class="row q-col-gutter-xl q-mt-xl">
          <div class="col-12 col-md-6">
            <div class="about-highlight reveal">
              <p class="about-text q-mb-md">
                Pun naziv kompanije je
                <strong>Preduzeće za proizvodnju, promet i usluge CAT DOO Čačak</strong>.
                Registrovana adresa je Stevana Prvovenčanog 71, Čačak, Srbija.
              </p>

              <p class="about-text q-mb-md">
                Kompanija posluje u industrijskoj delatnosti proizvodnje ambalaže i pripada šifri
                delatnosti <strong>1721</strong>.
              </p>

              <p class="about-text q-mb-none">
                Kroz više od tri decenije rada, CAT DOO ČAČAK gradi poverenje kroz stabilnost,
                preciznost i kontinuitet isporuke.
              </p>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6">
                <q-card flat class="stat-card reveal">
                  <div class="stat-value">1992</div>
                  <div class="stat-label">Godina osnivanja</div>
                  <p class="q-mt-md q-mb-none">REGISTROVANO PRIVREDNO DRUŠTVO</p>
                </q-card>
              </div>

              <div class="col-12 col-sm-6">
                <q-card flat class="stat-card reveal">
                  <div class="stat-value">30+</div>
                  <div class="stat-label">Godina iskustva</div>
                  <p class="q-mt-md q-mb-none">KONTINUITET U INDUSTRIJI</p>
                </q-card>
              </div>

              <div class="col-12">
                <q-card flat class="stat-card stat-card--wide reveal">
                  <div>
                    <div class="stat-value">A+</div>
                    <div class="stat-label">Bonitet i stabilnost poslovanja</div>
                    <p class="q-mt-md q-mb-none">POUZDAN B2B PARTNER ZA AMBALAŽNA REŠENJA</p>
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
            <div class="industrial-eyebrow">02 / Proizvodi</div>

            <h2 class="section-title">Ambalaža za proizvodnju, skladištenje i distribuciju.</h2>
          </div>

          <a href="#contact" class="section-link" @click.prevent="scrollToSection('contact')">
            → Pošaljite upit
          </a>
        </div>

        <div class="row q-col-gutter-lg q-mt-xl">
          <div v-for="service in services" :key="service.code" class="col-12 col-md-4">
            <ServiceCard
              class="reveal"
              :code="service.code"
              :title="service.title"
              :description="service.description"
              :featured="service.featured"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="legal" class="legal-section section-padding-lg">
      <div class="cat-container">
        <div class="section-head reveal">
          <div>
            <div class="industrial-eyebrow">03 / Registar</div>

            <h2 class="section-title">Pravni i kompanijski podaci.</h2>
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
            <div class="industrial-eyebrow">04 / Kontakt</div>

            <h2 class="section-title">Kontakt za saradnju i upite.</h2>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Stevana%20Prvoven%C4%8Danog%2071%2C%20%C4%8Ca%C4%8Dak%2C%20Srbija"
            target="_blank"
            rel="noopener noreferrer"
            class="section-link"
          >
            → Otvori mapu
          </a>
        </div>

        <div class="row q-col-gutter-xl q-mt-xl">
          <div class="col-12 col-md-6">
            <ContactForm class="reveal" />
          </div>

          <div class="col-12 col-md-6">
            <div class="contact-info-card reveal">
              <h3 class="cat-heading text-h4 q-mt-none q-mb-md">CAT DOO ČAČAK</h3>

              <p class="contact-intro">Preduzeće za proizvodnju, promet i usluge CAT DOO Čačak.</p>

              <div class="contact-info-item">
                <div class="contact-info-icon">01</div>

                <div>
                  <div class="contact-info-label">Adresa</div>
                  <div class="contact-info-value">Stevana Prvovenčanog 71, Čačak, Srbija</div>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">02</div>

                <div>
                  <div class="contact-info-label">Kontakt osoba</div>
                  <div class="contact-info-value">Dejan Gugović</div>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">03</div>

                <div>
                  <div class="contact-info-label">Telefon</div>
                  <div class="contact-info-value">[UNESI BROJ TELEFONA OVDE]</div>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">04</div>

                <div>
                  <div class="contact-info-label">Email</div>
                  <div class="contact-info-value">[UNESI EMAIL OVDE]</div>
                </div>
              </div>

              <div class="q-mt-lg">
                <iframe
                  class="map-frame"
                  loading="lazy"
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Stevana+Prvoven%C4%8Danog+71,+%C4%8Ca%C4%8Dak,+Srbija&output=embed"
                  title="CAT DOO ČAČAK lokacija na mapi"
                />

                <q-btn
                  class="cat-btn full-width q-mt-md"
                  unelevated
                  label="Otvori u Google Maps"
                  type="a"
                  target="_blank"
                  href="https://www.google.com/maps/search/?api=1&query=Stevana%20Prvoven%C4%8Danog%2071%2C%20%C4%8Ca%C4%8Dak%2C%20Srbija"
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
import { onMounted, onUnmounted } from 'vue'
import { useMeta } from 'quasar'
import ServiceCard from 'src/components/ServiceCard.vue'
import ContactForm from 'src/components/ContactForm.vue'

useMeta({
  title: 'CAT DOO ČAČAK | Proizvodnja ambalaže',
  meta: {
    description: {
      name: 'description',
      content:
        'CAT DOO Čačak proizvodi ambalažu za industrijske, trgovinske i distributivne sisteme. Kompanija posluje od 1992. godine na adresi Stevana Prvovenčanog 71, Čačak.',
    },
    keywords: {
      name: 'keywords',
      content: 'CAT DOO Čačak, ambalaža, plastična ambalaža, karton, proizvodnja ambalaže, Čačak',
    },
    robots: {
      name: 'robots',
      content: 'index, follow',
    },
    ogTitle: {
      property: 'og:title',
      content: 'CAT DOO ČAČAK | Proizvodnja ambalaže',
    },
    ogDescription: {
      property: 'og:description',
      content: 'Industrijski proizvođač ambalaže iz Čačka sa tradicijom od 1992. godine.',
    },
    ogType: {
      property: 'og:type',
      content: 'website',
    },
    ogLocale: {
      property: 'og:locale',
      content: 'sr_RS',
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
})

let revealObserver = null

const stats = [
  {
    value: '1992',
    label: 'Godina osnivanja',
    sub: 'ESTABLISHED',
  },
  {
    value: '30+',
    label: 'Godina tradicije',
    sub: 'INDUSTRIAL EXPERIENCE',
  },
  {
    value: 'A+',
    label: 'Bonitet',
    sub: 'BUSINESS STABILITY',
  },
  {
    value: '1721',
    label: 'Šifra delatnosti',
    sub: 'REGISTERED ACTIVITY',
  },
]

const services = [
  {
    code: 'CAT-01',
    title: 'Plastična ambalaža',
    description:
      'Ambalažna rešenja namenjena pakovanju, čuvanju i distribuciji proizvoda u različitim industrijskim procesima.',
    featured: true,
  },
  {
    code: 'CAT-02',
    title: 'Talasasti papir i karton',
    description:
      'Materijali i ambalaža za transport, skladištenje i zaštitu proizvoda tokom logističkog ciklusa.',
    featured: false,
  },
  {
    code: 'CAT-03',
    title: 'Ambalaža po meri',
    description:
      'Prilagođena rešenja prema nameni proizvoda, dimenzijama, seriji i zahtevima poslovnog sistema.',
    featured: false,
  },
]

const legalData = [
  {
    label: 'Pun naziv',
    value: 'Preduzeće za proizvodnju, promet i usluge CAT DOO Čačak',
  },
  {
    label: 'Matični broj',
    value: '06076718',
  },
  {
    label: 'PIB',
    value: '101115931',
  },
  {
    label: 'Šifra delatnosti',
    value: '1721 - Proizvodnja talasastog papira, kartona i ambalaže',
  },
  {
    label: 'Tekući računi',
    value: '220-8266-29 | 225-4952-46',
  },
  {
    label: 'Datum osnivanja',
    value: '14.07.1992. godine',
  },
  {
    label: 'Zakonski zastupnik',
    value: 'Dejan Gugović',
  },
  {
    label: 'Status',
    value: 'Aktivno privredno društvo',
  },
]

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

onMounted(() => {
  initRevealObserver()
})

onUnmounted(() => {
  if (revealObserver) {
    revealObserver.disconnect()
  }
})
</script>

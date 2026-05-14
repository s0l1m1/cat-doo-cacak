export const categories = [
  {
    id: 'hemija',
    label: 'Hemija',
  },
  {
    id: 'hrana',
    label: 'Hrana',
  },
  {
    id: 'kozmetika',
    label: 'Kozmetika',
  },
  {
    id: 'zeleznica',
    label: 'Železnica',
  },
]

const createProduct = ({ id, kategorija, naziv }) => {
  const basePath = `/proizvodi/${kategorija}/${id}`

  return {
    id,
    kategorija,
    naziv,

    // Trenutno koristiš samo _thumb.webp fajlove.
    // Kada kasnije dodaš full slike, promeni slikaFullWebp na `${basePath}.webp`.
    slikaThumbWebp: `${basePath}_thumb.webp`,
    slikaThumbJpg: `${basePath}_thumb.jpg`,
    slikaFullWebp: `${basePath}_thumb.webp`,
    slikaFullJpg: `${basePath}_thumb.jpg`,
  }
}

export const products = [
  createProduct({
    id: 'boca_0_8l',
    kategorija: 'hemija',
    naziv: 'Boca 0,8L',
  }),
  createProduct({
    id: 'boca_zelena',
    kategorija: 'hemija',
    naziv: 'Boca za hemiju (zelena)',
  }),
  createProduct({
    id: 'dozna_1_2l',
    kategorija: 'hemija',
    naziv: 'Dozna 1,2L',
  }),
  createProduct({
    id: 'maxi_color_set',
    kategorija: 'hemija',
    naziv: 'Maxi Color set',
  }),
  createProduct({
    id: 'maxifix',
    kategorija: 'hemija',
    naziv: 'Maxifix lepak',
  }),
  createProduct({
    id: 'top_color_zuta',
    kategorija: 'hemija',
    naziv: 'TOP Color žuta',
  }),

  createProduct({
    id: 'frigo_posuda_bela',
    kategorija: 'hrana',
    naziv: 'Frigo posuda 1,3L bela',
  }),
  createProduct({
    id: 'frigo_posuda_bela1',
    kategorija: 'hrana',
    naziv: 'Frigo posuda 1,3L bela varijanta',
  }),
  createProduct({
    id: 'frigo_posuda_crna',
    kategorija: 'hrana',
    naziv: 'Frigo posuda 1,3L crna',
  }),
  createProduct({
    id: 'frigo_posuda_crna1',
    kategorija: 'hrana',
    naziv: 'Frigo posuda 1,3L crna varijanta',
  }),

  createProduct({
    id: 'bocica_spray_za_nos',
    kategorija: 'kozmetika',
    naziv: 'Bočica spray 20ml',
  }),
  createProduct({
    id: 'dikla_set',
    kategorija: 'kozmetika',
    naziv: 'Set za nokte Dikla',
  }),
  createProduct({
    id: 'lasodent_skidac_seta',
    kategorija: 'kozmetika',
    naziv: 'Skidač laka Lasodent',
  }),
  createProduct({
    id: 'parfemska_sprej_boca',
    kategorija: 'kozmetika',
    naziv: 'Parfemska sprej boca',
  }),
  createProduct({
    id: 'posuda_za_kremu_150ml',
    kategorija: 'kozmetika',
    naziv: 'Posuda za kremu 150ml',
  }),
  createProduct({
    id: 'sampon_boca',
    kategorija: 'kozmetika',
    naziv: 'Boca za šampon',
  }),

  createProduct({
    id: 'eva_podloga_tip_49',
    kategorija: 'zeleznica',
    naziv: 'EVA podloga za betonski prag TIP 49-E1',
  }),
  createProduct({
    id: 'medjusinska_izolacija_tip_49',
    kategorija: 'zeleznica',
    naziv: 'Međusinska izolacija TIP 49-E1',
  }),
  createProduct({
    id: 'vezica_tip_49',
    kategorija: 'zeleznica',
    naziv: 'Vezica TIP 49-E1',
  }),
  createProduct({
    id: 'zavojni_dvodelni_plasticni_umetak',
    kategorija: 'zeleznica',
    naziv: 'Zavojni dvodelni plastični umetak',
  }),
  createProduct({
    id: 'zavojni_dvodelni_plasticni_umetak_3',
    kategorija: 'zeleznica',
    naziv: 'Zavojni dvodelni plastični umetak detalj',
  }),
]
